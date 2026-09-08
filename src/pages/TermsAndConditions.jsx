import PageHero from '../components/ui/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';

const Section = ({ title, children }) => (
  <div className="mb-8">
    <h3 className="text-[var(--text-primary)] font-bold text-lg mb-3 gradient-text-blue-cyan">{title}</h3>
    <div className="text-[var(--text-muted)] leading-relaxed space-y-2">{children}</div>
  </div>
);

const TermsAndConditions = () => (
  <>
    <PageHero title="Terms &" highlight="Conditions" subtitle="Please read these terms carefully before using our services." breadcrumb="Terms & Conditions" />
    <section className="section-padding-tight">
      <div className="container-custom max-w-3xl">
        <ScrollReveal>
          <div className="glass-card p-8 border border-[var(--border)]">
            <p className="text-[var(--text-muted)] mb-8 text-sm">Last updated: January 2025 | Web Smile India, Noida</p>
            <Section title="1. Acceptance of Terms">
              <p>By accessing and using the services of Web Smile India, you accept and agree to be bound by the terms and provisions of this agreement.</p>
            </Section>
            <Section title="2. Services">
              <p>Web Smile India provides web design, web development, digital marketing, app development, software development, graphic designing, domain & hosting, and support & maintenance services.</p>
            </Section>
            <Section title="3. Payment Terms">
              <p>All payments are due as per the agreed project milestone schedule. Delayed payments may result in project delays. GST is applicable as per government regulations.</p>
            </Section>
            <Section title="4. Intellectual Property">
              <p>Upon full payment, the client owns the final deliverables. Web Smile India retains the right to display work in its portfolio unless specifically requested otherwise.</p>
            </Section>
            <Section title="5. Confidentiality">
              <p>We treat all client information with strict confidentiality and do not share business information with third parties without consent.</p>
            </Section>
            <Section title="6. Limitation of Liability">
              <p>Web Smile India shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services beyond the amount paid for those services.</p>
            </Section>
            <Section title="7. Termination">
              <p>Either party may terminate the agreement with 30 days written notice. Work completed up to termination date will be billed accordingly.</p>
            </Section>
            <Section title="8. Contact">
              <p>For any queries regarding these terms, contact us at <a href="mailto:info@websmileindia.com" className="text-cyan-400 hover:underline">info@websmileindia.com</a></p>
            </Section>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </>
);

export default TermsAndConditions;
