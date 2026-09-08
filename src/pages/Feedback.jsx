import { useState } from 'react';
import { Send, Star, CheckCircle } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';

const Feedback = () => {
  const [form, setForm] = useState({ name: '', email: '', rating: 5, service: '', feedback: '' });
  const [submitted, setSubmitted] = useState(false);

  const services = ['Website Design', 'Web Development', 'Digital Marketing', 'App Development', 'Software Development', 'Graphics Designing', 'Domain & Hosting', 'Support & Maintenance'];

  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  return (
    <>
      <PageHero title="Share Your" highlight="Feedback" subtitle="Your feedback helps us improve and serve you better." breadcrumb="Feedback" />
      <section className="section-padding-tight">
        <div className="container-custom max-w-2xl">
          <ScrollReveal>
            {submitted ? (
              <div className="glass-card p-10 border border-green-500/20 text-center">
                <CheckCircle size={48} className="text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">Thank You!</h3>
                <p className="text-[var(--text-muted)]">Your feedback has been submitted. We appreciate your time!</p>
              </div>
            ) : (
              <div className="glass-card p-8 border border-[var(--border)]">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6">Submit Your Feedback</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[var(--text-muted)] text-sm mb-1.5">Name *</label>
                      <input required type="text" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className="w-full bg-white/5 border border-[var(--border)]/10 rounded-xl px-4 py-3 text-[var(--text-primary)] text-sm focus:outline-none focus:border-cyan-400/50 transition-colors" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-[var(--text-muted)] text-sm mb-1.5">Email</label>
                      <input type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} className="w-full bg-white/5 border border-[var(--border)]/10 rounded-xl px-4 py-3 text-[var(--text-primary)] text-sm focus:outline-none focus:border-cyan-400/50 transition-colors" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[var(--text-muted)] text-sm mb-1.5">Service Used</label>
                    <select value={form.service} onChange={e => setForm(f => ({ ...f, service: e.target.value }))} className="w-full bg-slate-800 border border-[var(--border)]/10 rounded-xl px-4 py-3 text-[var(--text-primary)] text-sm focus:outline-none focus:border-cyan-400/50 transition-colors">
                      <option value="">Select a service</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[var(--text-muted)] text-sm mb-2">Rating</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map(r => (
                        <button key={r} type="button" onClick={() => setForm(f => ({ ...f, rating: r }))} className="focus:outline-none">
                          <Star size={28} className={r <= form.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-600'} />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-[var(--text-muted)] text-sm mb-1.5">Your Feedback *</label>
                    <textarea required rows={4} value={form.feedback} onChange={e => setForm(f => ({ ...f, feedback: e.target.value }))} className="w-full bg-white/5 border border-[var(--border)]/10 rounded-xl px-4 py-3 text-[var(--text-primary)] text-sm focus:outline-none focus:border-cyan-400/50 transition-colors resize-none" placeholder="Share your experience with us..." />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center">
                    <Send size={16} /> Submit Feedback
                  </button>
                </form>
              </div>
            )}
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Feedback;
