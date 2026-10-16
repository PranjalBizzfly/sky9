import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQAccordion = ({ faqs = [] }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {faqs.map((faq, index) => {
        const isActive = activeIndex === index;
        
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
            className={`rounded-2xl border transition duration-300 backdrop-blur-md overflow-hidden ${
              isActive 
                ? 'bg-white/95 dark:bg-slate-800/90 border-emerald-500/80 shadow-lg shadow-emerald-500/10' 
                : 'bg-white/70 dark:bg-slate-800/50 border-slate-200/80 dark:border-slate-700/80 hover:border-emerald-500/40 hover:shadow-md'
            }`}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
              aria-expanded={isActive}
            >
              <span className={`font-semibold text-base sm:text-lg transition-colors font-heading pr-4 ${
                isActive ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-900 dark:text-white'
              }`}>
                {faq.question}
              </span>
              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition duration-300 ${
                isActive ? 'bg-emerald-500 text-white rotate-180 shadow-md shadow-emerald-500/30' : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
              }`}>
                <ChevronDown className="w-4 h-4 transition-transform duration-300" />
              </div>
            </button>
            
            <AnimatePresence initial={false}>
              {isActive && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-700/60 mt-1">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;
