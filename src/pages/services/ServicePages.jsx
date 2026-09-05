import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Phone } from 'lucide-react';
import PageHero from '../../components/ui/PageHero';
import ScrollReveal from '../../components/ui/ScrollReveal';
import TiltCard from '../../components/ui/TiltCard';
import SectionTitle from '../../components/ui/SectionTitle';
import { services, contact } from '../../data/siteData';

// Reusable Service Detail Page
export const ServicePage = ({ slug }) => {
  const service = services.find(s => s.slug === slug);
  if (!service) return null;

  return (
    <>
      <PageHero
        title={service.title}
        subtitle={service.summary}
        breadcrumb={service.title}
      />

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Column */}
            <div className="lg:col-span-2 space-y-8">
              <ScrollReveal>
                <div className="glass-card p-8 border border-[var(--border)]">
                  <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                    Best <span className="gradient-text-blue-cyan">{service.title}</span> Company in Noida
                  </h2>
                  <p className="text-[var(--text-muted)] leading-relaxed mb-6">{service.description}</p>
                  <p className="text-[var(--text-muted)] leading-relaxed">
                    Web Smile India is your trusted partner for {service.title.toLowerCase()} services in Noida and Delhi NCR. Our team of experienced professionals delivers high-quality solutions tailored to your business needs at affordable prices.
                  </p>
                </div>
              </ScrollReveal>

              {/* Features Grid */}
              <ScrollReveal delay={100}>
                <SectionTitle
                  tag="Key Features"
                  title="What We"
                  highlight="Provide"
                  align="left"
                  className="mb-6"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, i) => (
                    <ScrollReveal key={feature} delay={i * 60}>
                      <TiltCard
                        intensity={8}
                        className="glass-card p-5 border border-[var(--border)] flex items-center gap-3"
                      >
                        <CheckCircle size={18} className="text-[var(--accent-cyan)] flex-shrink-0" />
                        <span className="text-[var(--text-muted)] text-sm font-medium">{feature}</span>
                      </TiltCard>
                    </ScrollReveal>
                  ))}
                </div>
              </ScrollReveal>

              {/* Reasons */}
              <ScrollReveal>
                <SectionTitle
                  tag="Why Choose Us"
                  title="Reasons to Choose Web Smile India"
                  align="left"
                  className="mb-6"
                />
                <div className="space-y-4">
                  {service.reasons.map((reason, i) => (
                    <ScrollReveal key={reason} delay={i * 80}>
                      <div className="glass-card p-5 border border-[var(--border)] flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-cyan)] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                          {i + 1}
                        </div>
                        <div>
                          <h4 className="text-[var(--text-primary)] font-semibold mb-1">{reason}</h4>
                          <p className="text-[var(--text-muted)] text-sm">We ensure the best quality {service.title.toLowerCase()} services tailored specifically to your business requirements.</p>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* CTA Card */}
              <ScrollReveal delay={200}>
                <div className="glass-card p-6 border border-[rgba(var(--accent-cyan-rgb),0.20)] sticky top-24">
                  <h3 className="text-[var(--text-primary)] font-bold text-lg mb-2">Get Free Consultation</h3>
                  <p className="text-[var(--text-muted)] text-sm mb-5">Talk to our experts and get a customized solution for your business.</p>
                  <Link to="/contact" className="btn-primary w-full justify-center mb-3">
                    Enquire Now <ArrowRight size={16} />
                  </Link>
                  <a href={`tel:${contact.phone}`} className="btn-outline w-full justify-center text-sm">
                    <Phone size={14} /> {contact.phone}
                  </a>
                </div>
              </ScrollReveal>

              {/* Other Services */}
              <ScrollReveal delay={250}>
                <div className="glass-card p-6 border border-[var(--border)]">
                  <h4 className="text-[var(--text-primary)] font-bold mb-4">Other Services</h4>
                  <div className="space-y-2">
                    {services.filter(s => s.slug !== slug).map(s => (
                      <Link
                        key={s.slug}
                        to={`/services/${s.slug}`}
                        className="flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--accent-cyan)] text-sm py-1.5 border-b border-[var(--border)] last:border-0 transition-colors"
                      >
                        <ArrowRight size={12} />
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Individual Service Pages
export const WebDesign = () => <ServicePage slug="website-design" />;
export const WebDevelopment = () => <ServicePage slug="web-development" />;
export const DigitalMarketing = () => <ServicePage slug="digital-marketing" />;
export const AppDevelopment = () => <ServicePage slug="app-development" />;
export const SoftwareDevelopment = () => <ServicePage slug="software-development" />;
export const GraphicDesigning = () => <ServicePage slug="graphic-designing" />;
export const DomainHosting = () => <ServicePage slug="domain-hosting" />;
export const SupportMaintenance = () => <ServicePage slug="support-maintenance" />;