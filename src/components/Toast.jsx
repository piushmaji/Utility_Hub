import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import { toast } from '../utils/toast';

export default function ToastContainer() {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const handleNewToast = (message, type) => {
      const id = Date.now() + Math.random().toString(36).substr(2, 9);
      setToasts((prevToasts) => [...prevToasts, { id, message, type }]);
      
      // Auto-remove after 3 seconds
      setTimeout(() => {
        removeToast(id);
      }, 3000);
    };

    const unsubscribe = toast.subscribe(handleNewToast);
    return () => unsubscribe();
  }, []);

  const removeToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((t) => t.id !== id));
  };

  const icons = {
    success: <CheckCircle2 className="h-5 w-5 text-emerald-500" />,
    error: <AlertCircle className="h-5 w-5 text-red-500" />,
    info: <Info className="h-5 w-5 text-blue-500" />
  };

  const toastStyles = {
    success: 'bg-white dark:bg-slate-900 border-emerald-500/20 shadow-emerald-500/5',
    error: 'bg-white dark:bg-slate-900 border-red-500/20 shadow-red-500/5',
    info: 'bg-white dark:bg-slate-900 border-blue-500/20 shadow-blue-500/5'
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none px-4 sm:px-0">
      <AnimatePresence>
        {toasts.map((item) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85, transition: { duration: 0.15 } }}
            className={`pointer-events-auto flex items-start gap-3 p-4 rounded-xl border glass shadow-lg ${
              toastStyles[item.type] || toastStyles.info
            }`}
          >
            <div className="flex-shrink-0 mt-0.5">
              {icons[item.type] || icons.info}
            </div>
            <div className="flex-1 text-sm font-medium text-slate-800 dark:text-slate-200 break-words">
              {item.message}
            </div>
            <button
              onClick={() => removeToast(item.id)}
              className="flex-shrink-0 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors p-0.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/80 cursor-pointer"
              aria-label="Close notification"
            >
              <X className="h-4 w-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
