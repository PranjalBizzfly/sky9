import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

/**
 * AnimatedCounter Component
 * Animates numbers smoothly from 0 to the target number when in viewport.
 * Preserves non-numeric characters like "+", "₹", "%", etc.
 */
export default function AnimatedCounter({
  value = '0',
  duration = 2000,
  className = '',
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayValue, setDisplayValue] = useState('0');

  // Extract prefix, number, decimal, and suffix
  const match = String(value).match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/);
  const prefix = match ? match[1] : '';
  const rawNumberStr = match ? match[2].replace(/,/g, '') : '0';
  const suffix = match ? match[3] : '';
  const targetNumber = parseFloat(rawNumberStr) || 0;
  const isFloat = rawNumberStr.includes('.');
  const decimalPlaces = isFloat ? rawNumberStr.split('.')[1].length : 0;

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function: easeOutExpo for natural slowing down
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentNumber = targetNumber * easeProgress;

      const formattedNumber = isFloat
        ? currentNumber.toFixed(decimalPlaces)
        : Math.floor(currentNumber).toLocaleString();

      setDisplayValue(`${prefix}${formattedNumber}${suffix}`);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, targetNumber, duration, isFloat, decimalPlaces, prefix, suffix, value]);

  return (
    <span ref={ref} className={className}>
      {isInView ? displayValue : `${prefix}0${suffix}`}
    </span>
  );
}
