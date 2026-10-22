import React, { useEffect } from 'react';
import { useParams, Link, Navigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, CheckCircle } from 'lucide-react';
import contentRepository from '../../services/contentRepository';
import { getAudienceHeroImage } from '../../data/heroImages';
import aboutCohortImg from '../../assets/visuals/about-cohort.webp';
import PageHero from '../../components/common/PageHero';
import SeoHead from '../../components/common/SeoHead';
import SectionHeader from '../../components/common/SectionHeader';
import Picture from '../../components/common/Picture';
import CourseCard from '../../components/common/CourseCard';
import FAQSection from '../../components/common/FAQSection';
import CTASection from '../../components/common/CTASection';
import TypewriterHeading from '../../components/common/animations/TypewriterHeading';
import {
  ProcessSection,
  studentWorkflow,
  businessOwnerWorkflow,
  internshipWorkflow,
  careerWorkflow
} from '../../components/workflow/ProcessSection';

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

export default function AudiencePage({ audienceSlug: audienceSlugProp } = {}) {
  const { audienceSlug: audienceSlugParam } = useParams();
  const audienceSlug = audienceSlugProp || audienceSlugParam;
  const location = useLocation();

  const audience = contentRepository.getAudiencePage(audienceSlug);
  // Derive breadcrumbs/canonical from the actual matched URL so audience pages
  // nested under a nav category (e.g. Business Owners Pathway) stay correct
  const audiencePath = location.pathname.replace(/\/$/, '') || `/${audienceSlug}`;
  const breadcrumbItems = contentRepository.getAutoBreadcrumbs(audiencePath);
  const courses = contentRepository.getAllCourses();

  useEffect(() => {
    if (audience) {
      window.scrollTo(0, 0);
    }
  }, [audience]);

  const getWorkflowForAudience = (slug) => {
    const s = (slug || '').toLowerCase();
    if (s.includes('business') || s.includes('entrepreneur') || s.includes('owner')) {
      return { steps: businessOwnerWorkflow, title: 'Growth Roadmap For Business Owners', badge: 'Business Pathway' };
    }
    if (s.includes('internship')) {
      return { steps: internshipWorkflow, title: 'Practical Internship Roadmap', badge: 'Internship Pathway' };
    }
    if (s.includes('career') || s.includes('job') || s.includes('professional')) {
      return { steps: careerWorkflow, title: 'Career Acceleration Pathway', badge: 'Career Roadmap' };
    }
    return { steps: studentWorkflow, title: 'Step-by-Step Learning Journey', badge: 'Structured Journey' };
  };

  const workflowInfo = getWorkflowForAudience(audienceSlug);

  if (!audience) {
    return <Navigate to="/courses" replace />;
  }

  const heroImg = getAudienceHeroImage(audienceSlug);

  return (
    <div>
      <SeoHead
        title={audience.title}
        description={audience.subtitle}
        canonical={`https://sky9india.com${audiencePath}`}
        breadcrumbs={breadcrumbItems}
      />
      {/* Hero */}
      <PageHero
        breadcrumbItems={breadcrumbItems}
        eyebrow="Tailored Learning Pathway • Pune"
        title={audience.title}
        description={audience.subtitle}
        image={heroImg.url}
        imageWebp={heroImg.webp}
        imageAlt={heroImg.alt}
        imagePosition={heroImg.pos}
        primaryAction={{
          label: 'Explore Recommended Courses',
          href: '#recommended-courses'
        }}
        secondaryAction={{
          label: 'Book Free Counseling',
          to: '/contact-us'
        }}
      />

      {/* Main Content */}
      <section className="py-8 sm:py-10 md:py-14 dark:bg-dark-bg bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 space-y-6 sm:space-y-8">
          {/* Overview Split with Real Human Visual */}
          <div className="p-5 sm:p-10 rounded-3xl dark:bg-slate-800/60 bg-white border dark:border-slate-700 border-slate-200 shadow-sm glass-panel">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold dark:text-white text-slate-900 font-heading">
                  Why This Program Is Built For You
                </h2>
                <p className="text-base sm:text-lg dark:text-slate-300 text-slate-600 leading-relaxed">
                  {audience.description}
                </p>
                {audience.highlights && audience.highlights.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {audience.highlights.map((benefit, idx) => {
                      const isDanglingLast = idx === audience.highlights.length - 1 && audience.highlights.length % 2 !== 0;
                      return (
                        <div key={idx} className={`flex items-center gap-3 p-3.5 rounded-xl dark:bg-slate-700/40 bg-slate-50 border dark:border-slate-700 border-slate-200 ${isDanglingLast ? 'sm:col-span-2' : ''}`}>
                          <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                          <span className="text-xs sm:text-sm font-semibold dark:text-white text-slate-900">{benefit}</span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-slate-100 dark:border-slate-700 group">
                  <Picture
                    src={aboutCohortImg}
                    webp={aboutCohortImg}
                    alt="Sky9 tailored mentorship cohort and practical learning session in modern Indian IT classroom"
                    className="w-full h-[280px] sm:h-[320px] object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700 flex items-center justify-between text-white">
                    <span className="text-xs font-bold font-heading">Tailored Mentorship Cohort</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500 text-white">
                      1-on-1 Guidance
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recommended Courses Grid */}
          <div id="recommended-courses" className="scroll-mt-24">
            <SectionHeader
              badge="Recommended Programs"
              title="Best Courses For Your Learning Path"
              subtitle="Select from our top industry-aligned practical training programs."
            />
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {courses.slice(0, 3).map((course) => (
                <div key={course.id} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)]">
                  <CourseCard course={course} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection
        title={workflowInfo.title}
        subtitle="Our proven, hands-on methodology to take you from fundamentals to real-world results."
        steps={workflowInfo.steps}
        badge={workflowInfo.badge}
      />

      {/* Audience FAQs */}
      <FAQSection
        items={audience.faqs}
        label="Pathway FAQs"
        description={`Get answers to common queries about ${audience.title}`}
      />

      {/* CTA */}
      <CTASection
        title="Start Your Learning Transformation"
        subtitle="Speak with our admissions counselors to pick the best batch timing and mode for your schedule."
        primaryText="Talk to Counseling"
        primaryLink="/contact-us"
        secondaryText="View All Courses"
        secondaryLink="/courses"
        variant="green"
      />
    </div>
  );
}
