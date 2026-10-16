import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeader from '../common/SectionHeader';
import { internshipData } from '../../data/siteData';
import { Briefcase, CheckCircle, ArrowRight } from 'lucide-react';
import InternshipVisual from '../visuals/InternshipVisual';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

const InternshipPreview = () => {
  return (
    <section className="py-6 sm:py-10 md:py-14 bg-slate-50/70 dark:bg-slate-900/60 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <SectionHeader 
          badge="Guaranteed Internship"
          title="Real Work Experience"
          subtitle={internshipData.description}
        />

        {/* 4 Activity Cards with Glassmorphism & Dark Borders */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4 sm:mt-8 md:mt-12"
        >
          {internshipData.activities?.map((activity, index, arr) => {
            const IconComponent = activity.icon || Briefcase;
            const isDanglingLast = index === arr.length - 1 && arr.length % 2 !== 0;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`bg-white/85 dark:bg-slate-900/85 backdrop-blur-xl rounded-2xl p-6 shadow-md border border-slate-300 dark:border-slate-800 hover:border-emerald-500/60 hover:-translate-y-1.5 transition duration-300 group glass-panel flex flex-col justify-between ${isDanglingLast ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-emerald-600 dark:text-emerald-400">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 font-heading group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {activity.course || activity.title}
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                    {activity.task || activity.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Deliverables Section Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInUp}
          className="mt-6 sm:mt-10 md:mt-16 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 shadow-xl border border-slate-300 dark:border-slate-800 max-w-5xl mx-auto glass-panel"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-heading tracking-tight">
                What You Deliver During Internship
              </h3>
              <ul className="space-y-4">
                {internshipData.deliverables?.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-800 dark:text-slate-200 text-sm sm:text-base font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <Link
                  to="/internship/internship-overview"
                  className="btn-shimmer group inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition duration-200 shadow-md shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105 active:scale-95 text-sm sm:text-base"
                >
                  <span>Learn More About Internships</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <InternshipVisual />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InternshipPreview;
