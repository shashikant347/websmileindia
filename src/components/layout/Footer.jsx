import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { company, contact, social, footerLinks } from '../../data/siteData';

// Inline SVG social icons (lucide-react removed brand icons)
const FacebookIcon = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const LinkedinIcon = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>;
const InstagramIcon = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>;
const TwitterIcon = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-[var(--bg-secondary)] to-[var(--bg-primary)] border-t border-[var(--border)] pt-20 pb-8 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[var(--accent-blue)]/5 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-[var(--accent-cyan)]/3 blur-3xl rounded-full" />
        <div className="absolute -top-1/2 left-0 w-[300px] h-[300px] bg-[var(--accent-purple)]/3 blur-3xl rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-14">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-3 group w-fit">
              <div className="relative w-11 h-11 flex items-center justify-center flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl opacity-100 shadow-lg shadow-blue-500/20" />
                <span className="relative text-[var(--text-primary)] font-black text-lg z-10">W</span>
              </div>
              <span className="text-[var(--text-primary)] font-black text-lg">
                Web <span className="gradient-text-blue-cyan">Smile</span> India
              </span>
            </Link>
            
            <p className="text-[var(--text-muted)] text-sm leading-relaxed max-w-xs font-light">
              {company.tagline}. Leading web design & digital marketing company based in Noida, India.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <a href={`tel:${contact.phone}`} className="flex items-center gap-3 text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors duration-200 group">
                <Phone size={16} className="text-[var(--accent-cyan)] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-medium">{contact.phone}</span>
              </a>
              <a href={`tel:${contact.landline}`} className="flex items-center gap-3 text-[var(--text-muted)] hover:text-[var(--accent-blue)] transition-colors duration-200 group">
                <Phone size={16} className="text-[var(--accent-blue)] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-medium">{contact.landline}</span>
              </a>
              <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors duration-200 group">
                <Mail size={16} className="text-[var(--accent-cyan)] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-medium">{contact.email}</span>
              </a>
              <div className="flex items-start gap-3 text-[var(--text-muted)] pt-1">
                <MapPin size={16} className="text-[var(--accent-blue)] flex-shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">C - 87, First Floor, Sector-63,<br />Noida, U.P. India - 201301</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {[
                { Icon: FacebookIcon, url: social.facebook, label: 'Facebook', color: 'hover:text-blue-600' },
                { Icon: LinkedinIcon, url: social.linkedin, label: 'LinkedIn', color: 'hover:text-blue-700' },
                { Icon: InstagramIcon, url: social.instagram, label: 'Instagram', color: 'hover:text-pink-500' },
                { Icon: TwitterIcon, url: social.twitter, label: 'Twitter', color: 'hover:text-sky-400' },
              ].map(({ Icon, url, label, color }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-10 h-10 rounded-lg bg-[var(--bg-card-soft)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] transition-all duration-300 hover:bg-[var(--glass-hover-bg)] hover:border-[var(--border-strong)] hover:scale-110 hover:-translate-y-1 ${color}`}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[var(--text-primary)] font-semibold mb-6 text-sm uppercase tracking-widest letter-spacing: 1px">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link, idx) => (
                <li key={link.label} style={{ animation: `slideDown 0.4s ease forwards`, animationDelay: `${idx * 40}ms`, opacity: 0 }}>
                  <Link
                    to={link.path}
                    className="text-[var(--text-muted)] hover:text-[var(--accent-cyan)] text-sm transition-all duration-200 flex items-center gap-2.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[var(--text-faint)] group-hover:bg-[var(--accent-cyan)] group-hover:scale-150 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="text-[var(--text-primary)] font-semibold mb-6 text-sm uppercase tracking-widest">Services</h4>
            <ul className="space-y-3">
              {footerLinks.importantLinks.map((link, idx) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-[var(--text-muted)] hover:text-[var(--accent-cyan)] text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[var(--text-faint)] group-hover:bg-[var(--accent-cyan)] transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-[var(--text-primary)] font-semibold mb-6 text-sm uppercase tracking-widest">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, idx) => (
                <li key={link.label} style={{ animation: `slideDown 0.4s ease forwards`, animationDelay: `${(idx + 4) * 40}ms`, opacity: 0 }}>
                  <Link
                    to={link.path}
                    className="text-[var(--text-muted)] hover:text-[var(--accent-cyan)] text-sm transition-all duration-200 flex items-center gap-2.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[var(--text-faint)] group-hover:bg-[var(--accent-cyan)] group-hover:scale-150 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[var(--border)] my-12" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <p className="text-[var(--text-faint)] font-light">© {year} Web Smile India. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-[var(--text-faint)] hover:text-[var(--accent-cyan)] transition-colors duration-200 font-medium">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="text-[var(--text-faint)] hover:text-[var(--accent-cyan)] transition-colors duration-200 font-medium">Terms & Conditions</Link>
            <Link to="/disclaimer" className="text-[var(--text-faint)] hover:text-[var(--accent-cyan)] transition-colors duration-200 font-medium">Disclaimer</Link>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href={contact.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/50 hover:scale-110 hover:shadow-green-500/70 transition-all duration-300 animate-bounce group"
      >
        <MessageCircle size={28} className="text-white group-hover:scale-110 transition-transform" />
      </a>
    </footer>
  );
};

export default Footer;
