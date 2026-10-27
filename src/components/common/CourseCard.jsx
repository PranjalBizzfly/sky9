import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Clock, Monitor, Award, ArrowRight, Check, Megaphone, 
  TrendingUp, Cpu, Code2, Database, Sparkles 
} from 'lucide-react';
import SpotlightCard from './animations/SpotlightCard';
import BorderBeam from './animations/BorderBeam';
import contentRepository from '../../services/contentRepository';
import { CoursePriceBlock } from '../pricing/CoursePrice';

const iconMap = {
  megaphone: Megaphone,
  chart: TrendingUp,
  cpu: Cpu,
  code: Code2,
  database: Database
};

export default function CourseCard({ course, index = 0 }) {
  if (!course) return null;

  const {
    title = 'Sky9 Course',
    subtitle = course.description || course.overview || '',
    description = subtitle,
    slug = 'digital-marketing',
    duration = '2 Months',
    fee = '₹25,000/-',
    mode = 'Online & Offline',
    certification = 'Certificate of Completion',
    isPopular = false,
    iconType = 'cpu',
    iconColor = 'bg-emerald-500/15 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400',
    learningAreas = course.benefits || [
      'Practical Hands-on Training',
      'Live Tool Projects',
      'Mentorship & Guidance',
      'Career Support & more...'
    ]
  } = course;

  const IconComp = iconMap[iconType] || Cpu;
  const courseUrl = contentRepository.getCourseUrl(slug);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
      className="h-full relative flex flex-col group"
    >
      {/* MOST POPULAR Badge with Border Beam */}
      {isPopular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30">
          <span className="relative inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-emerald-950 text-emerald-300 border border-emerald-400/60 shadow-lg shadow-emerald-500/30 backdrop-blur-xl overflow-hidden">
            <BorderBeam size={60} duration={4} colorFrom="#10B981" colorTo="#34D399" />
            <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>MOST POPULAR</span>
          </span>
        </div>
      )}

      {/* Main Glassmorphism Card Container with Spotlight Glow */}
      <SpotlightCard 
        className={`h-full p-6 flex flex-col justify-between transition duration-300 hover:-translate-y-2 relative backdrop-blur-xl glass-fx text-slate-900 dark:text-slate-100 ${
          isPopular 
            ? 'bg-white/85 dark:bg-slate-900/80 border-2 border-emerald-500/90 dark:border-emerald-400 shadow-[0_8px_32px_0_rgba(16,185,129,0.18)] dark:shadow-[0_8px_32px_0_rgba(16,185,129,0.25)] hover:shadow-[0_20px_45px_rgba(16,185,129,0.25)]' 
            : 'bg-white/75 dark:bg-slate-900/70 border border-white/80 dark:border-slate-700/60 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.35)] hover:border-emerald-500/70 dark:hover:border-emerald-400/70 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)]'
        }`}
      >
        {isPopular && <BorderBeam size={180} duration={8} colorFrom="#10B981" colorTo="#34D399" />}
        <div>
          {/* Header Row: Colored Icon Box + Top Right Circular Arrow Link */}
          <div className="flex items-center justify-between mb-4 pt-1">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm border border-emerald-500/20 backdrop-blur-md ${iconColor}`}>
              <IconComp className="w-5 h-5" />
            </div>
            <Link
              to={courseUrl}
              className="w-9 h-9 rounded-full bg-white/90 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700 hover:bg-emerald-600 hover:border-emerald-600 text-slate-600 dark:text-slate-300 hover:text-white flex items-center justify-center transition duration-200 hover:scale-110 shadow-sm backdrop-blur-md"
              title={`View ${title}`}
            >
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Course Title, Properly Visible */}
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-snug font-heading line-clamp-2 min-h-[3.5rem] group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-4 leading-relaxed min-h-[2.75rem] line-clamp-2 font-normal">
            {description}
          </p>

          {/* Course Fee, highlighted near the top of the card */}
          <CoursePriceBlock fee={fee} className="mb-4 min-h-[6.75rem]" />

          {/* Metadata Rows */}
          <div className="space-y-2.5 py-3.5 border-t border-b border-slate-200/80 dark:border-slate-800/80 text-xs sm:text-[13px] mb-5">
            {/* Duration */}
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 font-medium">
                <Clock className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                <span>Duration</span>
              </span>
              <span className="font-bold text-slate-900 dark:text-white">{duration}</span>
            </div>

            {/* Mode */}
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 font-medium">
                <Monitor className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                <span>Mode</span>
              </span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">{mode}</span>
            </div>

            {/* Certificate */}
            <div className="flex items-start justify-between gap-2">
              <span className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 font-medium shrink-0">
                <Award className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                <span>Certificate</span>
              </span>
              <span className="font-semibold text-slate-800 dark:text-slate-200 text-xs text-right leading-snug">{certification}</span>
            </div>
          </div>

          {/* Key Learning Areas */}
          <div className="space-y-2.5 mb-6">
            <h4 className="text-xs font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider">
              Key Learning Areas
            </h4>
            <div className="space-y-2">
              {learningAreas.slice(0, 4).map((area, aIdx) => (
                <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 font-medium">
                  <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="pt-2">
          <Link
            to={courseUrl}
            className="btn-shimmer w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 transition duration-200 shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-[1.01] active:scale-[0.98]"
          >
            <span>View Course Details</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </SpotlightCard>
    </motion.div>
  );
}
