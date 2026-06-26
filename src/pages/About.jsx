import React from 'react';
import { Terminal, Shield, Zap, Layers } from 'lucide-react';

export default function About() {
  const specs = [
    {
      title: 'State Syncing & Storage',
      desc: 'Initializes preferences via window.localStorage. Theme options and recent language settings are preserved across reloads.',
      icon: Layers
    },
    {
      title: 'Performance & Hook Optimizations',
      desc: 'Incorporates standard useCallback hooks to lock password generation formulas, preventing redundant rendering loops.',
      icon: Zap
    },
    {
      title: 'Clean Structural Footprint',
      desc: 'Builds responsive components without heavy third-party toaster frameworks or grid packages, keeping build files lightweight.',
      icon: Terminal
    },
    {
      title: 'Local Sandboxed Computations',
      desc: 'Calculates random string patterns entirely inside client scope. Key generations never touch server endpoints.',
      icon: Shield
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 space-y-10">
      
      {/* Page Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-4 text-left">
        <h2 className="font-bold text-lg text-slate-900 dark:text-white">
          About React Utility Hub
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          Technical specifications, dependency mappings, and architectural features.
        </p>
      </div>

      {/* Intro section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="space-y-3.5 text-slate-600 dark:text-slate-350 text-xs sm:text-sm leading-relaxed">
          <h3 className="font-bold text-slate-800 dark:text-slate-200 text-sm">
            Architecture Design
          </h3>
          <p>
            React Utility Hub is a developer-focused utility dashboard structured as a lightweight Single Page Application (SPA).
          </p>
          <p>
            It is configured to demonstrate modern React 19 design principles: components are structured around flat data boundaries, custom hooks manage browser state side-effects, and services isolate communication layers.
          </p>
        </div>

        {/* Flat Package Manifest Card */}
        <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/30 p-4 font-mono text-xxs sm:text-xs text-slate-700 dark:text-slate-300">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-2 mb-2 flex items-center justify-between text-slate-400">
            <span>dependencies</span>
            <span>package.json</span>
          </div>
          <div className="space-y-1 text-slate-600 dark:text-slate-400">
            <p><span className="text-slate-800 dark:text-slate-200">&quot;react&quot;</span>: &quot;^19.2.7&quot;</p>
            <p><span className="text-slate-800 dark:text-slate-200">&quot;react-router-dom&quot;</span>: &quot;^6.22.3&quot;</p>
            <p><span className="text-slate-800 dark:text-slate-200">&quot;tailwindcss&quot;</span>: &quot;^4.0.0&quot;</p>
            <p><span className="text-slate-800 dark:text-slate-200">&quot;framer-motion&quot;</span>: &quot;^11.0.0&quot;</p>
            <p><span className="text-slate-800 dark:text-slate-200">&quot;axios&quot;</span>: &quot;^1.6.8&quot;</p>
            <p><span className="text-slate-800 dark:text-slate-200">&quot;lucide-react&quot;</span>: &quot;^0.359.0&quot;</p>
          </div>
        </div>
      </div>

      {/* Specifications Checklist */}
      <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800/80">
        <h3 className="font-bold text-sm text-slate-800 dark:text-slate-200">
          Utility Dashboard Integration Details
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {specs.map((spec) => {
            const Icon = spec.icon;
            return (
              <div
                key={spec.title}
                className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/20 flex gap-3 items-start"
              >
                <div className="p-2 rounded bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-850 text-slate-500 dark:text-slate-400 flex-shrink-0">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold text-xs text-slate-900 dark:text-white">
                    {spec.title}
                  </h4>
                  <p className="text-3xs sm:text-xxs text-slate-500 dark:text-slate-400 leading-normal">
                    {spec.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
