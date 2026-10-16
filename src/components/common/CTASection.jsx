import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLead } from '../../context/LeadContext';
import SectionLabel from './SectionLabel';

const CTASection = ({ 
  title, 
  subtitle, 
  primaryText = 'Enquire Now', 
  primaryLink = '/contact-us',
  secondaryText, 
  secondaryLink, 
  courseName = '',
  ctaSource = 'cta-section',
  variant = 'green' 
}) => {
  const isGreen = variant === 'green';
  const { openLeadModal } = useLead();

  const handlePrimaryClick = (e) => {
    if (primaryLink === '/contact-us' || primaryLink === '#enquire' || !primaryLink) {
      e.preventDefault();
      openLeadModal({
        course: courseName,
        ctaSource,
        title: title || 'Request Program Information',
        subtitle: subtitle || 'Speak with our Pune admissions team for batch schedules and fee details.',
      });
    }
  };

  return (
    <section className="py-8 sm:py-10 md:py-14 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className={`max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl relative ${
          isGreen 
            ? 'bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 text-white shadow-emerald-500/20' 
            : 'bg-slate-900 dark:bg-slate-900/90 border border-emerald-500/30 backdrop-blur-xl'
        }`}
      >
        {/* Subtle Decorative Floating Ambient Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-emerald-400/20 rounded-full blur-2xl" />
        </div>

        <div className="relative z-10 px-5 py-8 sm:py-10 md:px-12 md:py-14 text-center">
          <div className="mb-3 sm:mb-4">
            <SectionLabel tone="onBrand">Admissions & Counseling</SectionLabel>
          </div>

          <h2 className={`text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-3 sm:mb-6 font-heading leading-tight ${!isGreen ? 'text-white' : ''}`}>
            {title}
          </h2>
          <p className={`text-sm sm:text-base md:text-xl max-w-2xl mx-auto mb-6 sm:mb-10 leading-relaxed ${
            isGreen ? 'text-emerald-50' : 'text-slate-300'
          }`}>
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to={primaryLink}
              onClick={handlePrimaryClick}
              className={`btn-shimmer group px-8 py-4 rounded-full font-bold text-base transition duration-300 flex items-center justify-center gap-2 shadow-lg hover:scale-105 active:scale-95 ${
                isGreen
                  ? 'bg-white text-emerald-700 hover:bg-emerald-50 shadow-emerald-900/20'
                  : 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-emerald-500/30'
              }`}
            >
              <span>{primaryText}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            {secondaryText && secondaryLink && (
              <Link
                to={secondaryLink}
                className={`px-8 py-4 rounded-full font-semibold text-base transition duration-300 hover:scale-105 active:scale-95 backdrop-blur-sm ${
                  isGreen
                    ? 'bg-emerald-700/50 text-white border border-white/30 hover:bg-emerald-700/80'
                    : 'bg-transparent text-white border border-slate-600 hover:bg-slate-800'
                }`}
              >
                {secondaryText}
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
