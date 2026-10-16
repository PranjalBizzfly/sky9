/**
 * Sky9 India, Content Models & Factory Schemas
 * Standardized data models for CMS Readiness, separation of content & UI,
 * error-safe property access, and 500+ page scalability.
 */

// 1. SEO Model
export function createSeoModel(seo = {}) {
  const title = seo.title || 'Sky9 India, Practical Training Institute';
  const description = seo.description || 'Premier practical training institute in Pune offering Digital Marketing, AI & Automation, Software Testing, and ERP training.';
  return {
    title,
    description,
    canonical: seo.canonical || 'https://sky9india.com',
    keywords: seo.keywords || ['Sky9 India', 'Digital Marketing', 'AI Training', 'Software Testing', 'ERP Training'],
    ogTitle: seo.ogTitle || title,
    ogDescription: seo.ogDescription || description,
    ogImage: seo.ogImage || '/sky9-logo.svg',
  };
}

// 2. Image Model
export function createImageModel(img = {}) {
  return {
    src: img.src || '/sky9-logo.svg',
    alt: img.alt || 'Sky9 India Training',
    title: img.title || 'Sky9 India',
    category: img.category || 'general',
    width: img.width || 1200,
    height: img.height || 630,
  };
}

// 3. Pricing Model
export function createPricingModel(pricing = {}) {
  return {
    amount: pricing.amount || 0,
    fee: pricing.fee || 'Contact Admissions',
    currency: pricing.currency || 'INR',
    duration: pricing.duration || 'Flexible',
    mode: pricing.mode || 'Online & Offline',
    certificate: pricing.certificate || 'Sky9 Certificate of Completion',
    internship: pricing.internship || '1-Month Internship Included',
    availability: pricing.availability || 'Upcoming Batch Available',
    ctaText: pricing.ctaText || 'Enroll Now',
  };
}

// 4. Workflow Model
export function createWorkflowModel(steps = []) {
  if (!Array.isArray(steps) || steps.length === 0) {
    return [
      { step: '01', title: 'Course Selection', description: 'Choose your desired skill pathway.' },
      { step: '02', title: 'Enrollment & Training', description: 'Interactive lab sessions & mentor guidance.' },
      { step: '03', title: 'Practical Internship', description: 'Work on live client campaigns & software projects.' },
      { step: '04', title: 'Certification & Placement', description: 'Receive verified certificate & career referral.' }
    ];
  }
  return steps.map((s, idx) => ({
    step: s.step || String(idx + 1).padStart(2, '0'),
    title: s.title || 'Workflow Step',
    description: s.description || s.desc || 'Step details.',
    icon: s.icon || null,
  }));
}

// 5. Course Model
export function createCourseModel(data = {}) {
  const slug = data.slug || 'digital-marketing';
  return {
    id: data.id || slug,
    type: 'course',
    status: data.status || 'published',
    title: data.title || 'Sky9 Training Course',
    shortTitle: data.shortTitle || data.title || 'Sky9 Course',
    subtitle: data.subtitle || 'Industry-Aligned Practical Program',
    slug,
    category: data.category || 'Technology',
    icon: data.icon || null,
    color: data.color || 'emerald',
    featured: Boolean(data.featured),
    duration: data.duration || '2 Months',
    fee: data.fee || '₹25,000',
    mode: data.mode || 'Online & Offline',
    certification: data.certification || 'Sky9 Certificate of Completion',
    internship: data.internship || '1-Month Internship Included',
    audience: Array.isArray(data.audience) ? data.audience : ['Students', 'Graduates', 'Professionals'],
    overview: data.overview || 'Comprehensive practical course designed to build job-ready skills.',
    benefits: Array.isArray(data.benefits) ? data.benefits : [],
    whyChoose: data.whyChoose || 'Focus on practical learning by doing with live projects.',
    careerOpportunities: Array.isArray(data.careerOpportunities) ? data.careerOpportunities : [],
    modules: Array.isArray(data.modules) ? data.modules : [],
    faqs: Array.isArray(data.faqs) ? data.faqs : [],
    image: createImageModel(data.image),
    pricing: createPricingModel({ fee: data.fee, duration: data.duration, mode: data.mode }),
    workflow: createWorkflowModel(data.workflow),
    seo: createSeoModel({ title: `${data.title || 'Course'} | Sky9 India`, description: data.overview }),
  };
}

// 6. Topic Model
export function createTopicModel(data = {}) {
  const slug = data.slug || 'topic';
  const parent = data.parent || 'digital-marketing';
  return {
    id: data.id || `${parent}-${slug}`,
    type: 'topic',
    status: data.status || 'published',
    title: data.title || 'Training Topic Module',
    subtitle: data.subtitle || 'In-Depth Practical Skill Module',
    slug,
    parent,
    category: data.category || parent,
    icon: data.icon || null,
    overview: data.overview || 'Detailed topic breakdown with practical assignments and tool simulations.',
    topics: Array.isArray(data.topics) ? data.topics : [],
    keyPoints: Array.isArray(data.keyPoints) ? data.keyPoints : data.topics || [],
    relatedTopics: Array.isArray(data.relatedTopics) ? data.relatedTopics : [],
    image: createImageModel(data.image),
    faqs: Array.isArray(data.faqs) ? data.faqs : [],
    seo: createSeoModel({ title: `${data.title || 'Topic'} Module | Sky9 India`, description: data.overview }),
  };
}

// 7. General Page Model
export function createPageModel(data = {}) {
  const slug = data.slug || 'page';
  return {
    id: data.id || slug,
    type: data.type || 'page',
    status: data.status || 'published',
    title: data.title || 'Sky9 India',
    // Breadcrumb/nav label is the canonical page name; falls back to the
    // full title only when a page doesn't need a shorter distinct label.
    breadcrumbLabel: data.breadcrumbLabel || data.title || 'Sky9 India',
    subtitle: data.subtitle || '',
    slug,
    badge: data.badge || 'Sky9 India',
    description: data.description || '',
    fullDescription: data.fullDescription || data.description || '',
    highlights: Array.isArray(data.highlights) ? data.highlights : [],
    pillars: Array.isArray(data.pillars) ? data.pillars : [],
    faqs: Array.isArray(data.faqs) ? data.faqs : [],
    image: createImageModel(data.image),
    seo: createSeoModel({ title: `${data.title || 'Page'} | Sky9 India`, description: data.description }),
  };
}
