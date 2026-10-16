import React, { useEffect } from 'react';
import { useParams, useLocation, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, BookOpen, ShieldCheck, Star } from 'lucide-react';
import seoPageEngine from '../../services/seoPageEngine';
import contentRepository from '../../services/contentRepository';
import { getTopicHeroImage } from '../../data/heroImages';
import SectionHeader from '../../components/common/SectionHeader';
import CTASection from '../../components/common/CTASection';
import RelatedContent from '../../components/common/RelatedContent';
import ProcessSection, { studentWorkflow } from '../../components/workflow/ProcessSection';
import FAQSection from '../../components/common/FAQSection';
import SeoHead from '../../components/common/SeoHead';
import PageHero from '../../components/common/PageHero';

export default function SeoLandingPage() {
  const location = useLocation();
  const rawPath = location.pathname.replace(/^\/+|\/+$/g, '');

  const page = seoPageEngine.getPageBySlug(rawPath);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  if (!page) {
    return <Navigate to="/resources/visual-sitemap-directory" replace />;
  }

  // Redirect legacy slugs (e.g. without "-and-") to canonical page URL
  if (rawPath !== page.slug) {
    return <Navigate to={`/${page.slug}`} replace />;
  }

  // getAutoBreadcrumbs only resolves the hub/category ancestry from the URL;
  // this leaf page itself (the actual current page) still needs its own
  // crumb appended so the trail always ends on "you are here", not one
  // level up. Strip the " | Sky9 India" SEO-title suffix for a clean label.
  const title = (page.title || '').replace(/\s*\|\s*Sky9 India\s*$/i, '');
  const breadcrumbItems = [
    ...contentRepository.getAutoBreadcrumbs(location.pathname),
    { label: title },
  ];

  const { subtitle, category, description, content, highlights, relatedCourse, topicObj } = page;
  const heroImg = getTopicHeroImage(topicObj?.slug, relatedCourse?.slug);

  return (
    <div>
      <SeoHead
        title={page.seo?.title || `${title} | Sky9 India`}
        description={page.seo?.description || description}
        canonical={page.canonical || `https://sky9india.com/${rawPath}`}
        robots={page.seo?.robots || 'index, follow'}
        breadcrumbs={breadcrumbItems}
        course={relatedCourse}
      />
      {/* Hero */}
      <PageHero
        breadcrumbItems={breadcrumbItems}
        eyebrow={category || 'Sky9 Specialization • Pune'}
        title={title}
        description={subtitle || description}
        image={heroImg.url}
        imageWebp={heroImg.webp}
        imageAlt={heroImg.alt}
        imagePosition={heroImg.pos}
        primaryAction={{
          label: relatedCourse ? `Enroll in ${relatedCourse.shortTitle}` : 'Enroll Now',
          to: relatedCourse ? contentRepository.getCourseUrl(relatedCourse.slug) : '/courses'
        }}
        secondaryAction={{
          label: 'Contact Admissions',
          to: '/contact-us'
        }}
      />

      {/* Main Content */}
      <section className="py-8 sm:py-10 md:py-14 dark:bg-dark-bg bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 space-y-6 sm:space-y-8">
          {/* Detailed Overview */}
          <div className="p-5 sm:p-8 rounded-2xl dark:bg-slate-800/50 bg-white border dark:border-slate-700 border-slate-200 shadow-sm glass-panel">
            <h2 className="text-2xl font-bold dark:text-white text-slate-900 mb-4 font-heading">
              Overview & Learning Framework
            </h2>
            <p className="text-lg dark:text-slate-300 text-slate-600 leading-relaxed mb-6">
              {content || description}
            </p>

            {highlights && highlights.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {highlights.map((item, idx) => {
                  const isDanglingLast = idx === highlights.length - 1 && highlights.length % 2 !== 0;
                  return (
                    <div
                      key={idx}
                      className={`flex items-start gap-3 p-4 rounded-xl dark:bg-slate-700/30 bg-slate-50 border dark:border-slate-700 border-slate-200 glass-panel ${isDanglingLast ? 'sm:col-span-2' : ''}`}
                    >
                      <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-sm font-semibold dark:text-white text-slate-900">{item}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Related Course Link Card */}
          {relatedCourse && (
            <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-emerald-950 text-white flex flex-col md:flex-row justify-between items-center gap-6 border border-emerald-500/20">
              <div>
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Associated Practical Program</span>
                <h3 className="text-2xl font-bold font-heading mt-1">{relatedCourse.title}</h3>
                <p className="text-sm text-slate-300 mt-1">{relatedCourse.duration} • {relatedCourse.fee} • {relatedCourse.mode}</p>
              </div>
              <Link
                to={contentRepository.getCourseUrl(relatedCourse.slug)}
                className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-colors shrink-0 flex items-center gap-2"
              >
                View Full Program
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection
        title="Your Skill Mastery Progression"
        subtitle="A step-by-step practical learning journey designed for real-world confidence."
        steps={studentWorkflow}
        badge="Structured Roadmap"
      />

      {/* Internal Linking & Related Pages */}
      <RelatedContent
        currentSlug={rawPath}
        category={category}
        relatedCourse={relatedCourse}
      />

      {/* Page FAQs */}
      <FAQSection
        items={page.faqs}
        label="Page FAQs"
        description={`Get answers to common queries about ${title}`}
      />

      {/* CTA Section */}
      <CTASection
        title={`Enroll In ${title} Training`}
        subtitle="Speak with our Pune admissions team to pick classroom or live online batch timings."
        primaryText="Contact Admissions"
        primaryLink="/contact-us"
        secondaryText="View Full Sitemap"
        secondaryLink="/resources/visual-sitemap-directory"
        variant="green"
      />
    </div>
  );
}
