import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageSquare, X } from 'lucide-react';
import { useLead } from '../../context/LeadContext';
import { companyInfo } from '../../data/siteData';

export default function StickyCTA({ currentCourse = '' }) {
  const [visible, setVisible] = useState(true);
  const { openLeadModal } = useLead();
  const timerRef = useRef(null);

  const phone = companyInfo?.phone || '+91 7 319 419 519';

  useEffect(() => {
    // Auto dismiss after exactly 10 seconds on page load
    timerRef.current = setTimeout(() => {
      setVisible(false);
    }, 10000);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleDismiss = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-40 p-3 sm:p-4 bg-slate-900/95 text-white backdrop-blur-md border-t border-slate-700/80 shadow-2xl"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            {/* Phone & Info */}
            <div className="hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-emerald-400 block">Admissions Counseling</span>
                <span className="text-sm font-bold"><span className="phone-number">{phone}</span> • Pune Hub</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
              <a
                href={`tel:${phone.replace(/\s+/g, '')}`}
                className="sm:hidden px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs rounded-xl flex items-center gap-1.5 border border-slate-700"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call</span>
              </a>

              <button
                onClick={() =>
                  openLeadModal({
                    course: currentCourse,
                    ctaSource: 'sticky-bottom-cta',
                    title: 'Quick Program Enquiry',
                    subtitle: 'Get batch schedules & fee structures directly from admissions counselors.',
                  })
                }
                className="flex-1 sm:flex-initial px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enquire Now</span>
              </button>

              {/* Dismiss Button */}
              <button
                onClick={handleDismiss}
                className="p-2 text-slate-400 hover:text-white rounded-lg transition-colors ml-1 cursor-pointer"
                title="Dismiss banner"
                aria-label="Dismiss banner"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
