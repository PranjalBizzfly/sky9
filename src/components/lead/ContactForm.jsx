import React from 'react';
import LeadForm from './LeadForm';

export default function ContactForm({ ctaSource = 'contact-page' }) {
  return (
    <LeadForm
      ctaSource={ctaSource}
      title="Contact Admissions Team"
      subtitle="Have questions about Sky9 training programs, fees, or classroom location in Pune? Send us a message."
    />
  );
}
