import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Wrench, Briefcase, Rocket } from 'lucide-react';

export default function LearningFrameworkVisual() {
  const pillars = [
    {
      num: '01',
      title: 'Foundational Mastery',
      subtitle: 'Core principles & strategy',
      icon: BookOpen
    },
    {
      num: '02',
      title: 'Practical Tool Lab',
      subtitle: 'Live software execution',
      icon: Wrench
    },
    {
      num: '03',
      title: 'Client Project Work',
      subtitle: '1-month real internship',
      icon: Briefcase
    },
    {
      num: '04',
      title: 'Career Launch',
      subtitle: 'Resumes, interviews & jobs',
      icon: Rocket
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto my-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {pillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-white/80 dark:bg-slate-900/75 backdrop-blur-xl border border-white/80 dark:border-slate-700/60 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.35)] text-center flex flex-col items-center relative overflow-hidden group hover:-translate-y-1.5 hover:border-emerald-500/60 transition duration-300 glass-panel"
            >
              <div className="absolute top-2.5 right-3 text-2xl sm:text-3xl font-extrabold font-mono text-slate-400 dark:text-slate-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors select-none">
                {pillar.num}
              </div>
              <div className="w-13 h-13 rounded-2xl bg-emerald-100 dark:bg-emerald-500/15 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3 relative z-10 group-hover:scale-110 transition-transform shadow-sm">
                <Icon className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1 relative z-10 font-heading group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {pillar.title}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 relative z-10 font-normal leading-relaxed">
                {pillar.subtitle}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
