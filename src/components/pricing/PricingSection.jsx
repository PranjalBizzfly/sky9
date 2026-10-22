import React from 'react';
import { Check, Clock, IndianRupee, Monitor, Award, Briefcase, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import Button from '../ui/Button';
import SectionLabel from '../common/SectionLabel';
import { useLead } from '../../context/LeadContext';

export function PricingCard({
  course = {},
  isFeatured = false,
}) {
  const { openLeadModal } = useLead();

  const {
    title = 'Training Program',
    shortTitle = title,
    subtitle = 'Comprehensive practical training program.',
    duration = 'Flexible',
    fee = 'Contact Admissions',
    mode = 'Online & Offline',
    certification = 'Sky9 Certificate of Completion',
    internship = '1-Month Internship Included',
    benefits = [],
    slug = 'digital-marketing'
  } = course || {};

  const handleEnroll = (e) => {
    e.preventDefault();
    openLeadModal({
      course: title,
      ctaSource: 'pricing-card',
      title: `Enroll in ${title}`,
      subtitle: `Course Fee: ${fee} • Duration: ${duration} • Includes 1-Month Internship`,
    });
  };

  return (
    <div
      className={`relative flex flex-col justify-between h-full rounded-2xl transition duration-300 p-6 md:p-7 bg-white dark:bg-slate-900 border ${
        isFeatured
          ? 'border-emerald-500 shadow-2xl shadow-emerald-500/15 dark:shadow-emerald-500/10 ring-1 ring-emerald-500/30'
          : 'border-slate-200/90 dark:border-slate-700/80 shadow-lg shadow-slate-900/5 dark:shadow-black/20 hover:border-emerald-500/40 hover:-translate-y-1 hover:shadow-xl'
      }`}
    >
      {isFeatured && (
        <>
          {/* Top glowing accent stripe */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400 rounded-t-2xl" />
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 max-w-[90%] text-center whitespace-normal sm:whitespace-nowrap z-20">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-emerald-500 text-white shadow-md shadow-emerald-500/30">
              <Sparkles className="w-3 h-3" /> Most Popular Program
            </span>
          </div>
        </>
      )}

      <div>
        {/* Card Header */}
        <div className="pb-5 border-b border-slate-100 dark:border-slate-800">
          <span className="inline-block text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1">
            {shortTitle}
          </span>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-heading leading-tight">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
            {subtitle}
          </p>

          {/* Pricing Box */}
          <div className="mt-5 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 flex items-center justify-between gap-3 glass-panel">
            <div>
              <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Total Course Fee
              </div>
              <div className="text-3xl font-black text-slate-900 dark:text-white font-heading tracking-tight mt-0.5">
                {fee}
              </div>
            </div>
            <div className="text-right">
              <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">
                All-Inclusive
              </span>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Hands-on + Internship</p>
            </div>
          </div>
        </div>

        {/* Course Highlights */}
        <div className="py-5 space-y-3">
          {duration && (
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <Clock className="w-4 h-4 text-emerald-500 shrink-0" /> Duration
              </span>
              <strong className="text-slate-900 dark:text-white font-semibold">{duration}</strong>
            </div>
          )}
          {mode && (
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <Monitor className="w-4 h-4 text-emerald-500 shrink-0" /> Mode
              </span>
              <strong className="text-slate-900 dark:text-white font-semibold">{mode}</strong>
            </div>
          )}
          {internship && (
            <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/60">
              <Briefcase className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span className="text-emerald-800 dark:text-emerald-300 font-semibold text-xs sm:text-sm">
                {internship}
              </span>
            </div>
          )}
          {certification && (
            <div className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-400 pt-0.5">
              <Award className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span className="leading-snug">{certification}</span>
            </div>
          )}
        </div>

        {/* Benefits Checklist */}
        {benefits && benefits.length > 0 && (
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2.5">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              What's Included:
            </p>
            {benefits.slice(0, 4).map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                <div className="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400 stroke-[2.5]" />
                </div>
                <span className="leading-snug">{benefit}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Action Button */}
      <div className="mt-6 pt-2">
        <Button
          onClick={handleEnroll}
          variant="primary"
          size="md"
          className="w-full font-bold shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35"
          icon={ArrowRight}
        >
          Enroll Now
        </Button>
        <p className="text-center text-[11px] text-slate-500 dark:text-slate-400 mt-2.5 flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
          100% Practical & Placement Support
        </p>
      </div>
    </div>
  );
}

export function PricingSection({ courses = [] }) {
  if (!courses || courses.length === 0) return null;

  return (
    <section className="py-8 sm:py-10 md:py-14 dark:bg-dark-bg bg-light-bg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 space-y-3 sm:space-y-4">
          <SectionLabel>Transparent Investment</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-slate-900 font-heading">
            Course Pricing & Investment Options
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base">
            Transparent pricing with no hidden charges. Every program includes hands-on labs, mentor sessions, and 1-month internships.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-stretch gap-8 pt-4">
          {courses.map((course, idx) => (
            <div key={course.id || idx} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)]">
              <PricingCard
                course={course}
                isFeatured={course.slug === 'digital-marketing'}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
