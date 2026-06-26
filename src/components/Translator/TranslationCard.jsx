import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, Copy, Check, MessageSquare } from 'lucide-react';
import Loader from '../Loader';
import { toast } from '../../utils/toast';

export default function TranslationCard({
  translatedText,
  loading,
  error,
  targetLangName
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!translatedText) return;
    try {
      await navigator.clipboard.writeText(translatedText);
      setCopied(true);
      toast.success('Translation copied!');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to copy translation.');
    }
  };

  const getCharCount = () => (translatedText ? translatedText.length : 0);

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-sans">
          Result {targetLangName ? `(${targetLangName})` : ''}
        </span>
        {translatedText && !loading && !error && (
          <span className="text-3xs text-slate-400 dark:text-slate-500 font-mono">
            {getCharCount()} chars
          </span>
        )}
      </div>

      <div className="flex-1 min-h-[240px] card-premium p-6 flex flex-col relative overflow-hidden">
        <AnimatePresence mode="wait">
          
          {/* Loading state */}
          {loading && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col justify-center p-6 bg-white dark:bg-slate-950/20"
            >
              <Loader variant="skeleton" className="w-full" />
              <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-slate-400 font-medium">
                <Loader size="sm" />
                <span>Translating...</span>
              </div>
            </motion.div>
          )}

          {/* Error state */}
          {!loading && error && (
            <motion.div
              key="error"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex-1 flex flex-col items-center justify-center text-center p-2"
            >
              <div className="p-2 rounded bg-red-50 dark:bg-red-950/20 text-red-500 mb-2">
                <AlertCircle className="h-5 w-5" />
              </div>
              <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                Failed to Translate
              </h4>
              <p className="text-2xs text-slate-500 dark:text-slate-400 max-w-[240px] leading-relaxed">
                {error}
              </p>
            </motion.div>
          )}

          {/* Empty state */}
          {!loading && !error && !translatedText && (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex-1 flex flex-col items-center justify-center text-center p-2 text-slate-400 dark:text-slate-500"
            >
              <MessageSquare className="h-7 w-7 mb-2 stroke-[1.5] text-slate-300 dark:text-slate-700" />
              <p className="text-xs font-semibold text-slate-600 dark:text-slate-400">No Output</p>
              <p className="text-3xs text-slate-400 dark:text-slate-500 mt-0.5 max-w-[180px] leading-normal">
                Enter source text and click translate.
              </p>
            </motion.div>
          )}

          {/* Result state */}
          {!loading && !error && translatedText && (
            <motion.div
              key="result"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex-1 flex flex-col justify-between"
            >
              <div className="flex-1 overflow-y-auto max-h-[160px] text-slate-800 dark:text-slate-200 text-sm leading-relaxed whitespace-pre-wrap font-sans select-all pr-1">
                {translatedText}
              </div>

              {/* Action bar bottom */}
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-850 flex justify-end">
                <button
                  onClick={handleCopy}
                  className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded border text-3xs font-bold transition-colors duration-150 cursor-pointer ${
                    copied
                      ? 'bg-emerald-50 dark:bg-emerald-950/20 border-emerald-250 text-emerald-600 dark:text-emerald-400'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-450 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                  aria-label="Copy result"
                >
                  {copied ? (
                    <>
                      <Check className="h-3 w-3 stroke-[2.5]" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
