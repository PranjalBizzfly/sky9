import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Laptop, Briefcase, Award } from 'lucide-react';
import TiltCard from '../common/animations/TiltCard';
import SpotlightCard from '../common/animations/SpotlightCard';
import Picture from '../common/Picture';
import aboutCohortImg from '../../assets/visuals/about-cohort.webp';

export default function AboutVisual() {
  const steps = [
    {
      icon: BookOpen,
      title: '1. Practical Foundations',
      desc: 'Industry-curated curriculum with zero fluff',
      color: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30'
    },
    {
      icon: Laptop,
      title: '2. Hands-on Live Labs',
      desc: 'Real tools: SEO, Google Ads, Cypress, AI Agents',
      color: 'bg-teal-500/15 text-teal-600 dark:text-teal-400 border-teal-500/30'
    },
    {
      icon: Briefcase,
      title: '3. 1-Month Internship',
      desc: 'Guaranteed execution on real business client tasks',
      color: 'bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border-cyan-500/30'
    },
    {
      icon: Award,
      title: '4. Placement & Credentials',
      desc: 'Industry certificate & 100% placement support',
      color: 'bg-emerald-600/15 text-emerald-600 dark:text-emerald-400 border-emerald-600/30'
    }
  ];

  return (
    <TiltCard maxTilt={5} className="relative w-full max-w-lg mx-auto">
      {/* Decorative Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-xl opacity-60 dark:opacity-30 pointer-events-none" />

      <SpotlightCard className="relative rounded-2xl bg-white/85 dark:bg-slate-900/85 backdrop-blur-xl border border-slate-200/90 dark:border-slate-700/70 p-5 sm:p-7 shadow-xl">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between mb-4 pb-3.5 border-b border-slate-200/80 dark:border-slate-800">
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider font-heading">The Sky9 Ecosystem</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-normal">Bridging academic knowledge with industry demands</p>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100/90 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 shadow-sm backdrop-blur-md">
            Pune's #1 Institute
          </span>
        </div>

        {/* Real-Human Practical Mentorship & Classroom Photography */}
        <div className="relative mb-4 rounded-xl overflow-hidden border border-slate-200/90 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 p-1 shadow-sm group">
          <div className="relative rounded-lg overflow-hidden">
            <Picture
              src={aboutCohortImg}
              webp={aboutCohortImg}
              alt="Experienced Indian industry mentor guiding student team on laptop workflow in Pune Sky9 classroom"
              className="w-full h-44 sm:h-52 object-cover object-[center_20%] transform group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-transparent flex flex-col justify-end p-3 pt-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="text-xs font-extrabold text-white tracking-wide uppercase drop-shadow">
                  Practical Mentorship & Live Cohorts
                </span>
              </div>
              <p className="text-[11px] text-slate-200 font-medium mt-0.5 drop-shadow">
                Real students collaborating with experienced industry instructors
              </p>
            </div>
          </div>
        </div>

        {/* 4 Ecosystem Step Cards */}
        <div className="space-y-2.5">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className="flex items-start gap-3.5 p-3 sm:p-3.5 rounded-xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/60 shadow-xs hover:shadow-md hover:border-emerald-500/50 transition duration-200"
              >
                <div className={`p-2 rounded-lg border ${step.color} shrink-0 mt-0.5`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <h5 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate font-heading">{step.title}</h5>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 font-normal leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </SpotlightCard>
    </TiltCard>
  );
}
