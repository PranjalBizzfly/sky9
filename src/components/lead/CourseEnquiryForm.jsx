import React from 'react';
import LeadForm from './LeadForm';

export default function CourseEnquiryForm({ courseName = '', ctaSource = 'course-page-form' }) {
  return (
    <LeadForm
      defaultCourse={courseName}
      ctaSource={ctaSource}
      title={`Enquire About ${courseName || 'Course'}`}
      subtitle="Fill in your contact info to receive detailed curriculum syllabus and upcoming batch dates."
    />
  );
}
