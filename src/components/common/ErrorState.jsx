import React from 'react';
import { AlertCircle } from 'lucide-react';

const ErrorState = ({ message = "Something went wrong.", onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-8 text-center bg-slate-900 rounded-3xl border border-red-500/20 max-w-2xl mx-auto mt-10">
      <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mb-6">
        <AlertCircle className="w-10 h-10 text-red-500" />
      </div>
      <h2 className="text-2xl font-bold text-white mb-3">Oops! Error</h2>
      <p className="text-slate-400 mb-8 max-w-md">{message}</p>
      
      {onRetry && (
        <button 
          onClick={onRetry}
          className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-xl transition-colors border border-slate-700"
        >
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorState;
