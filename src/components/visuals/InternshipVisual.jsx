import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2, UserCheck, Clock, FileCheck } from 'lucide-react';
import Picture from '../common/Picture';
import internTeamImg from '../../assets/visuals/intern-team.webp';

export default function InternshipVisual() {
  const tickets = [
    { title: 'Google Ads Search Campaign Setup', client: 'Retail Client', status: 'Completed', time: 'Day 5' },
    { title: 'SEO Audit & On-Page Meta Fixes', client: 'SaaS Client', status: 'Approved', time: 'Day 12' },
    { title: 'Automation Test Suite Regression', client: 'Fintech Client', status: 'Verified', time: 'Day 20' }
  ];

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="rounded-2xl bg-white/80 dark:bg-slate-900/75 backdrop-blur-xl border border-white/80 dark:border-slate-700/60 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.35)] relative overflow-hidden transition glass-panel">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200/80 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400">
              <Briefcase className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider font-heading">1-Month Internship Workspace</h4>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Live Client Deliverables Log</p>
            </div>
          </div>
          <span className="px-3 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100/90 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 backdrop-blur-md shadow-sm">
            Guaranteed
          </span>
        </div>

        {/* Real-Human Practical Internship Photography */}
        <div className="relative mb-4 rounded-xl overflow-hidden border border-slate-200/90 dark:border-slate-700/80 bg-slate-100 dark:bg-slate-800/80 p-1.5 shadow-sm group">
          <div className="relative rounded-lg overflow-hidden">
            <Picture
              src={internTeamImg}
              webp={internTeamImg}
              alt="Indian interns collaborating on live client marketing deliverables and tech sprints in modern Pune studio"
              className="w-full h-48 sm:h-54 object-cover object-[center_20%] transform group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent flex items-end p-3 pt-6 transition-colors">
              <span className="text-[11px] font-semibold text-white flex items-center gap-1.5 drop-shadow">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> Mentored Practical Project Teamwork
              </span>
            </div>
          </div>
        </div>

        {/* Deliverables Tickets */}
        <div className="space-y-3">
          {tickets.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="p-3.5 rounded-xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/60 flex items-center justify-between shadow-sm hover:shadow-md hover:border-emerald-500/50 transition"
            >
              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span className="text-xs font-bold text-slate-900 dark:text-white font-heading">{t.title}</span>
                </div>
                <div className="text-[10px] text-slate-600 dark:text-slate-400 pl-5 font-medium">Client: {t.client}</div>
              </div>
              <div className="text-right shrink-0">
                <span className="px-2.5 py-0.5 rounded text-[9px] font-bold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 block">
                  {t.status}
                </span>
                <span className="text-[9px] text-slate-400 block mt-0.5 font-medium">{t.time}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificate Preview Badge */}
        <div className="mt-4 pt-4 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 font-semibold">
            <FileCheck className="w-4 h-4 text-emerald-500" />
            <span>Verified Work Experience Certificate</span>
          </div>
          <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">Awarded</span>
        </div>

      </div>
    </div>
  );
}
