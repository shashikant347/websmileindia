import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      init();
    };

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;

        this.size = Math.random() * 1.8 + 0.5;

        this.speedX = (Math.random() - 0.5) * 0.35;
        this.speedY = (Math.random() - 0.5) * 0.35;

        this.opacity = Math.random() * 0.45 + 0.15;

        this.opacityDelta =
          (Math.random() - 0.5) * 0.008;

        const colors = [
          '18, 207, 227',   // cyan
          '59, 130, 208',   // blue
          '168, 59, 255',   // purple
          '201, 54, 232',   // pink
        ];

        this.color =
          colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        this.opacity += this.opacityDelta;

        if (this.opacity <= 0.1 || this.opacity >= 0.65) {
          this.opacityDelta *= -1;
        }

        if (
          this.x < -20 ||
          this.x > window.innerWidth + 20 ||
          this.y < -20 ||
          this.y > window.innerHeight + 20
        ) {
          this.reset();
        }
      }

      draw() {
        ctx.beginPath();

        ctx.arc(
          this.x,
          this.y,
          this.size,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;

        ctx.fill();
      }
    }

    class GlowParticle extends Particle {
      constructor() {
        super();

        this.size = Math.random() * 3 + 1;

        const colors = [
          '18, 207, 227',
          '168, 59, 255',
          '201, 54, 232',
        ];

        this.color =
          colors[Math.floor(Math.random() * colors.length)];

        this.opacity = Math.random() * 0.25 + 0.08;
      }

      draw() {
        const gradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.size * 5
        );

        gradient.addColorStop(
          0,
          `rgba(${this.color}, ${this.opacity})`
        );

        gradient.addColorStop(
          1,
          `rgba(${this.color}, 0)`
        );

        ctx.beginPath();

        ctx.arc(
          this.x,
          this.y,
          this.size * 5,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];

      for (let i = 0; i < 120; i++) {
        particles.push(new Particle());
      }

      for (let i = 0; i < 15; i++) {
        particles.push(new GlowParticle());
      }
    };

    const drawGrid = () => {
      ctx.strokeStyle = 'rgba(59, 130, 208, 0.035)';
      ctx.lineWidth = 1;

      const spacing = 80;

      for (let x = 0; x < window.innerWidth; x += spacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, window.innerHeight);
        ctx.stroke();
      }

      for (
        let y = 0;
        y < window.innerHeight;
        y += spacing
      ) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(window.innerWidth, y);
        ctx.stroke();
      }
    };

    const animate = () => {
      ctx.clearRect(
        0,
        0,
        window.innerWidth,
        window.innerHeight
      );

      drawGrid();

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: 0,
        opacity: 1,
      }}
    />
  );
};

export default ParticleBackground;