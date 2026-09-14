// src/components/case-study/CaseStudyAdsStats.jsx
import { motion } from 'framer-motion';
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
import { parseKpiValue } from '../../utils/parseCounterValue';
import AnimatedCounter from '../ui/AnimatedCounter';

const revealUp = {
    hidden: { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};
const revealContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06 } },
};

const METRIC_CONFIG = [
    { key: 'clicks', label: 'Clicks driven', icon: MousePointerClick, color: 'text-[var(--accent-cyan)]', note: 'High-intent search traffic' },
    { key: 'impressions', label: 'Impressions', icon: Eye, color: 'text-[var(--accent-purple)]', note: 'Targeted audience reach' },
    { key: 'conversions', label: 'Conversions', icon: Target, color: 'text-emerald-600 dark:text-emerald-400', valueColor: 'text-emerald-600 dark:text-emerald-400', note: 'Verified inquiries & RFQs' },
    { key: 'avgCpc', label: 'Average CPC', icon: TrendingUp, color: 'text-[var(--accent-blue)]', valueColor: 'text-[var(--accent-blue)]', note: 'Optimized bid efficiency' },
    { key: 'costPerConv', label: 'Cost / conversion', icon: BarChart3, color: 'text-amber-600 dark:text-amber-300', valueColor: 'text-amber-600 dark:text-amber-300', note: 'High lead profitability' },
    { key: 'phoneCalls', label: 'Phone calls', icon: PhoneCall, color: 'text-[var(--accent-cyan)]', valueColor: 'text-[var(--accent-cyan)]', note: 'Direct call extensions' },
    { key: 'spend', label: 'Total spend', icon: DollarSign, color: 'text-rose-500', note: 'Budget deployed' },
];

export default function CaseStudyAdsStats({ adsStats = [] }) {
    if (!adsStats?.length) return null;

    return (
        <motion.section
            id="campaign-stats"
            className="scroll-mt-32 space-y-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={revealContainer}
        >
            <motion.div variants={revealUp}>
                <div className="text-xs font-semibold text-[var(--text-faint)] mb-2">
                    Paid acquisition performance
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)] tracking-tight">
                    Google Ads campaign performance
                </h2>
                <p className="text-sm text-[var(--text-muted)] mt-1 font-normal">
                    Audited click-through, conversion, and cost metrics across verified campaign cycles.
                </p>
            </motion.div>

            <div className="space-y-6">
                {adsStats.map((campaign, idx) => {
                    const metrics = METRIC_CONFIG.filter((m) => campaign[m.key]);
                    return (
                        <motion.div
                            key={idx}
                            variants={revealUp}
                            className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] overflow-hidden"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 sm:px-7 py-5 border-b border-[var(--border)]">
                                <div>
                                    <span className="text-[11px] font-mono font-bold text-[var(--text-faint)]">
                                        Window {String(idx + 1).padStart(2, '0')}
                                    </span>
                                    <h3 className="text-lg font-bold text-[var(--text-primary)] mt-0.5">
                                        {campaign.label}
                                    </h3>
                                </div>

                                <div className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 text-xs font-semibold self-start sm:self-auto">
                                    <CheckCircle2 size={13} />
                                    <span>Verified lead delivery</span>
                                </div>
                            </div>

                            {/* Statement-style rows: a divided ledger rather than a repeated card grid */}
                            <motion.div
                                variants={revealContainer}
                                className="grid grid-cols-1 sm:grid-cols-2"
                            >
                                {metrics.map((m, i) => {
                                    const Icon = m.icon;
                                    const { prefix, target, suffix, decimals } = parseKpiValue(campaign[m.key]);
                                    const topBorder = i > 0 ? 'border-t border-[var(--border)] sm:border-t-0' : '';
                                    const smTopBorder = i >= 2 ? 'sm:border-t sm:border-[var(--border)]' : '';
                                    const smLeftBorder = i % 2 === 1 ? 'sm:border-l sm:border-[var(--border)]' : '';

                                    return (
                                        <motion.div
                                            key={m.key}
                                            variants={revealUp}
                                            className={`flex items-center justify-between gap-4 px-6 sm:px-7 py-4 ${topBorder} ${smTopBorder} ${smLeftBorder}`}
                                        >
                                            <div className={`flex items-center gap-2 text-xs font-medium ${m.color}`}>
                                                <Icon size={14} />
                                                <div>
                                                    <div>{m.label}</div>
                                                    <div className="text-[10px] text-[var(--text-faint)] font-normal">{m.note}</div>
                                                </div>
                                            </div>
                                            <div className={`text-xl sm:text-2xl font-black tabular-nums ${m.valueColor || 'text-[var(--text-primary)]'}`}>
                                                <AnimatedCounter target={target} prefix={prefix} suffix={suffix} decimals={decimals} />
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>
        </motion.section>
    );
}