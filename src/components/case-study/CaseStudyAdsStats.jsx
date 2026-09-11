// src/components/case-study/CaseStudyAdsStats.jsx
import {
    MousePointerClick,
    Eye,
    Target,
    PhoneCall,
    DollarSign,
    TrendingUp,
    CheckCircle2,
    BarChart3,
} from 'lucide-react';

export default function CaseStudyAdsStats({ adsStats = [] }) {
    if (!adsStats?.length) return null;

    return (
        <section id="campaign-stats" className="scroll-mt-32 space-y-6">
            <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--accent-blue)] mb-2">
                    <MousePointerClick size={14} />
                    <span>Paid Acquisition Performance</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)] tracking-tight">
                    Google Ads Campaign Performance
                </h2>
                <p className="text-sm text-[var(--text-muted)] mt-1 font-normal">
                    Audited click-through, conversion, and cost metrics across verified campaign cycles.
                </p>
            </div>

            <div className="space-y-6">
                {adsStats.map((campaign, idx) => {
                    return (
                        <div
                            key={idx}
                            className="rounded-2xl p-6 sm:p-7 border border-[var(--border)] bg-[var(--bg-card)] shadow-xl relative overflow-hidden transition-colors duration-300"
                        >
                            {/* Campaign Header */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-5 border-b border-[var(--border)]">
                                <div>
                                    <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--accent-blue)]">
                                        Campaign Window {idx + 1}
                                    </span>
                                    <h3 className="text-lg font-bold text-[var(--text-primary)] mt-0.5">
                                        {campaign.label}
                                    </h3>
                                </div>

                                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold self-start sm:self-auto">
                                    <CheckCircle2 size={13} />
                                    <span>Verified Lead Delivery</span>
                                </div>
                            </div>

                            {/* Metrics Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                                {campaign.clicks && (
                                    <div className="p-4 rounded-xl bg-[var(--bg-surface-soft)] border border-[var(--border)] shadow-sm">
                                        <div className="flex items-center gap-1.5 text-xs text-[var(--text-faint)] font-medium mb-1">
                                            <MousePointerClick size={13} className="text-[var(--accent-cyan)]" />
                                            <span>Clicks Driven</span>
                                        </div>
                                        <div className="text-2xl sm:text-3xl font-black text-[var(--text-primary)]">
                                            {campaign.clicks}
                                        </div>
                                        <div className="text-[10px] text-[var(--text-faint)] mt-1 font-medium">
                                            High-intent search traffic
                                        </div>
                                    </div>
                                )}

                                {campaign.impressions && (
                                    <div className="p-4 rounded-xl bg-[var(--bg-surface-soft)] border border-[var(--border)] shadow-sm">
                                        <div className="flex items-center gap-1.5 text-xs text-[var(--text-faint)] font-medium mb-1">
                                            <Eye size={13} className="text-[var(--accent-purple)]" />
                                            <span>Impressions</span>
                                        </div>
                                        <div className="text-2xl sm:text-3xl font-black text-[var(--text-primary)]">
                                            {campaign.impressions}
                                        </div>
                                        <div className="text-[10px] text-[var(--text-faint)] mt-1 font-medium">
                                            Targeted audience reach
                                        </div>
                                    </div>
                                )}

                                {campaign.conversions && (
                                    <div className="p-4 rounded-xl bg-[var(--bg-surface-soft)] border border-[var(--border)] shadow-sm">
                                        <div className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold mb-1">
                                            <Target size={13} />
                                            <span>Conversions</span>
                                        </div>
                                        <div className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400">
                                            {campaign.conversions}
                                        </div>
                                        <div className="text-[10px] text-[var(--text-faint)] mt-1 font-medium">
                                            Verified inquiries & RFQs
                                        </div>
                                    </div>
                                )}

                                {campaign.avgCpc && (
                                    <div className="p-4 rounded-xl bg-[var(--bg-surface-soft)] border border-[var(--border)] shadow-sm">
                                        <div className="flex items-center gap-1.5 text-xs text-[var(--accent-blue)] font-semibold mb-1">
                                            <TrendingUp size={13} />
                                            <span>Average CPC</span>
                                        </div>
                                        <div className="text-2xl sm:text-3xl font-black text-[var(--accent-blue)]">
                                            {campaign.avgCpc}
                                        </div>
                                        <div className="text-[10px] text-[var(--text-faint)] mt-1 font-medium">
                                            Optimized bid efficiency
                                        </div>
                                    </div>
                                )}

                                {campaign.costPerConv && (
                                    <div className="p-4 rounded-xl bg-[var(--bg-surface-soft)] border border-[var(--border)] shadow-sm">
                                        <div className="flex items-center gap-1.5 text-xs text-amber-600 dark:text-amber-300 font-semibold mb-1">
                                            <BarChart3 size={13} />
                                            <span>Cost / Conversion</span>
                                        </div>
                                        <div className="text-2xl sm:text-3xl font-black text-amber-600 dark:text-amber-300">
                                            {campaign.costPerConv}
                                        </div>
                                        <div className="text-[10px] text-[var(--text-faint)] mt-1 font-medium">
                                            High lead profitability
                                        </div>
                                    </div>
                                )}

                                {campaign.phoneCalls && (
                                    <div className="p-4 rounded-xl bg-[var(--bg-surface-soft)] border border-[var(--border)] shadow-sm">
                                        <div className="flex items-center gap-1.5 text-xs text-[var(--accent-cyan)] font-semibold mb-1">
                                            <PhoneCall size={13} />
                                            <span>Phone Calls</span>
                                        </div>
                                        <div className="text-2xl sm:text-3xl font-black text-[var(--accent-cyan)]">
                                            {campaign.phoneCalls}
                                        </div>
                                        <div className="text-[10px] text-[var(--text-faint)] mt-1 font-medium">
                                            Direct call extensions
                                        </div>
                                    </div>
                                )}

                                {campaign.spend && (
                                    <div className="p-4 rounded-xl bg-[var(--bg-surface-soft)] border border-[var(--border)] shadow-sm">
                                        <div className="flex items-center gap-1.5 text-xs text-[var(--text-faint)] font-medium mb-1">
                                            <DollarSign size={13} className="text-rose-500" />
                                            <span>Total Spend</span>
                                        </div>
                                        <div className="text-2xl sm:text-3xl font-black text-[var(--text-primary)]">
                                            {campaign.spend}
                                        </div>
                                        <div className="text-[10px] text-[var(--text-faint)] mt-1 font-medium">
                                            Budget deployed
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
