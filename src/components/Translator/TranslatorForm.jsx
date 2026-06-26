import React from 'react';
import { Trash2, ArrowLeftRight } from 'lucide-react';
import LanguageSelect from './LanguageSelect';

const CHARACTER_LIMIT = 5000;

export default function TranslatorForm({
  inputText,
  setInputText,
  sourceLang,
  targetLang,
  onSwapLanguages,
  onLanguageChange,
  onTranslate,
  onClear,
  loading,
  languagesMap
}) {
  const handleInputChange = (e) => {
    const text = e.target.value;
    if (text.length <= CHARACTER_LIMIT) {
      setInputText(text);
    }
  };

  const getSourceLabel = () => {
    if (sourceLang === 'en') return 'English';
    return languagesMap[sourceLang] || sourceLang;
  };

  const getTargetLabel = () => {
    if (targetLang === 'en') return 'English';
    return languagesMap[targetLang] || targetLang;
  };

  const isTranslateDisabled = !inputText.trim() || loading;

  return (
    <div className="space-y-4">
      {/* Header controls toolbar */}
      <div className="flex flex-row items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800/80">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            From:
          </span>
          <span className="text-xs font-bold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-850 px-2 py-0.5 rounded">
            {getSourceLabel()}
          </span>
          
          <button
            type="button"
            onClick={onSwapLanguages}
            className="p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors cursor-pointer"
            title="Swap Languages"
            aria-label="Swap Languages"
          >
            <ArrowLeftRight className="h-3.5 w-3.5" />
          </button>

          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 font-sans">
            To:
          </span>
        </div>

        {/* Dropdown Selector */}
        <div className="w-40 flex-shrink-0">
          {sourceLang === 'en' ? (
            <LanguageSelect
              value={targetLang}
              onChange={onLanguageChange}
            />
          ) : (
            <div className="text-center py-1.5 px-3 rounded border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-semibold text-xs">
              English
            </div>
          )}
        </div>
      </div>

      {/* Input box */}
      <div className="relative">
        <textarea
          value={inputText}
          onChange={handleInputChange}
          placeholder={
            sourceLang === 'en'
              ? 'Enter English text to translate...'
              : `Enter text in ${getSourceLabel()} to translate to English...`
          }
          className="w-full min-h-[180px] p-3 rounded-md border border-slate-200 dark:border-slate-850 bg-transparent text-slate-800 dark:text-slate-100 text-sm focus:border-slate-400 dark:focus:border-slate-600 transition-colors resize-none leading-relaxed"
          aria-label="Source text input"
        />

        {/* Action tags bottom */}
        <div className="absolute bottom-3 right-3 flex items-center gap-2">
          <span className="text-3xs text-slate-400 dark:text-slate-500 font-mono">
            {inputText.length}/{CHARACTER_LIMIT}
          </span>
          {inputText && (
            <button
              type="button"
              onClick={onClear}
              className="p-1 rounded text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 transition-all cursor-pointer"
              title="Clear input"
              aria-label="Clear input"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Action Submit */}
      <button
        onClick={onTranslate}
        disabled={isTranslateDisabled}
        className="w-full py-2.5 px-4 font-semibold text-xs text-white dark:text-slate-900 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 dark:hover:bg-white disabled:bg-slate-100 dark:disabled:bg-slate-800 disabled:text-slate-400 dark:disabled:text-slate-500 disabled:cursor-not-allowed rounded-md transition-all cursor-pointer flex items-center justify-center gap-1.5"
        type="button"
      >
        <span>{loading ? 'Translating...' : 'Translate'}</span>
      </button>
    </div>
  );
}
