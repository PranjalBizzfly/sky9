import React from 'react';
import LeadForm from './LeadForm';

export default function InternshipEnquiryForm({ courseName = '', ctaSource = 'internship-form' }) {
  return (
    <LeadForm
      defaultCourse={courseName || 'Digital Marketing Training'}
      ctaSource={ctaSource}
      title="Apply for 1-Month Internship"
      subtitle="Request details on our integrated live project internship, supervisor guidance, and experience certificate."
    />
  );
}
