// src/pages/CaseStudyDetail.jsx
import { useMemo, useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
    ChevronLeft,
    ChevronRight,
    X,
    Image as ImageIcon,
    ExternalLink,
} from 'lucide-react';

import ScrollReveal from '../components/ui/ScrollReveal';
import { caseStudies, getCaseStudyById } from '../data/caseStudiesData';
import { caseStudyKeywords } from '../data/caseStudyKeywords';
import { websiteSections } from '../utils/websiteScreenshot';

// Modular Case Study Components
import CaseStudyHero from '../components/case-study/CaseStudyHero';
import CaseStudySidebar from '../components/case-study/CaseStudySidebar';
import CaseStudyContent from '../components/case-study/CaseStudyContent';
import CaseStudyKeywords from '../components/case-study/CaseStudyKeywords';
import CaseStudyAdsStats from '../components/case-study/CaseStudyAdsStats';
import CaseStudyCTA from '../components/case-study/CaseStudyCTA';
import RelatedCaseStudies from '../components/case-study/RelatedCaseStudies';

// ============================================================
// LIGHTBOX MODAL
// ============================================================
const Lightbox = ({ images, index, onClose, onNav }) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') onNav(-1);
            if (e.key === 'ArrowRight') onNav(1);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose, onNav]);

    if (index === null || !images[index]) return null;
    const current = images[index];

    return (
        <div
            className="fixed inset-0 z-[300] flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-md animate-fadeIn"
            onClick={onClose}
        >
            <button
                aria-label="Close Preview"
                onClick={onClose}
                className="absolute top-5 right-5 w-11 h-11 rounded-full flex items-center justify-center border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-all z-10 cursor-pointer"
            >
                <X size={20} />
            </button>

            {images.length > 1 && (
                <>
                    <button
                        aria-label="Previous image"
                        onClick={(e) => {
                            e.stopPropagation();
                            onNav(-1);
                        }}
                        className="absolute left-4 md:left-8 w-11 h-11 rounded-full flex items-center justify-center border border-white/20 bg-black/60 text-white hover:bg-white/20 hover:scale-110 transition-all z-10 cursor-pointer"
                    >
                        <ChevronLeft size={22} />
                    </button>

                    <button
                        aria-label="Next image"
                        onClick={(e) => {
                            e.stopPropagation();
                            onNav(1);
                        }}
                        className="absolute right-4 md:right-8 w-11 h-11 rounded-full flex items-center justify-center border border-white/20 bg-black/60 text-white hover:bg-white/20 hover:scale-110 transition-all z-10 cursor-pointer"
                    >
                        <ChevronRight size={22} />
                    </button>
                </>
            )}

            <div
                className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    src={current.src}
                    alt={current.label || 'Case study screenshot preview'}
                    className="max-w-full max-h-[75vh] rounded-xl shadow-2xl object-contain border border-white/10"
                    style={current.position ? { objectPosition: current.position } : undefined}
                />
                {current.label && (
                    <div className="mt-4 px-4 py-2 rounded-xl bg-black/80 border border-white/10 text-xs font-medium text-white text-center">
                        {current.label} ({index + 1} of {images.length})
                    </div>
                )}
            </div>
        </div>
    );
};

// ============================================================
// PHOTO GALLERY
// ============================================================
const PhotoGallery = ({ study }) => {
    const [lightboxIndex, setLightboxIndex] = useState(null);

    const campaignPhotos = useMemo(
        () =>
            (study.images || []).map((src, i) => ({
                src,
                label: `${study.name} — Campaign Creative #${i + 1}`,
            })),
        [study]
    );

    const websitePhotos = useMemo(
        () => (study.website ? websiteSections(study.website) : []),
        [study]
    );

    const photos = useMemo(() => [...campaignPhotos, ...websitePhotos], [campaignPhotos, websitePhotos]);

    if (!photos.length) {
        return null;
    }

    const navigate = (direction) => {
        setLightboxIndex((prev) => {
            if (prev === null) return null;
            return (prev + direction + photos.length) % photos.length;
        });
    };

    return (
        <section id="gallery" className="scroll-mt-40 space-y-8">
            <div>
                <div className="text-xs font-semibold text-[var(--text-faint)] mb-2">
                    Creative & digital assets
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)] tracking-tight">
                    Campaign creatives & live showcase
                </h2>
                <p className="text-sm text-[var(--text-muted)] mt-1 font-normal">
                    Visual collateral, high-converting ad formats, and live website interfaces. Click any image to enlarge.
                </p>
            </div>

            {/* Campaign creatives — the actual ad assets, given the most visual
                weight since they're the unique, one-off pieces for this client. */}
            {campaignPhotos.length > 0 && (
                <div className="space-y-3">
                    <span className="text-xs font-bold text-[var(--text-muted)]">Ad creatives</span>
                    <div className="grid sm:grid-cols-2 gap-5">
                        {campaignPhotos.map((photo, index) => (
                            <button
                                key={`${photo.src}-${index}`}
                                onClick={() => setLightboxIndex(index)}
                                className="relative rounded-2xl overflow-hidden border border-[var(--border)] group text-left bg-[var(--bg-card)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-cyan)] hover:border-[var(--accent-cyan)]/50 transition-all cursor-pointer"
                            >
                                <div className="w-full aspect-[4/3] overflow-hidden bg-[var(--bg-surface-soft)]">
                                    <img
                                        src={photo.src}
                                        alt={photo.label}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        style={photo.position ? { objectPosition: photo.position } : undefined}
                                        loading="lazy"
                                    />
                                </div>
                                <div className="p-4 bg-[var(--bg-card)] border-t border-[var(--border)] flex items-center justify-between">
                                    <span className="text-sm font-semibold text-[var(--text-primary)] truncate mr-2">
                                        {photo.label}
                                    </span>
                                    <span className="text-xs text-[var(--accent-cyan)] shrink-0 font-bold">
                                        View
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Live website views — a secondary, smaller set since these are
                previews of the same site rather than distinct creative work. */}
            {websitePhotos.length > 0 && (
                <div className="space-y-3">
                    <span className="text-xs font-bold text-[var(--text-muted)]">Live website</span>
                    <div className="grid sm:grid-cols-3 gap-4">
                        {websitePhotos.map((photo, index) => {
                            const globalIndex = campaignPhotos.length + index;
                            return (
                                <button
                                    key={`${photo.src}-${photo.position || index}`}
                                    onClick={() => setLightboxIndex(globalIndex)}
                                    className="relative rounded-xl overflow-hidden border border-[var(--border)] group text-left bg-[var(--bg-card)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-cyan)] hover:border-[var(--accent-cyan)]/50 transition-all cursor-pointer"
                                >
                                    <div className="w-full aspect-[16/11] overflow-hidden bg-[var(--bg-surface-soft)]">
                                        <img
                                            src={photo.src}
                                            alt={photo.label}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            style={photo.position ? { objectPosition: photo.position } : undefined}
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="p-3 bg-[var(--bg-card)] border-t border-[var(--border)] flex items-center justify-between">
                                        <span className="text-xs font-semibold text-[var(--text-primary)] truncate mr-2">
                                            {photo.label}
                                        </span>
                                        <span className="text-[11px] text-[var(--accent-cyan)] shrink-0 font-bold">
                                            View
                                        </span>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}

            {study.website && (
                <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[var(--text-muted)]">
                    <span>
                        Live homepage views captured directly from verified client website.
                    </span>
                    <a
                        href={study.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[var(--accent-cyan)] hover:underline font-bold"
                    >
                        <span>Launch Live Website</span>
                        <ExternalLink size={12} />
                    </a>
                </div>
            )}

            <Lightbox
                images={photos}
                index={lightboxIndex}
                onClose={() => setLightboxIndex(null)}
                onNav={navigate}
            />
        </section>
    );
};

// ============================================================
// STICKY IN-PAGE SECTION NAVIGATION
// ============================================================
const InPageNavigation = ({ hasKeywords, hasAds, hasGallery }) => {
    return (
        <div className="sticky top-20 z-40 w-full bg-[var(--bg-page)]/95 backdrop-blur-md border-b border-[var(--border)] py-3 transition-colors duration-300">
            <div className="container-custom max-w-6xl mx-auto flex items-center gap-2 overflow-x-auto no-scrollbar text-xs font-bold">
                <a href="#overview" className="px-3.5 py-1.5 rounded-lg bg-[var(--bg-card)] hover:bg-[var(--bg-surface-soft)] text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-[var(--border)] transition-colors whitespace-nowrap">
                    Overview
                </a>
                <a href="#challenge-solution" className="px-3.5 py-1.5 rounded-lg bg-[var(--bg-card)] hover:bg-[var(--bg-surface-soft)] text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-[var(--border)] transition-colors whitespace-nowrap">
                    Challenge & Solution
                </a>
                <a href="#strategy-pillars" className="px-3.5 py-1.5 rounded-lg bg-[var(--bg-card)] hover:bg-[var(--bg-surface-soft)] text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-[var(--border)] transition-colors whitespace-nowrap">
                    Strategy Pillars
                </a>
                <a href="#results" className="px-3.5 py-1.5 rounded-lg bg-[var(--bg-card)] hover:bg-[var(--bg-surface-soft)] text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-[var(--border)] transition-colors whitespace-nowrap">
                    Key Outcomes
                </a>
                {hasKeywords && (
                    <a href="#keywords" className="px-3.5 py-1.5 rounded-lg bg-[var(--accent-cyan)]/15 text-[var(--accent-cyan)] border border-[var(--accent-cyan)]/35 font-bold whitespace-nowrap">
                        SERP Keywords
                    </a>
                )}
                {hasAds && (
                    <a href="#campaign-stats" className="px-3.5 py-1.5 rounded-lg bg-[var(--accent-blue)]/15 text-[var(--accent-blue)] border border-[var(--accent-blue)]/35 font-bold whitespace-nowrap">
                        Google Ads
                    </a>
                )}
                {hasGallery && (
                    <a href="#gallery" className="px-3.5 py-1.5 rounded-lg bg-[var(--bg-card)] hover:bg-[var(--bg-surface-soft)] text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-[var(--border)] transition-colors whitespace-nowrap">
                        Creatives & Showcase
                    </a>
                )}
                <a href="#testimonial" className="px-3.5 py-1.5 rounded-lg bg-[var(--bg-card)] hover:bg-[var(--bg-surface-soft)] text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-[var(--border)] transition-colors whitespace-nowrap">
                    Client Endorsement
                </a>
            </div>
        </div>
    );
};

// ============================================================
// MAIN CASE STUDY DETAIL PAGE
// ============================================================
const CaseStudyDetail = () => {
    const { slug } = useParams();
    const study = getCaseStudyById(slug);

    if (!study) {
        return <Navigate to="/case-studies" replace />;
    }

    const keywordRows = caseStudyKeywords[study.id] || [];
    const hasKeywords = keywordRows.length > 0;
    const hasAds = !!study.adsStats?.length;
    const hasGallery = (study.images?.length > 0) || !!study.website;

    const currentIndex = caseStudies.findIndex((item) => item.id === study.id);
    const prevStudy = caseStudies[(currentIndex - 1 + caseStudies.length) % caseStudies.length];
    const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];

    return (
        <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] transition-colors duration-300">
            <CaseStudyHero study={study} />

            <InPageNavigation hasKeywords={hasKeywords} hasAds={hasAds} hasGallery={hasGallery} />

            <div className="container-custom max-w-6xl mx-auto pt-10 sm:pt-14 pb-20">
                <div className="grid lg:grid-cols-12 gap-10 items-start">
                    <div className="lg:col-span-8 space-y-16">
                        <ScrollReveal>
                            <CaseStudyContent study={study} />
                        </ScrollReveal>

                        {hasKeywords && (
                            <ScrollReveal>
                                <CaseStudyKeywords rows={keywordRows} />
                            </ScrollReveal>
                        )}

                        {hasAds && (
                            <ScrollReveal>
                                <CaseStudyAdsStats adsStats={study.adsStats} />
                            </ScrollReveal>
                        )}

                        {hasGallery && (
                            <ScrollReveal>
                                <PhotoGallery study={study} />
                            </ScrollReveal>
                        )}
                    </div>

                    <div className="lg:col-span-4">
                        <CaseStudySidebar study={study} />
                    </div>
                </div>

                <div className="mt-20">
                    <ScrollReveal>
                        <CaseStudyCTA clientName={study.name} />
                    </ScrollReveal>
                </div>

                <div className="mt-20">
                    <ScrollReveal>
                        <RelatedCaseStudies currentStudyId={study.id} categories={study.categories} />
                    </ScrollReveal>
                </div>

                <div className="mt-20 pt-10 pb-12 border-t border-[var(--border)]">
                    <div className="grid sm:grid-cols-2 gap-4">
                        <Link
                            to={`/case-studies/${prevStudy.id}`}
                            className="group flex items-center gap-4 text-left p-4 sm:p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--accent-cyan)]/50 transition-all hover:-translate-y-0.5"
                        >
                            <div className="w-11 h-11 rounded-xl bg-[var(--bg-surface-soft)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] group-hover:text-[var(--accent-cyan)] group-hover:border-[var(--accent-cyan)]/40 transition-colors shrink-0">
                                <ChevronLeft size={22} />
                            </div>
                            <div className="min-w-0">
                                <span className="text-[11px] text-[var(--text-faint)] block font-bold mb-1">
                                    Previous case study
                                </span>
                                <span className="text-sm sm:text-base font-extrabold text-[var(--text-primary)] group-hover:text-[var(--accent-cyan)] transition-colors truncate block">
                                    {prevStudy.name}
                                </span>
                            </div>
                        </Link>

                        <Link
                            to={`/case-studies/${nextStudy.id}`}
                            className="group flex items-center justify-between sm:justify-end gap-4 text-right p-4 sm:p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--accent-cyan)]/50 transition-all hover:-translate-y-0.5"
                        >
                            <div className="min-w-0 text-left sm:text-right order-2 sm:order-1">
                                <span className="text-[11px] text-[var(--text-faint)] block font-bold mb-1">
                                    Next case study
                                </span>
                                <span className="text-sm sm:text-base font-extrabold text-[var(--text-primary)] group-hover:text-[var(--accent-cyan)] transition-colors truncate block">
                                    {nextStudy.name}
                                </span>
                            </div>
                            <div className="w-11 h-11 rounded-xl bg-[var(--bg-surface-soft)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] group-hover:text-[var(--accent-cyan)] group-hover:border-[var(--accent-cyan)]/40 transition-colors shrink-0 order-1 sm:order-2">
                                <ChevronRight size={22} />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaseStudyDetail;