import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AlertCircle, Home, BookOpen, Search, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import Breadcrumb from '../components/common/Breadcrumb';
import SeoHead from '../components/common/SeoHead';

const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

export default function NotFoundPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <SeoHead
        title="Page Not Found (404)"
        description="The page you're looking for could not be found. Explore Sky9 India's courses, internship, and certification programs instead."
        robots="noindex, follow"
      />
      {/* Hero */}
      <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-40 md:pb-24 bg-slate-900 text-white flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 opacity-90" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="space-y-4 sm:space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <AlertCircle className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>

            <span className="block text-xs font-bold uppercase tracking-widest text-emerald-400">
              404 Error, Page Not Found
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight font-heading text-white">
              The Page You Are Looking For Does Not Exist
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              The requested URL could not be found. You can return to the homepage, explore our practical training courses, or view the complete sitemap directory.
            </p>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Button to="/" variant="primary" size="lg" icon={Home}>
                Back to Homepage
              </Button>
              <Button to="/courses" variant="outline" size="lg" icon={BookOpen}>
                Explore Courses
              </Button>
              <Button to="/resources/visual-sitemap-directory" variant="ghost" size="lg" icon={Search}>
                View Sitemap
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Suggested Quick Links */}
      <section className="py-8 sm:py-10 md:py-12 dark:bg-dark-bg bg-light-bg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold dark:text-white text-slate-900 mb-6 font-heading">
            Popular Pages & Programs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/courses/digital-marketing-training" className="p-4 rounded-xl dark:bg-slate-800/50 bg-white border dark:border-slate-700 border-slate-200 hover:border-emerald-500 transition-colors text-sm font-semibold dark:text-slate-200 text-slate-800 glass-panel">
              Digital Marketing Training
            </Link>
            <Link to="/courses/ai-automation-training" className="p-4 rounded-xl dark:bg-slate-800/50 bg-white border dark:border-slate-700 border-slate-200 hover:border-emerald-500 transition-colors text-sm font-semibold dark:text-slate-200 text-slate-800 glass-panel">
              AI & Automation Training
            </Link>
            <Link to="/courses/software-testing-training" className="p-4 rounded-xl dark:bg-slate-800/50 bg-white border dark:border-slate-700 border-slate-200 hover:border-emerald-500 transition-colors text-sm font-semibold dark:text-slate-200 text-slate-800 glass-panel">
              Software Testing Training
            </Link>
            <Link to="/courses/erp-training" className="p-4 rounded-xl dark:bg-slate-800/50 bg-white border dark:border-slate-700 border-slate-200 hover:border-emerald-500 transition-colors text-sm font-semibold dark:text-slate-200 text-slate-800 glass-panel">
              ERP Training
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
