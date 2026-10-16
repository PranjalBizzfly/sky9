import React from 'react';
import LeadForm from '../lead/LeadForm';

export default function EnquiryForm({ courseName = '', ctaSource = 'common-enquiry-form' }) {
  return (
    <LeadForm
      defaultCourse={courseName}
      ctaSource={ctaSource}
      title="Request Program Information"
      subtitle="Fill in your contact details below and our admissions team will contact you shortly."
    />
  );
}
