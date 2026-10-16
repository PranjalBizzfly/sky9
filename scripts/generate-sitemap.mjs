/**
 * Generates a real, crawlable sitemap.xml from the site's actual page
 * inventory (seoPageEngine) after every production build, so the URL that
 * robots.txt already advertises (https://sky9india.com/sitemap.xml) resolves
 * to real content instead of 404ing. Reuses the same XML format as the
 * in-app "Download sitemap.xml" button on /sitemap for consistency.
 *
 * Written to both dist/ (the production build output) and public/ (Vite's
 * static asset dir, served as-is at the site root by both `vite dev` and
 * `vite build`) so /sitemap.xml resolves as a real static XML file — never
 * through React Router — in both development and production.
 */
import { createServer } from 'vite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const server = await createServer({ root, server: { middlewareMode: true }, appType: 'custom' });
const seoPageEngineMod = await server.ssrLoadModule('/src/services/seoPageEngine.js');
const sitemapPageMod = await server.ssrLoadModule('/src/pages/SitemapPage.jsx');

const seoPageEngine = seoPageEngineMod.default;
const generateSitemapXml = sitemapPageMod.generateSitemapXml;

const pages = seoPageEngine.getInventory();
const xml = generateSitemapXml(pages);

const distOutPath = path.join(root, 'dist', 'sitemap.xml');
const publicOutPath = path.join(root, 'public', 'sitemap.xml');
fs.writeFileSync(distOutPath, xml, 'utf8');
fs.writeFileSync(publicOutPath, xml, 'utf8');

const urlCount = pages.filter(p => p.status === 'published' && p.indexable).length;
console.log(`Generated sitemap.xml with ${urlCount} URLs -> ${distOutPath}`);
console.log(`Also synced to ${publicOutPath} so \`vite dev\` serves /sitemap.xml as a static file`);

await server.close();
process.exit(0);
