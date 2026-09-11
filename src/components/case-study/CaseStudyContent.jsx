// src/components/case-study/CaseStudyContent.jsx
import {
    AlertCircle,
    CheckCircle,
    CheckCircle2,
    ShieldCheck,
    Target,
    Layers,
    TrendingUp,
    Star,
    Quote,
    Award,
    Sparkles,
    Lightbulb,
} from 'lucide-react';

export default function CaseStudyContent({ study }) {
    const pillarIcons = [Target, Layers, TrendingUp, ShieldCheck];

    return (
        <div className="space-y-14">
            {/* 1. Executive Summary with generous breathing room */}
            <section id="overview" className="scroll-mt-40 pt-2">
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[var(--accent-cyan)] mb-3">
                    <Sparkles size={14} />
                    <span>Project Overview & Background</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[var(--text-primary)] tracking-tight mb-5 leading-snug">
                    Scaling Growth & Digital Authority for {study.name}
                </h2>
                <div className="prose prose-invert max-w-none">
                    <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed font-normal">
                        {study.description}
                    </p>
                </div>
            </section>

            {/* 2. The Challenge vs The Solution */}
            <section id="challenge-solution" className="scroll-mt-40">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--text-faint)] mb-3">
                    <Lightbulb size={14} className="text-amber-500 dark:text-amber-400" />
                    <span>The Strategic Challenge & Intervention</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)] tracking-tight mb-6">
                    Overcoming Bottlenecks with Tailored Execution
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* The Challenge */}
                    <div className="rounded-2xl p-6 sm:p-7 border border-amber-500/30 bg-amber-500/[0.04] relative overflow-hidden shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-9 h-9 rounded-xl bg-amber-400/15 border border-amber-400/35 flex items-center justify-center text-amber-500 dark:text-amber-400 shrink-0">
                                <AlertCircle size={18} />
                            </div>
                            <div>
                                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                                    The Obstacle
                                </span>
                                <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)]">
                                    The Core Challenge
                                </h3>
                            </div>
                        </div>

                        <p className="text-sm text-[var(--text-muted)] leading-relaxed font-normal">
                            {study.challenge}
                        </p>
                    </div>

                    {/* The Solution */}
                    <div className="rounded-2xl p-6 sm:p-7 border border-[var(--accent-cyan)]/35 bg-[var(--accent-cyan)]/[0.05] relative overflow-hidden shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-9 h-9 rounded-xl bg-[var(--accent-cyan)]/15 border border-[var(--accent-cyan)]/35 flex items-center justify-center text-[var(--accent-cyan)] shrink-0">
                                <CheckCircle size={18} />
                            </div>
                            <div>
                                <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--accent-cyan)]">
                                    The WSI Blueprint
                                </span>
                                <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)]">
                                    The Strategic Solution
                                </h3>
                            </div>
                        </div>

                        <p className="text-sm text-[var(--text-muted)] leading-relaxed font-normal">
                            {study.solution}
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. Strategic Execution Pillars */}
            {study.strategyPillars?.length > 0 && (
                <section id="strategy-pillars" className="scroll-mt-40">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--accent-cyan)] mb-3">
                        <Layers size={14} />
                        <span>Execution Roadmap</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)] tracking-tight mb-2">
                        How We Delivered Measurable Impact
                    </h2>
                    <p className="text-sm text-[var(--text-muted)] mb-8 max-w-2xl font-normal">
                        Our battle-tested four-pillar framework designed to drive sustained search dominance and conversion efficiency.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-5">
                        {study.strategyPillars.map((pillar, index) => {
                            const Icon = pillarIcons[index % pillarIcons.length];
                            return (
                                <div
                                    key={index}
                                    className="rounded-2xl p-6 bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--accent-cyan)]/40 transition-all duration-300 group hover:-translate-y-1 shadow-sm hover:shadow-md"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="w-10 h-10 rounded-xl bg-[var(--bg-surface-soft)] border border-[var(--border)] flex items-center justify-center text-[var(--accent-cyan)] group-hover:bg-[var(--accent-cyan)]/15 group-hover:border-[var(--accent-cyan)]/35 transition-colors">
                                            <Icon size={18} />
                                        </div>
                                        <span className="text-xs font-mono font-bold text-[var(--text-faint)] group-hover:text-[var(--accent-cyan)] transition-colors">
                                            0{index + 1}
                                        </span>
                                    </div>

                                    <h3 className="text-base font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-cyan)] transition-colors">
                                        {pillar.title}
                                    </h3>

                                    <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed font-normal">
                                        {pillar.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </section>
            )}

            {/* 4. Key Measurable Outcomes */}
            {study.resultsHighlights?.length > 0 && (
                <section id="results" className="scroll-mt-40">
                    <div className="rounded-2xl bg-[var(--bg-card)] p-6 sm:p-8 border border-[var(--border)] relative overflow-hidden shadow-md">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
                            <Award size={14} />
                            <span>Measurable Business Results</span>
                        </div>
                        <h2 className="text-xl sm:text-2xl font-black text-[var(--text-primary)] tracking-tight mb-6">
                            Key Outcomes & Performance Milestones
                        </h2>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {study.resultsHighlights.map((highlight, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-start gap-3 p-4 rounded-xl bg-[var(--bg-surface-soft)] border border-[var(--border)] hover:border-[var(--accent-cyan)]/30 transition-colors shadow-sm"
                                >
                                    <div className="w-6 h-6 rounded-full bg-emerald-500/15 border border-emerald-500/35 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                                        <CheckCircle2 size={13} />
                                    </div>
                                    <span className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] leading-snug">
                                        {highlight}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* 5. Client Testimonial & Endorsement */}
            {study.testimonial && (
                <section id="testimonial" className="scroll-mt-40">
                    <div className="rounded-2xl p-7 sm:p-9 border border-[var(--border)] bg-gradient-to-br from-[var(--bg-card)] via-[var(--bg-secondary)] to-[var(--bg-card)] relative overflow-hidden shadow-xl transition-colors duration-300">
                        <Quote
                            size={72}
                            className="absolute -right-4 -bottom-4 text-[var(--text-primary)]/[0.04] pointer-events-none"
                        />

                        <div className="flex items-center gap-1 text-amber-500 dark:text-amber-400 mb-5">
                            {[...Array(study.testimonial.rating || 5)].map((_, i) => (
                                <Star key={i} size={15} fill="currentColor" />
                            ))}
                        </div>

                        <blockquote className="text-base sm:text-lg text-[var(--text-primary)] font-medium italic leading-relaxed mb-6">
                            "{study.testimonial.quote}"
                        </blockquote>

                        <div className="flex items-center gap-3.5 pt-5 border-t border-[var(--border)]">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[var(--accent-cyan)] to-[var(--accent-purple)] flex items-center justify-center text-white font-bold text-sm shadow-md shrink-0">
                                {study.name.charAt(0)}
                            </div>
                            <div>
                                <div className="text-sm font-bold text-[var(--text-primary)]">
                                    {study.testimonial.author}
                                </div>
                                <div className="text-xs text-[var(--text-faint)]">
                                    {study.testimonial.role} · {study.name}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
