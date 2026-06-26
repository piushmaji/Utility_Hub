import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Languages, Shuffle, ArrowRight, Cpu, Shield, Zap, ArrowUpRight, Command } from 'lucide-react';
import Button from '../components/Button';

export default function Home() {
  const navigate = useNavigate();

  const tools = [
    {
      name: 'Text Translator',
      desc: 'High-fidelity language processing. Translate English paragraphs into 10 global languages instantly, with custom language swapping and persistent target caching.',
      path: '/translator',
      icon: Languages,
      badge: 'RapidAPI Engine',
      color: 'text-blue-500 dark:text-blue-400',
      bgColor: 'bg-blue-50/50 dark:bg-blue-950/20 border-blue-100 dark:border-blue-950/50'
    },
    {
      name: 'Random String & Key Generator',
      desc: 'Cryptographic security parameters. Generate passwords, UUID v4s, API keys, cryptographic Hex, or Base64 tokens with live strength assessment.',
      path: '/generator',
      icon: Shuffle,
      badge: 'WebCrypto Engine',
      color: 'text-sky-500 dark:text-sky-400',
      bgColor: 'bg-sky-50/50 dark:bg-sky-950/20 border-sky-100 dark:border-sky-950/50'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-20 sm:px-6 lg:px-8 space-y-24 relative">
      
      {/* Subtle blurred background glow blobs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-gradient-to-tr from-blue-500/10 to-sky-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Hero Section */}
      <div className="text-center space-y-6 max-w-3xl mx-auto pt-4">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-100 dark:border-blue-950/80 bg-blue-50/30 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 text-3xs font-bold uppercase tracking-widest"
        >
          <Command className="h-3 w-3" />
          <span>Vite + React Utility Suite</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white tracking-tighter leading-[1.05]"
        >
          Tools designed for{' '}
          <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 dark:from-blue-400 dark:via-sky-300 dark:to-blue-450 bg-clip-text text-transparent">
            speed and simplicity.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg text-slate-550 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
        >
          A minimalist dashboard of client-side developer utilities engineered with clean structure, zero tracking, and fully sandboxed encryption.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 pt-2"
        >
          <Button
            onClick={() => navigate('/generator')}
            variant="primary"
            className="bg-blue-600 hover:bg-blue-500 text-white border-0 shadow-md shadow-blue-600/10"
            icon={<ArrowRight className="h-4 w-4" />}
          >
            Explore Generators
          </Button>
          <Button
            onClick={() => navigate('/about')}
            variant="outline"
            className="hover:bg-slate-100 dark:hover:bg-slate-900 border-slate-200 dark:border-slate-800"
          >
            Architecture
          </Button>
        </motion.div>
      </div>

      {/* Grid of tools */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-slate-200 dark:border-slate-800 pb-4">
          <h2 className="font-bold text-xs text-slate-800 dark:text-slate-200 uppercase tracking-widest font-sans flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            Core Utilities
          </h2>
          <p className="text-3xs text-slate-400 dark:text-slate-500">
            Open the workspace by selecting a module below.
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
                className="card-premium p-8 cursor-pointer flex flex-col justify-between hover:border-blue-200/50 dark:hover:border-sky-950/40 transition-all group relative overflow-hidden"
              >
                {/* Visual hover background gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/0 to-sky-500/0 group-hover:from-blue-500/[0.01] group-hover:to-sky-500/[0.02] transition-all duration-300 pointer-events-none" />

                <div className="space-y-6 relative z-10">
                  {/* Card Header Tag */}
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest bg-slate-50 dark:bg-slate-900/60 px-2.5 py-0.5 rounded border border-slate-200/50 dark:border-slate-800/40">
                      {tool.badge}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-slate-350 dark:text-slate-650 group-hover:text-blue-500 dark:group-hover:text-sky-400 transition-colors" />
                  </div>

                  {/* Title & Icon */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl border ${tool.bgColor}`}>
                        <Icon className={`h-5 w-5 ${tool.color}`} />
                      </div>
                      <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors">
                        {tool.name}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans font-medium">
                      {tool.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-850/80 flex items-center gap-1.5 text-xs font-bold text-slate-805 dark:text-slate-200 group-hover:text-blue-650 dark:group-hover:text-sky-400 transition-colors">
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
            <div className="p-1 rounded bg-blue-50 dark:bg-blue-950 border border-blue-150/60 dark:border-blue-900/45 text-blue-500 dark:text-blue-400">
              <Cpu className="h-3.5 w-3.5" />
            </div>
            <h4 className="font-bold text-sm text-slate-805 dark:text-slate-200">State Persistence</h4>
          </div>
          <p className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed font-medium">
            Language choices, translations, and theme modes sync automatically with browser local storage variables.
          </p>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="p-1 rounded bg-blue-50 dark:bg-blue-950 border border-blue-150/60 dark:border-blue-900/45 text-blue-500 dark:text-blue-400">
              <Shield className="h-3.5 w-3.5" />
            </div>
            <h4 className="font-bold text-sm text-slate-805 dark:text-slate-200">Zero Server Logging</h4>
          </div>
          <p className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed font-medium">
            Passwords, tokens, API keys, and sensitive queries are calculated strictly locally inside client sandbox scopes.
          </p>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="p-1 rounded bg-blue-50 dark:bg-blue-950 border border-blue-150/60 dark:border-blue-900/45 text-blue-500 dark:text-blue-400">
              <Zap className="h-3.5 w-3.5" />
            </div>
            <h4 className="font-bold text-sm text-slate-805 dark:text-slate-200">High Speed Rendering</h4>
          </div>
          <p className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed font-medium">
            Engineered on Vite 6 and Tailwind CSS v4 with optimized assets, assuring sub-100ms render speeds.
          </p>
        </div>
      </div>

    </div>
  );
}
