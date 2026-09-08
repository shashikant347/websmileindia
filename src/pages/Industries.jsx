import PageHero from '../components/ui/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';
import { industries } from '../data/siteData';
import { BookOpen, Heart, Building2, ShoppingCart, Plane, Banknote, Factory, Truck, Cpu, Store, Hotel, HandHeart } from 'lucide-react';

const iconMap = { BookOpen, Heart, Building2, ShoppingCart, Plane, Banknote, Factory, Truck, Cpu, Store, Hotel, HandHeart };

// One representative photo per industry icon type. Swap any URL below
// if an image doesn't load right or you'd rather use your own photos —
// each key matches the `icon` field already used in siteData.js.
const photoMap = {
  BookOpen: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600',
  Heart: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600',
  Building2: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600',
  ShoppingCart: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600',
  Plane: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=600',
  Banknote: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600',
  Factory: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600',
  Truck: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=600',
  Cpu: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600',
  Store: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600',
  Hotel: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600',
  HandHeart: 'https://images.unsplash.com/photo-1593113630400-ea4288922497?auto=format&fit=crop&q=80&w=600',
};

const colors = [
  { hex: '#3B82F6', glow: '59,130,246' }, { hex: '#06B6D4', glow: '6,182,212' },
  { hex: '#8B5CF6', glow: '139,92,246' }, { hex: '#EC4899', glow: '236,72,153' },
  { hex: '#F59E0B', glow: '245,158,11' }, { hex: '#10B981', glow: '16,185,129' },
  { hex: '#F97316', glow: '249,115,22' }, { hex: '#6366F1', glow: '99,102,241' },
  { hex: '#22C55E', glow: '34,197,94' }, { hex: '#EF4444', glow: '239,68,68' },
  { hex: '#14B8A6', glow: '20,184,166' }, { hex: '#A855F7', glow: '168,85,247' },
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
          <div className="flex justify-center mb-14">
            <span className="tag-badge">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[var(--accent-teal-soft)] to-[var(--accent-marigold-soft)] animate-pulse" />
              Industries
            </span>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {industries.map((ind, i) => {
            const Icon = iconMap[ind.icon] || Building2;
            const photo = photoMap[ind.icon];
            const color = colors[i % colors.length];
            return (
              <ScrollReveal key={ind.name} delay={i * 50} direction="scale">
                <div className="group relative overflow-hidden rounded-2xl border border-[var(--border)] h-44 cursor-default transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--accent-cyan)]/30">
                  {/* Background photo */}
                  {photo && (
                    <img
                      src={photo}
                      alt={ind.name}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}

                  {/* Gradient overlay for text contrast — dark wash works
                      regardless of theme since it sits directly on the photo,
                      not on the page background */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />

                  {/* Color tint blended in, matching each card's accent */}
                  <div
                    className="absolute inset-0 mix-blend-overlay opacity-40"
                    style={{ background: color.hex }}
                  />

                  {/* Icon badge */}
                  <div
                    className="absolute top-3 left-3 w-9 h-9 rounded-lg flex items-center justify-center backdrop-blur-sm transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `rgba(${color.glow}, 0.35)`, border: `1px solid rgba(${color.glow}, 0.5)` }}
                  >
                    <Icon size={16} className="text-white" />
                  </div>

                  {/* Name */}
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <div className="text-white font-bold text-sm drop-shadow-lg">
                      {ind.name}
                    </div>
                    <div
                      className="mt-2 h-0.5 w-0 rounded-full transition-all duration-400 group-hover:w-10"
                      style={{ background: color.hex }}
                    />
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  </>
);

export default Industries;