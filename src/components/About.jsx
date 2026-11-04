import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { contactConfig } from '../data/contactConfig';
import {
  Brain,
  Code2,
  Server,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
  Cpu,
  Layers,
  Database,
  Terminal,
  ShieldCheck
} from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      id: "ai-ml",
      title: "Machine Learning & AI Architecture",
      icon: Brain,
      tag: "Research & Deployment",
      metric: "89.5% Peak Accuracy",
      summary: "Specialized in multimodal neural networks (ViT + CLIP), cross-lingual NLP with XLM-RoBERTa, multi-task learning, and local-first grounded RAG systems.",
      highlights: [
        "Trained dual-phase XLM-RoBERTa + TextCNN multi-task models beating BERT by 12.67%",
        "Multimodal fusion combining RoBERTa, Vision Transformer, and CLIP representations",
        "Document-grounded RAG with SHA-256 change detection and Chroma vector store",
      ],
      technologies: ["PyTorch", "HuggingFace", "RoBERTa", "ViT & CLIP", "LangChain", "Chroma DB"]
    },
    {
      id: "fullstack",
      title: "Enterprise Full-Stack Systems",
      icon: Code2,
      tag: "Production Engineering",
      metric: "1+ Year Industry Exp",
      summary: "Designing and deploying production web applications and backend APIs with clean state management, modular components, and reliable database architectures.",
      highlights: [
        "Sole engineer behind a complete plantation enterprise administration platform",
        "Designed normalized SQL schemas and RESTful backend architectures using Laravel & Flask",
        "Orchestrated cross-timezone sprint delivery with international clients in New Zealand",
      ],
      technologies: ["React.js", "Vite", "FastAPI", "Flask", "Laravel", "MySQL", "Tailwind CSS"]
    },
    {
      id: "infrastructure",
      title: "Data Pipelines & Industrial IoT",
      icon: Server,
      tag: "Systems Continuity",
      metric: "Zero Downtime",
      summary: "Hands-on experience in mission-critical manufacturing and enterprise environments, diagnostic telemetry, and data automation.",
      highlights: [
        "Maintained continuous industrial IoT scanner networks at Ceylon Tobacco Company (BAT)",
        "Built automated model retraining triggers for predictions with >80% confidence",
        "Power BI executive analytics dashboards transforming raw data into actionable insights",
      ],
      technologies: ["IoT Scanners", "Power BI", "Data Wrangling", "Pandas", "SQL", "Git Workflows"]
    }
  ];

  return (
    <section id="about" className="py-24 border-t border-zinc-800/80 bg-[#09090b] relative overflow-hidden">
      {/* Subtle blueprint accent line */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="text-xs uppercase tracking-widest text-sky-400 font-mono font-medium mb-2 flex items-center gap-2">
            <span>01 / Philosophy &amp; Background</span>
            <span className="w-8 h-px bg-sky-400/40" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Engineering with Rigor. <br />
            <span className="text-zinc-500 font-normal">From Research Models to Production Code.</span>
          </h2>
        </div>

        {/* Dossier Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Manifesto & Credentials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Architectural Philosophy Card */}
            <div className="p-7 rounded-3xl bg-[#121215] border border-zinc-800 relative overflow-hidden">
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-sky-400" />
                <span>Executive Summary</span>
              </div>

              <blockquote className="text-base sm:text-lg text-zinc-200 font-medium leading-relaxed mb-4">
                "I specialize in bridging the gap between cutting-edge AI research and resilient, scalable software systems that solve concrete operational challenges."
              </blockquote>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Graduated with <strong className="text-white font-semibold">First Class Honours</strong> in Computer Science from the <span className="text-zinc-300">University of Westminster</span> (IIT). Over the past year, I have delivered real-world enterprise applications, trained multi-task deep learning models, and managed mission-critical factory IoT networks.
              </p>

              {/* Verified Credentials Pills */}
              <div className="mt-6 pt-5 border-t border-zinc-800 space-y-2.5">
                <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span><strong>BSc (Hons) Computer Science:</strong> First Class Honours</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span><strong>Professional Accounting:</strong> CIMA Cert BA (In Progress)</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span><strong>Industry Track Record:</strong> 1+ Year Enterprise &amp; IT Experience</span>
                </div>
              </div>
            </div>

            {/* Quick Action Link to Contact */}
            <div className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 flex items-center justify-between group">
              <div>
                <div className="text-xs font-semibold text-white">Seeking Full-Time Graduate Opportunities</div>
                <div className="text-[11px] text-zinc-400">Data Science • Machine Learning • Full-Stack</div>
              </div>
              <a
                href="#contact"
                className="p-2.5 rounded-xl bg-white text-zinc-950 font-semibold group-hover:bg-sky-400 transition-colors"
                title="Connect"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Core Engineering Pillars */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                Core Engineering Disciplines
              </span>
              <span className="text-[11px] font-mono text-sky-400">Select to inspect</span>
            </div>

            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isSelected = activeTab === idx;

              return (
                <div
                  key={pillar.id}
                  onClick={() => setActiveTab(idx)}
                  className={`p-6 sm:p-7 rounded-3xl transition-all duration-300 cursor-pointer border ${
                    isSelected
                      ? 'bg-[#141418] border-sky-500/50 shadow-2xl shadow-sky-500/5'
                      : 'bg-[#121215]/80 border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl border transition-colors ${
                        isSelected
                          ? 'bg-sky-500/10 border-sky-500/30 text-sky-400'
                          : 'bg-zinc-900 border-zinc-800 text-zinc-400'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                          {pillar.title}
                        </h3>
                        <div className="text-[11px] font-mono text-zinc-500">
                          {pillar.tag}
                        </div>
                      </div>
                    </div>

                    <div className="px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono font-semibold text-sky-400 shrink-0">
                      {pillar.metric}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                    {pillar.summary}
                  </p>

                  {/* Expanded Highlights when active */}
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="pt-4 border-t border-zinc-800/80 space-y-2.5"
                    >
                      <div className="text-[11px] font-mono uppercase text-zinc-500">Key Accomplishments:</div>
                      {pillar.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}

                      {/* Tech Chips */}
                      <div className="pt-3 flex flex-wrap gap-1.5">
                        {pillar.technologies.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}
