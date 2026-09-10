import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  ArrowRight,
  FolderOpen,
  Users,
  Clock3,
  Sparkles,
} from 'lucide-react';

import ScrollReveal from '../ui/ScrollReveal';
import AnimatedCounter from '../ui/AnimatedCounter';
import { company } from '../../data/siteData';

const features = [
  'Bespoke Web & App Development',
  'Data-Driven Digital Marketing',
  'Enterprise Software Solutions',
  'Strategic UI/UX Design',
  'Robust E-Commerce Platforms',
  '24/7 Dedicated Support',
];

const AboutSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-custom">

        {/* SECTION HEADER */}
        <ScrollReveal
          direction="up"
          distance={50}
          once={true}
        >
          <div className="w-full flex flex-col items-center text-center">

            <div className="flex justify-center w-full">
              <span className="tag-badge">
                <Sparkles size={14} />
                Who We Are
              </span>
            </div>

            <h2
              className="
                !m-0
                !w-full
                mt-6
                text-center
                mx-auto
                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
                font-black
                text-[var(--text-primary)]
                leading-[1.08]
              "
            >
              Building Digital
              <br />
              <span className="gradient-text-blue-cyan">
                Experiences That Matter
              </span>
            </h2>

            <p
              className="
                !m-0
                mt-6
                w-full
                max-w-2xl
                mx-auto
                text-center
                text-[var(--text-muted)]
                text-base
                sm:text-lg
                leading-relaxed
              "
            >
              We combine technology, creativity, and strategy to build
              digital experiences that drive growth.
            </p>

          </div>
        </ScrollReveal>

        {/* MAIN CONTENT */}
        <div
          className="
            mt-14
            lg:mt-20
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-12
            lg:gap-32
            items-center
          "
        >

          {/* LEFT IMAGE */}
          <ScrollReveal
            direction="right"
            distance={80}
            once={true}
            duration={1000}
          >
            <div className="relative">

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-[var(--border)]
                  bg-[var(--bg-card-soft)]
                  shadow-2xl
                  aspect-[4/3]
                "
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=85&w=1200"
                  alt="Web Smile India Team"
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/80
                    via-black/20
                    to-transparent
                  "
                />

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    p-6
                    sm:p-8
                  "
                >
                  <p
                    className="
                      !m-0
                      text-[var(--accent-cyan)]
                      text-xs
                      sm:text-sm
                      font-bold
                      uppercase
                      tracking-[0.2em]
                    "
                  >
                    Web Smile India
                  </p>

                  <h3
                    className="
                      !m-0
                      mt-2
                      text-xl
                      sm:text-2xl
                      font-black
text-white
                    "
                  >
                    Your Digital Growth Partner
                  </h3>

                  <p
                    className="
                      !m-0
                      mt-2
                      text-sm
text-white/70                      max-w-md
                    "
                  >
                    Turning ideas into meaningful digital experiences.
                  </p>
                </div>
              </div>

              {/* FLOATING PROJECT CARD */}
              <div
                className="
                  absolute
                  -bottom-6
                  -right-4
                  sm:-right-6
                  glass-card
                  px-5
                  py-4
                  min-w-[150px]
                  animate-float
                "
              >
                <div className="flex items-center gap-3">

                  <div
                    className="
                      w-10
                      h-10
                      rounded-xl
                      bg-[var(--accent-cyan)]/10
                      border
                      border-[var(--accent-cyan)]/20
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <FolderOpen
                      size={19}
                      className="text-[var(--accent-cyan)]"
                    />
                  </div>

                  <div>
                    <div className="text-xl font-black text-[var(--text-primary)]">
                      <AnimatedCounter
                        target={company.completedProjects}
                        suffix="+"
                      />
                    </div>

                    <p className="!m-0 text-[11px] text-[var(--text-faint)]">
                      Projects
                    </p>
                  </div>

                </div>
              </div>

              {/* FLOATING CLIENT CARD */}
              <div
                className="
                  absolute
                  -top-5
                  -left-4
                  sm:-left-6
                  glass-card
                  px-5
                  py-4
                  min-w-[150px]
                "
              >
                <div className="flex items-center gap-3">

                  <div
                    className="
                      w-10
                      h-10
                      rounded-xl
                      bg-[var(--accent-blue)]/10
                      border
                      border-[var(--accent-blue)]/20
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Users
                      size={19}
                      className="text-[var(--accent-blue)]"
                    />
                  </div>

                  <div>
                    <div className="text-xl font-black text-[var(--text-primary)]">
                      <AnimatedCounter
                        target={company.satisfiedClients}
                        suffix="+"
                      />
                    </div>

                    <p className="!m-0 text-[11px] text-[var(--text-faint)]">
                      Happy Clients
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </ScrollReveal>

          {/* RIGHT SIDE */}
          <ScrollReveal
            direction="left"
            distance={80}
            once={true}
            delay={200}
            duration={1000}
          >
            <div className="lg:pt-6">

              {/* WHAT WE DO */}
              <div className="flex items-center gap-3 mb-5">

                <div className="w-8 h-[2px] bg-[var(--accent-cyan)]" />

                <span
                  className="
                    text-[var(--accent-cyan)]
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.2em]
                  "
                >
                  What We Do
                </span>

              </div>

              {/* HEADING */}
              <h3
                className="
                  !m-0
                  text-3xl
                  sm:text-4xl
                  font-black
                  text-[var(--text-primary)]
                  leading-[1.15]
                "
              >
                We Create Solutions
                <br />

                <span className="gradient-text-blue-cyan">
                  Built For Growth
                </span>
              </h3>

              {/* DESCRIPTION */}
              <p
                className="
                  !m-0
                  mt-4
                  text-[var(--text-muted)]
                  text-sm
                  sm:text-base
                  leading-relaxed
                  max-w-lg
                "
              >
                We blend technology, creativity, and strategy to build digital
                solutions that drive growth.
              </p>

              <p
                className="
                  !m-0
                  mt-3
                  text-[var(--text-faint)]
                  text-sm
                  sm:text-base
                  leading-relaxed
                  max-w-lg
                "
              >
                From websites and apps to enterprise software and digital
                marketing, we turn ideas into scalable, high-impact digital
                experiences.
              </p>

              {/* SERVICE SLIDER */}
<div className="mt-7">

  <div
    className="
      relative
      min-h-[64px]
      overflow-hidden
      mt-4
      mb-2
      py-2
    "
  >
    <div
      key={activeFeature}
      className="
        absolute
        inset-0
        flex
        items-center
        px-2
        animate-service-slide
      "
    >
      <span
        className="
          gradient-text-blue-cyan
          text-base
          sm:text-lg
          lg:text-xl
          font-bold
          leading-snug
        "
      >
        {features[activeFeature]}
      </span>

      <ArrowRight
        size={18}
        className="
          ml-auto
          text-[var(--accent-cyan)]
          flex-shrink-0
        "
      />
    </div>
  </div>

  {/* SLIDER DOTS */}
  <div className="flex items-center gap-1.5 mt-3">
    {features.map((_, index) => (
      <button
        key={index}
        onClick={() => setActiveFeature(index)}
        aria-label={`Show service ${index + 1}`}
        className={`
          h-1.5
          rounded-full
          transition-all
          duration-500
          ${
            activeFeature === index
              ? 'w-8 bg-[var(--accent-cyan)]'
              : 'w-1.5 bg-[var(--border-strong)]'
          }
        `}
      />
    ))}
  </div>
</div>

              {/* STATS + BUTTON */}
              <div className="mt-10">

               {/* STATS */}
<div
  className="
    grid
    grid-cols-3
    gap-2
  "
>

  {/* EXPERIENCE */}
  <div
    className="
      rounded-xl
      border
      border-[var(--border)]
      bg-[var(--bg-card-soft)]
      px-3
      py-2.5
      transition-all
      duration-300
      hover:border-[var(--accent-cyan)]/20
    "
  >
    <Clock3
      size={16}
      className="text-[var(--accent-cyan)] mb-1.5"
    />

    <div
      className="
        text-lg
        sm:text-xl
        font-black
        text-[var(--text-primary)]
      "
    >
      <AnimatedCounter
        target={company.yearsExperience}
        suffix="+"
      />
    </div>

    <p
      className="
        !m-0
        mt-0.5
        text-[var(--text-faint)]
        text-[10px]
        sm:text-[11px]
      "
    >
      Years Experience
    </p>
  </div>

  {/* PROJECTS */}
  <div
    className="
      rounded-xl
      border
      border-[var(--border)]
      bg-[var(--bg-card-soft)]
      px-3
      py-2.5
      transition-all
      duration-300
      hover:border-[var(--accent-blue)]/20
    "
  >
    <FolderOpen
      size={16}
      className="text-[var(--accent-blue)] mb-1.5"
    />

    <div
      className="
        text-lg
        sm:text-xl
        font-black
        text-[var(--text-primary)]
      "
    >
      <AnimatedCounter
        target={company.completedProjects}
        suffix="+"
      />
    </div>

    <p
      className="
        !m-0
        mt-0.5
        text-[var(--text-faint)]
        text-[10px]
        sm:text-[11px]
      "
    >
      Projects Done
    </p>
  </div>

  {/* CLIENTS */}
  <div
    className="
      rounded-xl
      border
      border-[var(--border)]
      bg-[var(--bg-card-soft)]
      px-3
      py-2.5
      transition-all
      duration-300
      hover:border-[var(--accent-purple)]/20
    "
  >
    <Users
      size={16}
      className="text-[var(--accent-purple)] mb-1.5"
    />

    <div
      className="
        text-lg
        sm:text-xl
        font-black
        text-[var(--text-primary)]
      "
    >
      <AnimatedCounter
        target={company.satisfiedClients}
        suffix="+"
      />
    </div>

    <p
      className="
        !m-0
        mt-0.5
        text-[var(--text-faint)]
        text-[10px]
        sm:text-[11px]
      "
    >
      Happy Clients
    </p>
  </div>

</div>

                {/* BUTTON */}
                <div className="mt-6">
                  <Link
                    to="/about"
                    className="btn-primary"
                  >
                    Discover Our Story
                    <ArrowRight size={18} />
                  </Link>
                </div>

              </div>

            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;