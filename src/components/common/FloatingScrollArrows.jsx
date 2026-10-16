import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';

export default function FloatingScrollArrows() {
  const [showTop, setShowTop] = useState(false);
  const [showBottom, setShowBottom] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      // Show top arrow if user has scrolled down > 150px
      setShowTop(scrollY > 150);

      // Show bottom arrow if user is not already at the bottom (< fullHeight - windowHeight - 150)
      setShowBottom(scrollY + windowHeight < fullHeight - 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed right-4 sm:right-6 bottom-20 sm:bottom-24 z-50 flex flex-col gap-2 items-center pointer-events-none">
      {/* Scroll to Top Arrow */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 10 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            title="Scroll to top"
            className="pointer-events-auto w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 hover:text-white dark:hover:text-white hover:bg-emerald-600 dark:hover:bg-emerald-500 border border-slate-200/90 dark:border-slate-700/80 hover:border-emerald-400/60 shadow-lg shadow-black/10 dark:shadow-black/40 backdrop-blur-xl flex items-center justify-center transition duration-200 hover:scale-110 active:scale-95 cursor-pointer group"
          >
            <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:-translate-y-0.5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Scroll to Bottom Arrow */}
      <AnimatePresence>
        {showBottom && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: -10 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToBottom}
            aria-label="Scroll to bottom"
            title="Scroll to bottom"
            className="pointer-events-auto w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 hover:text-white dark:hover:text-white hover:bg-emerald-600 dark:hover:bg-emerald-500 border border-slate-200/90 dark:border-slate-700/80 hover:border-emerald-400/60 shadow-lg shadow-black/10 dark:shadow-black/40 backdrop-blur-xl flex items-center justify-center transition duration-200 hover:scale-110 active:scale-95 cursor-pointer group"
          >
            <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-y-0.5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
