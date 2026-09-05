import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onFinish }) => {
  const [count, setCount] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const duration = 1400; // ms to count 0 -> 100
    const start = performance.now();

    let raf;
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.floor(progress * 100));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        // small hold, then trigger exit
        setTimeout(() => setExiting(true), 250);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (exiting) {
      const t = setTimeout(() => onFinish?.(), 700);
      return () => clearTimeout(t);
    }
  }, [exiting, onFinish]);

  return (
    <AnimatePresence>
      {!exiting || true ? (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-[var(--bg-primary)]"
          initial={{ opacity: 1 }}
          animate={{ opacity: exiting ? 0 : 1 }}
          transition={{ duration: 0.6, delay: exiting ? 0.35 : 0 }}
          style={{ pointerEvents: exiting ? 'none' : 'auto' }}
        >
          {/* Two panels that slide away to reveal the site */}
          <motion.div
            className="absolute inset-y-0 left-0 w-1/2 bg-[var(--bg-secondary)]"
            initial={{ x: 0 }}
            animate={{ x: exiting ? '-100%' : 0 }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            className="absolute inset-y-0 right-0 w-1/2 bg-[var(--bg-secondary)]"
            initial={{ x: 0 }}
            animate={{ x: exiting ? '100%' : 0 }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          />

          {/* Center content */}
          <motion.div
            className="relative z-10 flex flex-col items-center gap-6"
            initial={{ opacity: 1 }}
            animate={{ opacity: exiting ? 0 : 1, y: exiting ? -12 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-baseline gap-2">
              <span
                className="text-3xl sm:text-4xl font-light tracking-tight text-[var(--text-primary)]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Web Smile
              </span>
              <span
                className="text-3xl sm:text-4xl font-black tracking-tight"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--accent-marigold)' }}
              >
                India
              </span>
            </div>

            {/* Progress bar */}
            <div className="w-48 sm:w-56 h-[2px] bg-[var(--border-strong)] rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: 'linear-gradient(90deg, var(--accent-marigold), var(--accent-teal-soft))' }}
                initial={{ width: '0%' }}
                animate={{ width: `${count}%` }}
                transition={{ duration: 0.05, ease: 'linear' }}
              />
            </div>

            {/* Counter */}
            <div
              className="text-xs font-semibold tracking-[0.3em] text-[var(--text-faint)]"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {String(count).padStart(2, '0')}%
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default Preloader;