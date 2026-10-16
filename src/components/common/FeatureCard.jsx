import React from 'react';
import { motion } from 'framer-motion';
import SpotlightCard from './animations/SpotlightCard';

const FeatureCard = ({ icon: directIcon, title: directTitle, description: directDescription, feature, index = 0 }) => {
  const Icon = directIcon || feature?.icon;
  const title = directTitle || feature?.title;
  const description = directDescription || feature?.description;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      className="h-full"
    >
      <SpotlightCard
        className="h-full group backdrop-blur-xl glass-fx bg-white/85 dark:bg-slate-900/85 rounded-2xl p-7 border border-slate-300 dark:border-slate-800 transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-950/20 hover:border-emerald-500/60 flex flex-col justify-between"
      >
        <div>
          <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition duration-300 shadow-sm">
            {Icon && <Icon className="w-7 h-7 transition-transform duration-300 group-hover:rotate-6" />}
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-heading group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            {description}
          </p>
        </div>
      </SpotlightCard>
    </motion.div>
  );
};

export default FeatureCard;

