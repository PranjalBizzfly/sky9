import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, QrCode, CheckCircle } from 'lucide-react';
import Picture from '../common/Picture';
import certHolderImg from '../../assets/visuals/cert-holder.webp';

export default function CertificationVisual() {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="rounded-2xl bg-white/80 dark:bg-slate-900/75 backdrop-blur-xl text-slate-900 dark:text-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.35)] border border-white/80 dark:border-slate-700/60 relative overflow-hidden transition glass-panel">
        
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />

        {/* Real-Human Certification Achievement Photography */}
        <div className="relative mb-4 rounded-xl overflow-hidden border border-slate-200/90 dark:border-slate-700/80 bg-slate-100 dark:bg-slate-800/80 p-1.5 shadow-sm group">
          <div className="relative rounded-lg overflow-hidden">
            <Picture
              src={certHolderImg}
              webp={certHolderImg}
              alt="Young Indian graduate proudly holding verifiable Sky9 course completion certificate"
              className="w-full h-48 sm:h-54 object-cover object-[center_20%] transform group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent flex items-end p-3 pt-6 transition-colors">
              <span className="text-[11px] font-semibold text-white flex items-center gap-1.5 drop-shadow">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> Verified Industry-Recognized Credentials
              </span>
            </div>
          </div>
        </div>

        {/* Certificate Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200/80 dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-emerald-500/15 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-mono tracking-widest text-emerald-600 dark:text-emerald-400 font-bold">Sky9 India Verification</div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white font-heading">Certificate of Excellence</h4>
            </div>
          </div>
          <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
        </div>

        {/* Certificate Body */}
        <div className="space-y-3 my-4">
          <div className="p-3.5 rounded-xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/60 shadow-sm">
            <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Awarded For</div>
            <div className="text-sm font-bold text-emerald-700 dark:text-emerald-300 font-heading">Practical Professional Program</div>
            <div className="text-[10px] text-slate-600 dark:text-slate-300">Digital Marketing / AI & Automation / QA / ERP</div>
          </div>

          <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/60 text-xs shadow-sm">
            <div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Credential ID</div>
              <div className="font-mono font-bold text-slate-900 dark:text-slate-100">SKY9-2026-CERT-8842</div>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold text-[11px]">
              <CheckCircle className="w-4 h-4" /> Verified
            </div>
          </div>
        </div>

        {/* Footer Badges */}
        <div className="pt-3 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400 font-medium">
          <span className="flex items-center gap-1.5">
            <QrCode className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> Instant QR Scan Validation
          </span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold">LinkedIn Verified</span>
        </div>

      </div>
    </div>
  );
}
