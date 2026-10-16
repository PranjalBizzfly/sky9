# Sky9 India — Master Website Development Plan

**Document type:** Single source-of-truth implementation blueprint
**Subject:** sky9india (React 19 / Vite 8 / Tailwind CSS v4 practical-training-institute website)
**Live URL:** https://sky9india1.netlify.app/ (target production domain: `https://sky9india.com`, already referenced in code — see §26)
**Repository:** `github.com/SudeshShelar/sky9india` — branches `main` (production) and `features` (working branch)
**Status of this document:** Reverse-engineered and consolidated from the actual, currently-built codebase (not a greenfield spec). Every fact below is either (a) read directly from source files, or (b) marked `TBD — requires project confirmation`. Nothing is invented.

> **How to use this document.** Anyone — human or AI — picking up this project should be able to read this file top to bottom and know exactly what exists, how it is built, what rules govern changes, and what is still undecided. When in doubt about a business fact (a price, a claim, a statistic, a policy), this document — and the source files it cites — is the only source of truth. Never invent a substitute.

---

## 0. Source-of-Truth Rule (applies to the entire document)

1. Business facts (courses, fees, durations, company details, testimonials, stats) are pulled verbatim from `src/data/siteData.js` and `src/data/sitemapData.js`. Do not alter these values without explicit business confirmation.
2. Where the project has **no existing decision** (payment gateway, user accounts, analytics platform, numeric performance budget, a named WCAG conformance level), this document marks it `TBD — requires project confirmation` rather than inventing one. Sections 17, 21, 22, and 30 contain the highest concentration of these.
3. The 42-file spec library at `Website Blank MD File-20260910T044648Z-1-001/Website Blank MD File/` is a **generic, reusable business-website framework** (audit → checklist → user-selection → implement-only-what's-selected workflow), not Sky9-specific content. Where this plan cites a rule from that library, it is a *process rule*, not a confirmed Sky9 fact. That library's own `19-master-website-development-rules.md` and `34-ai-development-rules.md` are the authoritative behavior rules for any AI/developer working on this repo — §29 restates them concretely.
4. The project currently has **no payment gateway, no authenticated backend, no database, and no analytics/tracking scripts**. Every section below reflects that; do not represent otherwise.

---

## 1. Project Overview

| Field | Value |
|---|---|
| Project name | Sky9 India |
| Tagline | "Learning by Doing" |
| Business type | Practical, hands-on training institute (in-person Pune campus + live online) |
| Domains taught | Digital Marketing, AI & Automation, Software Testing (QA), ERP, and Digital Marketing for Business Owners |
| Primary location | 2nd Floor, Shri Nivas Towers, Above Baramati Bank, Pune – 411043, Maharashtra, India |
| Phone | +91 73 19 41 95 19 |
| Email | info@Sky9India.com |
| Social | facebook.com/sky9india, instagram.com/sky9india, youtube.com/@sky9india, linkedin.com/company/sky9india, x.com/sky9india |

**Business objective.** Convert visitors (students, fresh graduates, working professionals, entrepreneurs, career switchers) into course enrollments and admissions enquiries, and establish topical authority (SEO) across every skill/course/career-role permutation the institute teaches.

**Website objective.** A fast, content-rich, SEO-indexable marketing and lead-generation site — not a transactional e-commerce or logged-in learning platform. Its job is to inform, build trust (curriculum depth, outcomes, FAQs), and capture enquiries; it hands off to human admissions counselors from there.

**Target audience** (from `src/data/sitemapData.js → audiencePages`):
1. College students (`/for-students`)
2. Fresh graduates (`/for-freshers`)
3. Engineering/business graduates (`/for-graduates`)
4. Working professionals (`/for-working-professionals`)
5. Entrepreneurs / business owners (`/for-business-owners`)
6. Career switchers (`/for-career-switchers`)

**Core value proposition:** 100% practical, hands-on learning with real tools, live projects, an integrated 1-month internship on every core track, and certification guidance — not lecture-only theory.

**Primary user journeys:**
- Discover a course (via nav, search engine landing on a topic/subtopic page, or an audience pathway) → read curriculum/outcomes/FAQ → submit an enquiry/lead form → get contacted by admissions.
- Compare course fees (`/pricing`) → submit a scholarship/fee enquiry.
- Check a specific city (`/locations/:city`) → confirm classroom vs. online availability → enquire.
- Browse `/resources` (FAQs, guides, case studies, tool index) for self-serve answers before converting.

**Technology assumptions (confirmed, not assumed — see §25):** React 19 + Vite 8 SPA, Tailwind CSS v4, React Router v7 client-side routing, Framer Motion animation, static/local data files as the CMS, deployed to Netlify from GitHub. No server-side rendering, no backend API, no database.

**Project scope:**
- Full marketing/informational site: home, institutional pages, 5 course tracks with nested topic/subtopic pages, career/internship/certification pathways per course, audience pathway pages, location pages, resources hub, pricing, contact, sitemap, terms, and a public UI design-system reference page.
- Client-side lead-capture forms (enquiry/quick-enquiry/course-specific variants) that currently persist to `localStorage` only.
- Procedurally generated SEO metadata + JSON-LD structured data for ~391 pages.

**Out-of-scope functionality (confirmed absent, not merely undocumented):**
- Payment processing / checkout / e-commerce.
- Authenticated user accounts, student login, role-based dashboards (the existing `LoginModal.jsx` is a **front-end-only UI mock** — see §17).
- A backend API, database, or CMS admin panel.
- Real analytics/tracking scripts (no GA4/GTM/Meta Pixel present anywhere in `index.html` or `src/`).
- Multi-language / i18n.

**Known constraints:**
- All content edits currently require a code change (no CMS UI) — see §10, §12.
- Netlify build config (`netlify.toml`) only recently existed on the `features` branch and has now been merged to `main`; confirm in the Netlify dashboard which branch is the actual connected production branch (`TBD — requires project confirmation`, see §26).
- No `.env` file exists in the repo; there are currently no secrets/environment variables to manage.

---

## 2. Project Discovery & Requirements

### Functional requirements — **Required** (already implemented)
- Multi-level navigation (top nav, mega menu, mobile drawer) — `src/components/layout/Navbar.jsx`
- 5-course catalog with detail pages, curriculum modules, learning outcomes, FAQs, pricing sidebar
- Procedurally generated topic/subtopic/career-role/guide pages (391 total live URLs)
- Location pages per city, audience pathway pages, standalone institutional pages
- Lead/enquiry forms with validation, loading/success/error states
- Light/Dark theme toggle with persistence
- Client-side generated `sitemap.xml` + static `robots.txt`
- Per-page SEO metadata + JSON-LD schema injection
- Downloadable course-details PDF (`jspdf`, `src/utils/generateCourseDetailsPDF.js`)
- Cookie-consent banner

### Functional requirements — **Conditional / not yet built**
- Real backend lead delivery (email/CRM/WhatsApp notification on form submit) — `TBD`
- Real user authentication behind `LoginModal.jsx` — `TBD`
- Payment collection — `TBD` (no evidence this is required; institute takes fees offline/by phone per current copy)

### Non-functional requirements
| Category | Status |
|---|---|
| Business | Lead generation + SEO visibility for an offline-first (Pune) + online training institute |
| User | Fast page loads, correct mobile rendering, working forms, accurate course info |
| Content | All content sourced from `src/data/*.js` — no fabricated claims (§0) |
| Technical | Static SPA buildable with `npm run build`, deployable to Netlify (§26) |
| Design | Preserve existing emerald/dark-slate brand system (§8) — do not redesign |
| SEO | Every generated page must have unique title/description/canonical + relevant schema (§15) |
| Accessibility | Semantic HTML, keyboard-navigable menus/forms, ARIA on interactive widgets (§18) |
| Performance | Route-level code splitting, WebP images, lazy-loaded below-fold assets (§19) |
| Security | No secrets in front-end code; none currently exist to leak (§21) |
| Deployment | Netlify, auto-build from GitHub push (§26) |

Required / Optional / Conditional / TBD is called out per-item throughout §§3–24 rather than repeated here.

---

## 3. Website Information Architecture

```
Home (/)
├── About (dropdown)
│   ├── About Sky9            /about-us
│   ├── Mission                /mission
│   ├── Vision                 /vision
│   ├── Why Choose Sky9        /why-sky9
│   ├── Learning Approach      /learning-approach
│   └── Our Commitment         /commitment
├── Courses (megamenu, 4 tracks)
│   ├── Digital Marketing Training     /courses/digital-marketing
│   │   └── 9 topic pages → each with subtopic pages
│   ├── AI & Automation Training       /courses/ai-automation
│   │   └── 7 topic pages → each with subtopic pages
│   ├── Software Testing Training      /courses/software-testing
│   │   └── 6 topic pages → each with subtopic pages
│   └── ERP Systems Training           /courses/erp
│       └── 5 topic pages → each with subtopic pages
├── Business Owners (dropdown — 5th course track, own top-nav slot)
│   ├── Digital Marketing for Business Owners  /courses/digital-marketing-business
│   └── 5 topic pages → each with subtopic pages
├── Internship (dropdown)
│   ├── Overview                /internship
│   └── Per-course internship   /internship/:categorySlug (×4)
├── Certification (dropdown)
│   ├── Overview                 /certification
│   └── Per-course certification /certification/:categorySlug (×4)
├── Career (dropdown)
│   ├── Overview              /career
│   └── Per-course careers    /career/:categorySlug (×4) → career-role sub-pages
├── Resources (dropdown)
│   ├── Hub                   /resources
│   ├── FAQs                  /resources/faqs
│   ├── Guides                /resources/guides → per-guide pages
│   ├── Case Studies          /resources/case-studies
│   └── Tools Index           /resources/tools
├── Contact                   /contact-us
│
├── Audience Pathways (linked from home/footer, not top nav)
│   /for-students, /for-freshers, /for-graduates,
│   /for-working-professionals, /for-business-owners, /for-career-switchers
├── Locations                 /locations, /locations/:city, /locations/:city/:course
├── Pricing                   /pricing
├── Sitemap directory         /sitemap
├── Terms & Conditions        /terms-and-conditions
├── UI Design System (internal reference) /design-system
└── 404                       (catch-all)
```

This hierarchy is **implemented**, not proposed — it is read directly from `src/App.jsx` routes and `src/data/headerNavigationData.js`. Do not add pages outside this hierarchy without an explicit new requirement.

---

## 4. Complete Sitemap

The site does **not** hardcode ~400 individual page definitions. It uses a **template + data-driven generation** system (`src/services/seoPageEngine.js`), which is exactly the scalable pattern this plan requires (§10). Below: the template classes and the real counts each currently produces.

| Page class | Template component | Data source | Count today |
|---|---|---|---|
| Home | `pages/Home.jsx` | `siteData.js` | 1 |
| Core static (About, Contact, Pricing, Sitemap, Terms, Design System) | dedicated page components | `siteData.js` | 6 |
| Institutional standalone (Mission, Vision, Why Sky9, Learning Approach, Commitment, Who Can Join, Student Success) | `pages/standalone/GenericPage.jsx` | `sitemapData.js → standalonePages` | 7 |
| Audience pathway | `pages/audience/AudiencePage.jsx` | `sitemapData.js → audiencePages` | 6 |
| Course track | `pages/courses/CoursePage.jsx` + `components/course/CourseHero.jsx` | `siteData.js → courses` | 5 |
| Course topic | `pages/courses/TopicPage.jsx` | `sitemapData.js → courseTopics` | 32 (9+7+6+5+5 across the 5 tracks) |
| Course subtopic | `pages/standalone/SeoLandingPage.jsx` | generated per topic's `topics[]` array | ~214 |
| Career category | `pages/category/CategoryPage.jsx` | `siteData.js → careerOpportunities` per course | 4 |
| Career role | `pages/standalone/SeoLandingPage.jsx` | generated per course's `careerOpportunities[]` | 27 |
| Internship category | `pages/category/CategoryPage.jsx` | per course | 4 |
| Certification category | `pages/category/CategoryPage.jsx` | per course | 4 |
| Location | `pages/location/LocationPage.jsx` | `sitemapData.js → locationCities` | 5 cities (+ city×course combinations) |
| Resource hub + categories | `pages/resources/ResourcesPage.jsx` | `sitemapData.js → resourceCategories` | 4 |
| Resource guide | `pages/standalone/SeoLandingPage.jsx` | `sitemapData.js → skillGuides` | 5 |
| **Total indexable URLs (live count)** | | `dist/sitemap.xml` | **391** |

For every page, the per-page fields defined in `contentModels.js` (see §10) are: `title, subtitle, slug, parent, category, description, content, highlights[], faqs[], image{}, seo{}`. Breadcrumbs, related content, and CTA are derived automatically by shared components (`Breadcrumb.jsx`, `RelatedContent.jsx`, `CTASection.jsx`) rather than authored per page — this is what keeps ~400 pages maintainable from a handful of template files.

**Do not** create one React component per URL. Any new page class must go through `seoPageEngine.js` + an existing or new template, never a one-off hardcoded page.

---

## 5. URL & Routing Architecture

- **Routing library:** `react-router-dom` v7, `<BrowserRouter>`, all route page components `React.lazy`-loaded (route-level code splitting).
- **Naming convention:** lowercase, hyphen-separated, descriptive — e.g. `/courses/digital-marketing/seo`, `/career/software-testing/qa-analyst`. Confirmed consistent across all 391 generated URLs.
- **Parent/child routes:** `/courses/:slug` → `/courses/:courseSlug/:topicSlug` → `/courses/:courseSlug/:topicSlug/:subtopicSlug`; same pattern for `/career/:categorySlug/:roleSlug`, `/locations/:citySlug/:courseSlug`.
- **Canonical URLs:** generated per page in `SeoHead.jsx` (`window.location.href` minus query string, or an explicit `canonical` prop).
- **Legacy redirects (implemented):**
  - `/about` → `/about-us`
  - `/contact` → `/contact-us`
  - `/courses/digital-marketing-for-business-owners` → `/courses/digital-marketing-business`
  - `/courses/erp-training` → `/courses/erp`
- **Trailing slash policy:** no trailing slash on any route (confirmed from `App.jsx` route definitions).
- **404 handling:** catch-all `<Route path="*" element={<NotFoundPage />} />`.
- **Dynamic route validation:** `CoursePage.jsx` calls `contentRepository.getCourseBySlug(slug)`; if not found, `<Navigate to="/courses" replace />`. The `/:audienceSlug` catch-all route (`AudienceRouteHandler`) checks audience → standalone → SEO-engine lookups in that order, falling through to `<NotFoundPage />` if none match.
- **Sitemap inclusion:** every page returned by `seoPageEngine.getInventory()` with `status: 'published'` and `indexable: true` is included in `dist/sitemap.xml`, regenerated on every `npm run build` via `scripts/generate-sitemap.mjs`.
- **New URL rule (from the existing spec library, `23-seo-url-structure.md`):** any future URL change to an already-published page requires a permanent redirect mapped as `Old URL → New URL → Redirect Status`, never a silent break or a blanket redirect to the homepage.

---

## 6. Navigation Architecture

**Component:** `src/components/layout/Navbar.jsx` (fixed header, scroll-aware background/height transition).

- **Desktop (`lg:` and above):** full horizontal nav — plain links for Home/Contact, dropdowns for About/Business Owners/Internship/Certification/Career/Resources, a 4-column **mega menu** for Courses. Dropdowns open on hover/focus and close on outside-click or `Escape`. Right side: theme toggle, Contact link, Log In button, Enroll Now CTA.
- **Mobile (below `lg:`):** hamburger opens a full-screen right-side drawer (Framer Motion slide-in) with an accordion list (courses/topics nested under each expandable category), a focus-trap between first/last focusable elements, body-scroll lock while open, and bottom Log In / Enroll Now CTAs. Confirmed keyboard-accessible (`Escape` closes, focus wraps).
- **Breadcrumbs:** `components/common/Breadcrumb.jsx`, auto-derived per page via `contentRepository.getAutoBreadcrumbs(path)`; rendered inside every `PageHero`/`CourseHero`.
- **Footer navigation:** `src/data/footerNavigationData.js` — columns for Courses, Digital Marketing, AI & Automation, Business Owners, Software Testing, ERP, Learning & Career, Company, Quick Links. Footer itself (`Footer.jsx`) has **three separate hand-built responsive layouts** (desktop ≥1280px 12-col grid, tablet 768–1279px, mobile <768px accordion) rather than one grid reflowing — already implemented and verified working.
- **Internal linking / related content:** `RelatedContent.jsx`, used on course pages and every SEO-engine-generated page, surfaces up to 3 related courses and up to 4 related topic/subtopic pages automatically from the live inventory (category/type match), not manually authored per page.
- **CTA navigation:** primary CTA is almost always "Enroll Now" / "Enquire Now" → opens `LeadModal`/`LeadForm` or routes to `/contact-us`; secondary CTA is typically "View Curriculum" / "Explore Courses".

---

## 7. Page Template System

| Template | File | Used by |
|---|---|---|
| Landing / SEO landing | `pages/standalone/SeoLandingPage.jsx` | subtopic, career-role, guide, standalone-topic pages (~246 pages) |
| Standard internal page | `pages/standalone/GenericPage.jsx` | 7 institutional pages |
| Course page | `pages/courses/CoursePage.jsx` | 5 course tracks |
| Topic page | `pages/courses/TopicPage.jsx` | 32 topic pages |
| Category page | `pages/category/CategoryPage.jsx` | career/internship/certification category pages |
| Audience page | `pages/audience/AudiencePage.jsx` | 6 audience pathways |
| Location page | `pages/location/LocationPage.jsx` | 5 cities + city×course |
| Resources page | `pages/resources/ResourcesPage.jsx` | hub + 4 categories |
| Contact page | `pages/Contact.jsx` | 1 |
| Home page | `pages/Home.jsx` | 1 |
| Pricing page | `pages/PricingPage.jsx` | 1 |
| Sitemap directory page | `pages/SitemapPage.jsx` | 1 (renders the full 391-page inventory + XML download) |
| 404 page | `pages/NotFoundPage.jsx` | catch-all |

**Common template anatomy** (confirmed identical across all internal-page templates):
1. **Hero** — `PageHero.jsx` (internal pages) or `CourseHero.jsx` (course/topic pages): full-bleed themed background photo pinned to a **fixed-height band** (independent of text length — see §13 for why), breadcrumb, eyebrow badge, `TypewriterHeading` title, description, primary/secondary CTA buttons.
2. **Main content** — overview + `highlights[]` grid (2-column, defensively spans a dangling odd item full-width — §13), curriculum/module breakdown where applicable, sidebar pricing card on course pages.
3. **Supporting sections** — `RelatedContent.jsx` (auto internal links), `CurriculumSection.jsx` / `ProcessSection.jsx` where applicable.
4. **FAQ** — `FAQSection.jsx` + `FAQAccordion.jsx`, page-specific questions only (§16).
5. **CTA** — `CTASection.jsx`, final conversion prompt.
6. **Footer** — global `Footer.jsx`.

---

## 8. Design System

**Do not introduce a new brand identity — the tokens below are the existing, live system** (`src/index.css`, Tailwind v4 `@theme` block).

### Color tokens
| Token | Hex / value | Use |
|---|---|---|
| `--color-sky9-green` | `#10B981` | Primary brand (emerald) |
| `--color-sky9-green-dark` | `#059669` | Hover/active states |
| `--color-sky9-green-light` | `#34D399` | Gradients, accents |
| `--color-sky9-green-glow` | `rgba(16,185,129,.15)` | Glow shadows |
| `--color-sky9-green-glow-strong` | `rgba(16,185,129,.3)` | Stronger glow shadows |
| `--color-dark-bg` | `#0B1121` | Dark mode page background |
| `--color-dark-surface` | `#111827` | Dark mode surfaces |
| `--color-dark-card` | `#1E293B` | Dark mode cards |
| `--color-dark-border` | `#334155` | Dark mode borders |
| `--color-dark-text` | `#F1F5F9` | Dark mode text |
| `--color-dark-muted` | `#94A3B8` | Dark mode muted text |
| `--color-light-bg` | `#F8FAFC` | Light mode page background |
| `--color-light-surface` / `--color-light-card` | `#FFFFFF` | Light mode surfaces/cards |
| `--color-light-border` | `#E2E8F0` | Light mode borders |
| `--color-light-text` | `#0F172A` | Light mode text |
| `--color-light-muted` | `#64748B` | Light mode muted text |
| `--color-state-success` | `#10B981` | Success state |
| `--color-state-warning` | `#F59E0B` | Warning state |
| `--color-state-error` | `#EF4444` | Error state |
| `--color-state-info` | `#3B82F6` | Info state |

### Typography
- **Body / sans:** `Inter` (weights 300–900 loaded), `--font-sans`
- **Headings:** `Poppins` (weights 600–900 loaded), `--font-heading`, applied via a `font-heading` utility class
- Loaded via Google Fonts CDN with `rel="preconnect"` + `display=swap` (`index.html`)

### Spacing / layout
- Section vertical rhythm: `py-6 sm:py-10 md:py-14` (small), `py-8 sm:py-10 md:py-14` (standard content sections) — consistent across almost every section component.
- Container widths: `max-w-7xl` (1280px, standard content), `max-w-[1536px]` (navbar/footer outer), `max-w-3xl`/`max-w-2xl` for prose columns.
- Card radius: `rounded-xl`/`rounded-2xl`/`rounded-3xl` depending on component weight.
- Reusable utility classes (defined once in `index.css`, reused everywhere): `.glass-panel` / `.glass-fx` (glassmorphism card system with hover glow + sheen sweep), `.glow-green`, `.hover-lift`, `.btn-glow`, `.btn-shimmer`, `.nav-link-animated`, `.container-main`, `.container-narrow`.

### Light Mode / Dark Mode
- Default theme: **dark** (see `ThemeContext.jsx`).
- Toggled by adding `.dark` or `.light` class to `<html>`; Tailwind custom variant `@custom-variant dark (&:where(.dark, .dark *))`.
- Every color-bearing utility in the codebase is paired with a `dark:` variant — this is already enforced project-wide, not a gap to fill.
- `prefers-reduced-motion: reduce` is respected globally (`index.css` forces all transitions/animations to `0.01ms`) and specifically in `TypewriterHeading.jsx` (renders full text instantly instead of animating).

Buttons, cards, badges, forms, inputs, alerts, accordions are implemented as the reusable components listed in §9 — there is no separate "buttons.css"; styling is Tailwind utility classes composed per component.

---

## 9. Component Architecture

**Global (used across many/most pages):**
`Navbar`, `Footer`, `Layout` (wraps every route — mounts Navbar/Footer/CookieConsentBanner/ScrollToTop/FloatingScrollArrows), `PageHero`, `Breadcrumb`, `SectionHeader`, `FAQAccordion`, `FAQSection`, `CTASection`, `SeoHead`, `ErrorBoundary`, `ScrollToTop`, `PageTransition` + `LoadingSkeleton`, `CookieConsentBanner`, `ThemeToggle` (inline in Navbar, not a separate file), `RelatedContent`, `Picture` (image + WebP `<source>` + error fallback).

**Page-specific / domain components:**
- Course domain: `CourseHero`, `CurriculumSection`, `RelatedTopics`, `CourseCard`, `PricingSection`/`PricingCard`, `CourseComparisonTable`
- Lead/forms domain: `LeadForm` (core, all specialized forms wrap this), `QuickEnquiryForm`, `CourseEnquiryForm`, `BusinessOwnerEnquiryForm`, `CareerEnquiryForm`, `CertificationEnquiryForm`, `InternshipEnquiryForm`, `ContactForm`, `LeadModal`, `LeadLoadingState`, `LeadSuccessMessage`, `LeadErrorMessage`, `FormValidationMessage`, `StickyCTA`, `DownloadDetailsModal`
- Home-only sections: `HeroSection`, `StatsBar`, `AboutPreview`, `LearningFramework`, `CourseSpotlight`, `PopularCourses`, `WhyChooseUs`, `Testimonials`, `InternshipPreview`, `CertificationPreview`, `CareerPreview`, `MissionVisionCommitmentSection`, `LandingPageFAQ`, `FinalCTA`
- Visual/decorative: `visuals/*Visual.jsx` (one bespoke illustrated panel per major section), `animations/*` (`BorderBeam`, `TiltCard`, `SpotlightCard`, `ScrollReveal`, `ScrollProgressBar`, `Typewriter`, `TypewriterHeading`, `ToolsMarquee`, `AnimatedCounter`)
- UI primitives: `ui/Button`, `ui/Card`, `ui/Badge`, `ui/Input`
- Auth (UI-only, see §17): `LoginModal`

**Rule:** a new UI need must first check this list for an existing reusable component before a new one is created — this is already the codebase's own convention (e.g. every course/topic/career page reuses the same `FeatureCard`/`CourseCard`/`FAQAccordion`).

---

## 10. Data Architecture

The project is already **data-driven** rather than hardcoded per page. Three layers:

1. **Raw content** — `src/data/siteData.js` (company info, 5 courses, testimonials, stats, FAQs, whyChooseUs, learningPillars, internship/certification/career data) and `src/data/sitemapData.js` (standalone pages, audience pages, course topics, location cities, resource categories, skill guides).
2. **Normalization** — `src/models/contentModels.js` exposes factory functions that fill in safe defaults and a consistent shape:
   - `createSeoModel({title, description, canonical, keywords, ogTitle, ogDescription, ogImage})`
   - `createImageModel({src, alt, title, category, width, height})`
   - `createPricingModel({amount, fee, currency, duration, mode, certificate, internship, availability, ctaText})`
   - `createWorkflowModel(steps[])`
   - `createCourseModel({...})` → full course shape incl. `benefits[]`, `modules[]`, `careerOpportunities[]`, `faqs[]`, nested `pricing`/`workflow`/`seo`
   - `createTopicModel({...})`
   - `createPageModel({...})` → generic page shape used by standalone/audience pages
3. **Aggregation + generation:**
   - `src/data/cmsRegistry.js` — combines everything into one `cmsRegistry` export (`company, courses, topics, standalonePages, audiencePages, locations, resources, workflows, testimonials, stats, internship, certification, career, generalFAQs, images`).
   - `src/services/contentRepository.js` — query layer: `getCourseBySlug`, `getTopicsForCourse`, `getRelatedContent`, `getAutoBreadcrumbs`, `getAllCourses`, etc.
   - `src/services/seoPageEngine.js` — **procedurally generates the full 391-page inventory** by iterating courses → topics → subtopics, courses → careerOpportunities → career-role pages, standalone/audience pages, guides, locations, applying `buildPageRecord()` to attach SEO/FAQ/highlights consistently. This is the mechanism that satisfies "avoid hundreds of hardcoded components" — it already exists.

**Standard page-data shape** (as actually used):
```
{ id, type, status, slug, parent, category, title, subtitle,
  description, content, highlights[], faqs[{question,answer}],
  image{src,alt,...}, relatedCourse, seo{title,description,canonical,keywords,ogImage} }
```

**Standard course-data shape:**
```
{ id, slug, title, shortTitle, subtitle, category, icon, color,
  duration, fee, mode, certification, internship, featured,
  audience[], overview, benefits[], whyChoose, careerOpportunities[],
  modules[{title, icon, topics[]}], faqs[], image, pricing, workflow, seo }
```

**Rule:** any new content (a new course, a new topic, a new FAQ) is added by editing these data files, never by creating a new page component.

---

## 11. Content Architecture

- **Heading structure:** `SectionHeader.jsx` enforces `h2` for section titles with an animated `TypewriterHeading`; page-level `h1` lives once in the hero (`PageHero`/`CourseHero`/`HeroSection`). No page should carry two `h1`s.
- **CTA rules:** primary CTA copy is consistently "Enroll Now" / "Enquire Now" / "View Curriculum"; every hero and every CTA section ends in one primary + one secondary action, never more.
- **Internal linking:** automatic via `RelatedContent.jsx` (category/type match) — do not hand-author "related links" blocks.
- **FAQ content:** page-specific only (§16) — sourced from each page's own `faqs[]` array in `siteData.js`/`sitemapData.js`, never a shared global set.
- **Footer content:** static nav columns (`footerNavigationData.js`) + company info (`siteData.js`) — no separate footer CMS.
- **Legal content:** `TermsPage.jsx` covers Terms & Conditions and is linked from the cookie-consent banner as the privacy-policy anchor (`#privacy`). A dedicated standalone Privacy Policy page is `TBD — requires project confirmation` (the existing spec library's `11-cookie-privacy-compliance.md` lists Privacy/Terms/Cookie/Refund/Disclaimer as pages to plan for; only Terms currently exists as a full page).
- **Content must remain approved/source-controlled:** all copy lives in versioned `.js` data files in this Git repository — there is no live CMS a non-developer can edit today (§17 backend note).

---

## 12. Image & Media Architecture

- **Registry:** `src/data/heroImages.js` — one dedicated banner per institutional/course/topic/audience page (comment in the file literally states "EVERY SINGLE PAGE HAS ITS OWN DEDICATED UNIQUE BANNER ASSET"), each entry carrying `{url, webp, alt, pos}` (`pos` = a manually-tuned `object-position` value for that specific photo).
- **Format:** all imagery is `.webp` (project asset pipeline: `npm run images:webp` runs `scripts/convert-to-webp.mjs` via `sharp`).
- **Loading strategy:** hero/above-the-fold images use `loading="eager"`; supporting/below-the-fold images (`Picture.jsx` usages elsewhere) use `loading="lazy"`.
- **Hero image sizing (important, hard-won rule — do not regress):** hero image layers are pinned to a **fixed height band** (`h-[420px] sm:h-[460px] md:h-[500px]` for `PageHero`, `h-[440px] sm:h-[480px] md:h-[540px]` for `CourseHero`), anchored `top-0`, *not* `absolute inset-0` stretching to fill the section. The section itself can grow taller than that floor to fit long wrapped copy on narrow screens; if the image stretched with it, `object-cover` would crop away most of the photo's width to cover an increasingly tall/narrow box, zooming into an arbitrary detail instead of the intended subject. This was a real, user-reported bug — the fixed-band pattern is now the required approach for any new hero-style component.
- **ALT text:** every entry in `heroImages.js` carries a descriptive, page-specific `alt` string (never empty, never generic "banner image"); purely decorative elements (background glow blobs, marquee icons) are marked `aria-hidden="true"` instead of given alt text.
- **No image inheritance across unrelated pages:** each generated page resolves its own hero image via `getInternalHeroImage()` / `getCourseHeroImage()` / `getTopicHeroImage()` / `getAudienceHeroImage()` lookups against `heroImages.js`, falling back to a single `genericDefault` only when no dedicated entry exists — a parent page's image is never silently reused by an unrelated child.
- **No third-party/scraped images** — the `heroImages.js` header comment states "100% project-owned, locally bundled original assets."
- **Ownership:** all image assets are bundled in `src/assets/` (imported as ES modules, hashed by Vite at build time) — none are hot-linked from an external CDN.

---

## 13. Responsive Design Architecture

**Breakpoints (Tailwind v4 defaults, confirmed by usage throughout):** `sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px, `2xl` 1536px.

**Confirmed, already-fixed responsive rules (do not regress these):**
1. **CSS-only breakpoints, no JS viewport detection.** There is no `window.innerWidth` state, no resize-listener-driven layout anywhere in the codebase — every breakpoint decision is a Tailwind responsive class. This was specifically audited and confirmed across the whole `src/` tree.
2. **`transition-all` is banned on any element that also carries responsive sizing/spacing classes.** Tailwind's `transition-all` animates *every* animatable property, including `width`/`padding`/`margin`/`grid-template-columns` — so when a breakpoint changes one of those properties, the change visibly animates instead of snapping instantly, producing a perceived "mobile responsiveness delay." Project-wide fix already applied: use the bare `transition` utility (or an explicit property list) instead, which only covers `color/background-color/border-color/opacity/box-shadow/transform/filter/backdrop-filter` — exactly what hover effects need, none of what breakpoints change.
3. **Hero image bands use a fixed height, not `absolute inset-0`** — see §12. This prevents the image crop from depending on how much text the current page happens to have.
4. **Fixed-column grids over data-driven arrays must handle an odd item count.** Any `grid-cols-N` layout mapping over an array whose length isn't guaranteed to be a multiple of `N` gets a "dangling last item" check that spans the leftover item full-width instead of leaving a visibly empty trailing cell. Applied across the course-benefits grid, the shared SEO-landing highlights grid (covers ~290 generated pages at once), and a dozen other card grids site-wide.
5. **Footer has three genuinely separate hand-tuned layouts** (desktop ≥1280px / tablet 768–1279px / mobile <768px) rather than one reflowing grid — already implemented, do not collapse back into a single responsive grid without re-verifying all three widths.
6. **No horizontal overflow, verified by automated scan** across 29 representative routes × 6 widths (320/375/390/414/768/1024px) with zero issues found. Any future change must be re-verified the same way (`document.documentElement.scrollWidth <= clientWidth` at each width).

**Requirement, stated explicitly per the original responsive-fix brief and still binding:** the mobile-responsive layout must be present on **first render** and must respond **instantly** when the viewport changes — no desktop-first flash, no JS-driven delay before the mobile layout "snaps in."

---

## 14. Light/Dark Theme Architecture

- **State:** `src/context/ThemeContext.jsx` — `useState` initialized from `localStorage.getItem('sky9-theme')`, default `'dark'`.
- **Application:** `useEffect` sets `document.documentElement.classList` to `light` or `dark` and persists to `localStorage` under key `sky9-theme` on every change.
- **Toggle:** sun/moon icon button in `Navbar` (both desktop bar and mobile drawer) calling `toggleTheme()`.
- **Coverage:** every color utility class in the codebase pairs a light value with a `dark:` variant — backgrounds, text, borders, cards, buttons, footer, and hero gradient overlays all have explicit dark-mode rules; there is no "invert everything" hack.
- **Logo behavior:** `Navbar.jsx` swaps between `/sky9-logo-light.svg` and `/sky9-logo.svg` based on `theme === 'light'`.
- **Autofill/inputs:** dedicated dark/light-aware `-webkit-autofill` override rules in `index.css` so browser autofill doesn't visually break the current theme.
- **Persistence:** theme choice survives reloads (localStorage) and is not reset by route navigation.

---

## 15. SEO Architecture

**Implementation:** `src/components/common/SeoHead.jsx`, mounted per-page with page-specific props, imperatively updates `document.head` on every prop change (title, meta description/keywords/robots, canonical link, Open Graph tags, and JSON-LD).

| Element | Rule |
|---|---|
| Title | `document.title = "{page title} \| Sky9 India"` (skipped if the title already ends in "Sky9 India") |
| Meta description | Per-page, required prop |
| Keywords | Per-page array, joined; default fallback list present |
| Canonical | `window.location.href` (query-stripped) unless an explicit `canonical` prop is passed |
| Robots | Default `index, follow`, overridable per page |
| Open Graph | `og:title`, `og:description`, `og:url`, `og:image` (defaults to `/sky9-logo.svg`), `og:type` (`article` for course pages, `website` otherwise) |

**Structured data (JSON-LD, injected as a single `<script id="sky9-schema-jsonld">` array), confirmed schema types in active use:**
- `EducationalOrganization` — sitewide, every page (name, url, logo, telephone, `PostalAddress`, `sameAs` social links)
- `BreadcrumbList` — any page with breadcrumbs
- `Course` — course detail pages (`name, description, provider, offers{priceCurrency: INR, price}`)
- `FAQPage` — any page with a non-empty `faqs[]`

**Schema types NOT currently used and not to be added without a genuine matching feature:** `Product`, `Review`/aggregate rating, `LocalBusiness` (currently `EducationalOrganization` covers the org identity), `Event`. Per the spec library's explicit rule (`20-seo-aeo-aio-geo.md`, `32-structured-data-schema.md`): **never fabricate reviews, ratings, FAQs, prices, or locations in structured data** — schema must always match genuinely visible page content.

**Sitemap & robots:**
- `public/robots.txt` — `Allow: /`, `Disallow: /scratch/`, `Disallow: /*?*`, references `Sitemap: https://sky9india.com/sitemap.xml`.
- `dist/sitemap.xml` — regenerated on every production build by `scripts/generate-sitemap.mjs`, which loads the live `seoPageEngine` inventory and writes only `status: 'published' && indexable: true` pages (currently 391 URLs).
- Search Console / Bing Webmaster verification: `TBD — requires project confirmation` (no verification meta tag or file found in the repo).

---

## 16. FAQ Architecture

- **Components:** `FAQSection.jsx` (section wrapper: badge, heading, description, delegates to) `FAQAccordion.jsx` (per-item expand/collapse, Framer Motion height animation, chevron rotation, `aria-expanded`).
- **Data structure:** `faqs: [{ question: string, answer: string }]` — attached per-record inside `siteData.js` (courses, contact, generic pricing FAQs) and generated per-record inside `seoPageEngine.js` (topic/subtopic/career-role/guide pages each carry their own `faqs[]`, produced by dedicated generator functions like `generateSubtopicFaqs()`, `generateCareerRoleFaqs()`, `generateStandaloneTopicFaqs()` — genuinely unique per page, not copy-pasted).
- **Rule already enforced:** FAQ sets are **never** globally shared — every page-class generator produces question/answer pairs referencing that specific page's own title/topic, so no two pages present the same FAQ block. Do not introduce a single shared FAQ array reused across multiple routes.
- **Accessibility:** accordion buttons are real `<button>` elements with `aria-expanded`; content collapses via animated height (not `display:none`, so it degrades to visible text with JS disabled/reduced-motion... — note: with JS fully disabled the accordion would not render at all since this is a CSR SPA; see §18 for the broader "no-JS" caveat).
- **Structured data:** every page with a non-empty `faqs[]` gets a matching `FAQPage` JSON-LD block (§15) — keep the visible accordion text and the schema text identical (the code already does this by reusing the same `faqs` prop for both).

---

## 17. Forms & User Interaction

**Contact / lead forms (implemented):**
- `LeadForm.jsx` — the core form (name, email, phone, course interest, optional message), used directly or wrapped by: `QuickEnquiryForm`, `CourseEnquiryForm`, `BusinessOwnerEnquiryForm`, `CareerEnquiryForm`, `CertificationEnquiryForm`, `InternshipEnquiryForm`, `ContactForm`.
- **Validation:** `src/utils/validation.js` — required-field checks plus a client-side **email-domain typo-correction map** (`gmial.com → gmail.com`, `outlok.com → outlook.com`, `hotmial.com → hotmail.com`, `iclod.com → icloud.com`, `rediffmai.com → rediffmail.com`, `yaho.com → yahoo.com`, etc.) that suggests the likely-intended domain — this is intentional UX, not a bug, and should be preserved.
- **States:** `LeadLoadingState.jsx`, `LeadSuccessMessage.jsx`, `LeadErrorMessage.jsx`, `FormValidationMessage.jsx` — all implemented and wired.
- **Duplicate-submission prevention:** `TBD — requires project confirmation` (no explicit debounce/lock found; verify before relying on it).
- **Accessibility:** form fields use associated `<label>`s; verify `aria-invalid`/`aria-describedby` wiring on error states as part of QA (§23).

**Backend dependency — explicitly TBD, do not assume otherwise:**
`src/services/leadService.js` is a **client-side-only simulation layer**. It:
- Persists submitted leads to `localStorage` (`sky9_lead_history`, capped at the last 50) for local preview/inspection only.
- Exposes `analyticsHooks`/`listeners` explicitly commented as placeholders "for future CRM & Analytics integration" — **no real API call, email, SMS, or WhatsApp notification currently fires on form submission.**
- There is no `.env` file and no API base URL configured anywhere in the repo.

**Login (UI-only, not a real feature):**
`LoginModal.jsx` renders a full login/OTP/Google-SSO-styled UI with a simulated `setTimeout` delay — it contains **no `fetch`/`axios`/API call of any kind**. There is no real authentication, no user accounts, no session/token handling. Do not represent this as a working login feature; it is a front-end design mock only, pending a backend decision (`TBD`).

**If real form delivery or login is ever required:** per the spec library's `08-database-api-architecture.md` and `universal-payment-circuit-breaker-skeleton.md`, any secret/API key must live server-side only (never in this static front-end bundle), and this project would need a backend endpoint to call — that endpoint, its host, and its auth do not exist yet and must be a new, explicitly-scoped piece of work.

---

## 18. Accessibility

**Confirmed implemented:**
- Semantic landmarks: `<header>`/`<nav>`/`<main>`/`<footer>` structure via `Layout.jsx`.
- Keyboard navigation: mobile drawer implements a real focus trap (`querySelectorAll` of focusable elements, wraps `Tab`/`Shift+Tab` between first and last, `Escape` closes menus/drawer).
- `aria-label` on icon-only buttons (theme toggle, hamburger, close buttons); `aria-expanded` on dropdown/accordion triggers; `role="dialog" aria-modal="true"` on the mobile nav drawer.
- Every hero/content image carries a descriptive `alt`; decorative-only elements use `aria-hidden="true"`.
- `prefers-reduced-motion: reduce` respected globally (forces all CSS transitions/animations to 0.01ms) and specifically inside `TypewriterHeading` (skips the character-by-character animation and renders full text immediately).
- Color contrast: dark/light tokens (§8) were chosen as a cohesive pair (light text `#0F172A` on light bg `#F8FAFC`; light text `#F1F5F9` on dark bg `#0B1121`) — both comfortably pass WCAG AA for body text; verify per-component during QA (§23) rather than assuming every state (e.g. muted text on colored badges) passes.

**Not yet formally verified (add to QA, §23):**
- Full keyboard-only pass across every dropdown/megamenu combination.
- Screen-reader pass (NVDA/VoiceOver) across the mega menu and lead-form error states.
- A named WCAG conformance target (**AA** is the conventional default for a commercial site) — `TBD — requires project confirmation`, since no spec file states one explicitly.

---

## 19. Performance Architecture

**Confirmed implemented:**
- **Code splitting:** every route-level page component is `React.lazy`-loaded in `App.jsx`, wrapped in a single `<Suspense fallback={<LoadingSkeleton />}>` — only the current route's JS chunk downloads.
- **Images:** all bundled as `.webp` (converted via `scripts/convert-to-webp.mjs` + `sharp`); hero images `loading="eager"` (above the fold, avoid LCP delay), supporting images `loading="lazy"`.
- **Fonts:** Google Fonts loaded with `rel="preconnect"` to both `fonts.googleapis.com` and `fonts.gstatic.com`, and `display=swap` to avoid invisible-text-during-load.
- **CLS prevention:** hero image bands use a fixed height (§12/§13) specifically to avoid layout shift as content/images load; `Picture.jsx` provides an `onError` fallback rather than leaving a broken/collapsing image box.
- **Bundle size (informational baseline from the current production build, not a fixed budget):** largest chunk `index-*.js` ≈ 498KB / 136KB gzip; `About-*.js` ≈ 426KB / 137KB gzip (this page bundles `html2canvas`/`jsPDF` for the course-details download feature); all other route chunks are well under 100KB gzipped. Re-check this table after any dependency addition.

**Numeric performance budgets (LCP/INP/CLS/TTFB targets):** `TBD — requires project confirmation`. The spec library names the Core Web Vitals metrics to track (`05-performance.md`) but assigns no numeric thresholds — pick project-specific targets before treating performance as "done" (a reasonable default to propose and get sign-off on: LCP < 2.5s, INP < 200ms, CLS < 0.1, measured on a throttled mobile profile, not desktop).

---

## 20. Error & State Management

- **Top-level crash guard:** `src/components/common/ErrorBoundary.jsx` wraps the entire app in `main.jsx` — the site must never render a fully blank screen on an uncaught render error.
- **Route-level loading state:** `LoadingSkeleton` (Suspense fallback) — a properly responsive (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`) shimmer skeleton, not a blank screen, while a lazy route chunk loads.
- **Image failure:** `Picture.jsx` / `PageHero.jsx` / `CourseHero.jsx` fall back to `heroImages.genericDefault` on `<img onError>` rather than showing a broken-image icon.
- **Missing/invalid route data:** `CoursePage.jsx` redirects to `/courses` if a slug doesn't resolve; the audience catch-all route falls through audience → standalone → SEO-engine → 404 in order.
- **404:** dedicated `NotFoundPage.jsx` component, matched via the routing catch-all.
- **Form error/loading/success states:** dedicated components exist (§17) — verify every form path renders one of these rather than failing silently.
- **API/network errors:** not currently applicable — there is no live API call in the codebase to fail (§17). Once a real backend exists, this section must be revisited to define network-error UI.

---

## 21. Security

**Applicable today (static front-end site, no backend):**
- No secrets exist in the repository (no `.env` file, no API keys found in source) — keep it that way; if any third-party key is ever added (Maps, reCAPTCHA, etc.), it must go through a build-time environment variable, never a hardcoded literal.
- HTTPS is enforced by the hosting platform (Netlify serves over HTTPS by default) — confirm no mixed-content (`http://`) resource references before launch.
- Client-side validation (§17) is a UX convenience only — it provides **no security guarantee**, since there is no server to also enforce it. This is acceptable only because there is currently no backend/database to protect; the moment a real form-submission endpoint exists, server-side validation and authorization become mandatory (per `04-security.md` / `08-database-api-architecture.md`).

**Not applicable (no backend/database/payment/auth exists) — do not build defenses for threats that have nothing to attack:**
- SQL/NoSQL injection, broken access control, session/token handling, payment-data handling, webhook validation.

**If/when a backend is added**, apply — unabridged — the rules from `Website Blank MD File/04-security.md` and `universal-payment-circuit-breaker-skeleton.md`: server-side authorization only (never trust a front-end-supplied role or ownership check), input validation and output encoding against XSS/CSRF/SSRF/path traversal, no stack traces or internal errors surfaced to end users, and (if a gateway is ever integrated) an idempotency key on every payment operation with webhook signature validation.

---

## 22. Analytics & Tracking

**Current state: none implemented.** No `gtag`, Google Tag Manager, Meta Pixel, LinkedIn Insight Tag, or any other tracking script exists in `index.html` or anywhere in `src/`. There are no tracking IDs to configure and none should be invented.

**If analytics is added later**, the spec library (`06-analytics-and-tracking.md`) names the conventional tool set to choose from (GA4, GTM, Search Console, Microsoft Clarity) and the conventional event list to wire up (CTA click, phone-number click, WhatsApp click, form start/submit/error, search, download) — all `TBD — requires project confirmation` on which (if any) the business actually wants, and subject to the cookie-consent banner's existing "nothing is collected unless you agree" promise (`CookieConsentBanner.jsx` — do not add tracking that fires before consent is recorded).

---

## 23. Testing & QA

**Already verified in this project (methodology, reusable for future passes):**
- **Horizontal-overflow sweep:** automated `document.documentElement.scrollWidth <= clientWidth` check across 29 representative routes × 6 widths (320/375/390/414/768/1024px) — zero issues on the current codebase.
- **Grid-gap sweep:** every fixed-column grid mapping a data-driven array audited for odd-count "dangling cell" bugs (§13); fixed at the source (content) where a genuine missing item existed, and defensively (CSS span) everywhere else.
- **Hero image crop verification:** measured actual visible-fraction-of-source-image before/after the fixed-height-band fix (§12), confirmed via headless-browser screenshot comparison at 320/375/414/768/1280px in both themes.
- **Reload/first-paint verification:** frame-by-frame headless-browser capture of a cold reload with mobile emulation active, confirming the skeleton (not a raw unstyled flash) appears within ~200ms and real content is substantially visible within ~500ms (down from ~1.26s before an entrance-animation timing fix).
- **Spelling/consistency sweep:** `cspell` run across all 121 source files + `index.html`; all genuine typos fixed; British/American spelling pairs (e.g. "optimization" vs "optimisation", "enquiry" vs "inquiry") reconciled to the site's dominant, already-established convention rather than left mixed.

**Full regression checklist for any future change:**
- [ ] All routes listed in §4/§5 resolve without error
- [ ] Every nav dropdown/mega-menu opens, closes (outside-click, `Escape`), and its links resolve
- [ ] Mobile drawer opens/closes, focus-traps correctly, body-scroll locks
- [ ] Every lead-form variant: validation, loading, success, error states
- [ ] Every page-specific FAQ accordion expands/collapses and matches its `FAQPage` schema
- [ ] Light Mode and Dark Mode both checked per changed page
- [ ] All images load, correct `alt`, correct crop/aspect on mobile/tablet/desktop
- [ ] 320/375/390/414/768/1024/1280/1440px widths, continuous-resize behavior, no horizontal scrollbar
- [ ] First render is already mobile-correct (no desktop-first flash) — verify via cold reload with device emulation active, not just resizing an already-loaded tab
- [ ] Browser matrix (§24)
- [ ] Accessibility: keyboard-only pass, screen-reader spot-check on changed components
- [ ] SEO: title/description/canonical present and unique on every new/changed page; structured data validates (Google Rich Results Test) and matches visible content
- [ ] No broken internal links (spot-check `RelatedContent`/`Breadcrumb` output)
- [ ] Zero console errors/warnings on every changed route
- [ ] `npm run build` passes; `dist/sitemap.xml` regenerates with the expected URL count

**Automated test tooling (unit/integration/E2E framework):** `TBD — requires project confirmation`. No test runner (Jest/Vitest/Playwright/Cypress) is currently configured in `package.json` — QA today is manual + ad-hoc headless-browser scripting, as documented above. Adding a real test suite is a legitimate future phase, not yet started.

---

## 24. Browser & Device Compatibility

**Target matrix (per the spec library's decided coverage list, `24-browser-device-compatibility.md`):**

| Category | Coverage |
|---|---|
| Desktop browsers | Chrome, Edge, Firefox, Safari |
| Mobile browsers | Android Chrome, iOS Safari |
| Devices | Desktop, laptop, tablet, mobile — small and large screens |
| Viewport widths to test | 320, 375, 390, 414, 768, 1024, 1280, 1440px+ (project convention used throughout this session's QA) |

No pixel-exact minimum OS/browser version is specified in the source spec library — treat "current + previous major version" of each listed browser as the practical default unless the business specifies otherwise (`TBD` for an exact version floor).

---

## 25. Development Workflow

| Phase | Objective | Key tasks | Dependencies | Deliverable / verification |
|---|---|---|---|---|
| 1. Discovery | Confirm business facts | Gather company info, course catalog, pricing, testimonials, policies (§0, §1) | none | This document's §1–§2, signed off |
| 2. Architecture | Decide page hierarchy & routing | Define IA (§3), URL rules (§5) | Phase 1 | §3–§5 |
| 3. Sitemap | Enumerate every page class | Build the template+data-driven generator (`seoPageEngine.js`) | Phase 2 | §4 (391 URLs today) |
| 4. Design system | Lock tokens | Colors, type, spacing (§8) | Phase 1 | `index.css` `@theme` block |
| 5. Core components | Build reusable primitives | Navbar, Footer, Hero, Card, Button, FAQ, Forms (§9) | Phase 4 | Component library in `src/components/` |
| 6. Navigation | Wire header/footer/breadcrumbs | `headerNavigationData.js`, `footerNavigationData.js`, `Breadcrumb.jsx` | Phase 5 | §6 |
| 7. Core pages | Build Home + institutional pages | Home, About, Contact, Pricing | Phase 5–6 | Live routes |
| 8. Course ecosystem | Build course/topic/subtopic templates + generator | `CoursePage`, `TopicPage`, `SeoLandingPage`, `seoPageEngine.js` | Phase 3, 7 | 391-page inventory live |
| 9. Content/data architecture | Normalize all content | `contentModels.js`, `cmsRegistry.js`, `contentRepository.js` | Phase 8 | §10 |
| 10. Images & media | Source, convert, wire per-page banners | `heroImages.js`, WebP pipeline | Phase 8 | §12 |
| 11. SEO | Meta + schema on every page | `SeoHead.jsx`, `robots.txt`, sitemap generation script | Phase 8–9 | §15 |
| 12. Forms | Lead capture UX | `LeadForm` family, validation | Phase 5 | §17 |
| 13. Accessibility | Keyboard/ARIA/contrast pass | Focus traps, labels, reduced-motion | All prior | §18 |
| 14. Performance | Code-split, lazy-load, WebP | Route-level `React.lazy`, image pipeline | All prior | §19 |
| 15. Testing | Full regression pass | Checklist in §23 | All prior | Zero-defect sign-off |
| 16. Final audit | Re-run responsiveness, spelling, grid-gap, overflow sweeps | Methods documented in §23 | Phase 15 | Clean audit report |
| 17. Deployment | Ship to Netlify via GitHub | §26 | Phase 16 | Successful `npm run build` + Netlify deploy |
| 18. Launch | Go-live verification | §27 checklist | Phase 17 | Live site confirmed reachable and correct |

**This is a description of work already substantially completed**, not a forward plan starting from zero — use it to identify which phase any *new* piece of work belongs to, and re-run that phase's verification step before considering the new work done.

---

## 26. Git & Deployment

**Repository:** `https://github.com/SudeshShelar/sky9india`

**Branch strategy (as actually used):**
- `main` — production/default branch (`origin/HEAD -> origin/main`); receives work via PR merge from `features` (confirmed pattern: PR #1 "Add documentation for typography and development standards" merged `features → main` by the repo owner).
- `features` — active working branch for ongoing development.

**Build:**
```
npm install
npm run build        # → vite build, outputs to dist/
                      # → postbuild hook runs scripts/generate-sitemap.mjs
```

**Hosting:** Netlify — `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200   # SPA fallback — required for client-side routing to work on refresh/direct URL hits
```
Live URL: `https://sky9india1.netlify.app/`. **Confirm in the Netlify dashboard which branch is actually connected as the deploy trigger** (`TBD — requires project confirmation`) — `netlify.toml` only existed on `features` until it was recently merged to `main`; both branches are now in sync and pushed, but the dashboard is the authority on which one Netlify watches.

**Environment variables:** none exist today (no `.env`/`.env.example` in the repo). If any are added in the future, they must never be committed — use Netlify's own environment-variable dashboard and add an `.env.example` with placeholder names only (per `14-documentation.md`).

**Rollback strategy:** `TBD — requires project confirmation` — no explicit rollback runbook exists yet. Netlify natively supports re-publishing a prior deploy from its dashboard; document the exact steps once confirmed as the intended method.

**Production verification after every deploy:** confirm the live URL is reachable, spot-check 3–5 representative routes (home, a course page, a deep subtopic page), and check `https://sky9india1.netlify.app/sitemap.xml` reflects the expected URL count.

---

## 27. Final Launch Checklist

- [x] All required pages exist (391 live URLs across every template class in §4)
- [x] All routes work (verified against `App.jsx`)
- [x] Navigation works (desktop dropdowns/megamenu, mobile drawer, focus trap)
- [x] Mobile works
- [x] Tablet works
- [x] Desktop works
- [x] First render is responsive (no desktop-first flash — verified via cold-reload emulation test)
- [x] No horizontal overflow (29 routes × 6 widths, automated scan, zero issues)
- [x] No blank sections / no unexpected blank space (grid-gap audit, §13/§23)
- [x] Images load correctly (WebP, per-page dedicated banners, `onError` fallback)
- [x] ALT tags exist (every `heroImages.js` entry carries descriptive alt text)
- [x] WebP optimization verified (`convert-to-webp.mjs` pipeline)
- [x] Light Mode works
- [x] Dark Mode works
- [x] Forms work (client-side validation/loading/success/error states — **backend delivery is not yet live**, see §17)
- [x] FAQ works (page-specific, accordion, schema-matched)
- [x] SEO metadata exists (title/description/canonical/OG on every page via `SeoHead.jsx`)
- [x] Canonicals exist
- [x] Sitemap exists (`dist/sitemap.xml`, regenerated every build)
- [x] Robots.txt exists
- [ ] Structured data validates — re-run Google's Rich Results Test as a final pre-launch step (not yet executed in this session)
- [ ] No console errors — re-confirm on the exact production build immediately before launch
- [ ] No broken links — full crawl recommended before launch (spot-checked only so far)
- [ ] Accessibility fully verified (full keyboard + screen-reader pass — see §18 "not yet formally verified")
- [ ] Performance fully verified against a **numeric** target (no budget is set yet — see §19)
- [x] Production build passes (`npm run build` succeeds)
- [ ] Deployment verified on the confirmed production branch (branch-to-Netlify mapping still `TBD`, §26)

---

## 28. Project File/Folder Architecture

```
sky9india/
├── public/                      # static passthrough assets (favicons, robots.txt, logo SVGs)
├── scripts/
│   ├── generate-sitemap.mjs     # post-build: writes dist/sitemap.xml from live page inventory
│   └── convert-to-webp.mjs      # image pipeline: source images → WebP via sharp
├── src/
│   ├── assets/                  # bundled images (banners, mentors, spotlight, visuals)
│   ├── components/
│   │   ├── auth/                # LoginModal (UI-only, no backend)
│   │   ├── common/               # Navbar-adjacent, shared building blocks
│   │   │   └── animations/       # Framer Motion / CSS animation helpers
│   │   ├── course/                # Course-domain components
│   │   ├── home/                  # Home-page-only sections
│   │   ├── layout/                # Navbar, Footer, Layout shell
│   │   ├── lead/                  # All enquiry/lead form variants + states
│   │   ├── pricing/                # Pricing section + comparison table
│   │   ├── ui/                     # Button, Card, Badge, Input primitives
│   │   ├── visuals/                 # Bespoke illustrated section visuals
│   │   └── workflow/                # ProcessSection (step-by-step visuals)
│   ├── context/                  # ThemeContext, LeadContext
│   ├── data/                     # siteData.js, sitemapData.js, cmsRegistry.js, nav data, hero image registry, country codes, CTA data
│   ├── models/                   # contentModels.js — factory/normalization functions
│   ├── pages/                     # one file per route/template (see §7)
│   │   ├── audience/, category/, courses/, location/, resources/, standalone/
│   ├── services/                  # contentRepository.js, seoPageEngine.js, leadService.js
│   ├── utils/                     # validation.js, generateCourseDetailsPDF.js
│   ├── index.css                  # Tailwind v4 @theme tokens + global utility classes
│   ├── main.jsx                   # app entry: StrictMode > ErrorBoundary > BrowserRouter > ThemeProvider > App
│   └── App.jsx                    # route table (React.lazy per page)
├── index.html                     # SPA shell, Google Fonts links, meta defaults
├── netlify.toml                   # build/publish/redirect config
├── vite.config.js                 # Vite + @tailwindcss/vite + @vitejs/plugin-react
├── eslint.config.js
├── package.json
└── Website Blank MD File.../      # 42-file generic dev-process spec library (see §0.3)
```

Every folder above already exists and is in active use — this is documentation of the real structure, not a proposal. Do not introduce parallel/duplicate folders (e.g. a second `data/` or `models/` directory) for new work; extend the existing files/patterns.

---

## 29. Implementation Rules

Binding for any human or AI working on this repository (synthesized from the codebase's own established patterns plus the explicit rules in `19-master-website-development-rules.md` and `34-ai-development-rules.md`):

1. **Preserve approved content.** Never alter a course fee, duration, testimonial, statistic, or company claim without explicit confirmation — these live in `siteData.js`/`sitemapData.js` and are the source of truth (§0).
2. **Do not invent business claims, credentials, reviews, or statistics.** If information is missing, mark `TBD — requires project confirmation`; never fill the gap with a plausible-sounding fact.
3. **Reuse components.** Check §9 before writing a new one.
4. **Use data-driven pages.** Any new page class goes through `seoPageEngine.js` + an existing/new template (§4/§10), never a one-off hardcoded route+component pair.
5. **Keep routes stable.** A URL change on an already-published page requires a permanent redirect (`Old URL → New URL → Status`), never a silent break (§5).
6. **Do not break existing functionality.** Re-run the relevant §23 checklist items after any change.
7. **Do not introduce unnecessary dependencies.** The current stack (§25/`package.json`) is deliberately lean — justify any new package.
8. **Do not redesign approved UI without an explicit requirement.** The design tokens in §8 are the existing brand system; extend, don't replace.
9. **Maintain responsive behavior** per the hard-won rules in §13 — especially: no `transition-all` on elements with responsive sizing classes, fixed-height hero image bands, dangling-grid-cell handling.
10. **Maintain accessibility, SEO, and performance** per §§15/18/19 on every change, not just new features.
11. **Avoid duplicated code, duplicated images, duplicated FAQs.** Each page's FAQ set must be genuinely unique to that page (§16); each page's hero image must be genuinely its own (§12).
12. **Avoid undefined/null runtime errors.** Follow the existing pattern of default-filled factory functions (`contentModels.js`) and `?.`/`|| fallback` guards seen throughout `siteData.js` consumers.
13. **No secrets in front-end code, ever** — there are currently none to leak; keep it that way (§21).
14. **Escalate, don't guess**, when a requested change conflicts with security, legal/compliance, approved business content, or brand consistency — per `19-master-website-development-rules.md`'s rule-priority order (business requirements → user-selected features → security → approved content → brand/UI consistency → accessibility → SEO → performance → maintainability).

---

## 30. Definition of Done

A given unit of work on this project is complete only when:

- [ ] All approved requirements for that unit are implemented per this document's relevant section(s)
- [ ] Any new/changed page or route is registered in `App.jsx` and (if it should be indexable) flows through `seoPageEngine.js` into `dist/sitemap.xml`
- [ ] The relevant page template(s) render correctly (§7)
- [ ] Navigation (header, mobile drawer, footer, breadcrumbs, internal links) reflects the change with no dead links
- [ ] Responsive behavior verified at 320/375/390/414/768/1024/1280/1440px, first render correct on both mobile and desktop, no horizontal overflow (§13/§23)
- [ ] Images (if any) are WebP, have descriptive alt text, and use the fixed-height hero pattern if they are a hero (§12)
- [ ] SEO metadata (title/description/canonical/OG) and any applicable schema are present and accurate for the change (§15)
- [ ] FAQ (if applicable) is page-specific and schema-matched (§16)
- [ ] Accessibility basics hold (keyboard reachable, labeled, contrast-checked) for anything new (§18)
- [ ] No new console errors/warnings introduced
- [ ] `npm run build` passes cleanly
- [ ] The change has been deployed and spot-checked on the actual live URL, not just locally (§26/§27)
- [ ] No item in this document was silently invented to fill a gap — anything still unknown is explicitly logged as `TBD — requires project confirmation` for the next person

**Outstanding project-level TBDs, consolidated (see cited sections for full context):**
- Netlify's actual connected deploy branch (§26)
- Real backend for lead-form delivery / CRM / email-SMS-WhatsApp notification (§17)
- Real authentication behind `LoginModal` (§17)
- Payment gateway — no evidence one is required (§1/§21)
- Analytics/tracking platform selection, if any (§22)
- Dedicated standalone Privacy Policy page vs. the current Terms-page anchor (§11)
- Numeric performance budget (§19) and named WCAG conformance level (§18)
- Automated test framework (§23)
- Rollback runbook (§26)
- Search Console / Bing Webmaster verification (§15)
