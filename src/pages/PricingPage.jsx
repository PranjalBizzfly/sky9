import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { IndianRupee, ShieldCheck, CheckCircle, ArrowRight } from 'lucide-react';
import contentRepository from '../services/contentRepository';
import { heroImages } from '../data/heroImages';
import { pricingFAQs } from '../data/siteData';
import PageHero from '../components/common/PageHero';
import SeoHead from '../components/common/SeoHead';
import SectionHeader from '../components/common/SectionHeader';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { PricingSection } from '../components/pricing/PricingSection';
import CourseComparisonTable from '../components/pricing/CourseComparisonTable';
import FAQSection from '../components/common/FAQSection';
import EnquiryForm from '../components/common/EnquiryForm';
import CTASection from '../components/common/CTASection';
import TypewriterHeading from '../components/common/animations/TypewriterHeading';
import SpotlightCard from '../components/common/animations/SpotlightCard';

const fadeInUp = { hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0 } };

export default function PricingPage() {
  const courses = contentRepository.getAllCourses();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <SeoHead
        title="Course Fees & Investment Plans"
        description="Clear, transparent pricing with no hidden charges. Every program includes live lab sessions, mentor guidance, and an integrated 1-month internship."
        canonical="https://sky9india.com/pricing"
      />
      {/* Hero */}
      <PageHero
        breadcrumbItems={[
          { label: 'Pricing & Fees', path: '/pricing' }
        ]}
        eyebrow="Transparent & Fair Fees • Pune"
        title="Pricing & Fees"
        description="Clear, transparent pricing with no hidden charges. Every program includes live lab sessions, mentor guidance, and an integrated 1-month internship."
        image={heroImages.pricing.url}
        imageWebp={heroImages.pricing.webp}
        imageAlt={heroImages.pricing.alt}
        imagePosition={heroImages.pricing.pos}
        primaryAction={{
          label: 'Compare All Plans',
          href: '#plans'
        }}
        secondaryAction={{
          label: 'Scholarship Enquiry',
          to: '/contact-us'
        }}
      />

      {/* Pricing Cards Grid */}
      <div id="plans" className="scroll-mt-24">
        <PricingSection courses={courses} />
      </div>

      {/* Program Comparison Section */}
      <section className="py-8 sm:py-10 md:py-12 dark:bg-slate-900/50 bg-slate-50 border-t border-b dark:border-slate-800 border-slate-200">
        <div className="max-w-7xl mx-auto px-4 space-y-4 sm:space-y-8">
          <SectionHeader
            badge="Side-by-Side Comparison"
            title="Compare Training Programs"
            subtitle="Compare duration, investment, delivery mode, and internship inclusion across all Sky9 courses."
          />
          <CourseComparisonTable courses={courses} />
        </div>
      </section>

      {/* Value Guarantees / Included Features */}
      <section className="py-8 sm:py-10 md:py-12 dark:bg-dark-bg bg-light-bg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 rounded-2xl dark:bg-slate-800/50 bg-white border dark:border-slate-700 border-slate-200 space-y-3 glass-panel">
              <ShieldCheck className="w-8 h-8 text-emerald-500" />
              <h3 className="text-lg font-bold dark:text-white text-slate-900 font-heading">No Hidden Fees</h3>
              <p className="text-xs dark:text-slate-400 text-slate-600 leading-relaxed">
                All course materials, lab simulations, mentorship sessions, and 1-month internship experiences are included in the stated fee.
              </p>
            </div>
            <div className="p-6 rounded-2xl dark:bg-slate-800/50 bg-white border dark:border-slate-700 border-slate-200 space-y-3 glass-panel">
              <CheckCircle className="w-8 h-8 text-emerald-500" />
              <h3 className="text-lg font-bold dark:text-white text-slate-900 font-heading">Integrated Internship</h3>
              <p className="text-xs dark:text-slate-400 text-slate-600 leading-relaxed">
                Every enrolled student gains real-world exposure executing live client campaigns and software testing tasks.
              </p>
            </div>
            <div className="p-6 rounded-2xl dark:bg-slate-800/50 bg-white border dark:border-slate-700 border-slate-200 space-y-3 glass-panel">
              <IndianRupee className="w-8 h-8 text-emerald-500" />
              <h3 className="text-lg font-bold dark:text-white text-slate-900 font-heading">Flexible Batch Options</h3>
              <p className="text-xs dark:text-slate-400 text-slate-600 leading-relaxed">
                Choose between Pune classroom batches or interactive pan-India live online sessions matching your schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions Enquiry Form */}
      <section id="enquiry" className="py-8 sm:py-10 md:py-12 dark:bg-slate-900/50 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeader
            badge="Admissions Counseling"
            title="Have Questions About Course Investment?"
            subtitle="Speak directly with our admissions team for batch availability and fee details."
          />
          <div className="mt-4 sm:mt-8">
            <EnquiryForm courseName="General Fee & Course Enquiry" />
          </div>
        </div>
      </section>

      {/* Pricing FAQs */}
      <FAQSection
        items={pricingFAQs}
        label="Pricing FAQs"
        description="Get answers to common queries about course fees and payment"
      />

      {/* CTA */}
      <CTASection
        title="Start Your Practical Training Journey Today"
        subtitle="Contact admissions at +91 7 319 419 519 or email info@Sky9India.com."
        primaryText="Contact Counseling"
        primaryLink="/contact-us"
        secondaryText="View Courses"
        secondaryLink="/courses"
        variant="green"
      />
    </div>
  );
}
