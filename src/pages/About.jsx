import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Users, FolderOpen, Clock } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';
import StatsSection from '../components/sections/StatsSection';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import { company } from '../data/siteData';

const About = () => {
  return (
    <>
      <PageHero
        title="About"
        highlight="Us"
        subtitle="Web Smile India is a leading digital marketing and web development company based in Noida, India."
        breadcrumb="About Us"
      />

      {/* Main About Content */}
      <section className="section-padding-tight">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left — Visual */}
            <ScrollReveal direction="left">
              <div className="relative">
                {/* Main card */}
                <div className="glass-card p-8 border border-blue-500/20">
                  <div className="text-6xl mb-4">🌐</div>
                  <h3 className="text-2xl font-black text-[var(--text-primary)] mb-2">Your Digital Growth Partner</h3>
                  <p className="text-[var(--text-muted)]">Serving businesses across India with cutting-edge IT solutions since {new Date().getFullYear() - company.yearsExperience}.</p>

                  <div className="grid grid-cols-3 gap-4 mt-6">
                    {[
                      { icon: FolderOpen, value: company.completedProjects, label: 'Projects', color: '#3B82F6' },
                      { icon: Users, value: company.satisfiedClients, label: 'Clients', color: '#06B6D4' },
                      { icon: Clock, value: company.yearsExperience, label: 'Years', color: '#8B5CF6' },
                    ].map(({ icon: Icon, value, label, color }) => (
                      <div key={label} className="text-center p-3 rounded-xl bg-white/5">
                        <Icon size={20} style={{ color }} className="mx-auto mb-1" />
                        <div className="text-2xl font-black" style={{ color }}>
                          <AnimatedCounter target={value} suffix="+" />
                        </div>
                        <div className="text-[var(--text-muted)] text-xs">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 glass-card px-4 py-2 border border-cyan-400/30 text-sm text-[var(--text-primary)] font-semibold">
                  🏆 Trusted Since {new Date().getFullYear() - company.yearsExperience}
                </div>
              </div>
            </ScrollReveal>

            {/* Right — Text */}
            <ScrollReveal direction="right">
              <div className="space-y-6">
                <span className="tag-badge">About Web Smile India</span>
                <h2 className="text-3xl md:text-4xl font-black text-[var(--text-primary)] leading-tight">
                  Leading <span className="gradient-text-blue-cyan">IT Solutions</span> Company in Noida
                </h2>
                <p className="text-[var(--text-muted)] leading-relaxed">
                  Web Smile India is a digital marketing company that offers services like web design, development, mobile app development, digital marketing, software development, graphic designing, and much more.
                </p>
                <p className="text-[var(--text-muted)] leading-relaxed">
                  We are a leading and trusted web designing and development company based in Noida. Serving clients for {company.yearsExperience} years, we provide high-quality IT services at affordable prices with measurable results.
                </p>

                {/* Highlights */}
                <div className="space-y-3">
                  {[
                    '578+ projects completed across multiple industries',
                    '437+ satisfied clients all over India',
                    'Affordable pricing with measurable results',
                    'End-to-end digital solutions under one roof',
                    'Dedicated support team available 24/7',
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--text-muted)] text-sm">{point}</span>
                    </div>
                  ))}
                </div>

                <Link to="/contact" className="btn-primary inline-flex">
                  Get In Touch <ArrowRight size={18} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-slate-900/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal>
              <div className="glass-card p-8 border border-blue-500/20 h-full">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Our Mission</h3>
                <p className="text-[var(--text-muted)] leading-relaxed">{company.mission}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="glass-card p-8 border border-cyan-500/20 h-full">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Our Vision</h3>
                <p className="text-[var(--text-muted)] leading-relaxed">{company.vision}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <StatsSection />
    </>
  );
};

export default About;
