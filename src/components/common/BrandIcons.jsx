import React from 'react';
import { companyInfo } from '../../data/siteData';

// Official brand glyphs as inline SVG (Simple Icons paths, CC0).
// All paths are drawn on a 24x24 viewBox and inherit currentColor.

const Glyph = ({ title, children, className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    aria-hidden="true"
    focusable="false"
    className={className}
  >
    <title>{title}</title>
    {children}
  </svg>
);

export const FacebookIcon = (props) => (
  <Glyph title="Facebook" {...props}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </Glyph>
);

export const InstagramIcon = (props) => (
  <Glyph title="Instagram" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </Glyph>
);

export const YouTubeIcon = (props) => (
  <Glyph title="YouTube" {...props}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </Glyph>
);

export const LinkedInIcon = (props) => (
  <Glyph title="LinkedIn" {...props}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.62 1.62 0 1 0 0-3.24 1.62 1.62 0 0 0 0 3.24m1.4 9.74v-8.37H5.06v8.37h2.8z" />
  </Glyph>
);

export const XIcon = (props) => (
  <Glyph title="X (Twitter)" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </Glyph>
);

export const socialMediaList = [
  { key: 'facebook', label: 'Facebook', Icon: FacebookIcon, getHref: (info) => info?.socialLinks?.facebook || 'https://facebook.com/sky9india' },
  { key: 'instagram', label: 'Instagram', Icon: InstagramIcon, getHref: (info) => info?.socialLinks?.instagram || 'https://instagram.com/sky9india' },
  { key: 'youtube', label: 'YouTube', Icon: YouTubeIcon, getHref: (info) => info?.socialLinks?.youtube || 'https://youtube.com/@sky9india' },
  { key: 'linkedin', label: 'LinkedIn', Icon: LinkedInIcon, getHref: (info) => info?.socialLinks?.linkedin || 'https://linkedin.com/company/sky9india' },
  { key: 'twitter', label: 'X (Twitter)', Icon: XIcon, getHref: (info) => info?.socialLinks?.twitter || 'https://x.com/sky9india' },
];

export const SocialLinksBar = ({ className = 'flex items-center gap-2.5', buttonClassName = '', iconClassName = 'w-4 h-4' }) => {
  return (
    <div className={className}>
      {socialMediaList.map((item) => {
        const Icon = item.Icon;
        const href = item.getHref(companyInfo);
        return (
          <a
            key={item.key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-900 border border-slate-700/80 flex items-center justify-center text-slate-200 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 hover:scale-110 active:scale-95 transition duration-200 shadow-sm ${buttonClassName}`}
          >
            <Icon className={iconClassName} />
          </a>
        );
      })}
    </div>
  );
};
