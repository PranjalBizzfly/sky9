import React from 'react';
import { Link } from 'react-router-dom';
import { Check, X, ArrowRight, BookOpen } from 'lucide-react';
import Button from '../ui/Button';
import contentRepository from '../../services/contentRepository';

export default function CourseComparisonTable({ courses = [] }) {
  if (!courses || courses.length === 0) return null;

  return (
    <div className="relative">
      <p className="md:hidden flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
        <ArrowRight className="w-3.5 h-3.5 animate-pulse" />
        <span>Swipe to see all columns</span>
      </p>
      <div className="w-full overflow-x-auto rounded-2xl border dark:border-slate-700 border-slate-200 dark:bg-slate-800/40 bg-white shadow-sm">
        <table className="w-full text-left border-collapse min-w-[700px]">
        <thead>
          <tr className="border-b dark:border-slate-700 border-slate-200 dark:bg-slate-900/60 bg-slate-50">
            <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Program Name</th>
            <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Duration</th>
            <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Fee Investment</th>
            <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Delivery Mode</th>
            <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-center">1-Mo Internship</th>
            <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-center">Certificate</th>
            <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-right">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y dark:divide-slate-700/60 divide-slate-200 text-sm">
          {courses.map((course) => (
            <tr key={course.id || course.slug} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/60 transition-colors">
              <td className="p-4 font-bold dark:text-white text-slate-900">
                <Link to={contentRepository.getCourseUrl(course.slug)} className="hover:text-emerald-500 transition-colors flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{course.title}</span>
                </Link>
              </td>
              <td className="p-4 dark:text-slate-300 text-slate-700">{course.duration || 'Flexible'}</td>
              <td className="p-4 font-bold text-emerald-600 dark:text-emerald-400">{course.fee || 'Enquire'}</td>
              <td className="p-4 dark:text-slate-300 text-slate-700">{course.mode || 'Online & Offline'}</td>
              <td className="p-4 text-center">
                <Check className="w-5 h-5 text-emerald-500 mx-auto" />
              </td>
              <td className="p-4 text-center">
                <Check className="w-5 h-5 text-emerald-500 mx-auto" />
              </td>
              <td className="p-4 text-right">
                <Button to={`${contentRepository.getCourseUrl(course.slug)}#enquiry`} variant="primary" size="sm">
                  Enroll
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>
    </div>
  );
}
