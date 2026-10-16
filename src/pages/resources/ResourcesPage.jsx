import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Award, Wrench, ChevronRight, HelpCircle } from 'lucide-react';
import { resourceCategories } from '../../data/sitemapData';
import { generalFAQs, resourceTypeFAQs } from '../../data/siteData';
import { heroImages } from '../../data/heroImages';
import PageHero from '../../components/common/PageHero';
import SeoHead from '../../components/common/SeoHead';
import FAQSection from '../../components/common/FAQSection';
import CTASection from '../../components/common/CTASection';
import TypewriterHeading from '../../components/common/animations/TypewriterHeading';

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

export default function ResourcesPage() {
  const { resourceType } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [resourceType]);

  const categoryMeta = {
    'frequently-asked-questions': {
      title: 'Frequently Asked Questions',
      description: 'Quick answers to common questions about course fees, batch schedules, practical internship projects, and certifications.',
      eyebrow: 'Knowledge Base • FAQs',
      image: heroImages.faqs
    },
    'career-skill-guides': {
      title: 'Career & Skill Guides',
      description: 'In-depth step-by-step roadmaps, skill blueprints, and comprehensive guides for Digital Marketing, AI, Software QA, and ERP.',
      eyebrow: 'Knowledge Base • Guides',
      image: heroImages.guides
    },
    'student-success-stories': {
      title: 'Student Success Stories',
      description: 'Real documented student campaign metrics, software QA bug resolution portfolios, and local business growth stories.',
      eyebrow: 'Success Portfolios • Case Studies',
      image: heroImages['case-studies']
    },
    'industry-tool-index': {
      title: 'Industry Tool Index',
      description: 'Explore the full modern software stack taught at Sky9 India: Google Ads, Meta Ads Manager, GA4, Jira, Postman, Zapier, Python, and ERP.',
      eyebrow: 'Practical Stack • Tools Directory',
      image: heroImages.tools
    },
    ebooks: {
      title: 'Free E-Books & Skill Playbooks',
      description: 'Download actionable PDF handbooks, interview preparation playbooks, and digital marketing cheat-sheets.',
      eyebrow: 'Downloads • E-Books',
      image: heroImages.ebooks
    },
    checklists: {
      title: 'Audit Checklists & QA Launch Sheets',
      description: 'Production-ready technical SEO audit sheets, QA test execution checklists, and social media campaign launch protocols.',
      eyebrow: 'Standard Operating Procedures • Checklists',
      image: heroImages.checklists
    },
    templates: {
      title: 'Ready-to-Use Templates & Frameworks',
      description: 'Download test scenario matrices, client proposal templates, Looker Studio reporting dashboards, and email sequences.',
      eyebrow: 'Actionable Resources • Templates',
      image: heroImages.templates
    },
  };

  const currentMeta = (resourceType && categoryMeta[resourceType.toLowerCase()]) || {
    title: 'Learning Resources',
    description: 'Access career guides, skill roadmaps, tool indices, student success stories, and frequently asked questions.',
    eyebrow: 'Sky9 Knowledge Hub • Pune',
    image: heroImages.resources
  };

  // The banner breadcrumb uses each category's short canonical nav name
  // (e.g. "Career & Skill Guides"), never the longer on-page marketing
  // title used for the hero H1 (e.g. "Practical Tech & Career Guides").
  const canonicalCategoryLabel = resourceType
    ? resourceCategories.find(c => c.slug === resourceType.toLowerCase())?.title || currentMeta.title
    : null;

  return (
    <div>
      <SeoHead
        title={currentMeta.title}
        description={currentMeta.description}
        canonical={`https://sky9india.com/resources/${resourceType || 'learning-overview'}`}
      />
      {/* Hero */}
      <PageHero
        breadcrumbItems={[
          { label: 'Resources', path: '/resources/learning-overview' },
          resourceType
            ? { label: canonicalCategoryLabel, path: `/resources/${resourceType}` }
            : { label: 'Learning Resources' }
        ]}
        eyebrow={currentMeta.eyebrow}
        title={currentMeta.title}
        description={currentMeta.description}
        image={currentMeta.image.url}
        imageWebp={currentMeta.image.webp}
        imageAlt={currentMeta.image.alt}
        imagePosition={currentMeta.image.pos}
        primaryAction={{
          label: resourceType ? 'Browse Categories' : 'Browse Guides & Tools',
          href: '#resources-grid'
        }}
        secondaryAction={{
          label: 'Ask Admissions',
          to: '/contact-us'
        }}
      />

      {/* Main Content */}
      <section className="py-8 sm:py-10 md:py-14 dark:bg-dark-bg bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 space-y-8 sm:space-y-10">
          {/* Resource Categories Grid */}
          {!resourceType && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch gap-6">
              {resourceCategories.map((cat, idx) => {
                const CatIcon = cat.icon;
                const isDanglingLast = idx === resourceCategories.length - 1 && resourceCategories.length % 2 !== 0;
                return (
                  <Link
                    key={cat.slug}
                    to={`/resources/${cat.slug}`}
                    className={`h-full p-6 rounded-2xl dark:bg-slate-800/50 bg-white border dark:border-slate-700 border-slate-200 hover:border-emerald-500/50 transition group flex flex-col justify-between glass-panel ${isDanglingLast ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 text-emerald-500 group-hover:scale-110 transition-transform">
                        <CatIcon className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-lg dark:text-white text-slate-900 mb-2 group-hover:text-emerald-500 transition-colors">
                        {cat.title}
                      </h3>
                      <p className="text-xs dark:text-slate-400 text-slate-600 leading-relaxed">{cat.desc}</p>
                    </div>
                    <span className="mt-6 inline-flex items-center text-xs font-bold text-emerald-500 group-hover:translate-x-1 transition-transform">
                      Explore {cat.title} →
                    </span>
                  </Link>
                );
              })}
            </div>
          )}

        </div>
      </section>

      {/* Category-Specific FAQs */}
      {(!resourceType || resourceType === 'frequently-asked-questions') && (
        <FAQSection
          items={generalFAQs}
          label="Answers to Common Questions"
          title="Sky9 India General FAQs"
          description="Everything you need to know about our practical courses, internships, and admissions."
        />
      )}
      {resourceType && resourceType !== 'frequently-asked-questions' && (
        <FAQSection
          items={resourceTypeFAQs[resourceType.toLowerCase()]}
          label={`${currentMeta.title} FAQs`}
          description={`Get answers to common queries about ${currentMeta.title.toLowerCase()}`}
        />
      )}

      {/* CTA */}
      <CTASection
        title="Have Questions About Sky9 Programs?"
        subtitle="Our admissions team is available via phone or email to answer any specific query."
        primaryText="Contact Admissions"
        primaryLink="/contact-us"
        secondaryText="View Courses"
        secondaryLink="/courses"
        variant="green"
      />
    </div>
  );
}
