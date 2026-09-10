import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';
import { contact, social } from '../data/siteData';

const FacebookIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const LinkedinIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>;
const InstagramIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>;
const TwitterIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;

// Circular glowing badge — replaces the flat icon-next-to-text row.
// Each contact channel gets its own accent color so the list reads
// as a small color trail rather than one repeated icon style.
const GlowBadge = ({ icon: Icon, accent }) => {
  const colorVar = `var(--accent-${accent})`;
  const glowClass = accent === 'cyan' ? 'glow-cyan' : accent === 'blue' ? 'glow-blue' : 'glow-violet';
  return (
    <div
      className={`w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 ${glowClass}`}
      style={{ background: `rgba(var(--accent-${accent}-rgb), 0.12)` }}
    >
      <Icon size={18} style={{ color: colorVar }} />
    </div>
  );
};

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errs.email = 'Valid email required';
    if (!form.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        title="Contact"
        highlight="Us"
        subtitle="Thank you for your interest. Please fill out the form and we'll respond within 24 hours."
        breadcrumb="Contact Us"
      />

      <section className="section-padding-tight">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Consolidated contact panel — one card instead of three stacked ones */}
            <ScrollReveal direction="left">
              <div className="gradient-border h-full">
                <div className="glass-depth rounded-[14px] p-7 md:p-8 h-full">
                  <h3 className="text-2xl font-bold gradient-text-blue-cyan mb-1">Get in touch</h3>
                  <p className="text-[var(--text-muted)] text-sm mb-7">We usually reply within a business day.</p>

                  <div className="space-y-5">
                    <div className="flex gap-4">
                      <GlowBadge icon={MapPin} accent="cyan" />
                      <div>
                        <div className="text-[var(--text-primary)] text-sm font-semibold mb-0.5">Corporate Office</div>
                        <div className="text-[var(--text-muted)] text-sm leading-relaxed">C - 87, First Floor, Sector-63,<br />Noida, U.P. India - 201301</div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <GlowBadge icon={Phone} accent="blue" />
                      <div>
                        <div className="text-[var(--text-primary)] text-sm font-semibold mb-0.5">Phone</div>
                        <a href={`tel:${contact.phone}`} className="text-[var(--text-muted)] text-sm hover:text-[var(--accent-cyan)] transition-colors block">{contact.phone}</a>
                        <a href={`tel:${contact.landline}`} className="text-[var(--text-muted)] text-sm hover:text-[var(--accent-cyan)] transition-colors block">{contact.landline}</a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <GlowBadge icon={Mail} accent="purple" />
                      <div>
                        <div className="text-[var(--text-primary)] text-sm font-semibold mb-0.5">Email</div>
                        <a href={`mailto:${contact.email}`} className="text-[var(--text-muted)] text-sm hover:text-[var(--accent-cyan)] transition-colors block">{contact.email}</a>
                        <a href={`mailto:${contact.supportEmail}`} className="text-[var(--text-muted)] text-sm hover:text-[var(--accent-cyan)] transition-colors block">{contact.supportEmail}</a>
                      </div>
                    </div>
                  </div>

                  <div className="section-divider my-6" />

                  <div className="flex gap-4">
                    <GlowBadge icon={MapPin} accent="blue" />
                    <div>
                      <div className="text-[var(--text-primary)] text-sm font-semibold mb-0.5">Registered Office</div>
                      <div className="text-[var(--text-muted)] text-sm leading-relaxed">B-196, New Ashok Nagar,<br />New Delhi, India - 110096</div>
                    </div>
                  </div>

                  <div className="mt-5 pl-[60px]">
                    <div className="text-[var(--text-primary)] text-sm font-semibold mb-1">Career Enquiries</div>
                    <a href={`mailto:${contact.careerEmail}`} className="text-[var(--text-muted)] text-sm hover:text-[var(--accent-cyan)] transition-colors">{contact.careerEmail}</a>
                  </div>

                  <div className="section-divider my-6" />

                  <div>
                    <div className="text-[var(--text-primary)] text-sm font-semibold mb-3">Follow us</div>
                    <div className="flex gap-3">
                      {[
                        { Icon: FacebookIcon, url: social.facebook },
                        { Icon: LinkedinIcon, url: social.linkedin },
                        { Icon: InstagramIcon, url: social.instagram },
                        { Icon: TwitterIcon, url: social.twitter },
                      ].map(({ Icon, url }, i) => (
                        <a key={i} href={url} target="_blank" rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-[var(--bg-card-soft)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-cyan)] hover:border-[var(--accent-cyan)]/50 transition-all hover:-translate-y-1"
                        >
                          <Icon />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ScrollReveal direction="right">
                {submitted ? (
                  <div className="gradient-border">
                    <div className="glass-depth rounded-[14px] p-10 md:p-16 text-center">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 glow-cyan" style={{ background: 'rgba(var(--accent-cyan-rgb), 0.12)' }}>
                        <CheckCircle size={30} style={{ color: 'var(--accent-cyan)' }} />
                      </div>
                      <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">Message sent</h3>
                      <p className="text-[var(--text-muted)] text-sm mb-7 max-w-sm mx-auto leading-relaxed">
                        Thank you for reaching out — someone from our team will get back to you within 24 hours.
                      </p>
                      <button
                        onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }); }}
                        className="btn-outline"
                      >
                        Send another message
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="gradient-border">
                    <div className="glass-depth rounded-[14px] p-6 md:p-9">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-[var(--text-primary)]">Send us a message</h3>
                        <span className="tag-badge">24h reply</span>
                      </div>
                      <p className="text-[var(--text-muted)] text-sm mb-7">Fields marked <span className="text-[var(--accent-cyan)]">*</span> are required.</p>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          {['name', 'email'].map((field) => (
                            <div key={field}>
                              <label className="block text-[var(--text-muted)] text-sm mb-1.5 capitalize">
                                {field} <span className="text-[var(--accent-cyan)]">*</span>
                              </label>
                              <input
                                type={field === 'email' ? 'email' : 'text'}
                                value={form[field]}
                                onChange={(e) => { setForm(f => ({ ...f, [field]: e.target.value })); setErrors(er => ({ ...er, [field]: '' })); }}
                                placeholder={field === 'name' ? 'Your full name' : 'your@email.com'}
                                className={`contact-input w-full ${errors[field] ? 'contact-input-error' : ''}`}
                              />
                              {errors[field] && <p className="text-red-400 text-xs mt-1.5">{errors[field]}</p>}
                            </div>
                          ))}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          {[{ field: 'phone', placeholder: '+91 XXXXXXXXXX', type: 'tel' }, { field: 'subject', placeholder: 'How can we help?', type: 'text' }].map(({ field, placeholder, type }) => (
                            <div key={field}>
                              <label className="block text-[var(--text-muted)] text-sm mb-1.5 capitalize">{field}</label>
                              <input
                                type={type}
                                value={form[field]}
                                onChange={(e) => setForm(f => ({ ...f, [field]: e.target.value }))}
                                placeholder={placeholder}
                                className="contact-input w-full"
                              />
                            </div>
                          ))}
                        </div>
                        <div>
                          <label className="block text-[var(--text-muted)] text-sm mb-1.5">
                            Message <span className="text-[var(--accent-cyan)]">*</span>
                          </label>
                          <textarea
                            rows={5}
                            value={form.message}
                            onChange={(e) => { setForm(f => ({ ...f, message: e.target.value })); setErrors(er => ({ ...er, message: '' })); }}
                            placeholder="Tell us about your project..."
                            className={`contact-input w-full resize-none ${errors.message ? 'contact-input-error' : ''}`}
                          />
                          {errors.message && <p className="text-red-400 text-xs mt-1.5">{errors.message}</p>}
                        </div>
                        <button type="submit" className="gradient-submit-btn w-full">
                          Send message
                          <Send size={18} />
                        </button>
                      </form>
                    </div>
                  </div>
                )}
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .contact-input {
          background: var(--bg-card-soft);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 12px 16px;
          color: var(--text-primary);
          font-size: 14px;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .contact-input::placeholder { color: var(--text-faint); }
        .contact-input:focus {
          outline: none;
          border-color: rgba(var(--accent-cyan-rgb), 0.6);
          box-shadow: 0 0 0 3px rgba(var(--accent-cyan-rgb), 0.14);
        }
        .contact-input-error { border-color: rgba(248, 113, 113, 0.6); }

        .gradient-submit-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: linear-gradient(90deg, var(--accent-cyan), var(--accent-blue), var(--accent-purple));
          color: #0B0F1A;
          font-weight: 700;
          font-size: 15px;
          padding: 16px 0;
          border-radius: 9999px;
          box-shadow: 0 10px 28px rgba(var(--accent-cyan-rgb), 0.30);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .gradient-submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 34px rgba(var(--accent-purple-rgb), 0.35);
        }
      `}</style>
    </>
  );
};

export default Contact;