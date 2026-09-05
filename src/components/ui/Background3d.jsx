import { useEffect, useRef } from 'react';
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

const isLightTheme = () =>
  document.documentElement.getAttribute('data-theme') === 'light';

const Background3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    currentMount.appendChild(renderer.domElement);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    const geometry = new THREE.BufferGeometry();
    const particlesCount = 5000;
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 20;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Light mode needs bigger, more opaque dots for the darker teal to
    // actually read against a white page — dark mode's neon cyan is
    // visible even at a smaller size/opacity, so we don't want it to
    // look too "loud" there.
    const material = new THREE.PointsMaterial({
      color: new THREE.Color(getCssVar('--accent-cyan', '#12CFE3')),
      size: isLightTheme() ? 0.075 : 0.05,
      transparent: true,
      opacity: isLightTheme() ? 1 : 0.85,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Watch for theme toggles (Layout.jsx sets data-theme on <html>)
    // and re-read everything whenever it changes — color, size, opacity.
    const themeObserver = new MutationObserver(() => {
      material.color.set(getCssVar('--accent-cyan', '#12CFE3'));
      material.size = isLightTheme() ? 0.075 : 0.05;
      material.opacity = isLightTheme() ? 1 : 0.85;
      material.needsUpdate = true;

      // Debug — remove once confirmed working
      
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

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
      cancelAnimationFrame(animationId);
      zoomTween.kill();
      themeObserver.disconnect();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      currentMount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-0">
      {/* Ambient glow behind the particles — pure CSS, tied to the
          theme's own tokens, so it flips automatically with data-theme
          and never needs JS. */}
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