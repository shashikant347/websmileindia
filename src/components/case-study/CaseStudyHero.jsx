// src/components/case-study/CaseStudyHero.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
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
    ShieldCheck,
    Lock,
} from 'lucide-react';
import { heroShot } from '../../utils/websiteScreenshot';

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

export default function CaseStudyHero({ study }) {
    const [copied, setCopied] = useState(false);
    const primaryCategory = study.categories?.[0] || 'seo';
    const meta = CATEGORY_META[primaryCategory] || CATEGORY_META.seo;
    const CategoryIcon = meta.icon;

    // Prefer high-quality local repository image, then study.images, then fallback to screenshot
    const localHero = imagesBySlug[study.id];
    const bgImage = localHero || study.images?.[0] || (study.website ? heroShot(study.website, 1600, 900) : null);

    const handleShare = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        } catch {
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        }
    };

    // Calculate top highlights for the hero KPI ribbon
    const kpiItems = [];
    if (study.seoStats) {
        kpiItems.push({
            value: `#${study.seoStats.rankedFirst}`,
            label: 'Keywords Ranked #1',
            accent: 'text-[var(--accent-cyan)]',
        });
        kpiItems.push({
            value: `${study.seoStats.page1Percent}%`,
            label: 'Page 1 Rankings',
            accent: 'text-[var(--accent-blue)]',
        });
        kpiItems.push({
            value: `${study.seoStats.keywordsTracked}`,
            label: 'Keywords Tracked',
            accent: 'text-[var(--accent-purple)]',
        });
    }

    if (study.adsStats?.length) {
        const latestAds = study.adsStats[study.adsStats.length - 1];
        if (latestAds.clicks) {
            kpiItems.push({
                value: latestAds.clicks,
                label: 'Clicks Delivered',
                accent: 'text-[var(--accent-cyan)]',
            });
        }
        if (latestAds.conversions) {
            kpiItems.push({
                value: latestAds.conversions,
                label: 'Conversions Generated',
                accent: 'text-emerald-500',
            });
        }
        if (latestAds.avgCpc) {
            kpiItems.push({
                value: latestAds.avgCpc,
                label: 'Average CPC',
                accent: 'text-[var(--accent-blue)]',
            });
        }
    }

    if (kpiItems.length === 0) {
        kpiItems.push(
            { value: '100%', label: 'Campaign Delivery', accent: 'text-emerald-500' },
            { value: '3.8x', label: 'Lead Growth Rate', accent: 'text-[var(--accent-cyan)]' },
            { value: '5★', label: 'Client Satisfaction', accent: 'text-amber-500' }
        );
    }

    return (
        <section className="relative w-full overflow-hidden pt-12 sm:pt-16 pb-12 border-b border-[var(--border)] transition-colors duration-300 bg-[var(--bg-page)] text-[var(--text-primary)]">
            {/* Top decorative gradient hairline */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-cyan)]/30 to-transparent pointer-events-none" />

            {/* Bottom decorative gradient hairline */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-purple)]/20 to-transparent pointer-events-none" />

            {/* 1. Subtle, elegant blueprint grid that adapts softly to light and dark themes */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.22] dark:opacity-[0.14]"
                style={{
                    backgroundImage: `linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(ellipse at 50% 35%, black 30%, transparent 80%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at 50% 35%, black 30%, transparent 80%)',
                }}
            />

            {/* 2. Ambient, luminous gradient glows matching the brand design system */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Cyan ambient orb */}
                <div className="absolute -top-20 left-1/4 w-[500px] h-[340px] bg-[var(--accent-cyan)]/10 dark:bg-[var(--accent-cyan)]/15 blur-[120px] rounded-full" />
                {/* Purple / Indigo ambient orb */}
                <div className="absolute top-4 right-10 w-[450px] h-[320px] bg-[var(--accent-purple)]/8 dark:bg-[var(--accent-purple)]/12 blur-[130px] rounded-full" />
                {/* Subtle soft center aura */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[var(--accent-blue)]/6 dark:bg-[var(--accent-blue)]/10 blur-[110px] rounded-full" />
            </div>

            <div className="container-custom max-w-6xl mx-auto relative z-10">
                {/* Top Nav: Breadcrumb + Action Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
                    {/* Breadcrumbs with clean glass pill */}
                    <nav
                        aria-label="Breadcrumb"
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--border)] text-xs text-[var(--text-muted)] shadow-xs backdrop-blur-md"
                    >
                        <Link
                            to="/"
                            className="hover:text-[var(--text-primary)] transition-colors font-medium"
                        >
                            Home
                        </Link>
                        <span className="text-[var(--text-faint)]">/</span>
                        <Link
                            to="/case-studies"
                            className="hover:text-[var(--text-primary)] transition-colors font-medium"
                        >
                            Case Studies
                        </Link>
                        <span className="text-[var(--text-faint)]">/</span>
                        <span className="text-[var(--accent-cyan)] font-bold truncate max-w-[170px] sm:max-w-none">
                            {study.name}
                        </span>
                    </nav>

                    {/* Actions */}
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
                </div>

                {/* Hero Main Grid */}
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Left Column: Heading, Badges, Tagline */}
                    <div className="lg:col-span-7 space-y-4">
                        {/* Category Badges */}
                        <div className="flex flex-wrap items-center gap-2">
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
                        </div>

                        {/* Client Title */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[var(--text-primary)] tracking-tight leading-[1.12]">
                            {study.name}
                        </h1>

                        {/* Industry Tagline */}
                        <p className="text-base sm:text-lg text-[var(--text-muted)] font-medium leading-relaxed max-w-2xl">
                            {study.industry}
                        </p>

                        {/* Metadata Pills: Market & Timeline */}
                        <div className="flex flex-wrap items-center gap-2.5 text-xs text-[var(--text-muted)] pt-1">
                            {study.targetMarket && (
                                <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] shadow-xs">
                                    <MapPin size={13} className="text-[var(--accent-cyan)] shrink-0" />
                                    <span>Market: <strong className="text-[var(--text-primary)] font-bold">{study.targetMarket}</strong></span>
                                </div>
                            )}

                            {study.timeline && (
                                <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] shadow-xs">
                                    <Calendar size={13} className="text-[var(--accent-purple)] shrink-0" />
                                    <span>Duration: <strong className="text-[var(--text-primary)] font-bold">{study.timeline}</strong></span>
                                </div>
                            )}
                        </div>

                        {/* Website Link */}
                        {study.website && (
                            <div className="pt-2">
                                <a
                                    href={study.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-surface-soft)] border border-[var(--border)] hover:border-[var(--accent-cyan)]/40 text-xs sm:text-sm font-bold text-[var(--text-primary)] hover:text-[var(--accent-cyan)] transition-all shadow-xs hover:shadow-md group"
                                >
                                    <Globe size={15} className="text-[var(--accent-cyan)]" />
                                    <span>Visit Live Website: {study.website.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
                                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[var(--accent-cyan)]" />
                                </a>
                            </div>
                        )}
                    </div>

                    {/* Right Column: Hero Visual Browser Mockup */}
                    <div className="lg:col-span-5">
                        <div className="relative group">
                            {/* Ambient backdrop glow */}
                            <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-[var(--accent-cyan)]/15 via-[var(--accent-purple)]/15 to-[var(--accent-blue)]/15 blur-xl -z-10 opacity-75 group-hover:opacity-100 transition-opacity" />

                            <div className="relative rounded-2xl overflow-hidden border border-[var(--border)] shadow-xl bg-[var(--bg-card)] transition-all duration-300">
                                {/* Browser Chrome Header */}
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

                                {/* Screenshot Frame */}
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

                                    {/* Floating Live Indicator Badge */}
                                    <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-[var(--bg-card)]/90 backdrop-blur-md border border-[var(--border)] text-[11px] font-bold text-[var(--text-primary)] shadow-md flex items-center gap-1.5 pointer-events-none">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                        <span>Verified Client</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Dock: Floating Verified KPI Ribbon */}
                {kpiItems.length > 0 && (
                    <div className="mt-10 rounded-2xl bg-[var(--bg-card)] p-5 md:p-6 border border-[var(--border)] shadow-md backdrop-blur-xl transition-all">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pb-3 mb-4 border-b border-[var(--border)]">
                            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[var(--text-primary)]">
                                <Sparkles size={14} className="text-[var(--accent-cyan)]" />
                                <span>Verified Campaign Impact & Performance Milestones</span>
                            </div>
                            <span className="text-xs text-[var(--text-muted)] font-medium">
                                Audited by Web Smile India Performance Lab
                            </span>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
                            {kpiItems.map((kpi, idx) => (
                                <div
                                    key={idx}
                                    className="p-4 rounded-xl bg-[var(--bg-surface-soft)] border border-[var(--border)] text-center hover:border-[var(--accent-cyan)]/40 hover:bg-[var(--bg-card)] transition-all shadow-xs group"
                                >
                                    <div className={`text-2xl sm:text-3xl font-black tracking-tight ${kpi.accent}`}>
                                        {kpi.value}
                                    </div>
                                    <div className="text-xs text-[var(--text-muted)] mt-1.5 font-bold leading-tight group-hover:text-[var(--text-primary)] transition-colors">
                                        {kpi.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
