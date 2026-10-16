import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCounter from './animations/AnimatedCounter';

const StatCounter = ({ stats = [] }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        const isDanglingLast = index === stats.length - 1 && stats.length % 2 !== 0;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
            className={`backdrop-blur-xl bg-white/85 dark:bg-slate-900/85 p-6 rounded-2xl border border-slate-300 dark:border-slate-800 shadow-lg shadow-slate-200/20 dark:shadow-none text-center group hover:-translate-y-1.5 hover:border-emerald-500/60 hover:shadow-emerald-950/20 transition duration-300 glass-panel ${isDanglingLast ? 'col-span-2 md:col-span-1' : ''}`}
          >
            <div className="w-13 h-13 mx-auto rounded-xl bg-emerald-100 dark:bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition duration-300 shadow-sm">
              {Icon && <Icon className="w-6 h-6" />}
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-emerald-600 dark:text-emerald-400 mb-1.5 tracking-tight font-heading">
              <AnimatedCounter value={stat.value} duration={1800} />
            </h3>
            <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
              {stat.label}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default StatCounter;
