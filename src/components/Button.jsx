import React from 'react';
import Loader from './Loader';

/**
 * Reusable premium flat button component.
 * @param {Object} props
 * @param {React.ReactNode} props.children - Button label / content.
 * @param {Function} props.onClick - Click event handler.
 * @param {string} [props.type='button'] - Button HTML type.
 * @param {'primary'|'secondary'|'outline'|'danger'} [props.variant='primary'] - Style variant.
 * @param {boolean} [props.disabled=false] - Disabled state.
 * @param {boolean} [props.loading=false] - Loading spinner state.
 * @param {React.ReactNode} [props.icon] - Optional starting icon.
 * @param {string} [props.className=''] - Additional Tailwind utility classes.
 */
export default function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  disabled = false,
  loading = false,
  icon,
  className = '',
  ...props
}) {
  const baseStyle = 'inline-flex items-center justify-center font-medium rounded-lg transition-all focus:outline-none focus:ring-1 focus:ring-slate-400 dark:focus:ring-slate-600 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer active:scale-[0.98]';
  const sizeStyle = 'px-4 py-2.5 text-sm';
  
  const variants = {
    primary: 'bg-slate-950 dark:bg-slate-50 hover:bg-slate-900 dark:hover:bg-white text-slate-50 dark:text-slate-950 shadow-sm',
    secondary: 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700/80 text-slate-800 dark:text-slate-100',
    outline: 'border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300',
    danger: 'bg-red-600 hover:bg-red-500 text-white shadow-sm'
  };

  const selectedVariant = variants[variant] || variants.primary;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseStyle} ${sizeStyle} ${selectedVariant} ${className}`}
      {...props}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <Loader size="sm" color="currentColor" />
          <span>Processing...</span>
        </span>
      ) : (
        <span className="flex items-center gap-2 justify-center">
          {icon && <span className="flex-shrink-0">{icon}</span>}
          {children}
        </span>
      )}
    </button>
  );
}
