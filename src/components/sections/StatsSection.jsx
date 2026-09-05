import AnimatedCounter from '../ui/AnimatedCounter';
import ScrollReveal from '../ui/ScrollReveal';

const stats = [
  { value: 578, suffix: '+', label: 'Completed Projects', desc: 'Delivered across industries', color: '#3B82F6', glow: '59,130,246' },
  { value: 8, suffix: '+', label: 'Years Experience', desc: 'In web design & development', color: '#06B6D4', glow: '6,182,212' },
  { value: 437, suffix: '+', label: 'Happy Clients', desc: 'Businesses we\'ve helped grow', color: '#8B5CF6', glow: '139,92,246' },
  { value: 100, suffix: '%', label: 'Client Satisfaction', desc: 'Our top priority always', color: '#10B981', glow: '16,185,129' },
];

const StatsSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-secondary)]/60 via-[var(--bg-primary)]/80 to-[var(--bg-secondary)]/60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-64 bg-[var(--accent-blue)]/5 blur-3xl pointer-events-none" />
      </div>

      {/* Top & bottom dividers */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-blue)]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-cyan)]/40 to-transparent" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 100} direction="up">
              <div
                className="glass-card p-6 md:p-8 text-center group hover:-translate-y-2 transition-all duration-300 cursor-default"
                style={{ borderColor: `rgba(${stat.glow}, 0.1)` }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `rgba(${stat.glow}, 0.3)`;
                  e.currentTarget.style.boxShadow = `0 0 30px rgba(${stat.glow}, 0.15), 0 20px 60px rgba(0,0,0,0.4)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `rgba(${stat.glow}, 0.1)`;
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                {/* Number */}
                <div
                  className="text-4xl md:text-5xl font-black mb-2"
                  style={{ color: stat.color }}
                >
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} duration={2000} />
                </div>
                {/* Label */}
                <div className="text-[var(--text-primary)] font-semibold text-sm md:text-base mb-1">{stat.label}</div>
                {/* Desc */}
                <div className="text-[var(--text-faint)] text-xs">{stat.desc}</div>

                {/* Bottom glow line */}
                <div
                  className="mt-4 h-0.5 rounded-full mx-auto w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)` }}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
