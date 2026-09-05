import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import SectionTitle from '../components/ui/SectionTitle';
import ScrollReveal from '../components/ui/ScrollReveal';
import TiltCard from '../components/ui/TiltCard';
import { packages } from '../data/siteData';

const categories = ['All', 'Web', 'Marketing', 'Design', 'Content', 'Hosting'];

const categoryColors = {
  Web: { bg: '59,130,246', hex: '#3B82F6' },
  Marketing: { bg: '6,182,212', hex: '#06B6D4' },
  Design: { bg: '236,72,153', hex: '#EC4899' },
  Content: { bg: '245,158,11', hex: '#F59E0B' },
  Hosting: { bg: '139,92,246', hex: '#8B5CF6' },
};

const Packages = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? packages
    : packages.filter(p => p.category === activeCategory);

  return (
    <>
      <PageHero
        title="Our"
        highlight="Packages"
        subtitle="Quality work at competitive prices. Choose from our transparent, affordable pricing plans."
        breadcrumb="Packages"
      />

      <section className="section-padding-tight">
        <div className="container-custom">
          <ScrollReveal>
            <SectionTitle
              tag="Pricing"
              title="Simple &"
              highlight="Transparent Pricing"
              subtitle="We provide quality work with lower price. All prices are one-time or annual as indicated."
            />
          </ScrollReveal>

          {/* Filter Tabs */}
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === cat
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30'
                    : 'glass-card text-slate-400 hover:text-white border border-[var(--border)]/10'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((pkg, index) => {
              const color = categoryColors[pkg.category] || { bg: '6,182,212', hex: '#06B6D4' };
              return (
                <ScrollReveal key={pkg.name} delay={index * 60} direction="up">
                  <TiltCard
                    glowColor={color.bg}
                    intensity={10}
                    className="glass-card gradient-border p-6 h-full flex flex-col"
                  >
                    {/* Category Badge */}
                    <span
                      className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full self-start mb-4"
                      style={{ background: `rgba(${color.bg}, 0.15)`, color: color.hex }}
                    >
                      {pkg.category}
                    </span>

                    {/* Name */}
                    <h3 className="text-white font-bold text-base mb-4 flex-1">{pkg.name}</h3>

                    {/* Price */}
                    <div className="mt-auto">
                      <div className="text-3xl font-black" style={{ color: color.hex }}>
                        ₹{pkg.price}
                      </div>
                      <div className="text-slate-500 text-xs mt-1">{pkg.unit === 'Rs.' ? 'One-time / Annual' : `Per ${pkg.unit}`}</div>
                    </div>

                    {/* Bottom gradient */}
                    <div
                      className="mt-4 h-0.5 rounded-full"
                      style={{ background: `linear-gradient(90deg, ${color.hex}, transparent)` }}
                    />
                  </TiltCard>
                </ScrollReveal>
              );
            })}
          </div>

          {/* CTA */}
          <ScrollReveal delay={300} className="text-center mt-12">
            <p className="text-slate-400 mb-4">Need a custom package tailored to your specific needs?</p>
            <Link to="/contact" className="btn-primary">
              Get Custom Quote <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Packages;
