  import { useState } from 'react';
  import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
  import SectionTitle from '../ui/SectionTitle';
  import ScrollReveal from '../ui/ScrollReveal';
  import { testimonials } from '../../data/siteData';

  const TestimonialsSection = ({ sectionClassName = 'section-padding' }) => {
    const [active, setActive] = useState(0);
    const total = testimonials.length;

    const prev = () => setActive((p) => (p - 1 + total) % total);
    const next = () => setActive((p) => (p + 1) % total);

    return (
      <section className={`${sectionClassName} relative overflow-hidden`}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[var(--accent-purple)]/5 blur-3xl pointer-events-none" />

        <div className="container-custom">
          <ScrollReveal>
            <SectionTitle
              tag="Testimonials"
              title="What Our"
              highlight="Clients Say"
              subtitle="Real feedback from real businesses we've helped grow online."
            />
          </ScrollReveal>

          {/* Main Testimonial Card */}
          <div className="max-w-3xl mx-auto">
            <ScrollReveal direction="scale">
              <div className="glass-card p-8 md:p-10 relative border border-[var(--border)] overflow-hidden">
                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote size={64} className="text-[var(--accent-cyan)]" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[active].rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Review */}
                <blockquote className="text-[var(--text-muted)] text-lg leading-relaxed mb-8 relative z-10">
                  "{testimonials[active].review}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-[var(--text-primary)] font-bold text-lg">
                    {testimonials[active].name[0]}
                  </div>
                  <div>
                    <div className="text-[var(--text-primary)] font-bold">{testimonials[active].name}</div>
                    <div className="text-[var(--text-muted)] text-sm">{testimonials[active].company}</div>
                    <div className="text-[var(--accent-cyan)] text-xs mt-0.5">{testimonials[active].service}</div>
                  </div>
                </div>

                {/* Gradient bottom bar */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500" />
              </div>
            </ScrollReveal>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full glass-card border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--accent-cyan)]/50 transition-all hover:-translate-x-1"
              >
                <ChevronLeft size={18} />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`rounded-full transition-all duration-300 ${i === active ? 'w-6 h-2 bg-[var(--accent-cyan)]' : 'w-2 h-2 bg-[var(--border-strong)] hover:bg-[var(--text-faint)]'}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 rounded-full glass-card border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--accent-cyan)]/50 transition-all hover:translate-x-1"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Mini testimonials grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            {testimonials.slice(0, 3).map((t, i) => (
              <ScrollReveal key={t.id} delay={i * 100}>
                <div
                  className={`glass-card p-5 cursor-pointer transition-all duration-300 border ${active === i ? 'border-[var(--accent-cyan)]/30' : 'border-[var(--border)] hover:border-[var(--border-strong)]'}`}
                  onClick={() => setActive(i)}
                >
                  <div className="flex gap-0.5 mb-2">
                    {[...Array(5)].map((_, s) => <Star key={s} size={11} className="text-amber-400 fill-amber-400" />)}
                  </div>
                  <p className="text-[var(--text-muted)] text-xs line-clamp-2 mb-3">"{t.review}"</p>
                  <div className="text-[var(--text-primary)] text-xs font-semibold">{t.name} — {t.company}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default TestimonialsSection;