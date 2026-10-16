import React from 'react';
import { motion } from 'framer-motion';

/**
 * ScrollReveal Component
 * Reusable scroll-based fade-up / fade-in animation.
 */
export function ScrollReveal({
  children,
  delay = 0,
  duration = 0.5,
  yOffset = 24,
  className = '',
  viewportMargin = '-60px',
  once = true,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: viewportMargin }}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerContainer & StaggerItem for cascading cards and grids
 */
export function StaggerContainer({
  children,
  staggerDelay = 0.08,
  className = '',
  viewportMargin = '-60px',
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: viewportMargin }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  yOffset = 20,
  duration = 0.5,
  className = '',
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: yOffset },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration, ease: [0.21, 0.47, 0.32, 0.98] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * SpotlightCard Component
 * Interactive glass card with subtle mouse spotlight glow for desktop.
 */
export function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(16, 185, 129, 0.12)',
}) {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);
  const cardRef = React.useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-2xl transition duration-300 ${className}`}
    >
      {/* Desktop Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 hidden md:block"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, ${spotlightColor}, transparent 70%)`,
        }}
        aria-hidden="true"
      />
      {children}
    </div>
  );
}

/**
 * GlassCard Component
 * Semi-transparent backdrop blur card supporting light and dark themes.
 */
export function GlassCard({
  children,
  className = '',
  hoverEffect = true,
}) {
  return (
    <div
      className={`backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl shadow-sm transition duration-300 ${
        hoverEffect ? 'hover:shadow-md hover:border-emerald-500/30 hover:-translate-y-1' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
