import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Visibility and dismissal are owned by Layout, which also reserves matching
// bottom space so this fixed, full-width banner never overlaps (and silently
// swallows clicks on) the footer's last row of links.
export default function CookieConsentBanner({ isVisible, onChoice }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 dark:border-slate-700 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
        >
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <p className="text-sm font-bold text-slate-900 dark:text-white">Your privacy</p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                We use analytics to improve the site. Nothing is collected unless you agree, see our{' '}
                <Link to="/terms-and-conditions#privacy" className="text-emerald-600 dark:text-emerald-400 underline hover:text-emerald-700 dark:hover:text-emerald-300">
                  privacy policy
                </Link>
                .
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => onChoice('declined')}
                className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                Decline
              </button>
              <button
                onClick={() => onChoice('accepted')}
                className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs sm:text-sm font-semibold transition-colors shadow-lg shadow-emerald-500/25"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
