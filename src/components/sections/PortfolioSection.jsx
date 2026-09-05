  import { Link } from 'react-router-dom';
  import { ArrowRight } from 'lucide-react';
  import SectionTitle from '../ui/SectionTitle';
  import ScrollReveal from '../ui/ScrollReveal';
  import TiltCard from '../ui/TiltCard';
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

  const PortfolioSection = ({ limit = 6, sectionClassName = 'section-padding' }) => {
    const itemsWithImages = portfolio.filter((project) => imagesBySlug[project.slug]);
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map((project, index) => {
              const imageSrc = imagesBySlug[project.slug];

              return (
                <ScrollReveal key={project.id} delay={Math.min(index * 60, 300)} direction="up">
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
                    <TiltCard className="glass-card gradient-border overflow-hidden group h-56 relative">
                      <img
                        src={imageSrc}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-70 group-hover:opacity-95 transition-opacity duration-300" />

                      <div className="absolute inset-x-0 bottom-0 p-5 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                        <div className="text-xs font-semibold uppercase tracking-wider mb-1 text-[var(--accent-cyan)]">
                          {project.category}
                        </div>
                        <h3 className="text-white font-bold text-base mb-2">{project.title}</h3>
                        <div className="flex items-center gap-1.5 text-xs text-slate-300">
                          <ArrowRight size={13} className="text-[var(--accent-cyan)]" />
                          {project.url.replace('https://', '').replace('http://', '')}
                        </div>
                      </div>

                      <div className="absolute inset-x-0 bottom-0 p-5 opacity-100 group-hover:opacity-0 transition-opacity duration-200">
                        <h3 className="text-white font-bold text-sm drop-shadow-lg">{project.title}</h3>
                      </div>
                    </TiltCard>
                  </a>
                </ScrollReveal>
              );
            })}
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