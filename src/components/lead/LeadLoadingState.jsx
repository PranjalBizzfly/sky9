import React from 'react';
import { motion } from 'framer-motion';
import { Send, Sparkles } from 'lucide-react';

export default function LeadLoadingState({ message = "Submitting your admissions enquiry..." }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="py-12 px-4 text-center space-y-5"
    >
      <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
        {/* Pulsing Glowing Ring */}
        <motion.div
          animate={{ scale: [1, 1.45, 1], opacity: [0.5, 0.1, 0.5] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 rounded-full bg-emerald-500/30 blur-sm pointer-events-none"
        />

        {/* Spinning Outer Ring */}
        <div className="absolute inset-0 border-3 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin" />

        {/* Center Flying Icon Animation */}
        <motion.div
          animate={{ y: [-3, 3, -3], rotate: [-4, 4, -4] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-9 h-9 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center shadow-inner"
        >
          <Send className="w-4 h-4" />
        </motion.div>
      </div>

      <div className="space-y-1.5 max-w-xs mx-auto">
        <h4 className="text-base font-bold text-slate-900 dark:text-white font-heading">
          {message}
        </h4>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Connecting to Pune Admissions Desk...
        </p>
      </div>
    </motion.div>
  );
}
