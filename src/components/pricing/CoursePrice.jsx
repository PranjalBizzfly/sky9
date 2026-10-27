import { IndianRupee } from 'lucide-react';

/**
 * Course fee display: the course's real fee as the main price, with double
 * that amount shown beside it struck through. Display-only, the fee data
 * itself is never changed. Non-numeric fees ("As Applicable") render as-is.
 */

// "₹25,000" -> "₹50,000", "₹7,000/-" -> "₹14,000/-"; null when the fee has no amount.
function getStrikePrice(fee) {
  if (typeof fee !== 'string') return null;
  const match = fee.match(/[\d,]+/);
  if (!match) return null;
  const amount = Number(match[0].replace(/,/g, ''));
  if (!amount) return null;
  return fee.replace(match[0], (amount * 2).toLocaleString('en-IN'));
}

// Struck-price colours: theme-aware by default, always light text on dark panels.
const STRIKE_TONES = {
  default: 'text-slate-500 dark:text-slate-300 decoration-slate-500 dark:decoration-slate-300',
  onDark: 'text-slate-300 decoration-slate-300',
};

/**
 * `stacked` shows the struck (earlier) price on top with the main price below it.
 * `align` sets the horizontal alignment ('start' | 'end').
 * `tone="onDark"` is for prices sitting on an always-dark panel (heroes, banners).
 */
export default function CoursePrice({ fee, className = '', strikeClassName = 'text-[0.85em]', stacked = false, tone = 'default', align = 'end' }) {
  const strike = getStrikePrice(fee);
  const struck = strike && (
    <s className={`font-semibold line-through decoration-2 ${STRIKE_TONES[tone]} ${strikeClassName}`}>{strike}</s>
  );
  const main = <span className={className}>{fee}</span>;

  if (stacked) {
    return (
      <span className={`inline-flex flex-col leading-tight gap-0.5 ${align === 'start' ? 'items-start text-left' : 'items-end text-right'}`}>
        {struck}
        {main}
      </span>
    );
  }
  return (
    <span className={`inline-flex flex-wrap items-baseline gap-x-2 ${align === 'start' ? 'justify-start' : 'justify-end'}`}>
      {main}
      {struck}
    </span>
  );
}

// Box colours for the highlighted fee block.
const BLOCK_TONES = {
  default: {
    box: 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200/80 dark:border-emerald-800/60',
    label: 'text-slate-600 dark:text-slate-300',
    price: 'text-emerald-600 dark:text-emerald-400',
  },
  onDark: {
    box: 'bg-emerald-500/10 border-emerald-500/30',
    label: 'text-slate-300',
    price: 'text-emerald-400',
  },
};

/**
 * Highlighted "Course Fee" box: label on top, struck (earlier) price, then the
 * main price large. Used on course cards and inner-page course panels.
 */
export function CoursePriceBlock({ fee, tone = 'default', className = '' }) {
  const t = BLOCK_TONES[tone];
  return (
    <div className={`px-4 py-3 rounded-xl border ${t.box} ${className}`}>
      <span className={`flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider mb-1.5 ${t.label}`}>
        <IndianRupee className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 shrink-0" />
        Course Fee
      </span>
      <CoursePrice
        fee={fee}
        stacked
        align="start"
        tone={tone}
        // "As Applicable" is text, not an amount, so it gets a smaller size.
        className={`${/\d/.test(fee) ? 'text-2xl' : 'text-xl'} font-black font-heading tracking-tight whitespace-nowrap ${t.price}`}
        strikeClassName="text-base"
      />
    </div>
  );
}
