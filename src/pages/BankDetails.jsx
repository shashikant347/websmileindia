import PageHero from '../components/ui/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';

const BankDetails = () => (
  <>
    <PageHero title="Bank" highlight="Details" subtitle="Use the following bank details to make payments directly to Web Smile India." breadcrumb="Bank Details" />
    <section className="section-padding-tight">
      <div className="container-custom max-w-2xl">
        <ScrollReveal>
          <div className="glass-card p-8 border border-blue-400/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-xl">🏦</div>
              <div>
                <h3 className="text-[var(--text-primary)] font-bold text-lg">Web Smile India</h3>
                <p className="text-[var(--text-muted)] text-sm">Bank Account Details</p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Account Name', value: 'Web Smile India' },
                { label: 'Bank Name', value: 'HDFC Bank' },
                { label: 'Account Type', value: 'Current Account' },
                { label: 'Account Number', value: 'XXXXXXXXXXXXXXXX' },
                { label: 'IFSC Code', value: 'HDFC0XXXXXX' },
                { label: 'Branch', value: 'Sector-63, Noida, U.P.' },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-[var(--border)] last:border-0">
                  <span className="text-[var(--text-muted)] text-sm">{label}</span>
                  <span className="text-[var(--text-primary)] font-semibold text-sm mt-1 sm:mt-0">{value}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 rounded-xl bg-amber-500/10 border border-amber-400/20">
              <p className="text-amber-400 text-sm">⚠️ Please share your payment receipt to <a href="mailto:info@websmileindia.com" className="underline">info@websmileindia.com</a> after transfer.</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </>
);

export default BankDetails;
