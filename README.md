# Sky9 India

Marketing and lead-generation website for Sky9 India, a practical training institute in Pune offering Digital Marketing, AI & Automation, Software Testing, ERP, and Digital Marketing for Business Owners courses.

Live site: https://sky9india.com

## Tech Stack

- **React 19** + **React Router 7** — client-side rendered single-page app
- **Vite 8** — dev server and production build
- **Tailwind CSS 4** (`@tailwindcss/vite`) — styling, with a custom theme (`src/index.css`) defining brand color tokens and light/dark mode
- **Framer Motion** — page transitions and micro-animations
- **lucide-react** — icon set
- **jsPDF** — client-side generation of the downloadable course-details PDF
- No backend, database, or authentication service. The site is fully static; forms simulate submission and persist to `localStorage` only (see [Lead Capture](#lead-capture) below).

## Project Structure

```
src/
  components/        Reusable UI: layout (Navbar/Footer), common (cards, FAQ, forms,
                      SEO head, error boundary), lead capture, pricing, visuals
  context/            ThemeContext (light/dark) and LeadContext (modal + form state)
  data/               Site content: courses, topics, audience pages, FAQs, nav data
  models/             Factory functions that normalize content records (courses,
                      topics, pages) with safe defaults
  services/           contentRepository (content lookups), seoPageEngine (500+
                      page SEO inventory used for the sitemap and programmatic
                      landing pages), leadService (mock lead submission)
  pages/              Route-level page components
  utils/              Form validation, PDF generation
scripts/
  convert-to-webp.mjs      One-off script to convert source images to WebP
  generate-sitemap.mjs     Runs after every production build; generates a real,
                            crawlable dist/sitemap.xml from the page inventory
public/               Static assets served as-is (favicon, logos, robots.txt, _redirects)
```

## Content & Routing Architecture

Most pages are **data-driven**, not hardcoded per-route. `src/data/sitemapData.js` and
`src/data/siteData.js` define courses, topic modules, audience pathways, and their FAQ
content; `src/services/seoPageEngine.js` expands that data into the full page inventory
(course pages, topic pages, subtopic pages, career-role pages, location pages, resource
guides) used both for routing fallbacks and for sitemap generation. Adding a new topic,
audience pathway, or FAQ set is usually a data change in `src/data/`, not a new route/page
file — check there first before adding a new page component.

Routes are declared in `src/App.jsx`. A catch-all `/:audienceSlug` route resolves against
`audiencePages`, `standalonePages`, and the SEO page inventory before falling back to the
404 page.

## Development

```bash
npm install
npm run dev          # start the dev server (http://localhost:5173)
```

## Build & Deploy

```bash
npm run build         # production build to dist/, then generates dist/sitemap.xml
npm run preview        # locally preview the production build
```

Deployed as a static site (see `public/_redirects` — configured for Netlify's SPA
fallback: all paths serve `index.html` with a 200, so client-side routing works on
refresh/direct links). Any static host that supports an SPA rewrite rule will work.

No environment variables are required — the project has none (`import.meta.env` /
`process.env` are unused).

## Linting

```bash
npm run lint
```

## SEO

- `src/components/common/SeoHead.jsx` sets the document title, meta description/keywords,
  robots directive, Open Graph tags, canonical link, and JSON-LD structured data
  (Organization, BreadcrumbList, Course, FAQPage) per page at render time. Every route
  renders `<SeoHead>` with its own title/description/canonical; internal-only routes
  (`/design-system`) and the 404 page set `robots="noindex"` so they never get indexed.
- `public/robots.txt` allows crawling and points to `/sitemap.xml`.
- `dist/sitemap.xml` is generated at build time (see `scripts/generate-sitemap.mjs`) from
  the same page inventory (`seoPageEngine`) that powers the in-app `/sitemap` directory
  page, so it always reflects real, indexable routes.
- `netlify.toml` documents the build command/publish directory and the SPA fallback
  redirect (mirrors `public/_redirects`) for repeatable deploys.

## Lead Capture

`LeadForm` (used by the enquiry modal and inline enquiry sections) validates input
client-side (`src/utils/validation.js`), includes a hidden honeypot field (`website`) that
silently drops bot submissions, and calls `leadService.submitLead()`, which validates
again, simulates network latency, and stores the lead in `localStorage`
(`sky9_lead_history`, capped at 50 entries) purely for local inspection/demo purposes.
**There is no real backend, email delivery, or CRM integration wired up.** Connecting a
real submission endpoint is the main integration gap before this form can capture real
enquiries in production. A CAPTCHA has not been added since it requires a third-party
site key the project doesn't have configured; the honeypot is a best-effort, no-config
spam mitigation in the meantime.

## Known Limitations

- No automated test suite (unit/integration/E2E) exists yet; verification has been manual
  (build checks, targeted Playwright scripts run ad hoc during development, not checked
  into the repo).
- Lead forms and the login modal are non-functional demos (see above) — no real
  authentication, payment, or CRM/email integration exists.
- No analytics (GA4/GTM) or Search Console verification is wired into the codebase yet.
- No CI/CD pipeline exists (no `.github/workflows`); `netlify.toml` covers the build
  config only, not automated deploys.
- The mobile nav drawer (`Navbar.jsx`) traps focus and restores it to the trigger on
  close; other modals (`LoginModal`, `DownloadDetailsModal`) have not been audited for
  the same pattern.

## Troubleshooting

- **Blank page / stuck on a route** — check the browser console; an `ErrorBoundary` around
  the app (`src/main.jsx`) catches render errors and shows a fallback with a reload option
  instead of a blank screen, but the underlying error is still logged to the console.
- **New content not appearing** — most course/topic/FAQ content lives in `src/data/`, not
  in page components; confirm the change was made there.
- **Sitemap looks stale** — it's generated by `npm run build`'s postbuild step, not present
  in dev mode; run a full build to regenerate it.
