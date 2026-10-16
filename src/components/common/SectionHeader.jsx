import React from 'react';
import { motion } from 'framer-motion';
import TypewriterHeading from './animations/TypewriterHeading';
import SectionLabel from './SectionLabel';

const SectionHeader = ({ badge, title, subtitle, centered = true, light = false, animateTypewriter = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-5 sm:mb-8 md:mb-10 ${centered ? 'text-center' : 'text-left'}`}
    >
      {badge && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-2.5 sm:mb-4"
        >
          <SectionLabel>{badge}</SectionLabel>
        </motion.div>
      )}

      <h2 className={`text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-2.5 sm:mb-4 font-heading leading-tight ${
        light ? 'text-white' : 'text-slate-900 dark:text-white'
      }`}>
        {animateTypewriter && typeof title === 'string' ? (
          <TypewriterHeading text={title} light={light} />
        ) : (
          title
        )}
      </h2>

      {subtitle && (
        <p className={`text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed font-normal ${
          centered ? 'mx-auto' : ''
        } ${light ? 'text-slate-200' : 'text-slate-700 dark:text-slate-300'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
