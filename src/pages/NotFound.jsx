import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HelpCircle, ArrowLeft } from 'lucide-react';
import Button from '../components/Button';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex items-center justify-center py-16 px-4">
      <div className="max-w-sm w-full text-center space-y-4 p-6 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 shadow-sm">
        
        {/* Simple Icon */}
        <div className="mx-auto h-12 w-12 rounded-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400">
          <HelpCircle className="h-5 w-5" />
        </div>

        <div className="space-y-1.5">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            404 - Not Found
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal max-w-[240px] mx-auto">
            The page you are looking for does not exist or has been relocated.
          </p>
        </div>

        <div className="pt-2">
          <Button
            onClick={() => navigate('/')}
            variant="outline"
            icon={<ArrowLeft className="h-3.5 w-3.5" />}
            className="w-full"
          >
            Back to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
}
