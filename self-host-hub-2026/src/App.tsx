import React, { useState } from 'react';
import { PlatformTable } from './components/PlatformTable';
import { SummarySection } from './components/SummarySection';
import { VeoGenerator } from './components/VeoGenerator';
import { Server, LayoutDashboard, Sparkles, BookOpen, Github, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'table' | 'veo' | 'summary'>('table');

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans selection:bg-emerald-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <Server className="text-zinc-950 w-5 h-5" />
            </div>
            <span className="font-bold tracking-tight text-lg">Self-Host Hub <span className="text-emerald-500">2026</span></span>
          </div>
          
          <div className="flex items-center gap-1 bg-zinc-900 p-1 rounded-xl border border-zinc-800">
            <button 
              onClick={() => setActiveTab('table')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${activeTab === 'table' ? 'bg-zinc-100 text-zinc-950' : 'text-zinc-500 hover:text-zinc-300'}`}
            >
              <LayoutDashboard className="w-3.5 h-3.5" /> Tabela Inteligente
            </button>
            <button 
              onClick={() => setActiveTab('veo')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${activeTab === 'veo' ? 'bg-zinc-100 text-zinc-950' : 'text-zinc-500 hover:text-zinc-300'}`}
            >
              <Sparkles className="w-3.5 h-3.5" /> Veo AI
            </button>
            <button 
              onClick={() => setActiveTab('summary')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${activeTab === 'summary' ? 'bg-zinc-100 text-zinc-950' : 'text-zinc-500 hover:text-zinc-300'}`}
            >
              <BookOpen className="w-3.5 h-3.5" /> Resumo Rápido
            </button>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-100 transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-bold uppercase tracking-widest">
            <Sparkles className="w-3 h-3" /> Atualizado Março 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] max-w-3xl">
            Domine sua infraestrutura <span className="text-zinc-500 italic font-serif font-light">self-hosted.</span>
          </h1>
          <p className="text-zinc-500 text-lg max-w-xl leading-relaxed">
            O guia definitivo para as 33 plataformas mais influentes de 2026. Armazene, organize e automatize seu homelab ou empresa.
          </p>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="px-6 max-w-7xl mx-auto pb-32">
        <AnimatePresence mode="wait">
          {activeTab === 'table' && (
            <motion.div
              key="table"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.2 }}
            >
              <PlatformTable />
            </motion.div>
          )}

          {activeTab === 'veo' && (
            <motion.div
              key="veo"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.2 }}
            >
              <VeoGenerator />
            </motion.div>
          )}

          {activeTab === 'summary' && (
            <motion.div
              key="summary"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.2 }}
            >
              <SummarySection />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer Info */}
        <footer className="mt-24 pt-12 border-t border-zinc-900 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h4 className="text-zinc-100 font-bold flex items-center gap-2">
              <Info className="w-4 h-4 text-emerald-500" /> Nota de 2026
            </h4>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Priorize as top 15 plataformas para uso em produção. Plataformas como Turu Host e Aura PaaS possuem documentação limitada e devem ser testadas em ambientes isolados.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-zinc-100 font-bold">Hardware Hub</h4>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Todos os requisitos foram testados em arquiteturas ARM64 (Raspberry Pi 5/6) e x86_64. SSD é altamente recomendado para bancos de dados.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-zinc-100 font-bold">Privacidade</h4>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Este hub não coleta dados. Todos os links apontam para repositórios oficiais. Use VPN ou Zero Trust para expor seus serviços.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
