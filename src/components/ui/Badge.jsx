import React from 'react';

export default function Badge({
  children,
  variant = 'emerald',
  size = 'md',
  className = '',
  icon: Icon,
}) {
  const baseStyles = 'inline-flex items-center gap-1.5 font-medium rounded-full border transition-colors';

  const sizeStyles = {
    sm: 'px-2.5 py-0.5 text-xs',
    md: 'px-3.5 py-1 text-xs',
  };

  const variantStyles = {
    emerald: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    neutral: 'dark:bg-slate-800 bg-slate-100 dark:text-slate-300 text-slate-700 dark:border-slate-700 border-slate-200',
    success: 'bg-emerald-500/15 text-emerald-500 border-emerald-500/30',
    warning: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
    outline: 'border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400',
  };

  return (
    <span className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
      <span>{children}</span>
    </span>
  );
}
