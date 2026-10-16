import React from 'react';
import LeadForm from './LeadForm';

export default function BusinessOwnerEnquiryForm({ ctaSource = 'business-owner-form' }) {
  return (
    <LeadForm
      defaultCourse="Digital Marketing for Business Owners"
      ctaSource={ctaSource}
      title="Request Business Growth Information"
      subtitle="Find out how our 7-day intensive bootcamp helps entrepreneurs build lead funnels and local Google Maps visibility."
    />
  );
}
