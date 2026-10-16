import React from 'react';
import SectionHeader from './SectionHeader';
import FAQAccordion from './FAQAccordion';

/**
 * Shared, data-driven FAQ section used across every internal page.
 * Renders nothing if no items are provided, so callers can pass
 * page.faqs directly without a guard.
 */
const FAQSection = ({
  items = [],
  label = 'Page FAQs',
  title = 'Frequently Asked Questions',
  description,
  className = 'py-8 sm:py-10 md:py-14 dark:bg-dark-bg bg-light-bg',
}) => {
  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <section className={className}>
      <div className="max-w-4xl mx-auto px-4">
        <SectionHeader badge={label} title={title} subtitle={description} />
        <div className="mt-4 sm:mt-8 md:mt-12">
          <FAQAccordion faqs={items} />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
