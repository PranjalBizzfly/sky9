import React, { useEffect } from 'react';
import { useParams, Link, Navigate, useLocation } from 'react-router-dom';
import { CheckCircle, ArrowRight, Layers, Target, ChevronRight } from 'lucide-react';
import contentRepository from '../../services/contentRepository';
import { getTopicHeroImage } from '../../data/heroImages';
import SectionHeader from '../../components/common/SectionHeader';
import FAQSection from '../../components/common/FAQSection';
import EnquiryForm from '../../components/common/EnquiryForm';
import SeoHead from '../../components/common/SeoHead';
import PageHero from '../../components/common/PageHero';
import CTASection from '../../components/common/CTASection';

export default function TopicPage({ courseSlug: courseSlugProp } = {}) {
  const { courseSlug: courseSlugParam, topicSlug } = useParams();
  const courseSlug = courseSlugProp || courseSlugParam;
  const location = useLocation();

  const parentCourse = contentRepository.getCourseBySlug(courseSlug);
  const topic = contentRepository.getTopicBySlug(courseSlug, topicSlug);
  const topicsList = contentRepository.getTopicsForCourse(courseSlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [topic, parentCourse]);

  // An unknown course entirely is a true 404; a known course with a bad
  // topic slug sends the visitor back to that course's own page instead.
  if (!parentCourse) {
    return <Navigate to="/courses" replace />;
  }
  if (!topic) {
    return <Navigate to={contentRepository.getCourseUrl(parentCourse.slug)} replace />;
  }

  // Redirect legacy topic slug (e.g. without "-and-") to canonical topic URL
  if (topicSlug !== topic.slug) {
    return <Navigate to={contentRepository.getTopicUrl(parentCourse.slug, topic.slug)} replace />;
  }

  const relatedTopics = topicsList.filter(t => t.slug !== topicSlug);
  const topicPath = location.pathname.replace(/\/$/, '') || contentRepository.getTopicUrl(courseSlug, topicSlug);
  const breadcrumbItems = contentRepository.getAutoBreadcrumbs(topicPath);
  const heroImg = getTopicHeroImage(topicSlug, parentCourse.slug);

  return (
    <div>
      <SeoHead
        title={`${topic.title}, ${parentCourse.shortTitle} | Sky9 India`}
        description={topic.overview || topic.subtitle}
        canonical={`https://sky9india.com${topicPath}`}
        breadcrumbs={breadcrumbItems}
        course={parentCourse}
      />
      {/* Hero Section */}
      <PageHero
        breadcrumbItems={breadcrumbItems}
        eyebrow={`${parentCourse.shortTitle} Topic Module`}
        title={topic.title}
        description={topic.subtitle}
        image={heroImg.url}
        imageWebp={heroImg.webp}
        imageAlt={heroImg.alt}
        imagePosition={heroImg.pos}
        primaryAction={{
          label: `Enroll in ${parentCourse.shortTitle}`,
          href: '#enquiry'
        }}
        secondaryAction={{
          label: 'Full Course Details',
          to: contentRepository.getCourseUrl(parentCourse.slug)
        }}
      />

      {/* Topic Overview */}
      <section className="py-8 sm:py-10 md:py-14 dark:bg-dark-bg bg-light-bg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12">
            <div className="lg:col-span-2 space-y-4 sm:space-y-8">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold dark:text-white text-slate-900 font-heading mb-3 sm:mb-4">
                  Module Overview
                </h2>
                <p className="text-base sm:text-lg dark:text-slate-300 text-slate-600 leading-relaxed">
                  {topic.overview}
                </p>
              </div>

              {/* Key Topics Covered */}
              {topic.topics && topic.topics.length > 0 && (
                <div className="dark:bg-slate-800/50 bg-white rounded-2xl p-8 border dark:border-slate-700 border-slate-200 glass-panel">
                  <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-6 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-emerald-500" />
                    Key Skills & Concepts Taught
                  </h3>
                  <div className="flex flex-wrap justify-center gap-4">
                    {topic.topics.map((item, idx) => (
                      <div key={idx} className="w-full sm:w-[calc(50%-0.5rem)] flex items-start gap-3 p-3 rounded-lg dark:bg-slate-700/30 bg-slate-50 border dark:border-slate-700 border-slate-200">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                        <span className="text-sm font-medium dark:text-slate-300 text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Practical Learning Approach */}
              <div className="p-8 rounded-2xl border glass-panel glass-panel-emerald">
                <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-emerald-400" />
                  Hands-On Practical Component
                </h3>
                <p className="dark:text-slate-300 text-slate-600 text-sm leading-relaxed mb-4">
                  Every topic at Sky9 India is accompanied by live lab exercises and real project tasks. Students complete practical assignments using actual industry software, building verified competence.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-emerald-500 dark:text-emerald-400">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">Live Tool Simulation</span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">Mentor Guided Lab</span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">Portfolio Asset</span>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="dark:bg-slate-800/50 bg-white rounded-2xl p-6 border dark:border-slate-700 border-slate-200 sticky top-28 space-y-6 glass-panel">
                <div className="pb-6 border-b dark:border-slate-700 border-slate-200">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-500">Parent Course</span>
                  <h4 className="text-lg font-bold dark:text-white text-slate-900 mt-1">{parentCourse.title}</h4>
                  <p className="text-sm dark:text-slate-400 text-slate-500 mt-1">{parentCourse.duration} • {parentCourse.mode}</p>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center text-slate-600 dark:text-slate-300">
                    <span>Course Fee:</span>
                    <span className="font-bold dark:text-white text-slate-900">{parentCourse.fee}</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-600 dark:text-slate-300">
                    <span>Internship:</span>
                    <span className="font-semibold text-emerald-500">1-Month Included</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-600 dark:text-slate-300">
                    <span>Certificate:</span>
                    <span className="font-semibold text-emerald-500">Sky9 Verified</span>
                  </div>
                </div>

                <a
                  href="#enquiry"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition duration-300 shadow-lg shadow-emerald-500/25"
                >
                  Enroll Now
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Topics Navigation */}
      {relatedTopics && relatedTopics.length > 0 && (
        <section className="py-8 sm:py-10 md:py-12 dark:bg-slate-900/50 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <h3 className="text-xl sm:text-2xl font-bold dark:text-white text-slate-900 mb-4 sm:mb-6 font-heading">
              Other Topics in {parentCourse.shortTitle}
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {relatedTopics.map((item) => (
                <Link
                  key={item.slug}
                  to={contentRepository.getTopicUrl(parentCourse.slug, item.slug)}
                  className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)] p-5 rounded-xl dark:bg-slate-800/50 bg-white border dark:border-slate-700 border-slate-200 hover:border-emerald-500/50 transition duration-300 group flex items-center justify-between glass-panel"
                >
                  <div>
                    <h4 className="font-semibold dark:text-white text-slate-900 group-hover:text-emerald-500 transition-colors text-sm">
                      {item.title}
                    </h4>
                    <p className="text-xs dark:text-slate-400 text-slate-500 mt-1 line-clamp-1">
                      {item.subtitle}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Topic FAQs */}
      <FAQSection
        items={topic.faqs}
        label="Module FAQs"
        description={`Get answers to common queries about ${topic.title}`}
      />

      {/* Enquiry Form */}
      <section id="enquiry" className="py-8 sm:py-10 md:py-12 dark:bg-dark-bg bg-light-bg">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeader
            badge="Admissions Enquiry"
            title={`Get Started with ${topic.title}`}
            subtitle="Fill out the form below and our counseling team will reach out with course schedule and batch details."
          />
          <div className="mt-4 sm:mt-8">
            <EnquiryForm courseName={`${parentCourse.title} (${topic.title})`} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title={`Master ${topic.title} At Sky9 India`}
        subtitle="Hands-on training, interactive live simulation labs, and 1-month practical internships."
        primaryText="Enroll in Course"
        primaryLink="#enquiry"
        courseName={`${parentCourse.title} (${topic.title})`}
        secondaryText="View Full Course"
        secondaryLink={contentRepository.getCourseUrl(parentCourse.slug)}
        variant="green"
      />
    </div>
  );
}
