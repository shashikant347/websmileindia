// src/components/case-study/CaseStudyHero.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Search,
    MousePointerClick,
    Share2,
    ArrowLeft,
    ArrowUpRight,
    Globe,
    Calendar,
    MapPin,
    Check,
    CheckCircle2,
    Lock,
} from 'lucide-react';
import { heroShot } from '../../utils/websiteScreenshot';
import { parseKpiValue } from '../../utils/parseCounterValue';
import AnimatedCounter from '../ui/AnimatedCounter';

// Import high-res portfolio screenshots from local repository
const imageModules = import.meta.glob('../../assets/portfolio/*.{png,jpg,jpeg,webp}', {
    eager: true,
    import: 'default',
});

const imagesBySlug = Object.entries(imageModules).reduce((acc, [path, src]) => {
    const match = path.match(/([^/]+)\.(png|jpg|jpeg|webp)$/i);
    if (match) acc[match[1]] = src;
    return acc;
}, {});

const CATEGORY_META = {
    seo: {
        label: 'SEO & Organic Growth',
        icon: Search,
        accentClass: 'text-[var(--accent-cyan)]',
        badgeBg: 'bg-[var(--accent-cyan)]/10',
        badgeBorder: 'border-[var(--accent-cyan)]/30',
    },
    ads: {
        label: 'Google Ads & Paid Search',
        icon: MousePointerClick,
        accentClass: 'text-[var(--accent-blue)]',
        badgeBg: 'bg-[var(--accent-blue)]/10',
        badgeBorder: 'border-[var(--accent-blue)]/30',
    },
    social: {
        label: 'Social Media Advertising',
        icon: Share2,
        accentClass: 'text-[var(--accent-purple)]',
        badgeBg: 'bg-[var(--accent-purple)]/10',
        badgeBorder: 'border-[var(--accent-purple)]/30',
    },
};

const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export default function CaseStudyHero({ study }) {
    const [copied, setCopied] = useState(false);
    const primaryCategory = study.categories?.[0] || 'seo';
    const meta = CATEGORY_META[primaryCategory] || CATEGORY_META.seo;
    const CategoryIcon = meta.icon;

    const localHero = imagesBySlug[study.id];
    const bgImage = localHero || study.images?.[0] || (study.website ? heroShot(study.website, 1600, 900) : null);

    const handleShare = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
        } catch {
            /* clipboard unavailable, still show confirmation */
        }
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    const kpiItems = [];
    if (study.seoStats) {
        kpiItems.push(
            { value: `${study.seoStats.rankedFirst}`, label: 'Keywords ranked #1', accent: 'text-[var(--accent-cyan)]' },
            { value: `${study.seoStats.page1Percent}%`, label: 'Page 1 rankings', accent: 'text-[var(--accent-blue)]' },
            { value: `${study.seoStats.keywordsTracked}`, label: 'Keywords tracked', accent: 'text-[var(--accent-purple)]' }
        );
    }
    if (study.adsStats?.length) {
        const latestAds = study.adsStats[study.adsStats.length - 1];
        if (latestAds.clicks) kpiItems.push({ value: latestAds.clicks, label: 'Clicks delivered', accent: 'text-[var(--accent-cyan)]' });
        if (latestAds.conversions) kpiItems.push({ value: latestAds.conversions, label: 'Conversions generated', accent: 'text-emerald-500' });
        if (latestAds.avgCpc) kpiItems.push({ value: latestAds.avgCpc, label: 'Average CPC', accent: 'text-[var(--accent-blue)]' });
    }
    // Only show the ledger strip when there is real, verified data to report.
    const hasVerifiedStats = kpiItems.length > 0;

    return (
        <section className="relative w-full overflow-hidden pt-6 sm:pt-8 pb-6 border-b border-[var(--border)] transition-colors duration-300 bg-[var(--bg-page)] text-[var(--text-primary)]">
            {/* Base wash — in light mode this carries most of the warmth, since the
                glows alone read as too pale on a white page. Dark mode stays on
                the quieter tint it already had. */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[var(--bg-secondary)] dark:from-[var(--bg-secondary)]/20 via-[var(--bg-secondary)]/40 dark:via-transparent to-[var(--bg-page)]" />

            {/* Diagonal sweep — one wide, soft band of color cutting across the
                section, so the wash reads as composed rather than a flat fade. */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.12] dark:opacity-[0.08]"
                style={{
                    background: 'linear-gradient(115deg, transparent 28%, var(--accent-cyan) 46%, var(--accent-purple) 58%, transparent 78%)',
                }}
            />

            {/* Dot grid — a visible ledger texture across the hero, fading out
                toward the bottom so it doesn't fight the KPI strip. */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.55] dark:opacity-[0.3]"
                style={{
                    backgroundImage: 'radial-gradient(var(--accent-purple) 1.4px, transparent 1.4px)',
                    backgroundSize: '26px 26px',
                    maskImage: 'linear-gradient(to bottom, black 0%, black 55%, transparent 92%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 55%, transparent 92%)',
                }}
            />

            {/* Fine grain — breaks up the gradient banding and gives light mode a
                paper-like, premium quality instead of a flat digital wash. */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.35] dark:opacity-[0.18] mix-blend-overlay"
                style={{
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
                }}
            />

            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-cyan)]/60 dark:via-[var(--accent-cyan)]/50 to-transparent pointer-events-none" />

            {/* Glows — stronger and more saturated in light mode so they read as
                genuine color instead of a faint smudge on white. */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-28 left-[8%] w-[600px] h-[420px] bg-[var(--accent-cyan)]/[0.28] dark:bg-[var(--accent-cyan)]/[0.14] blur-[110px] rounded-full" />
                <div className="absolute -top-14 right-[4%] w-[520px] h-[380px] bg-[var(--accent-purple)]/[0.24] dark:bg-[var(--accent-purple)]/[0.1] blur-[120px] rounded-full" />
                <div className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 w-[420px] h-[240px] bg-[var(--accent-blue)]/[0.16] dark:bg-[var(--accent-blue)]/0 blur-[110px] rounded-full" />
            </div>

            <motion.div
                variants={stagger}
                initial="hidden"
                animate="show"
                className="container-custom max-w-6xl mx-auto relative z-10"
            >
                {/* Top Nav: Breadcrumb + Action Bar */}
                <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-between gap-3 mb-6">
                    <nav
                        aria-label="Breadcrumb"
                        className="flex items-center gap-2 text-xs text-[var(--text-muted)]"
                    >
                        <Link to="/" className="hover:text-[var(--text-primary)] transition-colors font-medium">Home</Link>
                        <span className="text-[var(--text-faint)]">/</span>
                        <Link to="/case-studies" className="hover:text-[var(--text-primary)] transition-colors font-medium">Case Studies</Link>
                        <span className="text-[var(--text-faint)]">/</span>
                        <span className="text-[var(--accent-cyan)] font-bold truncate max-w-[170px] sm:max-w-none">{study.name}</span>
                    </nav>

                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={handleShare}
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[var(--border)] hover:bg-[var(--bg-surface-soft)] text-xs font-semibold text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all cursor-pointer"
                            title="Copy link to case study"
                        >
                            {copied ? (
                                <>
                                    <Check size={13} className="text-emerald-500" />
                                    <span className="text-emerald-500 font-bold">Link copied</span>
                                </>
                            ) : (
                                <>
                                    <Share2 size={13} />
                                    <span>Share</span>
                                </>
                            )}
                        </button>

                        <Link
                            to="/case-studies"
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[var(--border)] hover:bg-[var(--bg-surface-soft)] text-xs font-semibold text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-all"
                        >
                            <ArrowLeft size={13} />
                            <span>All studies</span>
                        </Link>
                    </div>
                </motion.div>

                {/* Hero Main Grid */}
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                    <div className="lg:col-span-7 space-y-4">
                        <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2">
                            {study.categories.map((c) => {
                                const cMeta = CATEGORY_META[c] || CATEGORY_META.seo;
                                const Icon = cMeta.icon;
                                return (
                                    <span
                                        key={c}
                                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${cMeta.badgeBg} ${cMeta.accentClass} ${cMeta.badgeBorder}`}
                                    >
                                        <Icon size={12} className={cMeta.accentClass} />
                                        <span>{cMeta.label}</span>
                                    </span>
                                );
                            })}
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400">
                                <CheckCircle2 size={12} />
                                Verified case study
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={fadeUp}
                            className="text-3xl sm:text-4xl md:text-5xl font-black text-[var(--text-primary)] tracking-tight leading-[1.05]"
                        >
                            {study.name}
                        </motion.h1>

                        <motion.p variants={fadeUp} className="text-sm sm:text-base text-[var(--text-muted)] font-medium leading-snug max-w-2xl">
                            {study.industry}
                        </motion.p>

                        <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-5 text-xs text-[var(--text-muted)] pt-1">
                            {study.targetMarket && (
                                <div className="flex items-center gap-1.5">
                                    <MapPin size={13} className="text-[var(--accent-cyan)] shrink-0" />
                                    <span>Market <strong className="text-[var(--text-primary)] font-bold">{study.targetMarket}</strong></span>
                                </div>
                            )}
                            {study.timeline && (
                                <div className="flex items-center gap-1.5">
                                    <Calendar size={13} className="text-[var(--accent-purple)] shrink-0" />
                                    <span>Duration <strong className="text-[var(--text-primary)] font-bold">{study.timeline}</strong></span>
                                </div>
                            )}
                        </motion.div>

                        {study.website && (
                            <motion.div variants={fadeUp} className="pt-1">
                                <a
                                    href={study.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-[var(--border)] hover:border-[var(--accent-cyan)]/40 text-xs sm:text-sm font-bold text-[var(--text-primary)] hover:text-[var(--accent-cyan)] transition-all group"
                                >
                                    <Globe size={15} className="text-[var(--accent-cyan)]" />
                                    <span>{study.website.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
                                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[var(--accent-cyan)]" />
                                </a>
                            </motion.div>
                        )}
                    </div>

                    {/* Right Column: Hero Visual Browser Mockup */}
                    <motion.div variants={fadeUp} className="lg:col-span-5">
                        <div className="relative group">
                            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[var(--accent-cyan)]/12 to-[var(--accent-purple)]/12 blur-xl -z-10 opacity-70 group-hover:opacity-100 transition-opacity" />

                            <div className="relative rounded-2xl overflow-hidden border border-[var(--border)] shadow-xl bg-[var(--bg-card)]">
                                <div className="flex items-center justify-between px-4 py-2.5 bg-[var(--bg-card-soft)] border-b border-[var(--border)]">
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                                    </div>
                                    <div className="px-3 py-1 rounded-md bg-[var(--bg-page)] border border-[var(--border)] text-[11px] font-mono text-[var(--text-muted)] truncate max-w-[220px] flex items-center gap-1.5">
                                        <Lock size={10} className="text-emerald-500 shrink-0" />
                                        <span>{study.website ? study.website.replace(/^https?:\/\//, '') : `${study.id}.wsi-client`}</span>
                                    </div>
                                    <div className="w-4" />
                                </div>

                                <div className="relative aspect-[16/10] overflow-hidden bg-[var(--bg-page)] flex items-center justify-center">
                                    {bgImage ? (
                                        <img
                                            src={bgImage}
                                            alt={`${study.name} project preview`}
                                            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                                            loading="eager"
                                        />
                                    ) : (
                                        <div className="flex flex-col items-center justify-center p-8 text-center space-y-3 bg-[var(--bg-surface-soft)] w-full h-full">
                                            <div className="w-16 h-16 rounded-2xl flex items-center justify-center border border-[var(--border)] bg-[var(--bg-card)]">
                                                <CategoryIcon size={28} className="text-[var(--accent-cyan)]" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-[var(--text-primary)]">{study.name}</div>
                                                <div className="text-xs text-[var(--text-muted)] mt-0.5 font-medium">Top-ranked SEO & digital strategy</div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Ledger strip: the verified numbers, read like a report line rather than a
                    row of matching cards. Divider rules do the separating, not borders/shadows. */}
                {hasVerifiedStats && (
                    <motion.div variants={fadeUp} className="mt-8 pt-6 border-t border-[var(--border)]">
                        <div className="flex items-baseline justify-between gap-3 mb-4">
                            <span className="text-sm font-bold text-[var(--text-primary)]">Verified campaign numbers</span>
                            <span className="text-[11px] text-[var(--text-faint)] font-medium">Audited by Web Smile India</span>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
                            {kpiItems.map((kpi, idx) => {
                                const { prefix, target, suffix, decimals } = parseKpiValue(kpi.value);
                                const isLastInMobileRow = idx % 2 === 1;
                                return (
                                    <div
                                        key={idx}
                                        className={`py-3 pr-4 ${idx !== 0 ? 'pl-4' : ''} border-[var(--border)] ${
                                            !isLastInMobileRow ? 'border-r' : ''
                                        } sm:border-r sm:last:border-r-0`}
                                    >
                                        <div className={`text-2xl sm:text-3xl font-black tracking-tight tabular-nums ${kpi.accent}`}>
                                            <AnimatedCounter target={target} prefix={prefix} suffix={suffix} decimals={decimals} />
                                        </div>
                                        <div className="text-xs text-[var(--text-muted)] mt-1 font-semibold leading-tight">
                                            {kpi.label}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </motion.div>
        </section>
    );
}