import React from 'react';

/**
 * Animated loader and skeleton layout component.
 * @param {Object} props
 * @param {'spinner'|'skeleton'} [props.variant='spinner'] - Type of loader to display.
 * @param {'sm'|'md'|'lg'} [props.size='md'] - Size of the spinner.
 * @param {string} [props.color='text-primary-500'] - CSS color class for the spinner.
 * @param {string} [props.className=''] - Additional Tailwind utility classes.
 */
export default function Loader({
  variant = 'spinner',
  size = 'md',
  color = 'text-primary-500',
  className = '',
  ...props
}) {
  if (variant === 'skeleton') {
    return (
      <div className={`animate-pulse space-y-3 ${className}`} {...props}>
        <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded-md w-3/4"></div>
        <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded-md w-1/2"></div>
        <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded-md w-5/6"></div>
      </div>
    );
  }

  const sizes = {
    sm: 'h-4 w-4 border-2',
    md: 'h-8 w-8 border-3',
    lg: 'h-12 w-12 border-4'
  };

  const spinnerSize = sizes[size] || sizes.md;

  return (
    <div className={`flex items-center justify-center ${className}`} {...props}>
      <div
        className={`animate-spin rounded-full border-t-transparent border-slate-300 dark:border-slate-700 ${color} ${spinnerSize}`}
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
