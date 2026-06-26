import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Shield, Zap, Layers, Cpu, Code, CheckCircle } from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState('architecture');

  const tabs = [
    { id: 'architecture', label: 'Architecture Blueprint', icon: Layers },
    { id: 'techstack', label: 'Tech Stack', icon: Zap },
    { id: 'security', label: 'Security & Trust', icon: Shield }
  ];

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
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 space-y-12 relative">
      {/* Page Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-4 text-left">
        <h2 className="font-bold text-2xl text-slate-900 dark:text-white tracking-tight">
          About React Utility Suite
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          Technical specifications, cryptographic sandboxing, and codebase architecture.
        </p>
      </div>

      {/* Interactive Tab Selector */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 gap-2 overflow-x-auto pb-px">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold whitespace-nowrap transition-all border-b-2 -mb-px cursor-pointer ${
                isActive
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400 font-bold'
                  : 'border-transparent text-slate-400 hover:text-slate-700 dark:hover:text-slate-350'
              }`}
            >
              <Icon className="h-4 w-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab Contents */}
      <div className="min-h-[200px]">
        <AnimatePresence mode="wait">
          {activeTab === 'architecture' && (
            <motion.div
              key="architecture"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start text-left"
            >
              <div className="space-y-4 text-slate-650 dark:text-slate-350 text-xs sm:text-sm leading-relaxed">
                <h3 className="font-bold text-slate-800 dark:text-slate-100 text-base flex items-center gap-2">
                  <Cpu className="h-4 w-4 text-blue-500" />
                  Engineered for Zero Latency
                </h3>
                <p>
                  Utility Hub is built as an optimized React Single Page Application. It loads all operational code directly to the client's browser engine on the initial page load.
                </p>
                <p>
                  By utilizing React 19's flat data structure boundaries and decoupled utilities, operations (like translating a sentence or generating a secure key) bypass the network layer. This guarantees near-instant responses.
                </p>
                <div className="pt-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400">
                    <CheckCircle className="h-3.5 w-3.5" />
                    Offline-Ready & Persistent Client State
                  </span>
                </div>
              </div>

              {/* Graphical visual dataflow */}
              <div className="rounded-2xl border border-slate-200 dark:border-slate-850 bg-white dark:bg-slate-950/40 p-6 space-y-4">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Client Data Flow</h4>
                
                <div className="space-y-3 font-mono text-3xs sm:text-2xs text-slate-600 dark:text-slate-400">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-850">
                    <span className="text-blue-500 dark:text-blue-450 font-bold">1. User Action</span>
                    <span>Toggles Theme / Inputs Key Specs</span>
                  </div>
                  <div className="text-center text-slate-300 dark:text-slate-700">▼</div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-850">
                    <span className="text-blue-500 dark:text-blue-450 font-bold">2. Custom Hook</span>
                    <span>Processes Cryptography / State Management</span>
                  </div>
                  <div className="text-center text-slate-300 dark:text-slate-700">▼</div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-850">
                    <span className="text-emerald-505 font-bold text-emerald-600 dark:text-emerald-450">3. Cache & UI</span>
                    <span>Instantly Commits To Local Storage & DOM</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'techstack' && (
            <motion.div
              key="techstack"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start text-left"
            >
              <div className="space-y-4 text-slate-650 dark:text-slate-350 text-xs sm:text-sm leading-relaxed">
                <h3 className="font-bold text-slate-800 dark:text-slate-100 text-base flex items-center gap-2">
                  <Code className="h-4 w-4 text-blue-500" />
                  Modern Dev Stack
                </h3>
                <p>
                  The utility engine is structured to avoid heavy dependencies and external CSS injection. It runs directly on top of Vite's fast bundler.
                </p>
                <p>
                  We leverage Tailwind CSS v4's direct compilation model, allowing styling tokens without loading large static CSS files to the user's browser, reducing the download overhead.
                </p>
              </div>

              {/* Tech Stack Manifest Card */}
              <div className="rounded-xl border border-slate-200 dark:border-slate-850 bg-slate-50 dark:bg-slate-950 p-4 font-mono text-2xs sm:text-xs text-slate-700 dark:text-slate-300 shadow-inner">
                <div className="border-b border-slate-100 dark:border-slate-800 pb-2 mb-2 flex items-center justify-between text-slate-400">
                  <span>dependencies</span>
                  <span>package.json</span>
                </div>
                <div className="space-y-1 text-slate-650 dark:text-slate-400">
                  <p><span className="text-blue-550 dark:text-blue-400">&quot;react&quot;</span>: &quot;^19.2.7&quot;</p>
                  <p><span className="text-blue-550 dark:text-blue-400">&quot;react-router-dom&quot;</span>: &quot;^6.22.3&quot;</p>
                  <p><span className="text-sky-550 dark:text-sky-400">&quot;tailwindcss&quot;</span>: &quot;^4.0.0&quot;</p>
                  <p><span className="text-sky-550 dark:text-sky-400">&quot;framer-motion&quot;</span>: &quot;^11.0.0&quot;</p>
                  <p><span className="text-slate-700 dark:text-slate-300">&quot;axios&quot;</span>: &quot;^1.6.8&quot;</p>
                  <p><span className="text-slate-700 dark:text-slate-300">&quot;lucide-react&quot;</span>: &quot;^0.359.0&quot;</p>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'security' && (
            <motion.div
              key="security"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start text-left"
            >
              <div className="space-y-4 text-slate-655 dark:text-slate-350 text-xs sm:text-sm leading-relaxed">
                <h3 className="font-bold text-slate-800 dark:text-slate-100 text-base flex items-center gap-2">
                  <Shield className="h-4 w-4 text-sky-500" />
                  Local Cryptographic Isolation
                </h3>
                <p>
                  Privacy is a core design standard. When creating secure keys, hashes, or passwords, all calculations are executed using client-side JavaScript Math closures and WebCrypto buffer inputs.
                </p>
                <p>
                  No input parameters or generated results are ever sent to an external server, tracked in databases, or logged in system files. Once your browser tab is closed, the data is completely wiped from active memory.
                </p>
              </div>

              {/* Security Badges Grid */}
              <div className="grid grid-cols-2 gap-3.5">
                <div className="p-4 rounded-xl border border-sky-100/50 dark:border-sky-950/20 bg-sky-50/20 dark:bg-sky-950/10 text-center">
                  <Shield className="h-6 w-6 text-sky-500 mx-auto mb-2" />
                  <span className="block text-xs font-bold text-slate-800 dark:text-slate-200">100% Local</span>
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">Zero network requests</span>
                </div>
                <div className="p-4 rounded-xl border border-blue-100/50 dark:border-blue-950/20 bg-blue-50/20 dark:bg-blue-950/10 text-center">
                  <Terminal className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                  <span className="block text-xs font-bold text-slate-800 dark:text-slate-200">No Databases</span>
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">No telemetry or logs</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Specifications Details Grid */}
      <div className="space-y-6 pt-8 border-t border-slate-200 dark:border-slate-800/80">
        <h3 className="font-bold text-sm text-slate-805 dark:text-slate-200 uppercase tracking-widest text-left">
          Technical Specifications
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {specs.map((spec) => {
            const Icon = spec.icon;
            return (
              <div
                key={spec.title}
                className="p-5 rounded-2xl border border-slate-200 dark:border-slate-850/80 bg-white dark:bg-slate-900/10 flex gap-4 items-start"
              >
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-850 text-slate-500 dark:text-slate-400 flex-shrink-0">
                  <Icon className="h-4.5 w-4.5" />
                </div>
                <div className="space-y-1 text-left">
                  <h4 className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white">
                    {spec.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
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
