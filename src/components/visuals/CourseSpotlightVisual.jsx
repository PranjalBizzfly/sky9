import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, BarChart2, Search, Target, Cpu, Zap, GitBranch, 
  ShieldCheck, Bug, CheckCircle2, Building2, Layers, DollarSign, Users, Award
} from 'lucide-react';

import Picture from '../common/Picture';
import dmSpotlightImg from '../../assets/spotlight/dm-spotlight.webp';
import aiSpotlightImg from '../../assets/spotlight/ai-spotlight.webp';
import qaSpotlightImg from '../../assets/spotlight/qa-spotlight.webp';
import bizSpotlightImg from '../../assets/spotlight/biz-spotlight.webp';
import erpSpotlightImg from '../../assets/spotlight/erp-spotlight.webp';

export default function CourseSpotlightVisual({ courseSlug }) {
  if (courseSlug === 'digital-marketing') {
    return (
      <div className="w-full rounded-2xl bg-white/80 dark:bg-slate-900/75 backdrop-blur-xl text-slate-900 dark:text-white p-5 sm:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.35)] border border-white/80 dark:border-slate-700/60 relative overflow-hidden transition glass-panel">
        {/* Topic-Specific Digital Marketing & Analytics Visual */}
        <div className="relative mb-4 rounded-xl overflow-hidden border border-slate-200/90 dark:border-slate-700/80 bg-slate-100 dark:bg-slate-800/80 p-1.5 shadow-sm group">
          <div className="relative rounded-lg overflow-hidden aspect-[16/9] w-full">
            <Picture
              src={dmSpotlightImg}
              webp={dmSpotlightImg}
              alt="Digital marketing analytics dashboard displaying multi-channel ROI, Google Ads performance and SEO rankings in Pune tech office"
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent flex items-end p-3 pt-6 transition-colors">
              <span className="text-[11px] font-semibold text-white flex items-center gap-1.5 drop-shadow">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> Live Campaign Execution & Analytics
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200/80 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <span className="text-xs font-bold font-mono tracking-wide uppercase text-emerald-600 dark:text-emerald-400">Digital Marketing Hub</span>
          </div>
          <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 font-mono">Live Campaign</span>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="p-3.5 rounded-xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/60 shadow-sm">
            <div className="text-[10px] font-medium text-slate-500 dark:text-slate-400">SEO Keywords</div>
            <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">Rank #1 Google</div>
            <div className="text-[9px] text-emerald-600 dark:text-emerald-500 font-bold">+14 Keywords in Top 3</div>
          </div>
          <div className="p-3.5 rounded-xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/60 shadow-sm">
            <div className="text-[10px] font-medium text-slate-500 dark:text-slate-400">Google Ads CTR</div>
            <div className="text-lg font-bold text-slate-900 dark:text-white">4.85% (High)</div>
            <div className="text-[9px] text-emerald-600 dark:text-emerald-500 font-bold">Quality Score 9/10</div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white/70 dark:bg-slate-800/60 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/60 space-y-2 glass-panel">
          <div className="flex justify-between text-xs">
            <span className="text-slate-800 dark:text-slate-200 font-semibold">Meta Ads Lead Generation</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">142 Leads / Week</span>
          </div>
          <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
            <motion.div animate={{ width: ['20%', '85%'] }} transition={{ duration: 2 }} className="h-full bg-emerald-500" />
          </div>
        </div>
      </div>
    );
  }

  if (courseSlug === 'ai-automation') {
    return (
      <div className="w-full rounded-2xl bg-white/80 dark:bg-slate-900/75 backdrop-blur-xl text-slate-900 dark:text-white p-5 sm:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.35)] border border-white/80 dark:border-slate-700/60 relative overflow-hidden transition glass-panel">
        {/* Topic-Specific AI & Neural Automation Engineering Visual */}
        <div className="relative mb-4 rounded-xl overflow-hidden border border-slate-200/90 dark:border-slate-700/80 bg-slate-100 dark:bg-slate-800/80 p-1.5 shadow-sm group">
          <div className="relative rounded-lg overflow-hidden aspect-[16/9] w-full">
            <Picture
              src={aiSpotlightImg}
              webp={aiSpotlightImg}
              alt="Indian AI engineer designing autonomous AI agent workflows and prompt engineering pipelines on dual monitors"
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent flex items-end p-3 pt-6 transition-colors">
              <span className="text-[11px] font-semibold text-white flex items-center gap-1.5 drop-shadow">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" /> AI Agents & No-Code Automation
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200/80 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5 text-teal-600 dark:text-teal-400" />
            <span className="text-xs font-bold font-mono tracking-wide uppercase text-teal-600 dark:text-teal-400">AI Agent & Workflow System</span>
          </div>
          <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-teal-100 dark:bg-teal-500/20 text-teal-800 dark:text-teal-300 font-mono">10x Productivity</span>
        </div>

        <div className="space-y-3 font-mono text-xs">
          <div className="p-3.5 rounded-xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/60 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
              <Zap className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              <span>Prompt Engineering Engine</span>
            </div>
            <span className="text-[10px] text-teal-600 dark:text-teal-400 font-bold">Active</span>
          </div>

          <div className="p-3.5 rounded-xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/60 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
              <GitBranch className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Autonomous Workflow Bot</span>
            </div>
            <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">Executing</span>
          </div>

          <div className="p-3.5 rounded-xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/60 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
              <Cpu className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>Custom RAG / Business Model</span>
            </div>
            <span className="text-[10px] text-cyan-600 dark:text-cyan-400 font-bold">Synced</span>
          </div>
        </div>
      </div>
    );
  }

  if (courseSlug === 'software-testing') {
    return (
      <div className="w-full rounded-2xl bg-white/80 dark:bg-slate-900/75 backdrop-blur-xl text-slate-900 dark:text-white p-5 sm:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.35)] border border-white/80 dark:border-slate-700/60 relative overflow-hidden transition glass-panel">
        {/* Topic-Specific Software QA & Test Automation Visual */}
        <div className="relative mb-4 rounded-xl overflow-hidden border border-slate-200/90 dark:border-slate-700/80 bg-slate-100 dark:bg-slate-800/80 p-1.5 shadow-sm group">
          <div className="relative rounded-lg overflow-hidden aspect-[16/9] w-full">
            <Picture
              src={qaSpotlightImg}
              webp={qaSpotlightImg}
              alt="Indian QA engineer executing automated Selenium test suites and logging passed tests on modern workstation"
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent flex items-end p-3 pt-6 transition-colors">
              <span className="text-[11px] font-semibold text-white flex items-center gap-1.5 drop-shadow">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" /> STLC & Test Automation Verification
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200/80 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            <span className="text-xs font-bold font-mono tracking-wide uppercase text-cyan-600 dark:text-cyan-400">Software QA & Test Automation</span>
          </div>
          <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-cyan-100 dark:bg-cyan-500/20 text-cyan-800 dark:text-cyan-300 font-mono">0 Critical Bugs</span>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="p-3.5 rounded-xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/60 shadow-sm">
            <div className="text-[10px] font-medium text-slate-500 dark:text-slate-400">Test Cases Run</div>
            <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">2,340 Passed</div>
            <div className="text-[9px] text-emerald-600 dark:text-emerald-500 font-bold">100% Execution Success</div>
          </div>
          <div className="p-3.5 rounded-xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/60 shadow-sm">
            <div className="text-[10px] font-medium text-slate-500 dark:text-slate-400">Automation Tool</div>
            <div className="text-lg font-bold text-slate-900 dark:text-white">Selenium / Cypress</div>
            <div className="text-[9px] text-cyan-600 dark:text-cyan-400 font-bold">API + UI Suite</div>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-white/70 dark:bg-slate-800/60 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/60 flex items-center justify-between font-mono text-xs shadow-sm">
          <span className="flex items-center gap-2 text-slate-800 dark:text-slate-200 font-semibold">
            <Bug className="w-4 h-4 text-cyan-600 dark:text-cyan-400" /> Bug Tracking & JIRA Integration
          </span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold">Verified</span>
        </div>
      </div>
    );
  }

  if (courseSlug === 'digital-marketing-for-business-owners') {
    return (
      <div className="w-full rounded-2xl bg-white/80 dark:bg-slate-900/75 backdrop-blur-xl text-slate-900 dark:text-white p-5 sm:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.35)] border border-white/80 dark:border-slate-700/60 relative overflow-hidden transition glass-panel">
        {/* Topic-Specific Business Owner & Commercial Growth Visual */}
        <div className="relative mb-4 rounded-xl overflow-hidden border border-slate-200/90 dark:border-slate-700/80 bg-slate-100 dark:bg-slate-800/80 p-1.5 shadow-sm group">
          <div className="relative rounded-lg overflow-hidden aspect-[16/9] w-full">
            <Picture
              src={bizSpotlightImg}
              webp={bizSpotlightImg}
              alt="Indian entrepreneur analyzing Google My Business ranking, customer lead funnels and revenue dashboard in modern office"
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent flex items-end p-3 pt-6 transition-colors">
              <span className="text-[11px] font-semibold text-white flex items-center gap-1.5 drop-shadow">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> Entrepreneurial Digital Growth
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200/80 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <span className="text-xs font-bold font-mono tracking-wide uppercase text-emerald-600 dark:text-emerald-400">Business Owner Growth Dashboard</span>
          </div>
          <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 font-mono">7-Day Bootcamp</span>
        </div>

        <div className="space-y-3 text-xs">
          <div className="p-3.5 rounded-xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/60 flex items-center justify-between shadow-sm">
            <span className="text-slate-800 dark:text-slate-200 font-semibold">Google My Business Visibility</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">Top 3 Map Pack</span>
          </div>
          <div className="p-3.5 rounded-xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/60 flex items-center justify-between shadow-sm">
            <span className="text-slate-800 dark:text-slate-200 font-semibold">Customer Lead Pipeline</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">+280% Qualified Enquiries</span>
          </div>
          <div className="p-3.5 rounded-xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/60 flex items-center justify-between shadow-sm">
            <span className="text-slate-800 dark:text-slate-200 font-semibold">Customer Acquisition Cost (CAC)</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">Reduced by 45%</span>
          </div>
        </div>
      </div>
    );
  }

  // Default ERP visual
  return (
    <div className="w-full rounded-2xl bg-white/80 dark:bg-slate-900/75 backdrop-blur-xl text-slate-900 dark:text-white p-5 sm:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.35)] border border-white/80 dark:border-slate-700/60 relative overflow-hidden transition glass-panel">
      {/* Topic-Specific ERP & Enterprise Architecture Visual */}
      <div className="relative mb-4 rounded-xl overflow-hidden border border-slate-200/90 dark:border-slate-700/80 bg-slate-100 dark:bg-slate-800/80 p-1.5 shadow-sm group">
        <div className="relative rounded-lg overflow-hidden aspect-[16/9] w-full">
          <Picture
            src={erpSpotlightImg}
            webp={erpSpotlightImg}
            alt="Indian ERP enterprise consultant managing cloud ERP modules for finance, supply chain and HR operations"
            className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent flex items-end p-3 pt-6 transition-colors">
            <span className="text-[11px] font-semibold text-white flex items-center gap-1.5 drop-shadow">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" /> Enterprise Systems & Operations
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200/80 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-teal-600 dark:text-teal-400" />
          <span className="text-xs font-bold font-mono tracking-wide uppercase text-teal-600 dark:text-teal-400">ERP Enterprise Management</span>
        </div>
        <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-teal-100 dark:bg-teal-500/20 text-teal-800 dark:text-teal-300 font-mono">Modules Active</span>
      </div>

      <div className="grid grid-cols-2 gap-3 text-xs">
        <div className="p-3 rounded-xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/60 flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-200 shadow-sm">
          <DollarSign className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <span>Financials</span>
        </div>
        <div className="p-3 rounded-xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/60 flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-200 shadow-sm">
          <Users className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
          <span>Human Resources</span>
        </div>
        <div className="p-3 rounded-xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/60 flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-200 shadow-sm">
          <Building2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
          <span>Supply Chain</span>
        </div>
        <div className="p-3 rounded-xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/60 flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-200 shadow-sm">
          <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <span>CRM & Operations</span>
        </div>
      </div>
    </div>
  );
}
