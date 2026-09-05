import { useEffect, useRef, useState } from 'react';
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useVelocity,
  useTransform,
} from 'framer-motion';

/**
 * CustomCursor — hollow reticle with orbiting particles
 *
 * Design goals this version fixes:
 * 1. NEVER covers text — the ring has a transparent center (border-only,
 *    no fill), so whatever is underneath stays fully readable.
 * 2. mix-blend-mode: difference on the ring/dot means it inverts
 *    whatever color sits beneath it — guaranteed visible on both a
 *    black dark-mode page and a white light-mode page, with zero
 *    hardcoded "readable" color.
 * 3. Two small particles orbit the ring continuously — a distinctive,
 *    sci-fi "targeting reticle" feel instead of a generic dot+circle.
 * 4. Magnetic snap onto buttons/links, velocity stretch on fast moves,
 *    a click ripple, and a floating label chip that sits *beside* the
 *    cursor (not on top of it) so it never blocks the element it names.
 */

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [label, setLabel] = useState('');
  const [ripples, setRipples] = useState([]);

  const targetElRef = useRef(null);
  const rippleId = useRef(0);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const ringSpring = { damping: 22, stiffness: 300, mass: 0.4 };
  const ringX = useSpring(mouseX, ringSpring);
  const ringY = useSpring(mouseY, ringSpring);

  const velocityX = useVelocity(ringX);
  const velocityY = useVelocity(ringY);
  const scaleX = useTransform(velocityX, [-2000, 0, 2000], [1.4, 1, 1.4]);
  const scaleY = useTransform(velocityY, [-2000, 0, 2000], [1.4, 1, 1.4]);
  const rotate = useTransform(
    [velocityX, velocityY],
    ([vx, vy]) => (Math.atan2(vy, vx) * 180) / Math.PI
  );

  useEffect(() => {
    const touchMedia = window.matchMedia('(pointer: coarse)');
    const updateTouch = () => setIsTouch(touchMedia.matches);
    updateTouch();
    touchMedia.addEventListener?.('change', updateTouch);

    const findInteractive = (el) => {
      if (!el || el === document.body) return null;
      if (el.closest) {
        return el.closest(
          'a, button, [role="button"], input, textarea, select, [data-cursor="magnetic"]'
        );
      }
      return null;
    };

    const moveCursor = (e) => {
      if (!targetElRef.current) {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const interactive = findInteractive(e.target);

      if (interactive) {
        setIsPointer(true);
        setLabel(interactive.dataset?.cursorText || '');

        if (interactive.hasAttribute('data-cursor') || interactive.matches('a, button')) {
          targetElRef.current = interactive;
          const rect = interactive.getBoundingClientRect();
          mouseX.set(rect.left + rect.width / 2);
          mouseY.set(rect.top + rect.height / 2);
        }
      } else {
        setIsPointer(false);
        setLabel('');
        targetElRef.current = null;
      }
    };

    const handleMouseOut = (e) => {
      if (targetElRef.current && !e.relatedTarget?.closest?.('a, button, [data-cursor]')) {
        targetElRef.current = null;
      }
    };

    const handleMouseDown = (e) => {
      setIsPressed(true);
      const id = rippleId.current++;
      setRipples((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 600);
    };

    const handleMouseUp = () => setIsPressed(false);
    const handleMouseLeaveDoc = () => setIsVisible(false);
    const handleMouseEnterDoc = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeaveDoc);
    document.addEventListener('mouseenter', handleMouseEnterDoc);

    return () => {
      touchMedia.removeEventListener?.('change', updateTouch);
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeaveDoc);
      document.removeEventListener('mouseenter', handleMouseEnterDoc);
    };
  }, [isVisible, mouseX, mouseY]);

  if (isTouch) return null;

  const ringSize = isPointer ? 54 : 32;

  return (
    <>
      {/* Click ripple burst — thin themed ring expanding outward */}
      <AnimatePresence>
        {ripples.map((r) => (
          <motion.div
            key={r.id}
            className="fixed top-0 left-0 rounded-full pointer-events-none z-[9997]"
            style={{
              left: r.x,
              top: r.y,
              translateX: '-50%',
              translateY: '-50%',
              border: '1.5px solid var(--accent-cyan)',
            }}
            initial={{ width: 6, height: 6, opacity: 0.6 }}
            animate={{ width: 64, height: 64, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          />
        ))}
      </AnimatePresence>

      {/* Reticle group — ring, orbiting particles, crosshair core */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          scaleX,
          scaleY,
          rotate,
        }}
        animate={{
          width: ringSize,
          height: ringSize,
          opacity: isVisible ? 1 : 0,
          scale: isPressed ? 0.8 : 1,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      >
        <div className="relative w-full h-full">
          {/* Hollow ring — border only, transparent center, blend-mode
              guarantees visibility on any background without covering
              whatever text sits behind it */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              border: '1.5px solid var(--text-primary)',
              mixBlendMode: 'difference',
            }}
          />

          {/* Two orbiting particles — continuous rotation, opposite
              directions, distinct sci-fi "locking on" feel */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
          >
            <span
              className="absolute rounded-full"
              style={{
                width: 5,
                height: 5,
                top: -2.5,
                left: '50%',
                marginLeft: -2.5,
                background: 'var(--accent-cyan)',
                boxShadow: '0 0 6px var(--accent-cyan)',
              }}
            />
          </motion.div>

          <motion.div
            className="absolute inset-0"
            animate={{ rotate: -360 }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'linear' }}
          >
            <span
              className="absolute rounded-full"
              style={{
                width: 4,
                height: 4,
                bottom: -2,
                left: '50%',
                marginLeft: -2,
                background: 'var(--accent-purple)',
                boxShadow: '0 0 5px var(--accent-purple)',
              }}
            />
          </motion.div>

          {/* Crosshair core — tiny, blend-mode inverted, never a solid
              block, just a "+" mark so the exact point stays precise */}
          <div
            className="absolute top-1/2 left-1/2"
            style={{ transform: 'translate(-50%, -50%)', mixBlendMode: 'difference' }}
          >
            <div style={{ width: 6, height: 1.5, background: 'var(--text-primary)' }} />
            <div
              style={{
                width: 1.5,
                height: 6,
                background: 'var(--text-primary)',
                position: 'absolute',
                top: -2.25,
                left: 2.25,
              }}
            />
          </div>
        </div>
      </motion.div>

      {/* Floating label — sits beside the cursor, never on top of it,
          so it never covers the element or text it's naming */}
      <AnimatePresence>
        {label && (
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[10000] px-3 py-1.5 rounded-full text-[11px] font-semibold whitespace-nowrap"
            style={{
              x: ringX,
              y: ringY,
              translateX: '20px',
              translateY: '-50%',
              background: 'var(--bg-card)',
              border: '1px solid var(--glass-border)',
              color: 'var(--text-primary)',
              backdropFilter: 'blur(12px)',
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
          >
            {label}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CustomCursor;