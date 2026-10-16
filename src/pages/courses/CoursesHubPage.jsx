import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Search, Filter } from 'lucide-react';
import contentRepository from '../../services/contentRepository';
import { heroImages } from '../../data/heroImages';
import { coursesHubFAQs } from '../../data/siteData';
import PageHero from '../../components/common/PageHero';
import SeoHead from '../../components/common/SeoHead';
import CourseCard from '../../components/common/CourseCard';
import Breadcrumb from '../../components/common/Breadcrumb';
import FAQSection from '../../components/common/FAQSection';
import { ProcessSection, studentWorkflow } from '../../components/workflow/ProcessSection';
import CTASection from '../../components/common/CTASection';
import Badge from '../../components/ui/Badge';
import TypewriterHeading from '../../components/common/animations/TypewriterHeading';
import { StaggerContainer, StaggerItem } from '../../components/common/animations/ScrollReveal';

const categories = ['All', 'Digital Marketing', 'Technology', 'Quality Assurance', 'Business'];

export default function CoursesHubPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const allCourses = contentRepository.getAllCourses();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredCourses = allCourses.filter((course) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      course.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      (selectedCategory === 'Digital Marketing' && course.slug.includes('digital-marketing')) ||
      (selectedCategory === 'Quality Assurance' && course.slug.includes('software-testing')) ||
      (selectedCategory === 'Business' && (course.slug.includes('erp') || course.slug.includes('business')));

    const matchesSearch =
      !searchQuery.trim() ||
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.overview.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <SeoHead
        title="Explore Training Courses"
        description="Master Digital Marketing, AI & Automation, Software Testing, and ERP with 100% practical lab assignments, live projects, and integrated 1-month internships."
        canonical="https://sky9india.com/courses"
      />
      {/* Hero Section */}
      <PageHero
        breadcrumbItems={[
          { label: 'Courses' }
        ]}
        eyebrow="Practical Career Programs • Pune"
        title="Courses"
        description="Master Digital Marketing, AI & Automation, Software Testing, and ERP with 100% practical lab assignments, live projects, and integrated 1-month internships."
        image={heroImages.coursesHub.url}
        imageWebp={heroImages.coursesHub.webp}
        imageAlt={heroImages.coursesHub.alt}
        imagePosition={heroImages.coursesHub.pos}
        primaryAction={{
          label: 'View All 5 Tracks',
          href: '#courses-grid'
        }}
        secondaryAction={{
          label: 'Book Counseling',
          to: '/contact-us'
        }}
      />

      {/* Course Discovery & Grid */}
      <section className="py-8 sm:py-10 md:py-14 dark:bg-dark-bg bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 space-y-6 sm:space-y-8">
          
          {/* Controls: Search & Category Tabs */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b dark:border-slate-800 border-slate-200">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm dark:bg-slate-900 bg-slate-50 dark:text-white text-slate-900 dark:border-slate-700 border-slate-300 focus:outline-none focus:border-emerald-500"
              />
            </div>

            {/* Category Filter Tabs with Smooth Mobile Touch Scroll */}
            <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto no-scrollbar py-1 flex-nowrap sm:flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`shrink-0 whitespace-nowrap px-4 py-2 rounded-xl text-xs font-semibold transition ${
                    selectedCategory === cat
                      ? 'bg-emerald-500 text-white shadow-md'
                      : 'dark:bg-slate-800 bg-slate-100 dark:text-slate-300 text-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Courses Grid — flex-wrap so a filtered/partial row centers instead of leaving blank columns */}
          {filteredCourses.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-8">
              {filteredCourses.map((course, idx) => (
                <div key={course.id || idx} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)]">
                  <CourseCard course={course} index={idx} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 p-8 rounded-2xl dark:bg-slate-800/50 bg-white border dark:border-slate-700 border-slate-200 space-y-3 glass-panel">
              <Filter className="w-10 h-10 text-slate-400 mx-auto" />
              <h3 className="text-xl font-bold dark:text-white text-slate-900 font-heading">No Courses Match Your Filter</h3>
              <p className="text-sm dark:text-slate-400 text-slate-600">Try adjusting your search query or category filter.</p>
              <button
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="px-4 py-2 bg-emerald-500 text-white text-xs font-semibold rounded-lg hover:bg-emerald-600 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* Student Learning Journey */}
      <ProcessSection
        title="Your Practical Learning Methodology"
        subtitle="Step-by-step pathway from course enrollment to 1-month internship and career placement."
        steps={studentWorkflow}
      />

      {/* Courses Hub FAQs */}
      <FAQSection
        items={coursesHubFAQs}
        label="Courses FAQs"
        description="Get answers to common queries about choosing a Sky9 India course"
        className="py-8 sm:py-10 md:py-14 bg-slate-50 dark:bg-slate-800/50"
      />

      {/* CTA */}
      <CTASection
        title="Ready To Build Job-Ready Skills?"
        subtitle="Speak with our admissions counselors to pick the best batch timing and mode for your schedule."
        primaryText="Talk to Counseling"
        primaryLink="/contact-us"
        secondaryText="View Design System"
        secondaryLink="/resources/ui-design-system"
        variant="green"
      />
    </div>
  );
}
