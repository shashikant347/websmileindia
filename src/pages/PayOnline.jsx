import PageHero from '../components/ui/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';
import { Link } from 'react-router-dom';

const PayOnline = () => (
  <>
    <PageHero title="Pay" highlight="Online" subtitle="Make secure online payments to Web Smile India." breadcrumb="Pay Online" />
    <section className="section-padding-tight">
      <div className="container-custom max-w-xl">
        <ScrollReveal>
          <div className="glass-card p-8 border border-cyan-400/20 text-center">
            <div className="text-5xl mb-4">💳</div>
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Secure Payment Gateway</h3>
            <p className="text-[var(--text-muted)] mb-6">Pay securely using UPI, net banking, credit/debit card or other payment methods.</p>
            <div className="space-y-4">
              <div className="glass-card p-4 border border-[var(--border)] text-left">
                <div className="text-[var(--text-muted)] text-sm mb-1">UPI ID</div>
                <div className="text-[var(--text-primary)] font-bold">websmileindia@upi</div>
              </div>
              <div className="glass-card p-4 border border-[var(--border)] text-left">
                <div className="text-[var(--text-muted)] text-sm mb-1">Contact for Payment Link</div>
                <a href="mailto:info@websmileindia.com" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">info@websmileindia.com</a>
              </div>
            </div>
            <p className="text-[var(--text-faint)] text-xs mt-6">After payment, please share receipt to confirm your order.</p>
            <Link to="/bank-details" className="btn-outline inline-flex mt-4">View Bank Details</Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </>
);

export default PayOnline;
