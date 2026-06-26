import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Terminal, Languages, Shuffle, Info, Home } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Translator', path: '/translator', icon: Languages },
    { name: 'Generator', path: '/generator', icon: Shuffle },
    { name: 'About', path: '/about', icon: Info },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800/80 bg-white/90 dark:bg-slate-950/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" onClick={closeMenu} className="flex items-center gap-2 group">
              <div className="p-1.5 rounded-md bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-950 transition-all duration-150">
                <Terminal className="h-4 w-4" />
              </div>
              <span className="font-bold text-sm md:text-base text-slate-900 dark:text-white tracking-tight">
                Utility Hub
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-150 ${
                      isActive
                        ? 'bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-white'
                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                    }`
                  }
                >
                  <Icon className="h-3.5 w-3.5" />
                  {item.name}
                </NavLink>
              );
            })}
          </div>

          {/* Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>

          {/* Mobile Buttons */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button
              onClick={toggleMenu}
              className="p-1.5 rounded-md text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
          <div className="px-3 pt-2 pb-3 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `flex items-center gap-2.5 px-3.5 py-2.5 rounded-md text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white'
                        : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-slate-800 dark:hover:text-slate-250'
                    }`
                  }
                >
                  <Icon className="h-4 w-4" />
                  {item.name}
                </NavLink>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
