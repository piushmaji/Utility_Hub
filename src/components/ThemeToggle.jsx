import React from 'react';
import { Sun, Moon } from 'lucide-react';

/**
 * Theme Toggle Button component.
 * @param {Object} props
 * @param {string} props.theme - The current theme ('light' or 'dark').
 * @param {Function} props.toggleTheme - Function to switch the theme.
 */
export default function ThemeToggle({ theme, toggleTheme }) {
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/80 focus:outline-none focus:ring-1 focus:ring-slate-400 dark:focus:ring-slate-600 transition-all cursor-pointer shadow-sm"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? (
        <Sun className="h-4.5 w-4.5" />
      ) : (
        <Moon className="h-4.5 w-4.5" />
      )}
    </button>
  );
}
