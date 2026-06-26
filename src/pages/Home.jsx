import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Languages, Shuffle, ArrowRight, Cpu, Shield, Zap, ArrowUpRight } from 'lucide-react';
import Button from '../components/Button';

export default function Home() {
  const navigate = useNavigate();

  const tools = [
    {
      name: 'Text Translator',
      desc: 'High-fidelity language processing. Translate English paragraphs into 10 global languages, with custom swaps and a persistent target language cache.',
      path: '/translator',
      icon: Languages,
      badge: 'Axios & RapidAPI',
      color: 'text-blue-500'
    },
    {
      name: 'Random String Generator',
      desc: 'Cryptographic security parameters. Generate passwords, alphanumeric hashes, or tokens up to 50 characters with dynamic strength assessment.',
      path: '/generator',
      icon: Shuffle,
      badge: 'Client-Side Math',
      color: 'text-emerald-500'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8 space-y-24">
      
      {/* Apple-style Spacious Hero Section */}
      <div className="text-center space-y-6 max-w-3xl mx-auto pt-6 pb-2">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 text-slate-500 dark:text-slate-400 text-3xs font-semibold uppercase tracking-widest"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Vite + React Utility Suite</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white tracking-tighter leading-[1.05]"
        >
          Tools designed for{' '}
          <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 dark:from-white dark:via-slate-200 dark:to-slate-500 bg-clip-text text-transparent">
            speed and simplicity.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
        >
          A minimalist dashboard of client-side utilities engineered with clean code, responsive layouts, and zero tracking scripts.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 pt-3"
        >
          <Button
            onClick={() => navigate('/translator')}
            variant="primary"
            icon={<ArrowRight className="h-4 w-4" />}
          >
            Launch Translator
          </Button>
          <Button
            onClick={() => navigate('/about')}
            variant="outline"
          >
            Learn architecture
          </Button>
        </motion.div>
      </div>

      {/* Grid of tools (comparison card style) */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-slate-200 dark:border-slate-800 pb-4">
          <h2 className="font-bold text-base text-slate-900 dark:text-white uppercase tracking-wider font-sans">
            Core Modules
          </h2>
          <p className="text-xs text-slate-400 dark:text-slate-500">
            Click on any module to load the workspace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                key={tool.path}
                onClick={() => navigate(tool.path)}
                className="card-premium p-8 cursor-pointer flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700/80 transition-all group"
              >
                <div className="space-y-6">
                  {/* Card Header Tag */}
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest bg-slate-50 dark:bg-slate-950 px-2 py-0.5 rounded border border-slate-200/50 dark:border-slate-800/40">
                      {tool.badge}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-slate-300 dark:text-slate-700 group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors" />
                  </div>

                  {/* Title & Icon */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-850/60 ${tool.color}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                        {tool.name}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans font-medium">
                      {tool.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-850/80 flex items-center gap-1 text-xs font-semibold text-slate-900 dark:text-slate-150">
                  <span>Open workspace</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Specifications Showcase */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="p-1 rounded bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-950">
              <Cpu className="h-3.5 w-3.5" />
            </div>
            <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200">State Persistence</h4>
          </div>
          <p className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed font-medium">
            Language choices and theme modes sync automatically with the browser localStorage parameters.
          </p>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="p-1 rounded bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-950">
              <Shield className="h-3.5 w-3.5" />
            </div>
            <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200">Zero Server Logging</h4>
          </div>
          <p className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed font-medium">
            Password strings and sensitive inputs are calculated strictly locally within sandboxed closures.
          </p>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="p-1 rounded bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-950">
              <Zap className="h-3.5 w-3.5" />
            </div>
            <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200">High Speed Compilation</h4>
          </div>
          <p className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed font-medium">
            Engineered on Vite 6 + Tailwind v4 with optimized assets, assuring under 300ms rendering times.
          </p>
        </div>
      </div>

    </div>
  );
}
