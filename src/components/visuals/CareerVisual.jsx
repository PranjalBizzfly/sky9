import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, FileText, Briefcase, CheckCircle2, TrendingUp } from 'lucide-react';
import TiltCard from '../common/animations/TiltCard';
import SpotlightCard from '../common/animations/SpotlightCard';
import Picture from '../common/Picture';
import careerPrepImg from '../../assets/visuals/career-placement-suite.webp';

export default function CareerVisual() {
  const steps = [
    { icon: FileText, title: 'ATS Resume Optimization', score: 'Score 98/100', color: 'text-emerald-600 dark:text-emerald-400' },
    { icon: Target, title: '1-on-1 Mock Interview Drills', score: 'Passed 3/3', color: 'text-teal-600 dark:text-teal-400' },
    { icon: Users, title: 'LinkedIn & Portfolio Branding', score: 'Optimized', color: 'text-cyan-600 dark:text-cyan-400' },
    { icon: Briefcase, title: 'Direct Hiring Referral Network', score: '100% Support', color: 'text-emerald-600 dark:text-emerald-400' }
  ];

  return (
    <TiltCard maxTilt={5} className="w-full max-w-lg mx-auto">
      <SpotlightCard className="rounded-2xl bg-white/85 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-300 dark:border-slate-700/80 p-6 shadow-xl relative overflow-hidden transition">
        
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200/80 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider font-heading">Placement Support Suite</h4>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Day-One Career Readiness</p>
            </div>
          </div>
          <span className="px-3 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100/90 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 backdrop-blur-md shadow-sm">
            100% Placement
          </span>
        </div>

        {/* Real-Human Career Growth Photography */}
        <div className="relative mb-4 rounded-xl overflow-hidden border border-slate-200/90 dark:border-slate-700/80 bg-slate-100 dark:bg-slate-800/80 p-1.5 shadow-sm group">
          <div className="relative rounded-lg overflow-hidden">
            <Picture
              src={careerPrepImg}
              webp={careerPrepImg}
              alt="Sky9 India career placement counselor holding a career notebook in a modern office"
              className="w-full h-48 sm:h-54 object-cover object-[center_20%] transform group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent flex items-end p-3 pt-6 transition-colors">
              <span className="text-[11px] font-semibold text-white flex items-center gap-1.5 drop-shadow">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> 1-on-1 Mock Interviews & Placement Referrals
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className="p-3.5 rounded-xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/60 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-emerald-500/50 transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <Icon className={`w-5 h-5 ${s.color}`} />
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-slate-900 dark:text-white leading-tight mb-1 font-heading">{s.title}</h5>
                  <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">{s.score}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </SpotlightCard>
    </TiltCard>
  );
}
