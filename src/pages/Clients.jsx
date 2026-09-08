import PageHero from '../components/ui/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';
import { clientNames } from '../data/siteData';

const logoModules = import.meta.glob('/src/assets/img/clients/*.png', {
  eager: true,
  import: 'default',
});

const getLogoSrc = (index) => {
  const targetName = `/${index + 1}.png`;
  const match = Object.keys(logoModules).find((path) => path.endsWith(targetName));
  return match ? logoModules[match] : null;
};

// Where the intro box gets inserted among the client cards — the
// middle of the list, so cards naturally surround it on every side
// instead of it sitting above the grid.
const columnsPerRow = 6;
const introInsertIndex = columnsPerRow * 2;

const Clients = () => (
  <>
    <PageHero
      title="Our Trusted"
      highlight="Clients"
      subtitle="Web Smile India is proud to serve 437+ businesses across India. Here's a glimpse of our valued clients."
      breadcrumb="Clients"
    />
    <section className="section-padding-tight">
      <div className="container-custom">
        <ScrollReveal>
          <div className="flex justify-center mb-10">
            <span className="tag-badge">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[var(--accent-teal-soft)] to-[var(--accent-marigold-soft)] animate-pulse" />
              Clients
            </span>
          </div>
        </ScrollReveal>

        <div className="grid grid-flow-dense grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {clientNames.map((name, i) => {
            const logoSrc = getLogoSrc(i);
            const card = (
              <ScrollReveal key={name} delay={i * 30} direction="scale">
                <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-card-soft)] hover:border-[var(--border-strong)] hover:-translate-y-1 transition-all duration-300 h-32 flex items-center justify-center">
                  {logoSrc ? (
                    <div className="w-full h-full bg-white flex items-center justify-center">
                      <img
                        src={logoSrc}
                        alt={name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <span className="text-[var(--text-muted)] font-medium text-xs leading-tight px-2 text-center">
                      {name}
                    </span>
                  )}
                </div>
              </ScrollReveal>
            );

            if (i !== introInsertIndex) return card;

            return (
              <>
                <ScrollReveal
                  key="intro-box"
                  direction="scale"
                  className="col-span-2 row-span-2 md:col-start-2 md:col-span-2 lg:col-start-2 lg:col-span-3 xl:col-start-2 xl:col-span-4"
                >
                  <div className="group glass-card intro-glow-card relative flex h-full flex-col justify-center overflow-hidden px-6 py-6 text-center md:px-10 md:py-8">
                    <div className="relative">
                      <h2 className="mb-3 text-2xl font-bold leading-snug text-[var(--text-primary)] md:text-3xl lg:text-4xl">
                        Trusted by Businesses{' '}
                        <span className="gradient-text">Across India</span>
                      </h2>
                      <p className="text-[14px] leading-[1.7] text-[var(--text-muted)] md:text-[16px] lg:text-[17px] lg:max-w-md lg:mx-auto">
                        Web Smile India is a full-service digital marketing
                        company — we design and build websites, develop mobile
                        apps, and run result-driven marketing campaigns that
                        help brands grow online.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
                {card}
              </>
            );
          })}
        </div>

        <ScrollReveal className="text-center mt-10">
          <p className="text-[var(--text-muted)]">
            And 400+ more satisfied clients across India.{' '}
            <span className="text-[var(--accent-cyan)] font-semibold">Join our growing family!</span>
          </p>
        </ScrollReveal>
      </div>
    </section>
  </>
);

export default Clients;