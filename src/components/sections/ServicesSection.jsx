import { useEffect, useRef } from 'react';
import {
  Monitor, Code, TrendingUp, Smartphone, Palette, ShoppingCart, Sparkles, LifeBuoy,
  ArrowUpRight, Check,
} from 'lucide-react';

const pairs = [
  [
    {
      id: 1,
      slug: 'website-design',
      title: 'Website Design',
      desc: 'We design websites that build your brand in the market and reward high results.',
      tags: ['Landing Pages', 'Corporate Sites', 'Portfolio Sites'],
      points: ['Everlasting First Impression', 'Attract More Leads', 'Build Trust Among Customers', 'SEO-Ready Structure'],
      icon: Monitor,
      color: '#3B82F6',
    },
    {
      id: 2,
      slug: 'web-development',
      title: 'Web Development',
      desc: 'Excellent web solutions that give shape to your expectations. 100% original content.',
      tags: ['React & Node', 'API Integrations', 'Performance Tuning'],
      points: ['Customized Modern Design', 'Mobile Friendly', 'Custom Development', 'Scalable Architecture'],
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
      tags: ['SEO', 'PPC Campaigns', 'Social Ads'],
      points: ['More Traffic', 'Result-Oriented Campaigns', 'Ranking Reports', 'Monthly Analytics Reports'],
      icon: TrendingUp,
      color: '#06B6D4',
    },
    {
      id: 4,
      slug: 'app-development',
      title: 'App Development',
      desc: 'We develop custom mobile applications for iOS and Android that solve real business problems.',
      tags: ['Native iOS', 'Native Android', 'Cross-Platform'],
      points: ['iOS & Android Apps', 'Custom App Solutions', 'Business App Development', 'App Store Deployment'],
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
      tags: ['User Research', 'Design Systems', 'Usability Testing'],
      points: ['User Research', 'Wireframes & Prototypes', 'Conversion-Focused Layouts', 'Accessibility-First Design'],
      icon: Palette,
      color: '#EC4899',
    },
    {
      id: 6,
      slug: 'ecommerce',
      title: 'E-Commerce Development',
      desc: 'Online stores built to convert visitors into buyers, with checkout flows people actually finish.',
      tags: ['Shopify', 'WooCommerce', 'Custom Carts'],
      points: ['Custom Storefronts', 'Secure Payments', 'Inventory Integrations', 'Abandoned Cart Recovery'],
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
      tags: ['Logo Design', 'Style Guides', 'Print Collateral'],
      points: ['Logo & Identity Systems', 'Brand Guidelines', 'Marketing Collateral', 'Social Media Kits'],
      icon: Sparkles,
      color: '#F97316',
    },
    {
      id: 8,
      slug: 'support',
      title: 'IT Support & Maintenance',
      desc: 'A team that keeps answering after launch, so your site and apps stay fast and secure.',
      tags: ['Uptime Monitoring', 'Security Patching', 'Backup Management'],
      points: ['24/7 Monitoring', 'Regular Updates', 'Priority Response', 'Dedicated Account Manager'],
      icon: LifeBuoy,
      color: '#6366F1',
    },
  ],
];

function ServiceCard({ service }) {
  const Icon = service.icon;
  return (
    <div
      className="service-card group relative h-full w-full"
      style={{ '--accent': service.color }}
    >
      {/* ── Gradient ring — hidden by default, fades in around the
          card on hover so every card gets its own colored frame
          instead of a shared grey border. ── */}
      <div
        className="ring-glow pointer-events-none absolute -inset-px rounded-[29px] opacity-0"
        style={{ background: `linear-gradient(160deg, ${service.color}, ${service.color}00 55%)` }}
      />

      <div
        className="relative flex h-full flex-col overflow-hidden rounded-[28px] border border-[var(--border)]"
        style={{ backgroundColor: 'var(--bg-card)' }}
      >
        {/* ── Ambient glow, top corner ── */}
        <div
          className="card-glow pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full opacity-0 blur-[70px]"
          style={{ background: service.color }}
        />

        {/* ── Watermark icon — always-on, fills the empty right side
            with the service's own icon instead of leaving it blank ── */}
        <Icon
          size={168}
          strokeWidth={1}
          className="watermark-icon pointer-events-none absolute -right-8 -top-6 opacity-[0.07]"
          style={{ color: service.color }}
        />

        <div className="relative flex flex-1 flex-col" style={{ padding: '30px' }}>

          {/* Icon box — layered depth instead of a flat tint */}
          <div
            className="icon-box relative mb-7 flex h-[52px] w-[52px] items-center justify-center rounded-[16px]"
            style={{
              background: `linear-gradient(160deg, ${service.color}26, ${service.color}0d)`,
              border: `1px solid ${service.color}3d`,
              boxShadow: `inset 0 1px 0 ${service.color}30, 0 8px 20px -8px ${service.color}55`,
            }}
          >
            <Icon size={23} style={{ color: service.color }} strokeWidth={1.7} />
          </div>

          {/* Title — now carries its own underline, same style as the
              "Learn More" underline below, but it animates on hover
              of the WHOLE card (see .service-card:hover .title-underline
              in the <style> block) rather than only on the link. */}
          <h3 className="title relative mb-2.5 inline-block w-fit text-[21px] font-bold leading-snug tracking-[-0.01em] text-[var(--text-primary)]">
            {service.title}
            <span
              className="title-underline absolute bottom-[-2px] left-0 h-px w-full"
              style={{ background: service.color }}
            />
          </h3>

          <p className="mb-4 text-[14px] leading-[1.65] text-[var(--text-muted)]">
            {service.desc}
          </p>

          {/* Focus-area tags — concrete scope of the service, not filler */}
          <div className="mb-6 flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full px-3 py-1 text-[11.5px] font-semibold"
                style={{
                  background: `${service.color}14`,
                  border: `1px solid ${service.color}30`,
                  color: service.color,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <ul className="mb-7 grid grid-cols-1 gap-[10px] sm:grid-cols-2">
            {service.points.map((p) => (
              <li key={p} className="flex items-center gap-3 text-[13.5px] text-[var(--text-muted)]">
                <span
                  className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full"
                  style={{ background: `${service.color}1f` }}
                >
                  <Check size={11} strokeWidth={3} style={{ color: service.color }} />
                </span>
                {p}
              </li>
            ))}
          </ul>

          <div className="flex-1" />

          <div className="mb-5 h-px w-full bg-[var(--border)]" />

          <a
            href={`/services/${service.slug}`}
            className="cta group/cta inline-flex w-fit items-center gap-3 text-[14px] font-semibold text-[var(--text-primary)]"
          >
            <span className="relative">
              Learn More
              <span
                className="absolute bottom-[-2px] left-0 h-px w-full origin-left scale-x-0 transition-transform duration-500 ease-out group-hover/cta:scale-x-100"
                style={{ background: service.color }}
              />
            </span>
            <span
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ease-out group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
              style={{ borderColor: `${service.color}55`, color: service.color }}
            >
              <ArrowUpRight size={14} />
            </span>
          </a>
        </div>
      </div>

      <style>{`
        .service-card {
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .service-card:hover {
          transform: translateY(-6px);
        }
        .service-card .ring-glow,
        .service-card .card-glow {
          transition: opacity 0.6s ease;
        }
        .service-card:hover .ring-glow {
          opacity: 1;
        }
        .service-card:hover .card-glow {
          opacity: 0.16;
        }
        .service-card .watermark-icon {
          transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .service-card:hover .watermark-icon {
          opacity: 0.12;
          transform: scale(1.05);
        }
        .service-card .icon-box {
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .service-card:hover .icon-box {
          transform: scale(1.08) rotate(-3deg);
        }
        .service-card .title-underline {
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .service-card:hover .title-underline {
          transform: scaleX(1);
        }
        @media (prefers-reduced-motion: reduce) {
          .service-card,
          .service-card * {
            transition: none !important;
          }
        }
      `}</style>
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