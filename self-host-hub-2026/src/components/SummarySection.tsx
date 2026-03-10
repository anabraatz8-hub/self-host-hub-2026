import React from 'react';
import { SUMMARY_GROUPS } from '../data';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const SummarySection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {SUMMARY_GROUPS.map((group, idx) => (
        <div key={idx} className="bg-zinc-950 border border-zinc-800 p-5 rounded-2xl hover:border-zinc-700 transition-all group">
          <h3 className="text-zinc-100 font-bold text-sm mb-4 flex items-center justify-between">
            {group.category}
            <ArrowRight className="w-3 h-3 text-zinc-600 group-hover:text-emerald-500 transition-colors" />
          </h3>
          <div className="flex flex-wrap gap-2">
            {group.suggestions.map((suggestion, sIdx) => (
              <span 
                key={sIdx} 
                className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-[10px] font-medium text-zinc-400 hover:text-zinc-200 hover:border-zinc-600 transition-colors"
              >
                <CheckCircle2 className="w-2.5 h-2.5 text-emerald-500/70" />
                {suggestion}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
