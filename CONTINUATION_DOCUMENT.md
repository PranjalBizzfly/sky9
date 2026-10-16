# Sky9 India — Master Project State & Continuation Document
**Document ID:** `SKY9-IMAGE-AUDIT-HANDOVER-2026-09-09`  
**Target Workspace:** `C:\Users\Admin\Desktop\Project\Sky9\my-react-app`  
**Operating Mode:** UI/UX & High-Fidelity Human/Topic Image Audit & Generation  

---

## 1. Executive Summary & Purpose
This document captures the complete state of the image audit, replacement, and contextual enhancement for the **Sky9 India** educational technology web application.

When resuming from this document:
1. **Do not redesign** the website or change existing layouts, typography, animations, routes, navigation, light/dark themes, or responsiveness.
2. **Do not scrape, download, or copy** images from third-party websites (Unsplash, Pexels, Google, etc.).
3. **Use 100% original, project-owned AI-generated assets** adhering to authentic, professional Indian corporate context.
4. **Enforce 100% uniqueness**: Every distinct internal page, course track, topic module, and audience pathway must have its own unique visual. **No repeating/reusing images across different pages.**
5. **Enforce descriptive, natural HTML ALT tags** matching the exact content and context of each page/topic.

---

## 2. Core Image Generation Standards & Visual Style

### A. Photographic Context
- **Demographics & Setting:** Authentic Indian professionals, mentors, and students in modern corporate offices and practical computer training labs in Pune, India.
- **Atmosphere:** Clean, well-lit, professional B2B tech environment, natural daylight/warm office lighting, shallow depth of field, sharp 8K realistic photographic quality.
- **Restrictions:**
  - No stereotypical cultural props, non-contextual costumes, or exaggerated poses.
  - No foreign/non-Indian stock faces.
  - No distorted hands, extra fingers, warped faces, fake logos, or illegible gibberish text in images.
  - No generic stock photo cliches.

### B. ALT-Tag Rules
- Format: Natural, descriptive, keyword-rich sentence explaining what is in the visual and its relevance to Sky9 India practical training.
- Never use generic placeholder ALT tags (`"image"`, `"banner"`, `"photo"`, `"hero image"`).
- Decorative icons and background overlays use `alt=""`.

---

## 3. Current Work Completed & Verified

### A. 13 High-Resolution Original Assets Created & Bundled in `src/assets/`
All 13 images are 100% locally saved and bundled in the project:
1. `src/assets/hero-lab.jpg` — Homepage Hero practical training lab with collaborative cohort in Pune.
2. `src/assets/spotlight/dm-spotlight.jpg` — Digital Marketing command center with multi-channel analytics and SEO graphs.
3. `src/assets/spotlight/ai-spotlight.jpg` — AI automation pipeline, neural nodes, and prompt engineering console.
4. `src/assets/spotlight/qa-spotlight.jpg` — Software QA automated test scripts, Cypress runner, and code diagnostics.
5. `src/assets/spotlight/biz-spotlight.jpg` — Entrepreneur e-commerce sales dashboard and growth funnels.
6. `src/assets/spotlight/erp-spotlight.jpg` — Enterprise ERP cloud architecture, SAP modules, and data pipelines.
7. `src/assets/visuals/about-cohort.jpg` — Classroom mentorship and interactive peer code review.
8. `src/assets/visuals/career-prep.jpg` — Professional mock interview drill and resume optimization session.
9. `src/assets/visuals/cert-holder.jpg` — Certified student holding verified industry diploma credential.
10. `src/assets/visuals/intern-team.jpg` — Internship workspace agency cohort collaborating on live client deliverables.
11. `src/assets/visuals/framework-lab.jpg` — 4-Pillar structured practical workshop lab in Pune.
12. `src/assets/mentors/mentor-vikram.jpg` — Lead Digital Marketing Mentor Vikram Deshmukh portrait.
13. `src/assets/mentors/mentor-ananya.jpg` — Lead AI & Automation Mentor Dr. Ananya Joshi portrait.

### B. Modified Files & Components
- `src/data/heroImages.js`: Centralized registry containing helper functions `getHeroImageForPage`, `getCourseHeroImage`, `getTopicHeroImage`, and `getAudienceHeroImage` with custom focal positions (`pos`) and tailored ALT tags for every page.
- `src/data/siteData.js`: Updated student testimonials and authentic mentor metadata.
- `src/components/visuals/HeroVisual.jsx`: Bound to `hero-lab.jpg`.
- `src/components/visuals/CourseSpotlightVisual.jsx`: Bound to 5 course spotlight assets.
- `src/components/visuals/AboutVisual.jsx`, `CareerVisual.jsx`, `CertificationVisual.jsx`, `InternshipVisual.jsx`: Updated with local visuals and ALT tags.
- `src/components/home/LearningFramework.jsx`: Bound to `framework-lab.jpg`.
- `src/pages/About.jsx`, `Career.jsx`, `Certification.jsx`, `Contact.jsx`, `Internship.jsx`, `AudiencePage.jsx`, `LocationPage.jsx`: Updated to use local visual assets and custom ALTs.
- **Build Status**: Verified with `npm run build` — 2,369 modules compiled cleanly with **0 errors**.

---

## 4. Remaining Work: Unique Non-Repeating Banner Generation Plan

To ensure **100% uniqueness (zero image repetition)** across the entire website, the following 45 unique images are to be generated via the AI image generation tool as soon as the quota resets, saved to `src/assets/banners/`, and mapped in `src/data/heroImages.js`:

### Batch 1: Static Institutional & Core Pages (12 Images)
1. `src/assets/banners/banner-about.jpg` — Pune modern campus architecture, reception lobby, and learning floor.
2. `src/assets/banners/banner-mission.jpg` — Senior Indian mentor guiding student code review in practical tech lab.
3. `src/assets/banners/banner-vision.jpg` — Advanced AI robotics & tech innovation research lab setting.
4. `src/assets/banners/banner-why-sky9.jpg` — Side-by-side mentor-student live workstation debugging.
5. `src/assets/banners/banner-learning-approach.jpg` — Interactive smart whiteboard discussing 4-pillar methodology.
6. `src/assets/banners/banner-student-success.jpg` — Successful batch alumni celebrating IT placement offer letters.
7. `src/assets/banners/banner-career.jpg` — Formal 1-on-1 mock interview drill in glass conference room.
8. `src/assets/banners/banner-certification.jpg` — Close-up of professional graduate receiving ISO-verified credential.
9. `src/assets/banners/banner-internship.jpg` — Tech agency workspace with interns building live client deliverables.
10. `src/assets/banners/banner-contact.jpg` — Friendly Pune admissions counseling desk and student advisory session.
11. `src/assets/banners/banner-pricing.jpg` — Transparent education investment planning & EMI advisory desk.
12. `src/assets/banners/banner-resources.jpg` — Modern digital study library with e-books and knowledge workstations.

### Batch 2: Course Tracks & Digital Marketing Topic Submodules (8 Images)
13. `src/assets/banners/banner-dm-track.jpg` — Omnichannel digital marketing agency command center.
14. `src/assets/banners/banner-seo.jpg` — SEO specialist analyzing organic keyword rankings and technical audit on dual monitors.
15. `src/assets/banners/banner-google-ads.jpg` — Paid search specialist optimizing Google Ads bidding and CPC campaign dashboard.
16. `src/assets/banners/banner-smm.jpg` — Social media marketer scheduling multi-platform creative campaigns.
17. `src/assets/banners/banner-performance-marketing.jpg` — Performance marketing expert analyzing ROAS funnels and conversion tracking.
18. `src/assets/banners/banner-ga4.jpg` — Web analytics specialist inspecting GA4 real-time events and user journeys.
19. `src/assets/banners/banner-email-marketing.jpg` — Marketing automation specialist building email sequence drip workflows.
20. `src/assets/banners/banner-content-marketing.jpg` — Creative content strategist planning editorial calendar and brand storytelling.

### Batch 3: AI & Prompt Engineering Topic Submodules (7 Images)
21. `src/assets/banners/banner-ai-track.jpg` — Futuristic AI innovation studio with neural network visualizers.
22. `src/assets/banners/banner-prompt-engineering.jpg` — Prompt engineer optimizing LLM structured prompts and token parameters.
23. `src/assets/banners/banner-midjourney.jpg` — Visual designer generating hyper-realistic AI imagery and creative concepts.
24. `src/assets/banners/banner-zapier-make.jpg` — Automation architect building multi-app Zapier and Make.com workflows.
25. `src/assets/banners/banner-ai-content.jpg` — Copywriter using generative AI assistants for rapid high-converting copy.
26. `src/assets/banners/banner-ai-developers.jpg` — Software engineer using AI pair-programming assistants to write and debug code.
27. `src/assets/banners/banner-custom-gpts.jpg` — AI engineer configuring autonomous multi-agent systems and custom LLMs.

### Batch 4: Software QA & Test Automation Topic Submodules (6 Images)
28. `src/assets/banners/banner-qa-track.jpg` — Software quality assurance lab with multi-screen automated test diagnostics.
29. `src/assets/banners/banner-manual-testing.jpg` — QA tester writing test cases, execution matrices, and tracking Jira bugs.
30. `src/assets/banners/banner-selenium.jpg` — Automation engineer executing Selenium WebDriver regression test suites in Java/Python.
31. `src/assets/banners/banner-cypress.jpg` — SDET engineer running Cypress end-to-end headless browser test suites.
32. `src/assets/banners/banner-api-testing.jpg` — QA engineer validating REST APIs, Postman collections, and JSON payloads.
33. `src/assets/banners/banner-performance-testing.jpg` — Performance tester analyzing JMeter server load curves and latency stress tests.

### Batch 5: Business, ERP & Audience Pathways (12 Images)
34. `src/assets/banners/banner-biz-track.jpg` — Business owner reviewing growth metrics and e-commerce analytics.
35. `src/assets/banners/banner-local-seo.jpg` — Local business marketer managing Google Business Profile and Maps 3-pack rankings.
36. `src/assets/banners/banner-ecommerce.jpg` — Shopify store owner optimizing product catalog and payment checkout conversions.
37. `src/assets/banners/banner-erp-track.jpg` — Enterprise cloud infrastructure architect reviewing SAP enterprise modules.
38. `src/assets/banners/banner-sap-fico.jpg` — Financial analyst navigating SAP FICO general ledger and balance sheet reports.
39. `src/assets/banners/banner-sap-mm.jpg` — Supply chain manager coordinating SAP MM procurement and inventory logistics.
40. `src/assets/banners/banner-audience-students.jpg` — Group of Indian college students collaborating on practical capstone projects.
41. `src/assets/banners/banner-audience-freshers.jpg` — Young graduate practicing technical interview answers in Pune tech hub.
42. `src/assets/banners/banner-audience-professionals.jpg` — Working professional upskilling on laptop in an evening practical cohort.
43. `src/assets/banners/banner-audience-switchers.jpg` — Career transitioner receiving encouraging 1-on-1 code walkthrough from mentor.
44. `src/assets/banners/banner-audience-founders.jpg` — Startup founder analyzing customer acquisition metrics in modern co-working space.
45. `src/assets/banners/banner-audience-freelancers.jpg` — Independent digital consultant managing international client deliverables.

---

## 5. Resumption Instructions for Tomorrow

When resuming this session:
1. Check the image generation tool capability.
2. Generate the unique images listed above in batches.
3. Save the generated images into `src/assets/banners/`.
4. Import and bind the unique image paths directly into `src/data/heroImages.js`.
5. Ensure every banner has its unique, contextual ALT tag and focal alignment.
6. Run `npm run build` to verify that all images resolve with zero errors.
7. Verify rendered pages across light and dark modes to guarantee complete uniqueness and zero layout disruption.
