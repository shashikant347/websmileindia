import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

// Reads a CSS custom property's live value from :root — keeps the
// particle colors matching whatever theme (dark/light) is active
// when the preloader first mounts, with a safe fallback if the
// variable isn't set yet.
const getCssVar = (name, fallback) => {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
  return value || fallback;
};

/**
 * Builds a flat list of [x, y] pixel positions where the given text
 * is drawn opaque on an offscreen canvas. Sampling every `step` pixels
 * keeps the particle count manageable instead of one particle per
 * pixel.
 */
const sampleTextPixels = (text, canvasWidth, canvasHeight, fontSize, step) => {
  const canvas = document.createElement('canvas');
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#fff';
  ctx.font = `800 ${fontSize}px Manrope, sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, canvasWidth / 2, canvasHeight / 2);

  const { data } = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
  const points = [];

  for (let y = 0; y < canvasHeight; y += step) {
    for (let x = 0; x < canvasWidth; x += step) {
      const alpha = data[(y * canvasWidth + x) * 4 + 3];
      if (alpha > 128) {
        points.push([x - canvasWidth / 2, -(y - canvasHeight / 2)]);
      }
    }
  }

  return points;
};

const ParticlePreloader = ({ onFinish }) => {
  const mountRef = useRef(null);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();

    // Orthographic camera: 1 world unit = 1 screen pixel, matched to
    // the current window size. This is what makes the pixel positions
    // sampled from the canvas map directly onto the screen correctly,
    // regardless of camera distance — a perspective camera's frustum
    // width depends on distance/FOV and does not line up with raw
    // pixel coordinates, which was the earlier bug.
    const camera = new THREE.OrthographicCamera(
      -width / 2, width / 2,
      height / 2, -height / 2,
      0.1, 2000
    );
    camera.position.z = 500;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // Text is sampled at a fixed resolution, then scaled to fit the
    // viewport at render time so it looks right on any screen size.
    const isSmallScreen = width < 640;
    const fontSize = isSmallScreen ? 70 : 110;
    const canvasWidth = isSmallScreen ? 900 : 1400;
    const canvasHeight = 220;
    const step = isSmallScreen ? 4 : 3;

    const pixels = sampleTextPixels('Web Smile India', canvasWidth, canvasHeight, fontSize, step);
    const particleCount = pixels.length;

    // Scale factor converts sampled canvas pixels into on-screen
    // pixels that span ~70% of the viewport width. Since the camera
    // is orthographic and matched to window pixels, this scale now
    // corresponds directly and correctly to what's visible.
    const worldScale = (width * 0.7) / canvasWidth;

    const targetPositions = new Float32Array(particleCount * 3);
    const startPositions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const cyan = new THREE.Color(getCssVar('--accent-cyan', '#12CFE3'));
    const purple = new THREE.Color(getCssVar('--accent-purple', '#A83BFF'));

    // Scatter radius scales with the viewport so particles start
    // spread across (and a bit beyond) the visible screen, then fly
    // inward to form the text.
    const scatterSpan = Math.max(width, height);

    for (let i = 0; i < particleCount; i++) {
      const [px, py] = pixels[i];

      targetPositions[i * 3] = px * worldScale;
      targetPositions[i * 3 + 1] = py * worldScale;
      targetPositions[i * 3 + 2] = (Math.random() - 0.5) * 40;

      const radius = scatterSpan * (0.45 + Math.random() * 0.35);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      startPositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      startPositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      startPositions[i * 3 + 2] = radius * Math.cos(phi) * 0.3;

      // Color gradient across the width of the text, cyan → purple.
      const t = (px + canvasWidth / 2) / canvasWidth;
      const mixed = cyan.clone().lerp(purple, t);
      colors[i * 3] = mixed.r;
      colors[i * 3 + 1] = mixed.g;
      colors[i * 3 + 2] = mixed.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(startPositions.slice(), 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: isSmallScreen ? 2.4 : 3.2,
      sizeAttenuation: false, // fixed pixel size, since the camera is orthographic
      vertexColors: true,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    let animationId;
    const render = () => {
      animationId = requestAnimationFrame(render);
      points.rotation.y = Math.sin(Date.now() / 4000) * 0.04;
      renderer.render(scene, camera);
    };
    render();

    // Animate: fade the particle cloud in while each particle flies
    // from its scattered start position to its target text position.
    // A single tweened `progress` value drives a manual lerp each
    // frame — this is the only shape the particles ever move toward,
    // so there is no intermediate morph through any other letter or
    // symbol.
    const progressState = { value: 0 };
    const positionAttr = geometry.getAttribute('position');

    gsap.to(material, { opacity: 1, duration: 0.6, ease: 'power1.out' });

    gsap.to(progressState, {
      value: 1,
      duration: 1.8,
      delay: 0.15,
      ease: 'power3.out',
      onUpdate: () => {
        const t = progressState.value;
        for (let i = 0; i < particleCount; i++) {
          positionAttr.array[i * 3] =
            startPositions[i * 3] + (targetPositions[i * 3] - startPositions[i * 3]) * t;
          positionAttr.array[i * 3 + 1] =
            startPositions[i * 3 + 1] + (targetPositions[i * 3 + 1] - startPositions[i * 3 + 1]) * t;
          positionAttr.array[i * 3 + 2] =
            startPositions[i * 3 + 2] + (targetPositions[i * 3 + 2] - startPositions[i * 3 + 2]) * t;
        }
        positionAttr.needsUpdate = true;
      },
      onComplete: () => {
        gsap.delayedCall(0.7, () => setExiting(true));
      },
    });

    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.left = -w / 2;
      camera.right = w / 2;
      camera.top = h / 2;
      camera.bottom = -h / 2;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      gsap.killTweensOf(progressState);
      gsap.killTweensOf(material);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, []);

  useEffect(() => {
    if (exiting) {
      const t = setTimeout(() => onFinish?.(), 550);
      return () => clearTimeout(t);
    }
  }, [exiting, onFinish]);

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden"
      style={{
        background: 'var(--bg-primary)',
        opacity: exiting ? 0 : 1,
        transition: 'opacity 0.55s ease',
        pointerEvents: exiting ? 'none' : 'auto',
      }}
    >
      <div ref={mountRef} className="absolute inset-0" />
    </div>
  );
};

export default ParticlePreloader;