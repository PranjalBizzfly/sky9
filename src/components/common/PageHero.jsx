import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Breadcrumb from './Breadcrumb';
import TypewriterHeading from './animations/TypewriterHeading';
import SectionLabel from './SectionLabel';
import { heroImages } from '../../data/heroImages';

const fadeInUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

/**
 * Shared Internal-Page Hero Banner (InternalPageHero / PageHero).
 * 
 * Features:
 * - High-impact, content-relevant background photography
 * - Multi-stop dark gradient overlay for crystal-clear text contrast in both Light & Dark modes
 * - Automatic safe fallback for missing/broken images
 * - Pill badge with emerald accent dot
 * - High-contrast bold typography with Typewriter effect
 * - Responsive desktop, tablet, and mobile presentation
 */
export default function PageHero({
  breadcrumbItems = [],
  eyebrow,
  title,
  description,
  image,
  imageWebp,
  heroImage,
  imageAlt = '',
  imagePosition = 'center',
  primaryAction,
  secondaryAction,
  badges = [],
  children,
}) {
  // Support either `image` or `heroImage` (as object { url, webp, alt, pos } or string)
  const resolvedImage = typeof heroImage === 'object' && heroImage?.url
    ? heroImage.url
    : (heroImage || image || heroImages.genericDefault.url);

  const resolvedWebp = (typeof heroImage === 'object' && heroImage?.webp) ? heroImage.webp : imageWebp;

  const resolvedAlt = imageAlt || (typeof heroImage === 'object' && heroImage?.alt ? heroImage.alt : '');
  const resolvedPos = imagePosition || (typeof heroImage === 'object' && heroImage?.pos ? heroImage.pos : 'center');

  const [imgSrc, setImgSrc] = useState(resolvedImage);
  const [webpSrc, setWebpSrc] = useState(resolvedWebp);

  // Sync state if image prop changes
  React.useEffect(() => {
    if (resolvedImage) setImgSrc(resolvedImage);
    setWebpSrc(resolvedWebp);
  }, [resolvedImage, resolvedWebp]);

  const handleImgError = () => {
    setImgSrc(heroImages.genericDefault.url);
    setWebpSrc(heroImages.genericDefault.webp);
  };

  return (
    <section className="relative min-h-[420px] sm:min-h-[460px] md:min-h-[500px] flex items-center pt-24 pb-12 sm:pt-28 sm:pb-14 md:pt-32 md:pb-16 overflow-hidden bg-slate-950 text-white select-none">
      {/* Background Image Layer
          Pinned to a fixed height (matching the section's min-height floor) instead of
          stretching to fill the section (absolute inset-0). The section itself can grow
          taller than that floor to fit longer wrapped copy on narrow screens — if the
          image were stretched along with it, object-cover would crop away most of the
          photo's width to cover the resulting tall/narrow box, zooming into a random
          detail instead of a sensible crop. Capping the image band keeps the crop stable
          across all breakpoints; any extra section height below it is just the section's
          own bg-slate-950, which the gradient already fades toward. */}
      <div className="absolute inset-x-0 top-0 h-[420px] sm:h-[460px] md:h-[500px] z-0 overflow-hidden">
        <picture>
          {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
          <img
            src={imgSrc}
            alt={resolvedAlt || title || 'Sky9 India practical training'}
            style={{ objectPosition: resolvedPos }}
            className="w-full h-full object-cover transition-transform duration-1000"
            loading="eager"
            onError={handleImgError}
          />
        </picture>
        {/* Directional gradient overlay:
            Provides focused contrast on the left side where text and buttons sit,
            while smoothly fading across the right side so the person/workplace photograph remains bright, crisp, and clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/50 via-50% to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent via-60% to-slate-950/30" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {breadcrumbItems && breadcrumbItems.length > 0 && (
          <div className="mb-4 sm:mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        )}

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="max-w-3xl space-y-4 sm:space-y-6"
        >
          {/* Eyebrow / Category Tag */}
          {eyebrow && <SectionLabel tone="onDark">{eyebrow}</SectionLabel>}

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight font-heading text-white leading-tight drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)]">
            <TypewriterHeading text={title} cursor light />
          </h1>

          {/* Description */}
          {description && (
            <p className="text-base sm:text-lg md:text-xl text-slate-100 leading-relaxed max-w-2xl font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
              {description}
            </p>
          )}

          {/* Metadata Badges (if passed) */}
          {badges && badges.length > 0 && (
            <div className="flex flex-wrap gap-2.5 pt-1">
              {badges.map((badge, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-xs sm:text-sm text-slate-200"
                >
                  {badge.icon && <badge.icon className="w-4 h-4 text-emerald-400 shrink-0" />}
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>
          )}

          {/* Primary / Secondary Action Buttons */}
          {(primaryAction || secondaryAction) && (
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              {primaryAction && (
                primaryAction.href ? (
                  <a
                    href={primaryAction.href}
                    onClick={primaryAction.onClick}
                    className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 text-sm sm:text-base cursor-pointer"
                  >
                    <span>{primaryAction.label}</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                ) : (
                  <Link
                    to={primaryAction.to || '#'}
                    onClick={primaryAction.onClick}
                    className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 text-sm sm:text-base"
                  >
                    <span>{primaryAction.label}</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                )
              )}

              {secondaryAction && (
                secondaryAction.href ? (
                  <a
                    href={secondaryAction.href}
                    onClick={secondaryAction.onClick}
                    className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-slate-900/70 hover:bg-slate-800/80 text-slate-200 hover:text-white border border-slate-700/90 hover:border-emerald-500/50 backdrop-blur-md font-semibold rounded-xl transition duration-300 text-sm sm:text-base cursor-pointer"
                  >
                    <span>{secondaryAction.label}</span>
                  </a>
                ) : (
                  <Link
                    to={secondaryAction.to || '#'}
                    onClick={secondaryAction.onClick}
                    className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-slate-900/70 hover:bg-slate-800/80 text-slate-200 hover:text-white border border-slate-700/90 hover:border-emerald-500/50 backdrop-blur-md font-semibold rounded-xl transition duration-300 text-sm sm:text-base"
                  >
                    <span>{secondaryAction.label}</span>
                  </Link>
                )
              )}
            </div>
          )}

          {/* Additional Children (e.g. custom forms or action bars) */}
          {children}
        </motion.div>
      </div>
    </section>
  );
}

// Alias export for InternalPageHero
export { PageHero as InternalPageHero };
