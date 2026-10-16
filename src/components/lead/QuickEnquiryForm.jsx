import React from 'react';
import LeadForm from './LeadForm';

export default function QuickEnquiryForm({ courseName = '', ctaSource = 'quick-sidebar-form' }) {
  return (
    <LeadForm
      defaultCourse={courseName}
      ctaSource={ctaSource}
      title="Quick Enquiry"
      subtitle="Get fast callback from admissions."
      compact={true}
    />
  );
}
