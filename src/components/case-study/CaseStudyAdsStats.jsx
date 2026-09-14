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
    { key: 'clicks', label: 'Clicks Driven', icon: MousePointerClick, color: 'text-[var(--accent-cyan)]', note: 'High-intent search traffic' },
    { key: 'impressions', label: 'Impressions', icon: Eye, color: 'text-[var(--accent-purple)]', note: 'Targeted audience reach' },
    { key: 'conversions', label: 'Conversions', icon: Target, color: 'text-emerald-600 dark:text-emerald-400', valueColor: 'text-emerald-600 dark:text-emerald-400', note: 'Verified inquiries & RFQs' },
    { key: 'avgCpc', label: 'Average CPC', icon: TrendingUp, color: 'text-[var(--accent-blue)]', valueColor: 'text-[var(--accent-blue)]', note: 'Optimized bid efficiency' },
    { key: 'costPerConv', label: 'Cost / Conversion', icon: BarChart3, color: 'text-amber-600 dark:text-amber-300', valueColor: 'text-amber-600 dark:text-amber-300', note: 'High lead profitability' },
    { key: 'phoneCalls', label: 'Phone Calls', icon: PhoneCall, color: 'text-[var(--accent-cyan)]', valueColor: 'text-[var(--accent-cyan)]', note: 'Direct call extensions' },
    { key: 'spend', label: 'Total Spend', icon: DollarSign, color: 'text-rose-500', note: 'Budget deployed' },
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
            </motion.div>

            <div className="space-y-6">
                {adsStats.map((campaign, idx) => (
                    <motion.div
                        key={idx}
                        variants={revealUp}
                        className="rounded-2xl p-6 sm:p-7 border border-[var(--border)] bg-[var(--bg-card)] shadow-xl relative overflow-hidden transition-colors duration-300"
                    >
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

                        <motion.div
                            variants={revealContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
                        >
                            {METRIC_CONFIG.filter((m) => campaign[m.key]).map((m) => {
                                const Icon = m.icon;
                                const { prefix, target, suffix, decimals } = parseKpiValue(campaign[m.key]);
                                return (
                                    <motion.div
                                        key={m.key}
                                        variants={revealUp}
                                        whileHover={{ y: -3 }}
                                        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                                        className="p-4 rounded-xl bg-[var(--bg-surface-soft)] border border-[var(--border)] shadow-sm hover:border-[var(--accent-cyan)]/30 transition-colors"
                                    >
                                        <div className={`flex items-center gap-1.5 text-xs font-medium mb-1 ${m.color}`}>
                                            <Icon size={13} />
                                            <span>{m.label}</span>
                                        </div>
                                        <div className={`text-2xl sm:text-3xl font-black ${m.valueColor || 'text-[var(--text-primary)]'}`}>
                                            <AnimatedCounter target={target} prefix={prefix} suffix={suffix} decimals={decimals} />
                                        </div>
                                        <div className="text-[10px] text-[var(--text-faint)] mt-1 font-medium">
                                            {m.note}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}
