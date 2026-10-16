import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useLead } from '../../context/LeadContext';
import LeadForm from './LeadForm';

export default function LeadModal() {
  const { isModalOpen, modalContext, closeLeadModal } = useLead();

  if (!isModalOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
        {/* Backdrop Click to Close */}
        <div className="absolute inset-0" onClick={closeLeadModal} />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative z-10 w-full max-w-xl max-h-[90vh] overflow-y-auto"
        >
          {/* Close X Button */}
          <button
            onClick={closeLeadModal}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <LeadForm
            defaultCourse={modalContext.course}
            ctaSource={modalContext.ctaSource || 'modal-cta'}
            title={modalContext.title || 'Request Program Information'}
            subtitle={modalContext.subtitle || 'Our Pune admissions team (+91 7 319 419 519) will contact you shortly.'}
            onSuccessCallback={() => {
              // Automatically close modal after submission if desired or keep success view
            }}
          />
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
