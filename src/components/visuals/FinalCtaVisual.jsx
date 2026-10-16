import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ShieldCheck, PhoneCall, Award } from 'lucide-react';

export default function FinalCtaVisual() {
  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="rounded-3xl bg-emerald-950/40 dark:bg-slate-950/60 backdrop-blur-xl border border-white/20 dark:border-white/10 text-white p-7 shadow-2xl relative overflow-hidden">
        
        <div className="flex items-center gap-3.5 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-white/15 dark:bg-emerald-500/20 border border-white/25 flex items-center justify-center text-emerald-300 shadow-md shrink-0">
            <Rocket className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h4 className="text-base font-bold text-white font-heading">Launch Your Tech Career</h4>
            <p className="text-xs text-emerald-200 dark:text-emerald-300 font-medium">Next batch starting this week</p>
          </div>
        </div>

        <div className="space-y-2.5 text-xs text-white mb-5">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-300 shrink-0" />
            <span className="font-medium text-emerald-50">Guaranteed 1-Month Practical Internship</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Award className="w-4 h-4 text-emerald-300 shrink-0" />
            <span className="font-medium text-emerald-50">Industry-Recognized Certification</span>
          </div>
          <div className="flex items-center gap-2.5">
            <PhoneCall className="w-4 h-4 text-emerald-300 shrink-0" />
            <span className="font-medium text-emerald-50">Free 1-on-1 Career Counseling Session</span>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-emerald-950/70 border border-emerald-400/40 text-center text-xs font-bold text-emerald-300 shadow-inner">
          ⚡ Limited Seats Available Per Batch
        </div>

      </div>
    </div>
  );
}
