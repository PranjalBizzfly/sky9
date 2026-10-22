import React, { useState } from 'react';
import CourseCard from '../common/CourseCard';
import TypewriterHeading from '../common/animations/TypewriterHeading';
import SectionLabel from '../common/SectionLabel';

// 5 Core Sky9 Courses aligned with reference structure & data requirements
const courseCardsData = [
  {
    id: 'software-testing',
    slug: 'software-testing',
    title: 'Software Testing Training',
    description: 'Learn testing tools and techniques to build quality software and start a career in QA.',
    duration: '4-6 Months',
    fee: '₹35,000/-',
    mode: 'Online & Offline',
    certificate: 'Certificate of Completion',
    category: 'Technical',
    iconColor: 'bg-blue-600/15 text-blue-600 dark:bg-blue-600/20 dark:text-blue-400',
    iconType: 'code',
    learningAreas: [
      'Manual & STLC Fundamentals',
      'Functional & Regression Testing',
      'Test Cases & Documentation',
      'Jira Bug Tracking & Sprints'
    ]
  },
  {
    id: 'digital-marketing',
    slug: 'digital-marketing',
    title: 'Digital Marketing Training',
    description: 'Learn complete digital marketing strategies and grow your career in the online world.',
    duration: '2 Months',
    fee: '₹25,000/-',
    mode: 'Online & Offline',
    certificate: 'Certificate of Completion',
    category: 'Digital Marketing',
    iconColor: 'bg-blue-500/15 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400',
    iconType: 'megaphone',
    learningAreas: [
      'SEO & Content Strategy',
      'Social Media Marketing',
      'Google Ads & Meta Ads',
      'Lead Generation & Analytics'
    ]
  },
  {
    id: 'ai-automation',
    slug: 'ai-automation',
    title: 'AI & Automation Training',
    description: 'Explore AI tools and automation workflows to work smarter and increase productivity.',
    duration: '1 Month',
    fee: '₹15,000/-',
    mode: 'Online & Offline',
    certificate: 'Certificate of Completion',
    category: 'AI & Automation',
    isPopular: true,
    iconColor: 'bg-emerald-500/15 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400',
    iconType: 'cpu',
    learningAreas: [
      'Generative AI Platforms',
      'Structured Prompting',
      'No-Code Workflow Zapier',
      'AI Business Applications'
    ]
  },
  {
    id: 'digital-marketing-for-business-owners',
    slug: 'digital-marketing-for-business-owners',
    title: 'Digital Marketing for Business Owners',
    description: 'Build your online presence, get more leads and grow your business with proven digital strategies.',
    duration: '7 Days',
    fee: '₹7,000/-',
    mode: 'Online & Offline',
    certificate: 'Certificate of Completion',
    category: 'Business',
    iconColor: 'bg-emerald-500/15 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400',
    iconType: 'chart',
    learningAreas: [
      'Automated Lead Funnels',
      'Google Maps Visibility',
      'Local Social Media Ads',
      'Customer Acquisition'
    ]
  },
  {
    id: 'erp',
    slug: 'erp',
    title: 'ERP Training',
    description: 'Get hands-on training in ERP systems and learn how to manage business processes effectively.',
    duration: '7-8 Days',
    fee: 'As Applicable',
    mode: 'Online & Offline',
    certificate: 'Certificate of Completion',
    category: 'Business',
    iconColor: 'bg-teal-500/15 text-teal-600 dark:bg-teal-500/20 dark:text-teal-400',
    iconType: 'database',
    learningAreas: [
      'ERP Architecture Basics',
      'Business Process Mapping',
      'Purchase, Sales & Inventory',
      'Operations Management'
    ]
  }
];

const categories = [
  'All Courses',
  'Digital Marketing',
  'AI & Automation',
  'Technical',
  'Business'
];

export default function PopularCourses() {
  const [activeTab, setActiveTab] = useState('All Courses');

  const filteredCourses = activeTab === 'All Courses'
    ? courseCardsData
    : courseCardsData.filter(c => {
        if (activeTab === 'Digital Marketing') return c.category === 'Digital Marketing' || c.id === 'digital-marketing';
        if (activeTab === 'AI & Automation') return c.category === 'AI & Automation';
        if (activeTab === 'Technical') return c.category === 'Technical' || c.id === 'ai-automation' || c.id === 'software-testing';
        if (activeTab === 'Business') return c.category === 'Business';
        return true;
      });

  return (
    <section className="pt-6 sm:pt-10 md:pt-14 pb-4 sm:pb-6 md:pb-8 bg-slate-50/70 dark:bg-slate-900/60 text-slate-900 dark:text-white transition-colors duration-300 relative overflow-hidden">
      {/* Soft Ambient Radial Glows visible through the glass cards */}
      <div className="absolute top-1/4 left-1/4 w-[550px] h-[320px] bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[280px] bg-teal-500/10 dark:bg-teal-500/15 rounded-full blur-[110px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header Section with Glass Badge */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-6 sm:mb-10">
          <SectionLabel>OUR PRACTICAL COURSES</SectionLabel>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-heading leading-tight">
            <TypewriterHeading text="Build In-Demand Skills For A Better Career" />
          </h2>

          <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            Choose from our industry-focused programs designed to give you practical skills, hands-on experience, and authentic career opportunities.
          </p>
        </div>

        {/* Category Pill Filter Bar with Smooth Mobile Horizontal Scrolling & Glassmorphic Style */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar py-2 px-1 gap-2 sm:gap-2.5 mb-8 sm:mb-12 max-w-full -mx-4 sm:mx-0 px-4 sm:px-0 flex-nowrap sm:flex-wrap">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`shrink-0 whitespace-nowrap px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold transition duration-300 cursor-pointer backdrop-blur-xl ${
                activeTab === tab
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 border border-emerald-400/50 scale-105'
                  : 'bg-white/80 dark:bg-slate-900/80 hover:bg-emerald-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-emerald-700 dark:hover:text-emerald-300 border border-slate-200/90 dark:border-slate-700/70 shadow-sm hover:border-emerald-500/50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Course Cards Grid — flex-wrap so a filtered/partial row centers instead of leaving blank columns */}
        <div className="flex flex-wrap justify-center gap-5">
          {filteredCourses.map((course, index) => (
            <div key={course.id} className="w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(20%-1rem)]">
              <CourseCard course={course} index={index} />
            </div>
          ))}
        </div>

        {/* Bottom Tagline */}
        <div className="mt-8 pt-5 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-center gap-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
          <span className="w-12 h-px bg-slate-300 dark:bg-slate-800"></span>
          <span>Learn Today &nbsp;•&nbsp; Build Your Tomorrow</span>
          <span className="w-12 h-px bg-slate-300 dark:bg-slate-800"></span>
        </div>

      </div>
    </section>
  );
}
