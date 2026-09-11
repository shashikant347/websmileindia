// src/components/case-study/CaseStudyKeywords.jsx
import { useState, useMemo } from 'react';
import {
    Search,
    TrendingUp,
    Trophy,
    Award,
    Sparkles,
    Copy,
    Check,
    X,
} from 'lucide-react';

export default function CaseStudyKeywords({ rows = [] }) {
    const [query, setQuery] = useState('');
    const [activeTab, setActiveTab] = useState('all'); // 'all' | 'top1' | 'top3' | 'page1'
    const [copiedKeyword, setCopiedKeyword] = useState(null);

    // Compute distribution counts
    const counts = useMemo(() => {
        let top1 = 0;
        let top3 = 0;
        let page1 = 0;

        rows.forEach((row) => {
            const num = Number(String(row.rank).replace('#', ''));
            if (num === 1) top1++;
            if (num <= 3) top3++;
            if (num <= 10) page1++;
        });

        return { total: rows.length, top1, top3, page1 };
    }, [rows]);

    // Filter rows based on search query and active tab
    const filteredRows = useMemo(() => {
        let result = rows;

        // Apply Tab Filter
        if (activeTab === 'top1') {
            result = result.filter((r) => Number(String(r.rank).replace('#', '')) === 1);
        } else if (activeTab === 'top3') {
            result = result.filter((r) => Number(String(r.rank).replace('#', '')) <= 3);
        } else if (activeTab === 'page1') {
            result = result.filter((r) => Number(String(r.rank).replace('#', '')) <= 10);
        }

        // Apply Search Filter
        if (query.trim()) {
            const q = query.toLowerCase();
            result = result.filter((r) => r.keyword.toLowerCase().includes(q));
        }

        return result;
    }, [rows, query, activeTab]);

    const handleCopy = (keyword) => {
        navigator.clipboard.writeText(keyword);
        setCopiedKeyword(keyword);
        setTimeout(() => setCopiedKeyword(null), 2000);
    };

    const getRankStyle = (rank) => {
        const number = Number(rank);
        if (number === 1) {
            return {
                wrapper: 'bg-amber-400/15 border-amber-500/40 text-amber-600 dark:text-amber-300 font-black',
                dot: 'bg-amber-500 dark:bg-amber-300',
                label: 'Top 1 Dominance',
            };
        }
        if (number === 2) {
            return {
                wrapper: 'bg-slate-300/20 border-slate-400/30 text-slate-700 dark:text-slate-200 font-bold',
                dot: 'bg-slate-400',
                label: 'Position #2',
            };
        }
        if (number === 3) {
            return {
                wrapper: 'bg-orange-400/15 border-orange-500/35 text-orange-600 dark:text-orange-300 font-bold',
                dot: 'bg-orange-500 dark:bg-orange-300',
                label: 'Position #3',
            };
        }
        if (number <= 10) {
            return {
                wrapper: 'bg-[var(--accent-cyan)]/15 border-[var(--accent-cyan)]/35 text-[var(--accent-cyan)] font-bold',
                dot: 'bg-[var(--accent-cyan)]',
                label: 'Page 1',
            };
        }
        return {
            wrapper: 'bg-[var(--bg-surface-soft)] border-[var(--border)] text-[var(--text-muted)] font-medium',
            dot: 'bg-[var(--text-faint)]',
            label: `Rank ${number}`,
        };
    };

    if (!rows.length) return null;

    return (
        <section id="keywords" className="scroll-mt-32 space-y-6">
            {/* Header */}
            <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--accent-cyan)] mb-2">
                    <TrendingUp size={14} />
                    <span>Search Engine Verification</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)] tracking-tight">
                    Verified Google Keyword Rankings
                </h2>
                <p className="text-sm text-[var(--text-muted)] mt-1 font-normal">
                    Live organic search positions achieved through our structured SEO campaigns.
                </p>
            </div>

            {/* Keyword Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <button
                    onClick={() => setActiveTab('all')}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer shadow-sm ${
                        activeTab === 'all'
                            ? 'bg-[var(--bg-card)] border-[var(--accent-cyan)] ring-1 ring-[var(--accent-cyan)]/40 shadow-md'
                            : 'bg-[var(--bg-card)] border-[var(--border)] hover:border-[var(--accent-cyan)]/40'
                    }`}
                >
                    <div className="text-xs text-[var(--text-faint)] font-medium">Total Tracked</div>
                    <div className="text-2xl sm:text-3xl font-black text-[var(--text-primary)] mt-1">
                        {counts.total}
                    </div>
                    <div className="text-[11px] text-[var(--text-faint)] mt-0.5">Commercial queries</div>
                </button>

                <button
                    onClick={() => setActiveTab('top1')}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer shadow-sm ${
                        activeTab === 'top1'
                            ? 'bg-amber-500/10 border-amber-500 ring-1 ring-amber-500/40 shadow-md'
                            : 'bg-[var(--bg-card)] border-[var(--border)] hover:border-amber-500/40'
                    }`}
                >
                    <div className="text-xs text-amber-600 dark:text-amber-400 font-semibold flex items-center gap-1">
                        <Trophy size={13} />
                        <span>Ranked #1</span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-amber-600 dark:text-amber-300 mt-1">
                        {counts.top1}
                    </div>
                    <div className="text-[11px] text-[var(--text-faint)] mt-0.5">Top organic spot</div>
                </button>

                <button
                    onClick={() => setActiveTab('top3')}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer shadow-sm ${
                        activeTab === 'top3'
                            ? 'bg-orange-500/10 border-orange-500 ring-1 ring-orange-500/40 shadow-md'
                            : 'bg-[var(--bg-card)] border-[var(--border)] hover:border-orange-500/40'
                    }`}
                >
                    <div className="text-xs text-orange-600 dark:text-orange-400 font-semibold flex items-center gap-1">
                        <Award size={13} />
                        <span>Top 3</span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-orange-600 dark:text-orange-300 mt-1">
                        {counts.top3}
                    </div>
                    <div className="text-[11px] text-[var(--text-faint)] mt-0.5">Above the fold</div>
                </button>

                <button
                    onClick={() => setActiveTab('page1')}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer shadow-sm ${
                        activeTab === 'page1'
                            ? 'bg-[var(--accent-cyan)]/15 border-[var(--accent-cyan)] ring-1 ring-[var(--accent-cyan)]/40 shadow-md'
                            : 'bg-[var(--bg-card)] border-[var(--border)] hover:border-[var(--accent-cyan)]/40'
                    }`}
                >
                    <div className="text-xs text-[var(--accent-cyan)] font-semibold flex items-center gap-1">
                        <Sparkles size={13} />
                        <span>Page 1</span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-[var(--accent-cyan)] mt-1">
                        {counts.page1}
                    </div>
                    <div className="text-[11px] text-[var(--text-faint)] mt-0.5">First page visibility</div>
                </button>
            </div>

            {/* Filter Tabs & Search Bar */}
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between pt-2">
                {/* Tabs */}
                <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] self-start overflow-x-auto max-w-full shadow-sm">
                    <button
                        onClick={() => setActiveTab('all')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                            activeTab === 'all'
                                ? 'bg-[var(--bg-surface-soft)] text-[var(--text-primary)] border border-[var(--border)] shadow-sm'
                                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                        }`}
                    >
                        All ({counts.total})
                    </button>
                    <button
                        onClick={() => setActiveTab('top1')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                            activeTab === 'top1'
                                ? 'bg-amber-500/20 text-amber-600 dark:text-amber-300 border border-amber-500/30 shadow-sm'
                                : 'text-[var(--text-muted)] hover:text-amber-500'
                        }`}
                    >
                        Rank #1 ({counts.top1})
                    </button>
                    <button
                        onClick={() => setActiveTab('top3')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                            activeTab === 'top3'
                                ? 'bg-orange-500/20 text-orange-600 dark:text-orange-300 border border-orange-500/30 shadow-sm'
                                : 'text-[var(--text-muted)] hover:text-orange-500'
                        }`}
                    >
                        Top 3 ({counts.top3})
                    </button>
                    <button
                        onClick={() => setActiveTab('page1')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                            activeTab === 'page1'
                                ? 'bg-[var(--accent-cyan)]/20 text-[var(--accent-cyan)] border border-[var(--accent-cyan)]/30 shadow-sm'
                                : 'text-[var(--text-muted)] hover:text-[var(--accent-cyan)]'
                        }`}
                    >
                        Page 1 ({counts.page1})
                    </button>
                </div>

                {/* Search Input */}
                <div className="relative min-w-[240px] sm:w-72">
                    <Search
                        size={14}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-faint)]"
                    />
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search tracked keywords..."
                        className="w-full pl-9 pr-8 py-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] focus:border-[var(--accent-cyan)] text-xs text-[var(--text-primary)] placeholder:text-[var(--text-faint)] focus:outline-none transition-colors shadow-sm"
                    />
                    {query && (
                        <button
                            onClick={() => setQuery('')}
                            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[var(--text-faint)] hover:text-[var(--text-primary)] cursor-pointer"
                        >
                            <X size={14} />
                        </button>
                    )}
                </div>
            </div>

            {/* Keyword Table Container */}
            <div className="rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--bg-card)] shadow-xl transition-colors duration-300">
                {/* Table Header */}
                <div className="grid grid-cols-[1fr_130px] px-5 py-3.5 bg-[var(--bg-surface-soft)] border-b border-[var(--border)] text-[11px] uppercase tracking-[0.12em] font-bold text-[var(--text-muted)]">
                    <div className="flex items-center gap-2">
                        <span>Target Keyword Phrase</span>
                        <span className="text-[10px] font-normal normal-case text-[var(--text-faint)]">
                            (Click copy to grab)
                        </span>
                    </div>
                    <div className="text-right">Google SERP Position</div>
                </div>

                {/* Table Body */}
                <div className="max-h-[460px] overflow-y-auto divide-y divide-[var(--border)]">
                    {filteredRows.map((row, index) => {
                        const rankNum = Number(String(row.rank).replace('#', ''));
                        const style = getRankStyle(rankNum);
                        const isCopied = copiedKeyword === row.keyword;

                        return (
                            <div
                                key={`${row.keyword}-${index}`}
                                className="group grid grid-cols-[1fr_130px] items-center px-5 py-3 hover:bg-[var(--bg-surface-soft)] transition-colors"
                            >
                                {/* Keyword Name */}
                                <div className="flex items-center gap-3 min-w-0 pr-3">
                                    <div className="w-7 h-7 shrink-0 rounded-lg flex items-center justify-center bg-[var(--bg-surface-soft)] border border-[var(--border)] text-[10px] font-mono text-[var(--text-faint)]">
                                        {index + 1}
                                    </div>

                                    <div className="min-w-0 flex items-center gap-2 flex-1">
                                        <span className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] transition-colors truncate">
                                            {row.keyword}
                                        </span>

                                        <button
                                            onClick={() => handleCopy(row.keyword)}
                                            className="opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-[var(--border)] text-[var(--text-faint)] hover:text-[var(--text-primary)] transition-all shrink-0 cursor-pointer"
                                            title="Copy keyword"
                                        >
                                            {isCopied ? (
                                                <Check size={12} className="text-emerald-500" />
                                            ) : (
                                                <Copy size={12} />
                                            )}
                                        </button>
                                    </div>
                                </div>

                                {/* Rank Badge */}
                                <div className="flex justify-end">
                                    <div
                                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border text-xs transition-all ${style.wrapper}`}
                                    >
                                        <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
                                        <span className="opacity-60 text-[10px]">#</span>
                                        <span className="text-sm font-black">{rankNum}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                    {/* Empty State */}
                    {filteredRows.length === 0 && (
                        <div className="py-16 text-center">
                            <div className="w-12 h-12 mx-auto rounded-2xl flex items-center justify-center bg-[var(--bg-surface-soft)] border border-[var(--border)] mb-3 text-[var(--text-faint)]">
                                <Search size={20} />
                            </div>
                            <p className="text-sm font-bold text-[var(--text-primary)]">No keywords found</p>
                            <p className="text-xs text-[var(--text-faint)] mt-1">
                                Try adjusting your search or tab filter
                            </p>
                            <button
                                onClick={() => {
                                    setQuery('');
                                    setActiveTab('all');
                                }}
                                className="mt-4 px-3.5 py-1.5 rounded-lg bg-[var(--bg-surface-soft)] hover:bg-[var(--border)] text-xs text-[var(--text-primary)] font-semibold transition-colors cursor-pointer border border-[var(--border)]"
                            >
                                Reset Filters
                            </button>
                        </div>
                    )}
                </div>

                {/* Footer Count Bar */}
                <div className="px-5 py-3 bg-[var(--bg-surface-soft)] border-t border-[var(--border)] flex items-center justify-between text-xs text-[var(--text-muted)]">
                    <span>
                        Showing <strong className="text-[var(--text-primary)]">{filteredRows.length}</strong> of{' '}
                        <strong className="text-[var(--text-primary)]">{rows.length}</strong> verified keywords
                    </span>
                    <span className="flex items-center gap-1.5 font-medium">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Audited Organic Positions
                    </span>
                </div>
            </div>
        </section>
    );
}
