// src/components/case-study/CaseStudySidebar.jsx
import { Link } from 'react-router-dom';
import {
    Briefcase,
    MapPin,
    Calendar,
    Globe,
    Phone,
    MessageCircle,
    ArrowUpRight,
    Zap,
} from 'lucide-react';
import { contact } from '../../data/siteData';

export default function CaseStudySidebar({ study }) {
    const whatsappText = encodeURIComponent(
        `Hi Web Smile India team! I was reading your case study on "${study.name}" and would love to discuss a similar growth strategy for my business.`
    );
    const whatsappUrl = `https://wa.me/919971122682?text=${whatsappText}`;

    return (
        <aside className="space-y-6 lg:sticky lg:top-28">
            {/* Quick Facts Card */}
            <div className="rounded-2xl p-6 border border-[var(--border)] shadow-xl bg-[var(--bg-card)] backdrop-blur-xl transition-colors duration-300">
                <div className="flex items-center gap-2.5 pb-4 mb-5 border-b border-[var(--border)]">
                    <div className="w-9 h-9 rounded-xl bg-[var(--accent-cyan)]/10 flex items-center justify-center text-[var(--accent-cyan)] border border-[var(--accent-cyan)]/25">
                        <Briefcase size={17} />
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-[var(--text-primary)]">
                            Project Quick Facts
                        </h3>
                        <p className="text-[11px] text-[var(--text-faint)]">
                            Verified Client Parameters
                        </p>
                    </div>
                </div>

                <div className="space-y-4 text-xs">
                    {/* Client Name */}
                    <div>
                        <span className="text-[var(--text-faint)] block mb-1">Client:</span>
                        <span className="text-sm font-bold text-[var(--text-primary)]">
                            {study.name}
                        </span>
                    </div>

                    {/* Industry */}
                    <div>
                        <span className="text-[var(--text-faint)] block mb-1">Industry:</span>
                        <span className="font-medium text-[var(--text-muted)] leading-relaxed block">
                            {study.industry}
                        </span>
                    </div>

                    {/* Services */}
                    <div>
                        <span className="text-[var(--text-faint)] block mb-1.5">Services Provided:</span>
                        <div className="flex flex-wrap gap-1.5">
                            {study.categories.map((c) => (
                                <span
                                    key={c}
                                    className="px-2.5 py-1 rounded-lg bg-[var(--bg-surface-soft)] border border-[var(--border)] text-[11px] font-semibold text-[var(--accent-cyan)]"
                                >
                                    {c === 'seo' ? 'SEO & Organic Growth' : c === 'ads' ? 'Google Ads (PPC)' : 'Social Media Marketing'}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Target Market */}
                    {study.targetMarket && (
                        <div>
                            <span className="text-[var(--text-faint)] block mb-1">Target Market:</span>
                            <div className="flex items-center gap-1.5 text-[var(--text-primary)] font-medium">
                                <MapPin size={13} className="text-[var(--accent-cyan)] shrink-0" />
                                <span>{study.targetMarket}</span>
                            </div>
                        </div>
                    )}

                    {/* Duration / Timeline */}
                    {study.timeline && (
                        <div>
                            <span className="text-[var(--text-faint)] block mb-1">Engagement Timeline:</span>
                            <div className="flex items-center gap-1.5 text-[var(--text-primary)] font-medium">
                                <Calendar size={13} className="text-[var(--accent-purple)] shrink-0" />
                                <span>{study.timeline}</span>
                            </div>
                        </div>
                    )}

                    {/* Tools & Tech Stack */}
                    {study.tools?.length > 0 && (
                        <div>
                            <span className="text-[var(--text-faint)] block mb-2">Technologies & Tools:</span>
                            <div className="flex flex-wrap gap-1.5">
                                {study.tools.map((t, idx) => (
                                    <span
                                        key={idx}
                                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[var(--bg-surface-soft)] border border-[var(--border)] text-[var(--text-muted)]"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Live Website */}
                    {study.website && (
                        <div className="pt-3 border-t border-[var(--border)]">
                            <a
                                href={study.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-[var(--bg-surface-soft)] hover:bg-[var(--border)] border border-[var(--border)] hover:border-[var(--accent-cyan)]/40 text-xs font-bold text-[var(--text-primary)] transition-all group shadow-sm"
                            >
                                <Globe size={14} className="text-[var(--accent-cyan)]" />
                                <span className="truncate">{study.website.replace(/^https?:\/\//, '')}</span>
                                <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[var(--accent-cyan)]" />
                            </a>
                        </div>
                    )}
                </div>
            </div>

            {/* Consultation Widget */}
            <div className="rounded-2xl p-6 border border-[var(--accent-cyan)]/35 bg-gradient-to-br from-[var(--bg-card)] via-[var(--bg-secondary)] to-[var(--bg-card)] shadow-2xl relative overflow-hidden transition-colors duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-cyan)]/10 blur-2xl pointer-events-none rounded-full" />

                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--accent-cyan)] mb-2">
                    <Zap size={14} />
                    <span>Free Growth Audit</span>
                </div>

                <h4 className="text-lg font-black text-[var(--text-primary)] leading-snug">
                    Want Similar ROI for Your Business?
                </h4>

                <p className="text-xs text-[var(--text-muted)] mt-2 leading-relaxed font-normal">
                    Get a personalized competitor and search audit tailored for your industry. Speak directly with our Noida team.
                </p>

                <div className="mt-5 space-y-2.5">
                    {/* WhatsApp */}
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md shadow-emerald-900/20 cursor-pointer"
                    >
                        <MessageCircle size={15} />
                        <span>Chat on WhatsApp</span>
                    </a>

                    {/* Call */}
                    <a
                        href={`tel:${contact.phone}`}
                        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--bg-surface-soft)] hover:bg-[var(--border)] border border-[var(--border)] text-[var(--text-primary)] text-xs font-bold transition-all cursor-pointer shadow-sm"
                    >
                        <Phone size={14} className="text-[var(--accent-cyan)]" />
                        <span>Call: {contact.phone}</span>
                    </a>

                    {/* Free Consultation Link */}
                    <Link
                        to="/contact"
                        className="w-full flex items-center justify-center gap-1.5 pt-2 text-[11px] font-semibold text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors"
                    >
                        <span>Request in-depth website audit</span>
                        <ArrowUpRight size={12} />
                    </Link>
                </div>
            </div>
        </aside>
    );
}
