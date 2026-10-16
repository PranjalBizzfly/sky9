import React from 'react';
import LeadForm from './LeadForm';

export default function CareerEnquiryForm({ courseName = '', ctaSource = 'career-form' }) {
  return (
    <LeadForm
      defaultCourse={courseName || 'Digital Marketing Training'}
      ctaSource={ctaSource}
      title="Schedule Placement Counseling"
      subtitle="Speak with our career mentors regarding skill gap assessment, resume optimization, and hiring referrals."
    />
  );
}
