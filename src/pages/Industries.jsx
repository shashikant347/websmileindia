import PageHero from '../components/ui/PageHero';
import SectionTitle from '../components/ui/SectionTitle';
import ScrollReveal from '../components/ui/ScrollReveal';
import TiltCard from '../components/ui/TiltCard';
import { industries } from '../data/siteData';
import { BookOpen, Heart, Building2, ShoppingCart, Plane, Banknote, Factory, Truck, Cpu, Store, Hotel, HandHeart } from 'lucide-react';

const iconMap = { BookOpen, Heart, Building2, ShoppingCart, Plane, Banknote, Factory, Truck, Cpu, Store, Hotel, HandHeart };

const colors = [
  { bg: '59,130,246', hex: '#3B82F6' }, { bg: '6,182,212', hex: '#06B6D4' },
  { bg: '139,92,246', hex: '#8B5CF6' }, { bg: '236,72,153', hex: '#EC4899' },
  { bg: '245,158,11', hex: '#F59E0B' }, { bg: '16,185,129', hex: '#10B981' },
  { bg: '249,115,22', hex: '#F97316' }, { bg: '99,102,241', hex: '#6366F1' },
  { bg: '34,197,94', hex: '#22C55E' }, { bg: '239,68,68', hex: '#EF4444' },
  { bg: '20,184,166', hex: '#14B8A6' }, { bg: '168,85,247', hex: '#A855F7' },
];

const Industries = () => (
  <>
    <PageHero
      title="Industries We"
      highlight="Serve"
      subtitle="We have vast experience working across industries as a full-service digital marketing and web development agency."
      breadcrumb="Industries"
    />
    <section className="section-padding-tight">
      <div className="container-custom">
        <ScrollReveal>
          <SectionTitle
            tag="Industries"
            title="We Excel In Our Industry So That"
            highlight="You Can Excel In Yours"
          />
        </ScrollReveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {industries.map((ind, i) => {
            const Icon = iconMap[ind.icon] || Building2;
            const color = colors[i % colors.length];
            return (
              <ScrollReveal key={ind.name} delay={i * 50} direction="scale">
                <TiltCard glowColor={color.bg} intensity={12} className="glass-card gradient-border p-5 text-center cursor-default hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ background: `rgba(${color.bg}, 0.15)` }}>
                    <Icon size={22} style={{ color: color.hex }} />
                  </div>
                  <div className="text-white font-medium text-sm">{ind.name}</div>
                </TiltCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  </>
);

export default Industries;
