import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  disabled = false,
  className = '',
  icon: Icon,
  iconPosition = 'right',
  type = 'button',
  ...props
}) {
  const baseStyles = 'btn-shimmer inline-flex items-center justify-center font-semibold rounded-xl transition duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 disabled:opacity-60 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-6 py-3 text-sm gap-2',
    lg: 'px-8 py-3.5 text-base gap-2.5',
  };

  const variantStyles = {
    primary: 'bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35 border border-transparent',
    secondary: 'dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 bg-slate-200 hover:bg-slate-300 text-slate-800 border border-transparent',
    outline: 'border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white dark:hover:text-white',
    ghost: 'dark:text-slate-300 text-slate-600 hover:text-emerald-500 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800/50',
    cta: 'bg-white hover:bg-slate-50 text-emerald-700 font-bold shadow-xl border border-transparent',
  };

  const classes = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const renderContent = () => (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {renderContent()}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {renderContent()}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes} {...props}>
      {renderContent()}
    </button>
  );
}
