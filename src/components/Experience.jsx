import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../data/portfolioData';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  ChevronRight,
  GitBranch,
  Building2,
  Globe,
  Radio
} from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-28 border-t border-zinc-800/80 bg-[#09090b] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="text-xs uppercase tracking-widest text-sky-400 font-mono font-medium mb-2 flex items-center gap-2">
            <span>03 / Industry Track Record</span>
            <span className="w-8 h-px bg-sky-400/40" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
            1+ year of commercial experience delivering end-to-end full-stack architectures, international client features, and critical industrial IoT telemetry.
          </p>
        </div>

        {/* Architectural Timeline Spine */}
        <div className="relative pl-6 sm:pl-10 border-l border-zinc-800 space-y-12">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative"
            >
              {/* Glowing Node on Timeline Spine */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-4 h-4 rounded-full bg-[#09090b] border-2 border-sky-400 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping" />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#121215] border border-zinc-800 hover:border-zinc-700 transition-all duration-300 shadow-xl group">
                
                {/* Header Row */}
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                        {exp.type}
                      </span>
                      {exp.subCompany && (
                        <span className="text-xs text-zinc-400 font-mono flex items-center gap-1">
                          <Building2 className="w-3.5 h-3.5 text-zinc-500" />
                          <span>Part of {exp.subCompany}</span>
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>

                    <div className="text-sm font-semibold text-zinc-300 mt-1 flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4 text-sky-400" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  {/* Metadata Chips */}
                  <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-zinc-400">
                    <div className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-xl">
                      <Calendar className="w-3.5 h-3.5 text-sky-400" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-xl">
                      <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Brief Summary */}
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Accomplishment Highlights with Clean Formatting */}
                <div className="space-y-3 mb-6 bg-zinc-950/50 p-4 sm:p-5 rounded-2xl border border-zinc-850">
                  <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">
                    Key Deliverables &amp; Impact
                  </div>
                  {exp.highlights.map((bullet, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Skills Tags Strip */}
                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-zinc-800/80">
                  <span className="text-xs font-mono text-zinc-500 mr-1">Tools &amp; Scope:</span>
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
