import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

/**
 * TypewriterHeading Component
 * Smooth typing animation triggered when scrolled into view.
 * - Supports Reduced Motion accessibility
 * - Prevents layout shifts
 * - Works across Light and Dark modes
 */
export default function TypewriterHeading({
  text = '',
  speed = 65,
  delay = 200,
  cursor = false,
  light = false,
  className = '',
  cursorClassName = '',
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayedText(text);
      setIsTypingComplete(true);
      return;
    }

    if (!isInView || !text) return;

    let currentIndex = 0;
    let timeoutId;
    let intervalId;

    timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        currentIndex += 1;
        setDisplayedText(text.slice(0, currentIndex));

        if (currentIndex >= text.length) {
          clearInterval(intervalId);
          setIsTypingComplete(true);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [isInView, text, speed, delay, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span ref={ref} className={`relative inline-block ${className}`}>
      {/* Reserves the final text's box (width/wrapping/height) from the very
          first render, so the reveal below never grows the heading — and
          nothing after it on the page — as characters type in. */}
      <span aria-hidden="true" className="invisible">
        {text}
      </span>
      <span className="absolute inset-0">
        {displayedText}
        {cursor && !isTypingComplete && (
          <span
            className={`inline-block w-[2.5px] sm:w-[3px] h-[0.85em] ml-1 rounded-sm align-middle transition-opacity duration-300 ${
              light
                ? 'bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]'
                : 'bg-emerald-500 dark:bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.5)]'
            } animate-pulse ${cursorClassName}`}
            aria-hidden="true"
          />
        )}
      </span>
    </span>
  );
}
