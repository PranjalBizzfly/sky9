import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, IndianRupee, Monitor, Award, ArrowRight, BookOpen, Briefcase } from 'lucide-react';
import Breadcrumb from '../common/Breadcrumb';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import SectionLabel from '../common/SectionLabel';
import { useLead } from '../../context/LeadContext';
import { getCourseHeroImage, heroImages } from '../../data/heroImages';
import TypewriterHeading from '../common/animations/TypewriterHeading';

const fadeInUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

export default function CourseHero({ course, breadcrumbs = [] }) {
  const { openLeadModal } = useLead();

  if (!course) return null;

  const IconComponent = course.icon || BookOpen;
  const heroImg = getCourseHeroImage(course.slug);
  const [imgSrc, setImgSrc] = useState(heroImg.url);
  const [webpSrc, setWebpSrc] = useState(heroImg.webp);

  React.useEffect(() => {
    if (heroImg?.url) setImgSrc(heroImg.url);
    setWebpSrc(heroImg?.webp);
  }, [heroImg?.url, heroImg?.webp]);

  const handleEnrollClick = (e) => {
    e.preventDefault();
    openLeadModal({
      course: course.title,
      ctaSource: 'course-hero',
      title: `Enroll in ${course.title}`,
      subtitle: `Speak with our Pune admissions counselors to confirm batch timings and schedule details.`,
    });
  };

  return (
    <section className="relative min-h-[440px] sm:min-h-[480px] md:min-h-[540px] flex items-center pt-24 pb-12 sm:pt-28 sm:pb-14 md:pt-32 md:pb-16 overflow-hidden bg-slate-950 text-white select-none">
      {/* Full-bleed course-relevant realistic background photo.
          Pinned to a fixed height (matching the section's min-height floor) instead of
          stretching to fill the section (absolute inset-0). The section can grow taller
          than that floor to fit longer wrapped copy on narrow screens — if the image
          stretched along with it, object-cover would crop away most of the photo's
          width to cover the resulting tall/narrow box. Capping the image band keeps the
          crop stable across all breakpoints. */}
      <div className="absolute inset-x-0 top-0 h-[440px] sm:h-[480px] md:h-[540px] z-0 overflow-hidden">
        <picture>
          {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
          <img
            src={imgSrc}
            alt={heroImg.alt || course.title}
            style={{ objectPosition: heroImg.pos || 'center' }}
            className="w-full h-full object-cover transition-transform duration-1000"
            loading="eager"
            onError={() => {
              setImgSrc(heroImages.genericDefault.url);
              setWebpSrc(heroImages.genericDefault.webp);
            }}
          />
        </picture>
        {/* Directional gradient overlay:
            Provides focused contrast on the left side where text and buttons sit,
            while smoothly fading across the right side so the person/workplace photograph remains bright, crisp, and clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/50 via-50% to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent via-60% to-slate-950/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {breadcrumbs.length > 0 && (
          <div className="mb-4 sm:mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            <Breadcrumb items={breadcrumbs} />
          </div>
        )}

        <motion.div
          className="max-w-3xl space-y-4 sm:space-y-6"
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {/* Eyebrow / Tag */}
          <motion.div variants={fadeInUp} className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-slate-950/60 border border-emerald-500/40 backdrop-blur-md flex items-center justify-center shadow-md">
              <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
            </div>
            {course.category && (
              <SectionLabel tone="onDark">{course.category} Track</SectionLabel>
            )}
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight font-heading text-white leading-tight drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)]"
          >
            <TypewriterHeading text={course.title} cursor light />
          </motion.h1>

          {course.subtitle && (
            <motion.p variants={fadeInUp} className="text-base sm:text-lg md:text-xl text-slate-100 max-w-2xl leading-relaxed font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
              {course.subtitle}
            </motion.p>
          )}

          {/* Course Metadata Badges */}
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-2.5 pt-1">
            {course.duration && (
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-xs sm:text-sm text-slate-200">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>{course.duration}</span>
              </div>
            )}
            {course.fee && (
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-xs sm:text-sm text-slate-200">
                <IndianRupee className="w-4 h-4 text-emerald-400" />
                <span className="font-bold text-white">{course.fee}</span>
              </div>
            )}
            {course.mode && (
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-xs sm:text-sm text-slate-200">
                <Monitor className="w-4 h-4 text-emerald-400" />
                <span>{course.mode}</span>
              </div>
            )}
            {course.certification && (
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-xs sm:text-sm text-slate-200">
                <Award className="w-4 h-4 text-emerald-400" />
                <span>Verified Certificate</span>
              </div>
            )}
            {course.internship && (
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-xs sm:text-sm text-slate-200">
                <Briefcase className="w-4 h-4 text-emerald-400" />
                <span>1-Month Internship</span>
              </div>
            )}
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-3 sm:gap-4 pt-3">
            <button
              onClick={handleEnrollClick}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 text-sm sm:text-base cursor-pointer"
            >
              <span>Enroll Now</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <a
              href="#curriculum"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-slate-900/70 hover:bg-slate-800/80 text-slate-200 hover:text-white border border-slate-700/90 hover:border-emerald-500/50 backdrop-blur-md font-semibold rounded-xl transition duration-300 text-sm sm:text-base cursor-pointer"
            >
              <span>View Curriculum</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

