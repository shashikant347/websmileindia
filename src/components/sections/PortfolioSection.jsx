import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import ScrollReveal from '../ui/ScrollReveal';
import { portfolio } from '../../data/siteData';

const imageModules = import.meta.glob('../../assets/portfolio/*.{png,jpg,jpeg,webp}', {
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
  { hex: '#F59E0B', glow: '245,158,11' },
  { hex: '#10B981', glow: '16,185,129' },
];

function ProjectCard({ project, index }) {
  const imageSrc = imagesBySlug[project.slug];
  const accent = accentColors[index % accentColors.length];

  return (
    <a href={project.url} target="_blank" rel="noopener noreferrer" className="group block">
      <div
        className="relative overflow-hidden rounded-3xl border transition-all duration-400 ease-out"
        style={{
          borderColor: 'var(--border)',
        }}
      >
        {/* Gradient ring that blooms on hover, matching this card's
            own accent color */}
        <div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-400 group-hover:opacity-100"
          style={{
            background: `linear-gradient(135deg, ${accent.hex}, transparent 60%)`,
            padding: 1.5,
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
        />

        {/* Photo */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--bg-card-soft)]">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={project.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-[var(--text-faint)] text-sm">
              {project.title}
            </div>
          )}

          {/* Base gradient — keeps the title legible even without hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

          {/* Deeper wash on hover, for the reveal content underneath */}
          <div
            className="absolute inset-0 opacity-0 transition-opacity duration-400 group-hover:opacity-100"
            style={{ background: `linear-gradient(160deg, ${accent.hex}33, rgba(0,0,0,0.75) 70%)` }}
          />

          {/* Category badge — always visible, top-left */}
          {project.category && (
            <span
              className="absolute top-3 left-3 text-[9.5px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-sm text-white"
              style={{ background: `rgba(${accent.glow}, 0.4)`, border: `1px solid rgba(${accent.glow}, 0.6)` }}
            >
              {project.category}
            </span>
          )}

          {/* Center "View Project" reveal — scales in on hover */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 scale-75 transition-all duration-400 ease-out group-hover:opacity-100 group-hover:scale-100">
            <div
              className="flex h-14 w-14 items-center justify-center rounded-full backdrop-blur-md"
              style={{ background: `rgba(${accent.glow}, 0.35)`, border: `1.5px solid rgba(${accent.glow}, 0.7)` }}
            >
              <ExternalLink size={20} className="text-white" />
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-white/90">
              View Project
            </span>
          </div>

          {/* Title strip — always visible at the bottom */}
          <div className="absolute inset-x-0 bottom-0 p-4">
            <h3 className="text-white font-bold text-sm drop-shadow-lg leading-snug">
              {project.title}
            </h3>
            <div className="mt-1 flex items-center gap-1.5 text-[11px] text-gray-300 opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
              <ArrowRight size={11} style={{ color: accent.hex }} />
              {project.url.replace('https://', '').replace('http://', '')}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

const PortfolioSection = ({ limit = 6, sectionClassName = 'section-padding', excludeSlugs = [] }) => {
  const itemsWithImages = portfolio.filter(
    (project) => imagesBySlug[project.slug] && !excludeSlugs.includes(project.slug)
  );
  const items = itemsWithImages.slice(0, limit);

  return (
    <section className={`${sectionClassName} relative`}>
      <div className="container-custom">
        <ScrollReveal>
          <SectionTitle
            tag="Our Portfolio"
            title="Our Recent"
            highlight="Projects"
            subtitle="A glimpse of the cutting-edge websites and applications we've built for our clients."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((project, index) => (
            <ScrollReveal key={project.id} delay={Math.min(index * 60, 300)} direction="up">
              <ProjectCard project={project} index={index} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={300} className="text-center mt-10">
          <Link to="/portfolio" className="btn-outline inline-flex items-center gap-2">
            View All Projects <ArrowRight size={16} />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PortfolioSection;