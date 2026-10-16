import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, CheckCircle2, ArrowRight } from 'lucide-react';
import { companyInfo } from '../../data/siteData';
import SectionLabel from '../common/SectionLabel';

// Generates lightweight particle coordinates for celebratory confetti burst
const CONFETTI_COLORS = ['#10b981', '#34d399', '#6ee7b7', '#3b82f6', '#f59e0b', '#ec4899', '#8b5cf6'];
const CONFETTI_PARTICLES = Array.from({ length: 28 }).map((_, i) => {
  const angle = (i / 28) * 360 + (Math.random() * 20 - 10);
  const rad = (angle * Math.PI) / 180;
  const distance = Math.random() * 120 + 80;
  return {
    id: i,
    x: Math.cos(rad) * distance,
    y: Math.sin(rad) * distance - 20,
    scale: Math.random() * 0.7 + 0.6,
    rotation: Math.random() * 720 - 360,
    color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    delay: Math.random() * 0.12,
  };
});

export default function LeadSuccessMessage({
  title = "Enquiry Received Successfully!",
  message = "Thank you for reaching out to Sky9 India. Our admissions counseling team will get in touch with you shortly.",
  onReset
}) {
  const phone = companyInfo?.phone || '+91 7 319 419 519';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="relative bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/30 dark:border-emerald-500/40 rounded-2xl p-6 sm:p-8 text-center space-y-5 overflow-hidden shadow-xl shadow-emerald-500/5"
    >
      {/* Floating Confetti Particle Burst Animation */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        {CONFETTI_PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
            animate={{
              opacity: [1, 1, 0],
              scale: [0, p.scale, p.scale * 0.4],
              x: p.x,
              y: p.y,
              rotate: p.rotation,
            }}
            transition={{
              duration: 1.8,
              delay: p.delay,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute w-2 h-2 rounded-full"
            style={{ backgroundColor: p.color }}
          />
        ))}
      </div>

      {/* Animated Glowing Pulse + Animated SVG Checkmark */}
      <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
        {/* Pulsating Ripple Rings */}
        <motion.div
          animate={{ scale: [1, 1.45, 1.8], opacity: [0.6, 0.25, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
          className="absolute inset-0 rounded-full bg-emerald-500/30 blur-sm pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1, 1.25, 1.5], opacity: [0.7, 0.3, 0] }}
          transition={{ duration: 2.2, delay: 0.4, repeat: Infinity, ease: 'easeOut' }}
          className="absolute inset-0 rounded-full bg-emerald-400/20 blur-md pointer-events-none"
        />

        {/* Bouncing Success Badge */}
        <motion.div
          initial={{ scale: 0, rotate: -60 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: 'spring',
            stiffness: 280,
            damping: 18,
            delay: 0.1,
          }}
          className="relative w-16 h-16 bg-gradient-to-tr from-emerald-600 to-emerald-400 text-white rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/40"
        >
          {/* Drawing Checkmark SVG */}
          <svg
            className="w-8 h-8 text-white stroke-[3.5]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <motion.path
              d="M20 6L9 17l-5-5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.55, delay: 0.25, ease: 'easeOut' }}
            />
          </svg>
        </motion.div>
      </div>

      {/* Staggered Text Animations */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="space-y-2"
      >
        <SectionLabel>Priority Admissions Queue</SectionLabel>

        <h4 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 dark:text-white">
          {title}
        </h4>
        <p className="text-xs sm:text-sm dark:text-slate-300 text-slate-600 leading-relaxed max-w-md mx-auto">
          {message}
        </p>
      </motion.div>

      {/* Action Buttons with Spring Micro-interactions */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.4 }}
        className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3"
      >
        <motion.a
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          href={`tel:${phone.replace(/\s+/g, '')}`}
          className="w-full sm:w-auto px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm rounded-xl transition inline-flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25"
        >
          <PhoneCall className="w-4 h-4 animate-bounce" />
          <span>Call Admissions: {phone}</span>
        </motion.a>
        {onReset && (
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            type="button"
            onClick={onReset}
            className="w-full sm:w-auto px-5 py-2.5 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-xs sm:text-sm rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            Submit Another Enquiry
          </motion.button>
        )}
      </motion.div>
    </motion.div>
  );
}
