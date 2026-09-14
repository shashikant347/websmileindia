// src/utils/parseCounterValue.js
// The project's AnimatedCounter takes { target, prefix, suffix, decimals } —
// numeric props, not a formatted string. This splits values like "₹17.32",
// "590K", "84", "70+" into those pieces so the same counter can animate any of them.
export function parseKpiValue(raw) {
    const str = String(raw).trim();
    const match = str.match(/^([^\d.]*)([\d,]*\.?\d*)(.*)$/);
    if (!match) return { prefix: '', target: 0, suffix: str, decimals: 0 };

    const [, prefix, numPart, suffix] = match;
    const cleaned = numPart.replace(/,/g, '');
    const target = parseFloat(cleaned);
    const decimals = cleaned.includes('.') ? cleaned.split('.')[1].length : 0;

    if (Number.isNaN(target)) return { prefix: '', target: 0, suffix: str, decimals: 0 };
    return { prefix, target, suffix, decimals };
}
