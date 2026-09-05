import PageHero from '../components/ui/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';
import SectionTitle from '../components/ui/SectionTitle';
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
          <SectionTitle tag="Clients" title="Businesses That" highlight="Trust Us" />
        </ScrollReveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {clientNames.map((name, i) => {
            const logoSrc = getLogoSrc(i);
            return (
              <ScrollReveal key={name} delay={i * 30} direction="scale">
                <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-card-soft)] hover:border-[var(--border-strong)] hover:-translate-y-1 transition-all duration-300 h-32 flex items-center justify-center p-4">
                  {logoSrc ? (
                    <img
                      src={logoSrc}
                      alt={name}
                      className="max-w-full max-h-full object-contain"
                    />
                  ) : (
                    <span className="text-slate-300 font-medium text-xs leading-tight px-2 text-center">
                      {name}
                    </span>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
        <ScrollReveal className="text-center mt-10">
          <p className="text-slate-400">And 400+ more satisfied clients across India. <span className="text-cyan-400 font-semibold">Join our growing family!</span></p>
        </ScrollReveal>
      </div>
    </section>
  </>
);

export default Clients;