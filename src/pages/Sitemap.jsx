import { Link } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';
import { services, footerLinks } from '../data/siteData';

const Sitemap = () => (
  <>
    <PageHero title="Site" highlight="Map" subtitle="Complete overview of all pages on the Web Smile India website." breadcrumb="Sitemap" />
    <section className="section-padding-tight">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Main Pages', links: [
                { label: 'Home', path: '/' }, { label: 'About Us', path: '/about' },
                { label: 'Why Choose Us', path: '/why-choose-us' }, { label: 'Industries', path: '/industries' },
                { label: 'Portfolio', path: '/portfolio' }, { label: 'Clients', path: '/clients' },
                { label: 'Testimonials', path: '/testimonials' }, { label: 'Packages', path: '/packages' },
                { label: 'Contact Us', path: '/contact' },
              ]
            },
            { title: 'Services', links: services.map(s => ({ label: s.title, path: `/services/${s.slug}` })) },
            { title: 'Quick Links', links: footerLinks.quickLinks },
            { title: 'Resources', links: footerLinks.resources },
          ].map(group => (
            <ScrollReveal key={group.title}>
              <div className="glass-card p-6 border border-[var(--border)]">
                <h3 className="text-[var(--text-primary)] font-bold mb-4 gradient-text-blue-cyan">{group.title}</h3>
                <ul className="space-y-2">
                  {group.links.map(link => (
                    <li key={link.label}>
                      <Link to={link.path} className="text-[var(--text-muted)] hover:text-cyan-400 text-sm transition-colors flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-slate-600" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Sitemap;
