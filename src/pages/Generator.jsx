import React, { useState, useEffect, useCallback } from 'react';
import { Shuffle, Key, Settings } from 'lucide-react';
import { generateRandomString } from '../utils/generateRandomString';
import GeneratorForm from '../components/Generator/GeneratorForm';
import KeyGeneratorForm from '../components/Generator/KeyGeneratorForm';

export default function Generator() {
  const [activeTab, setActiveTab] = useState('password');
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(16);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const handleGeneratePassword = useCallback(() => {
    const newStr = generateRandomString(length, {
      uppercase: includeUppercase,
      lowercase: includeLowercase,
      numbers: includeNumbers,
      symbols: includeSymbols
    });
    setPassword(newStr);
  }, [length, includeUppercase, includeLowercase, includeNumbers, includeSymbols]);

  useEffect(() => {
    if (activeTab === 'password') {
      handleGeneratePassword();
    }
  }, [handleGeneratePassword, activeTab]);

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 sm:px-6 space-y-6">
      
      {/* Page Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
        <div className="space-y-1">
          <h2 className="font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
            <Shuffle className="h-4.5 w-4.5 text-slate-500" />
            <span>Generator Suite</span>
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-sans">
            Generate cryptographically secure passwords or developer tokens entirely on the client.
          </p>
        </div>
      </div>

      {/* Selector Tabs */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 gap-1 overflow-x-auto pb-px">
        <button
          onClick={() => setActiveTab('password')}
          className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold whitespace-nowrap transition-all border-b-2 -mb-px cursor-pointer ${
            activeTab === 'password'
              ? 'border-blue-500 text-blue-600 dark:text-blue-400 font-bold'
              : 'border-transparent text-slate-400 hover:text-slate-700 dark:hover:text-slate-350'
          }`}
          type="button"
        >
          <Shuffle className="h-4 w-4" />
          Password Generator
        </button>
        <button
          onClick={() => setActiveTab('key')}
          className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold whitespace-nowrap transition-all border-b-2 -mb-px cursor-pointer ${
            activeTab === 'key'
              ? 'border-blue-500 text-blue-600 dark:text-blue-400 font-bold'
              : 'border-transparent text-slate-400 hover:text-slate-700 dark:hover:text-slate-350'
          }`}
          type="button"
        >
          <Key className="h-4 w-4" />
          Developer Key Generator
        </button>
      </div>

      {/* Main Settings Panel */}
      <div className="card-premium p-6 sm:p-8 space-y-6">
        
        {/* Settings Subtitle */}
        <div className="flex items-center gap-2 pb-3 border-b border-slate-100 dark:border-slate-800/80">
          <Settings className="h-4 w-4 text-slate-400" />
          <h3 className="font-semibold text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            {activeTab === 'password' ? 'Password Configuration' : 'Key Settings'}
          </h3>
        </div>

        {activeTab === 'password' ? (
          <GeneratorForm
            password={password}
            length={length}
            setLength={setLength}
            includeUppercase={includeUppercase}
            setIncludeUppercase={setIncludeUppercase}
            includeLowercase={includeLowercase}
            setIncludeLowercase={setIncludeLowercase}
            includeNumbers={includeNumbers}
            setIncludeNumbers={setIncludeNumbers}
            includeSymbols={includeSymbols}
            setIncludeSymbols={setIncludeSymbols}
            generatePassword={handleGeneratePassword}
          />
        ) : (
          <KeyGeneratorForm />
        )}
      </div>

    </div>
  );
}
