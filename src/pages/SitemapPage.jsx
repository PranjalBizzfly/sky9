import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Network, BookOpen, Layers, Briefcase, GraduationCap, Award, MapPin, Users, CheckCircle, Search, ShieldCheck } from 'lucide-react';
import seoPageEngine from '../services/seoPageEngine';
import { heroImages } from '../data/heroImages';
import PageHero from '../components/common/PageHero';
import SeoHead from '../components/common/SeoHead';
import Breadcrumb from '../components/common/Breadcrumb';
import SectionHeader from '../components/common/SectionHeader';
import Badge from '../components/ui/Badge';
import TypewriterHeading from '../components/common/animations/TypewriterHeading';

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

// The machine-readable /sitemap.xml file itself: a real static asset (see
// scripts/generate-sitemap.mjs), not a React-rendered page, so it's listed
// here for the directory's own display/count only — never merged into the
// actual seoPageEngine inventory that generates that XML file, which would
// make the file self-reference its own URL as an entry.
const XML_SITEMAP_ENTRY = {
  id: 'sitemap-xml-file',
  type: 'standalone',
  slug: 'sitemap.xml',
  title: 'XML Sitemap',
  category: 'Main',
  description: 'Machine-readable XML sitemap listing every published Sky9 India page for search engine crawling.',
  qualityScore: 100,
  status: 'published',
  indexable: true,
  isStaticFile: true,
};

// Consumed at build time by scripts/generate-sitemap.mjs (via SSR module
// load) to write the real, crawlable /sitemap.xml static file — not just
// this page's own display, so it must stay exported even without an
// in-page trigger for it.
export function generateSitemapXml(pages = []) {
  const publishedPages = pages.filter(p => p.status === 'published' && p.indexable);
  const urls = publishedPages.map(p => `  <url>
    <loc>${p.canonical || `https://sky9india.com/${p.slug}`}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${p.type === 'landing' ? '1.0' : p.type === 'course' ? '0.9' : p.type === 'topic' ? '0.8' : '0.7'}</priority>
  </url>`).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

export default function SitemapPage() {
  const [filterType, setFilterType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const pages = seoPageEngine.getInventory();
  // The directory's own display (stats + grid) also counts the real, static
  // /sitemap.xml file as a published page; the XML file's own content stays
  // driven by `pages` alone, so it never lists itself as one of its own URLs.
  const displayPages = [...pages, XML_SITEMAP_ENTRY];
  const stats = {
    totalPublishedPages: displayPages.length,
    averageQualityScore: Math.round(displayPages.reduce((acc, p) => acc + (p.qualityScore || 100), 0) / (displayPages.length || 1)),
    indexableCount: displayPages.filter(p => p.indexable).length,
    categoryCoverage: new Set(displayPages.map(p => p.category).filter(Boolean)).size,
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredPages = displayPages.filter(p => {
    const matchesType = filterType === 'All' || p.type === filterType || (filterType === 'course' && (p.type === 'course' || p.type === 'course-hub'));
    const matchesSearch = !searchQuery || p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.slug.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div>
      <SeoHead
        title="500+ SEO Page Directory & Sitemap"
        description="Complete index of published SEO pages, course topics, granular subtopics, career pathways, internships, certifications, resources, and verified location hubs."
        canonical="https://sky9india.com/resources/visual-sitemap-directory"
      />
      {/* Hero */}
      <PageHero
        breadcrumbItems={[
          { label: 'Resources', path: '/resources/learning-overview' },
          { label: 'Visual Sitemap Directory', path: '/resources/visual-sitemap-directory' }
        ]}
        eyebrow="500+ SEO Page Architecture • Pune"
        title="Visual Sitemap Directory"
        description="Complete index of published SEO pages, course topics, granular subtopics, career pathways, internships, certifications, resources, and verified location hubs."
        image={heroImages.sitemap.url}
        imageWebp={heroImages.sitemap.webp}
        imageAlt={heroImages.sitemap.alt}
        imagePosition={heroImages.sitemap.pos}
      >
        {/* Metrics Dashboard */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl bg-slate-900/80 border border-slate-700/80 backdrop-blur-md mt-6">
          <div>
            <span className="text-xs text-slate-400 block mb-1">Published Pages</span>
            <span className="text-2xl sm:text-3xl font-bold text-emerald-400">{stats.totalPublishedPages}</span>
          </div>
          <div>
            <span className="text-xs text-slate-400 block mb-1">Indexable URLs</span>
            <span className="text-2xl sm:text-3xl font-bold text-emerald-400">{stats.indexableCount}</span>
          </div>
          <div>
            <span className="text-xs text-slate-400 block mb-1">Quality Score</span>
            <span className="text-2xl sm:text-3xl font-bold text-emerald-400">{stats.averageQualityScore}/100</span>
          </div>
          <div>
            <span className="text-xs text-slate-400 block mb-1">Categories</span>
            <span className="text-2xl sm:text-3xl font-bold text-emerald-400">{stats.categoryCoverage}</span>
          </div>
        </div>
      </PageHero>

      {/* Search Section */}
      <section className="py-6 sm:py-8 md:py-10 dark:bg-slate-900 bg-slate-100 border-b dark:border-slate-800 border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search 500+ SEO pages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl dark:bg-slate-800 bg-white border dark:border-slate-700 border-slate-300 dark:text-white text-slate-900 focus:outline-none focus:border-emerald-500 text-sm"
            />
          </div>
        </div>
      </section>

      {/* Main Page List */}
      <section className="py-8 sm:py-10 md:py-14 dark:bg-dark-bg bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 space-y-6 sm:space-y-8">
          <SectionHeader
            badge="Indexed Directory"
            title={`Page Inventory (${filteredPages.length} Pages Shown)`}
            subtitle="All pages follow canonical URL standards, unique meta titles, and dynamic schema markup."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-4">
            {filteredPages.map((p) => (
              <div
                key={p.id}
                className="p-5 rounded-2xl dark:bg-slate-800/60 bg-white border dark:border-slate-700 border-slate-200 hover:border-emerald-500 transition space-y-3 flex flex-col glass-panel"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-500">
                      {p.type}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-400">
                      <ShieldCheck className="w-3 h-3" />
                      Indexable ({p.qualityScore}/100)
                    </span>
                  </div>
                  <h3 className="text-base font-bold dark:text-white text-slate-900 font-heading line-clamp-2">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-mono mt-1 truncate">
                    {p.slug ? `/${p.slug}` : '/ (Homepage)'}
                  </p>
                  <p className="text-xs dark:text-slate-400 text-slate-600 line-clamp-2 mt-2 leading-relaxed">
                    {p.description}
                  </p>
                </div>

                {p.isStaticFile ? (
                  <a
                    href={`/${p.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-500 hover:underline pt-2"
                  >
                    Visit Page →
                  </a>
                ) : (
                  <Link
                    to={`/${p.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-500 hover:underline pt-2"
                  >
                    Visit Page →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
