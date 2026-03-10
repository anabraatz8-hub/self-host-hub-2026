import React, { useState, useMemo, useEffect } from 'react';
import { Platform } from '../types';
import { PLATFORMS } from '../data';
import { Search, Github, Download, Terminal, Cpu, HardDrive, Layers, User, ChevronRight, ChevronDown, RefreshCw, CheckCircle2, BookOpen, List, Command } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PlatformDetail } from './PlatformDetail';

export const PlatformTable: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncProgress, setSyncProgress] = useState(0);
  const [lastSync, setLastSync] = useState<string | null>(null);

  const filteredPlatforms = useMemo(() => {
    return PLATFORMS.filter(p => 
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.focus.toLowerCase().includes(search.toLowerCase()) ||
      p.targetAudience.toLowerCase().includes(search.toLowerCase()) ||
      p.subcategories.some(s => s.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search]);

  const handleSync = () => {
    setIsSyncing(true);
    setSyncProgress(0);
    
    const interval = setInterval(() => {
      setSyncProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsSyncing(false);
          setLastSync(new Date().toLocaleTimeString());
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 400);
  };

  if (selectedPlatform) {
    return (
      <PlatformDetail 
        platform={selectedPlatform} 
        onBack={() => setSelectedPlatform(null)} 
      />
    );
  }

  return (
    <div className="w-full space-y-8">
      {/* Search and Sync Header */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-zinc-950 p-4 rounded-2xl border border-zinc-800 shadow-2xl">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 w-5 h-5" />
          <input
            type="text"
            placeholder="Buscar por nome, foco, público ou subcategoria..."
            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-3 pl-12 pr-4 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        
        <div className="flex items-center gap-4 w-full md:w-auto">
          {isSyncing ? (
            <div className="flex-1 md:w-48 h-10 bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden relative flex items-center px-4">
              <motion.div 
                className="absolute left-0 top-0 bottom-0 bg-emerald-500/20 border-r border-emerald-500/50"
                initial={{ width: 0 }}
                animate={{ width: `${syncProgress}%` }}
              />
              <span className="relative z-10 text-[10px] font-bold text-emerald-500 uppercase tracking-widest flex items-center gap-2">
                <RefreshCw className="w-3 h-3 animate-spin" /> Sincronizando Repos... {Math.round(syncProgress)}%
              </span>
            </div>
          ) : (
            <button 
              onClick={handleSync}
              className="flex-1 md:w-auto px-6 py-3 bg-emerald-500 text-zinc-950 rounded-xl text-xs font-bold hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 active:scale-95 shadow-lg shadow-emerald-500/10"
            >
              <RefreshCw className="w-4 h-4" /> Sincronizar Repositórios
            </button>
          )}
          
          {lastSync && !isSyncing && (
            <div className="hidden lg:flex items-center gap-2 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
              <CheckCircle2 className="w-3 h-3 text-emerald-500" /> Sincronizado às {lastSync}
            </div>
          )}
        </div>
      </div>

      {/* Main Table */}
      <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl">
        <div className="grid grid-cols-[60px_1.5fr_2fr_1fr_1fr_40px] gap-4 p-5 border-b border-zinc-800 bg-zinc-900/50 text-[11px] uppercase tracking-widest font-black text-zinc-500">
          <div className="text-center">Pos</div>
          <div>Plataforma</div>
          <div>Foco Estratégico</div>
          <div>Dificuldade</div>
          <div>Hardware</div>
          <div></div>
        </div>

        <div className="divide-y divide-zinc-800/50">
          {filteredPlatforms.map((platform) => (
            <div key={platform.id} className="group">
              <div 
                onClick={() => setSelectedPlatform(platform)}
                className="grid grid-cols-[60px_1.5fr_2fr_1fr_1fr_40px] gap-4 p-5 items-center hover:bg-zinc-900/50 cursor-pointer transition-all"
              >
                <div className="text-center font-mono text-zinc-500 text-xs font-bold">{platform.position}</div>
                <div className="font-bold text-zinc-100 flex items-center gap-2 text-sm">
                  {platform.name}
                </div>
                <div className="text-zinc-400 text-sm font-medium truncate">{platform.focus}</div>
                <div>
                  <span className={`px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-tighter ${
                    platform.difficulty === 'Muito fácil' ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' :
                    platform.difficulty === 'Fácil' ? 'bg-blue-500/10 text-blue-500 border border-blue-500/20' :
                    platform.difficulty === 'Médio' ? 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20' :
                    'bg-red-500/10 text-red-500 border border-red-500/20'
                  }`}>
                    {platform.difficulty}
                  </span>
                </div>
                <div className="text-zinc-500 text-[11px] font-mono font-medium truncate">{platform.hardwareMin.split('/')[0]}</div>
                <div className="flex justify-end">
                  <ChevronRight className="w-5 h-5 text-zinc-700 group-hover:text-zinc-400 transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
