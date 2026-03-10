import React, { useState, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Upload, Play, Loader2, Video, AlertCircle, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export const VeoGenerator: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [aspectRatio, setAspectRatio] = useState<'16:9' | '9:16'>('16:9');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const generateVideo = async () => {
    if (!image) return;

    setIsGenerating(true);
    setError(null);
    setVideoUrl(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      const base64Data = image.split(',')[1];
      const mimeType = image.split(';')[0].split(':')[1];

      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: 'Animate this scene with cinematic movement and realistic lighting',
        image: {
          imageBytes: base64Data,
          mimeType: mimeType,
        },
        config: {
          numberOfVideos: 1,
          resolution: '720p',
          aspectRatio: aspectRatio
        }
      });

      // Poll for completion
      while (!operation.done) {
        await new Promise(resolve => setTimeout(resolve, 10000));
        operation = await ai.operations.getVideosOperation({ operation: operation });
      }

      const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
      if (downloadLink) {
        const response = await fetch(downloadLink, {
          method: 'GET',
          headers: {
            'x-goog-api-key': process.env.GEMINI_API_KEY!,
          },
        });
        const blob = await response.blob();
        setVideoUrl(URL.createObjectURL(blob));
      } else {
        throw new Error('Video generation failed to return a link.');
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Ocorreu um erro ao gerar o vídeo.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <Video className="text-emerald-500" /> Animar com Veo
          </h2>
          <p className="text-zinc-500 text-sm mt-1">Transforme uma imagem estática em um vídeo cinematográfico de 2026.</p>
        </div>
        <div className="flex bg-zinc-900 p-1 rounded-lg border border-zinc-800">
          <button 
            onClick={() => setAspectRatio('16:9')}
            className={`px-3 py-1 text-[10px] font-bold rounded-md transition-colors ${aspectRatio === '16:9' ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-500 hover:text-zinc-300'}`}
          >
            16:9
          </button>
          <button 
            onClick={() => setAspectRatio('9:16')}
            className={`px-3 py-1 text-[10px] font-bold rounded-md transition-colors ${aspectRatio === '9:16' ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-500 hover:text-zinc-300'}`}
          >
            9:16
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div 
            onClick={() => fileInputRef.current?.click()}
            className={`aspect-video rounded-xl border-2 border-dashed flex flex-col items-center justify-center cursor-pointer transition-all overflow-hidden relative group ${
              image ? 'border-emerald-500/50' : 'border-zinc-800 hover:border-zinc-700 bg-zinc-900/50'
            }`}
          >
            {image ? (
              <>
                <img src={image} alt="Preview" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <Upload className="text-white w-8 h-8" />
                </div>
              </>
            ) : (
              <>
                <Upload className="text-zinc-600 w-10 h-10 mb-2" />
                <p className="text-zinc-500 text-sm font-medium">Clique para enviar imagem</p>
                <p className="text-zinc-600 text-[10px] uppercase tracking-widest mt-1">PNG, JPG até 5MB</p>
              </>
            )}
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              className="hidden" 
              accept="image/*" 
            />
          </div>

          <button
            disabled={!image || isGenerating}
            onClick={generateVideo}
            className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all ${
              !image || isGenerating 
                ? 'bg-zinc-800 text-zinc-600 cursor-not-allowed' 
                : 'bg-emerald-500 text-zinc-950 hover:bg-emerald-400 active:scale-[0.98]'
            }`}
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Gerando Vídeo...
              </>
            ) : (
              <>
                <Play className="w-5 h-5 fill-current" />
                Gerar Animação
              </>
            )}
          </button>
        </div>

        <div className="aspect-video rounded-xl bg-zinc-900 border border-zinc-800 flex flex-col items-center justify-center relative overflow-hidden">
          {videoUrl ? (
            <video 
              src={videoUrl} 
              controls 
              autoPlay 
              loop 
              className="w-full h-full object-contain"
            />
          ) : isGenerating ? (
            <div className="text-center p-6 space-y-4">
              <Loader2 className="w-12 h-12 text-emerald-500 animate-spin mx-auto" />
              <div className="space-y-2">
                <p className="text-zinc-100 font-medium">O Veo está trabalhando...</p>
                <p className="text-zinc-500 text-xs max-w-[200px] mx-auto">Isso pode levar alguns minutos. Estamos processando cada frame com precisão.</p>
              </div>
            </div>
          ) : (
            <div className="text-center p-6 text-zinc-600">
              <Video className="w-12 h-12 mx-auto mb-4 opacity-20" />
              <p className="text-sm">O vídeo gerado aparecerá aqui</p>
            </div>
          )}

          {error && (
            <div className="absolute bottom-4 left-4 right-4 bg-red-500/10 border border-red-500/20 p-3 rounded-lg flex items-center gap-3">
              <AlertCircle className="text-red-500 w-4 h-4 shrink-0" />
              <p className="text-red-500 text-[11px] leading-tight">{error}</p>
            </div>
          )}
        </div>
      </div>

      <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-xl flex items-start gap-4">
        <div className="p-2 bg-emerald-500/10 rounded-lg">
          <CheckCircle2 className="text-emerald-500 w-5 h-5" />
        </div>
        <div>
          <h4 className="text-zinc-100 text-sm font-bold">Dica Pro</h4>
          <p className="text-zinc-500 text-xs mt-1 leading-relaxed">
            Imagens com profundidade de campo clara (bokeh) ou paisagens amplas tendem a gerar animações mais impressionantes. O modelo Veo 3.1 Fast prioriza fluidez e coerência temporal.
          </p>
        </div>
      </div>
    </div>
  );
};
