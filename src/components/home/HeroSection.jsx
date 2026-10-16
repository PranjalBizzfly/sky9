import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, Award } from 'lucide-react';
import { companyInfo } from '../../data/siteData';
import HeroVisual from '../visuals/HeroVisual';
import TiltCard from '../common/animations/TiltCard';
import TypewriterHeading from '../common/animations/TypewriterHeading';
import SectionLabel from '../common/SectionLabel';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0,
    },
  },
};

const HeroSection = () => {
  return (
    <section className="relative py-6 sm:py-10 lg:py-14 flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      {/* Background Soft Glows */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-emerald-500/15 dark:bg-emerald-500/10 rounded-full blur-3xl animate-pulse-subtle" />
        <div className="absolute top-1/2 -left-32 w-[420px] h-[420px] bg-teal-600/15 dark:bg-teal-600/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left"
          >
            {/* Top Pill Badge */}
            <motion.div variants={fadeInUp} className="inline-block">
              <SectionLabel>#1 Practical Training Institute in Pune</SectionLabel>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={fadeInUp} className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tight leading-[1.15] font-heading">
                <TypewriterHeading text="Welcome To Sky9 India" />
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-emerald-600 dark:text-emerald-400">
                Digital Marketing & AI Training That Gets You Industry-Ready
              </p>
            </motion.div>

            {/* Supporting Description */}
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              {companyInfo?.description || 'Empowering careers through 100% practical hands-on education, expert mentorship, and integrated 1-month internships.'}
            </motion.p>

            {/* CTA Buttons with Hover & Arrow Transitions */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <Link
                to="/courses"
                className="btn-shimmer group relative overflow-hidden w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold transition duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 flex items-center justify-center gap-2 text-sm sm:text-base hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/contact-us"
                className="btn-shimmer w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800/80 border-2 border-emerald-500/40 hover:border-emerald-500 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 rounded-xl font-semibold transition duration-300 flex items-center justify-center text-sm sm:text-base shadow-sm hover:scale-[1.02] active:scale-[0.98] backdrop-blur-sm"
              >
                Get Started
              </Link>
            </motion.div>

            {/* Feature Checklist Pills */}
            <motion.div
              variants={fadeInUp}
              className="pt-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400 flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 font-medium"
            >
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>No prerequisites</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>100% Practical learning</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>1-Month Internship included</span>
              </span>
            </motion.div>
          </motion.div>

          {/* Right Visual Column with Smooth 3D Perspective Tilt */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <TiltCard maxTilt={6}>
              <HeroVisual />
            </TiltCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;

