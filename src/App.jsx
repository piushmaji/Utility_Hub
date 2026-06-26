import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ToastContainer from './components/Toast';
import Home from './pages/Home';
import Translator from './pages/Translator';
import Generator from './pages/Generator';
import About from './pages/About';
import NotFound from './pages/NotFound';

/**
 * ScrollToTop helper component that automatically resets scroll position
 * of the window on navigation/route change.
 */
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);
  
  return null;
}

export default function App() {
  // Theme state initialization from localStorage or defaults to dark
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = window.localStorage.getItem('theme');
      return savedTheme ? JSON.parse(savedTheme) : 'dark';
    } catch (e) {
      console.warn('Failed to load theme from localStorage:', e);
      return 'dark';
    }
  });

  // Apply theme to document element and save to localStorage
  useEffect(() => {
    try {
      window.localStorage.setItem('theme', JSON.stringify(theme));
    } catch (e) {
      console.warn('Failed to save theme to localStorage:', e);
    }

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router>
      <ScrollToTop />
      
      <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950/20 text-slate-900 dark:text-slate-100 bg-grid-dots relative overflow-hidden">
        {/* Decorative background glows */}
        <div className="glow-blob bg-sky-500 w-[350px] h-[350px] -top-36 -left-36" />
        <div className="glow-blob bg-blue-600 w-[450px] h-[450px] top-[40%] -right-36" />

        {/* Global Navigation Header */}
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        {/* Main Route Content */}
        <main className="flex-1 flex flex-col justify-start relative z-10 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/translator" element={<Translator />} />
            <Route path="/generator" element={<Generator />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Floating Toast Notification Stack */}
        <ToastContainer />
      </div>
    </Router>
  );
}
