import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * 3D Parallax Component with Offset Effects
 * Creates a depth-based parallax effect using transform and perspective
 */
export const Parallax3D = ({ children, offset = 50, speed = 0.5, className = '' }) => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, 
    [0, 1000], 
    [0, offset * speed]
  );

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
};

/**
 * 3D Card Component with Perspective and Tilt on Scroll
 */
export const Card3D = ({ children, className = '' }) => {
  const ref = useRef(null);
  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const rotX = ((e.clientY - centerY) / rect.height) * 10;
    const rotY = ((e.clientX - centerX) / rect.width) * -10;
    
    setRotationX(rotX);
    setRotationY(rotY);
  };

  const handleMouseLeave = () => {
    setRotationX(0);
    setRotationY(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
      className={className}
    >
      <motion.div
        animate={{
          rotateX: rotationX,
          rotateY: rotationY,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 60 }}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

/**
 * Floating 3D Element with Dynamic Offset
 * Creates a floating effect that responds to scroll
 */
export const Float3D = ({ 
  children, 
  speed = 1, 
  rotationRange = { x: 10, y: 10 },
  className = '' 
}) => {
  const ref = useRef(null);
  const { scrollY } = useScroll();

  const rotateX = useTransform(
    scrollY,
    [0, 1000],
    [-rotationRange.x, rotationRange.x]
  );

  const rotateY = useTransform(
    scrollY,
    [0, 1000],
    [-rotationRange.y, rotationRange.y]
  );

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Offset Layers Component
 * Creates multiple layers with different scroll speeds for depth effect
 */
export const OffsetLayers = ({ 
  layers = [],
  className = '' 
}) => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {layers.map((layer, index) => {
        const speed = 0.5 + (index * 0.1);
        const y = useTransform(scrollY, [0, 1000], [0, -100 * speed]);

        return (
          <motion.div
            key={index}
            style={{
              y,
              position: layer.absolute ? 'absolute' : 'relative',
              zIndex: layer.zIndex || index,
              ...layer.style,
            }}
            className={layer.className}
          >
            {layer.content}
          </motion.div>
        );
      })}
    </div>
  );
};

/**
 * Scroll Reveal with 3D Rotation
 * Reveals elements with 3D rotation effect on scroll
 */
export const ScrollReveal3D = ({ 
  children, 
  direction = 'up',
  className = '' 
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'start 0.1'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  
  const getRotation = () => {
    switch (direction) {
      case 'up': return { rotateX: useTransform(scrollYProgress, [0, 1], [45, 0]) };
      case 'down': return { rotateX: useTransform(scrollYProgress, [0, 1], [-45, 0]) };
      case 'left': return { rotateY: useTransform(scrollYProgress, [0, 1], [-45, 0]) };
      case 'right': return { rotateY: useTransform(scrollYProgress, [0, 1], [45, 0]) };
      default: return {};
    }
  };

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        scale,
        transformStyle: 'preserve-3d',
        ...getRotation(),
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Parallax3D;
