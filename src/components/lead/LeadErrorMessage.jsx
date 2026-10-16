import React from 'react';
import { AlertTriangle } from 'lucide-react';

export default function LeadErrorMessage({ message = "An error occurred while submitting your enquiry. Please try again or call our admissions team directly." }) {
  if (!message) return null;
  return (
    <div className="bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/30 text-rose-800 dark:text-rose-300 rounded-xl p-4 flex items-start gap-3 text-sm font-medium">
      <AlertTriangle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
      <span>{message}</span>
    </div>
  );
}
