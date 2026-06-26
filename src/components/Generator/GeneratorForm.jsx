import React from 'react';
import { RefreshCw } from 'lucide-react';
import StrengthMeter from './StrengthMeter';
import CopyButton from './CopyButton';
import { calculateStrength } from '../../utils/generateRandomString';

export default function GeneratorForm({
  password,
  length,
  setLength,
  includeUppercase,
  setIncludeUppercase,
  includeLowercase,
  setIncludeLowercase,
  includeNumbers,
  setIncludeNumbers,
  includeSymbols,
  setIncludeSymbols,
  generatePassword
}) {
  
  const strength = calculateStrength(length, {
    uppercase: includeUppercase,
    lowercase: includeLowercase,
    numbers: includeNumbers,
    symbols: includeSymbols
  });

  const handleCheckboxChange = (setter, currentValue) => {
    const activeCount = [
      includeUppercase,
      includeLowercase,
      includeNumbers,
      includeSymbols
    ].filter(Boolean).length;

    if (activeCount === 1 && currentValue === true) {
      return;
    }
    setter(!currentValue);
  };

  return (
    <div className="space-y-5">
      {/* Output display pane */}
      <div className="relative flex items-center justify-between p-3.5 rounded bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850">
        <input
          type="text"
          readOnly
          value={password || 'Select parameters...'}
          placeholder="Generated String"
          className="w-full bg-transparent border-none text-slate-800 dark:text-slate-100 font-mono text-sm md:text-base focus:outline-none pr-28 select-all tracking-wide font-medium"
          aria-label="Generated String"
        />
        
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
          <button
            onClick={generatePassword}
            className="p-2 rounded text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100/50 dark:hover:bg-slate-800/60 transition-colors cursor-pointer"
            title="Regenerate"
            aria-label="Regenerate string"
            type="button"
          >
            <RefreshCw className="h-4 w-4" />
          </button>
          <CopyButton text={password} />
        </div>
      </div>

      {/* Inputs controls */}
      <div className="space-y-4 pt-2">
        {/* Length Control */}
        <div className="space-y-1.5">
          <div className="flex justify-between items-center text-xs font-semibold">
            <label htmlFor="length-slider" className="text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              String Length
            </label>
            <span className="font-mono text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-850 px-2 py-0.5 rounded font-bold text-[10px]">
              {length} chars
            </span>
          </div>
          <input
            id="length-slider"
            type="range"
            min="4"
            max="50"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
            className="w-full h-1 bg-slate-200 dark:bg-slate-800 rounded appearance-none cursor-pointer accent-slate-800 dark:accent-slate-200"
          />
        </div>

        {/* Checkbox Grid */}
        <div className="space-y-2">
          <span className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Character Rules
          </span>
          <div className="grid grid-cols-2 gap-2.5">
            {/* Uppercase */}
            <label className="flex items-center gap-2 px-3 py-2 rounded border border-slate-100 dark:border-slate-850 bg-slate-50/50 dark:bg-slate-950/20 hover:bg-slate-100 dark:hover:bg-slate-800/30 cursor-pointer transition-colors">
              <input
                type="checkbox"
                checked={includeUppercase}
                onChange={() => handleCheckboxChange(setIncludeUppercase, includeUppercase)}
                className="h-3.5 w-3.5 rounded border-slate-300 dark:border-slate-800 text-slate-900 focus:ring-slate-500 cursor-pointer"
              />
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">Uppercase</span>
                <span className="text-4xs text-slate-400 dark:text-slate-500 font-mono">A-Z</span>
              </div>
            </label>

            {/* Lowercase */}
            <label className="flex items-center gap-2 px-3 py-2 rounded border border-slate-100 dark:border-slate-850 bg-slate-50/50 dark:bg-slate-950/20 hover:bg-slate-100 dark:hover:bg-slate-800/30 cursor-pointer transition-colors">
              <input
                type="checkbox"
                checked={includeLowercase}
                onChange={() => handleCheckboxChange(setIncludeLowercase, includeLowercase)}
                className="h-3.5 w-3.5 rounded border-slate-300 dark:border-slate-800 text-slate-900 focus:ring-slate-500 cursor-pointer"
              />
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">Lowercase</span>
                <span className="text-4xs text-slate-400 dark:text-slate-500 font-mono">a-z</span>
              </div>
            </label>

            {/* Numbers */}
            <label className="flex items-center gap-2 px-3 py-2 rounded border border-slate-100 dark:border-slate-850 bg-slate-50/50 dark:bg-slate-950/20 hover:bg-slate-100 dark:hover:bg-slate-800/30 cursor-pointer transition-colors">
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={() => handleCheckboxChange(setIncludeNumbers, includeNumbers)}
                className="h-3.5 w-3.5 rounded border-slate-300 dark:border-slate-800 text-slate-900 focus:ring-slate-500 cursor-pointer"
              />
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">Numbers</span>
                <span className="text-4xs text-slate-400 dark:text-slate-500 font-mono">0-9</span>
              </div>
            </label>

            {/* Symbols */}
            <label className="flex items-center gap-2 px-3 py-2 rounded border border-slate-100 dark:border-slate-850 bg-slate-50/50 dark:bg-slate-950/20 hover:bg-slate-100 dark:hover:bg-slate-800/30 cursor-pointer transition-colors">
              <input
                type="checkbox"
                checked={includeSymbols}
                onChange={() => handleCheckboxChange(setIncludeSymbols, includeSymbols)}
                className="h-3.5 w-3.5 rounded border-slate-300 dark:border-slate-800 text-slate-900 focus:ring-slate-500 cursor-pointer"
              />
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">Symbols</span>
                <span className="text-4xs text-slate-400 dark:text-slate-500 font-mono">!@#$</span>
              </div>
            </label>
          </div>
        </div>
      </div>

      {/* Strength indicator */}
      <StrengthMeter strength={strength} />

      {/* CTA Button */}
      <button
        onClick={generatePassword}
        type="button"
        className="w-full py-2.5 px-4 font-semibold text-xs text-white dark:text-slate-900 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 dark:hover:bg-white rounded-md transition-colors cursor-pointer flex items-center justify-center gap-1.5"
      >
        <RefreshCw className="h-4 w-4" />
        <span>Generate New String</span>
      </button>
    </div>
  );
}
