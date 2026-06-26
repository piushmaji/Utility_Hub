import React, { useState, useEffect, useCallback } from 'react';
import { RefreshCw, Key } from 'lucide-react';
import CopyButton from './CopyButton';
import {
  generateUUID,
  generateHexKey,
  generateBase64Token,
  generateApiKey
} from '../../utils/generateRandomString';

export default function KeyGeneratorForm() {
  const [keyType, setKeyType] = useState('apikey');
  const [prefix, setPrefix] = useState('sk_live_');
  const [suffixLength, setSuffixLength] = useState(32);
  const [hexLength, setHexLength] = useState(64);
  const [byteLength, setByteLength] = useState(32);
  const [generatedKey, setGeneratedKey] = useState('');

  const handleGenerate = useCallback(() => {
    let key = '';
    switch (keyType) {
      case 'uuid':
        key = generateUUID();
        break;
      case 'apikey':
        key = generateApiKey(prefix, suffixLength);
        break;
      case 'hex':
        key = generateHexKey(hexLength);
        break;
      case 'base64':
        key = generateBase64Token(byteLength);
        break;
      default:
        key = '';
    }
    setGeneratedKey(key);
  }, [keyType, prefix, suffixLength, hexLength, byteLength]);

  useEffect(() => {
    handleGenerate();
  }, [handleGenerate]);

  const keyTypes = [
    { id: 'apikey', label: 'API Key', desc: 'Custom prefix token' },
    { id: 'uuid', label: 'UUID v4', desc: 'Universally unique identifier' },
    { id: 'hex', label: 'Hex Key', desc: 'Cryptographic Hex string' },
    { id: 'base64', label: 'Base64 Token', desc: 'Raw binary encoded' }
  ];

  return (
    <div className="space-y-6">
      {/* Selector Grid */}
      <div className="space-y-2">
        <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
          Key Format
        </label>
        <div className="grid grid-cols-2 gap-2.5">
          {keyTypes.map((t) => (
            <button
              key={t.id}
              onClick={() => setKeyType(t.id)}
              className={`p-3 text-left rounded-lg border transition-all cursor-pointer ${
                keyType === t.id
                  ? 'border-blue-500 bg-blue-50/20 dark:bg-blue-950/20 text-slate-900 dark:text-white ring-1 ring-blue-500/20'
                  : 'border-slate-100 dark:border-slate-850/80 bg-slate-50/50 dark:bg-slate-950/20 hover:bg-slate-100 dark:hover:bg-slate-850/40 text-slate-500 dark:text-slate-400'
              }`}
              type="button"
            >
              <div className="text-xs font-bold">{t.label}</div>
              <div className="text-4xs font-medium text-slate-400 dark:text-slate-500 mt-0.5">{t.desc}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Output display pane */}
      <div className="relative flex items-center justify-between p-3.5 rounded bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850">
        <input
          type="text"
          readOnly
          value={generatedKey || 'Generating...'}
          placeholder="Generated Key"
          className="w-full bg-transparent border-none text-slate-800 dark:text-slate-100 font-mono text-xs sm:text-sm focus:outline-none pr-28 select-all tracking-wide font-medium overflow-x-auto"
          aria-label="Generated Key"
        />
        
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
          <button
            onClick={handleGenerate}
            className="p-2 rounded text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100/50 dark:hover:bg-slate-805 transition-colors cursor-pointer"
            title="Regenerate"
            aria-label="Regenerate key"
            type="button"
          >
            <RefreshCw className="h-4 w-4" />
          </button>
          <CopyButton text={generatedKey} />
        </div>
      </div>

      {/* Dynamic Controls based on selection */}
      <div className="space-y-4 pt-2 border-t border-slate-100 dark:border-slate-850/60">
        
        {keyType === 'apikey' && (
          <>
            {/* Custom Prefix */}
            <div className="space-y-1.5 text-left">
              <label htmlFor="prefix-input" className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Custom Prefix
              </label>
              <input
                id="prefix-input"
                type="text"
                value={prefix}
                onChange={(e) => setPrefix(e.target.value)}
                placeholder="e.g. sk_live_"
                className="w-full px-3 py-2 text-xs sm:text-sm rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 focus:border-blue-500 font-mono"
              />
            </div>

            {/* Suffix Length */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs font-semibold">
                <label htmlFor="suffix-slider" className="text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Suffix Length
                </label>
                <span className="font-mono text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-850 px-2 py-0.5 rounded font-bold text-[10px]">
                  {suffixLength} chars
                </span>
              </div>
              <input
                id="suffix-slider"
                type="range"
                min="8"
                max="64"
                value={suffixLength}
                onChange={(e) => setSuffixLength(parseInt(e.target.value))}
                className="w-full h-1 bg-slate-200 dark:bg-slate-800 rounded appearance-none cursor-pointer accent-blue-600"
              />
            </div>
          </>
        )}

        {keyType === 'uuid' && (
          <div className="p-4 rounded-xl border border-blue-50/50 dark:border-blue-950/20 bg-blue-50/10 dark:bg-blue-950/10 text-left space-y-1.5">
            <span className="block text-xs font-bold text-slate-805 dark:text-slate-200">UUID v4 Specification</span>
            <p className="text-xxs text-slate-400 dark:text-slate-500 leading-normal">
              Generates a standard 128-bit RFC 4122 v4 Universally Unique Identifier. The identifier is generated locally using the browser's Web Cryptography engine.
            </p>
          </div>
        )}

        {keyType === 'hex' && (
          <div className="space-y-1.5">
            <div className="flex justify-between items-center text-xs font-semibold">
              <label htmlFor="hex-slider" className="text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Hex Character Length
              </label>
              <span className="font-mono text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-850 px-2 py-0.5 rounded font-bold text-[10px]">
                {hexLength} chars
              </span>
            </div>
            <input
              id="hex-slider"
              type="range"
              min="8"
              max="128"
              step="8"
              value={hexLength}
              onChange={(e) => setHexLength(parseInt(e.target.value))}
              className="w-full h-1 bg-slate-200 dark:bg-slate-800 rounded appearance-none cursor-pointer accent-blue-600"
            />
            <p className="text-[10px] text-slate-400 dark:text-slate-500 text-left">
              Creates a secure cryptographic string containing hexadecimal characters (0-9, a-f). {hexLength} characters represents a {(hexLength * 4)}-bit key.
            </p>
          </div>
        )}

        {keyType === 'base64' && (
          <div className="space-y-1.5">
            <div className="flex justify-between items-center text-xs font-semibold">
              <label htmlFor="byte-slider" className="text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Entropy Bytes
              </label>
              <span className="font-mono text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-850 px-2 py-0.5 rounded font-bold text-[10px]">
                {byteLength} bytes
              </span>
            </div>
            <input
              id="byte-slider"
              type="range"
              min="8"
              max="64"
              step="4"
              value={byteLength}
              onChange={(e) => setByteLength(parseInt(e.target.value))}
              className="w-full h-1 bg-slate-200 dark:bg-slate-800 rounded appearance-none cursor-pointer accent-blue-600"
            />
            <p className="text-[10px] text-slate-400 dark:text-slate-500 text-left">
              Fills a random byte buffer and converts it to a standard URL-safe Base64 token. {byteLength} bytes results in a strength of {byteLength * 8} bits of entropy.
            </p>
          </div>
        )}

      </div>

      {/* Action Button */}
      <button
        onClick={handleGenerate}
        type="button"
        className="w-full py-2.5 px-4 font-semibold text-xs text-white bg-blue-600 hover:bg-blue-500 rounded-md transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-md shadow-blue-600/10"
      >
        <Key className="h-4 w-4" />
        <span>Generate Secure Key</span>
      </button>
    </div>
  );
}
