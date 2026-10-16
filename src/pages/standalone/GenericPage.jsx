import React, { useEffect } from 'react';
import { useLocation, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import contentRepository from '../../services/contentRepository';
import { getHeroImageForPage } from '../../data/heroImages';
import CTASection from '../../components/common/CTASection';
import PageHero from '../../components/common/PageHero';
import SeoHead from '../../components/common/SeoHead';
import FAQSection from '../../components/common/FAQSection';

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

export default function GenericPage() {
  const location = useLocation();
  // Route is /about/:slug or the catch-all /:audienceSlug (an unrelated
  // page type also rendered by this component); the page's own slug is
  // always the pathname's last segment regardless of nesting depth.
  const segments = location.pathname.split('/').filter(Boolean);
  const pageSlug = segments[segments.length - 1];
  const pagePath = location.pathname.replace(/\/$/, '');

  const page = contentRepository.getStandalonePage(pageSlug);
  const breadcrumbItems = contentRepository.getAutoBreadcrumbs(pagePath);

  useEffect(() => {
    if (page) {
      window.scrollTo(0, 0);
    }
  }, [page]);

  if (!page) {
    return <Navigate to="/about/about-overview" replace />;
  }

  const heroImg = getHeroImageForPage({ pageSlug });

  return (
    <div>
      <SeoHead
        title={page.title}
        description={page.subtitle}
        canonical={`https://sky9india.com${pagePath}`}
        breadcrumbs={breadcrumbItems}
      />
      {/* Hero */}
      <PageHero
        breadcrumbItems={breadcrumbItems}
        eyebrow={page.badge || 'Sky9 India • Pune'}
        title={page.title}
        description={page.subtitle}
        image={heroImg.url}
        imageWebp={heroImg.webp}
        imageAlt={heroImg.alt}
        imagePosition={heroImg.pos}
        primaryAction={{
          label: 'Explore Our Courses',
          to: '/courses'
        }}
        secondaryAction={{
          label: 'Contact Admissions',
          to: '/contact-us'
        }}
      />

      {/* Main Content */}
      <section className="py-8 sm:py-10 md:py-14 dark:bg-dark-bg bg-light-bg">
        <div className="max-w-4xl mx-auto px-4 space-y-6 sm:space-y-8">
          <div className="p-5 sm:p-8 rounded-2xl dark:bg-slate-800/50 bg-white border dark:border-slate-700 border-slate-200 glass-panel">
            <h2 className="text-2xl font-bold dark:text-white text-slate-900 mb-4 font-heading">
              Overview
            </h2>
            <p className="text-lg dark:text-slate-300 text-slate-600 leading-relaxed">
              {page.description}
            </p>
          </div>

          {page.highlights && page.highlights.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold dark:text-white text-slate-900 font-heading">
                Key Principles & Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {page.highlights.map((item, idx) => {
                  const isDanglingLast = idx === page.highlights.length - 1 && page.highlights.length % 2 !== 0;
                  return (
                    <div key={idx} className={`flex items-start gap-3 p-4 rounded-xl dark:bg-slate-800/50 bg-white border dark:border-slate-700 border-slate-200 glass-panel ${isDanglingLast ? 'sm:col-span-2' : ''}`}>
                      <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-sm font-medium dark:text-slate-300 text-slate-700">{item}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {page.pillars && page.pillars.length > 0 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold dark:text-white text-slate-900 font-heading">
                The 4 Pillars of Learning
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {page.pillars.map((pillar, idx) => {
                  const isDanglingLast = idx === page.pillars.length - 1 && page.pillars.length % 2 !== 0;
                  return (
                    <div key={idx} className={`p-6 rounded-2xl dark:bg-slate-800/50 bg-white border dark:border-slate-700 border-slate-200 glass-panel ${isDanglingLast ? 'sm:col-span-2' : ''}`}>
                      <span className="text-xs font-bold text-emerald-500 tracking-wider">PILLAR {pillar.step}</span>
                      <h4 className="text-lg font-bold dark:text-white text-slate-900 mt-1 mb-2">{pillar.title}</h4>
                      <p className="text-sm dark:text-slate-400 text-slate-600">{pillar.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Page FAQs */}
      <FAQSection
        items={page.faqs}
        label="Page FAQs"
        description={`Get answers to common queries about ${page.title}`}
      />

      {/* CTA */}
      <CTASection
        title="Ready To Start Your Practical Learning Journey?"
        subtitle="Explore our courses in Digital Marketing, AI & Automation, Software Testing, and ERP."
        primaryText="Explore Courses"
        primaryLink="/courses"
        secondaryText="Contact Us"
        secondaryLink="/contact-us"
        variant="green"
      />
    </div>
  );
}
