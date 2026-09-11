// src/components/case-study/RelatedCaseStudies.jsx
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Search, MousePointerClick, Share2 } from 'lucide-react';
import { caseStudies } from '../../data/caseStudiesData';
import { heroShot } from '../../utils/websiteScreenshot';

const CATEGORY_META = {
    seo: { label: 'SEO', icon: Search, color: 'var(--accent-cyan)' },
    ads: { label: 'Google Ads', icon: MousePointerClick, color: 'var(--accent-blue)' },
    social: { label: 'Social Media', icon: Share2, color: 'var(--accent-purple)' },
};

export default function RelatedCaseStudies({ currentStudyId, categories = [] }) {
    const related = useMemo(() => {
        // Filter out current study
        const others = caseStudies.filter((s) => s.id !== currentStudyId);

        // Find studies that share at least one category
        const shared = others.filter((s) =>
            s.categories?.some((c) => categories.includes(c))
        );

        // Pick up to 3 shared, or fill with others
        const pool = shared.length >= 3 ? shared : [...shared, ...others.filter((s) => !shared.includes(s))];
        return pool.slice(0, 3);
    }, [currentStudyId, categories]);

    if (!related.length) return null;

    return (
        <section className="space-y-6 pt-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent-cyan)] block mb-1">
                        Explore More Work
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)] tracking-tight">
                        Related Client Case Studies
                    </h2>
                </div>
                <Link
                    to="/case-studies"
                    className="inline-flex items-center gap-1.5 text-xs text-[var(--accent-cyan)] hover:underline font-bold"
                >
                    <span>View All 21+ Case Studies</span>
                    <ArrowUpRight size={13} />
                </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((study) => {
                    const primaryCat = study.categories?.[0] || 'seo';
                    const meta = CATEGORY_META[primaryCat] || CATEGORY_META.seo;
                    const Icon = meta.icon;

                    const thumb = study.website
                        ? heroShot(study.website, 800, 500)
                        : study.images?.[0];

                    let topStat = null;
                    if (study.seoStats) {
                        topStat = `${study.seoStats.rankedFirst} #1 Keywords`;
                    } else if (study.adsStats?.length) {
                        topStat = `${study.adsStats[study.adsStats.length - 1].clicks || 'Scale'} Clicks`;
                    }

                    return (
                        <Link
                            key={study.id}
                            to={`/case-studies/${study.id}`}
                            className="rounded-2xl overflow-hidden border border-[var(--border)] hover:border-[var(--accent-cyan)]/50 transition-all duration-300 group flex flex-col hover:-translate-y-1 shadow-md hover:shadow-xl bg-[var(--bg-card)]"
                        >
                            {/* Thumbnail Preview */}
                            <div className="relative aspect-[16/10] overflow-hidden bg-[var(--bg-surface-soft)]">
                                {thumb ? (
                                    <img
                                        src={thumb}
                                        alt={study.name}
                                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                ) : (
                                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[var(--bg-surface-soft)]">
                                        <div
                                            className="w-12 h-12 rounded-xl flex items-center justify-center mb-2"
                                            style={{
                                                background: `${meta.color}15`,
                                                color: meta.color,
                                            }}
                                        >
                                            <Icon size={24} />
                                        </div>
                                        <span className="text-xs font-semibold text-[var(--text-faint)]">
                                            {meta.label} Showcase
                                        </span>
                                    </div>
                                )}

                                {topStat && (
                                    <span className="absolute bottom-2.5 right-2.5 text-[11px] font-bold px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-white border border-white/10 shadow-sm">
                                        {topStat}
                                    </span>
                                )}
                            </div>

                            {/* Card Body */}
                            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                                <div>
                                    <div className="flex flex-wrap gap-1.5 mb-2">
                                        {study.categories.slice(0, 2).map((c) => {
                                            const cMeta = CATEGORY_META[c];
                                            if (!cMeta) return null;
                                            return (
                                                <span
                                                    key={c}
                                                    className="text-[10px] font-bold px-2 py-0.5 rounded-md"
                                                    style={{
                                                        color: cMeta.color,
                                                        background: `${cMeta.color}15`,
                                                    }}
                                                >
                                                    {cMeta.label}
                                                </span>
                                            );
                                        })}
                                    </div>

                                    <h3 className="text-base font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-cyan)] transition-colors">
                                        {study.name}
                                    </h3>

                                    <p className="text-xs text-[var(--text-muted)] mt-1 line-clamp-2 leading-relaxed font-normal">
                                        {study.industry}
                                    </p>
                                </div>

                                <div className="pt-3 border-t border-[var(--border)] flex items-center justify-between text-xs font-bold text-[var(--accent-cyan)]">
                                    <span>Read Full Case Study</span>
                                    <ArrowUpRight
                                        size={14}
                                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                                    />
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}
