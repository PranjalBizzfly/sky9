import React from 'react';
import LeadForm from './LeadForm';

export default function CertificationEnquiryForm({ courseName = '', ctaSource = 'certification-form' }) {
  return (
    <LeadForm
      defaultCourse={courseName || 'Digital Marketing Training'}
      ctaSource={ctaSource}
      title="Request Certification Details"
      subtitle="Learn how to earn verified Sky9 Course Completion credentials and Google & Meta certificate guidance."
    />
  );
}
