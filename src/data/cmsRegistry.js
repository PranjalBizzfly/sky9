import {
  createCourseModel,
  createTopicModel,
  createPageModel,
  createPricingModel,
  createWorkflowModel,
  createImageModel
} from '../models/contentModels';
import { courses, companyInfo, whyChooseUs, learningPillars, testimonials, stats, internshipData, certificationData, careerData, generalFAQs } from './siteData';
import { courseTopics, standalonePages, audiencePages, locationCities, resourceCategories } from './sitemapData';

// Normalized Course Collection
export const cmsCourses = courses.map(course => createCourseModel({
  ...course,
  status: 'published',
}));

// Normalized Topic Collection
export const cmsTopics = [];
Object.keys(courseTopics).forEach(courseSlug => {
  const topicsList = courseTopics[courseSlug] || [];
  topicsList.forEach(topic => {
    cmsTopics.push(createTopicModel({
      ...topic,
      parent: courseSlug,
      status: 'published',
    }));
  });
});

// Normalized Standalone & Audience Page Collection
export const cmsStandalonePages = standalonePages.map(page => createPageModel({
  ...page,
  status: 'published',
}));

export const cmsAudiencePages = audiencePages.map(aud => createPageModel({
  ...aud,
  highlights: aud.benefits || aud.highlights,
  type: 'audience',
  status: 'published',
}));

// Image Asset Registry for 500+ pages
export const cmsImageRegistry = {
  defaultLogo: createImageModel({ src: '/sky9-logo.svg', alt: 'Sky9 India Logo', category: 'brand' }),
  defaultLogoLight: createImageModel({ src: '/sky9-logo-light.svg', alt: 'Sky9 India Light Logo', category: 'brand' }),
  digitalMarketing: createImageModel({ src: '/sky9-logo-icon.svg', alt: 'Digital Marketing Training Pune', category: 'marketing' }),
  aiAutomation: createImageModel({ src: '/sky9-logo-icon.svg', alt: 'AI & Automation Training Pune', category: 'technology' }),
  softwareTesting: createImageModel({ src: '/sky9-logo-icon.svg', alt: 'Software Testing Training Pune', category: 'qa' }),
  erp: createImageModel({ src: '/sky9-logo-icon.svg', alt: 'ERP Systems Training Pune', category: 'business' }),
};

// Workflows Registry
export const cmsWorkflows = {
  student: createWorkflowModel([
    { step: '01', title: 'Track & Course Selection', description: 'Choose Digital Marketing, AI & Automation, Software QA, or ERP.' },
    { step: '02', title: 'Counseling & Batch Option', description: 'Select Pune classroom or live online batch timings.' },
    { step: '03', title: 'Practical Lab Training', description: 'Master industry tools and live campaign/software lab assignments.' },
    { step: '04', title: '1-Month Integrated Internship', description: 'Execute real client tasks under senior mentor supervision.' },
    { step: '05', title: 'Certification & Referrals', description: 'Receive verified certificate, resume optimization, and placement referrals.' }
  ]),
  business: createWorkflowModel([
    { step: '01', title: 'Business Goal Analysis', description: 'Pinpoint lead generation and local visibility bottlenecks.' },
    { step: '02', title: '7-Day Growth Bootcamp', description: 'Intensive non-technical sessions designed for business owners.' },
    { step: '03', title: 'Lead Funnel & Ads Setup', description: 'Build automated WhatsApp funnels and local Google/Meta ad campaigns.' },
    { step: '04', title: 'Automation & Retention', description: 'Deploy simple AI tools and customer repeat-purchase workflows.' }
  ]),
  internship: createWorkflowModel([
    { step: '01', title: 'Course Integration', description: 'Enroll in Sky9 core practical training program.' },
    { step: '02', title: 'Supervisor Orientation', description: 'Assigned senior project mentor and live tool access.' },
    { step: '03', title: 'Real Task Execution', description: 'Build campaigns, automation workflows, or software bug reports.' },
    { step: '04', title: 'Verified Certificate', description: 'Earn official Sky9 Internship Experience Certificate.' }
  ])
};

// Global CMS Registry export
export const cmsRegistry = {
  company: companyInfo,
  courses: cmsCourses,
  topics: cmsTopics,
  standalonePages: cmsStandalonePages,
  audiencePages: cmsAudiencePages,
  locations: locationCities,
  resources: resourceCategories,
  workflows: cmsWorkflows,
  testimonials,
  stats,
  internship: internshipData,
  certification: certificationData,
  career: careerData,
  generalFAQs,
  images: cmsImageRegistry,
};
