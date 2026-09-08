import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

// Reads a CSS custom property's live value from :root — this is how
// we stay theme-aware without ever hardcoding a color in JS.
const getCssVar = (name, fallback) => {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
  return value || fallback;
};

const readTheme = () =>
  document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';

// NOTE: This component is meant to be rendered INSIDE a single
// section (e.g. only the Hero) as an absolutely-positioned background,
// not globally in Layout. The parent section must have
// `position: relative` and `overflow: hidden` so the canvas stays
// clipped to that section and scrolls away with it.
//
// It is DARK-MODE ONLY: in light mode this renders nothing at all —
// no canvas, no dots, no ambient glow — rather than trying to
// recolor the particles to "work" on a white background.
const Background3D = () => {
  const wrapperRef = useRef(null);
  const mountRef = useRef(null);

  // Tracks the current theme so we know whether to mount the
  // three.js scene at all.
  const [theme, setTheme] = useState(readTheme);

  useEffect(() => {
    const themeObserver = new MutationObserver(() => setTheme(readTheme()));
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });
    return () => themeObserver.disconnect();
  }, []);

  const isDark = theme === 'dark';

  useEffect(() => {
    // Light mode: don't build the scene at all.
    if (!isDark) return;

    const wrapper = wrapperRef.current;
    const currentMount = mountRef.current;
    if (!wrapper || !currentMount) return;

    const scene = new THREE.Scene();

    const getSize = () => ({
      width: wrapper.clientWidth || window.innerWidth,
      height: wrapper.clientHeight || window.innerHeight,
    });

    let { width, height } = getSize();

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    currentMount.appendChild(renderer.domElement);

    const handleResize = () => {
      const size = getSize();
      camera.aspect = size.width / size.height;
      camera.updateProjectionMatrix();
      renderer.setSize(size.width, size.height);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(wrapper);
    window.addEventListener('resize', handleResize);

    const geometry = new THREE.BufferGeometry();
    const particlesCount = 5000;
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 20;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: new THREE.Color(getCssVar('--accent-cyan', '#12CFE3')),
      size: 0.05,
      transparent: true,
      opacity: 0.85,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      points.rotation.y += 0.0005;
      points.rotation.x += 0.0002;
      renderer.render(scene, camera);
    };
    animate();

    const zoomTween = gsap.to(camera.position, {
      z: 4,
      duration: 2,
      ease: 'power2.inOut',
      repeat: -1,
      yoyo: true,
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationId);
      zoomTween.kill();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      currentMount.removeChild(renderer.domElement);
    };
    // Re-run whenever theme flips: dark->light tears the scene down
    // (via the cleanup above), light->dark builds a fresh one.
  }, [isDark]);

  // Light mode: render nothing — no canvas, no glow, nothing.
  if (!isDark) return null;

  return (
    <div ref={wrapperRef} className="absolute inset-0 z-0 pointer-events-none">
      {/* Ambient glow behind the particles — dark mode only, since
          the whole component returns null in light mode above. */}
      <div
        className="
          absolute inset-0 pointer-events-none
          bg-[radial-gradient(circle_at_50%_40%,var(--accent-cyan)_0%,transparent_55%)]
          opacity-[0.08]
        "
      />
      <div ref={mountRef} className="absolute inset-0" />
    </div>
  );
};

export default Background3D;