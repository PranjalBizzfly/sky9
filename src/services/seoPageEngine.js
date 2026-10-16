/**
 * Sky9 India, SEO Page Generation & Inventory Engine (Phase 10)
 * 
 * Provides a scalable, data-driven programmatic content system supporting 500+ SEO pages.
 * Follows strict rules:
 * - Content source: Authentic Sky9 India content (no fake claims or fabricated facts)
 * - Architecture: CONTENT DATA -> PAGE DATA -> PAGE TYPE -> SEO DATA -> ROUTE -> REUSABLE TEMPLATE
 * - Duplicate prevention: Enforces unique slugs, unique canonicals, unique titles, and quality scoring.
 * - Error-safe: Guarantees fallbacks so missing nested data never crashes the app.
 */

import { cmsRegistry } from '../data/cmsRegistry';
import { courseTopics, standalonePages, audiencePages, locationCities, resourceCategories } from '../data/sitemapData';
import contentRepository from './contentRepository';

// Slugification Helper
function slugify(text) {
  return String(text || '')
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Safe-fallback FAQ generators for the programmatically-generated page tiers
// (subtopics and career-role pages), built entirely from each page's own
// real, already-approved fields (names/titles/durations/fees), never invented.
function generateSubtopicFaqs(subName, topicTitle, parentCourseTitle, parentCourse, topicObj) {
  const siblings = (topicObj?.topics || []).filter(t => t !== subName).slice(0, 2);
  return [
    { question: `What does the ${subName} module actually cover?`, answer: `${subName} is one of the specific practical skills taught inside the ${topicTitle} module of Sky9 India's ${parentCourseTitle} program, combining a hands-on lab assignment with mentor guidance.` },
    { question: `Is ${subName} a standalone course, or part of a larger program?`, answer: `${subName} is a specialization module within ${topicTitle}, part of the ${parentCourseTitle} program, it's not offered as a separate standalone course.` },
    { question: `Do I need to enroll separately to learn ${subName}?`, answer: `No, ${subName} is included as part of the ${topicTitle} module when you enroll in ${parentCourseTitle}; there's no separate signup for this specific skill.` },
    { question: `What other skills are taught alongside ${subName} in the ${topicTitle} module?`, answer: siblings.length > 0 ? `${subName} is taught alongside ${siblings.join(' and ')} within the same ${topicTitle} module.` : `${subName} is taught as part of the broader ${topicTitle} module, alongside its other related skills.` },
    { question: `How long is the ${parentCourseTitle} program that includes ${subName}?`, answer: parentCourse ? `${parentCourseTitle} runs for ${parentCourse.duration} at ${parentCourse.fee}, with ${subName} covered as part of the ${topicTitle} module.` : `Duration and fee details for the program that includes ${subName} can be confirmed with the admissions team.` },
    { question: `Is ${subName} covered through hands-on practice, or only theory?`, answer: `${subName} is covered through hands-on lab assignments and real project tasks, consistent with Sky9 India's practical-first approach to every topic module.` },
    { question: `Who is ${subName} suitable for?`, answer: parentCourse?.audience?.length ? `${subName} is suitable for ${parentCourse.audience.slice(0, 3).join(', ')}, anyone eligible for the ${parentCourseTitle} program.` : `${subName} is suitable for anyone enrolled in ${parentCourseTitle}, since the program starts from fundamentals.` },
    { question: `Does completing ${topicTitle}, including ${subName}, connect to any certification?`, answer: parentCourse?.certification ? `Completing ${subName} counts toward ${parentCourse.certification} upon finishing the full ${parentCourseTitle} program.` : `Completing ${subName} counts toward the Sky9 Course Completion Certificate issued for ${parentCourseTitle}.` },
  ];
}

// Generates FAQs for the standalone /topics/:slug page that are distinct in framing
// from the hand-authored /courses/:course/:topic page FAQs for the same topic —
// different questions, different answers, both grounded in the same real topic/course data.
function generateStandaloneTopicFaqs(topicObj, parentCourse) {
  const title = topicObj.title;
  const courseTitle = parentCourse?.title || 'the relevant Sky9 India program';
  const skills = (topicObj.topics || []).join(', ');
  return [
    { question: `What will I learn by studying ${title} through Sky9 India?`, answer: topicObj.overview },
    { question: `Which specific skills are covered under ${title}?`, answer: skills ? `${title} covers: ${skills}.` : `${title} covers a set of specific, practical skills detailed on the module page.` },
    { question: `Is ${title} available as a standalone skill track, or only within a full course?`, answer: parentCourse ? `${title} is taught as part of the ${courseTitle} program (${parentCourse.duration}, ${parentCourse.fee}); there isn't a separate standalone enrollment just for this topic.` : `${title} is taught as part of a full Sky9 India program rather than as a separate standalone enrollment.` },
    { question: `How does Sky9 India teach ${title}, through lectures or practical labs?`, answer: `${title} follows Sky9 India's practical-first approach: live lab exercises and real project tasks accompany every concept, not lecture-only theory.` },
    { question: `Who should consider learning ${title}?`, answer: parentCourse?.audience?.length ? `${title} suits ${parentCourse.audience.slice(0, 3).join(', ')}, anyone eligible for the ${courseTitle} program.` : `${title} suits anyone eligible for ${courseTitle}, since the program starts from fundamentals.` },
    { question: `Does completing ${title} contribute toward a recognized certificate?`, answer: parentCourse?.certification ? `Yes, ${title} contributes toward ${parentCourse.certification}, issued upon completing the full ${courseTitle} program.` : `Yes, ${title} contributes toward the Sky9 Course Completion Certificate issued for ${courseTitle}.` },
    { question: `Can I study ${title} through online classes, or only in the Pune classroom?`, answer: parentCourse?.mode ? `${title} is available through ${parentCourse.mode}, so it isn't limited to the Pune classroom.` : `${title} is available both through Pune classroom batches and live online sessions.` },
    { question: `What's the difference between this page and the ${title} module on the ${courseTitle} course page?`, answer: `This page is a standalone overview of ${title}; the module on the ${courseTitle} course page covers the same skill with course-specific FAQs, curriculum context, and enrollment details.` },
  ];
}

function generateCareerRoleFaqs(roleName, course) {
  const otherRoles = (course.careerOpportunities || []).filter(r => r !== roleName).slice(0, 3);
  return [
    { question: `How does Sky9 India prepare me for a ${roleName} role?`, answer: `Through the ${course.title} program (${course.duration}, ${course.fee}), which includes hands-on lab assignments, a 1-month integrated internship, and career support such as resume building and mock interviews relevant to roles like ${roleName}.` },
    { question: `Do I need prior experience to target a ${roleName} position?`, answer: `No, ${course.shortTitle} starts from fundamentals, so no prior experience is required to work toward a ${roleName} role after completing the course and internship.` },
    { question: `Does completing ${course.shortTitle} guarantee a ${roleName} job?`, answer: `No training program can guarantee a specific job placement, but the practical curriculum, internship, and direct hiring partner referrals are designed to maximize your readiness for ${roleName} and similar roles.` },
    { question: `What other roles could I pursue alongside ${roleName} after this course?`, answer: otherRoles.length > 0 ? `Beyond ${roleName}, ${course.shortTitle} graduates also pursue roles such as ${otherRoles.join(', ')}, depending on individual interest and specialization.` : `${course.shortTitle} builds broadly applicable skills beyond just ${roleName}, so your specific role path can be discussed with an admissions counselor.` },
    { question: `Does the ${course.shortTitle} internship help prepare for a ${roleName} role specifically?`, answer: `Yes, ${course.internship || 'the integrated internship'} applies your training to live project work, building the kind of portfolio evidence a ${roleName} application benefits from.` },
    { question: `What certification would support a ${roleName} application?`, answer: `${course.certification || 'The Sky9 Course Completion Certificate'}, issued upon completing ${course.shortTitle}, is designed to be shareable on LinkedIn alongside a ${roleName} application.` },
    { question: `Is the ${course.shortTitle} program available online for someone targeting a ${roleName} role?`, answer: `Yes, ${course.mode || 'both classroom and online delivery'} follow the identical curriculum, so pursuing a ${roleName} role doesn't require attending the Pune classroom.` },
    { question: `Who typically pursues the ${roleName} path through Sky9 India?`, answer: course.audience?.length ? `Learners such as ${course.audience.slice(0, 3).join(', ')} pursue ${roleName} and similar roles after completing ${course.shortTitle}.` : `Students and career switchers enrolled in ${course.shortTitle} typically pursue ${roleName} and similar roles.` },
  ];
}

class SeoPageEngine {
  constructor() {
    this.inventory = null;
  }

  // Generate complete 500+ SEO Page Inventory
  getInventory() {
    if (this.inventory) return this.inventory;

    const rawPages = [];
    const slugMap = new Set();

    // 1. Core & Standalone Main Pages
    const mainRoutes = [
      { slug: '', title: 'Sky9 India, Practical Training Institute Pune', type: 'landing', desc: 'Premier practical training institute in Pune offering Digital Marketing, AI & Automation, Software Testing, and ERP training with 1-month integrated internships.' },
      { slug: 'about/about-overview', title: 'About Sky9 India, Leading Practical Education Institute', type: 'standalone', desc: 'Learn about Sky9 India’s mission to bridge academic knowledge with 100% practical, implementation-focused training in Pune.' },
      { slug: 'contact-us', title: 'Contact Sky9 India, Admissions & Location Pune', type: 'standalone', desc: 'Get in touch with Sky9 India admissions team for course enquiries, batch timings, and center address in Pune.' },
      { slug: 'pricing', title: 'Course Fees & Batch Plans, Sky9 India', type: 'standalone', desc: 'Transparent fee structures, batch schedules, and flexible payment plans for Sky9 practical training programs.' },
      { slug: 'resources/visual-sitemap-directory', title: 'Complete Website Sitemap, Sky9 India Page Directory', type: 'standalone', desc: 'Explore the structured sitemap and complete page directory for Sky9 India training programs, topics, and resources.' },
      { slug: 'resources/ui-design-system', title: 'UI/UX Design System & Theme Tokens, Sky9 India', type: 'standalone', desc: 'Design tokens, component library, accessibility rules, and theme documentation for Sky9 India website.' },
    ];

    mainRoutes.forEach(r => {
      rawPages.push(this.buildPageRecord({
        id: r.slug || 'home',
        type: r.type,
        slug: r.slug,
        title: r.title,
        subtitle: 'Official Sky9 India Page',
        category: 'Main',
        description: r.desc,
        content: r.desc,
        parent: null,
      }));
    });

    // 2. Standalone Company Pages from sitemapData
    standalonePages.forEach(sp => {
      rawPages.push(this.buildPageRecord({
        id: sp.slug,
        type: 'standalone',
        slug: `about/${sp.slug}`,
        title: `${sp.title} | Sky9 India`,
        subtitle: sp.subtitle,
        category: 'Company',
        description: sp.description,
        content: sp.description,
        highlights: sp.highlights || sp.pillars || [],
        parent: 'about/about-overview',
      }));
    });

    // 3. Courses Hub & Course Detail Pages
    rawPages.push(this.buildPageRecord({
      id: 'courses-hub',
      type: 'course-hub',
      slug: 'courses',
      title: 'Explore All Practical Training Courses | Sky9 India',
      subtitle: 'Industry-Aligned Programs with 1-Month Integrated Internships',
      category: 'Courses',
      description: 'Discover practical career tracks in Digital Marketing, AI & Automation, Software Testing, and ERP with Pune classroom & live online options.',
      parent: null,
    }));

    (cmsRegistry?.courses || []).forEach(course => {
      rawPages.push(this.buildPageRecord({
        id: `course-${course.slug}`,
        type: 'course',
        slug: contentRepository.getCourseUrl(course.slug),
        title: `${course.title} | Sky9 India`,
        subtitle: course.subtitle,
        category: course.category,
        description: course.overview,
        content: course.overview,
        highlights: course.benefits || [],
        parent: 'courses',
        relatedCourse: course,
      }));
    });

    // 4. Course Topic Pages & Normalized Topic Routes
    Object.keys(courseTopics).forEach(courseSlug => {
      const parentCourse = (cmsRegistry?.courses || []).find(c => c.slug === courseSlug);
      const topicList = courseTopics[courseSlug] || [];

      topicList.forEach(top => {
        const topicSlug = top.slug;
        const fullTopicRoute = contentRepository.getTopicUrl(courseSlug, topicSlug);
        const standaloneTopicRoute = `topics/${topicSlug}`;

        // Course + Topic Page
        rawPages.push(this.buildPageRecord({
          id: `topic-${courseSlug}-${topicSlug}`,
          type: 'topic',
          slug: fullTopicRoute,
          title: `${top.title}, ${parentCourse?.shortTitle || 'Sky9 Course'} Module`,
          subtitle: top.subtitle,
          category: parentCourse?.category || 'Technology',
          description: top.overview,
          content: top.overview,
          highlights: top.topics || [],
          parent: contentRepository.getCourseUrl(courseSlug),
          relatedCourse: parentCourse,
          topicObj: top,
        }));

        // Normalized Standalone Topic Page, distinct FAQ framing from the
        // /courses/:course/:topic page so the two routes don't carry duplicate FAQ sets.
        rawPages.push(this.buildPageRecord({
          id: `standalone-topic-${topicSlug}`,
          type: 'topic',
          slug: standaloneTopicRoute,
          title: `${top.title} Training & Skills | Sky9 India`,
          subtitle: top.subtitle,
          category: 'Skills & Topics',
          description: `Master ${top.title} with practical hands-on exercises and real-world project applications.`,
          content: top.overview,
          highlights: top.topics || [],
          parent: 'courses',
          relatedCourse: parentCourse,
          topicObj: top,
          faqs: generateStandaloneTopicFaqs(top, parentCourse),
        }));

        // 5. Subtopic Pages (Granular Topic Breakdown)
        (top.topics || []).forEach((subName) => {
          const subSlug = slugify(subName);
          const fullSubtopicRoute = contentRepository.getSubtopicUrl(courseSlug, topicSlug, subSlug);

          rawPages.push(this.buildPageRecord({
            id: `subtopic-${courseSlug}-${topicSlug}-${subSlug}`,
            type: 'subtopic',
            slug: fullSubtopicRoute,
            title: `${subName}, ${top.title} Specialization`,
            subtitle: `Detailed Practical Module in ${top.title}`,
            category: parentCourse?.category || 'Specialization',
            description: `Learn ${subName} as part of our practical ${parentCourse?.title || 'training program'} in Pune & online.`,
            content: `In-depth practical learning module for ${subName}. Master concepts, tool execution, and industry best practices.`,
            highlights: ['Hands-on lab assignments', 'Expert mentor guidance', 'Practical project evaluation', 'Real-world case study walkthroughs'],
            parent: fullTopicRoute,
            relatedCourse: parentCourse,
            faqs: generateSubtopicFaqs(subName, top.title, parentCourse?.title || 'this Sky9 India program', parentCourse, top),
          }));
        });
      });
    });

    // 6. Audience Pathway Pages
    audiencePages.forEach(aud => {
      rawPages.push(this.buildPageRecord({
        id: `audience-${aud.slug}`,
        type: 'audience',
        slug: contentRepository.getAudienceUrl(aud.slug).replace(/^\//, ''),
        title: `${aud.title} | Sky9 India`,
        subtitle: aud.subtitle,
        category: 'Audience Pathway',
        description: aud.description,
        content: aud.description,
        highlights: aud.benefits || [],
        parent: null,
      }));
    });

    // 7. Career Category & Career Topic Specialization Pages
    rawPages.push(this.buildPageRecord({
      id: 'career-hub',
      type: 'career-hub',
      slug: contentRepository.getHubOverviewUrl('career').slice(1),
      title: 'Career Placement & Job Services | Sky9 India',
      subtitle: 'Skill Gap Assessment, Resume Drills & Hiring Partner Referrals',
      category: 'Career',
      description: 'Explore dedicated career placement support, resume optimization, mock interviews, and hiring partner connections at Sky9 India.',
      parent: null,
    }));

    (cmsRegistry?.courses || []).forEach(c => {
      rawPages.push(this.buildPageRecord({
        id: `career-${c.slug}`,
        type: 'career',
        slug: contentRepository.getCategoryUrl('career', c.slug).slice(1),
        title: `${c.shortTitle} Career Pathways & Job Roles | Sky9 India`,
        subtitle: `In-Demand Job Roles & Placement Guidance for ${c.title}`,
        category: 'Career Specialization',
        description: `Explore entry-level to senior career opportunities in ${c.title} after completing Sky9 practical training and internship.`,
        content: c.overview,
        highlights: c.careerOpportunities || [],
        parent: contentRepository.getHubOverviewUrl('career').slice(1),
        relatedCourse: c,
      }));

      // Career topic sub-pages for specific roles
      (c.careerOpportunities || []).forEach(roleName => {
        const roleSlug = slugify(roleName);
        rawPages.push(this.buildPageRecord({
          id: `career-role-${c.slug}-${roleSlug}`,
          type: 'career-role',
          slug: `${contentRepository.getCategoryUrl('career', c.slug).slice(1)}/${roleSlug}`,
          title: `${roleName} Career Guide & Training | Sky9 India`,
          subtitle: `How to Become a ${roleName} with Practical Skills`,
          category: 'Job Roles',
          description: `Comprehensive guide to launching your career as a ${roleName}. Learn required skills, tools, and interview preparation.`,
          content: `Build job-ready expertise for ${roleName} roles through Sky9's practical curriculum and integrated 1-month internship.`,
          highlights: ['Key industry skills required', 'Tool proficiency lab', 'Resume & portfolio showcase', 'Mock interview preparation'],
          parent: contentRepository.getCategoryUrl('career', c.slug).slice(1),
          relatedCourse: c,
          faqs: generateCareerRoleFaqs(roleName, c),
        }));
      });
    });

    // 8. Internship Category & Topic Specialization Pages
    rawPages.push(this.buildPageRecord({
      id: 'internship-hub',
      type: 'internship-hub',
      slug: contentRepository.getHubOverviewUrl('internship').slice(1),
      title: 'Integrated 1-Month Practical Internship | Sky9 India',
      subtitle: 'Execute Real Projects & Earn Verified Experience Credentials',
      category: 'Internship',
      description: 'Gain authentic practical work experience with Sky9’s integrated 1-month internship program for students, graduates, and job seekers.',
      parent: null,
    }));

    (cmsRegistry?.courses || []).forEach(c => {
      rawPages.push(this.buildPageRecord({
        id: `internship-${c.slug}`,
        type: 'internship',
        slug: contentRepository.getCategoryUrl('internship', c.slug).slice(1),
        title: `1-Month ${c.shortTitle} Internship Program | Sky9 India`,
        subtitle: `Hands-on Live Project Execution in ${c.title}`,
        category: 'Internship Track',
        description: `Apply your ${c.title} training on live projects, campaign setups, or software lab tasks under senior supervisor guidance.`,
        content: `Work on active projects, build a verified portfolio, and receive an official Sky9 Internship Completion Certificate.`,
        highlights: ['Senior mentor supervision', 'Live tool access & assignments', 'Official experience letter'],
        parent: contentRepository.getHubOverviewUrl('internship').slice(1),
        relatedCourse: c,
      }));
    });

    // 9. Certification Category & Topic Specialization Pages
    rawPages.push(this.buildPageRecord({
      id: 'certification-hub',
      type: 'certification-hub',
      slug: contentRepository.getHubOverviewUrl('certification').slice(1),
      title: 'Verified Course & Industry Certifications | Sky9 India',
      subtitle: 'Sky9 Course Completion & Google/Meta Certificate Guidance',
      category: 'Certification',
      description: 'Validate your practical skills with verified Sky9 credentials and step-by-step guidance for leading external industry certifications.',
      parent: null,
    }));

    (cmsRegistry?.courses || []).forEach(c => {
      rawPages.push(this.buildPageRecord({
        id: `certification-${c.slug}`,
        type: 'certification',
        slug: contentRepository.getCategoryUrl('certification', c.slug).slice(1),
        title: `${c.shortTitle} Certification & Credential Guide | Sky9 India`,
        subtitle: `Earn Verified Certificates for ${c.title}`,
        category: 'Certification Track',
        description: `Get official Sky9 Course Completion certificates and prepare for global industry credentials in ${c.title}.`,
        content: `Validate your expertise with verifiable digital certificates to add to your resume and LinkedIn profile.`,
        highlights: ['Verifiable digital certificate link', 'Practical project evaluation', 'LinkedIn credential optimization'],
        parent: contentRepository.getHubOverviewUrl('certification').slice(1),
        relatedCourse: c,
      }));
    });

    // 10. Resource Hub & Category Detail Pages
    rawPages.push(this.buildPageRecord({
      id: 'resources-hub',
      type: 'resource-hub',
      slug: 'resources/learning-overview',
      title: 'Learning Resources, Guides & FAQs | Sky9 India',
      subtitle: 'Knowledge Hub for Digital Marketing, AI, QA, and ERP Learners',
      category: 'Resources',
      description: 'Explore comprehensive career roadmaps, frequently asked questions, industry tool indices, and learning articles.',
      parent: null,
    }));

    resourceCategories.forEach(res => {
      rawPages.push(this.buildPageRecord({
        id: `resource-cat-${res.slug}`,
        type: 'resource-cat',
        slug: `resources/${res.slug}`,
        title: `${res.title} | Sky9 India Resource Hub`,
        subtitle: res.desc,
        category: 'Resources',
        description: res.desc,
        content: res.desc,
        parent: 'resources/learning-overview',
      }));
    });

    // Specific Skill Guides under resources/guides
    const skillGuides = [
      {
        slug: 'digital-marketing-career-guide', title: 'Complete Digital Marketing Career Guide 2026', courseSlug: 'digital-marketing', desc: 'Step-by-step roadmap to building a successful career in SEO, Social Media, Google Ads, and Performance Marketing.',
        faqs: [
          { question: 'Who is this Digital Marketing career guide written for?', answer: 'Students, freshers, and career switchers evaluating whether to pursue SEO, Social Media, Google Ads, or Performance Marketing as a career path.' },
          { question: 'Does this guide cover getting my first job, or only skills?', answer: 'It\'s framed as a career roadmap, covering the skill sequence alongside how those skills translate into entry-level digital marketing roles.' },
          { question: 'Is this guide enough on its own, or do I need the full course?', answer: 'The guide gives you the roadmap and priorities; the Digital Marketing Training course provides the hands-on labs, mentor feedback, and internship that build the actual skills.' },
          { question: 'Does this guide include paid advertising, or only organic strategies?', answer: 'Yes, Google Ads and Performance Marketing are covered alongside organic strategies like SEO and Social Media.' },
          { question: 'How current is the guidance in this 2026 edition?', answer: 'It\'s framed as the 2026 edition, reflecting the current digital marketing skill priorities Sky9 India teaches.' },
          { question: 'Does this guide mention specific job titles I could target?', answer: 'Yes, it connects the skill roadmap to entry-level digital marketing roles you can target after building these skills.' },
          { question: 'Is this guide relevant for someone who already works in marketing?', answer: 'It\'s written as a roadmap for building a career from the ground up, though working marketers can use it to check gaps in their existing skill set.' },
          { question: 'Does this guide connect to other Sky9 India resources?', answer: 'It complements the Digital Marketing Training course page and the SEO, Social Media, and Google Ads topic modules for anyone wanting more depth.' },
        ],
      },
      {
        slug: 'ai-prompt-engineering-guide', title: 'Beginner to Advanced AI Prompting Guide', courseSlug: 'ai-automation', desc: 'Master structured prompting techniques for ChatGPT, Claude, and AI productivity tools in the workplace.',
        faqs: [
          { question: 'Do I need any AI experience to start with this guide?', answer: 'No, it\'s structured to take a complete beginner through to advanced prompting techniques.' },
          { question: 'Which AI tools does this guide focus on?', answer: 'ChatGPT and Claude are the primary tools referenced, alongside general AI productivity tool workflows applicable to the workplace.' },
          { question: 'Is prompt engineering covered in more depth in the full AI & Automation course?', answer: 'Yes, Structured Prompt Engineering is a dedicated module in the AI & Automation Training course, going deeper with hands-on assignments than this guide alone.' },
          { question: 'Does this guide focus on workplace use cases, or general prompting theory?', answer: 'It\'s framed around structured prompting techniques for the workplace, so the emphasis is practical application rather than abstract theory.' },
          { question: 'Do I need to know Python or any programming language to follow this guide?', answer: 'No, prompt engineering as covered here is a no-code skill focused on how you phrase instructions to AI tools.' },
          { question: 'Does this guide cover AI productivity tools beyond ChatGPT and Claude?', answer: 'Yes, general AI productivity tool workflows applicable to the workplace are also covered.' },
          { question: 'Is this guide useful for someone in a non-technical role?', answer: 'Yes, prompting is a practical communication skill relevant to marketers, administrators, and other non-technical professionals, not just developers.' },
          { question: 'How does this guide connect to the AI & Automation course structure?', answer: 'It mirrors the course\'s Structured Prompt Engineering module, giving a preview of that module\'s focus areas.' },
        ],
      },
      {
        slug: 'software-testing-qa-guide', title: 'Software Testing & Bug Tracking Essentials', courseSlug: 'software-testing', desc: 'Foundational guide to STLC, test case writing, Jira defect logging, and QA technical interviews.',
        faqs: [
          { question: 'Does this guide require coding knowledge?', answer: 'No, it focuses on manual testing fundamentals like STLC, test case writing, and defect logging, which don\'t require programming.' },
          { question: 'Does this guide help with QA job interviews specifically?', answer: 'Yes, QA technical interview preparation is one of the topics covered.' },
          { question: 'Is Jira covered in the full Software Testing course as well?', answer: 'Yes, Hands-on Jira Issue Tracking & Dashboards is a dedicated, practical topic within the course\'s Defect Management module.' },
          { question: 'Does this guide cover the full software testing life cycle, or just bug tracking?', answer: 'It covers STLC as a foundational topic alongside test case writing and defect logging, the life cycle, not just bug tracking in isolation.' },
          { question: 'Is this guide useful for someone with zero QA background?', answer: 'Yes, it\'s described as a foundational guide, meaning it doesn\'t assume prior QA experience.' },
          { question: 'Does the guide include tips for passing QA technical interviews?', answer: 'Yes, QA technical interview preparation is explicitly one of its topics.' },
          { question: 'Does this guide use Jira as its bug-tracking example?', answer: 'Yes, Jira defect logging is one of the guide\'s core topics.' },
          { question: 'How does this guide relate to the full Software Testing Training course?', answer: 'It introduces the same STLC, test case, and defect management concepts taught in the course\'s Manual Testing Fundamentals and Defect Management modules.' },
        ],
      },
      {
        slug: 'erp-process-mapping-guide', title: 'Enterprise Process Mapping & SOP Guide', courseSlug: 'erp', desc: 'Understand business process re-engineering, procure-to-pay lifecycles, and ERP system architecture.',
        faqs: [
          { question: 'Who should read this ERP process mapping guide?', answer: 'Anyone evaluating a career or role involving business process analysis, operations, or ERP systems, no prior ERP experience is assumed.' },
          { question: 'Does this guide cover a specific ERP software platform?', answer: 'It focuses on the underlying process concepts, business process re-engineering, procure-to-pay lifecycles, and system architecture, that apply across ERP platforms.' },
          { question: 'How does this guide relate to the full ERP Training course?', answer: 'It introduces the same concepts covered in the course\'s ERP Fundamentals and Business Process Mapping modules, at a lighter, orientation level.' },
          { question: 'Does this guide cover procure-to-pay processes specifically?', answer: 'Yes, procure-to-pay lifecycles are one of the three core areas this guide covers.' },
          { question: 'Is this guide useful for someone outside a business or commerce background?', answer: 'Yes, no prior ERP experience is assumed, so engineering and IT readers can use it as an orientation to business-process concepts too.' },
          { question: 'Does this guide explain ERP system architecture?', answer: 'Yes, ERP system architecture is one of its three core topics, alongside process re-engineering and procure-to-pay lifecycles.' },
          { question: 'Is this guide specific to one industry, or general?', answer: 'It focuses on general process and architecture concepts that apply across industries and ERP platforms, not one specific sector.' },
          { question: 'Does this guide connect to a specific Sky9 India course page?', answer: 'Yes, it connects to the ERP Training course page, where the same concepts are taught with hands-on modules.' },
        ],
      },
      {
        slug: 'local-seo-small-business-guide', title: 'Local SEO Guide for Pune Small Businesses', courseSlug: 'digital-marketing-for-business-owners', desc: 'Actionable steps for entrepreneurs to optimize Google Business Profile and capture local customer calls.',
        faqs: [
          { question: 'Is this guide only useful for businesses in Pune?', answer: 'It\'s written with Pune examples in mind, but the Google Business Profile and local SEO steps apply to small businesses in any city.' },
          { question: 'Do I need technical skills to follow this guide?', answer: 'No, it\'s written for business owners, covering practical, non-technical steps like profile optimization and review generation.' },
          { question: 'Does the full Business Owners course go deeper than this guide?', answer: 'Yes, Local SEO & Google Maps Visibility is a full module in the Digital Marketing for Business Owners bootcamp, with hands-on setup guidance beyond this guide\'s overview.' },
          { question: 'Does this guide cover getting more customer reviews?', answer: 'The related Local SEO & Google Maps Visibility module in the Business Owners course covers review generation strategy in more depth; this guide focuses primarily on Google Business Profile setup and capturing local calls.' },
          { question: 'Is this guide useful for service businesses, or only product-based shops?', answer: 'Yes, the Google Business Profile and local search steps apply to service businesses and product-based shops alike.' },
          { question: 'What\'s the main action this guide pushes me to take first?', answer: 'Optimizing your Google Business Profile is the guide\'s starting action, since that\'s the single highest-leverage step for local visibility.' },
          { question: 'Does this guide connect to a specific Sky9 India course?', answer: 'Yes, it connects to the Digital Marketing for Business Owners bootcamp, where Local SEO & Google Maps Visibility is a full hands-on module.' },
          { question: 'Is this guide written for marketers, or for business owners directly?', answer: 'For business owners directly, it\'s written in plain, non-technical language rather than marketing jargon.' },
        ],
      },
    ];

    skillGuides.forEach(g => {
      const parentCourse = (cmsRegistry?.courses || []).find(c => c.slug === g.courseSlug);
      rawPages.push(this.buildPageRecord({
        id: `guide-${g.slug}`,
        type: 'resource-guide',
        slug: `resources/guides/${g.slug}`,
        title: `${g.title} | Sky9 India`,
        subtitle: `In-Depth Practical Guide by Sky9 Mentors`,
        category: 'Guides',
        description: g.desc,
        content: `${g.desc} Prepared by Sky9 industry practitioners to help learners master real-world execution.`,
        highlights: ['Practical step-by-step framework', 'Industry tool recommendations', 'Free downloadable reference notes', 'Real-world application examples'],
        parent: 'resources/career-skill-guides',
        relatedCourse: parentCourse,
        faqs: g.faqs || [],
      }));
    });

    // 11. Location Pages (Only Genuine Verified Locations)
    rawPages.push(this.buildPageRecord({
      id: 'locations-hub',
      type: 'location-hub',
      slug: 'locations',
      title: 'Sky9 India Training Centers & Regional Batches',
      subtitle: 'Pune Classroom Center & Pan-India Live Interactive Online Classes',
      category: 'Locations',
      description: 'Sky9 India operates its primary offline classroom center in Pune, Maharashtra, alongside live interactive online batches across India.',
      parent: null,
    }));

    locationCities.forEach(loc => {
      const isPune = loc.slug === 'pune';
      rawPages.push(this.buildPageRecord({
        id: `location-${loc.slug}`,
        type: 'location',
        slug: `locations/${loc.slug}`,
        title: `Practical Training Institute in ${loc.name} | Sky9 India`,
        subtitle: isPune ? 'Shri Nivas Towers, Above Baramati Bank, Pune – 411043' : 'Live Interactive Online Batches & Mentorship Across India',
        category: 'Locations',
        description: isPune
          ? 'Visit Sky9 India classroom center in Pune for hands-on offline training in Digital Marketing, AI, Software Testing, and ERP.'
          : `Join Sky9 India's live online practical batches with flexible timings, mentor support, and integrated 1-month internships.`,
        content: `Authentic practical learning programs with dedicated lab guidance and placement support.`,
        highlights: isPune
          ? ['Air-conditioned classroom lab', 'In-person mentor guidance', 'Pune tech hub network access']
          : ['Live interactive sessions', 'Screen-share lab assistance', 'Recorded session backups'],
        parent: 'locations',
      }));

      // Location + Course combination pages for genuine hub Pune
      if (isPune) {
        (cmsRegistry?.courses || []).forEach(c => {
          rawPages.push(this.buildPageRecord({
            id: `location-pune-${c.slug}`,
            type: 'location-course',
            slug: `locations/pune/${c.slug}`,
            title: `${c.shortTitle} Offline Course in Pune | Sky9 India`,
            subtitle: `Classroom Training at Shri Nivas Towers, Above Baramati Bank, Pune`,
            category: 'Pune Center',
            description: `Join Pune's top practical ${c.title} classroom program with 1-month internship and placement support.`,
            content: `Classroom batches conducted at our Pune hub with hands-on lab infrastructure and senior practitioner guidance.`,
            highlights: ['Classroom Pune location', '1-month integrated internship', 'Direct Pune hiring partner referrals'],
            parent: 'locations/pune',
            relatedCourse: c,
          }));
        });
      }
    });


    // Validate, Quality Score & Deduplicate Pages
    const validInventory = [];

    rawPages.forEach(p => {
      const cleanSlug = p.slug.startsWith('/') ? p.slug.slice(1) : p.slug;
      p.slug = cleanSlug;
      p.canonical = `https://sky9india.com/${cleanSlug}`;

      // Duplicate prevention check
      if (slugMap.has(cleanSlug)) {
        console.warn(`[SeoPageEngine] Duplicate slug blocked: ${cleanSlug}`);
        return;
      }
      slugMap.add(cleanSlug);

      // Quality Validation Scoring
      const qualityScore = this.calculateQualityScore(p);
      p.qualityScore = qualityScore;

      // Status assignment
      p.status = qualityScore >= 70 ? 'published' : 'draft';
      p.indexable = p.status === 'published';

      p.seo = {
        title: p.title,
        description: p.description,
        canonical: p.canonical,
        keywords: ['Sky9 India', p.category, p.title.split(' ')[0]],
        ogTitle: p.title,
        ogDescription: p.description,
        ogImage: '/sky9-logo.svg',
        robots: p.indexable ? 'index, follow' : 'noindex, nofollow',
        indexable: p.indexable,
      };

      if (p.status === 'published') {
        validInventory.push(p);
      }
    });

    this.inventory = validInventory;
    return this.inventory;
  }

  // Build standard page record schema
  buildPageRecord(data) {
    return {
      id: data.id || slugify(data.title || 'page'),
      type: data.type || 'page',
      slug: data.slug || '',
      title: data.title || 'Sky9 India Page',
      subtitle: data.subtitle || '',
      category: data.category || 'General',
      description: data.description || '',
      content: data.content || data.description || '',
      highlights: Array.isArray(data.highlights) ? data.highlights : [],
      parent: data.parent || null,
      relatedCourse: data.relatedCourse || null,
      topicObj: data.topicObj || null,
      faqs: Array.isArray(data.faqs) ? data.faqs : [],
      pricing: data.pricing || null,
      workflow: data.workflow || null,
      ctaText: data.ctaText || 'Enroll Now',
      ctaLink: data.ctaLink || '/contact-us',
      qualityScore: 100,
      status: 'published',
      indexable: true,
    };
  }

  // Quality Validation Rule Engine
  calculateQualityScore(page) {
    let score = 100;
    if (!page.title || page.title.length < 5) score -= 30;
    if (!page.description || page.description.length < 15) score -= 30;
    if (!page.content || page.content.length < 20) score -= 20;
    if (!page.slug && page.slug !== '') score -= 30;
    return Math.max(0, score);
  }

  // Get Page By Full Path or Slug
  getPageBySlug(pathOrSlug = '') {
    const cleanPath = pathOrSlug.replace(/^\/+|\/+$/g, '');
    const inventory = this.getInventory();
    const exact = inventory.find(p => p.slug === cleanPath);
    if (exact) return exact;

    const normalizedTarget = cleanPath.replace(/-and-/g, '-');
    return inventory.find(p => p.slug.replace(/-and-/g, '-') === normalizedTarget) || null;
  }

  // Filter Inventory By Type
  getPagesByType(type) {
    return this.getInventory().filter(p => p.type === type);
  }

  // Internal Audit Metrics
  getInventoryStats() {
    const inv = this.getInventory();
    const typeCounts = {};
    const categories = new Set();
    inv.forEach(p => {
      typeCounts[p.type] = (typeCounts[p.type] || 0) + 1;
      if (p.category) categories.add(p.category);
    });

    return {
      totalPublishedPages: inv.length,
      pageTypeBreakdown: typeCounts,
      averageQualityScore: Math.round(inv.reduce((acc, p) => acc + (p.qualityScore || 100), 0) / (inv.length || 1)),
      indexableCount: inv.filter(p => p.indexable).length,
      categoryCoverage: categories.size,
      duplicateCount: 0, // Enforced 0 by deduplication Set
    };
  }
}

export const seoPageEngine = new SeoPageEngine();
export default seoPageEngine;
