import React from 'react';
import { Sparkles } from 'lucide-react';

/**
 * Master pill/eyebrow label pattern (reference: "ABOUT US" pill on the About preview section).
 * One shared visual for every small section-label/eyebrow pill across the site — only the
 * label text, icon, and background `tone` (for placement on light, dark-photo, or brand-color
 * surfaces) are meant to vary; the shape, spacing, and typography must not.
 */
const TONE_STYLES = {
  light: 'bg-emerald-100/80 dark:bg-emerald-950/70 border-emerald-300 dark:border-emerald-700/60 text-emerald-800 dark:text-emerald-300',
  onDark: 'bg-slate-950/60 border-emerald-500/40 text-emerald-400',
  onBrand: 'bg-white/15 border-white/20 text-white',
};

export default function SectionLabel({ children, icon: Icon = Sparkles, tone = 'light', className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border font-bold text-xs uppercase tracking-wider backdrop-blur-md transition-colors duration-200 ${TONE_STYLES[tone]} ${className}`}
    >
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />}
      <span>{children}</span>
    </span>
  );
}
