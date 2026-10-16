---
name: website-development
description: >-
  Rules and working procedure for developing, editing, and verifying the Sky9 India practical training institute website (React 19, Vite 8, Tailwind CSS v4, 391+ page SEO inventory). Use for any task that adds or changes pages, content, design, images, animations, forms, SEO, or navigation in this repository.
---

# Sky9 India Website: Development Skill

The project files and codebase are the single source of truth. When documentation and code disagree, trust the code and update the documentation. Never invent facts, prices, credentials, or features that are not verified in the codebase.

---

## 1. Project Overview

- **What it is:** The official marketing and lead-generation web application for **Sky9 India** ("Learning by Doing"), a premier practical training institute offering hands-on technical education with integrated 1-month internships.
- **Physical Campus:** 2nd Floor, Shri Nivas Towers, Above Baramati Bank, Pune – 411043, Maharashtra, India.
- **Contact & Domains:** Phone: `+91 7 319 419 519` / `+91 73 19 41 95 19` | Email: `info@Sky9India.com` | Target Production Domain: `https://sky9india.com` (Live Staging: `https://sky9india1.netlify.app/`).
- **Target Audiences:**
  1. College Students (`/for-students`)
  2. Fresh Graduates (`/for-freshers`)
  3. Engineering & Degree Graduates (`/for-graduates`)
  4. Working Professionals (`/for-working-professionals`)
  5. Business Owners & Entrepreneurs (`/business-owners/buissness-owners-pathways`)
  6. Career Switchers (`/for-career-switchers`)
- **5 Core Professional Courses (Verified Fees & Durations):**
  1. **Digital Marketing Training** (`/courses/digital-marketing`): Fee `₹25,000`, Duration `2 Months`, 1-Month Internship Included.
  2. **AI & Automation Training** (`/courses/ai-automation`): Fee `₹25,000`, Duration `2 Months`, 1-Month Internship Included.
  3. **Software Testing (QA) Training** (`/courses/software-testing`): Fee `₹25,000`, Duration `2 Months`, 1-Month Internship Included.
  4. **ERP Training** (`/courses/erp`): Fee `₹30,000`, Duration `3 Months`, 1-Month Internship Included.
  5. **Digital Marketing for Business Owners** (`/business-owners/digital-marketing-for-bussiness-owner`): Fee `₹25,000`, Duration `1.5 Months`.
- **Technology Stack:**
  - **Framework & Runtime:** React 19 (`react` 19.2.8, `react-dom` 19.2.8), single-page client-rendered application.
  - **Build Tool:** Vite 8 (`vite` 8.2.2, `@vitejs/plugin-react` 6.1.0).
  - **Styling:** Tailwind CSS v4 (`tailwindcss` 4.3.3, `@tailwindcss/vite` 4.3.3), `@theme` design tokens in `src/index.css`.
  - **Routing:** React Router v7 (`react-router-dom` 7.18.3).
  - **Animations:** Framer Motion (`framer-motion` 13.2.0) + custom CSS keyframe animations.
  - **Icons:** Lucide React (`lucide-react` 1.42.0).
  - **Utilities:** `jspdf` (client-side course PDF generator), `sharp` (WebP image conversion).
  - **Linting:** ESLint 10 (`eslint` 10.9.0).
  - **Hosting & Deployment:** Netlify static hosting with SPA rewrite rule `/* -> /index.html 200` (`netlify.toml` and `public/_redirects`).
  - **Backend Status:** Static front-end only. No active backend API, database, user authentication, payment gateway, or external analytics scripts are currently connected.
- **Key Project Documentation:**
  - [`MASTER-WEBSITE-DEVELOPMENT-PLAN.md`](file:///c:/Projects/Sky9IndiaWebsite-features/MASTER-WEBSITE-DEVELOPMENT-PLAN.md): Authoritative 770-line master architecture, route plan, design tokens, and launch checklist.
  - [`CONTINUATION_DOCUMENT.md`](file:///c:/Projects/Sky9IndiaWebsite-features/CONTINUATION_DOCUMENT.md): Visual standards, 13 core bundled assets, and 45-banner uniqueness plan.
  - [`README.md`](file:///c:/Projects/Sky9IndiaWebsite-features/README.md): Architecture overview, scripts, lead capture mock notes, and troubleshooting.
  - [`src/data/siteData.js`](file:///c:/Projects/Sky9IndiaWebsite-features/src/data/siteData.js) & [`src/data/sitemapData.js`](file:///c:/Projects/Sky9IndiaWebsite-features/src/data/sitemapData.js): Ground-truth company info, course details, curricula, pricing, locations, and testimonials.
  - [`src/services/seoPageEngine.js`](file:///c:/Projects/Sky9IndiaWebsite-features/src/services/seoPageEngine.js): 391+ programmatic SEO inventory engine powering programmatic routes and sitemap generation.

---

## 2. Design And UI/UX

- **Aesthetic:** Professional, premium, modern, clean, and content-rich practical learning institute experience.
- **Brand & Theme Tokens (`src/index.css` via Tailwind v4 `@theme`):**
  - **Sky9 Brand:** `--color-sky9-green: #10B981`, `--color-sky9-green-dark: #059669`, `--color-sky9-green-light: #34D399`, `--color-sky9-green-glow: rgba(16, 185, 129, 0.15)`.
  - **Dark Mode:** `--color-dark-bg: #0B1121`, `--color-dark-surface: #111827`, `--color-dark-card: #1E293B`, `--color-dark-border: #334155`, `--color-dark-text: #F1F5F9`, `--color-dark-muted: #94A3B8`.
  - **Light Mode:** `--color-light-bg: #F8FAFC`, `--color-light-surface: #FFFFFF`, `--color-light-card: #FFFFFF`, `--color-light-border: #E2E8F0`, `--color-light-text: #0F172A`, `--color-light-muted: #64748B`.
  - **State Tokens:** `--color-state-success: #10B981`, `--color-state-warning: #F59E0B`, `--color-state-error: #EF4444`, `--color-state-info: #3B82F6`.
  - **Typography:** Headings: Poppins / Inter (`var(--font-heading)`), Body: Inter (`var(--font-sans)`).
- **Core Layout & Container Classes:**
  - `.container-main`: Standard max-width container (`max-width: 80rem / 1280px`, `px-4`).
  - `.container-narrow`: Focused readable container (`max-width: 56rem / 896px`, `px-4`).
- **Glassmorphism & Utilities:**
  - Reuse `.glass`, `.glass-card`, `.glass-panel` for frosted translucent surfaces with subtle border sheens.
  - Micro-interactions: `.hover-lift` (translateY(-4px)), `.btn-glow`, `.btn-shimmer` (glossy shimmer sweep), `.text-gradient-green`, `.nav-link-animated`.
- **Dual-Theme Support:** Light and Dark modes are both supported. The theme is toggled via `ThemeContext.jsx` on `document.documentElement` (`.dark` / `.light`) and persisted in `localStorage['theme']`. Always use semantic color tokens or dark variants so all UI renders cleanly in both themes.
- **Responsive Layout:**
  - Every page must render responsively from 320px to 1920px without horizontal overflow (`overflow-x: hidden`).
  - Standard responsive breakpoints: 320px, 375px, 390px, 414px, 768px, 1024px, 1280px, 1440px.
  - Avoid `transition-all` on elements with responsive sizing classes to prevent layout jumping during resize or cold reload.
  - Use fixed-height hero banners to avoid Cumulative Layout Shift (CLS).

---

## 3. Content Quality

- **Natural English:** Use simple, professional, natural, human-sounding English. Avoid marketing hyperbole, repetitive buzzwords, keyword stuffing, and robotic phrasing.
- **Ground-Truth Rule:** Never invent prices, course durations, statistics, customer reviews, testimonials, certifications, guarantees, or partner claims. All business facts live in `src/data/siteData.js` and `src/data/sitemapData.js`.
  - Verified Course Fees: Digital Marketing ₹25,000, AI & Automation ₹25,000, Software Testing ₹25,000, ERP ₹30,000, Business Owners ₹25,000.
  - Verified Certifications: Sky9 Course Completion Certificate + Google & Meta certification guidance.
  - If a required business fact is missing, mark it explicitly as `TBD — requires project confirmation`. Never invent a plausible substitute.
- **Page Topic Relevance:** Keep every page strictly relevant to its own topic, module, and target audience. Do not copy identical paragraphs or FAQ questions across multiple pages.
- **Title & Navigation Alignment:** Visible page `<h1>` titles must match their corresponding navigation labels and breadcrumbs (e.g., breadcrumb "About Sky9" matches the hub index page title).

---

## 4. Page And Routing Rules

- **Route Configuration (`src/App.jsx`):**
  - **Courses Megamenu Routes:** `/courses/digital-marketing`, `/courses/ai-automation`, `/courses/software-testing`, `/courses/erp`.
  - **Nested Course Topics & Subtopics:** `/courses/:courseSlug/:topicSlug` and `/courses/:courseSlug/:topicSlug/:subtopicSlug`.
  - **Business Owners Section:** Dedicated category root `/business-owners/digital-marketing-for-bussiness-owner`, flat topics `/business-owners/:topicSlug`, and audience pathway `/business-owners/buissness-owners-pathways`.
  - **About Hierarchy:** `/about/about-overview` (hub index), `/about/:slug` (`mission`, `vision`, `why-choose-sky9`, `learning-approach`, `our-commitment`, `who-can-join`, `student-success`).
  - **Career Hub:** `/career/career-opportunities-overview`, `/career/:categorySlug`, `/career/:categorySlug/:roleSlug`.
  - **Internship Hub:** `/internship/internship-overview`, `/internship/:categorySlug` (child routes have `-internship` suffix, e.g. `/internship/digital-marketing-internship`).
  - **Certification Hub:** `/certification/certification-overview`, `/certification/:categorySlug`.
  - **Resources Hub:** `/resources/learning-overview`, `/resources/visual-sitemap-directory`, `/resources/ui-design-system`, `/resources/career-skill-guides`, `/resources/:resourceType`.
  - **Location Architecture:** `/locations`, `/locations/:citySlug`, `/locations/:citySlug/:courseSlug`.
  - **Audience Pathways:** Catch-all `/:audienceSlug` resolving against `audiencePages` (`/for-students`, `/for-freshers`, `/for-graduates`, `/for-working-professionals`, `/for-career-switchers`).
  - **Core Utility Pages:** `/contact-us`, `/pricing`, `/terms-and-conditions`, `*` -> `NotFoundPage`.
- **Permanent Redirects:** Preserve working URLs. Never remove a published URL without adding a `<Navigate to="..." replace />` redirect in `App.jsx` (e.g. legacy `/contact` -> `/contact-us`, `/sitemap` -> `/resources/visual-sitemap-directory`, legacy `-training` suffixes).
- **Data-Driven Scalability:** Do not create ad-hoc `.jsx` page files for content variations. New subtopics, career roles, and location landing pages are generated via `src/services/seoPageEngine.js` and rendered through reusable templates (`SeoLandingPage.jsx`, `TopicPage.jsx`, `CategoryPage.jsx`, `AudiencePage.jsx`).
- **Sitemap Sync:** The post-build script `node scripts/generate-sitemap.mjs` runs after `npm run build`, generating `dist/sitemap.xml` and syncing `public/sitemap.xml`.

---

## 5. Images And Accessibility

- **Locally Bundled Assets:** All images reside in `src/assets/` (`banners/`, `spotlight/`, `visuals/`, `mentors/`, `testimonials/`).
- **Format:** Always WebP (`.webp`). Use `npm run images:webp` (`scripts/convert-to-webp.mjs`) to convert newly added raster assets using Sharp (quality: 82).
- **Zero Repetition Rule:** Every page, course track, and topic module must have its own unique, dedicated visual registered in `src/data/heroImages.js`. Never reuse the same hero banner across different pages.
- **Visual Context & Authenticity:**
  - Authentic Indian professionals, mentors, and students in modern corporate offices and practical training computer labs in Pune.
  - Natural lighting, clean backgrounds, sharp focus.
  - Prohibited: No generic stock photos, no Unsplash/Pexels scraping, no non-Indian faces, no distorted hands/faces, no illegible gibberish text in imagery.
- **Alt Text:** Descriptive, natural sentences explaining the scene and its relevance to Sky9 India practical training. Decorative overlays and background blurs must use `alt=""`.
- **Accessibility Standards:**
  - Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, single `<h1>` per page, logical heading hierarchy).
  - Baseline keyboard focus: `outline: 2px solid #10B981` on `:focus-visible` (configured in `src/index.css`).
  - Focus trap and Escape-key handling in mobile nav drawer (`Navbar.jsx`) and modal dialogs.
  - Form controls with explicit `htmlFor` / `id` labels and helper messages.
  - WCAG AA contrast compliance across both light and dark themes.

---

## 6. Animations And Interactions

- **Motion Architecture:** Framer Motion (`framer-motion`) handles route transitions (`PageTransition.jsx`) and section reveals; CSS keyframes (`float`, `float-slow`, `pulse-subtle`, `btn-shimmer-sweep`) handle micro-interactions.
- **Purposeful Motion:** Animations must be subtle, purposeful, and functional. They must never cause layout shift (CLS), hide content permanently, stutter, or interfere with page scrolling.
- **Reduced Motion:** Respect user preferences via `@media (prefers-reduced-motion: reduce)` in `src/index.css`, setting animation and transition durations to `0.01ms !important`.
- **Interactive State Integrity:** All interactive widgets (modals, accordions, mobile drawer, theme toggle) must handle focus transitions, keyboard events, and outside clicks cleanly, preventing background scrolling when open.

---

## 7. Forms, SEO, And Technical Quality

- **Lead Capture Architecture:**
  - Lead components reside in `src/components/lead/` (`LeadForm`, `CourseEnquiryForm`, `QuickEnquiryForm`, `ContactForm`, `LeadModal`).
  - Validation: Client-side validation in `src/utils/validation.js` checks RFC 5322 email patterns, detects common domain typos (e.g. `gmai.com` -> `gmail.com`), and validates international phone numbers.
  - Anti-Spam: Hidden honeypot field `website` silently drops bot submissions without requiring third-party CAPTCHA keys.
  - Storage: `src/services/leadService.js` stores submissions (up to 50 items) in `localStorage['sky9_lead_history']`.
  - Backend Note: There is currently NO backend, email service, or CRM wired up. Never claim live submission or email notifications are functional.
- **SEO & Metadata (`src/components/common/SeoHead.jsx`):**
  - Render `<SeoHead>` on every page.
  - Page titles formatted as `<Page Title> | Sky9 India`.
  - Dynamic Open Graph tags, canonical URLs, and meta descriptions.
  - Automatic JSON-LD Schema: `Organization`, `BreadcrumbList`, `Course` (on course pages), and `FAQPage` (on accordion sections).
  - Internal or utility pages (`/resources/ui-design-system`, `/404`) must set `robots="noindex"`.
  - `public/robots.txt` points to `https://sky9india.com/sitemap.xml`.
- **Security & Secrets:**
  - Never commit API keys, credentials, or private configuration. No `.env` currently exists in the repo.
  - The login modal (`LoginModal.jsx`) is a front-end UI mock with no backend authentication.

---

## 8. Coding And Change Management

- **Component Reuse:** Inspect `src/components/ui/` (`Button`, `Card`, `Badge`, `Input`) and existing section components before building new elements.
- **Defensive Programming:** Prevent `null`/`undefined` crashes by adhering to factory models (`src/models/contentModels.js`) and safe optional chaining (`?.`, `|| fallback`).
- **Non-Destructive Changes:** Read relevant existing files completely before editing. Never delete or refactor working features merely to simplify changes.
- **Focused Commits:** Keep edits surgical, maintainable, and aligned with the established React 19 + Tailwind CSS v4 patterns.

---

## 9. Quality Assurance

- **Verification Commands:**
  - `npm install` — install project dependencies if `node_modules` is missing.
  - `npm run dev` — start Vite development server (`http://localhost:5173`).
  - `npm run lint` — run ESLint 10 verification across the codebase.
  - `npm run build` — execute production Vite compilation and postbuild sitemap generation (`scripts/generate-sitemap.mjs`).
  - `npm run preview` — preview the production build locally.
  - `npm run images:webp` — convert source raster images to WebP via Sharp.
- **Multi-Viewport Audit:** Spot-check pages at 320px, 375px, 390px, 414px, 768px, 1024px, 1280px, and 1440px.
- **Dual-Theme Audit:** Verify all modified sections in both Light and Dark modes.
- **Honest Reporting:** If any check could not be run (e.g. `node_modules` is not installed), explicitly report it rather than claiming it passed.

---

## 10. Working Procedure For Future Tasks

For every future website task on this repository:
1. **Understand & Inspect:** Read the user prompt carefully, inspect relevant existing components, routes, data, and documentation.
2. **Identify Target Files:** Pinpoint the exact files, data entries, or styles that need updates.
3. **Verify Constraints:** Check this skill file and `MASTER-WEBSITE-DEVELOPMENT-PLAN.md` for governing rules.
4. **Implement Minimally:** Make only the required changes while preserving existing working patterns.
5. **Verify:** Execute lint, build, responsive, theme, and console checks.
6. **Summarize:** Document what changed, affected files, verification status, and any remaining open items.
