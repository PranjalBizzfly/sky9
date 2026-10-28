import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin, Phone, Mail, ChevronDown, ArrowRight,
  Sparkles, CheckCircle2, GraduationCap, Award,
  Briefcase, ShieldCheck, ExternalLink
} from 'lucide-react';
import { companyInfo } from '../../data/siteData';
import { footerNavigation } from '../../data/footerNavigationData';
import { SocialLinksBar } from '../common/BrandIcons';

// ─── Safe company data access ──────────────────────────────────────
const safeCompany = {
  name: companyInfo?.name || 'Sky9 India',
  shortName: companyInfo?.shortName || 'SKY9',
  tagline: companyInfo?.tagline || 'Learning by Doing',
  description: companyInfo?.description || 'Premier practical training institute in Pune offering Digital Marketing, AI & Automation, Software Testing, and ERP training.',
  phone: companyInfo?.phone || '+91 7 319 419 519',
  email: companyInfo?.email || 'info@Sky9India.com',
  address: companyInfo?.address || '2nd Floor, Shri Nivas Towers, Above Baramati Bank, Pune – 411043, Maharashtra, India',
};

// Same Google Maps search link the Contact page uses for "Get Directions".
const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(safeCompany.address)}`;

const featureBadges = [
  {
    title: 'Classroom & Live Online',
    subtitle: 'Pune Campus & Pan-India',
    icon: GraduationCap,
    badge: 'Training Hub',
    link: '/locations/pune',
  },
  {
    title: '1-Month Internship',
    subtitle: 'Integrated Real Projects',
    icon: Briefcase,
    badge: 'Experience',
    link: '/internship/internship-overview',
  },
  {
    title: 'Google & Meta Prep',
    subtitle: 'Globally Recognized',
    icon: Award,
    badge: 'Credentials',
    link: '/certification/certification-overview',
  },
  {
    title: 'Career Support',
    subtitle: 'Resume, Mock Drills & Referrals',
    icon: ShieldCheck,
    badge: 'Placement',
    link: '/career/career-opportunities-overview',
  },
];

// ─── Mobile accordion section ──────────────────────────────────────
function MobileAccordionSection({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-800/70">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-2.5 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-xs font-semibold text-slate-300 group-hover:text-emerald-400 transition-colors">
          {title}
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 ${isOpen ? 'rotate-180 text-emerald-400' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition duration-300 ${isOpen ? 'max-h-[600px] pb-3' : 'max-h-0'}`}
      >
        <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5 pt-1 pl-1">
          {(items || []).map((item, idx) => (
            <li key={idx}>
              <Link
                to={item.path}
                className="text-[11.5px] text-slate-400 hover:text-emerald-400 transition-colors block py-0.5 break-words leading-snug"
              >
                • {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ─── Desktop navigation column ─────────────────────────────────────
function FooterNavColumn({ title, items }) {
  return (
    <div className="flex flex-col">
      {/* Fixed two-line height keeps every column's links starting on the same line. */}
      <h4 className="relative min-h-[2.5rem] flex items-end text-[12px] font-semibold text-white tracking-[0.14em] uppercase leading-snug mb-5 pb-3 border-b border-white/[0.06]">
        {title}
        <span className="absolute -bottom-px left-0 h-px w-8 bg-gradient-to-r from-emerald-400 to-emerald-400/0" />
      </h4>
      <ul className="flex flex-col gap-3">
        {(items || []).map((item, idx) => (
          <li key={idx}>
            <Link
              to={item.path}
              className="block text-[13px] leading-[1.45] text-slate-400 hover:text-emerald-400 transition-colors duration-200"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-[#070b14] text-slate-300 border-t border-slate-800/80 overflow-hidden font-sans">
      
      {/* ════════════════════════════════════════════════════════════
          TOP GREEN CURVED HEADER PILL (Inspired by Picky Assist reference)
          ════════════════════════════════════════════════════════════ */}
      <div className="flex justify-center -mt-0.5">
        <div className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 text-white font-bold text-sm md:text-base px-8 md:px-14 py-2.5 rounded-b-3xl shadow-lg shadow-emerald-500/20 italic tracking-wide flex items-center gap-2.5 border-b border-x border-emerald-400/40">
          <Sparkles className="w-4 h-4 text-emerald-100" />
          <span>Learning by Doing, Practical Training Ecosystem</span>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════
          MAIN MULTI-COLUMN CONTAINER
          ════════════════════════════════════════════════════════════ */}
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-14">
        
        {/* ── DESKTOP & WIDE SCREEN LAYOUT (≥ 1280px) ── */}
        <div className="hidden xl:grid grid-cols-12 gap-8 items-start">
          
          {/* ── 1. LEFT BRAND & FEATURE BADGES BLOCK (Col Span 3) ── */}
          <div className="col-span-3 flex flex-col gap-6 pr-6 border-r border-slate-800/80">
            {/* Logo */}
            <Link to="/" className="inline-block">
              <img
                src="/sky9-logo.svg"
                alt={safeCompany.name}
                className="h-12 object-contain"
                loading="lazy"
              />
            </Link>

            <p className="text-sm leading-relaxed text-slate-300">
              {safeCompany.description}
            </p>

            {/* Social Media Circular Buttons */}
            <SocialLinksBar />

            {/* Feature Cards Stack (Matching reference left side cards) */}
            <div className="flex flex-col gap-3">
              {featureBadges.map((badge, idx) => {
                const IconComponent = badge.icon;
                return (
                  <Link
                    key={idx}
                    to={badge.link}
                    className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/60 transition flex items-center justify-between group shadow-sm hover:shadow-emerald-950/30"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-emerald-950/70 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white flex items-center gap-1.5">
                          {badge.title}
                        </div>
                        <div className="text-[11.5px] text-slate-400">
                          {badge.subtitle}
                        </div>
                      </div>
                    </div>
                    <span className="text-[10.5px] px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 font-medium">
                      {badge.badge}
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Contact Details */}
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3 text-xs text-slate-300">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Open in Google Maps"
                className="flex items-start gap-2.5 hover:text-emerald-400 transition-colors"
              >
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="leading-snug text-xs underline decoration-slate-600 underline-offset-2 hover:decoration-emerald-400">{safeCompany.address}</span>
              </a>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href={`tel:${safeCompany.phone.replace(/\s+/g, '')}`} className="phone-number text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors">
                  {safeCompany.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href={`mailto:${safeCompany.email}`} className="break-all text-xs text-slate-300 hover:text-emerald-400 transition-colors">
                  {safeCompany.email}
                </a>
              </div>
            </div>
          </div>

          {/* ── 2. MULTI-COLUMN NAVIGATION (Col Span 7) ── */}
          <div className="col-span-7 grid grid-cols-5 gap-6">
            {/* Col 1: Courses & ERP (paired so the stacked columns come out similar in height) */}
            <div className="flex flex-col gap-7">
              <FooterNavColumn
                title={footerNavigation.courses.title}
                items={footerNavigation.courses.items}
              />
              <FooterNavColumn
                title={footerNavigation.erp.title}
                items={footerNavigation.erp.items}
              />
            </div>

            {/* Col 2: Digital Marketing */}
            <FooterNavColumn
              title={footerNavigation.digitalMarketing.title}
              items={footerNavigation.digitalMarketing.items}
            />

            {/* Col 3: AI & Automation */}
            <FooterNavColumn
              title={footerNavigation.aiAutomation.title}
              items={footerNavigation.aiAutomation.items}
            />

            {/* Col 4: Business Owners */}
            <FooterNavColumn
              title={footerNavigation.businessOwners.title}
              items={footerNavigation.businessOwners.items}
            />

            {/* Col 5: Software Testing & Learning/Career */}
            <div className="flex flex-col gap-7">
              <FooterNavColumn
                title={footerNavigation.softwareTesting.title}
                items={footerNavigation.softwareTesting.items}
              />
              <FooterNavColumn
                title={footerNavigation.learningCareer.title}
                items={footerNavigation.learningCareer.items.filter((item) => item.path !== '/about/who-can-join')}
              />
            </div>
          </div>

          {/* ── 3. RIGHT SIDEBAR, ABOUT, CAREER & CTAS (Col Span 2) ── */}
          <div className="col-span-2 flex flex-col gap-6 pl-4 border-l border-slate-800/80">
            {/* Company Column */}
            <div>
              <FooterNavColumn
                title={footerNavigation.company.title}
                items={footerNavigation.company.items}
              />
            </div>

            {/* Training Highlights Badges */}
            <div className="pt-3 border-t border-slate-800">
              <h5 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-3">
                Training Highlights
              </h5>
              <div className="flex flex-col gap-2.5">
                <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-semibold text-slate-200 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>100% Practical Labs</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-semibold text-slate-200 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Google & Meta Guidance</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-semibold text-slate-200 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Pune Campus & Online</span>
                </div>
              </div>
            </div>

            {/* Action Buttons (Matching Reference Right Buttons) */}
            <div className="flex flex-col gap-3 pt-2">
              <Link
                to="/career/career-opportunities-overview"
                className="w-full py-3 px-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold flex items-center justify-center gap-2 transition border border-slate-700 shadow-md"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Admissions Open</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                to="/contact-us"
                className="w-full py-3.5 px-4 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40"
              >
                <span>Enroll Now</span>
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

        {/* ── TABLET LAYOUT (768px to 1279px) ── */}
        <div className="hidden md:grid xl:hidden grid-cols-12 gap-8">
          {/* Left Brand + Badges (Col Span 4) */}
          <div className="col-span-4 flex flex-col gap-5 pr-4 border-r border-slate-800">
            <Link to="/">
              <img src="/sky9-logo.svg" alt={safeCompany.name} className="h-10 object-contain" />
            </Link>
            <p className="text-xs text-slate-300 leading-relaxed">
              {safeCompany.description}
            </p>
            <SocialLinksBar />
            <div className="flex flex-col gap-2 pt-3 border-t border-slate-800 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <a href={`tel:${safeCompany.phone.replace(/\s+/g, '')}`} className="phone-number font-bold text-emerald-400 hover:text-emerald-300">{safeCompany.phone}</a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <a href={`mailto:${safeCompany.email}`} className="break-all hover:text-emerald-400">{safeCompany.email}</a>
              </div>
            </div>
            <Link
              to="/contact-us"
              className="py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs text-center shadow-md shadow-emerald-500/20 transition"
            >
              Enroll Now
            </Link>
          </div>

          {/* Nav Columns (Col Span 8) */}
          <div className="col-span-8 grid grid-cols-3 gap-6">
            <FooterNavColumn title={footerNavigation.courses.title} items={footerNavigation.courses.items} />
            <FooterNavColumn title={footerNavigation.digitalMarketing.title} items={footerNavigation.digitalMarketing.items} />
            <FooterNavColumn title={footerNavigation.aiAutomation.title} items={footerNavigation.aiAutomation.items} />
            <FooterNavColumn title={footerNavigation.businessOwners.title} items={footerNavigation.businessOwners.items} />
            <FooterNavColumn title={footerNavigation.softwareTesting.title} items={footerNavigation.softwareTesting.items} />
            <FooterNavColumn title={footerNavigation.company.title} items={footerNavigation.company.items} />
          </div>
        </div>

        {/* ── CLEAN MODERN MOBILE FOOTER (< 768px) ── */}
        <div className="block md:hidden space-y-6">
          
          {/* 1. Brand & Quick Contact Card */}
          <div className="flex flex-col items-center text-center gap-3.5 pb-6 border-b border-slate-800">
            <Link to="/" className="inline-block">
              <img src="/sky9-logo.svg" alt={safeCompany.name} className="h-9 object-contain" />
            </Link>
            
            <p className="text-xs text-slate-300 leading-relaxed max-w-xs font-normal">
              {safeCompany.description}
            </p>

            {/* Social Icons */}
            <SocialLinksBar className="flex items-center justify-center gap-2 pt-1" buttonClassName="w-8 h-8" />

            {/* Phone & Email Quick Tap Bars */}
            <div className="grid grid-cols-2 gap-2 w-full pt-2">
              <a
                href={`tel:${safeCompany.phone.replace(/\s+/g, '')}`}
                className="flex items-center justify-center gap-1.5 py-2 px-2 sm:px-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] min-[360px]:text-[11.5px] font-semibold text-emerald-400 hover:border-emerald-500/50 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 shrink-0" />
                <span className="phone-number">{safeCompany.phone}</span>
              </a>
              <a
                href={`mailto:${safeCompany.email}`}
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-900 border border-slate-800 text-[11.5px] font-semibold text-slate-300 hover:border-emerald-500/50 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 shrink-0 text-emerald-400" />
                <span className="truncate">Email Us</span>
              </a>
            </div>

            {/* Enroll Now CTA */}
            <Link
              to="/contact-us"
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold text-xs uppercase tracking-wider text-center shadow-lg shadow-emerald-500/25 transition flex items-center justify-center gap-2 mt-1"
            >
              <span>Enroll Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 2. Clean 2-Column Direct Navigation Links Grid */}
          <div className="grid grid-cols-2 gap-6 pb-6 border-b border-slate-800">
            {/* Column 1: Core Training Programs */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 pb-1 border-b border-emerald-500/20">
                Core Programs
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/courses/digital-marketing-training" className="text-xs text-slate-300 hover:text-emerald-400 transition-colors block py-0.5">
                    Digital Marketing Training
                  </Link>
                </li>
                <li>
                  <Link to="/courses/ai-automation-training" className="text-xs text-slate-300 hover:text-emerald-400 transition-colors block py-0.5">
                    AI & Automation Training
                  </Link>
                </li>
                <li>
                  <Link to="/business-owners/digital-marketing-for-business-owners" className="text-xs text-slate-300 hover:text-emerald-400 transition-colors block py-0.5">
                    Digital Marketing for Business Owners
                  </Link>
                </li>
                <li>
                  <Link to="/courses/software-testing-training" className="text-xs text-slate-300 hover:text-emerald-400 transition-colors block py-0.5">
                    Software Testing Training
                  </Link>
                </li>
                <li>
                  <Link to="/courses/erp-training" className="text-xs text-slate-300 hover:text-emerald-400 transition-colors block py-0.5">
                    ERP Training
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Quick Links & Support */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 pb-1 border-b border-emerald-500/20">
                Explore Sky9
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/about/about-overview" className="text-xs text-slate-300 hover:text-emerald-400 transition-colors block py-0.5">
                    About Sky9 India
                  </Link>
                </li>
                <li>
                  <Link to="/internship/internship-overview" className="text-xs text-slate-300 hover:text-emerald-400 transition-colors block py-0.5">
                    1-Mo Internship
                  </Link>
                </li>
                <li>
                  <Link to="/certification/certification-overview" className="text-xs text-slate-300 hover:text-emerald-400 transition-colors block py-0.5">
                    Certifications
                  </Link>
                </li>
                <li>
                  <Link to="/career/career-opportunities-overview" className="text-xs text-slate-300 hover:text-emerald-400 transition-colors block py-0.5">
                    Placement Support
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="text-xs text-slate-300 hover:text-emerald-400 transition-colors block py-0.5">
                    Course Fees
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" className="text-xs text-slate-300 hover:text-emerald-400 transition-colors block py-0.5">
                    Contact & Pune Center
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* 3. Subtle Sleek Accordion for Detailed Syllabus Modules */}
          <div className="space-y-1">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
              Course Modules & Syllabi
            </p>
            <MobileAccordionSection title="Digital Marketing Topics" items={footerNavigation.digitalMarketing.items} />
            <MobileAccordionSection title="AI & Automation Topics" items={footerNavigation.aiAutomation.items} />
            <MobileAccordionSection title="Business Owner Topics" items={footerNavigation.businessOwners.items} />
            <MobileAccordionSection title="Software Testing & ERP" items={[...footerNavigation.softwareTesting.items, ...footerNavigation.erp.items]} />
          </div>

          {/* 4. Pune Campus Address Card */}
          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 space-y-1.5">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">Pune Training Facility:</span>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open in Google Maps"
                  className="text-[11px] text-slate-400 leading-relaxed underline decoration-slate-600 underline-offset-2 hover:text-emerald-400 hover:decoration-emerald-400 transition-colors"
                >
                  {safeCompany.address}
                </a>
              </div>
            </div>
            <div className="pt-1.5 border-t border-slate-800/80 text-[11px] text-emerald-400 flex items-center justify-between">
              <span>Classroom Batches & Live Online</span>
              <span>Mon – Sat: 9 AM – 7 PM</span>
            </div>
          </div>

        </div>

      </div>

      {/* ════════════════════════════════════════════════════════════
          BOTTOM COPYRIGHT BAR
          ════════════════════════════════════════════════════════════ */}
      <div className="border-t border-slate-800/80 bg-[#04070e]">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p className="text-center md:text-left">
            Copyright © {new Date().getFullYear()} {safeCompany.shortName} India. All rights reserved.
            <span className="block sm:inline sm:ml-2 mt-1 sm:mt-0 font-semibold text-slate-200">
              Made with{' '}
              <a href="https://mengo.si/" target="_blank" rel="noopener noreferrer" className="font-bold text-emerald-400 underline underline-offset-2 hover:text-emerald-300 transition-colors">Mengo.si</a>
            </span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-[12.5px]">
            <Link to="/pricing" className="hover:text-emerald-400 transition-colors">Course Fees & Pricing</Link>
            <Link to="/locations" className="hover:text-emerald-400 transition-colors">Locations</Link>
            {/* Plain <a>, not a router <Link>: the XML sitemap is a static file, not an app route. */}
            <a href="https://sky9india.com/sitemap.xml" className="hover:text-emerald-400 transition-colors">Sitemap</a>
            <Link to="/terms-and-conditions" className="hover:text-emerald-400 transition-colors">Terms & Conditions</Link>
            <Link to="/contact-us" className="hover:text-emerald-400 transition-colors">Contact Us</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
