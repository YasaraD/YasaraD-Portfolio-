import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Cpu, BarChart2, Layers, Mail, ArrowUpRight } from 'lucide-react';
import { contactConfig, createMailtoLink } from '../data/contactConfig';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const projectGithub = project.githubUrl || contactConfig.socials.github.url;
  const projectInquiryMail = createMailtoLink(
    `Project Inquiry: ${project.title}`,
    `Hi Yasara,\n\nI was reviewing your ${project.title} project on your portfolio and would like to learn more about its architecture and results.`
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#121215] border border-zinc-700/80 p-6 sm:p-8 shadow-2xl z-10 text-left"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 p-2 rounded-full bg-zinc-800/80 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="mb-6 pr-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-mono text-sky-400 mb-3">
              <span>{project.category}</span>
              <span>•</span>
              <span>{project.badge}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          {/* Performance Highlight Box */}
          <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 mb-6 flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-wider text-zinc-500 font-mono">Performance Metric</div>
              <div className="text-xs text-zinc-300 font-medium">{project.keyMetric.label}</div>
            </div>
            <div className="text-2xl font-bold text-sky-400 font-mono">
              {project.keyMetric.value}
            </div>
          </div>

          {/* Technical Implementation Points */}
          <div className="mb-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-3 font-mono flex items-center gap-2">
              <Layers className="w-4 h-4 text-sky-400" /> Key Engineering Accomplishments
            </h4>
            <ul className="space-y-3">
              {project.points.map((pt, i) => (
                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Metrics Matrix if present */}
          {project.metricsList && (
            <div className="mb-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-3 font-mono flex items-center gap-2">
                <BarChart2 className="w-4 h-4 text-sky-400" /> Verified Benchmark Metrics
              </h4>
              <div className="grid grid-cols-2 gap-2.5">
                {project.metricsList.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                    <div className="text-[11px] text-zinc-400">{m.name}</div>
                    <div className="text-sm font-semibold text-white font-mono">{m.score}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Used */}
          <div className="mb-8">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-3 font-mono flex items-center gap-2">
              <Cpu className="w-4 h-4 text-sky-400" /> Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md bg-zinc-800 text-xs text-zinc-300 border border-zinc-700/60 font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Project Actions & Footer */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-5 border-t border-zinc-800">
            <div className="flex items-center gap-2">
              <a
                href={projectGithub}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-medium text-white hover:bg-zinc-800 hover:border-zinc-700 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
              </a>

              <a
                href={projectInquiryMail}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-500/10 border border-sky-500/20 text-xs font-medium text-sky-400 hover:bg-sky-500/20 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Inquire About Project</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-white text-zinc-950 font-semibold text-xs hover:bg-zinc-200 transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
