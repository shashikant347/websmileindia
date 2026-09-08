import ScrollReveal from '../ui/ScrollReveal';
import SectionTitle from '../ui/SectionTitle';
import { clientNames } from '../../data/siteData';

// Vite dynamic import — sab client images ek saath load
const logoModules = import.meta.glob('/src/assets/img/clients/*.png', {
  eager: true,
  import: 'default',
});

const getLogoSrc = (index) => {
  const targetName = `/${index + 1}.png`;
  const match = Object.keys(logoModules).find((path) => path.endsWith(targetName));
  return match ? logoModules[match] : null;
};

// Naam + image ek object mein combine kiya
const clients = clientNames.map((name, i) => ({
  name,
  logo: getLogoSrc(i),
}));

// Do rows mein baant diya
const half = Math.ceil(clients.length / 2);
const row1 = clients.slice(0, half);
const row2 = clients.slice(half);

const ClientCard = ({ client }) => (
  <div
    className="
      relative flex-shrink-0
      w-36 h-24 sm:w-44 sm:h-28
      rounded-2xl overflow-hidden  
      border border-[var(--border)]
      bg-[var(--bg-card-soft)]
      mx-2
      transition-transform duration-300
      hover:scale-105
    "
  >
    {client.logo ? (
      <img
        src={client.logo}
        alt={client.name}
        className="w-full h-full object-cover"
      />
    ) : (
      <div className="w-full h-full flex items-center justify-center p-3">
        <span className="text-[var(--text-muted)] text-xs text-center font-medium">
          {client.name}
        </span>
      </div>
    )}
  </div>
);

const MarqueeRow = ({ items, direction = 'left' }) => (
  <div className="overflow-hidden py-2">
    <div
      className={`flex w-max ${
        direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
      }`}
    >
      {[...items, ...items].map((client, i) => (
        <ClientCard key={`${client.name}-${i}`} client={client} />
      ))}
    </div>
  </div>
);

const ClientsSection = () => (
  <section className="section-padding bg-[var(--bg-secondary)]/30 overflow-hidden">
    <div className="container-custom">
      <ScrollReveal>
        <SectionTitle tag="Clients" title="Businesses That" highlight="Trust Us" />
      </ScrollReveal>
    </div>

    <div className="mt-10 space-y-4">
      <MarqueeRow items={row1} direction="left" />
      <MarqueeRow items={row2} direction="right" />
    </div>

    <style>{`
      @keyframes marquee-left {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }
      @keyframes marquee-right {
        from { transform: translateX(-50%); }
        to { transform: translateX(0); }
      }
      .animate-marquee-left {
        animation: marquee-left 35s linear infinite;
      }
      .animate-marquee-right {
        animation: marquee-right 35s linear infinite;
      }
      .animate-marquee-left:hover,
      .animate-marquee-right:hover {
        animation-play-state: paused;
      }
    `}</style>
  </section>
);

export default ClientsSection;