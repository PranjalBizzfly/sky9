/**
 * Sky9 India, Structured CTA Configurations (Phase 11)
 * 
 * Provides centralized CTA labels, titles, descriptions, and action defaults.
 */

export const ctaConfigurations = {
  course: {
    badge: 'Admissions Open',
    title: 'Start Your Practical Skill Journey Today',
    subtitle: 'Speak with our admissions counselors to pick classroom or live online batch timings in Pune & Pan-India.',
    primaryText: 'Enquire Now',
    secondaryText: 'Download Syllabus',
    variant: 'green',
    ctaSource: 'course-footer-cta',
  },
  'business-owner': {
    badge: '7-Day Business Growth',
    title: 'Transform Your Business Lead Generation',
    subtitle: 'Learn automated lead funnels, local Google Maps ranking, and AI productivity tools for entrepreneurs.',
    primaryText: 'Talk to Growth Counselor',
    secondaryText: 'View Program Details',
    variant: 'green',
    ctaSource: 'business-owner-cta',
  },
  internship: {
    badge: 'Practical Work Experience',
    title: 'Gain 1-Month Integrated Internship Experience',
    subtitle: 'Execute real client projects, build a verified portfolio, and earn an official Sky9 Experience Certificate.',
    primaryText: 'Enquire About Internship',
    secondaryText: 'View Internship Tracks',
    variant: 'emerald',
    ctaSource: 'internship-cta',
  },
  certification: {
    badge: 'Verified Credentials',
    title: 'Get Sky9 & Google/Meta Certified',
    subtitle: 'Validate your skills with verifiable digital certificates to boost your resume and LinkedIn profile.',
    primaryText: 'Get Certified',
    secondaryText: 'Explore Certifications',
    variant: 'green',
    ctaSource: 'certification-cta',
  },
  career: {
    badge: 'Placement Assistance',
    title: 'Accelerate Your Job & Placement Pathway',
    subtitle: 'Skill gap assessment, technical mock interviews, resume optimization, and direct hiring partner referrals.',
    primaryText: 'Schedule Placement Guidance',
    secondaryText: 'View Job Roles',
    variant: 'emerald',
    ctaSource: 'career-cta',
  },
  general: {
    badge: 'Ready to Transform Your Career?',
    title: 'Take the First Step with Sky9 India',
    subtitle: 'Join thousands of practical learners building employable digital, AI, testing, and ERP skills in Pune.',
    primaryText: 'Contact Admissions',
    secondaryText: 'View All Programs',
    variant: 'green',
    ctaSource: 'general-cta',
  },
};

export function getCtaConfig(type = 'general') {
  return ctaConfigurations[type] || ctaConfigurations.general;
}
