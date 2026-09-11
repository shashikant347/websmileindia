// src/pages/CaseStudies.jsx
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Search,
    MousePointerClick,
    Share2,
    ArrowUpRight,
    ImageOff,
} from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';
import TiltCard from '../components/ui/TiltCard';
import SectionTitle from '../components/ui/SectionTitle';
import { caseStudies, CATEGORIES } from '../data/caseStudiesData';
import { heroShot } from '../utils/websiteScreenshot';

const CATEGORY_META = {
    seo: { label: 'SEO', icon: Search, color: 'var(--accent-cyan)' },
    ads: { label: 'Google Ads', icon: MousePointerClick, color: 'var(--accent-blue)' },
    social: { label: 'Social Media', icon: Share2, color: 'var(--accent-purple)' },
};

// One headline number per card to lead with, on top of the photo.
function headlineStat(study) {
    if (study.seoStats) {
        return { value: `${study.seoStats.rankedFirst}`, label: 'keywords ranked #1' };
    }
    if (study.adsStats?.length) {
        const s = study.adsStats[study.adsStats.length - 1];
        if (s.clicks) return { value: s.clicks, label: 'clicks driven' };
    }
    return null;
}

const CategoryBadges = ({ categories }) => (
    <div className="flex flex-wrap gap-2">
        {categories.map((c) => {
            const meta = CATEGORY_META[c];
            const Icon = meta.icon;
            return (
                <span key={c} className="tag-badge" style={{ color: meta.color, borderColor: `${meta.color}4D` }}>
                    <Icon size={12} />
                    {meta.label}
                </span>
            );
        })}
    </div>
);

// Card photo priority:
//   1. The client's own website hero (live screenshot of their real homepage)
//   2. A campaign screenshot from the case study deck
//   3. A plain category-icon placeholder, so nothing ever shows a broken image
const CardPhoto = ({ study }) => {
    const primaryCategory = study.categories[0];
    const meta = CATEGORY_META[primaryCategory];
    const Icon = meta.icon;

    if (study.website) {
        return (
            <div className="relative w-full h-44 rounded-xl overflow-hidden border border-[var(--border)]">
                <img
                    src={heroShot(study.website)}
                    alt={`${study.name} website homepage`}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                />
                <span className="absolute bottom-2 left-2 text-[11px] px-2 py-0.5 rounded-full bg-black/60 text-white">
                    Live site preview
                </span>
            </div>
        );
    }

    if (study.images?.length) {
        return (
            <div className="relative w-full h-44 rounded-xl overflow-hidden border border-[var(--border)]">
                <img
                    src={study.images[0]}
                    alt={`${study.name} campaign screenshot`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
                {study.images.length > 1 && (
                    <span className="absolute bottom-2 right-2 text-[11px] px-2 py-0.5 rounded-full bg-black/60 text-white">
                        +{study.images.length - 1} more
                    </span>
                )}
            </div>
        );
    }

    return (
        <div
            className="w-full h-44 rounded-xl flex flex-col items-center justify-center gap-2 border border-[var(--border)]"
            style={{ background: 'var(--glass-bg, rgba(255,255,255,0.03))' }}
        >
            <Icon size={28} style={{ color: meta.color }} />
            <span className="text-xs text-[var(--text-faint)] flex items-center gap-1">
                <ImageOff size={12} /> No screenshot yet
            </span>
        </div>
    );
};

const CaseStudyCard = ({ study, index }) => {
    const stat = headlineStat(study);
    return (
        <ScrollReveal delay={(index % 6) * 60} className="h-full">
            <Link to={`/case-studies/${study.id}`} className="block h-full">
                <TiltCard glowColor="18, 207, 227" className="glass-card p-6 border border-[var(--border)] h-full flex flex-col gap-4 cursor-pointer">
                    <CardPhoto study={study} />

                    <div className="flex items-start justify-between gap-3">
                        <div>
                            <h3 className="card-title">{study.name}</h3>
                            <p className="card-text text-[var(--text-faint)] mt-1">{study.industry}</p>
                        </div>
                        <ArrowUpRight size={18} className="shrink-0 mt-1 text-[var(--text-faint)]" />
                    </div>

                    <p className="card-text text-[var(--text-muted)] line-clamp-3">{study.description}</p>

                    <div className="mt-auto flex flex-col gap-3 pt-2">
                        <CategoryBadges categories={study.categories} />
                        {stat && (
                            <div className="flex items-baseline gap-2">
                                <span className="gradient-text-blue-cyan text-2xl font-black">{stat.value}</span>
                                <span className="text-xs text-[var(--text-faint)]">{stat.label}</span>
                            </div>
                        )}
                    </div>
                </TiltCard>
            </Link>
        </ScrollReveal>
    );
};

const CaseStudies = () => {
    const [filter, setFilter] = useState('all');

    const filtered = useMemo(
        () => (filter === 'all' ? caseStudies : caseStudies.filter((s) => s.categories.includes(filter))),
        [filter]
    );

    return (
        <>
            <PageHero
                title="Real Campaigns,"
                highlight="Real Numbers."
                subtitle="A look inside the SEO, Google Ads and social campaigns we've run for clients across manufacturing, real estate, education, travel and more — with the actual rankings and performance data behind them."
                breadcrumb="Case Studies"
            />

            <section className="section-padding">
                <div className="container-custom">
                    {/* <SectionTitle
                        tag="Portfolio Results"
                        title="Browse by"
                        highlight="Category"
                        align="center"
                    /> */}

                    <div className="flex flex-wrap justify-center gap-10 mb-12">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setFilter(cat.id)}
                                className={filter === cat.id ? 'btn-primary' : 'btn-outline'}
                                style={{ padding: '10px 22px', fontSize: '14px' }}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filtered.map((study, index) => (
                            <CaseStudyCard key={study.id} study={study} index={index} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default CaseStudies;
