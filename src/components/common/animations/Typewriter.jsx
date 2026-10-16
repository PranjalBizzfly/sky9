import React, { useState, useEffect } from 'react';

/**
 * Typewriter Component
 * Smooth typing and backspacing effect with blinking cursor.
 * Fully supports reduced-motion accessibility.
 */
export default function Typewriter({
  words = ['Digital Marketing', 'AI & Automation', 'Software Testing', 'ERP Training'],
  typingSpeed = 110,
  deletingSpeed = 60,
  pauseTime = 2600,
  className = '',
  cursorClassName = '',
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
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
      setCurrentText(words[currentWordIndex] || words[0]);
      return;
    }

    const currentFullWord = words[currentWordIndex] || '';

    let timer;

    if (!isDeleting && currentText === currentFullWord) {
      // Finished typing full word, pause before deleting
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && currentText === '') {
      // Finished deleting, move to next word
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    } else if (isDeleting) {
      // Deleting character by character
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, deletingSpeed);
    } else {
      // Typing character by character
      timer = setTimeout(() => {
        setCurrentText(currentFullWord.slice(0, currentText.length + 1));
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseTime, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return <span className={className}>{words[0]}</span>;
  }

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span>{currentText}</span>
      <span
        className={`inline-block w-[3px] h-[1em] ml-1 bg-emerald-500 animate-pulse ${cursorClassName}`}
        aria-hidden="true"
      />
    </span>
  );
}
