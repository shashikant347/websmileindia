import { useEffect, useRef } from 'react';
import {
  Monitor, Code, TrendingUp, Smartphone, Palette, ShoppingCart, Sparkles, LifeBuoy,
  ArrowUpRight,
} from 'lucide-react';

const pairs = [
  [
    {
      id: 1,
      slug: 'website-design',
      title: 'Website Design',
      desc: 'We design websites that build your brand in the market and reward high results.',
      points: ['Everlasting First Impression', 'Attract More Leads', 'Build Trust Among Customers'],
      icon: Monitor,
      color: '#3B82F6',
    },
    {
      id: 2,
      slug: 'web-development',
      title: 'Web Development',
      desc: 'Excellent web solutions that give shape to your expectations. 100% original content.',
      points: ['Customized Modern Design', 'Mobile Friendly', 'Custom Development'],
      icon: Code,
      color: '#8B5CF6',
    },
  ],
  [
    {
      id: 3,
      slug: 'digital-marketing',
      title: 'Digital Marketing',
      desc: 'SEO, SEM, and marketing strategies are our expertise, which makes us the perfect solution.',
      points: ['More Traffic', 'Result-Oriented Campaigns', 'Ranking Reports'],
      icon: TrendingUp,
      color: '#06B6D4',
    },
    {
      id: 4,
      slug: 'app-development',
      title: 'App Development',
      desc: 'We develop custom mobile applications for iOS and Android that solve real business problems.',
      points: ['iOS & Android Apps', 'Custom App Solutions', 'Business App Development'],
      icon: Smartphone,
      color: '#F59E0B',
    },
  ],
  [
    {
      id: 5,
      slug: 'ui-ux-design',
      title: 'UI/UX Design',
      desc: 'Interfaces crafted around how real users think, scroll, and decide — not just how they look in a mockup.',
      points: ['User Research', 'Wireframes & Prototypes', 'Conversion-Focused Layouts'],
      icon: Palette,
      color: '#EC4899',
    },
    {
      id: 6,
      slug: 'ecommerce',
      title: 'E-Commerce Development',
      desc: 'Online stores built to convert visitors into buyers, with checkout flows people actually finish.',
      points: ['Custom Storefronts', 'Secure Payments', 'Inventory Integrations'],
      icon: ShoppingCart,
      color: '#10B981',
    },
  ],
  [
    {
      id: 7,
      slug: 'branding',
      title: 'Branding & Identity',
      desc: 'A visual identity that holds up everywhere your brand shows up — big or small.',
      points: ['Logo & Identity Systems', 'Brand Guidelines', 'Marketing Collateral'],
      icon: Sparkles,
      color: '#F97316',
    },
    {
      id: 8,
      slug: 'support',
      title: 'IT Support & Maintenance',
      desc: 'A team that keeps answering after launch, so your site and apps stay fast and secure.',
      points: ['24/7 Monitoring', 'Regular Updates', 'Priority Response'],
      icon: LifeBuoy,
      color: '#6366F1',
    },
  ],
];

function ServiceCard({ service }) {
  const Icon = service.icon;
  return (
    <div
      className="service-card group relative flex w-full flex-col overflow-hidden rounded-[28px] border border-[var(--border)] backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[var(--border-strong)]"
      style={{ '--accent': service.color, backgroundColor: 'var(--bg-card)' }}
    >
      {/* ── Gradient top accent line ── */}
      <div
        className="absolute inset-x-0 top-0 h-[2px] opacity-60 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: `linear-gradient(90deg, ${service.color}, ${service.color}55)` }}
      />

      {/* ── Ambient glow on hover ── */}
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-0 blur-[72px] transition-opacity duration-500 group-hover:opacity-[0.15]"
        style={{ background: service.color }}
      />

      {/* ── Card inner padding wrapper ── */}
      <div
        className="relative flex flex-1 flex-col"
        style={{ padding: '28px' }}
      >

        {/* Icon box */}
        <div
          className="mb-6 flex h-[54px] w-[54px] items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
          style={{
            background: `${service.color}18`,
            border: `1px solid ${service.color}40`,
            boxShadow: `0 4px 20px ${service.color}18`,
          }}
        >
          <Icon size={24} style={{ color: service.color }} strokeWidth={1.7} />
        </div>

        {/* Title */}
        <h3 className="mb-2 text-xl font-bold leading-snug text-[var(--text-primary)] lg:text-[22px]">
          {service.title}
        </h3>

        {/* Description */}
        <p className="mb-5 text-[14px] leading-[1.6] text-[var(--text-muted)]">
          {service.desc}
        </p>

        {/* Feature bullets */}
        <ul className="mb-6 flex flex-col gap-[8px]">
          {service.points.map((p) => (
            <li key={p} className="flex items-center gap-3 text-[13.5px] text-[var(--text-muted)]">
              <span
                className="h-[7px] w-[7px] shrink-0 rounded-full"
                style={{ background: service.color }}
              />
              {p}
            </li>
          ))}
        </ul>

        {/* Pushes CTA to the bottom */}
        <div className="flex-1" />

        {/* Divider */}
        <div className="mb-4 h-px w-full bg-[var(--border)]" />

        {/* CTA */}
        <a
          href={`/services/${service.slug}`}
          className="group/cta inline-flex w-fit items-center gap-2 text-[14px] font-semibold transition-all duration-200"
          style={{ color: service.color }}
        >
          <span className="relative after:absolute after:bottom-[-1px] after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 group-hover/cta:after:w-full">
            Learn More
          </span>
          <ArrowUpRight
            size={15}
            className="transition-transform duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
          />
        </a>
      </div>
    </div>
  );
}

const ServicesSection = () => {
  const panelRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.4 }
    );
    panelRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-transparent">

      {/* ══════════════════════════════════════════
          Sticky heading — always visible at top,
          card panels stack BELOW it (top-[220px])
        ══════════════════════════════════════════ */}
      <div
        className="svc-heading sticky top-0 z-50 flex w-full flex-col items-center px-6 py-8 text-center"
        style={{ background: 'var(--bg-page)' }}
      >
        {/* Badge */}
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-card-soft)] px-4 py-1.5">
          <span className="h-[6px] w-[6px] animate-pulse rounded-full bg-[var(--accent-cyan)]" />
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--accent-cyan)]">
            What We Offer
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl font-black leading-tight text-[var(--text-primary)] lg:text-4xl">
          Services That{' '}
          <span className="bg-gradient-to-r from-[var(--accent-cyan)] via-[var(--accent-blue)] to-[var(--accent-purple)] bg-clip-text text-transparent">
            Grow Your Business
          </span>
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-2 max-w-lg text-[13.5px] leading-[1.7] text-[var(--text-muted)]">
          Discover digital growth possibilities for your brand with Web Smile India
          — reach high volumes of customers across the world.
        </p>
      </div>

      {/* ══════════════════════════════════════════
          Sticky card panels — start at top-[220px]
          so they NEVER cover the heading above.
          Each panel now has a SOLID background so the
          panel underneath never bleeds/glows through
          when the next pair scrolls on top of it.
        ══════════════════════════════════════════ */}
      {pairs.map((pair, i) => (
        <div
          key={i}
          ref={(el) => (panelRefs.current[i] = el)}
          className={`stack-panel sticky flex min-h-[calc(100vh-220px)] items-center justify-center px-6 py-10 ${
            i === 0 ? '' : 'rounded-t-[40px] md:rounded-t-[56px]'
          }`}
          style={{
            top: '220px',
            zIndex: i + 1,
            background: 'transparent',
          }}
        >
          {/* Cards grid */}
          <div className="reveal grid w-full max-w-7xl grid-cols-1 gap-10 opacity-0 md:grid-cols-2 md:gap-24">
            {pair.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      ))}


      <style>{`
        .stack-panel .reveal {
          transform: translateY(48px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .stack-panel.is-visible .reveal {
          opacity: 1;
          transform: translateY(0);
        }
        .service-card {
          box-shadow: 0 1px 0 0 rgba(255,255,255,0.04) inset;
        }
        @media (prefers-reduced-motion: reduce) {
          .service-card,
          .service-card * {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;