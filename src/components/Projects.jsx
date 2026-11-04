import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/portfolioData';
import { contactConfig } from '../data/contactConfig';
import {
  ArrowUpRight,
  Github,
  TrendingUp,
  Layers,
  Cpu,
  Brain,
  Sparkles,
  GitMerge,
  Search,
  ExternalLink
} from 'lucide-react';

export default function Projects({ onSelectProject }) {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'AI & Full-Stack', 'Computer Vision & NLP', 'Generative AI & LLMs'];

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-28 border-t border-zinc-800/80 bg-[#09090b] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-sky-400 font-mono font-medium mb-2 flex items-center gap-2">
              <span>02 / Engineering Portfolio</span>
              <span className="w-8 h-px bg-sky-400/40" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Selected AI &amp; Software Work
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
              End-to-end multimodal architectures, cross-lingual NLP engines, and enterprise web platforms with verified benchmark performance.
            </p>
          </div>

          {/* Filter Pills with animated layout */}
          <div className="flex flex-wrap gap-1.5 p-1.5 rounded-2xl bg-[#121215] border border-zinc-800 self-start md:self-auto">
            {categories.map((cat) => {
              const active = filter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`relative text-xs px-3.5 py-1.5 rounded-xl transition-all font-medium ${
                    active
                      ? 'text-white font-semibold'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {active && (
                    <motion.div
                      layoutId="activeProjectFilter"
                      className="absolute inset-0 bg-zinc-800 rounded-xl border border-zinc-700/80 shadow-sm"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project, idx) => {
            const isFeatured = idx === 0 || idx === 1;

            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="group relative rounded-3xl bg-[#121215] border border-zinc-800/90 hover:border-zinc-700 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-black/70 overflow-hidden"
              >
                {/* Subtle top inner gradient line */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

                <div>
                  {/* Top Badge & Metric Strip */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-300 bg-zinc-900 px-3 py-1 rounded-lg border border-zinc-800 font-semibold">
                      {project.badge}
                    </span>

                    <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-sky-400 bg-sky-500/10 border border-sky-500/20 px-3 py-1 rounded-full">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>{project.keyMetric.value}</span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-sky-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 font-medium mb-4">
                    {project.subtitle}
                  </p>

                  {/* Architectural Pipeline Diagram for Flagship Models */}
                  {project.id === 'insightcast' && (
                    <div className="my-5 p-3.5 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 font-mono text-[11px] text-zinc-300">
                      <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                        <Cpu className="w-3 h-3 text-sky-400" />
                        <span>Multi-Task Inference Flow</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-1.5 text-zinc-400">
                        <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-white">Social Stream</span>
                        <span className="text-sky-400">➔</span>
                        <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-sky-300">XLM-RoBERTa + CNN</span>
                        <span className="text-sky-400">➔</span>
                        <span className="px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/30 text-sky-400 font-semibold">83.72% F1 Head</span>
                      </div>
                    </div>
                  )}

                  {project.id === 'truthlens' && (
                    <div className="my-5 p-3.5 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 font-mono text-[11px] text-zinc-300">
                      <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                        <Brain className="w-3 h-3 text-sky-400" />
                        <span>Multimodal Fusion Alignment</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-1.5 text-zinc-400">
                        <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-white">Text (RoBERTa)</span>
                        <span className="text-zinc-600">+</span>
                        <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-white">Image (ViT + CLIP)</span>
                        <span className="text-sky-400">➔</span>
                        <span className="px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/30 text-sky-400 font-semibold">89.53% Accuracy</span>
                      </div>
                    </div>
                  )}

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.slice(0, 5).map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono text-zinc-300 bg-zinc-900 border border-zinc-800"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 5 && (
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-mono text-zinc-500 bg-zinc-900/60">
                        +{project.tech.length - 5} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between mt-auto">
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="flex items-center gap-2 text-xs font-semibold text-white hover:text-sky-400 transition-colors"
                  >
                    <span>Inspect Metrics &amp; Architecture</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl || contactConfig.socials.github.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
                      title="GitHub Repository"
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>

                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
                      title="Open Case Study Modal"
                      aria-label="Open Case Study"
                    >
                      <Layers className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
