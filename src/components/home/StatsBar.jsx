import React from 'react';
import { motion } from 'framer-motion';
import { stats } from '../../data/siteData';
import SpotlightCard from '../common/animations/SpotlightCard';
import AnimatedCounter from '../common/animations/AnimatedCounter';

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const StatCounter = ({ value, label, icon: Icon }) => {
  return (
    <div className="flex flex-col items-center p-3 sm:p-4 text-center group">
      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-500/20 flex items-center justify-center mb-3.5 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition duration-300 shadow-sm">
        {Icon ? (
          <Icon className="w-7 h-7 text-emerald-600 dark:text-emerald-400 group-hover:text-white transition-colors" />
        ) : (
          <svg className="w-7 h-7 text-emerald-600 dark:text-emerald-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        )}
      </div>
      <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-1.5 font-heading tracking-tight group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
        <AnimatedCounter value={value} duration={2000} />
      </h3>
      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium max-w-[130px] leading-snug">
        {label}
      </p>
    </div>
  );
};

const StatsBar = () => {
  return (
    <section className="py-3 sm:py-6 md:py-8 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 relative z-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
        >
          <SpotlightCard className="bg-white/90 dark:bg-slate-800/80 backdrop-blur-xl shadow-xl dark:shadow-2xl rounded-2xl sm:rounded-3xl py-4 sm:py-6 px-3 sm:px-4 md:px-8 border border-slate-200/90 dark:border-slate-700/80">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 divide-x-0 md:divide-x divide-slate-100 dark:divide-slate-700/60">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={index === stats.length - 1 && stats.length % 2 !== 0 ? 'col-span-2 md:col-span-1' : ''}
                >
                  <StatCounter
                    value={stat.value}
                    label={stat.label}
                    icon={stat.icon}
                  />
                </div>
              ))}
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsBar;
