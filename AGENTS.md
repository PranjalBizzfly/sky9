# Sky9 India Website — AI Agent Rules

These rules apply to any AI assistant or developer working in this repository.

## 1. Primary Website Development Skill

For any website task (adding/editing pages, updating content, altering design/styling, banners/images, animations, lead forms, SEO, or routing), you MUST follow the authoritative project skill at:
[`.agents/skills/website-development/SKILL.md`](./.agents/skills/website-development/SKILL.md)

It contains the verified rules, design tokens, routing hierarchies, asset standards, and QA procedures for this codebase.

## 2. Directory Boundary & Safety

- Operate strictly and exclusively within this repository's root directory (`c:\Projects\Sky9IndiaWebsite-features`).
- Do not inspect, modify, or create files outside of this project directory.
- Never commit secrets, credentials, or `.env` files.

## 3. Sources of Truth

- **Master Plan:** [`MASTER-WEBSITE-DEVELOPMENT-PLAN.md`](./MASTER-WEBSITE-DEVELOPMENT-PLAN.md) is the verified architectural blueprint.
- **Business Facts & Content:** [`src/data/siteData.js`](./src/data/siteData.js) and [`src/data/sitemapData.js`](./src/data/sitemapData.js) are the single source of truth for all business facts, courses, fees, durations, modules, FAQs, locations, and testimonials.
- **Imagery Registry:** [`src/data/heroImages.js`](./src/data/heroImages.js) and [`CONTINUATION_DOCUMENT.md`](./CONTINUATION_DOCUMENT.md) govern all visual assets and unique banners.

## 4. Non-Negotiable Core Rules

1. **Never Invent Information:** Never fabricate course fees, discounts, statistics, student reviews, testimonials, certifications, guarantees, or company claims. If unconfirmed, mark as `TBD — requires project confirmation`.
2. **Preserve Working Functionality:** Do not delete, rename, or break working routes, components, responsive layouts, or theme support (Light and Dark modes).
3. **Component & Data Reuse:** Extend existing templates and components (`src/components/ui/`, `src/services/seoPageEngine.js`, `src/services/contentRepository.js`) rather than creating isolated one-off duplicates.
4. **Verified Verification:** Always run lint/build/responsive checks before declaring a task complete, and honestly report any checks that could not be executed.
