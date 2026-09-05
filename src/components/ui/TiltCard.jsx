import { useRef, useCallback, useState } from 'react';

/**
 * TiltCard — hover card with a cursor-following glow spotlight.
 * (3D tilt/rotation removed — the card no longer moves or shakes,
 * only the glow tracks the cursor and the card lifts slightly.)
 */
const TiltCard = ({ children, className = '', glowColor = '45, 212, 191' }) => {
  const cardRef = useRef(null);
  const glowRef = useRef(null);
  const frameRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card || !glowRef.current) return;

    if (frameRef.current) cancelAnimationFrame(frameRef.current);

    frameRef.current = requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      glowRef.current.style.left = `${(x / rect.width) * 100}%`;
      glowRef.current.style.top = `${(y / rect.height) * 100}%`;
    });
  }, []);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden transition-transform duration-300 ease-out hover:-translate-y-1 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glowing spotlight effect — follows cursor, card itself stays still */}
      {isHovered && (
        <div
          ref={glowRef}
          className="absolute pointer-events-none z-10"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '200px',
            height: '200px',
            background: `radial-gradient(circle, rgba(${glowColor}, 0.16) 0%, transparent 70%)`,
            borderRadius: '50%',
          }}
        />
      )}
      {children}
    </div>
  );
};

export default TiltCard;