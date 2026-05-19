import React from 'react';
import { Download, Loader2 } from 'lucide-react';
import GradientButton from '../ui/GradientButton';

const ExportControls = ({ onExport, exporting }) => {
  return (
    <div className="flex items-center gap-4">
      <GradientButton 
        onClick={onExport}
        className={`!bg-emerald-600 hover:!bg-emerald-500 ${exporting ? 'opacity-80 cursor-not-allowed' : ''}`}
        icon={exporting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Download className="w-5 h-5" />}
      >
        {exporting ? 'Exporting...' : 'Export as PDF'}
      </GradientButton>
    </div>
  );
};

export default ExportControls;
