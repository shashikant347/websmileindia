// src/components/case-study/CaseStudyCTA.jsx
import { Link } from 'react-router-dom';
import {
    ArrowRight,
    MessageCircle,
    Phone,
    CheckCircle2,
} from 'lucide-react';
import { contact } from '../../data/siteData';

export default function CaseStudyCTA({ clientName }) {
    const whatsappUrl = `https://wa.me/919971122682?text=${encodeURIComponent(
        `Hi Web Smile India! I saw the case study on ${clientName || 'your website'} and would like a consultation for my business.`
    )}`;

    return (
        <section className="relative rounded-3xl overflow-hidden border border-[var(--border)] p-8 sm:p-12 lg:p-16 bg-[var(--bg-card)] transition-colors duration-300">
            <div className="absolute top-0 right-0 w-[450px] h-[300px] bg-[var(--accent-cyan)]/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-[var(--accent-purple)]/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
                <div className="text-xs font-semibold text-[var(--accent-cyan)]">
                    Scale your business with Web Smile India
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--text-primary)] tracking-tight leading-[1.15]">
                    Ready to turn search & paid ads into your{' '}
                    <span className="gradient-text-blue-cyan">#1 revenue engine?</span>
                </h2>

                <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed font-normal">
                    Stop wasting marketing budget on unranked pages and expensive, unqualified clicks. Partner with Noida's proven web design & performance agency.
                </p>

                <div className="grid sm:grid-cols-3 gap-4 pt-4 pb-2 text-left">
                    <div className="flex items-start gap-2.5 p-4 rounded-xl bg-[var(--bg-surface-soft)] border border-[var(--border)]">
                        <CheckCircle2 size={16} className="text-[var(--accent-cyan)] shrink-0 mt-0.5" />
                        <div>
                            <div className="text-xs font-bold text-[var(--text-primary)]">Free competitor audit</div>
                            <div className="text-[11px] text-[var(--text-faint)] mt-0.5">Comprehensive SERP analysis</div>
                        </div>
                    </div>

                    <div className="flex items-start gap-2.5 p-4 rounded-xl bg-[var(--bg-surface-soft)] border border-[var(--border)]">
                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                        <div>
                            <div className="text-xs font-bold text-[var(--text-primary)]">Zero wasted budget</div>
                            <div className="text-[11px] text-[var(--text-faint)] mt-0.5">Strict negative keywords & CRO</div>
                        </div>
                    </div>

                    <div className="flex items-start gap-2.5 p-4 rounded-xl bg-[var(--bg-surface-soft)] border border-[var(--border)]">
                        <CheckCircle2 size={16} className="text-[var(--accent-purple)] shrink-0 mt-0.5" />
                        <div>
                            <div className="text-xs font-bold text-[var(--text-primary)]">Dedicated strategist</div>
                            <div className="text-[11px] text-[var(--text-faint)] mt-0.5">Direct phone & WhatsApp support</div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 cursor-pointer"
                    >
                        <span>Book free strategy consultation</span>
                        <ArrowRight size={16} />
                    </Link>

                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all hover:-translate-y-0.5 cursor-pointer"
                    >
                        <MessageCircle size={17} />
                        <span>Chat on WhatsApp</span>
                    </a>

                    <a
                        href={`tel:${contact.phone}`}
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--bg-surface-soft)] hover:bg-[var(--border)] border border-[var(--border)] text-[var(--text-primary)] font-bold text-sm transition-all hover:-translate-y-0.5 cursor-pointer"
                    >
                        <Phone size={15} className="text-[var(--accent-cyan)]" />
                        <span>Call: {contact.phone}</span>
                    </a>
                </div>
            </div>
        </section>
    );
}