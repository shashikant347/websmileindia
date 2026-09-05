import { useEffect, useRef, useState } from "react";

const AnimatedCounter = ({
  target,
  suffix = "",
  prefix = "",
  duration = 2000,
  decimals = 0,
}) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      const eased =
        1 - Math.pow(1 - progress, 3);

      const current =
        target * eased;

      setCount(
        decimals > 0
          ? parseFloat(current.toFixed(decimals))
          : Math.floor(current)
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [started, target, duration, decimals]);

  return (
    <span ref={ref}>
      {prefix}
      {decimals > 0
        ? count.toFixed(decimals)
        : count}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;