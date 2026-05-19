import React from 'react';
import { Loader2 } from 'lucide-react';

const Loader = ({ text = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-slate-400">
      <Loader2 className="w-12 h-12 animate-spin text-blue-500 mb-4" />
      <h2 className="text-xl font-semibold">{text}</h2>
    </div>
  );
};

export default Loader;
