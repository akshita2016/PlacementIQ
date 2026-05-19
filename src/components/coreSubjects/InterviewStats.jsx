import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const InterviewStats = ({ stats }) => {
  // Colors matching the subjects
  const colors = ['#3B82F6', '#A855F7', '#10B981', '#F97316', '#6366F1'];

  return (
    <section className="py-12 max-w-7xl mx-auto px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left: Chart */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-2">Most Asked Subjects</h2>
          <p className="text-slate-400 text-sm mb-8">Frequency in top tech company interviews (last 6 months).</p>
          
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={stats} layout="vertical" margin={{ top: 0, right: 30, left: 20, bottom: 0 }}>
                <XAxis type="number" hide />
                <YAxis dataKey="subject" type="category" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <Tooltip 
                  cursor={{ fill: 'transparent' }} 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '12px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={20}>
                  {stats.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right: Insights */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl flex flex-col justify-center">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-white mb-1">Company Trends</h3>
            <p className="text-slate-400 text-sm">What interviewers are focusing on right now.</p>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
              <div className="text-sm font-semibold text-blue-400 mb-1">High Priority</div>
              <div className="text-white">System Design rounds are increasing for entry-level roles.</div>
            </div>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
              <div className="text-sm font-semibold text-purple-400 mb-1">Consistent Focus</div>
              <div className="text-white">DBMS (SQL Queries + Normalization) is asked in 88% of interviews.</div>
            </div>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
              <div className="text-sm font-semibold text-emerald-400 mb-1">Must Know</div>
              <div className="text-white">OS concepts like multithreading are critical for backend roles.</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default InterviewStats;
