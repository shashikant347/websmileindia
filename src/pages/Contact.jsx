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
            {/* Contact Info */}
            <div className="space-y-5">
              <ScrollReveal direction="left">
                <div className="glass-card p-6">
                  <h3 className="text-[var(--text-primary)] font-bold text-lg mb-5 gradient-text-blue-cyan">Corporate Office</h3>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <MapPin size={18} className="text-[var(--accent-cyan)] flex-shrink-0 mt-1" />
                      <div>
                        <div className="text-[var(--text-primary)] text-sm font-medium mb-0.5">Address</div>
                        <div className="text-[var(--text-muted)] text-sm">C - 87, First Floor, Sector-63,<br />Noida, U.P. India - 201301</div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Phone size={18} className="text-[var(--accent-cyan)] flex-shrink-0 mt-1" />
                      <div>
                        <div className="text-[var(--text-primary)] text-sm font-medium mb-0.5">Phone</div>
                        <a href={`tel:${contact.phone}`} className="text-[var(--text-muted)] text-sm hover:text-[var(--accent-cyan)] transition-colors block">{contact.phone}</a>
                        <a href={`tel:${contact.landline}`} className="text-[var(--text-muted)] text-sm hover:text-[var(--accent-cyan)] transition-colors block">{contact.landline}</a>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Mail size={18} className="text-[var(--accent-cyan)] flex-shrink-0 mt-1" />
                      <div>
                        <div className="text-[var(--text-primary)] text-sm font-medium mb-0.5">Email</div>
                        <a href={`mailto:${contact.email}`} className="text-[var(--text-muted)] text-sm hover:text-[var(--accent-cyan)] transition-colors block">{contact.email}</a>
                        <a href={`mailto:${contact.supportEmail}`} className="text-[var(--text-muted)] text-sm hover:text-[var(--accent-cyan)] transition-colors block">{contact.supportEmail}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={100}>
                <div className="glass-card p-6">
                  <h3 className="text-[var(--text-primary)] font-bold text-lg mb-5 gradient-text-blue-cyan">Registered Office</h3>
                  <div className="flex gap-3">
                    <MapPin size={18} className="text-[var(--accent-blue)] flex-shrink-0 mt-1" />
                    <div className="text-[var(--text-muted)] text-sm">B-196, New Ashok Nagar,<br />New Delhi, India - 110096</div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-[var(--border)]">
                    <div className="text-[var(--text-primary)] text-sm font-medium mb-1">Career Enquiries</div>
                    <a href={`mailto:${contact.careerEmail}`} className="text-[var(--text-muted)] text-sm hover:text-[var(--accent-cyan)] transition-colors">{contact.careerEmail}</a>
                  </div>
                </div>
              </ScrollReveal>

              {/* Social Links */}
              <ScrollReveal direction="left" delay={200}>
                <div className="glass-card p-6">
                  <h4 className="text-[var(--text-primary)] font-bold mb-4">Follow Us</h4>
                  <div className="flex gap-3">
                    {[
                      { Icon: FacebookIcon, url: social.facebook },
                      { Icon: LinkedinIcon, url: social.linkedin },
                      { Icon: InstagramIcon, url: social.instagram },
                      { Icon: TwitterIcon, url: social.twitter },
                    ].map(({ Icon, url }, i) => (
                      <a key={i} href={url} target="_blank" rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-[var(--bg-card-soft)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-cyan)] hover:border-[var(--accent-cyan)]/50 transition-all hover:-translate-y-1"
                      >
                        <Icon />
                      </a>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ScrollReveal direction="right">
                {submitted ? (
                  <div className="glass-card p-10 border border-green-500/20 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} className="text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">Message Sent!</h3>
                    <p className="text-[var(--text-muted)] mb-6">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                    <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }); }} className="btn-primary">
                      Send Another
                    </button>
                  </div>
                ) : (
                  <div className="glass-card p-8">
                    <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6">Send Us a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {['name', 'email'].map((field) => (
                          <div key={field}>
                            <label className="block text-[var(--text-muted)] text-sm mb-1.5 capitalize">{field} *</label>
                            <input
                              type={field === 'email' ? 'email' : 'text'}
                              value={form[field]}
                              onChange={(e) => { setForm(f => ({ ...f, [field]: e.target.value })); setErrors(er => ({ ...er, [field]: '' })); }}
                              placeholder={field === 'name' ? 'Your full name' : 'your@email.com'}
                              className={`w-full bg-[var(--bg-card-soft)] border ${errors[field] ? 'border-red-400/50' : 'border-[var(--border)]'} rounded-xl px-4 py-3 text-[var(--text-primary)] text-sm placeholder-[var(--text-faint)] focus:outline-none focus:border-[var(--accent-cyan)]/50 transition-colors`}
                            />
                            {errors[field] && <p className="text-red-400 text-xs mt-1">{errors[field]}</p>}
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
                              className="w-full bg-[var(--bg-card-soft)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--text-primary)] text-sm placeholder-[var(--text-faint)] focus:outline-none focus:border-[var(--accent-cyan)]/50 transition-colors"
                            />
                          </div>
                        ))}
                      </div>
                      <div>
                        <label className="block text-[var(--text-muted)] text-sm mb-1.5">Message *</label>
                        <textarea
                          rows={5}
                          value={form.message}
                          onChange={(e) => { setForm(f => ({ ...f, message: e.target.value })); setErrors(er => ({ ...er, message: '' })); }}
                          placeholder="Tell us about your project..."
                          className={`w-full bg-[var(--bg-card-soft)] border ${errors.message ? 'border-red-400/50' : 'border-[var(--border)]'} rounded-xl px-4 py-3 text-[var(--text-primary)] text-sm placeholder-[var(--text-faint)] focus:outline-none focus:border-[var(--accent-cyan)]/50 transition-colors resize-none`}
                        />
                        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                      </div>
                      <button type="submit" className="btn-primary w-full justify-center py-4">
                        <Send size={18} /> Send Message
                      </button>
                    </form>
                  </div>
                )}
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;