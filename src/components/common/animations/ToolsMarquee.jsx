import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const coreCourses = [
  { 
    name: 'Digital Marketing Training', 
    duration: '2 Months Practical', 
    mode: 'Pune & Online',
    icon: '🎓',
    link: '/courses/digital-marketing-training'
  },
  {
    name: 'Digital Marketing for Business Owners',
    duration: '7 Days Fast-Track',
    mode: 'Pune & Online',
    icon: '🚀',
    link: '/business-owners/digital-marketing-for-business-owners'
  },
  {
    name: 'AI & Automation Training',
    duration: '1 Month Hands-On',
    mode: 'Pune & Online',
    icon: '⚡',
    link: '/courses/ai-automation-training'
  },
  {
    name: 'Software Testing Training',
    duration: '2 Months + Internship',
    mode: 'Pune & Online',
    icon: '🧪',
    link: '/courses/software-testing-training'
  },
  {
    name: 'ERP Training',
    duration: 'Comprehensive ERP',
    mode: 'Pune & Online',
    icon: '🏢',
    link: '/courses/erp-training'
  },
];

export default function ToolsMarquee() {
  // Multiply array to create an unbroken seamless infinite loop
  const seamlessList = [...coreCourses, ...coreCourses, ...coreCourses, ...coreCourses];

  return (
    <div className="relative w-full overflow-hidden py-3 sm:py-3.5 bg-slate-50 dark:bg-slate-900 border-y border-slate-200/60 dark:border-slate-800/60 backdrop-blur-md transition-colors duration-300">
      {/* Soft gradient edge fade matching container */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-slate-50 dark:from-slate-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-slate-50 dark:from-slate-900 to-transparent z-10 pointer-events-none" />

      {/* Ticker Track with Smooth Infinite Motion */}
      <div className="flex w-max">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 25,
          }}
          className="flex items-center gap-3 sm:gap-4 shrink-0"
        >
          {seamlessList.map((course, idx) => (
            <Link
              key={idx}
              to={course.link}
              className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/90 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700/70 hover:border-emerald-500 dark:hover:border-emerald-400 shadow-sm hover:shadow-md hover:shadow-emerald-500/10 dark:hover:shadow-emerald-950/40 transition duration-300 whitespace-nowrap shrink-0 group hover:scale-[1.02] backdrop-blur-sm"
            >
              <span className="text-lg sm:text-xl group-hover:scale-110 transition-transform">
                {course.icon}
              </span>
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs sm:text-sm font-bold font-heading text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {course.name}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition duration-200" />
                </div>
                <div className="flex items-center gap-2 text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">
                  <span>{course.duration}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                  <span className="text-slate-500 dark:text-slate-400 font-medium">{course.mode}</span>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
}


