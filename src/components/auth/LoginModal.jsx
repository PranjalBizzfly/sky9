import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, Mail, Lock, Eye, EyeOff, ArrowRight,
  Sparkles, CheckCircle2, ShieldCheck, Check
} from 'lucide-react';
import { useLead } from '../../context/LeadContext';
import SectionLabel from '../common/SectionLabel';

export default function LoginModal() {
  const { isLoginOpen, closeLoginModal, openLeadModal } = useLead();
  const [activeTab, setActiveTab] = useState('login'); // 'login' | 'register'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isLoginOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate authentic authentication verification
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        closeLoginModal();
      }, 1500);
    }, 1000);
  };

  const handleSwitchToEnquiry = () => {
    closeLoginModal();
    openLeadModal({
      title: 'Get Free Access / Program Enquiry',
      subtitle: 'Speak with an admissions mentor to access demo classes and curriculum outlines.',
      ctaSource: 'login-modal-switch',
    });
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeLoginModal}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden z-10 grid grid-cols-1 md:grid-cols-12 max-h-[92vh] overflow-y-auto"
        >
          {/* Close Button Top Right */}
          <button
            onClick={closeLoginModal}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white flex items-center justify-center transition-colors shadow-sm"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* ════════════════════════════════════════════════════════════
              LEFT PANEL: SKY9 BRAND & LIVE WORKSPACE TELEMETRY (Desktop/Tablet)
              ════════════════════════════════════════════════════════════ */}
          <div className="hidden md:flex md:col-span-6 bg-[#080d1a] p-6 sm:p-8 text-white flex-col justify-between relative overflow-hidden border-b md:border-b-0 md:border-r border-slate-800">
            {/* Background Ambient Glows */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              {/* Brand Logo */}
              <div className="flex items-center gap-3">
                <img
                  src="/sky9-logo.svg"
                  alt="Sky9 India"
                  className="h-9 sm:h-10 w-auto object-contain"
                />
              </div>

              {/* Pill Tag */}
              <SectionLabel tone="onDark">Practical Learning Ecosystem • Pune</SectionLabel>

              {/* Heading & Subtitle */}
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-bold font-heading tracking-tight text-white leading-tight">
                  Welcome Back to Your Learning Portal
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Access centralized live cohorts, practical tool labs, internship assignments, and placement resources.
                </p>
              </div>

              {/* Live Workday & Training Telemetry Card */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-xl shadow-lg space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1.5 font-bold text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Live Practical Cohort
                  </span>
                  <span className="font-mono text-[11px] text-teal-300 bg-teal-950/60 px-2 py-0.5 rounded-full border border-teal-800">
                    Pune & Live Online
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '85%' }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 rounded-full"
                  />
                </div>

                {/* 3 Metric Tiles */}
                <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                  <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/60">
                    <div className="text-[10px] text-slate-400 font-medium">Practical Ratio</div>
                    <div className="text-xs font-bold text-emerald-400 font-mono mt-0.5">80% Live</div>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/60">
                    <div className="text-[10px] text-slate-400 font-medium">Internship</div>
                    <div className="text-xs font-bold text-teal-300 font-mono mt-0.5">1-Month</div>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/60">
                    <div className="text-[10px] text-slate-400 font-medium">Mentorship</div>
                    <div className="text-xs font-bold text-white font-mono mt-0.5">1-on-1</div>
                  </div>
                </div>
              </div>

              {/* Checklist Items */}
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Practical industry curriculum & real tools</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Integrated 1-Month live client internship</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Daily doubt clearing & resume workshops</span>
                </div>
              </div>
            </div>

            {/* Bottom Security Footer */}
            <div className="relative z-10 pt-6 mt-6 border-t border-slate-800/80 flex items-center gap-2 text-[11px] text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>256-bit Secure Student Authentication • Sky9 India</span>
            </div>
          </div>

          {/* ════════════════════════════════════════════════════════════
              RIGHT PANEL: LOGIN / ACCESS FORM
              ════════════════════════════════════════════════════════════ */}
          <div className="col-span-12 md:col-span-6 p-6 sm:p-8 bg-white dark:bg-slate-900 flex flex-col justify-between">
            <div>
              {/* Mobile-only brand header */}
              <div className="flex md:hidden items-center justify-between mb-4 pb-3 border-b border-slate-100 dark:border-slate-800 pr-8">
                <img
                  src="/sky9-logo.svg"
                  alt="Sky9 India"
                  className="h-7 w-auto object-contain dark:block hidden"
                />
                <img
                  src="/sky9-logo-light.svg"
                  alt="Sky9 India"
                  className="h-7 w-auto object-contain dark:hidden block"
                />
                <SectionLabel>Student Portal</SectionLabel>
              </div>

              {/* Top Toggle Switcher: Get Free Access / Log In */}
              <div className="p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 flex items-center mb-6">
                <button
                  type="button"
                  onClick={handleSwitchToEnquiry}
                  className="flex-1 py-2 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg transition-colors cursor-pointer"
                >
                  Get Free Access
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('login')}
                  className="flex-1 py-2 text-xs font-bold bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 transition cursor-pointer"
                >
                  Log In
                </button>
              </div>

              {/* Form Header */}
              <div className="mb-6 space-y-1">
                <h4 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-heading tracking-tight">
                  Log in to your workspace
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Enter your registered credentials to access your student portal
                </p>
              </div>

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email / Student ID */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                    Work Email / Student ID
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="student@sky9india.com"
                      className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/80 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                      Password
                    </label>
                    <button
                      type="button"
                      onClick={() => alert('Password reset link sent to your registered email.')}
                      className="text-xs text-emerald-600 dark:text-emerald-400 hover:underline font-semibold"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••••••"
                      className="w-full pl-10 pr-11 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/80 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition font-mono"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                      aria-label="Toggle password visibility"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Submit CTA Button */}
                <button
                  type="submit"
                  disabled={isLoading || isSuccess}
                  className="w-full mt-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition shadow-md shadow-emerald-500/25 flex items-center justify-center gap-2 text-sm hover:scale-[1.01] active:scale-[0.99] disabled:opacity-75 cursor-pointer"
                >
                  {isLoading ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      <span>Authenticating...</span>
                    </span>
                  ) : isSuccess ? (
                    <span className="inline-flex items-center gap-2 text-white">
                      <Check className="w-4 h-4" />
                      <span>Login Successful! Redirecting...</span>
                    </span>
                  ) : (
                    <>
                      <span>Log In to Workspace</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {/* OR Divider */}
              <div className="relative my-5 text-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200 dark:border-slate-800" />
                </div>
                <span className="relative px-3 bg-white dark:bg-slate-900 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  OR
                </span>
              </div>

              {/* Alternate SSO Logins */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => alert('Google Single Sign-On initialized for student account.')}
                  className="py-2.5 px-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-200 font-semibold text-xs flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.35 24 12 24z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.03 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                    />
                  </svg>
                  <span>Google SSO</span>
                </button>

                <button
                  type="button"
                  onClick={() => alert('OTP login requested. An SMS code will be sent to your mobile.')}
                  className="py-2.5 px-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-200 font-semibold text-xs flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <Sparkles className="w-4 h-4 text-emerald-500" />
                  <span>Mobile OTP</span>
                </button>
              </div>
            </div>

            {/* Bottom Enquire Link */}
            <div className="text-center pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
              Don't have an account?{' '}
              <button
                type="button"
                onClick={handleSwitchToEnquiry}
                className="font-bold text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer"
              >
                Get Free Access / Enquire Now
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
