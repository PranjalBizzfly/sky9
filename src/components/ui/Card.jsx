import React from 'react';

export default function Card({
  children,
  variant = 'default',
  className = '',
  padding = 'p-6',
  ...props
}) {
  const baseStyles = 'rounded-2xl transition duration-300 border';

  const variantStyles = {
    default: 'dark:bg-slate-800/90 bg-white dark:border-slate-700/80 border-slate-200 shadow-sm',
    interactive: 'dark:bg-slate-800/90 bg-white dark:border-slate-700/80 border-slate-200 shadow-sm hover:border-emerald-500/50 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-emerald-500/5',
    outlined: 'bg-transparent dark:border-slate-700 border-slate-200',
    gradient: 'dark:bg-slate-800/95 bg-white border-2 border-emerald-500 shadow-xl dark:shadow-emerald-500/10 text-slate-900 dark:text-white',
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${padding} ${className}`} {...props}>
      {children}
    </div>
  );
}
