import { CheckCircle, Award, Users, Zap, Shield, Clock, Target, Headphones } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import ScrollReveal from '../ui/ScrollReveal';
import TiltCard from '../ui/TiltCard';
import { Link } from 'react-router-dom';

const reasons = [
  { icon: Award, title: 'Award-Winning Design', desc: 'Beautiful, modern designs that make lasting first impressions', color: '#F59E0B', glow: '245,158,11' },
  { icon: Shield, title: 'Technically Perfect', desc: 'Clean, optimized code with best industry practices', color: '#3B82F6', glow: '59,130,246' },
  { icon: Users, title: 'Experienced Team', desc: '8+ years of expertise delivering 578+ projects', color: '#8B5CF6', glow: '139,92,246' },
  { icon: Zap, title: 'Fast Delivery', desc: 'On-time delivery without compromising quality', color: '#06B6D4', glow: '6,182,212' },
  { icon: Target, title: 'Result Oriented', desc: 'Strategies that drive real, measurable business growth', color: '#EC4899', glow: '236,72,153' },
  { icon: Clock, title: '24/7 Support', desc: 'Round-the-clock support to keep your business running', color: '#10B981', glow: '16,185,129' },
  { icon: Headphones, title: 'Dedicated Support', desc: 'Personalized attention and responsive customer service', color: '#F97316', glow: '249,115,22' },
  { icon: CheckCircle, title: 'Affordable Pricing', desc: 'Premium quality at competitive prices for every budget', color: '#6366F1', glow: '99,102,241' },
];

const WhyChooseUsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* bg accents */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div>
            <ScrollReveal direction="left">
              <span className="tag-badge mb-4 inline-flex">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[var(--text-primary)] mb-6 leading-tight">
                Why{' '}
                <span className="gradient-text-blue-cyan">Web Smile India</span>{' '}
                Is The Right Choice
              </h2>
              <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-6">
                Our mission is to help our clients by providing result-oriented, high-quality innovative IT solutions at an affordable price that every business can have an online presence.
              </p>
              <p className="text-[var(--text-muted)] leading-relaxed mb-8">
                Our vision is to become the largest IT solution company by focusing on innovation and making it easy for businesses to do business over the internet.
              </p>

              {/* Values */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {['Integrity & Ethics', 'Respect', 'Innovation', 'Continuous Development'].map((v) => (
                  <div key={v} className="flex items-center gap-2.5 text-sm text-[var(--text-muted)]">
                    <CheckCircle size={16} className="text-[var(--accent-cyan)] flex-shrink-0" />
                    {v}
                  </div>
                ))}
              </div>

              <Link to="/why-choose-us" className="btn-primary">
                Learn More About Us
              </Link>
            </ScrollReveal>
          </div>

          {/* Right — Feature Grid */}
          <div className="grid grid-cols-2 gap-4">
            {reasons.map((item, index) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.title} delay={index * 60} direction={index % 2 === 0 ? 'left' : 'right'}>
                  <TiltCard
                    glowColor={item.glow}
                    intensity={10}
                    className="glass-card gradient-border p-4 hover:border-opacity-50 transition-all duration-300 cursor-default"
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                      style={{ background: `rgba(${item.glow}, 0.15)` }}
                    >
                      <Icon size={18} style={{ color: item.color }} />
                    </div>
                    <h4 className="text-[var(--text-primary)] font-semibold text-sm mb-1">{item.title}</h4>
                    <p className="text-[var(--text-faint)] text-xs leading-relaxed">{item.desc}</p>
                  </TiltCard>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
