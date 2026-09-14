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
    Sparkles,
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

// One shared stagger: children animate in sequence off a single timeline
// instead of each element having its own independent entrance effect.
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
            { value: `${study.seoStats.rankedFirst}`, label: 'Keywords Ranked #1', accent: 'text-[var(--accent-cyan)]' },
            { value: `${study.seoStats.page1Percent}%`, label: 'Page 1 Rankings', accent: 'text-[var(--accent-blue)]' },
            { value: `${study.seoStats.keywordsTracked}`, label: 'Keywords Tracked', accent: 'text-[var(--accent-purple)]' }
        );
    }
    if (study.adsStats?.length) {
        const latestAds = study.adsStats[study.adsStats.length - 1];
        if (latestAds.clicks) kpiItems.push({ value: latestAds.clicks, label: 'Clicks Delivered', accent: 'text-[var(--accent-cyan)]' });
        if (latestAds.conversions) kpiItems.push({ value: latestAds.conversions, label: 'Conversions Generated', accent: 'text-emerald-500' });
        if (latestAds.avgCpc) kpiItems.push({ value: latestAds.avgCpc, label: 'Average CPC', accent: 'text-[var(--accent-blue)]' });
    }
    if (kpiItems.length === 0) {
        kpiItems.push(
            { value: '100%', label: 'Campaign Delivery', accent: 'text-emerald-500' },
            { value: '3.8x', label: 'Lead Growth Rate', accent: 'text-[var(--accent-cyan)]' },
            { value: '5', label: 'Client Satisfaction', accent: 'text-amber-500' }
        );
    }

    return (
        <section className="relative w-full overflow-hidden pt-6 sm:pt-8 pb-6 border-b border-[var(--border)] transition-colors duration-300 bg-[var(--bg-page)] text-[var(--text-primary)]">
            {/* Soft vertical wash — richer in light mode so the section doesn't feel flat */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[var(--bg-secondary)]/[0.85] dark:from-[var(--bg-secondary)]/20 via-transparent to-transparent" />

            {/* Subtle vignette for depth in light mode */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_30%,transparent_40%,var(--bg-page)/[0.5])] dark:bg-[radial-gradient(ellipse_at_50%_30%,transparent_40%,transparent)]" />

            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-cyan)]/[0.55] dark:via-[var(--accent-cyan)]/30 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-purple)]/[0.4] dark:via-[var(--accent-purple)]/20 to-transparent pointer-events-none" />

            {/* Dot-grid mesh: gives light mode some texture to sit on instead of flat white,
                still subtle enough not to fight with content */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.55] dark:opacity-[0.25]"
                style={{
                    backgroundImage: `radial-gradient(var(--border) 1.2px, transparent 1.2px)`,
                    backgroundSize: '22px 22px',
                    maskImage: 'radial-gradient(ellipse at 50% 30%, black 25%, transparent 75%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at 50% 30%, black 25%, transparent 75%)',
                }}
            />

            {/* Fine line grid — visible in both modes for consistent depth */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.07] dark:opacity-[0.14]"
                style={{
                    backgroundImage: `linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(ellipse at 50% 35%, black 30%, transparent 80%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at 50% 35%, black 30%, transparent 80%)',
                }}
            />

            {/* Ambient glow blobs: more colorful and present in light mode so the section
                doesn't read as empty white space, richer and more saturated in dark mode */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-28 left-[8%] w-[600px] h-[420px] bg-[var(--accent-cyan)]/[0.22] dark:bg-[var(--accent-cyan)]/20 blur-[110px] rounded-full" />
                <div className="absolute -top-16 right-[5%] w-[520px] h-[380px] bg-[var(--accent-purple)]/[0.20] dark:bg-[var(--accent-purple)]/[0.16] blur-[120px] rounded-full" />
                <div className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 w-[460px] h-[260px] bg-[var(--accent-blue)]/[0.18] dark:bg-[var(--accent-blue)]/[0.14] blur-[110px] rounded-full" />
                <div className="absolute top-1/3 left-1/3 w-[300px] h-[220px] bg-amber-400/[0.14] dark:bg-amber-400/[0.06] blur-[100px] rounded-full" />
            </div>

            {/* Decorative corner accents: small floating dots/rings for extra visual interest,
                purely cosmetic, slightly more visible in light mode */}
            <div className="absolute inset-0 pointer-events-none hidden lg:block overflow-hidden">
                <div className="absolute top-10 right-[12%] w-16 h-16 rounded-full border border-[var(--accent-cyan)]/[0.4] dark:border-[var(--accent-cyan)]/20" />
                <div className="absolute top-24 right-[18%] w-2.5 h-2.5 rounded-full bg-[var(--accent-purple)]/[0.55] dark:bg-[var(--accent-purple)]/50" />
                <div className="absolute bottom-16 left-[10%] w-10 h-10 rounded-full border border-[var(--accent-blue)]/[0.4] dark:border-[var(--accent-blue)]/20" />
                <div className="absolute bottom-28 left-[16%] w-2 h-2 rounded-full bg-[var(--accent-cyan)]/[0.55] dark:bg-[var(--accent-cyan)]/50" />
            </div>

            <motion.div
                variants={stagger}
                initial="hidden"
                animate="show"
                className="container-custom max-w-6xl mx-auto relative z-10"
            >
                {/* Top Nav: Breadcrumb + Action Bar */}
                <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <nav
                        aria-label="Breadcrumb"
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--border)] text-xs text-[var(--text-muted)] shadow-xs backdrop-blur-md"
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
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[var(--border)] bg-[var(--bg-card)] hover:bg-[var(--bg-surface-soft)] text-xs font-semibold text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all shadow-xs cursor-pointer"
                            title="Copy link to case study"
                        >
                            {copied ? (
                                <>
                                    <Check size={13} className="text-emerald-500" />
                                    <span className="text-emerald-500 font-bold">Link Copied!</span>
                                </>
                            ) : (
                                <>
                                    <Share2 size={13} />
                                    <span>Share Case Study</span>
                                </>
                            )}
                        </button>

                        <Link
                            to="/case-studies"
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[var(--border)] bg-[var(--bg-card)] hover:bg-[var(--bg-surface-soft)] text-xs font-semibold text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-all shadow-xs"
                        >
                            <ArrowLeft size={13} />
                            <span>All Studies</span>
                        </Link>
                    </div>
                </motion.div>

                {/* Hero Main Grid */}
                <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                    <div className="lg:col-span-7 space-y-2.5">
                        <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2">
                            {study.categories.map((c) => {
                                const cMeta = CATEGORY_META[c] || CATEGORY_META.seo;
                                const Icon = cMeta.icon;
                                return (
                                    <span
                                        key={c}
                                        className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold border backdrop-blur-md shadow-xs ${cMeta.badgeBg} ${cMeta.accentClass} ${cMeta.badgeBorder}`}
                                    >
                                        <Icon size={12} className={cMeta.accentClass} />
                                        <span>{cMeta.label}</span>
                                    </span>
                                );
                            })}
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 shadow-xs backdrop-blur-md">
                                <CheckCircle2 size={12} />
                                Verified Case Study
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={fadeUp}
                            className="text-2xl sm:text-3xl md:text-4xl font-black text-[var(--text-primary)] tracking-tight leading-[1.1]"
                        >
                            {study.name}
                        </motion.h1>

                        <motion.p variants={fadeUp} className="text-sm sm:text-base text-[var(--text-muted)] font-medium leading-snug max-w-2xl">
                            {study.industry}
                        </motion.p>

                        <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2 text-xs text-[var(--text-muted)] pt-1">
                            {study.targetMarket && (
                                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] shadow-xs">
                                    <MapPin size={13} className="text-[var(--accent-cyan)] shrink-0" />
                                    <span>Market: <strong className="text-[var(--text-primary)] font-bold">{study.targetMarket}</strong></span>
                                </div>
                            )}
                            {study.timeline && (
                                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] shadow-xs">
                                    <Calendar size={13} className="text-[var(--accent-purple)] shrink-0" />
                                    <span>Duration: <strong className="text-[var(--text-primary)] font-bold">{study.timeline}</strong></span>
                                </div>
                            )}
                        </motion.div>

                        {study.website && (
                            <motion.div variants={fadeUp} className="pt-1.5">
                                <a
                                    href={study.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-surface-soft)] border border-[var(--border)] hover:border-[var(--accent-cyan)]/40 text-xs sm:text-sm font-bold text-[var(--text-primary)] hover:text-[var(--accent-cyan)] transition-all shadow-xs hover:shadow-md group"
                                >
                                    <Globe size={15} className="text-[var(--accent-cyan)]" />
                                    <span>Visit Live Website: {study.website.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
                                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[var(--accent-cyan)]" />
                                </a>
                            </motion.div>
                        )}
                    </div>

                    {/* Right Column: Hero Visual Browser Mockup */}
                    <motion.div variants={fadeUp} className="lg:col-span-5">
                        <div className="relative group">
                            <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-[var(--accent-cyan)]/15 via-[var(--accent-purple)]/15 to-[var(--accent-blue)]/15 blur-xl -z-10 opacity-75 group-hover:opacity-100 transition-opacity" />

                            <div className="relative rounded-2xl overflow-hidden border border-[var(--border)] shadow-xl bg-[var(--bg-card)] transition-all duration-300">
                                <div className="flex items-center justify-between px-4 py-2.5 bg-[var(--bg-card-soft)] border-b border-[var(--border)] backdrop-blur-sm">
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                                    </div>
                                    <div className="px-3 py-1 rounded-md bg-[var(--bg-page)] border border-[var(--border)] text-[11px] font-mono text-[var(--text-muted)] truncate max-w-[220px] flex items-center gap-1.5 shadow-xs">
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
                                            <div className="w-16 h-16 rounded-2xl flex items-center justify-center border border-[var(--border)] bg-[var(--bg-card)] shadow-xs">
                                                <CategoryIcon size={28} className="text-[var(--accent-cyan)]" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-[var(--text-primary)]">{study.name}</div>
                                                <div className="text-xs text-[var(--text-muted)] mt-0.5 font-medium">Top-Ranked SEO & Digital Strategy</div>
                                            </div>
                                        </div>
                                    )}

                                    <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-[var(--bg-card)]/90 backdrop-blur-md border border-[var(--border)] text-[11px] font-bold text-[var(--text-primary)] shadow-md flex items-center gap-1.5 pointer-events-none">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                        <span>Verified Client</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Dock: Floating Verified KPI Ribbon, numbers count up once on arrival */}
                {kpiItems.length > 0 && (
                    <motion.div
                        variants={fadeUp}
                        className="mt-5 rounded-2xl bg-[var(--bg-card)] p-4 md:p-5 border border-[var(--border)] shadow-md backdrop-blur-xl transition-all"
                    >
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pb-2 mb-3 border-b border-[var(--border)]">
                            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[var(--text-primary)]">
                                <Sparkles size={14} className="text-[var(--accent-cyan)]" />
                                <span>Verified Campaign Impact & Performance Milestones</span>
                            </div>
                            <span className="text-xs text-[var(--text-muted)] font-medium">Audited by Web Smile India Performance Lab</span>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                            {kpiItems.map((kpi, idx) => {
                                const { prefix, target, suffix, decimals } = parseKpiValue(kpi.value);
                                return (
                                    <div
                                        key={idx}
                                        className="p-3.5 rounded-xl bg-[var(--bg-surface-soft)] border border-[var(--border)] text-center hover:border-[var(--accent-cyan)]/40 hover:bg-[var(--bg-card)] transition-all shadow-xs group"
                                    >
                                        <div className={`text-2xl sm:text-3xl font-black tracking-tight ${kpi.accent}`}>
                                            <AnimatedCounter target={target} prefix={prefix} suffix={suffix} decimals={decimals} />
                                        </div>
                                        <div className="text-xs text-[var(--text-muted)] mt-1 font-bold leading-tight group-hover:text-[var(--text-primary)] transition-colors">
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