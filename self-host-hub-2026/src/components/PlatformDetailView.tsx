import React from 'react';
import { Platform } from '../types';
import { 
  ArrowLeft, 
  Terminal, 
  Cpu, 
  HardDrive, 
  Github, 
  Download, 
  Layers, 
  User, 
  CheckCircle2, 
  Command, 
  BookOpen, 
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { motion } from 'motion/react';

interface PlatformDetailViewProps {
  platform: Platform;
  onBack: () => void;
}

export const PlatformDetailView: React.FC<PlatformDetailViewProps> = ({ platform, onBack }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-[#050505] overflow-y-auto selection:bg-emerald-500/30"
    >
      {/* Split Layout Container */}
      <div className="min-h-screen flex flex-col lg:flex-row">
        
        {/* Left Pane: Hero & Branding (Recipe 11 Style) */}
        <div className="lg:w-1/2 relative flex flex-col justify-between p-8 lg:p-16 border-b lg:border-b-0 lg:border-r border-zinc-800 bg-[#080808]">
          {/* Back Button */}
          <button 
            onClick={onBack}
            className="group flex items-center gap-2 text-zinc-500 hover:text-zinc-100 transition-all text-xs font-black uppercase tracking-widest mb-12"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Voltar para o Hub
          </button>

          {/* Main Hero Content */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <span className="text-emerald-500 font-mono text-2xl font-black">#{platform.position.toString().padStart(2, '0')}</span>
              <div className="h-px flex-1 bg-zinc-800" />
            </div>
            
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.85] text-zinc-100 uppercase"
            >
              {platform.name}
            </motion.h1>

            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-zinc-500 font-light leading-tight max-w-md"
            >
              {platform.focus}
            </motion.p>

            <div className="flex flex-wrap gap-2 pt-4">
              {platform.subcategories.map((sub, i) => (
                <span key={i} className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-black uppercase tracking-widest rounded-full">
                  {sub}
                </span>
              ))}
            </div>
          </div>

          {/* Vertical Rail Text (Recipe 11) */}
          <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2">
            <span className="writing-mode-vertical-rl rotate-180 text-[10px] font-black uppercase tracking-[0.5em] text-zinc-800 select-none">
              SELF-HOST HUB 2026 // INFRASTRUCTURE // {platform.name}
            </span>
          </div>

          {/* Footer of Left Pane */}
          <div className="mt-16 pt-8 border-t border-zinc-900 flex items-center justify-between">
            <div className="flex items-center gap-2 text-zinc-600 text-[10px] font-bold uppercase tracking-widest">
              <Sparkles className="w-3 h-3" /> Status: Produção
            </div>
            <div className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest">
              Dificuldade: <span className="text-zinc-400">{platform.difficulty}</span>
            </div>
          </div>
        </div>

        {/* Right Pane: Technical Details & Actions */}
        <div className="lg:w-1/2 p-8 lg:p-16 bg-[#050505] space-y-16">
          
          {/* Section: Overview */}
          <section className="space-y-6">
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500 flex items-center gap-3">
              <Layers className="w-4 h-4" /> Visão Geral Estratégica
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed font-medium">
              {platform.advantages}
            </p>
          </section>

          {/* Section: Hardware Specs */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 space-y-4">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                <Cpu className="w-4 h-4" /> Requisitos Mínimos
              </h3>
              <p className="text-zinc-100 font-mono text-sm font-bold">{platform.hardwareMin}</p>
            </div>
            <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 space-y-4">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                <HardDrive className="w-4 h-4" /> Configuração Recomendada
              </h3>
              <p className="text-zinc-100 font-mono text-sm font-bold">{platform.hardwareRec}</p>
            </div>
          </section>

          {/* Section: Installation Guide */}
          {platform.installGuide && (
            <section className="space-y-6">
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500 flex items-center gap-3">
                <BookOpen className="w-4 h-4" /> Guia de Implementação
              </h2>
              <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl">
                <p className="text-zinc-300 text-sm leading-loose font-medium whitespace-pre-line">
                  {platform.installGuide}
                </p>
              </div>
            </section>
          )}

          {/* Section: Commands */}
          {platform.installCommand && (
            <section className="space-y-6">
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500 flex items-center gap-3">
                <Command className="w-4 h-4" /> Banco de Comandos
              </h2>
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative bg-black border border-zinc-800 p-6 rounded-2xl flex items-center justify-between font-mono text-xs">
                  <code className="text-emerald-400 break-all">{platform.installCommand}</code>
                  <button 
                    onClick={() => navigator.clipboard.writeText(platform.installCommand!)}
                    className="p-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100 rounded-xl transition-all shrink-0 ml-4"
                  >
                    <Terminal className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </section>
          )}

          {/* Section: Applications */}
          <section className="space-y-6">
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500 flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4" /> Aplicações Reais
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {platform.detailedExamples.map((example, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-zinc-900/20 border border-zinc-800/50 rounded-xl text-zinc-400 text-xs font-bold">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {example}
                </div>
              ))}
            </div>
          </section>

          {/* Actions */}
          <section className="flex flex-wrap gap-4 pt-8">
            {platform.repoUrl && (
              <a 
                href={platform.repoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 min-w-[200px] flex items-center justify-center gap-3 px-8 py-4 bg-zinc-100 text-zinc-950 rounded-2xl text-xs font-black uppercase tracking-[0.2em] hover:bg-white transition-all active:scale-95 shadow-2xl shadow-white/5"
              >
                <Github className="w-5 h-5" /> Ver Repositório
              </a>
            )}
            {platform.downloadUrl && (
              <a 
                href={platform.downloadUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 min-w-[200px] flex items-center justify-center gap-3 px-8 py-4 bg-zinc-900 text-zinc-100 border border-zinc-800 rounded-2xl text-xs font-black uppercase tracking-[0.2em] hover:bg-zinc-800 transition-all active:scale-95 shadow-2xl"
              >
                <Download className="w-5 h-5" /> Download Direto
              </a>
            )}
          </section>

        </div>
      </div>
    </motion.div>
  );
};
