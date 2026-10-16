import React, { lazy, Suspense } from 'react';
import { Routes, Route, useParams, Navigate, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { audiencePages, standalonePages } from './data/sitemapData';
import seoPageEngine from './services/seoPageEngine';
import contentRepository from './services/contentRepository';
import { PageTransition, LoadingSkeleton } from './components/common/animations/PageTransition';

// Route-Level Code Splitting for Performance & Core Web Vitals
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Internship = lazy(() => import('./pages/Internship'));
const Certification = lazy(() => import('./pages/Certification'));
const Career = lazy(() => import('./pages/Career'));
const Contact = lazy(() => import('./pages/Contact'));
const CoursePage = lazy(() => import('./pages/courses/CoursePage'));
const TopicPage = lazy(() => import('./pages/courses/TopicPage'));
const CategoryPage = lazy(() => import('./pages/category/CategoryPage'));
const GenericPage = lazy(() => import('./pages/standalone/GenericPage'));
const AudiencePage = lazy(() => import('./pages/audience/AudiencePage'));
const LocationPage = lazy(() => import('./pages/location/LocationPage'));
const ResourcesPage = lazy(() => import('./pages/resources/ResourcesPage'));
const SitemapPage = lazy(() => import('./pages/SitemapPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const DesignSystemPage = lazy(() => import('./pages/DesignSystemPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const CoursesHubPage = lazy(() => import('./pages/courses/CoursesHubPage'));
const SeoLandingPage = lazy(() => import('./pages/standalone/SeoLandingPage'));

function App() {
  const location = useLocation();

  return (
    <Layout>
      <Suspense fallback={<LoadingSkeleton />}>
        <PageTransition key={location.pathname}>
          <Routes location={location}>
            {/* Core Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/contact" element={<Navigate to="/contact-us" replace />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/terms-and-conditions" element={<TermsPage />} />
            <Route path="/design-system" element={<Navigate to="/resources/ui-design-system" replace />} />

            {/* About Hierarchy: the hub's own index page is a real nested page
                (its visible/breadcrumb name is "About Sky9"), not the bare category root */}
            <Route path="/about/about-overview" element={<About />} />
            <Route path="/about-us/about-sky9" element={<About />} />
            <Route path="/about" element={<Navigate to="/about/about-overview" replace />} />
            <Route path="/about-us" element={<Navigate to="/about/about-overview" replace />} />

            {/* Company Standalone Pages, nested under the About section */}
            <Route path="/about/why-choose-sky9-india" element={<Navigate to="/about/why-choose-sky9" replace />} />
            <Route path="/about/commitment" element={<Navigate to="/about/our-commitment" replace />} />
            <Route path="/about/learning-approach" element={<Navigate to="/about/our-learning-approach" replace />} />
            <Route path="/about/mission" element={<Navigate to="/about/our-mission" replace />} />
            <Route path="/about/vision" element={<Navigate to="/about/our-vision" replace />} />
            <Route path="/about/student-success" element={<Navigate to="/about/student-success-stories" replace />} />
            <Route path="/about/:slug" element={<GenericPage />} />
            <Route path="/mission" element={<Navigate to="/about/our-mission" replace />} />
            <Route path="/vision" element={<Navigate to="/about/our-vision" replace />} />
            <Route path="/our-mission" element={<Navigate to="/about/our-mission" replace />} />
            <Route path="/our-vision" element={<Navigate to="/about/our-vision" replace />} />
            <Route path="/why-sky9" element={<Navigate to="/about/why-choose-sky9" replace />} />
            <Route path="/learning-approach" element={<Navigate to="/about/our-learning-approach" replace />} />
            <Route path="/our-learning-approach" element={<Navigate to="/about/our-learning-approach" replace />} />
            <Route path="/commitment" element={<Navigate to="/about/our-commitment" replace />} />
            <Route path="/our-commitment" element={<Navigate to="/about/our-commitment" replace />} />
            <Route path="/who-can-join" element={<Navigate to="/about/who-can-join" replace />} />
            <Route path="/student-success" element={<Navigate to="/about/student-success-stories" replace />} />
            <Route path="/student-success-stories" element={<Navigate to="/about/student-success-stories" replace />} />

            {/* Courses Hub (overview/index of all courses across every category) */}
            <Route path="/courses" element={<CoursesHubPage />} />
            <Route path="/sitemap" element={<Navigate to="/resources/visual-sitemap-directory" replace />} />

            {/* Digital Marketing, AI & Automation, Software Testing, and ERP each ARE
                their category inside the "Courses" megamenu (one course per category),
                so they nest directly under /courses/ (navbar category = first URL
                segment). Each gets an explicit literal route with the real internal
                slug injected as a prop (see contentRepository.COURSE_URL_SLUGS). */}
            {/* Courses: literal canonical routes matching full course page names */}
            <Route path="/courses/digital-marketing-for-business-owners" element={<Navigate to="/business-owners/digital-marketing-for-business-owners" replace />} />
            <Route path="/courses/digital-marketing-training" element={<CoursePage slug="digital-marketing" />} />
            <Route path="/courses/digital-marketing-training/:topicSlug" element={<TopicPage courseSlug="digital-marketing" />} />
            <Route path="/courses/digital-marketing-training/:topicSlug/:subtopicSlug" element={<SeoLandingPage />} />

            <Route path="/courses/ai-automation-training" element={<CoursePage slug="ai-automation" />} />
            <Route path="/courses/ai-automation-training/:topicSlug" element={<TopicPage courseSlug="ai-automation" />} />
            <Route path="/courses/ai-automation-training/:topicSlug/:subtopicSlug" element={<SeoLandingPage />} />

            <Route path="/courses/software-testing-training" element={<CoursePage slug="software-testing" />} />
            <Route path="/courses/software-testing-training/:topicSlug" element={<TopicPage courseSlug="software-testing" />} />
            <Route path="/courses/software-testing-training/:topicSlug/:subtopicSlug" element={<SeoLandingPage />} />

            <Route path="/courses/erp-training" element={<CoursePage slug="erp" />} />
            <Route path="/courses/erp-training/:topicSlug" element={<TopicPage courseSlug="erp" />} />
            <Route path="/courses/erp-training/:topicSlug/:subtopicSlug" element={<SeoLandingPage />} />

            {/* Legacy course URLs without "-training" -> redirect to canonical "-training" URL */}
            <Route path="/courses/digital-marketing/*" element={<LegacyTrainingSuffixRedirect base="/courses/digital-marketing-training" />} />
            <Route path="/courses/digital-marketing" element={<Navigate to="/courses/digital-marketing-training" replace />} />
            <Route path="/courses/ai-automation/*" element={<LegacyTrainingSuffixRedirect base="/courses/ai-automation-training" />} />
            <Route path="/courses/ai-automation" element={<Navigate to="/courses/ai-automation-training" replace />} />
            <Route path="/courses/software-testing/*" element={<LegacyTrainingSuffixRedirect base="/courses/software-testing-training" />} />
            <Route path="/courses/software-testing" element={<Navigate to="/courses/software-testing-training" replace />} />
            <Route path="/courses/erp/*" element={<LegacyTrainingSuffixRedirect base="/courses/erp-training" />} />
            <Route path="/courses/erp" element={<Navigate to="/courses/erp-training" replace />} />

            {/* Legacy /courses/* URLs: redirect to the new category-matched URL.
                Covers both /courses/:courseSlug and any deeper nested topic/subtopic
                path via the splat, so every previously-indexed link still resolves.
                courseSlug here is the OLD internal slug (e.g. "digital-marketing"),
                translated to the new canonical URL by getCourseUrl(). */}
            <Route path="/courses/:courseSlug/*" element={<LegacyCourseSubRedirect />} />
            <Route path="/courses/:courseSlug" element={<LegacyCourseRedirect />} />

            {/* Previous sessions' interim Business Owners URLs (superseded) */}
            <Route path="/Buissnessowner/*" element={<Navigate to="/business-owners/digital-marketing-for-business-owners" replace />} />
            <Route path="/business-owners/digital-marketing-business/*" element={<LegacyBusinessOwnersSubRedirect />} />
            <Route path="/business-owners/digital-marketing-business" element={<Navigate to="/business-owners/digital-marketing-for-business-owners" replace />} />
            <Route path="/business-owners/digital-marketing-for-bissnessowner/*" element={<LegacyBusinessOwnersSubRedirect />} />
            <Route path="/business-owners/digital-marketing-for-bissnessowner" element={<Navigate to="/business-owners/digital-marketing-for-business-owners" replace />} />

            {/* Legacy bare-root course URLs from previous URL schemes */}
            <Route path="/digital-marketing-training" element={<Navigate to="/courses/digital-marketing-training" replace />} />
            <Route path="/ai-automation-training" element={<Navigate to="/courses/ai-automation-training" replace />} />
            <Route path="/software-testing-training" element={<Navigate to="/courses/software-testing-training" replace />} />
            <Route path="/erp-training" element={<Navigate to="/courses/erp-training" replace />} />
            <Route path="/digital-marketing" element={<Navigate to="/courses/digital-marketing-training" replace />} />
            <Route path="/ai-automation" element={<Navigate to="/courses/ai-automation-training" replace />} />
            <Route path="/software-testing" element={<Navigate to="/courses/software-testing-training" replace />} />
            <Route path="/erp" element={<Navigate to="/courses/erp-training" replace />} />

            {/* Standalone Topics */}
            <Route path="/topics/:topicSlug" element={<SeoLandingPage />} />

            {/* Business Owners: its own top-level nav category; the category
                root redirects to the course's own page, which carries a
                descriptive URL segment distinct from its internal slug. Topic
                pages live as flat siblings directly under the category root
                (no /business-owners/<course-slug>/<topic> nesting). */}
            <Route path="/business-owners" element={<Navigate to="/business-owners/digital-marketing-for-business-owners" replace />} />
            <Route path="/business-owners/digital-marketing-for-business-owners" element={<CoursePage slug="digital-marketing-for-business-owners" />} />
            <Route path="/business-owners/digital-marketing-for-bussiness-owner/*" element={<LegacyBusinessOwnersSubRedirect />} />
            <Route path="/business-owners/digital-marketing-for-bussiness-owner" element={<Navigate to="/business-owners/digital-marketing-for-business-owners" replace />} />
            {/* Business Owners Pathway is an audience page, not a course topic,
                but nests under the Business Owners nav category like every
                other page in this section (navbar category = first URL segment) */}
            <Route path="/for-business-owners" element={<Navigate to="/business-owners/buissness-owners-pathways" replace />} />
            <Route path="/business-owners/buissness-owners-pathways" element={<AudiencePage audienceSlug="for-business-owners" />} />

            <Route path="/business-owners/local-seo" element={<Navigate to="/business-owners/local-seo-and-google-maps" replace />} />
            <Route path="/business-owners/:topicSlug" element={<TopicPage courseSlug="digital-marketing-for-business-owners" />} />
            <Route path="/business-owners/:topicSlug/:subtopicSlug" element={<SeoLandingPage />} />

            {/* Legacy: topic pages briefly nested under one of this course's
                past URL segments -> the current flat topic URL, one literal
                route per topic so there is no ambiguity with the dynamic
                /business-owners/:topicSlug route above. */}
            {BUSINESS_OWNERS_TOPIC_SLUGS.flatMap((topicSlug) => (
              ['digital-marketing-for-bussiness-owner', 'digital-marketing-for-business-owners'].map((oldCourseSegment) => (
                <Route
                  key={`${oldCourseSegment}/${topicSlug}`}
                  path={`/business-owners/${oldCourseSegment}/${topicSlug}`}
                  element={<Navigate to={`/business-owners/${topicSlug}`} replace />}
                />
              ))
            ))}

            {/* Career Hierarchy (top-level nav section, its own plain name;
                the hub's own index page lives one segment deeper than the bare
                category root, which redirects there) */}
            <Route path="/career-opportunities-overview/:categorySlug/:roleSlug" element={<LegacyHubNestedRedirect hub="career" depth={2} />} />
            <Route path="/career-opportunities-overview/:categorySlug" element={<LegacyHubNestedRedirect hub="career" depth={1} />} />
            <Route path="/career-opportunities-overview" element={<Navigate to="/career/career-opportunities-overview" replace />} />
            <Route path="/career/career-opportunities-overview" element={<Career />} />
            <Route path="/career/career-overview" element={<Navigate to="/career/career-opportunities-overview" replace />} />
            <Route path="/career" element={<Navigate to="/career/career-opportunities-overview" replace />} />
            <Route path="/career/:categorySlug" element={<CategoryPage />} />
            <Route path="/career/:categorySlug/:roleSlug" element={<SeoLandingPage />} />

            {/* Internship Hierarchy (top-level nav section, its own plain name;
                nested course pages carry a "-internship" suffix, e.g.
                /internship/digital-marketing-internship; the hub's own index
                page lives one segment deeper than the bare category root) */}
            <Route path="/internship-overview/:categorySlug" element={<LegacyHubNestedRedirect hub="internship" depth={1} />} />
            <Route path="/internship-overview" element={<Navigate to="/internship/internship-overview" replace />} />
            <Route path="/internship/internship-overview" element={<Internship />} />
            <Route path="/internship" element={<Navigate to="/internship/internship-overview" replace />} />
            <Route path="/internship/:categorySlug" element={<CategoryPage />} />

            {/* Certification Hierarchy (top-level nav section, its own plain name;
                the visible "Certification Overview" page name lives one level in,
                as this hub's own index page, one segment deeper than the bare
                category root, which redirects there) */}
            <Route path="/certification-overview/:categorySlug" element={<LegacyHubNestedRedirect hub="certification" depth={1} />} />
            <Route path="/certification-overview" element={<Navigate to="/certification/certification-overview" replace />} />
            <Route path="/certification/certification-overview" element={<Certification />} />
            <Route path="/certification" element={<Navigate to="/certification/certification-overview" replace />} />
            <Route path="/certification/:categorySlug" element={<CategoryPage />} />

            {/* Resource Hierarchy (the hub's own index page lives one segment
                deeper than the bare category root, which redirects there) */}
            <Route path="/resources/learning-overview" element={<ResourcesPage />} />
            <Route path="/resources/resources-overview" element={<Navigate to="/resources/learning-overview" replace />} />
            <Route path="/resources" element={<Navigate to="/resources/learning-overview" replace />} />
            <Route path="/resources/visual-sitemap-directory" element={<SitemapPage />} />
            <Route path="/resources/sitemap" element={<Navigate to="/resources/visual-sitemap-directory" replace />} />
            <Route path="/resources/ui-design-system" element={<DesignSystemPage />} />
            <Route path="/resources/faqs" element={<Navigate to="/resources/frequently-asked-questions" replace />} />
            <Route path="/resources/case-studies" element={<Navigate to="/resources/student-success-stories" replace />} />
            <Route path="/resources/tools" element={<Navigate to="/resources/industry-tool-index" replace />} />
            <Route path="/resources/guides" element={<Navigate to="/resources/career-skill-guides" replace />} />
            <Route path="/resources/guides/:guideSlug" element={<SeoLandingPage />} />
            <Route path="/resources/:resourceType" element={<ResourcesPage />} />

            {/* Location Architecture */}
            <Route path="/locations" element={<LocationPage />} />
            <Route path="/locations/:citySlug" element={<LocationPage />} />
            <Route path="/locations/:citySlug/:courseSlug" element={<LocationPage />} />

            {/* Dynamic Audience & SEO Page Handler */}
            <Route path="/:audienceSlug" element={<AudienceRouteHandler />} />

            {/* 404 Catch All */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </PageTransition>
      </Suspense>
    </Layout>
  );
}

// Router handler to distinguish between audience pages, standalone pages,
// SEO landing pages, and 404 for any single-segment path. Every course now
// has its own explicit literal route (see the routes list above), so this
// never needs to resolve courses itself.
function AudienceRouteHandler() {
  const { audienceSlug } = useParams();

  const isAudience = audiencePages.some(a => a.slug === audienceSlug);
  const isStandalone = standalonePages.some(s => s.slug === audienceSlug);
  const seoRecord = seoPageEngine.getPageBySlug(audienceSlug);

  if (isAudience) {
    return <AudiencePage />;
  }
  if (isStandalone) {
    return <GenericPage />;
  }
  if (seoRecord) {
    return <SeoLandingPage />;
  }
  return <NotFoundPage />;
}

// Business Owners' full topic slug list, used only to enumerate literal
// legacy redirects for topic pages that were briefly nested under one of
// this course's past URL segments (see routes above).
const BUSINESS_OWNERS_TOPIC_SLUGS = [
  'automated-lead-funnels',
  'local-seo-and-google-maps',
  'high-roi-paid-advertising',
  'social-media-branding',
  'crm-lead-nurturing',
  'build-your-online-presence',
  'understand-your-target-audience',
  'content-strategy-for-business-owners',
  'mapping-the-customer-journey',
  'ai-for-business-owners',
  'online-branding-for-local-businesses',
  'customer-acquisition-systems',
  'marketing-analytics-for-owners',
];

// Previous URL schemes' course slugs that no longer resolve directly via
// getCourseUrl (the internal identifier itself changed over time), mapped to
// the course's current internal slug so legacy /courses/* links still resolve.
const LEGACY_COURSE_SLUG_ALIAS = {
  'digital-marketing-business': 'digital-marketing-for-business-owners',
  'digital-marketing-for-bissnessowner': 'digital-marketing-for-business-owners',
};

// Legacy "-training"-suffixed course URL (e.g. /courses/ai-automation-training)
// -> the current short course URL, preserving any nested topic/subtopic path.
function LegacyTrainingSuffixRedirect({ base }) {
  const { '*': rest } = useParams();
  return <Navigate to={rest ? `${base}/${rest}` : base} replace />;
}

// Legacy /courses/:courseSlug -> new category-matched URL (e.g. /courses/erp, /business-owners/digital-marketing-for-bussiness-owner)
function LegacyCourseRedirect() {
  const { courseSlug } = useParams();
  const resolvedSlug = LEGACY_COURSE_SLUG_ALIAS[courseSlug] || courseSlug;
  return <Navigate to={contentRepository.getCourseUrl(resolvedSlug)} replace />;
}

// Legacy /courses/:courseSlug/<anything nested> -> same nested path under the new course URL.
// (Topic-level slugs nested under Business Owners were also renamed to full descriptive
// names; an old nested topic link lands on the renamed course's own page rather than
// attempting to guess the new topic slug.)
function LegacyCourseSubRedirect() {
  const { courseSlug, '*': rest } = useParams();
  const resolvedSlug = LEGACY_COURSE_SLUG_ALIAS[courseSlug];
  const base = contentRepository.getCourseUrl(resolvedSlug || courseSlug);
  return <Navigate to={resolvedSlug ? base : (rest ? `${base}/${rest}` : base)} replace />;
}

// Interim /business-owners/<old-slug>/* URLs (from earlier sessions, before the
// course's own slug settled) -> the course's current page.
function LegacyBusinessOwnersSubRedirect() {
  const { '*': rest } = useParams();
  const base = '/business-owners/digital-marketing-for-business-owners';
  return <Navigate to={rest ? `${base}/${rest}` : base} replace />;
}

// Legacy /career|internship|certification hub URL -> the current hub prefix,
// translating the nested course segment through getCategoryUrl (which also
// applies Internship's "-internship" child-slug suffix where relevant).
function LegacyHubNestedRedirect({ hub, depth }) {
  const { categorySlug, roleSlug } = useParams();
  const realCourseSlug = contentRepository.resolveCategoryCourseSlug(hub, categorySlug);
  const base = contentRepository.getCategoryUrl(hub, realCourseSlug);
  return <Navigate to={depth === 2 ? `${base}/${roleSlug}` : base} replace />;
}

export default App;
