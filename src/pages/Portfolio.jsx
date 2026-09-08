import { ExternalLink } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import PortfolioSection from '../components/sections/PortfolioSection';
import { portfolio } from '../data/siteData';
import ScrollReveal from '../components/ui/ScrollReveal';
import TiltCard from '../components/ui/TiltCard';

const imageModules = import.meta.glob('../assets/portfolio/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
});

const imagesBySlug = Object.entries(imageModules).reduce((acc, [path, src]) => {
  const match = path.match(/([^/]+)\.(png|jpg|jpeg|webp)$/i);
  if (match) acc[match[1]] = src;
  return acc;
}, {});

const accentColors = [
  { hex: '#3B82F6', glow: '59,130,246' },
  { hex: '#06B6D4', glow: '6,182,212' },
  { hex: '#8B5CF6', glow: '139,92,246' },
  { hex: '#EC4899', glow: '236,72,153' },
];

const Portfolio = () => {
  const itemsWithImages = portfolio.filter((project) => imagesBySlug[project.slug]);
  const previewItems = itemsWithImages.slice(0, 4);
  const previewSlugs = previewItems.map((project) => project.slug);

  return (
    <>
      <PageHero
        title="Our"
        highlight="Portfolio"
        subtitle="Explore our work — cutting-edge websites and applications built for businesses across India."
        breadcrumb="Portfolio"
      />

      <section className="section-padding-tight relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            <ScrollReveal direction="left">
              <span className="tag-badge mb-4 inline-flex">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[var(--accent-teal-soft)] to-[var(--accent-marigold-soft)] animate-pulse" />
                Featured Work
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--text-primary)]">
                Our <span className="text-[var(--accent-cyan)]">Latest Portfolio</span>
              </h2>
              <p className="text-[var(--text-muted)] leading-relaxed">
                Web Smile India is based in Noida, and is recognized as the{' '}
                <strong className="text-[var(--text-primary)]">Best Web Designing Company in Delhi</strong>{' '}
                and{' '}
                <strong className="text-[var(--text-primary)]">Best SEO Company in Noida</strong>.
                Web Smile India is a leading custom web design company based in Noida, India.
                We create custom design websites, responsive websites, dynamic websites, SEO,
                SMO, PPC, online portals, graphics, and hosting server solutions that meet
                your requirements and fit your budget.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-2 gap-4">
              {previewItems.map((project, index) => {
                const imageSrc = imagesBySlug[project.slug];
                const accent = accentColors[index % accentColors.length];
                return (
                  <ScrollReveal key={project.id} delay={Math.min(index * 60, 300)} direction="up">
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
                      <TiltCard
                        glowColor={accent.glow}
                        className="relative overflow-hidden rounded-2xl border border-[var(--border)] group h-44"
                      >
                        <img
                          src={imageSrc}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />

                        {/* Gradient overlay — deepens on hover for contrast */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/5 opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                        {/* Category badge */}
                        {project.category && (
                          <span
                            className="absolute top-2.5 left-2.5 text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-full backdrop-blur-sm"
                            style={{ background: `rgba(${accent.glow}, 0.35)`, border: `1px solid rgba(${accent.glow}, 0.5)`, color: '#FFFFFF' }}
                          >
                            {project.category}
                          </span>
                        )}

                        {/* External-link icon, reveals on hover */}
                        <div
                          className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"
                          style={{ background: accent.hex }}
                        >
                          <ExternalLink size={12} className="text-white" />
                        </div>

                        {/* Title + accent underline */}
                        <div className="absolute inset-x-0 bottom-0 p-3">
                          <h3 className="text-white font-bold text-xs drop-shadow-lg leading-snug">
                            {project.title}
                          </h3>
                          <div
                            className="mt-1.5 h-0.5 w-0 rounded-full transition-all duration-400 group-hover:w-8"
                            style={{ background: accent.hex }}
                          />
                        </div>
                      </TiltCard>
                    </a>
                  </ScrollReveal>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* Excludes the 4 preview cards shown above */}
      <PortfolioSection
        limit={portfolio.length}
        sectionClassName="section-padding-tight"
        excludeSlugs={previewSlugs}
      />
    </>
  ); 
};

export default Portfolio;