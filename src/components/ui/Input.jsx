import React from 'react';

export function Input({
  label,
  error,
  helperText,
  className = '',
  id,
  type = 'text',
  ...props
}) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium dark:text-slate-200 text-slate-700">
          {label}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors duration-200 
          dark:bg-slate-900 bg-slate-50 dark:text-white text-slate-900 
          dark:border-slate-700 border-slate-300 
          focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 
          disabled:opacity-50 disabled:bg-slate-100 dark:disabled:bg-slate-800
          ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''} 
          ${className}`}
        {...props}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
      {!error && helperText && <p className="text-xs text-slate-500 dark:text-slate-400">{helperText}</p>}
    </div>
  );
}

export function Select({
  label,
  options = [],
  error,
  helperText,
  className = '',
  id,
  ...props
}) {
  const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label htmlFor={selectId} className="block text-sm font-medium dark:text-slate-200 text-slate-700">
          {label}
        </label>
      )}
      <select
        id={selectId}
        style={{ colorScheme: 'inherit' }}
        className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors duration-200 
          dark:bg-slate-900 bg-white dark:text-white text-slate-900 
          dark:border-slate-700 border-slate-300 
          focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 
          disabled:opacity-50 disabled:bg-slate-100 dark:disabled:bg-slate-800
          ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''} 
          ${className}`}
        {...props}
      >
        {options.map((opt, idx) => (
          <option
            key={idx}
            value={opt.value !== undefined ? opt.value : opt}
            className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white py-2"
          >
            {opt.label !== undefined ? opt.label : opt}
          </option>
        ))}
      </select>
      {error && <p className="text-xs text-red-500">{error}</p>}
      {!error && helperText && <p className="text-xs text-slate-500 dark:text-slate-400">{helperText}</p>}
    </div>
  );
}

export function Textarea({
  label,
  error,
  helperText,
  className = '',
  rows = 4,
  id,
  ...props
}) {
  const areaId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label htmlFor={areaId} className="block text-sm font-medium dark:text-slate-200 text-slate-700">
          {label}
        </label>
      )}
      <textarea
        id={areaId}
        rows={rows}
        className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors duration-200 
          dark:bg-slate-900 bg-slate-50 dark:text-white text-slate-900 
          dark:border-slate-700 border-slate-300 
          focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 
          ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''} 
          ${className}`}
        {...props}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
      {!error && helperText && <p className="text-xs text-slate-500 dark:text-slate-400">{helperText}</p>}
    </div>
  );
}
