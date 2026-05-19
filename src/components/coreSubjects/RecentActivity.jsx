import React from 'react';
import { CheckCircle } from 'lucide-react';

const RecentActivity = ({ activity }) => {
  if (!activity || activity.length === 0) return null;

  return (
    <section className="py-12 max-w-7xl mx-auto px-6 lg:px-8">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
        <h2 className="text-xl font-bold text-white mb-6">Recent Activity</h2>
        
        <div className="space-y-4">
          {activity.map((item) => (
            <div key={item.id} className="flex items-start gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
              <div className="mt-1 flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="flex-grow">
                <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                <p className="text-xs text-slate-400">{item.subject}</p>
              </div>
              <div className="text-xs font-medium text-slate-500 whitespace-nowrap">
                {item.time}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentActivity;
