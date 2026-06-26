import React from 'react';
import { LANGUAGES } from '../../constants/languages';

/**
 * Clean, compact language select dropdown.
 */
export default function LanguageSelect({ value, onChange, className = '' }) {
  return (
    <div className={`relative flex items-center ${className}`}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-1.5 rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 font-semibold text-xs focus:border-slate-400 dark:focus:border-slate-600 cursor-pointer appearance-none shadow-sm pr-8"
        aria-label="Target language select"
      >
        {LANGUAGES.map((lang) => (
          <option
            key={lang.code}
            value={lang.code}
            className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100"
          >
            {lang.name}
          </option>
        ))}
      </select>
      <div className="absolute right-2.5 pointer-events-none flex items-center text-slate-400 dark:text-slate-500">
        <svg
          className="h-3 w-3 fill-none stroke-current stroke-2"
          viewBox="0 0 24 24"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </div>
  );
}
