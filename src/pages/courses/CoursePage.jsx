import React, { useEffect } from 'react';
import { useParams, Link, Navigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Clock, IndianRupee, Monitor, Award, Briefcase, CheckCircle,
  Users, ArrowRight, ChevronRight, BookOpen
} from 'lucide-react';
import contentRepository from '../../services/contentRepository';
import CourseHero from '../../components/course/CourseHero';
import CurriculumSection from '../../components/course/CurriculumSection';
import RelatedTopics from '../../components/course/RelatedTopics';
import { ProcessSection, studentWorkflow } from '../../components/workflow/ProcessSection';
import { PricingCard } from '../../components/pricing/PricingSection';
import FAQSection from '../../components/common/FAQSection';
import EnquiryForm from '../../components/common/EnquiryForm';
import SectionHeader from '../../components/common/SectionHeader';
import SeoHead from '../../components/common/SeoHead';
import TypewriterHeading from '../../components/common/animations/TypewriterHeading';
import CTASection from '../../components/common/CTASection';

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

export default function CoursePage({ slug: slugProp } = {}) {
  const { slug: slugParam } = useParams();
  const slug = slugProp || slugParam;
  const location = useLocation();

  // Consume course data via ContentRepository
  const course = contentRepository.getCourseBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [course]);

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  // Derive breadcrumbs/canonical from the actual matched URL so courses that
  // live outside /courses/:slug (e.g. Business Owners track) stay correct
  const coursePath = location.pathname.replace(/\/$/, '') || contentRepository.getCourseUrl(course.slug);
  const breadcrumbItems = contentRepository.getAutoBreadcrumbs(coursePath);
  const topicsList = contentRepository.getTopicsForCourse(course.slug);
  const { relatedCourses } = contentRepository.getRelatedContent(course.slug, course.category);

  return (
    <div>
      <SeoHead
        title={`${course.title} | Sky9 India`}
        description={course.overview}
        canonical={`https://sky9india.com${coursePath}`}
        breadcrumbs={breadcrumbItems}
        course={course}
        faqs={course.faqs}
      />
      {/* Course Hero Component */}
      <CourseHero course={course} breadcrumbs={breadcrumbItems} />

      {/* Course Overview & Sidebar Details */}
      <section className="py-8 sm:py-10 md:py-14 dark:bg-dark-bg bg-light-bg">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12"
          >
            <motion.div variants={fadeInUp} className="lg:col-span-2 space-y-4 sm:space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold dark:text-white text-slate-900 font-heading mb-3 sm:mb-6">
                  <TypewriterHeading text="Course Overview" />
                </h2>
                <p className="text-base sm:text-lg dark:text-slate-300 text-slate-600 leading-relaxed">
                  {course.overview}
                </p>
              </div>

              {/* Target Audience / Eligibility */}
              {course.audience && course.audience.length > 0 && (
                <div className="dark:bg-slate-800/50 bg-white rounded-2xl p-6 border dark:border-slate-700 border-slate-200 glass-panel">
                  <h3 className="text-lg font-semibold dark:text-white text-slate-900 mb-4 flex items-center gap-2 font-heading">
                    <Users className="w-5 h-5 text-emerald-500" />
                    Target Audience & Eligibility
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {course.audience.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-lg text-sm dark:bg-slate-700/50 bg-slate-100 dark:text-slate-300 text-slate-700 border dark:border-slate-600 border-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Benefits */}
              {course.benefits && course.benefits.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold dark:text-white text-slate-900 font-heading">
                    Key Learning Outcomes
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {course.benefits.map((benefit, idx) => {
                      const isDanglingLast = idx === course.benefits.length - 1 && course.benefits.length % 2 !== 0;
                      return (
                        <div
                          key={idx}
                          className={`flex items-start gap-3 p-4 rounded-xl dark:bg-slate-800/50 bg-white border dark:border-slate-700 border-slate-200 glass-panel ${isDanglingLast ? 'sm:col-span-2' : ''}`}
                        >
                          <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-sm font-medium dark:text-slate-300 text-slate-700">{benefit}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </motion.div>

            {/* Sidebar Pricing & Action Card */}
            <motion.div variants={fadeInUp} className="lg:col-span-1 lg:sticky lg:top-24 h-fit">
              <PricingCard course={course} isFeatured={course.featured} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Modular Curriculum Section */}
      <CurriculumSection modules={course.modules} />

      {/* Specific Topic Deep Dives */}
      <RelatedTopics topics={topicsList} courseTitle={course.shortTitle} />

      {/* Student Workflow Section */}
      <ProcessSection
        title="Student Practical Learning Workflow"
        subtitle="Our 5-step methodology ensuring hands-on training, internship experience, and career referral."
        steps={studentWorkflow}
      />

      {/* Career Opportunities */}
      {course.careerOpportunities && course.careerOpportunities.length > 0 && (
        <section className="py-8 sm:py-10 md:py-14 dark:bg-slate-900/50 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeader
              badge="Career Paths"
              title="Target Job Opportunities"
              subtitle={`Roles and career pathways pursuable after completing ${course.shortTitle}`}
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
              className="flex flex-wrap justify-center gap-4 mt-4 sm:mt-8 md:mt-12"
            >
              {course.careerOpportunities.map((role, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.667rem)] lg:w-[calc(25%-0.75rem)] flex items-center gap-3 p-4 rounded-xl dark:bg-slate-800/50 bg-white border dark:border-slate-700 border-slate-200 hover:border-emerald-500/50 transition duration-300 glass-panel"
                >
                  <Briefcase className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="text-sm font-medium dark:text-slate-300 text-slate-700">{role}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Course Specific FAQs */}
      <FAQSection
        items={course.faqs}
        label="Course FAQs"
        description={`Get answers to common queries about ${course.shortTitle}`}
      />

      {/* Admissions Enquiry Form */}
      <section id="enquiry" className="py-8 sm:py-10 md:py-14 dark:bg-slate-900/50 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeader
            badge="Admissions Enquiry"
            title={`Enroll in ${course.title}`}
            subtitle="Fill out the form below and our counseling team will reach out with course schedule and batch details."
          />
          <div className="mt-4 sm:mt-8">
            <EnquiryForm courseName={course.title} />
          </div>
        </div>
      </section>

      {/* Cross Recommended Courses */}
      {relatedCourses && relatedCourses.length > 0 && (
        <section className="py-8 sm:py-10 md:py-12 dark:bg-dark-bg bg-light-bg">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h3 className="text-xl sm:text-2xl font-bold dark:text-white text-slate-900 mb-3 sm:mb-4 font-heading">
              Explore Related Training Programs
            </h3>
            <p className="dark:text-slate-400 text-slate-600 mb-4 sm:mb-8 text-xs sm:text-sm">
              Discover other practical courses to expand your skill set
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {relatedCourses.map((c) => {
                const CIcon = c.icon || BookOpen;
                return (
                  <Link
                    key={c.slug}
                    to={contentRepository.getCourseUrl(c.slug)}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl dark:bg-slate-800/50 bg-white border dark:border-slate-700 border-slate-200 dark:text-slate-300 text-slate-700 hover:border-emerald-500/50 hover:text-emerald-500 transition duration-300 text-sm font-medium shadow-sm"
                  >
                    <CIcon className="w-4 h-4 text-emerald-500" />
                    {c.shortTitle}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Course Action CTA Section */}
      <CTASection
        title={`Enroll In ${course.title} Today`}
        subtitle="Speak with our admissions counselors to pick the best batch timing and mode for your schedule."
        primaryText="Enroll in Course"
        primaryLink="#enquiry"
        courseName={course.title}
        secondaryText="View All Courses"
        secondaryLink="/courses"
        variant="green"
      />
    </div>
  );
}
