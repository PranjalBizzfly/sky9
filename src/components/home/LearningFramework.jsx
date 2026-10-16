import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import SectionLabel from '../common/SectionLabel';
import { learningPillars } from '../../data/siteData';
import LearningFrameworkVisual from '../visuals/LearningFrameworkVisual';
import Picture from '../common/Picture';
import frameworkLabImg from '../../assets/visuals/framework-lab.webp';

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const LearningFramework = () => {
  return (
    <section className="py-6 sm:py-10 md:py-14 bg-slate-50 dark:bg-slate-800/30 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeader 
          badge="Learning Methodology"
          title="Learn, Practice, Apply, Grow"
          subtitle="A structured 4-stage practical framework taking you from core concepts to real-world workplace execution."
        />

        <div className="relative mt-4 sm:mt-8 max-w-5xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-200 dark:bg-slate-700 -translate-y-1/2 z-0"></div>
          
          {/* Connecting Line (Mobile) */}
          <div className="block md:hidden absolute left-8 top-0 w-1 h-full bg-slate-200 dark:bg-slate-700 z-0"></div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            transition={{ staggerChildren: 0.2 }}
            className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 mb-6 sm:mb-12"
          >
            {learningPillars.map((pillar, index) => (
              <motion.div key={index} variants={fadeInUp} className="relative flex md:flex-col items-start md:items-center group">
                
                {/* Mobile line connector dot */}
                <div className="md:hidden absolute left-8 top-8 w-4 h-4 rounded-full bg-emerald-500 -translate-x-1/2 z-10 border-4 border-slate-50 dark:border-slate-900"></div>

                <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white dark:bg-slate-800 shadow-xl flex items-center justify-center border-2 border-emerald-500/20 group-hover:border-emerald-500 transition-colors duration-300 z-10 relative md:mb-6 ml-0 md:ml-auto md:mr-auto">
                  <span className="text-2xl md:text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                    0{index + 1}
                  </span>
                </div>
                
                <div className="ml-6 md:ml-0 flex-1 md:text-center mt-2 md:mt-0">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{pillar.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base">{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <LearningFrameworkVisual />

          {/* Real-Human Practical Workshop & Mentorship Photography Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-10 rounded-2xl overflow-hidden border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-2 shadow-xl relative group"
          >
            <div className="relative w-full overflow-hidden rounded-xl">
              <div className="relative h-56 sm:h-72 md:h-80 w-full overflow-hidden">
                <Picture
                  src={frameworkLabImg}
                  webp={frameworkLabImg}
                  alt="Indian instructor conducting live hands-on workshop with students in modern Pune IT classroom"
                  className="w-full h-full object-cover object-[center_25%] transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                {/* Caption overlay: tablet/desktop only, where there's room over the photo */}
                <div className="hidden md:flex absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent dark:from-slate-950/90 dark:via-slate-950/50 dark:to-transparent items-center p-6 sm:p-10 transition-colors">
                  <div className="max-w-md space-y-3 bg-white/70 dark:bg-slate-900/70 p-4 sm:p-6 rounded-2xl backdrop-blur-md border border-white/60 dark:border-slate-800/60 shadow-lg">
                    <SectionLabel>Learning By Doing In Action</SectionLabel>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-snug">
                      Real Industry Mentorship & Live Laboratory Sessions
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Students work directly with practicing technology professionals on live projects, debugging, and marketing funnels in real time.
                    </p>
                  </div>
                </div>
              </div>

              {/* Caption below image: mobile only, avoids overlapping the photo */}
              <div className="md:hidden bg-white dark:bg-slate-900 p-4 space-y-2.5">
                <SectionLabel>Learning By Doing In Action</SectionLabel>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                  Real Industry Mentorship & Live Laboratory Sessions
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Students work directly with practicing technology professionals on live projects, debugging, and marketing funnels in real time.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LearningFramework;
