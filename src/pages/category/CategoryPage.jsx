import React, { useEffect } from 'react';
import { useParams, Link, Navigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle, ArrowRight } from 'lucide-react';
import contentRepository from '../../services/contentRepository';
import { getCourseHeroImage } from '../../data/heroImages';
import CTASection from '../../components/common/CTASection';
import PageHero from '../../components/common/PageHero';
import SeoHead from '../../components/common/SeoHead';
import FAQSection from '../../components/common/FAQSection';
import { CoursePriceBlock } from '../../components/pricing/CoursePrice';

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

// Builds page-specific FAQs for each (type x course) combination from the
// course's own real fields, no two combinations share the same answers.
function getCategoryFaqs(type, course) {
  if (type === 'career') {
    const roles = course.careerOpportunities || [];
    return [
      { question: `What job roles can I pursue after completing ${course.shortTitle}?`, answer: roles.length > 0 ? `${course.shortTitle} graduates commonly pursue roles including ${roles.slice(0, 4).join(', ')}${roles.length > 4 ? ', among others' : ''}.` : `${course.shortTitle} builds practical, portfolio-ready skills; your admissions counselor can walk through specific role fits based on your background.` },
      { question: `Does completing ${course.shortTitle} guarantee a job?`, answer: `No training program can guarantee employment, but for ${course.shortTitle} graduates, resume building, technical mock interviews, and direct hiring partner referrals are built into the career support for this track.` },
      { question: `How long is the ${course.shortTitle} program, and does that affect how job-ready I am?`, answer: `${course.shortTitle} runs for ${course.duration}, including the integrated internship, so you graduate with both the coursework and real project experience employers look for.` },
      { question: `Is prior experience required to pursue a career in ${course.shortTitle.toLowerCase()}?`, answer: `No, ${course.shortTitle} starts from fundamentals, and the internship and career support are designed to take a beginner into a ${course.shortTitle}-related career, not just supplement existing experience.` },
      { question: `Does the ${course.shortTitle} career track include mock interview preparation?`, answer: `Yes, personalized technical and behavioral mock interview drills tailored to ${course.shortTitle} roles are part of the career support for this track.` },
      { question: `Is the ${course.shortTitle} career track available if I study through the online batch?`, answer: `Yes, ${course.shortTitle} is offered as ${course.mode || 'classroom and online batches'}, both receiving the identical curriculum and the same career support.` },
      { question: `Who is the ${course.shortTitle} career track designed for?`, answer: `${course.shortTitle} is built for ${(course.audience || []).slice(0, 3).join(', ') || 'learners at any starting point'}, since the program starts from fundamentals regardless of background.` },
      { question: `What practical deliverables help demonstrate my ${course.shortTitle} skills to employers?`, answer: `The ${course.shortTitle} internship work and hands-on module assignments become the portfolio pieces you can show employers, alongside the course completion certificate.` },
    ];
  }

  if (type === 'internship') {
    return [
      { question: `What will I actually work on during the ${course.shortTitle} internship?`, answer: `You'll apply your ${course.shortTitle} training to live, real project deliverables under senior mentor supervision, not simulated exercises.` },
      { question: `Is the ${course.shortTitle} internship included in the course fee, or extra?`, answer: `It's included, ${course.internship || '1-month internship'} for ${course.shortTitle} is integrated directly into the ${course.fee} course fee, not sold as a separate add-on.` },
      { question: `How long does the ${course.shortTitle} internship run?`, answer: `The ${course.shortTitle} internship is a structured 1-month period, coordinated with your batch timing (classroom or live online) so it fits alongside the rest of your ${course.shortTitle} coursework.` },
      { question: `Do I get a certificate specifically for the ${course.shortTitle} internship?`, answer: `Yes, you receive a verified Sky9 India Internship Completion Letter documenting the real ${course.shortTitle} project work completed, in addition to the course completion certificate.` },
      { question: `Is the ${course.shortTitle} internship available to students in the live online batch?`, answer: `Yes, internship scheduling is coordinated around your ${course.shortTitle} batch, whether classroom or live online, so both formats get the same real project work.` },
      { question: `Who supervises the ${course.shortTitle} internship work?`, answer: `Experienced project leads and mentors directly supervise ${course.shortTitle} internship tasks, reviewing your deliverables the way a workplace manager would evaluate real project output.` },
      { question: `Does the ${course.shortTitle} internship connect to specific career opportunities?`, answer: (course.careerOpportunities || []).length > 0 ? `Yes, the ${course.shortTitle} internship builds toward roles such as ${course.careerOpportunities.slice(0, 3).join(', ')}.` : `Yes, the ${course.shortTitle} internship is designed to build a portfolio directly relevant to that track.` },
      { question: `What kind of learners typically take on the ${course.shortTitle} internship?`, answer: `Learners enrolled in ${course.shortTitle}, typically ${(course.audience || []).slice(0, 2).join(' and ') || 'students and career switchers'}, complete this internship as part of the core program.` },
    ];
  }

  // certification
  return [
    { question: `What certificate do I receive after completing ${course.shortTitle}?`, answer: `${course.certification || `A Sky9 Course Completion Certificate for ${course.shortTitle}`}, issued for the ${course.shortTitle} program as a verifiable digital credential upon completing course modules, assignments, and the internship.` },
    { question: `Does ${course.shortTitle} prepare me for external industry certifications too?`, answer: `Where relevant external certifications exist for the ${course.shortTitle} track (such as Google or Meta credentials for marketing-related courses), Sky9 India provides dedicated preparation and mentoring, though the exam itself is administered by that platform.` },
    { question: `Can I add my ${course.shortTitle} certificate to LinkedIn?`, answer: `Yes, the ${course.shortTitle} certificate is designed to be shareable on LinkedIn so you can display it directly on your professional profile.` },
    { question: `How is the ${course.shortTitle} certificate different from just a general Sky9 certificate?`, answer: `It documents the specific ${course.shortTitle} modules, practical assignments, and internship deliverables completed within the course, so it reflects competencies tied to this track rather than a generic completion badge.` },
    { question: `Do I need to complete the full ${course.duration} ${course.shortTitle} program to receive the certificate?`, answer: `Yes, the ${course.shortTitle} certificate is issued upon verified completion of the modules, practical assignments, and internship, not partial attendance.` },
    { question: `Does the ${course.shortTitle} certificate reflect the internship work as well as coursework?`, answer: `Yes, it documents the practical assignments and ${course.internship || 'internship'} completed as part of ${course.shortTitle}, not just classroom attendance.` },
    { question: `Is the ${course.shortTitle} certification relevant to specific job roles?`, answer: (course.careerOpportunities || []).length > 0 ? `Yes, the ${course.shortTitle} certificate supports roles such as ${course.careerOpportunities.slice(0, 3).join(', ')}.` : `Yes, the ${course.shortTitle} certificate validates the specific competencies built during that program.` },
    { question: `Is the ${course.shortTitle} certificate available to both classroom and online learners?`, answer: `Yes, since ${course.shortTitle} is offered as ${course.mode || 'both delivery modes'} following the identical curriculum and assignments, the certificate is issued the same way regardless of how you studied.` },
  ];
}

export default function CategoryPage() {
  const { categorySlug } = useParams();
  const location = useLocation();

  const isCareer = location.pathname.startsWith('/career');
  const isInternship = location.pathname.startsWith('/internship');
  const isCertification = location.pathname.startsWith('/certification');
  const type = isCareer ? 'career' : isInternship ? 'internship' : 'certification';

  const categoryData = contentRepository.getCategoryData(type, categorySlug);

  useEffect(() => {
    if (categoryData?.parentCourse) {
      window.scrollTo(0, 0);
    }
  }, [categoryData]);

  if (!categoryData || !categoryData.parentCourse) {
    const fallbackPath = isCareer
      ? contentRepository.getHubOverviewUrl('career')
      : isInternship
        ? contentRepository.getHubOverviewUrl('internship')
        : contentRepository.getHubOverviewUrl('certification');
    return <Navigate to={fallbackPath} replace />;
  }

  const { parentCourse, title, description, opportunities } = categoryData;

  // Internship and Certification children carry a descriptive suffix on the
  // course slug; a bare, unsuffixed URL still resolves (so old links never
  // 404) but isn't the canonical address, so send it there instead of
  // serving the same page at two different URLs.
  const canonicalPath = contentRepository.getCategoryUrl(type, parentCourse.slug);
  if (location.pathname.replace(/\/$/, '') !== canonicalPath) {
    return <Navigate to={canonicalPath} replace />;
  }
  const sectionBadge = isCareer ? 'Career Readiness' : isInternship ? 'Practical Exposure' : 'Verified Certification';
  const breadcrumbItems = contentRepository.getAutoBreadcrumbs(location.pathname);
  const heroImg = getCourseHeroImage(parentCourse.slug);

  return (
    <div>
      <SeoHead
        title={title}
        description={description}
        canonical={`https://sky9india.com${location.pathname}`}
        breadcrumbs={breadcrumbItems}
      />
      {/* Hero */}
      <PageHero
        breadcrumbItems={breadcrumbItems}
        eyebrow={sectionBadge}
        title={title}
        description={description}
        image={heroImg.url}
        imageWebp={heroImg.webp}
        imageAlt={heroImg.alt}
        imagePosition={heroImg.pos}
        primaryAction={{
          label: `Explore ${parentCourse.shortTitle}`,
          to: contentRepository.getCourseUrl(parentCourse.slug)
        }}
        secondaryAction={{
          label: 'Contact Admissions',
          to: '/contact-us'
        }}
      />

      {/* Main Content */}
      <section className="py-8 sm:py-10 md:py-14 dark:bg-dark-bg bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 space-y-6 sm:space-y-8">
          {/* Details Card */}
          <div className="p-5 sm:p-8 rounded-2xl dark:bg-slate-800/50 bg-white border dark:border-slate-700 border-slate-200 glass-panel">
            <h2 className="text-2xl font-bold dark:text-white text-slate-900 mb-4 font-heading">
              {isCareer ? 'Target Job Roles & Opportunities' : isInternship ? 'Internship Workflow & Deliverables' : 'Certification Framework'}
            </h2>
            <p className="text-base dark:text-slate-300 text-slate-600 leading-relaxed mb-6">
              {parentCourse.overview}
            </p>

            {isCareer && opportunities && opportunities.length > 0 && (
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                {opportunities.map((role, idx) => (
                  <div key={idx} className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.667rem)] flex items-center gap-3 p-4 rounded-xl dark:bg-slate-700/30 bg-slate-50 border dark:border-slate-700 border-slate-200 glass-panel">
                    <Briefcase className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-sm font-semibold dark:text-white text-slate-900">{role}</span>
                  </div>
                ))}
              </div>
            )}

            {isInternship && (
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-xl dark:bg-slate-700/30 bg-slate-50 border dark:border-slate-700 border-slate-200 glass-panel">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold dark:text-white text-slate-900">Real Project Execution</h4>
                    <p className="text-sm dark:text-slate-400 text-slate-600">Work directly under senior project leads executing live campaigns and technical workflows.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl dark:bg-slate-700/30 bg-slate-50 border dark:border-slate-700 border-slate-200 glass-panel">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold dark:text-white text-slate-900">Verified Experience Letter</h4>
                    <p className="text-sm dark:text-slate-400 text-slate-600">Receive an official Sky9 India Internship Completion Letter to enhance your resume.</p>
                  </div>
                </div>
              </div>
            )}

            {isCertification && (
              <div className="space-y-4">
                <div className="p-6 rounded-xl dark:bg-slate-700/30 bg-slate-50 border dark:border-slate-700 border-slate-200 glass-panel">
                  <h4 className="font-bold dark:text-white text-slate-900 mb-2">Sky9 Course Completion Certificate</h4>
                  <p className="text-sm dark:text-slate-400 text-slate-600">{parentCourse.certification}</p>
                </div>
              </div>
            )}
          </div>

          {/* Related Course Link */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-emerald-950 to-slate-900 text-white flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Associated Training Program</span>
              <h3 className="text-2xl font-bold font-heading mt-1">{parentCourse.title}</h3>
              <p className="text-sm text-slate-300 mt-1">{parentCourse.duration} • {parentCourse.mode}</p>
              <CoursePriceBlock fee={parentCourse.fee} tone="onDark" className="mt-4 inline-block min-w-[12rem]" />
            </div>
            <Link
              to={contentRepository.getCourseUrl(parentCourse.slug)}
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-colors shrink-0 flex items-center gap-2"
            >
              View Full Course
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Category FAQs */}
      <FAQSection
        items={getCategoryFaqs(type, parentCourse)}
        label={`${sectionBadge} FAQs`}
        description={`Get answers to common queries about ${title.toLowerCase()}`}
      />

      {/* CTA */}
      <CTASection
        title={`Enroll In ${parentCourse.shortTitle} Today`}
        subtitle="Start building practical skills with our expert mentors and integrated 1-month internship."
        primaryText="Enroll Now"
        primaryLink={contentRepository.getCourseUrl(parentCourse.slug)}
        secondaryText="Contact Admissions"
        secondaryLink="/contact-us"
        variant="green"
      />
    </div>
  );
}
