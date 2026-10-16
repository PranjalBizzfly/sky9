import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { useLead } from '../../context/LeadContext';

export default function CourseEnquiryButton({
  courseName = '',
  ctaSource = 'course-button',
  children,
  className = '',
  variant = 'emerald'
}) {
  const { openLeadModal } = useLead();

  const handleClick = (e) => {
    e.preventDefault();
    openLeadModal({
      course: courseName,
      ctaSource,
      title: `Enquire About ${courseName || 'Sky9 Programs'}`,
      subtitle: 'Our Pune admissions team will provide full curriculum syllabus, fees, and batch schedules.',
    });
  };

  const baseStyles = 'btn-shimmer inline-flex items-center justify-center gap-2 font-bold rounded-xl transition duration-300 shadow-md cursor-pointer';
  const variantStyles = variant === 'emerald'
    ? 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-emerald-500/20'
    : variant === 'outline'
    ? 'border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10'
    : 'bg-white text-emerald-700 hover:bg-slate-50';

  return (
    <button
      onClick={handleClick}
      className={`${baseStyles} ${variantStyles} ${className || 'px-6 py-3.5 text-sm'}`}
    >
      {children || (
        <>
          <span>Enquire Now</span>
          <ArrowRight className="w-4 h-4" />
        </>
      )}
    </button>
  );
}
