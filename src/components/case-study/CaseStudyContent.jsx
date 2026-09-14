// src/components/case-study/CaseStudyContent.jsx
import { motion } from 'framer-motion';
import {
    CheckCircle2,
    ShieldCheck,
    Target,
    Layers,
    TrendingUp,
    Star,
    Quote,
} from 'lucide-react';

const revealUp = {
    hidden: { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};
const revealContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
};

// A numbered exhibit marker + connecting spine replaces the repeated
// icon-and-uppercase-label row every section used to open with. The
// numbering is honest here — these sections really do read in order,
// from background through to client sign-off.
function Exhibit({ id, number, kicker, title, children }) {
    return (
        <motion.section
            id={id}
            className="scroll-mt-40 relative pl-0 lg:pl-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={revealContainer}
        >
            <motion.div
                variants={revealUp}
                className="hidden lg:flex absolute left-0 top-1 w-10 h-10 rounded-full border border-[var(--border)] bg-[var(--bg-card)] items-center justify-center text-xs font-mono font-bold text-[var(--text-faint)]"
            >
                {number}
            </motion.div>

            <motion.div variants={revealUp} className="flex items-center gap-2 text-xs font-semibold text-[var(--text-faint)] mb-2">
                <span className="lg:hidden font-mono text-[var(--accent-cyan)]">{number}</span>
                <span>{kicker}</span>
            </motion.div>
            <motion.h2 variants={revealUp} className="text-2xl sm:text-3xl font-black text-[var(--text-primary)] tracking-tight mb-5 leading-snug">
                {title}
            </motion.h2>

            {children}
        </motion.section>
    );
}

export default function CaseStudyContent({ study }) {
    const pillarIcons = [Target, Layers, TrendingUp, ShieldCheck];

    // Keep exhibit numbers sequential even though pillars / results /
    // testimonial are optional and may not all be present for a given client.
    let n = 0;
    const num = () => String(++n).padStart(2, '0');
    const overviewNo = num();
    const challengeNo = num();
    const pillarsNo = study.strategyPillars?.length > 0 ? num() : null;
    const resultsNo = study.resultsHighlights?.length > 0 ? num() : null;
    const testimonialNo = study.testimonial ? num() : null;

    return (
        <div className="relative space-y-16">
            {/* Connecting spine running behind the exhibit markers */}
            <div
                className="hidden lg:block absolute left-5 top-4 bottom-4 w-px bg-gradient-to-b from-[var(--accent-cyan)]/40 via-[var(--border)] to-transparent"
                aria-hidden="true"
            />

            {/* 1. Executive Summary */}
            <Exhibit id="overview" number={overviewNo} kicker="Background" title={`Scaling growth & digital authority for ${study.name}`}>
                <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed font-normal max-w-3xl">
                    {study.description}
                </p>
            </Exhibit>

            {/* 2. The Challenge vs The Solution — asymmetric on purpose: the
                obstacle is stated plainly, the fix is where the visual weight sits. */}
            <Exhibit id="challenge-solution" number={challengeNo} kicker="Challenge & approach" title="Overcoming the bottleneck">
                <div className="grid md:grid-cols-12 gap-6 items-stretch">
                    <motion.div variants={revealUp} className="md:col-span-5 md:pr-6 md:border-r md:border-[var(--border)]">
                        <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400">The obstacle</span>
                        <p className="text-sm text-[var(--text-muted)] leading-relaxed font-normal mt-2">
                            {study.challenge}
                        </p>
                    </motion.div>

                    <motion.div
                        variants={revealUp}
                        className="md:col-span-7 rounded-2xl p-6 sm:p-7 border border-[var(--accent-cyan)]/30 bg-[var(--accent-cyan)]/[0.05] relative overflow-hidden"
                    >
                        <span className="text-[11px] font-bold text-[var(--accent-cyan)]">The WSI approach</span>
                        <p className="text-sm text-[var(--text-primary)] leading-relaxed font-medium mt-2">
                            {study.solution}
                        </p>
                    </motion.div>
                </div>
            </Exhibit>

            {/* 3. Strategic Execution Pillars — a genuine sequence, so numbering here earns its keep */}
            {study.strategyPillars?.length > 0 && (
                <Exhibit id="strategy-pillars" number={pillarsNo} kicker="Execution roadmap" title="How we delivered measurable impact">
                    <motion.p variants={revealUp} className="text-sm text-[var(--text-muted)] mb-8 max-w-2xl font-normal">
                        A four-pillar framework built to drive sustained search dominance and conversion efficiency.
                    </motion.p>

                    <div className="grid sm:grid-cols-2 gap-5">
                        {study.strategyPillars.map((pillar, index) => {
                            const Icon = pillarIcons[index % pillarIcons.length];
                            return (
                                <motion.div
                                    key={index}
                                    variants={revealUp}
                                    className="rounded-2xl p-6 bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--accent-cyan)]/40 transition-colors duration-300 group"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="w-10 h-10 rounded-xl bg-[var(--bg-surface-soft)] border border-[var(--border)] flex items-center justify-center text-[var(--accent-cyan)] group-hover:border-[var(--accent-cyan)]/40 transition-colors">
                                            <Icon size={18} />
                                        </div>
                                        <span className="text-xs font-mono font-bold text-[var(--text-faint)] group-hover:text-[var(--accent-cyan)] transition-colors">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                    </div>

                                    <h3 className="text-base font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-cyan)] transition-colors">
                                        {pillar.title}
                                    </h3>

                                    <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed font-normal">
                                        {pillar.desc}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </Exhibit>
            )}

            {/* 4. Key Measurable Outcomes */}
            {study.resultsHighlights?.length > 0 && (
                <Exhibit id="results" number={resultsNo} kicker="Measurable results" title="Key outcomes & performance milestones">
                    <motion.div
                        variants={revealContainer}
                        className="grid sm:grid-cols-2 gap-4"
                    >
                        {study.resultsHighlights.map((highlight, idx) => (
                            <motion.div
                                key={idx}
                                variants={revealUp}
                                className="flex items-start gap-3 p-4 rounded-xl bg-[var(--bg-surface-soft)] border border-[var(--border)] hover:border-emerald-500/30 transition-colors"
                            >
                                <div className="w-6 h-6 rounded-full bg-emerald-500/15 border border-emerald-500/35 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                                    <CheckCircle2 size={13} />
                                </div>
                                <span className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] leading-snug">
                                    {highlight}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </Exhibit>
            )}

            {/* 5. Client Testimonial & Endorsement */}
            {study.testimonial && (
                <Exhibit id="testimonial" number={testimonialNo} kicker="Client sign-off" title="What the client says">
                    <div className="rounded-2xl p-7 sm:p-9 border border-[var(--border)] bg-[var(--bg-card)] relative overflow-hidden">
                        <Quote size={72} className="absolute -right-4 -bottom-4 text-[var(--text-primary)]/[0.04] pointer-events-none" />

                        <div className="flex items-center gap-1 text-amber-500 dark:text-amber-400 mb-5">
                            {[...Array(study.testimonial.rating || 5)].map((_, i) => (
                                <Star key={i} size={15} fill="currentColor" />
                            ))}
                        </div>

                        <blockquote className="text-base sm:text-lg text-[var(--text-primary)] font-medium italic leading-relaxed mb-6">
                            "{study.testimonial.quote}"
                        </blockquote>

                        <div className="flex items-center gap-3.5 pt-5 border-t border-[var(--border)]">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[var(--accent-cyan)] to-[var(--accent-purple)] flex items-center justify-center text-white font-bold text-sm shrink-0">
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
                </Exhibit>
            )}
        </div>
    );
}