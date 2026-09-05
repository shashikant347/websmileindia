import PageHero from '../components/ui/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';

const Section = ({ title, children }) => (
  <div className="mb-8">
    <h3 className="text-white font-bold text-lg mb-3 gradient-text-blue-cyan">{title}</h3>
    <div className="text-slate-400 leading-relaxed">{children}</div>
  </div>
);

const PrivacyPolicy = () => (
  <>
    <PageHero title="Privacy" highlight="Policy" subtitle="We are committed to protecting your personal information and privacy." breadcrumb="Privacy Policy" />
    <section className="section-padding-tight">
      <div className="container-custom max-w-3xl">
        <ScrollReveal>
          <div className="glass-card p-8 border border-[var(--border)]">
            <p className="text-slate-400 mb-8 text-sm">Last updated: January 2025</p>
            <Section title="Information We Collect">
              <p>We collect information you provide directly, such as name, email, phone number, and project details when you contact us or fill out our forms.</p>
            </Section>
            <Section title="How We Use Information">
              <p>We use collected information to provide our services, communicate with you, improve our offerings, and send relevant updates. We do not sell your personal information.</p>
            </Section>
            <Section title="Cookies">
              <p>Our website uses cookies to enhance user experience. You can control cookie settings in your browser preferences.</p>
            </Section>
            <Section title="Third-Party Services">
              <p>We may use third-party analytics and marketing tools (Google Analytics, Facebook Pixel) that have their own privacy policies.</p>
            </Section>
            <Section title="Data Security">
              <p>We implement appropriate security measures to protect your information from unauthorized access, alteration, or disclosure.</p>
            </Section>
            <Section title="Contact Us">
              <p>For privacy concerns, contact <a href="mailto:info@websmileindia.com" className="text-cyan-400 hover:underline">info@websmileindia.com</a></p>
            </Section>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </>
);

export default PrivacyPolicy;
