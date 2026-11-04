import React from 'react';
import { Sparkles, Brain, Cpu, Code2, Database, ShieldCheck, Award } from 'lucide-react';

export default function TechTicker() {
  const items = [
    { label: "MULTIMODAL DEEP LEARNING (ViT + CLIP)", icon: Brain },
    { label: "FIRST CLASS HONOURS (UNIVERSITY OF WESTMINSTER)", icon: Award },
    { label: "CROSS-LINGUAL NLP (XLM-RoBERTa)", icon: Cpu },
    { label: "LOCAL-FIRST RAG & VECTOR RETRIEVAL (CHROMA)", icon: Database },
    { label: "ENTERPRISE SOFTWARE & DATABASE ARCHITECTURE", icon: Code2 },
    { label: "89.5% PEAK BENCHMARK ACCURACY", icon: ShieldCheck },
    { label: "FULL-STACK PRODUCTION SYSTEMS (REACT • FASTAPI • LARAVEL)", icon: Code2 },
    { label: "CIMA PROFESSIONAL BUSINESS ACCOUNTING (IN PROGRESS)", icon: Award },
  ];

  return (
    <div className="relative w-full overflow-hidden border-y border-zinc-800/80 bg-[#0c0c0e] py-3.5 z-20 select-none">
      {/* Side gradient fades */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#09090b] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#09090b] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {/* Double array for infinite loop */}
        {[...items, ...items].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="inline-flex items-center gap-2.5 text-xs font-mono font-medium tracking-wider text-zinc-400 uppercase"
            >
              <Icon className="w-3.5 h-3.5 text-sky-400/80 shrink-0" />
              <span>{item.label}</span>
              <span className="text-zinc-700 ml-4">✦</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

