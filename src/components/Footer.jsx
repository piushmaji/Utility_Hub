import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/20 text-slate-500 dark:text-slate-400">
      <div className="max-w-6xl mx-auto px-4 py-6 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          
          {/* Brand Info */}
          <div className="flex items-center gap-2">
            <div className="p-1 rounded bg-slate-800 dark:bg-slate-200 text-slate-100 dark:text-slate-900">
              <Terminal className="h-3.5 w-3.5" />
            </div>
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              Utility Hub
            </span>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <span>Developer utilities.</span>
          </div>

          {/* Nav Links */}
          <div className="flex gap-4 font-medium">
            <Link to="/" className="hover:text-slate-800 dark:hover:text-slate-200 transition-colors">
              Home
            </Link>
            <Link to="/translator" className="hover:text-slate-800 dark:hover:text-slate-200 transition-colors">
              Translator
            </Link>
            <Link to="/generator" className="hover:text-slate-800 dark:hover:text-slate-200 transition-colors">
              Generator
            </Link>
            <Link to="/about" className="hover:text-slate-800 dark:hover:text-slate-200 transition-colors">
              About
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
              aria-label="GitHub Repository"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <p className="flex items-center gap-1">
              &copy; {currentYear} Utility Hub
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
