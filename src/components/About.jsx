import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { Brain, Code2, Server, GraduationCap, Sparkles, CheckCircle } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: Brain,
      title: "Machine Learning & AI",
      description: "End-to-end model development from data preprocessing and cross-lingual NLP to multimodal fusion (ViT + CLIP) and local-first RAG pipelines."
    },
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Production software engineering with React, Vite, FastAPI, Flask, and Laravel. Sole developer of enterprise admin management platforms."
    },
    {
      icon: Server,
      title: "Systems & Data Pipelines",
      description: "Designing robust SQL/NoSQL architectures, automated retraining pipelines (>80% confidence trigger), and maintaining industrial IoT tracking."
    }
  ];

  return (
    <section id="about" className="py-20 border-t border-zinc-800/60 bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="text-xs uppercase tracking-widest text-sky-400 font-mono font-medium mb-2">
            01 / Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Bio Paragraph */}
          <div className="lg:col-span-7 space-y-5 text-zinc-400 text-base sm:text-lg leading-relaxed">
            <p>
              I am a <strong className="text-white font-medium">Computer Science graduate</strong> from the{' '}
              <span className="text-zinc-200">University of Westminster</span> (completed through Informatics Institute of Technology, IIT) graduating with{' '}
              <span className="text-sky-400 font-medium">First Class Honours</span>.
            </p>
            <p>
              With over one year of industry experience across software engineering and enterprise IT, I bring practical expertise in bridging the gap between cutting-edge machine learning research and resilient production software.
            </p>
            <p>
              My work spans from building high-accuracy multimodal news classification architectures using{' '}
              <strong className="text-zinc-200 font-medium">Vision Transformers & CLIP</strong>, to training cross-lingual sentiment engines and engineering local-first RAG chatbots. I am actively seeking a graduate role in{' '}
              <span className="text-white font-medium">Data Science, Machine Learning Engineering, or Data Analytics</span>.
            </p>

            <div className="pt-4 flex flex-wrap gap-4 text-xs font-mono text-zinc-300">
              <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-lg">
                <CheckCircle className="w-3.5 h-3.5 text-sky-400" />
                <span>BSc (Hons) First Class</span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-lg">
                <CheckCircle className="w-3.5 h-3.5 text-sky-400" />
                <span>1+ Year Industry Experience</span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-lg">
                <CheckCircle className="w-3.5 h-3.5 text-sky-400" />
                <span>CIMA Cert BA Candidate</span>
              </div>
            </div>
          </div>

          {/* Pillars Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-zinc-800/80 text-sky-400 group-hover:bg-sky-400/10 group-hover:text-sky-300 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-semibold text-white tracking-tight">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

