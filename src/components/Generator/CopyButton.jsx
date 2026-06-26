import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { toast } from '../../utils/toast';

/**
 * Clean, flat CopyButton component.
 */
export default function CopyButton({ text, className = '', label = 'Copy' }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!text) {
      toast.error('Nothing to copy!');
      return;
    }
    
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast.success('Copied to clipboard!');
      
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Clipboard copy failed:', err);
      toast.error('Failed to copy.');
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded border text-3xs font-bold transition-all duration-150 cursor-pointer ${
        copied
          ? 'bg-emerald-50 dark:bg-emerald-950/20 border-emerald-250 text-emerald-600 dark:text-emerald-400'
          : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-805 text-slate-600 dark:text-slate-350'
      } ${className}`}
      type="button"
      title={label}
      aria-label={label}
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5 stroke-[2.5]" />
          <span>Copied</span>
        </>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5" />
          <span>Copy</span>
        </>
      )}
    </button>
  );
}
