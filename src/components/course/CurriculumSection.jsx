import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ChevronRight } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

const fadeInUp = { hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0 } };

export default function CurriculumSection({ modules = [] }) {
  if (!modules || modules.length === 0) return null;

  return (
    <section id="curriculum" className="py-8 sm:py-10 md:py-14 dark:bg-dark-bg bg-light-bg">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          badge="Curriculum"
          title="What You'll Learn"
          subtitle="A comprehensive, hands-on curriculum designed to make you industry-ready"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ staggerChildren: 0.1 }}
          className="flex flex-wrap items-stretch justify-center gap-6 mt-6 sm:mt-10 md:mt-12"
        >
          {modules.map((module, idx) => {
            const ModIcon = module.icon || BookOpen;
            return (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="group w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] p-6 rounded-2xl dark:bg-slate-800/50 bg-white border dark:border-slate-700 border-slate-200 hover:border-emerald-500/50 transition duration-300 hover:-translate-y-1 shadow-sm glass-panel flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/15 flex items-center justify-center mb-4 group-hover:bg-emerald-500/25 transition-colors">
                  <ModIcon className="w-6 h-6 text-emerald-500" />
                </div>
                <h3 className="text-lg font-bold dark:text-white text-slate-900 mb-3 font-heading">
                  {module.title}
                </h3>
                {module.topics && module.topics.length > 0 && (
                  <ul className="space-y-2">
                    {module.topics.map((topic, tIdx) => (
                      <li key={tIdx} className="flex items-center gap-2 text-sm dark:text-slate-400 text-slate-600">
                        <ChevronRight className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
