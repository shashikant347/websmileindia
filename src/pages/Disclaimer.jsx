  import PageHero from '../components/ui/PageHero';
  import ScrollReveal from '../components/ui/ScrollReveal';

  const Disclaimer = () => (
    <>
      <PageHero title="Disclaimer" subtitle="Important information about our website and services." breadcrumb="Disclaimer" />
      <section className="section-padding-tight">
        <div className="container-custom max-w-3xl">
          <ScrollReveal>
            <div className="glass-card p-8 border border-[var(--border)] text-[var(--text-muted)] leading-relaxed space-y-6">
              <p>The information contained on this website is for general information purposes only. Web Smile India assumes no responsibility for errors or omissions in the contents of this site.</p>
              <p>In no event shall Web Smile India be liable for any special, direct, indirect, consequential, or incidental damages related to the use of this website or its content.</p>
              <p>Web Smile India reserves the right to make additions, deletions, or modifications to the contents on the website at any time without prior notice.</p>
              <p>External links on our website may lead to third-party sites. We have no control over those sites and are not responsible for their content.</p>
              <p>For any queries, contact: <a href="mailto:info@websmileindia.com" className="text-cyan-400 hover:underline">info@websmileindia.com</a></p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );

  export default Disclaimer;
