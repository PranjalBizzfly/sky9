import React from 'react';
import { motion } from 'framer-motion';

/**
 * PageTransition Component
 * Subtle, fast fade & slide transition (300ms) that doesn't block interactivity.
 */
export function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

/**
 * LoadingSkeleton Component
 * Elegant shimmer skeleton loader for route Suspense fallback.
 */
export function LoadingSkeleton() {
  return (
    <div className="min-h-[70vh] max-w-7xl mx-auto px-4 py-24 space-y-8 animate-pulse">
      {/* Skeleton Header */}
      <div className="space-y-4 max-w-2xl">
        <div className="h-6 w-36 bg-slate-200 dark:bg-slate-800 rounded-full" />
        <div className="h-10 sm:h-12 w-3/4 bg-slate-200 dark:bg-slate-800 rounded-xl" />
        <div className="h-4 w-full bg-slate-200 dark:bg-slate-800 rounded" />
        <div className="h-4 w-2/3 bg-slate-200 dark:bg-slate-800 rounded" />
      </div>

      {/* Skeleton Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 space-y-4"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-200 dark:bg-slate-800" />
            <div className="h-6 w-3/4 bg-slate-200 dark:bg-slate-800 rounded" />
            <div className="h-16 w-full bg-slate-200 dark:bg-slate-800 rounded-lg" />
            <div className="h-10 w-full bg-slate-200 dark:bg-slate-800 rounded-xl" />
          </div>
        ))}
      </div>
    </div>
  );
}
