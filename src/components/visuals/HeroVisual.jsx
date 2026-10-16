import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Cpu, ShieldCheck, CheckCircle2, Award, Users } from 'lucide-react';
import Picture from '../common/Picture';
import heroLabImage from '../../assets/hero-lab.webp';

export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-xl mx-auto py-3 px-2 sm:px-0">
      {/* Decorative Outer Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-3xl blur-xl opacity-70 dark:opacity-40 animate-pulse pointer-events-none"></div>

      {/* Floating Top Badge (Positioned outside overflow container) */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-2 right-4 sm:-right-2 z-20 px-3.5 py-1.5 bg-emerald-600 text-white rounded-xl shadow-xl text-xs font-bold flex items-center gap-1.5 border border-emerald-400 backdrop-blur-md"
      >
        <Award className="w-4 h-4 text-emerald-100" />
        <span>Integrated Internship</span>
      </motion.div>

      {/* Floating Bottom Badge (Positioned outside overflow container) */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-2 left-4 sm:-left-2 z-20 px-3.5 py-1.5 bg-slate-900 text-white rounded-xl shadow-xl text-xs font-bold flex items-center gap-1.5 border border-slate-700 backdrop-blur-md"
      >
        <Users className="w-4 h-4 text-emerald-400" />
        <span>100% Practical Mentorship</span>
      </motion.div>

      {/* Main Container Card */}
      <div className="relative rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-300 dark:border-slate-700/80 p-5 sm:p-6 shadow-2xl overflow-hidden glass-panel">
        
        {/* Top Header Mockup Bar */}
        <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
            <span className="ml-2 text-xs font-mono font-medium text-slate-600 dark:text-slate-400">sky9-hub.app/analytics</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 flex items-center gap-1.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span> Live Training Labs
            </span>
          </div>
        </div>

        {/* Real-Human Modern Learning Environment Photography */}
        <div className="relative mb-4 rounded-xl overflow-hidden border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 p-1 shadow-sm group">
          <div className="relative rounded-lg overflow-hidden">
            <Picture
              src={heroLabImage}
              webp={heroLabImage}
              alt="Indian professional mentor providing hands-on practical lab guidance to a student at a computer workstation in Sky9 Pune training center"
              className="w-full h-48 sm:h-56 object-cover object-[center_30%] transform group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="eager"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent flex flex-col justify-end p-3 pt-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="text-xs sm:text-sm font-extrabold text-white tracking-wide uppercase drop-shadow">
                  Interactive Practical Lab & Mentorship
                </span>
              </div>
              <p className="text-[11px] text-slate-200 font-medium mt-0.5 drop-shadow">
                Pune Classroom & Live Online Hands-On Cohorts
              </p>
            </div>
          </div>
        </div>

        {/* Multi-Track Live Dashboard Mockup */}
        <div className="space-y-3.5">
          
          {/* Card 1: Digital Marketing Track Analytics */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50/90 dark:bg-slate-800/90 backdrop-blur-md border border-slate-300 dark:border-slate-700 shadow-sm glass-panel">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">Digital Marketing Campaign</span>
              </div>
              <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/80 px-2 py-0.5 rounded-md border border-emerald-300 dark:border-emerald-700">
                +342% ROI
              </span>
            </div>
            
            {/* Sparkline & Metrics */}
            <div className="flex items-end justify-between pt-1">
              <div>
                <div className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">Rank #1 Google</div>
                <div className="text-xs font-medium text-slate-600 dark:text-slate-300 mt-0.5">SEO & Meta Ads Automated Funnel</div>
              </div>
              <div className="flex items-end gap-1 h-8">
                <motion.div animate={{ height: ['40%', '75%', '60%', '90%'] }} transition={{ duration: 3, repeat: Infinity }} className="w-2.5 bg-emerald-400 dark:bg-emerald-600 rounded-t" />
                <motion.div animate={{ height: ['50%', '85%', '70%', '100%'] }} transition={{ duration: 2.5, repeat: Infinity }} className="w-2.5 bg-emerald-500 rounded-t" />
                <motion.div animate={{ height: ['60%', '95%', '80%', '100%'] }} transition={{ duration: 2.8, repeat: Infinity }} className="w-2.5 bg-emerald-600 rounded-t" />
                <motion.div animate={{ height: ['70%', '100%', '85%', '100%'] }} transition={{ duration: 2.2, repeat: Infinity }} className="w-2.5 bg-emerald-700 dark:bg-emerald-400 rounded-t" />
              </div>
            </div>
          </div>

          {/* Card 2: AI & Automation Nodes */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50/90 dark:bg-slate-800/90 backdrop-blur-md border border-slate-300 dark:border-slate-700 shadow-sm glass-panel">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-teal-500/15 text-teal-600 dark:text-teal-400">
                  <Cpu className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">AI Agents & Workflow Automation</span>
              </div>
              <span className="text-xs font-bold text-teal-700 dark:text-teal-300 bg-teal-100 dark:bg-teal-950/80 px-2 py-0.5 rounded-md border border-teal-300 dark:border-teal-700">
                10x Speedup
              </span>
            </div>

            {/* Workflow Pipeline Chips */}
            <div className="flex items-center gap-1.5 flex-wrap pt-1 text-xs">
              <span className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 border border-slate-300 dark:border-slate-600 font-mono font-semibold shadow-xs">Prompt Engineering</span>
              <span className="text-slate-500 dark:text-slate-400 font-bold">→</span>
              <span className="px-2.5 py-1 rounded-md bg-teal-100 dark:bg-teal-900/80 text-teal-900 dark:text-teal-100 border border-teal-400 dark:border-teal-600 font-mono font-bold shadow-xs">LLM Agent Node</span>
              <span className="text-slate-500 dark:text-slate-400 font-bold">→</span>
              <span className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 border border-slate-300 dark:border-slate-600 font-mono font-semibold shadow-xs">ERP CRM Sync</span>
            </div>
          </div>

          {/* Card 3: Software QA & Testing Log */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50/90 dark:bg-slate-800/90 backdrop-blur-md border border-slate-300 dark:border-slate-700 shadow-sm glass-panel">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-cyan-500/15 text-cyan-600 dark:text-cyan-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">Software QA Test Automation</span>
              </div>
              <span className="text-xs font-bold text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-950/80 px-2 py-0.5 rounded-md border border-cyan-300 dark:border-cyan-700">
                100% Passed
              </span>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-800 dark:text-slate-200 font-medium">
              <span className="flex items-center gap-1.5 font-semibold text-slate-900 dark:text-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> 2,340 Automated Tests Passed
              </span>
              <span className="font-mono font-bold text-slate-700 dark:text-slate-300 bg-slate-200/80 dark:bg-slate-700/80 px-2 py-0.5 rounded border border-slate-300 dark:border-slate-600 text-[11px]">
                Selenium / Cypress
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
