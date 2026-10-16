/**
 * Sky9 India, Content Repository Service
 * Provides an error-safe, CMS-ready data access layer for all components and templates.
 * Prevents runtime errors by guaranteeing default fallbacks and safe nullish handling.
 */

import { cmsRegistry } from '../data/cmsRegistry';
import { createCourseModel, createTopicModel, createPageModel } from '../models/contentModels';

// Courses whose nav category differs from the course's own slug get an extra
// leading path segment for that category (e.g. Business Owners is its own
// top-level nav section, separate from the generic "Courses" megamenu, where
// category and course are otherwise the same thing and need no extra segment).
// Keyed by the course's own internal slug field.
const COURSE_CATEGORY_SEGMENT = {
  'digital-marketing-for-business-owners': 'business-owners',
};

// Navbar-exact display label for each of those own-category segments (the
// breadcrumb's category crumb must always show the real navbar category
// name, never the generic "Courses" megamenu label).
const CATEGORY_SEGMENT_LABELS = {
  'business-owners': 'Business Owners',
};

// A course nested under its own category root can use a URL segment more
// descriptive than its internal slug. Keyed by the course's own internal slug.
const COURSE_CATEGORY_URL_SLUG = {
  'digital-marketing-for-business-owners': 'digital-marketing-for-business-owners',
};

// The four "Courses" megamenu courses have canonical URLs that match their
// exact visible page names, with "-training" suffix.
const COURSE_URL_SLUGS = {
  'digital-marketing': 'courses/digital-marketing-training',
  'ai-automation': 'courses/ai-automation-training',
  'software-testing': 'courses/software-testing-training',
  'erp': 'courses/erp-training',
};
const URL_SLUG_TO_COURSE = {
  ...Object.fromEntries(
    Object.entries(COURSE_URL_SLUGS).map(([courseSlug, urlSlug]) => [urlSlug.replace(/^courses\//, ''), courseSlug])
  ),
  // Backward compatibility for legacy short URLs
  'digital-marketing': 'digital-marketing',
  'ai-automation': 'ai-automation',
  'software-testing': 'software-testing',
  'erp': 'erp',
};

// Every hub's URL segment matches its own navbar label exactly (navbar
// category = first URL path segment); the visible "Certification Overview"
// page name lives one level in, as the hub's own index page.
const HUB_URL_SLUGS = {
  career: 'career',
  internship: 'internship',
  certification: 'certification',
};
// The breadcrumb's category crumb must show the plain navbar category name
// (e.g. "Career"), never the deeper overview page's own name.
const HUB_LABELS = {
  career: 'Career',
  internship: 'Internship',
  certification: 'Certification',
};
const URL_SLUG_TO_HUB = Object.fromEntries(
  Object.entries(HUB_URL_SLUGS).map(([hub, urlSlug]) => [urlSlug, hub])
);

// Each hub's own index/overview page lives one segment deeper than the bare
// hub root (which redirects there), so the hub root is reserved purely as a
// category prefix and never itself renders a page.
const HUB_OVERVIEW_SLUGS = {
  career: 'career-opportunities-overview',
  internship: 'internship-overview',
  certification: 'certification-overview',
};

// Audience pathway pages that live nested under a real nav category (rather
// than at the bare URL root) get an explicit URL segment + parent category
// recorded here, keyed by the page's own internal slug (used across the CMS
// data layer) so the URL can differ from the internal identifier.
const AUDIENCE_CATEGORY_OVERRIDES = {
  'for-business-owners': { category: 'business-owners', urlSlug: 'buissness-owners-pathways' },
};
const URL_SLUG_TO_AUDIENCE = Object.fromEntries(
  Object.entries(AUDIENCE_CATEGORY_OVERRIDES).map(([audienceSlug, cfg]) => [cfg.urlSlug, audienceSlug])
);

// Career, Internship, and Certification nested per-course pages carry a
// descriptive suffix on the course slug (e.g. /career/digital-marketing-careers,
// /internship/digital-marketing-internship, /certification/digital-marketing-certification)
// so the URL reads as that specific page rather than a bare, ambiguous course reference.
const CATEGORY_CHILD_SUFFIX = {
  career: '-careers',
  internship: '-internship',
  certification: '-certification',
};

// A specific hub/course pairing whose child URL segment needs a more
// descriptive base than the course's own slug (e.g. ERP's certification
// page reads as "erp-system-certification", not the ambiguous "erp-certification").
// Keyed by hub, then by the course's own internal slug.
const CATEGORY_CHILD_SLUG_OVERRIDE = {
  certification: {
    erp: 'erp-system',
  },
};

class ContentRepository {
  constructor(registry = cmsRegistry) {
    this.registry = registry;
  }

  // 1. Get all published courses
  getAllCourses() {
    return (this.registry?.courses || []).filter(c => c?.status === 'published');
  }

  // 2. Get single course by slug (Error-Safe)
  getCourseBySlug(slug) {
    if (!slug) return null;
    const course = this.getAllCourses().find(c => c?.slug === slug);
    if (!course) return null;
    return course;
  }

  // 2b. Resolve the canonical browser URL for a course. Courses whose category
  // is the "Courses" megamenu itself (Digital Marketing, AI & Automation,
  // Software Testing, ERP) live at the URL root under a fuller descriptive
  // segment; a course under its own distinct nav category (Business Owners)
  // nests under that category, with its own descriptive URL segment.
  getCourseUrl(slug) {
    if (COURSE_URL_SLUGS[slug]) return `/${COURSE_URL_SLUGS[slug]}`;
    const categorySegment = COURSE_CATEGORY_SEGMENT[slug];
    if (categorySegment) {
      const courseUrlSlug = COURSE_CATEGORY_URL_SLUG[slug] || slug;
      return `/${categorySegment}/${courseUrlSlug}`;
    }
    return `/${slug}`;
  }

  // 2c. Resolve the canonical browser URL for a topic/subtopic page nested under a course.
  // A course that IS its own nav category (e.g. Business Owners) has its topics
  // live as flat siblings directly under the category root, not nested under
  // the course's own URL segment (no /business-owners/<course>/<topic>).
  getTopicUrl(courseSlug, topicSlug) {
    const categorySegment = COURSE_CATEGORY_SEGMENT[courseSlug];
    if (categorySegment) return `/${categorySegment}/${topicSlug}`;
    return `${this.getCourseUrl(courseSlug)}/${topicSlug}`;
  }

  getSubtopicUrl(courseSlug, topicSlug, subtopicSlug) {
    return `${this.getTopicUrl(courseSlug, topicSlug)}/${subtopicSlug}`;
  }

  // 2d. Resolve the canonical browser URL for the Career/Internship/Certification hubs and their nested pages
  getHubUrl(hub) {
    return `/${HUB_URL_SLUGS[hub] || hub}`;
  }

  // The hub's own index/overview page URL (one segment deeper than the bare hub root)
  getHubOverviewUrl(hub) {
    const overviewSlug = HUB_OVERVIEW_SLUGS[hub];
    return overviewSlug ? `${this.getHubUrl(hub)}/${overviewSlug}` : this.getHubUrl(hub);
  }

  getCategoryUrl(hub, courseSlug) {
    const suffix = CATEGORY_CHILD_SUFFIX[hub] || '';
    const base = CATEGORY_CHILD_SLUG_OVERRIDE[hub]?.[courseSlug] || courseSlug;
    return `${this.getHubUrl(hub)}/${base}${suffix}`;
  }

  // Reverses getCategoryUrl's per-hub course segment back to the course's real slug
  resolveCategoryCourseSlug(hub, segment) {
    const suffix = CATEGORY_CHILD_SUFFIX[hub];
    let base = segment;
    if (suffix && segment && segment.endsWith(suffix)) {
      base = segment.slice(0, -suffix.length);
    }
    const overrides = CATEGORY_CHILD_SLUG_OVERRIDE[hub];
    if (overrides) {
      const original = Object.entries(overrides).find(([, overrideBase]) => overrideBase === base);
      if (original) return original[0];
    }
    return base;
  }

  // 3. Get all published topics for a given course
  getTopicsForCourse(courseSlug) {
    if (!courseSlug) return [];
    return (this.registry?.topics || []).filter(t => t?.parent === courseSlug && t?.status === 'published');
  }

  // 4. Get single topic by parent & topic slug (Error-Safe)
  getTopicBySlug(courseSlug, topicSlug) {
    if (!courseSlug || !topicSlug) return null;
    const directTopic = (this.registry?.topics || []).find(t => t?.parent === courseSlug && t?.slug === topicSlug && t?.status === 'published');
    if (directTopic) return directTopic;

    const normalizedTarget = topicSlug.replace(/-and-/g, '-');
    const matched = (this.registry?.topics || []).find(t => {
      if (t?.parent !== courseSlug || t?.status !== 'published') return false;
      return t.slug.replace(/-and-/g, '-') === normalizedTarget;
    });
    return matched || null;
  }

  // 5. Get standalone company page by slug
  getStandalonePage(slug) {
    if (!slug) return null;
    const aliases = {
      'learning-approach': 'our-learning-approach',
      'mission': 'our-mission',
      'vision': 'our-vision',
      'student-success': 'student-success-stories',
      'commitment': 'our-commitment',
    };
    const resolvedSlug = aliases[slug] || slug;
    const page = (this.registry?.standalonePages || []).find(p => (p?.slug === resolvedSlug || p?.slug === slug) && p?.status === 'published');
    if (!page) return null;
    return page;
  }

  // 6. Get target audience pathway page by slug
  getAudiencePage(slug) {
    if (!slug) return null;
    const page = (this.registry?.audiencePages || []).find(a => a?.slug === slug && a?.status === 'published');
    if (!page) return null;
    return page;
  }

  // 6b. Resolve the canonical browser URL for an audience pathway page.
  // Most audience pages live at the bare URL root; a few nest under a real
  // nav category (see AUDIENCE_CATEGORY_OVERRIDES) and get that prefix instead.
  getAudienceUrl(slug) {
    const override = AUDIENCE_CATEGORY_OVERRIDES[slug];
    return override ? `/${override.category}/${override.urlSlug}` : `/${slug}`;
  }

  // 7. Get category data for Career, Internship, or Certification
  getCategoryData(type, categorySlug) {
    const parentCourse = this.getCourseBySlug(this.resolveCategoryCourseSlug(type, categorySlug));
    if (!parentCourse) return null;

    if (type === 'career') {
      return {
        title: `${parentCourse.shortTitle} Career Opportunities`,
        // Breadcrumb/nav label is the canonical page name only, never the
        // longer marketing title used for the on-page heading.
        breadcrumbLabel: `${parentCourse.shortTitle} Careers`,
        description: `Explore job roles, required skills, and career growth pathways in ${parentCourse.shortTitle}.`,
        opportunities: parentCourse.careerOpportunities || [],
        parentCourse,
      };
    }

    if (type === 'internship') {
      return {
        title: `1-Month ${parentCourse.shortTitle} Internship`,
        // Breadcrumb/nav label is the canonical page name only, never the
        // duration-prefixed marketing title used for the on-page heading.
        breadcrumbLabel: `${parentCourse.shortTitle} Internship`,
        description: `Gain authentic industry experience with our integrated 1-month practical ${parentCourse.shortTitle} internship.`,
        parentCourse,
      };
    }

    if (type === 'certification') {
      // ERP's certification page is named "ERP Systems Certification" in the nav.
      const certName = parentCourse.slug === 'erp' ? 'ERP Systems' : parentCourse.shortTitle;
      return {
        title: `${certName} Certification Program`,
        // Breadcrumb/nav label is the canonical page name only, never the
        // longer marketing title used for the on-page heading.
        breadcrumbLabel: `${certName} Certification`,
        description: `Earn verified Sky9 Course Completion certificates and Google & Meta industry recognition.`,
        parentCourse,
      };
    }

    return null;
  }

  // 8. Auto-derive dynamic breadcrumbs from URL pathname
  getAutoBreadcrumbs(pathname = '/') {
    const parts = pathname.split('/').filter(Boolean);
    const items = [{ label: 'Home', path: '/' }];

    if (parts.length === 0) return items;

    if (parts[0] === 'courses') {
      // /courses is the hub; /courses/:courseUrlSlug[/:topicSlug] is one of
      // the four Digital Marketing/AI/Software Testing/ERP courses nested
      // directly under the Courses navbar category.
      items.push({ label: 'Courses', path: '/courses' });
      if (parts[1] && URL_SLUG_TO_COURSE[parts[1]]) {
        const course = this.getCourseBySlug(URL_SLUG_TO_COURSE[parts[1]]);
        if (course) {
          items.push({ label: course.title, path: this.getCourseUrl(course.slug) });
          if (parts[2]) {
            const topic = this.getTopicBySlug(course.slug, parts[2]);
            if (topic) {
              items.push({ label: topic.title, path: this.getTopicUrl(course.slug, topic.slug) });
            }
          }
        }
      }
    } else if (Object.values(COURSE_CATEGORY_SEGMENT).includes(parts[0])) {
      // A course living under its own real nav category (e.g. Business Owners),
      // distinct from the generic "Courses" megamenu, so the crumb must show
      // that actual category, never "Courses".
      const categoryLabel = CATEGORY_SEGMENT_LABELS[parts[0]] || (parts[0].charAt(0).toUpperCase() + parts[0].slice(1));
      const categoryCourseSlug = Object.keys(COURSE_CATEGORY_SEGMENT).find(s => COURSE_CATEGORY_SEGMENT[s] === parts[0]);
      // Link straight to the category's own course page; the bare category root
      // is only a redirect.
      items.push({ label: categoryLabel, path: categoryCourseSlug ? this.getCourseUrl(categoryCourseSlug) : `/${parts[0]}` });
      if (parts[1] && categoryCourseSlug) {
        const courseUrlSlug = COURSE_CATEGORY_URL_SLUG[categoryCourseSlug] || categoryCourseSlug;
        if (parts[1] === courseUrlSlug || parts[1] === 'digital-marketing-for-bussiness-owner') {
          // The category's own course page.
          const course = this.getCourseBySlug(categoryCourseSlug);
          if (course) {
            items.push({ label: course.title, path: this.getCourseUrl(categoryCourseSlug) });
          }
        } else {
          // A topic (or an audience pathway page) living as a flat sibling
          // directly under the category root. The banner breadcrumb goes
          // straight from the category to the topic (Home > Business Owners
          // > Topic), skipping the intermediate course-level crumb entirely.
          const topic = this.getTopicBySlug(categoryCourseSlug, parts[1]);
          if (topic) {
            // The crumb uses the topic's own page title so it matches the H1.
            items.push({ label: topic.title, path: this.getTopicUrl(categoryCourseSlug, topic.slug) });
          } else {
            const audienceSlug = URL_SLUG_TO_AUDIENCE[parts[1]] || parts[1];
            const audience = this.getAudiencePage(audienceSlug);
            if (audience) {
              items.push({ label: audience.breadcrumbLabel || audience.title, path: this.getAudienceUrl(audienceSlug) });
            }
          }
        }
      }
    } else if (URL_SLUG_TO_HUB[parts[0]]) {
      // Career / Internship / Certification hub, e.g. /career[/...], /internship[/...], /certification[/...]
      const hub = URL_SLUG_TO_HUB[parts[0]];
      items.push({ label: HUB_LABELS[hub], path: this.getHubOverviewUrl(hub) });
      if (parts[1]) {
        const categoryData = this.getCategoryData(hub, parts[1]);
        if (categoryData?.parentCourse) {
          items.push({ label: categoryData.breadcrumbLabel || categoryData.title, path: this.getCategoryUrl(hub, categoryData.parentCourse.slug) });
        }
      }
    } else if (parts[0] === 'about') {
      // Company/About standalone pages nested under the About section, e.g. /about/mission
      items.push({ label: 'About', path: '/about/about-overview' });
      if (parts[1]) {
        const standalone = this.getStandalonePage(parts[1]);
        if (standalone) {
          items.push({ label: standalone.breadcrumbLabel || standalone.title, path: `/about/${standalone.slug}` });
        }
      }
    } else if (parts[0] === 'locations') {
      items.push({ label: 'Locations', path: '/locations' });
      if (parts[1]) {
        items.push({ label: parts[1].toUpperCase(), path: `/locations/${parts[1]}` });
      }
      if (parts[2]) {
        const course = this.getCourseBySlug(parts[2]);
        if (course) {
          items.push({ label: course.shortTitle, path: `/locations/${parts[1]}/${parts[2]}` });
        }
      }
    } else if (parts[0] === 'resources') {
      items.push({ label: 'Resources', path: '/resources/learning-overview' });
      if (parts[1] === 'guides') {
        // /resources/guides only redirects to the Career & Skill Guides hub.
        items.push({ label: 'Career & Skill Guides', path: '/resources/career-skill-guides' });
      } else if (parts[1] && parts[1] !== 'learning-overview') {
        items.push({ label: parts[1].toUpperCase(), path: `/resources/${parts[1]}` });
      }
    } else if (parts[0] === 'topics') {
      // There is no /topics index page; topic landing pages belong to Courses.
      items.push({ label: 'Courses', path: '/courses' });
    } else {
      const standalone = this.getStandalonePage(parts[0]);
      if (standalone) {
        items.push({ label: standalone.breadcrumbLabel || standalone.title, path: `/${standalone.slug}` });
      } else {
        const audience = this.getAudiencePage(parts[0]);
        if (audience) {
          items.push({ label: audience.breadcrumbLabel || audience.title, path: this.getAudienceUrl(audience.slug) });
        } else {
          items.push({ label: parts[0].charAt(0).toUpperCase() + parts[0].slice(1), path: `/${parts[0]}` });
        }
      }
    }

    return items;
  }

  // 9. Auto-match related courses and topics
  getRelatedContent(currentSlug, category) {
    const allCourses = this.getAllCourses();
    const relatedCourses = allCourses.filter(c => c.slug !== currentSlug);
    return {
      relatedCourses: relatedCourses.slice(0, 3),
    };
  }

  // 10. Search query across courses, topics, and pages (Filter/Search readiness)
  searchContent(query = '') {
    const q = query.toLowerCase().trim();
    if (!q) return [];

    const results = [];

    // Search courses
    this.getAllCourses().forEach(c => {
      if (c.title.toLowerCase().includes(q) || c.overview.toLowerCase().includes(q) || c.category.toLowerCase().includes(q)) {
        results.push({ type: 'course', title: c.title, path: this.getCourseUrl(c.slug), description: c.subtitle });
      }
    });

    // Search topics
    (this.registry?.topics || []).forEach(t => {
      if (t.title.toLowerCase().includes(q) || t.overview.toLowerCase().includes(q)) {
        results.push({ type: 'topic', title: t.title, path: this.getTopicUrl(t.parent, t.slug), description: t.subtitle });
      }
    });

    return results;
  }

  // 11. Company info safe getter
  getCompanyInfo() {
    return this.registry?.company || {
      name: 'Sky9 India',
      phone: '+91 7 319 419 519',
      email: 'info@Sky9India.com',
      address: 'Pune, Maharashtra, India',
    };
  }
}

// Singleton Instance
export const contentRepository = new ContentRepository();
export default contentRepository;
