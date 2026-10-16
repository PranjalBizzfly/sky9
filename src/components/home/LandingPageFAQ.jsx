import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { landingPageFAQs } from '../../data/siteData';

const LandingPageFAQ = () => {
  const [openId, setOpenId] = useState(1);
  const displayFAQs = landingPageFAQs.slice(0, 8);

  const toggleAccordion = (id) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section className="py-6 sm:py-10 md:py-14 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden border-t border-slate-200/70 dark:border-slate-800/80">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="OUR PROGRAM"
          title="What Will You Learn"
          subtitle="Practical, industry-relevant skills across digital marketing, AI, automation, and software systems designed for real-world execution."
        />

        {/* Centered Clean Container for 6 FAQs */}
        <div className="mt-4 sm:mt-8 md:mt-12 max-w-3xl mx-auto space-y-3 sm:space-y-3.5">
          {displayFAQs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-white dark:bg-slate-800/90 border-emerald-500/60 dark:border-emerald-500/50 shadow-md ring-1 ring-emerald-500/20'
                    : 'bg-white dark:bg-slate-800/50 border-slate-200/90 dark:border-slate-700/80 hover:border-emerald-500/30 dark:hover:border-slate-600 shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full px-5 sm:px-6 py-4 sm:py-4.5 flex items-center justify-between text-left focus:outline-none transition-colors"
                >
                  <div className="flex items-center gap-3 pr-4">
                    <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 shrink-0 w-6">
                      {String(faq.id).padStart(2, '0')}.
                    </span>
                    <span
                      className={`text-sm sm:text-base font-bold transition-colors ${
                        isOpen
                          ? 'text-emerald-700 dark:text-emerald-400'
                          : 'text-slate-900 dark:text-white'
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>

                  {/* Green Chevron Icon */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 rotate-180'
                        : 'bg-slate-100 dark:bg-slate-700/70 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-700/60 pl-14 sm:pl-15">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default LandingPageFAQ;