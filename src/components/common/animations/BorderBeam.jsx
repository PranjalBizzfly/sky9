import React from 'react';
import { motion } from 'framer-motion';

export default function BorderBeam({
  className = '',
  size = 150,
  duration = 8,
  anchor = 90,
  borderWidth = 1.5,
  colorFrom = '#10B981',
  colorTo = '#34D399',
  delay = 0,
}) {
  return (
    <div
      style={{
        '--size': `${size}px`,
        '--duration': `${duration}s`,
        '--anchor': `${anchor}%`,
        '--border-width': `${borderWidth}px`,
        '--color-from': colorFrom,
        '--color-to': colorTo,
        '--delay': `-${delay}s`,
      }}
      className={`pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)] ${className}`}
    >
      <motion.div
        className="absolute aspect-square bg-gradient-to-l from-[var(--color-from)] via-[var(--color-to)] to-transparent"
        style={{
          width: 'var(--size)',
          offsetPath: `rect(0 auto auto 0 round calc(var(--size)))`,
        }}
        animate={{
          offsetDistance: ['0%', '100%'],
        }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration,
          delay: -delay,
        }}
      />
    </div>
  );
}
