import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  MapPin,
  Star,
  Zap,
  Globe,
  Code,
  Smartphone,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Parallax3D } from '../ui/Parallax3D';



const GlobeCanvas = () => {
  const canvasRef = useRef(null);

  // Reads a CSS custom property's live value from :root
  const getCssVar = (name, fallback) => {
    const value = getComputedStyle(document.documentElement)
      .getPropertyValue(name)
      .trim();
    return value || fallback;
  };

  // Converts a "#RRGGBB" string to "r,g,b" for use inside rgba(...)
  const hexToRgb = (hex) => {
    const clean = hex.replace('#', '');
    const bigint = parseInt(clean, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r},${g},${b}`;
  };

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    let angle = 0;
    let animationId;

    const W = 480;
    const H = 480;

    canvas.width = W;
    canvas.height = H;

    const cx = W / 2;
    const cy = H / 2;
    const R = 170;

    // Theme-derived palette, re-read whenever data-theme changes so the
    // globe always matches the current theme's accent tokens.
    let palette = {};

    const refreshPalette = () => {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';

      const cyan = hexToRgb(getCssVar('--accent-cyan', '#12CFE3'));
      const blue = hexToRgb(getCssVar('--accent-blue', '#3B82D0'));
      const purple = hexToRgb(getCssVar('--accent-purple', '#A83BFF'));

      palette = {
        isLight,
        cyan,
        blue,
        purple,
        // Globe body: dark navy sphere works on the dark background,
        // but on a white page it needs to be a soft light-blue sphere
        // instead so it doesn't look like a black hole.
        globeInner: isLight ? '255,255,255' : '30,58,138',
        globeMid: isLight ? `${blue}` : '15,35,100',
        globeOuter: isLight ? '235,244,251' : '3,7,18',
        globeInnerAlpha: isLight ? 0.9 : 0.8,
        globeMidAlpha: isLight ? 0.12 : 0.7,
        globeOuterAlpha: isLight ? 1 : 0.9,
      };
    };

    refreshPalette();

    const themeObserver = new MutationObserver(refreshPalette);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    const drawContinent = (context, x, y, w, h) => {
      context.beginPath();
      context.ellipse(
        x,
        y,
        w,
        h,
        Math.random() * 0.3,
        0,
        Math.PI * 2
      );
      context.fill();
    };

    const drawGlobe = () => {
      ctx.clearRect(0, 0, W, H);

      const outerGlow = ctx.createRadialGradient(cx, cy, R * 0.5, cx, cy, R * 1.5);
      outerGlow.addColorStop(0, `rgba(${palette.blue},0.08)`);
      outerGlow.addColorStop(1, 'rgba(0,0,0,0)');

      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.5, 0, Math.PI * 2);
      ctx.fillStyle = outerGlow;
      ctx.fill();

      const globeGradient = ctx.createRadialGradient(
        cx - R * 0.3, cy - R * 0.3, R * 0.1, cx, cy, R
      );
      globeGradient.addColorStop(0, `rgba(${palette.globeInner},${palette.globeInnerAlpha})`);
      globeGradient.addColorStop(0.5, `rgba(${palette.globeMid},${palette.globeMidAlpha})`);
      globeGradient.addColorStop(1, `rgba(${palette.globeOuter},${palette.globeOuterAlpha})`);

      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = globeGradient;
      ctx.fill();

      const borderGradient = ctx.createRadialGradient(cx, cy, R - 2, cx, cy, R + 8);
      borderGradient.addColorStop(0, `rgba(${palette.cyan},0.8)`);
      borderGradient.addColorStop(1, `rgba(${palette.cyan},0)`);

      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.strokeStyle = borderGradient;
      ctx.lineWidth = 2;
      ctx.stroke();

      const numLat = 7;

      for (let i = 1; i < numLat; i++) {
        const phi = (Math.PI / numLat) * i;
        const radius = R * Math.sin(phi);
        const y = cy + R * Math.cos(phi) * -1;

        ctx.save();
        ctx.beginPath();
        ctx.ellipse(cx, y, radius, radius * 0.25, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${palette.cyan},0.2)`;
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
      }

      const numLon = 8;

      for (let i = 0; i < numLon; i++) {
        const longitudeAngle = (Math.PI / numLon) * i + angle;

        ctx.save();
        ctx.beginPath();
        ctx.ellipse(cx, cy, R * Math.abs(Math.cos(longitudeAngle)), R, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${palette.blue},${Math.abs(Math.cos(longitudeAngle)) * 0.25})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
      }

      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.clip();

      ctx.fillStyle = `rgba(${palette.blue},0.25)`;

      drawContinent(ctx, cx + 40 * Math.cos(angle * 2), cy - 20, 55, 45);
      drawContinent(ctx, cx - 10 + 20 * Math.cos(angle + 0.5), cy - 50, 30, 22);
      drawContinent(ctx, cx - 80 + 30 * Math.cos(angle - 1), cy, 35, 55);
      drawContinent(ctx, cx + 10 + 20 * Math.cos(angle - 0.5), cy + 15, 28, 40);
      drawContinent(ctx, cx + 80 + 20 * Math.cos(angle + 1), cy + 40, 22, 18);

      ctx.restore();

      // Location pin
      const pinX = cx + 50 * Math.cos(angle * 1.5);
      const pinY = cy - 30 + 5 * Math.sin(angle * 2);
      const alpha = 0.6 + 0.4 * Math.sin(Date.now() / 400);

      const pinGlow = ctx.createRadialGradient(pinX, pinY, 0, pinX, pinY, 15);
      pinGlow.addColorStop(0, `rgba(${palette.cyan},${alpha})`);
      pinGlow.addColorStop(1, `rgba(${palette.cyan},0)`);

      ctx.beginPath();
      ctx.arc(pinX, pinY, 15, 0, Math.PI * 2);
      ctx.fillStyle = pinGlow;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(pinX, pinY, 4, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${palette.cyan},${alpha})`;
      ctx.fill();

      // Orbit particles
      for (let i = 0; i < 6; i++) {
        const particleAngle = angle * 0.8 + (Math.PI * 2 / 6) * i;
        const px = cx + (R + 25) * Math.cos(particleAngle);
        const py = cy + (R + 25) * 0.4 * Math.sin(particleAngle);
        const particleAlpha = 0.3 + 0.3 * Math.sin(angle * 3 + i);

        ctx.beginPath();
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${palette.cyan},${particleAlpha})`;
        ctx.fill();
      }

      // Purple orbit
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(cx, cy, R + 40, (R + 40) * 0.2, angle * 0.5, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${palette.purple},0.2)`;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      const orbitX = cx + (R + 40) * Math.cos(-angle * 0.5);
      const orbitY = cy + (R + 40) * 0.2 * Math.sin(-angle * 0.5);

      ctx.beginPath();
      ctx.arc(orbitX, orbitY, 5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${palette.purple},0.8)`;
      ctx.fill();

      const dotGlow = ctx.createRadialGradient(orbitX, orbitY, 0, orbitX, orbitY, 12);
      dotGlow.addColorStop(0, `rgba(${palette.purple},0.5)`);
      dotGlow.addColorStop(1, `rgba(${palette.purple},0)`);

      ctx.beginPath();
      ctx.arc(orbitX, orbitY, 12, 0, Math.PI * 2);
      ctx.fillStyle = dotGlow;
      ctx.fill();

      ctx.restore();

      angle += 0.008;
      animationId = requestAnimationFrame(drawGlobe);
    };

    drawGlobe();

    return () => {
      cancelAnimationFrame(animationId);
      themeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full max-w-[480px] h-auto animate-float-slow"
    />
  );
};

// ============================================================
// SERVICE WORDS
// ============================================================

const slides = [
  {
    label: 'Web Design',
  },
  {
    label: 'Web Development',
  },
  {
    label: 'Digital Marketing',
  },
  {
    label: 'App Development',
  },
  {
    label: 'Software Development',
  },
];

// ============================================================
// HERO SLIDES
// ============================================================

const heroSlides = [
  {
    eyebrow: 'Welcome To Web Smile India',

    heading: (
      <>
        Customized Websites —{' '}
        <span className="gradient-text">
          Lower Price
        </span>{' '}
        and Best Support from{' '}
        <span className="gradient-text-blue-cyan">
          Us
        </span>
      </>
    ),

    desc:
      'Web Smile India offers latest and good looking customized website designs.',

    cta: {
      label: 'My Portfolio',
      to: '/portfolio',
    },
  },

  {
    eyebrow: 'Responsive Websites',

    heading: (
      <>
        Old and Dull Website to the{' '}
        <span className="gradient-text-blue-cyan">
          New Responsive
        </span>{' '}
        Websites
      </>
    ),

    desc:
      'Web Smile India is a leading custom web design & development company based in Noida, India. We create custom website designs.',

    cta: {
      label: 'View Project',
      to: '/portfolio',
    },
  },

  {
    eyebrow: 'Dynamic Websites',

    heading: (
      <>
        Design and Development of Best{' '}
        <span className="gradient-text">
          Dynamic Websites
        </span>
      </>
    ),

    desc:
      'Delivering highly scalable solutions with robust coding and flexible functionalities, Web Smile India is an industry leader in pioneering CMS for websites.',

    cta: {
      label: 'View Project',
      to: '/portfolio',
    },
  },

  {
    eyebrow: 'Customized Softwares',

    heading: (
      <>
        Original Design Features With High{' '}
        <span className="gradient-text-blue-cyan">
          Quality Code
        </span>
      </>
    ),

    desc:
      'We provide specific pioneer cloud-based applications across all range of businesses and industries.',

    cta: {
      label: 'About Me',
      to: '/about',
    },
  },

  {
    eyebrow: 'Digital Marketing',

    heading: (
      <>
        We're a Digital Agency Focused on Creative and{' '}
        <span className="gradient-text">
          Results-Driven Solutions
        </span>
      </>
    ),

    desc:
      'Explore unlimited opportunities with our digital marketing services. Understand what converts customers and frame your strategy accordingly.',

    cta: {
      label: 'About Me',
      to: '/about',
    },
  },
];

// ============================================================
// HERO SECTION
// ============================================================

const HeroSection = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [heroIndex, setHeroIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // ----------------------------------------------------------
  // Rotating "We Build" Text
  // ----------------------------------------------------------

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex(
        (prev) => (prev + 1) % slides.length
      );
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // ----------------------------------------------------------
  // Hero Slider Autoplay
  // ----------------------------------------------------------

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);

      setHeroIndex(
        (prev) =>
          (prev + 1) % heroSlides.length
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // ----------------------------------------------------------
  // Slider Controls
  // ----------------------------------------------------------

  const goTo = (index) => {
    setDirection(
      index > heroIndex ? 1 : -1
    );

    setHeroIndex(index);
  };

  const goPrev = () => {
    setDirection(-1);

    setHeroIndex(
      (prev) =>
        (prev - 1 + heroSlides.length) %
        heroSlides.length
    );
  };

  const goNext = () => {
    setDirection(1);

    setHeroIndex(
      (prev) =>
        (prev + 1) % heroSlides.length
    );
  };

  const current = heroSlides[heroIndex];

  // ----------------------------------------------------------
  // Framer Motion Variants
  // ----------------------------------------------------------

  const variants = {
    enter: (dir) => ({
      opacity: 0,
      x: dir > 0 ? 40 : -40,
    }),

    center: {
      opacity: 1,
      x: 0,
    },

    exit: (dir) => ({
      opacity: 0,
      x: dir > 0 ? -40 : 40,
    }),
  };

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/* ======================================================
          BACKGROUND GLOWS
      ====================================================== */}

      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[var(--accent-blue)]/10 blur-3xl" />

        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[var(--accent-cyan)]/8 blur-3xl" />

        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-[var(--accent-purple)]/5 blur-3xl" />
      </div>

      {/* ======================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="container-custom relative z-10 w-full py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-16 lg:gap-28 xl:gap-28 items-center relative top-12">

          {/* ==================================================
              LEFT CONTENT
          ================================================== */}

          <div className="flex flex-col">

            {/* ------------------------------------------------
                Badge
            ------------------------------------------------ */}

            {/* <div
              className="tag-badge inline-flex self-start items-center gap-2 border border-cyan-400/20 bg-cyan-400/5 text-cyan-200 mb-7 -translate-y-6"
              style={{
                animation:
                  'slide-up 0.6s ease forwards',
              }}
            >
              <MapPin size={12} />

              <span>
                Based in Noida, India · 8+ Years of Excellence
              </span>
            </div> */}

            {/* ------------------------------------------------
                Hero Content
            ------------------------------------------------ */}

            <div className="relative min-h-[330px] sm:min-h-[300px] md:min-h-[290px] ">

              <AnimatePresence
                mode="wait"
                custom={direction}
              >
                <motion.div
                  key={heroIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: 0.45,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="flex flex-col items-start"
                >

                  {/* Eyebrow */}

                  <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-cyan)] mb-5">
                    {current.eyebrow}
                  </span>

                  {/* Heading */}

                  <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] xl:text-[4rem] font-black text-[var(--text-primary)] leading-[1.05] tracking-[-0.04em] max-w-2xl">
                    {current.heading}
                  </h1>

                  {/* Description */}

                  <p className="mt-6 text-base hero-description sm:text-lg text-[var(--text-muted)] max-w-xl leading-7">
                    {current.desc}
                  </p>

                  {/* Primary CTA */}

                  <Link
                    to={current.cta.to}
                    className="btn-primary text-base px-8 py-3.5 rounded-full hero-button inline-flex items-center gap-2 mt-6"
                  >
                    {current.cta.label}

                    <ArrowRight size={18} />
                  </Link>

                </motion.div>
              </AnimatePresence>

            </div>

            {/* ==================================================
                SLIDER CONTROLS
            ================================================== */}

            <div className="flex items-center gap-5 mt-2 mb-8">

              {/* Dots */}

              <div className="flex items-center gap-2">
                {heroSlides.map((slide, index) => (
                  <button
                    key={slide.eyebrow}
                    type="button"
                    onClick={() => goTo(index)}
                    aria-label={`Go to slide ${
                      index + 1
                    }: ${slide.eyebrow}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === heroIndex
                        ? 'w-8 bg-[var(--accent-cyan)]'
                        : 'w-1.5 bg-[var(--border-strong)] hover:bg-[var(--text-faint)]'
                    }`}
                  />
                ))}
              </div>

              {/* Arrows */}

              <div className="flex items-center gap-2 ml-auto">

                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Previous slide"
                  className="w-9 h-9 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--accent-cyan)]/40 hover:bg-[var(--accent-cyan)]/5 transition-all"
                >
                  <ChevronLeft size={16} />
                </button>

                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next slide"
                  className="w-9 h-9 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--accent-cyan)]/40 hover:bg-[var(--accent-cyan)]/5 transition-all"
                >
                  <ChevronRight size={16} />
                </button>

              </div>

            </div>

            {/* ==================================================
                WE BUILD
            ================================================== */}

            <div className="flex flex-wrap items-center gap-3 text-lg md:text-2xl font-semibold mb-8">

              <span className="text-[var(--text-muted)]">
                We Build
              </span>

              <div className="relative overflow-hidden h-9 md:h-10">

                <div className="grid">

                  {slides.map((slide, index) => (
                    <span
                      key={slide.label}
                      className="[grid-area:1/1] flex items-center whitespace-nowrap font-bold transition-all duration-500 ease-out"
                      style={{
                        backgroundImage:
                          'linear-gradient(90deg, var(--accent-teal-soft), var(--accent-marigold-soft))',
                        WebkitBackgroundClip:
                          'text',
                        backgroundClip: 'text',
                        color: 'transparent',

                        transform:
                          index === slideIndex
                            ? 'translateY(0)'
                            : index < slideIndex
                            ? 'translateY(-120%)'
                            : 'translateY(120%)',

                        opacity:
                          index === slideIndex
                            ? 1
                            : 0,
                      }}
                    >
                      {slide.label}
                    </span>
                  ))}

                </div>

              </div>

            </div>

            {/* ==================================================
                STATS
            ================================================== */}

            <div className="flex flex-wrap items-center gap-x-10 gap-y-5 mb-8">

              {[
                {
                  value: '578+',
                  label: 'Projects',
                },
                {
                  value: '437+',
                  label: 'Clients',
                },
                {
                  value: '8+',
                  label: 'Years',
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-left"
                >
                  <div className="text-2xl font-black gradient-text-blue-cyan">
                    {stat.value}
                  </div>

                  <div className="text-[var(--text-muted)] text-xs mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}

            </div>

            {/* ==================================================
                SECONDARY CTA
            ================================================== */}

            {/* <div className="mb-7">

              <Link
                to="/contact"
                className="btn-outline text-base px-8 py-3.5 rounded-full inline-flex"
              >
                Get Free Quote
              </Link>

            </div> */}

            {/* ==================================================
                TRUST INDICATOR
            ================================================== */}

            <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--text-muted)]">

              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={14}
                    className="text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              <span>
                Trusted by 437+ businesses across India
              </span>

            </div>

          </div>

          {/* ==================================================
              RIGHT — GLOBE
          ================================================== */}

          <Parallax3D
            offset={30}
            speed={0.5}
           className="relative flex items-center justify-center min-h-[480px] lg:min-h-[560px] -translate-y-20 lg:translate-x-16"
          >

            {/* ------------------------------------------------
                Floating Card — Clean Code
            ------------------------------------------------ */}

            <motion.div
              className="absolute top-4 left-0 lg:-left-4 glass-card p-3 flex items-center gap-2 text-xs z-20 border border-cyan-400/20 animate-float"
              style={{
                animationDelay: '0s',
              }}
              whileHover={{
                scale: 1.05,
                y: -5,
              }}
            >
              <Code
                size={14}
                className="text-cyan-400"
              />

              <span className="text-[var(--text-primary)]">
                Clean Code
              </span>
            </motion.div>

            {/* ------------------------------------------------
                Floating Card — Global Reach
            ------------------------------------------------ */}

            <motion.div
              className="absolute top-1/3 right-0 lg:-right-4 glass-card p-3 flex items-center gap-2 text-xs z-20 border border-violet-400/20 animate-float"
              style={{
                animationDelay: '1s',
              }}
              whileHover={{
                scale: 1.05,
                y: -5,
              }}
            >
              <Globe
                size={14}
                className="text-violet-400"
              />

              <span className="text-[var(--text-primary)]">
                Global Reach
              </span>
            </motion.div>

            {/* ------------------------------------------------
                Floating Card — Mobile First
            ------------------------------------------------ */}

            <motion.div
              className="absolute bottom-8 left-0 lg:-left-4 glass-card p-3 flex items-center gap-2 text-xs z-20 border border-blue-400/20 animate-float"
              style={{
                animationDelay: '2s',
              }}
              whileHover={{
                scale: 1.05,
                y: -5,
              }}
            >
              <Smartphone
                size={14}
                className="text-blue-400"
              />

              <span className="text-[var(--text-primary)]">
                Mobile First
              </span>
            </motion.div>

            {/* ------------------------------------------------
                Floating Card — Fast Delivery
            ------------------------------------------------ */}

            <motion.div
              className="absolute top-6 right-8 lg:right-12 glass-card p-3 flex items-center gap-2 text-xs z-20 border border-amber-400/20 animate-float"
              style={{
                animationDelay: '0.5s',
              }}
              whileHover={{
                scale: 1.05,
                y: -5,
              }}
            >
              <Zap
                size={14}
                className="text-amber-400"
              />

              <span className="text-[var(--text-primary)]">
                Fast Delivery
              </span>
            </motion.div>

            {/* ------------------------------------------------
                Globe
            ------------------------------------------------ */}

            <motion.div
             className="relative flex items-center justify-center"
    style={{
      perspective: "1200px",
      transformStyle: "preserve-3d",
    }}
            >
              <GlobeCanvas />
            </motion.div>

          </Parallax3D>

        </div>

        {/* ======================================================
            SCROLL INDICATOR
        ====================================================== */}

        <div className="flex justify-center mt-12 md:mt-16">
          <div className="scroll-indicator animate-bounce" />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;