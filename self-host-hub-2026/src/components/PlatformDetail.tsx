import React from 'react';
import { Platform } from '../types';
import { ArrowLeft, Github, Download, Cpu, HardDrive, Database, Terminal, Copy, Check, ExternalLink, Sparkles, Shield, Zap, Layout, Users, List, Command, BookOpen, Layers, ChevronDown, Youtube, MousePointer2, GitBranch, FileUp, Server } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PlatformDetailProps {
  platform: Platform;
  onBack: () => void;
}

export const PlatformDetail: React.FC<PlatformDetailProps> = ({ platform, onBack }) => {
  const [copiedIndex, setCopiedIndex] = React.useState<number | null>(null);
  const [expandedAdvantage, setExpandedAdvantage] = React.useState<number | null>(null);
  const [expandedDeployMethod, setExpandedDeployMethod] = React.useState<string | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const parseHardware = (hw: string) => {
    const parts = hw.split(' / ');
    return {
      ram: parts[0] || 'N/A',
      cpu: parts[1] || 'N/A',
      disk: parts[2] || 'N/A'
    };
  };

  const minHw = parseHardware(platform.hardwareMin);
  const recHw = parseHardware(platform.hardwareRec);

  const deployMethodsList = [
    { key: 'dragNDrop', label: 'Drag n Drop', icon: MousePointer2 },
    { key: 'autoDeploy', label: 'Deploy Automático (Git)', icon: GitBranch },
    { key: 'ftp', label: 'Deploy via FTP', icon: Server },
    { key: 'upload', label: 'Deploy via Upload', icon: FileUp },
    { key: 'cli', label: 'Deploy via CLI', icon: Terminal },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-7xl mx-auto space-y-12 pb-20"
    >
      {/* Header Navigation */}
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-zinc-500 hover:text-emerald-500 transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-bold">Voltar para lista</span>
      </button>

      {/* Hero Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-blue-500/10 text-blue-500 border border-blue-500/20 rounded text-[10px] font-black uppercase tracking-widest">
            #{platform.position}
          </span>
          <span className={`px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest ${
            platform.difficulty === 'Muito fácil' ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' :
            platform.difficulty === 'Fácil' ? 'bg-blue-500/10 text-blue-500 border border-blue-500/20' :
            platform.difficulty === 'Médio' ? 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20' :
            'bg-red-500/10 text-red-500 border border-red-500/20'
          }`}>
            {platform.difficulty}
          </span>
        </div>

        <div className="space-y-2">
          <h1 className="text-6xl font-black tracking-tighter text-zinc-100">{platform.name}</h1>
          <p className="text-xl text-zinc-400 font-medium max-w-2xl">{platform.focus}</p>
        </div>

        <div className="flex flex-wrap gap-4 pt-4">
          {platform.repoUrl && (
            <a 
              href={platform.repoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 text-white rounded-xl text-sm font-black uppercase tracking-widest hover:bg-blue-500 transition-all flex items-center gap-2 shadow-lg shadow-blue-600/20"
            >
              <Github className="w-4 h-4" /> Repositório
            </a>
          )}
          {platform.downloadUrl && (
            <a 
              href={platform.downloadUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-transparent border border-zinc-700 text-zinc-100 rounded-xl text-sm font-black uppercase tracking-widest hover:bg-zinc-800 transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4" /> Download / Docs
            </a>
          )}
          {platform.supportedStacks && platform.supportedStacks.length > 0 && (
            <button 
              onClick={() => document.getElementById('stacks-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-zinc-900 border border-zinc-800 text-zinc-100 rounded-xl text-sm font-black uppercase tracking-widest hover:bg-zinc-800 transition-all flex items-center gap-2"
            >
              <Layers className="w-4 h-4 text-blue-500" /> Ver Tecnologias
            </button>
          )}
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column */}
        <div className="lg:col-span-5 space-y-12">
          
          {/* Para Quem */}
          {platform.audiences && platform.audiences.length > 0 && (
            <section className="space-y-6">
              <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-zinc-500 flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-500" /> Para Quem
              </h3>
              <div className="space-y-4">
                {platform.audiences.map((audience, i) => (
                  <div key={i} className="p-6 bg-zinc-900/40 border border-zinc-800/50 rounded-2xl space-y-2 hover:border-blue-500/30 transition-colors">
                    <h4 className="text-blue-400 font-black text-sm uppercase tracking-tight">{audience.title}</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed font-medium">{audience.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Pilhas Suportadas */}
          {platform.supportedStacks && platform.supportedStacks.length > 0 && (
            <section id="stacks-section" className="space-y-6 scroll-mt-32">
              <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-zinc-500 flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-500" /> Tecnologias Suportadas
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {platform.supportedStacks.map((stack, i) => (
                  <div key={i} className="p-5 bg-blue-500/5 border border-blue-500/10 rounded-2xl flex items-start gap-4 hover:bg-blue-500/10 transition-colors">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center shrink-0">
                      <Check className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-zinc-100 font-black text-sm uppercase tracking-tight">{stack.name}</h4>
                      <p className="text-zinc-400 text-xs leading-relaxed font-medium">{stack.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Exemplos de Aplicação */}
          <section className="space-y-6">
            <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-zinc-500 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-500" /> Exemplos de Aplicação
            </h3>
            <div className="space-y-4">
              {platform.detailedExamples.map((example, i) => {
                const isObject = typeof example !== 'string';
                return (
                  <div key={i} className="p-6 bg-zinc-900/40 border border-zinc-800/50 rounded-2xl space-y-2 hover:border-blue-500/30 transition-colors">
                    <h4 className="text-zinc-100 font-black text-sm uppercase tracking-tight">
                      {isObject ? (example as any).title : `Exemplo ${i + 1}`}
                    </h4>
                    <p className="text-zinc-400 text-sm leading-relaxed font-medium">
                      {isObject ? (example as any).description : (example as string)}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Vantagens */}
          <section className="space-y-6">
            <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-zinc-500 flex items-center gap-2">
              <Zap className="w-4 h-4 text-blue-500" /> Vantagens (Clique para entender)
            </h3>
            <div className="flex flex-wrap gap-3">
              {(Array.isArray(platform.advantages) ? platform.advantages : platform.advantages.split(' • ')).map((adv, i) => {
                const isObject = typeof adv !== 'string';
                const tag = isObject ? (adv as any).tag : (adv as string);
                const explanation = isObject ? (adv as any).explanation : null;
                const youtubeUrl = isObject ? (adv as any).youtubeUrl : null;

                return (
                  <div key={i} className="w-full">
                    <button
                      onClick={() => explanation && setExpandedAdvantage(expandedAdvantage === i ? null : i)}
                      className={`px-4 py-2 border rounded-lg text-xs font-bold transition-all flex items-center justify-between w-full text-left group ${
                        explanation ? 'cursor-pointer' : 'cursor-default'
                      } ${
                        expandedAdvantage === i 
                          ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/20' 
                          : 'bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:border-blue-500/30 hover:text-blue-400'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <Zap className={`w-3 h-3 ${expandedAdvantage === i ? 'text-white' : 'text-blue-500'}`} />
                        {tag}
                      </span>
                      {explanation && (
                        <motion.div
                          animate={{ rotate: expandedAdvantage === i ? 180 : 0 }}
                          className="text-zinc-500 group-hover:text-blue-400 transition-colors"
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                      )}
                    </button>
                    
                    <AnimatePresence>
                      {expandedAdvantage === i && explanation && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-2 p-5 bg-zinc-900/60 border border-zinc-800/50 rounded-xl text-sm text-zinc-400 leading-relaxed space-y-4">
                            <p className="font-medium">{explanation}</p>
                            {youtubeUrl && (
                              <a 
                                href={youtubeUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-3 py-2 bg-red-500/10 text-red-400 border border-red-500/20 rounded-lg hover:bg-red-500/20 transition-all font-black uppercase tracking-widest text-[10px]"
                              >
                                <Youtube className="w-4 h-4" /> Ver Tutorial no YouTube
                              </a>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Métodos de Deploy */}
          {platform.deployMethods && (
            <section className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-zinc-500 flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-blue-500" /> Métodos de Deploy
                </h3>
              </div>
              
              {platform.deployDescription && (
                <div className="p-4 bg-blue-500/5 border border-blue-500/10 rounded-xl text-xs text-zinc-400 leading-relaxed italic">
                  {platform.deployDescription}
                </div>
              )}

              <div className="grid grid-cols-1 gap-3">
                {deployMethodsList.map((method) => {
                  const isSupported = (platform.deployMethods as any)[method.key];
                  const detail = platform.deployDetails?.[method.key as keyof typeof platform.deployMethods];
                  const isExpanded = expandedDeployMethod === method.key;

                  return (
                    <div key={method.key} className="space-y-2">
                      <button 
                        onClick={() => isSupported && detail && setExpandedDeployMethod(isExpanded ? null : method.key)}
                        className={`w-full p-4 rounded-xl border flex items-center justify-between transition-all text-left ${
                          isSupported 
                            ? 'bg-emerald-500/5 border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/10' 
                            : 'bg-zinc-900/20 border-zinc-800/30 text-zinc-600 grayscale opacity-50 cursor-not-allowed'
                        } ${isExpanded ? 'ring-2 ring-emerald-500/50' : ''}`}
                      >
                        <div className="flex items-center gap-3">
                          <method.icon className={`w-4 h-4 ${isSupported ? 'text-emerald-400' : 'text-zinc-600'}`} />
                          <span className="text-xs font-black uppercase tracking-widest">{method.label}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {isSupported ? (
                            <>
                              <div className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest bg-emerald-500/20 px-2 py-1 rounded">
                                <Check className="w-3 h-3" /> Suportado
                              </div>
                              {detail && (
                                <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                              )}
                            </>
                          ) : (
                            <span className="text-[10px] font-black uppercase tracking-widest opacity-50">Não disponível</span>
                          )}
                        </div>
                      </button>

                      <AnimatePresence>
                        {isExpanded && detail && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="p-5 bg-zinc-900/60 border border-zinc-800/50 rounded-xl space-y-4">
                              <p className="text-sm text-zinc-400 leading-relaxed font-medium">
                                {detail.description}
                              </p>
                              {detail.script && (
                                <div className="space-y-2">
                                  <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-zinc-500">
                                    <span>Script / Código</span>
                                  </div>
                                  <div className="flex items-center justify-between bg-black/50 p-3 rounded-lg border border-zinc-800 group/deploy">
                                    <code className="text-emerald-400 font-mono text-[11px] break-all">{detail.script}</code>
                                    <button 
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleCopy(detail.script!, 888);
                                      }}
                                      className="ml-4 p-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-zinc-100 rounded-lg transition-all shrink-0 flex items-center gap-2 text-[9px] font-black uppercase tracking-widest"
                                    >
                                      {copiedIndex === 888 ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                                      {copiedIndex === 888 ? 'Copiado' : 'Copiar'}
                                    </button>
                                  </div>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

        </div>

        {/* Right Column */}
        <div className="lg:col-span-7 space-y-12">
          
          {/* Guia de Instalação */}
          {platform.installationSteps && platform.installationSteps.length > 0 && (
            <section className="space-y-6">
              <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-zinc-500 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-500" /> Guia de Instalação Passo a Passo
              </h3>
              <div className="space-y-4">
                {platform.installationSteps.map((step, i) => (
                  <div key={i} className="relative pl-8 pb-8 last:pb-0">
                    {/* Linha conectora */}
                    {i !== platform.installationSteps!.length - 1 && (
                      <div className="absolute left-[11px] top-6 bottom-0 w-[2px] bg-zinc-800" />
                    )}
                    
                    {/* Círculo do passo */}
                    <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-zinc-900 border-2 border-blue-500 flex items-center justify-center z-10">
                      <span className="text-[10px] font-black text-blue-500">{i + 1}</span>
                    </div>

                    <div className="space-y-3">
                      <div className="space-y-1">
                        <h4 className="text-zinc-100 font-black text-sm uppercase tracking-tight">{step.title}</h4>
                        <p className="text-zinc-400 text-xs font-medium leading-relaxed">{step.description}</p>
                      </div>

                      {step.command && (
                        <div className="flex items-center justify-between bg-black/50 p-3 rounded-xl border border-zinc-800 group/step">
                          <code className="text-blue-400 font-mono text-[11px] break-all">{step.command}</code>
                          <button 
                            onClick={() => handleCopy(step.command!, i + 200)}
                            className="ml-4 p-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-zinc-100 rounded-lg transition-all shrink-0 flex items-center gap-2 text-[9px] font-black uppercase tracking-widest"
                          >
                            {copiedIndex === i + 200 ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                            {copiedIndex === i + 200 ? 'Copiado' : 'Copiar'}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Requisitos de Hardware */}
          <section className="space-y-6">
            <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-zinc-500 flex items-center gap-2">
              <Layout className="w-4 h-4 text-blue-500" /> Requisitos de Hardware
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Mínimo */}
              <div className="p-6 bg-zinc-900/40 border border-zinc-800/50 rounded-2xl space-y-6">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Mínimo</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-zinc-400">
                      <Database className="w-4 h-4" />
                      <span className="text-[10px] font-bold uppercase">RAM</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-zinc-100">{minHw.ram}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-zinc-400">
                      <Cpu className="w-4 h-4" />
                      <span className="text-[10px] font-bold uppercase">CPU</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-zinc-100">{minHw.cpu}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-zinc-400">
                      <HardDrive className="w-4 h-4" />
                      <span className="text-[10px] font-bold uppercase">Disco</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-zinc-100">{minHw.disk}</span>
                  </div>
                </div>
              </div>

              {/* Recomendado */}
              <div className="p-6 bg-zinc-900/40 border border-zinc-800/50 rounded-2xl space-y-6">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Recomendado</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-zinc-400">
                      <Database className="w-4 h-4" />
                      <span className="text-[10px] font-bold uppercase">RAM</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-zinc-100">{recHw.ram}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-zinc-400">
                      <Cpu className="w-4 h-4" />
                      <span className="text-[10px] font-bold uppercase">CPU</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-zinc-100">{recHw.cpu}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-zinc-400">
                      <HardDrive className="w-4 h-4" />
                      <span className="text-[10px] font-bold uppercase">Disco</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-zinc-100">{recHw.disk}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Sistemas Suportados */}
          {platform.supportedDistros && platform.supportedDistros.length > 0 && (
            <section className="space-y-6">
              <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-zinc-500 flex items-center gap-2">
                <Server className="w-4 h-4 text-blue-500" /> Sistemas Suportados & Comandos
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {platform.supportedDistros.map((distro, i) => (
                  <div key={i} className="p-6 bg-zinc-900/40 border border-zinc-800/50 rounded-2xl space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                        <Server className="w-4 h-4 text-blue-400" />
                      </div>
                      <h4 className="text-zinc-100 font-black text-sm uppercase tracking-tight">{distro.name}</h4>
                    </div>
                    <div className="flex items-center justify-between bg-black/50 p-4 rounded-xl border border-zinc-800 group/distro">
                      <code className="text-emerald-400 font-mono text-xs break-all">{distro.command}</code>
                      <button 
                        onClick={() => handleCopy(distro.command, i + 500)}
                        className="ml-4 p-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-zinc-100 rounded-lg transition-all shrink-0 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest"
                      >
                        {copiedIndex === i + 500 ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                        {copiedIndex === i + 500 ? 'Copiado' : 'Copiar'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Banco de Comandos */}
          {platform.commands && platform.commands.length > 0 && (
            <section className="space-y-6">
              <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-zinc-500 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-blue-500" /> Banco de Comandos
              </h3>
              <div className="space-y-4">
                {platform.commands.map((cmd, i) => (
                  <div key={i} className="p-6 bg-zinc-900/40 border border-zinc-800/50 rounded-2xl space-y-4">
                    <div className="space-y-1">
                      <h4 className="text-zinc-100 font-black text-sm uppercase tracking-tight">{cmd.title}</h4>
                      <p className="text-zinc-500 text-xs font-medium">{cmd.description}</p>
                    </div>
                    <div className="flex items-center justify-between bg-black/50 p-4 rounded-xl border border-zinc-800 group/cmd">
                      <code className="text-blue-400 font-mono text-xs break-all">{cmd.command}</code>
                      <button 
                        onClick={() => handleCopy(cmd.command, i)}
                        className="ml-4 p-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-zinc-100 rounded-lg transition-all shrink-0 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest"
                      >
                        {copiedIndex === i ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                        {copiedIndex === i ? 'Copiado' : 'Copiar'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Instalação Rápida */}
          {platform.installCommand && (
            <section className="space-y-6">
              <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-zinc-500 flex items-center gap-2">
                <Zap className="w-4 h-4 text-blue-500" /> Instalação Rápida
              </h3>
              <div className="p-8 bg-zinc-900/40 border border-zinc-800/50 rounded-2xl space-y-6">
                <div className="flex items-center justify-between bg-black/50 p-5 rounded-xl border border-zinc-800 group/cmd">
                  <code className="text-blue-400 font-mono text-sm break-all">{platform.installCommand}</code>
                  <button 
                    onClick={() => handleCopy(platform.installCommand || '', 999)}
                    className="ml-4 p-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-zinc-100 rounded-lg transition-all shrink-0 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest"
                  >
                    {copiedIndex === 999 ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                    {copiedIndex === 999 ? 'Copiado' : 'Copiar'}
                  </button>
                </div>
                <p className="text-zinc-500 text-sm font-medium">
                  Interface disponível em <a href="http://localhost:8000" className="text-blue-400 hover:underline">http://localhost:8000</a> após instalação.
                </p>
              </div>
            </section>
          )}

        </div>

      </div>
    </motion.div>
  );
};
