import React, { useState } from 'react';
import { Languages, HelpCircle } from 'lucide-react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { LANGUAGES, DEFAULT_LANGUAGE } from '../constants/languages';
import { translateText } from '../services/api';
import { toast } from '../utils/toast';
import TranslatorForm from '../components/Translator/TranslatorForm';
import TranslationCard from '../components/Translator/TranslationCard';

const languagesMap = LANGUAGES.reduce((acc, curr) => {
  acc[curr.code] = curr.name;
  return acc;
}, {});

export default function Translator() {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Persistence of language selection
  const [targetLang, setTargetLang] = useLocalStorage('last_target_lang', DEFAULT_LANGUAGE);
  const [sourceLang, setSourceLang] = useState('en');

  const handleTranslate = async () => {
    if (!inputText || !inputText.trim()) {
      toast.error('Please enter some text to translate.');
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
      const destinationLanguage = sourceLang === 'en' ? targetLang : 'en';
      const translation = await translateText(inputText, destinationLanguage);
      setTranslatedText(translation);
    } catch (err) {
      console.error(err);
      setError(err.message || 'An unexpected error occurred during translation.');
      toast.error(err.message || 'Translation failed.');
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setInputText('');
    setTranslatedText('');
    setError(null);
  };

  const handleSwapLanguages = () => {
    const prevSource = sourceLang;
    const prevTarget = targetLang;

    setSourceLang(prevTarget);
    setTargetLang(prevSource);

    const tempInputText = inputText;
    setInputText(translatedText);
    setTranslatedText(tempInputText);
    setError(null);
  };

  const getActiveTargetLabel = () => {
    if (sourceLang === 'en') {
      return languagesMap[targetLang] || targetLang;
    }
    return 'English';
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 space-y-6">
      
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
        <div className="space-y-1">
          <h2 className="font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
            <Languages className="h-4.5 w-4.5 text-slate-500" />
            <span>Text Translation</span>
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Instantly translate text. Swap languages to translate back.
          </p>
        </div>

        {/* Demo Indicator */}
        {(import.meta.env.VITE_RAPIDAPI_KEY === 'your_rapidapi_key_here' || !import.meta.env.VITE_RAPIDAPI_KEY) && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-amber-200 dark:border-amber-900/60 bg-amber-50 dark:bg-amber-950/20 text-amber-700 dark:text-amber-400 text-xxs font-medium max-w-sm">
            <HelpCircle className="h-3.5 w-3.5 flex-shrink-0" />
            <span>
              <strong>Sandbox Mode:</strong> No RapidAPI key found in .env. Running mock translation simulations.
            </span>
          </div>
        )}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* Form Container */}
        <div className="card-premium p-6">
          <TranslatorForm
            inputText={inputText}
            setInputText={setInputText}
            sourceLang={sourceLang}
            targetLang={targetLang}
            onSwapLanguages={handleSwapLanguages}
            onLanguageChange={setTargetLang}
            onTranslate={handleTranslate}
            onClear={handleClear}
            loading={loading}
            languagesMap={languagesMap}
          />
        </div>

        {/* Card Side */}
        <div className="h-full">
          <TranslationCard
            translatedText={translatedText}
            loading={loading}
            error={error}
            targetLangName={getActiveTargetLabel()}
          />
        </div>
      </div>

    </div>
  );
}
