import React, { useEffect } from 'react';
import { companyInfo } from '../../data/siteData';

export default function SeoHead({
  title = 'Sky9 India, Practical Training Institute Pune',
  description = 'Premier practical training institute in Pune offering Digital Marketing, AI & Automation, Software Testing, and ERP training with 1-month integrated internships.',
  canonical = '',
  robots = 'index, follow',
  keywords = ['Sky9 India', 'Digital Marketing Pune', 'AI Training', 'Software Testing', 'ERP Training'],
  ogImage = '/sky9-logo.svg',
  breadcrumbs = [],
  course = null,
  faqs = [],
  article = null,
}) {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://sky9india.com';
  const cleanCanonical = canonical || currentUrl.split('?')[0];

  useEffect(() => {
    // 1. Update Title
    document.title = title.endsWith('Sky9 India') ? title : `${title} | Sky9 India`;

    // Helper to set or update meta tag
    const setMetaTag = (selector, attrName, attrValue, content) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Meta Description & Keywords
    setMetaTag('meta[name="description"]', 'name', 'description', description);
    if (keywords && keywords.length > 0) {
      setMetaTag('meta[name="keywords"]', 'name', 'keywords', Array.isArray(keywords) ? keywords.join(', ') : keywords);
    }
    setMetaTag('meta[name="robots"]', 'name', 'robots', robots);

    // 3. Open Graph Tags
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', cleanCanonical);
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', ogImage);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', course ? 'article' : 'website');

    // 4. Canonical Link Tag
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', cleanCanonical);

    // 5. JSON-LD Structured Data Schema Generator
    const phone = companyInfo?.phone || '+91 7 319 419 519';
    const address = companyInfo?.address || 'Shri Nivas Towers, Above Baramati Bank, Pune – 411043';

    const schemas = [
      // Organization Schema
      {
        '@context': 'https://schema.org',
        '@type': 'EducationalOrganization',
        name: 'Sky9 India',
        url: 'https://sky9india.com',
        logo: 'https://sky9india.com/sky9-logo.svg',
        telephone: phone,
        address: {
          '@type': 'PostalAddress',
          streetAddress: address,
          addressLocality: 'Pune',
          addressRegion: 'Maharashtra',
          postalCode: '411043',
          addressCountry: 'IN',
        },
        sameAs: Object.values(companyInfo?.socialLinks || {}).filter(Boolean),
      },
    ];

    // BreadcrumbList Schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((b, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: b.label,
          item: `https://sky9india.com${b.path || ''}`,
        })),
      });
    }

    // Course Schema
    if (course) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: course.title,
        description: course.overview || description,
        provider: {
          '@type': 'Organization',
          name: 'Sky9 India',
          sameAs: 'https://sky9india.com',
        },
        offers: {
          '@type': 'Offer',
          category: 'Paid',
          priceCurrency: 'INR',
          price: course.fee || '25000',
        },
      });
    }

    // FAQPage Schema
    if (faqs && faqs.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.question || f.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.answer || f.a,
          },
        })),
      });
    }

    // Inject/Replace JSON-LD Script Element
    let scriptTag = document.getElementById('sky9-schema-jsonld');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'sky9-schema-jsonld';
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemas);
  }, [title, description, canonical, robots, keywords, ogImage, breadcrumbs, course, faqs, article]);

  return null;
}
