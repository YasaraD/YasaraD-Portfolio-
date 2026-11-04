import React from 'react';
import { motion } from 'framer-motion';
import { educationData, certificationsData, extracurricularData, referencesData } from '../data/portfolioData';
import {
  GraduationCap,
  Award,
  BookOpen,
  Users,
  Phone,
  Mail,
  CheckCircle2,
  Trophy,
  Landmark,
  ShieldCheck,
  Star,
  ExternalLink
} from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-28 border-t border-zinc-800/80 bg-[#09090b] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="text-xs uppercase tracking-widest text-sky-400 font-mono font-medium mb-2 flex items-center gap-2">
            <span>05 / Academic Pedigree</span>
            <span className="w-8 h-px bg-sky-400/40" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Education &amp; Credentials
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
            First Class Honours academic foundation in Computer Science, professional accounting qualification (CIMA), and industry certifications.
          </p>
        </div>

        {/* Education Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {educationData.map((edu, idx) => {
            const isWestminster = idx === 0;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-6 sm:p-7 rounded-3xl transition-all duration-300 flex flex-col justify-between ${
                  isWestminster
                    ? 'bg-[#141418] border-2 border-sky-500/40 shadow-2xl shadow-sky-500/5'
                    : 'bg-[#121215] border border-zinc-800/90 hover:border-zinc-700'
                }`}
              >
                <div>
                  {/* Top Tag & Period */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 font-bold">
                      {edu.badge}
                    </span>
                    <span className="text-xs font-mono text-zinc-500">
                      {edu.period}
                    </span>
                  </div>

                  {/* Institution & Affiliation */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sky-400 shrink-0 mt-0.5">
                      {idx === 0 ? <GraduationCap className="w-5 h-5" /> : idx === 1 ? <Award className="w-5 h-5" /> : <Landmark className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                        {edu.institution}
                      </h3>
                      {edu.affiliation && (
                        <p className="text-xs text-sky-400/90 font-mono mt-0.5">
                          {edu.affiliation}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="text-sm font-semibold text-zinc-200 mt-3">
                    {edu.degree}
                  </div>

                  {edu.honours && (
                    <div className="text-xs font-bold text-sky-400 font-mono mt-1 flex items-center gap-1.5">
                      <Star className="w-3.5 h-3.5 fill-sky-400/20" />
                      <span>{edu.honours}</span>
                    </div>
                  )}

                  <p className="text-xs text-zinc-400 leading-relaxed mt-3">
                    {edu.description}
                  </p>

                  {/* Westminster Modules */}
                  {edu.modules && (
                    <div className="mt-5 pt-4 border-t border-zinc-800/80">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 mb-2">
                        Specialized Modules
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.modules.map((mod) => (
                          <span
                            key={mod}
                            className="px-2 py-0.5 rounded text-[10px] font-mono text-zinc-300 bg-zinc-900 border border-zinc-800"
                          >
                            {mod}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* High school highlights */}
                  {edu.highlights && (
                    <div className="mt-5 pt-4 border-t border-zinc-800/80 space-y-1.5">
                      {edu.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications & Leadership Duo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          
          {/* Certifications Card */}
          <div className="p-6 sm:p-7 rounded-3xl bg-[#121215] border border-zinc-800">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sky-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Professional Certifications
                </h3>
                <div className="text-xs text-zinc-500 font-mono">Recognized Credentialing</div>
              </div>
            </div>

            {certificationsData.map((cert, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-zinc-950/60 border border-zinc-800/80">
                <div className="flex items-center justify-between mb-1.5">
                  <h4 className="text-sm font-bold text-white">
                    {cert.title}
                  </h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20 font-semibold">
                    {cert.status}
                  </span>
                </div>
                <div className="text-xs text-zinc-400 font-mono mb-2">
                  Issuer: <span className="text-zinc-200">{cert.issuer}</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {cert.focus}
                </p>
              </div>
            ))}
          </div>

          {/* Extracurricular Leadership Card */}
          <div className="p-6 sm:p-7 rounded-3xl bg-[#121215] border border-zinc-800">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sky-400">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Extracurricular Leadership
                </h3>
                <div className="text-xs text-zinc-500 font-mono">Societies, Athletics &amp; Service</div>
              </div>
            </div>

            <div className="space-y-3">
              {extracurricularData.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-semibold">{item.organization}</strong>
                    <span className="text-zinc-500"> — {item.role}</span>
                    <p className="text-zinc-400 text-[11px] mt-0.5">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Verified References Section */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#121215] border border-zinc-800">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              <span className="text-xs font-mono uppercase tracking-widest text-white font-semibold">
                Verified Industry &amp; Academic References
              </span>
            </div>
            <span className="text-[11px] font-mono text-zinc-500">From Official CV</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {referencesData.map((ref, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-zinc-950/60 border border-zinc-800 flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-bold text-white tracking-tight">
                    {ref.name}
                  </h4>
                  <div className="text-xs text-sky-400 font-medium mt-1">
                    {ref.role}
                  </div>
                  <div className="text-xs text-zinc-400 mt-0.5">
                    {ref.company}
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-zinc-800 flex flex-wrap gap-4 text-xs font-mono text-zinc-400">
                  <a
                    href={`tel:${ref.phone}`}
                    className="flex items-center gap-1.5 hover:text-white transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-sky-400" />
                    <span>{ref.phone}</span>
                  </a>
                  <a
                    href={`mailto:${ref.email}`}
                    className="flex items-center gap-1.5 hover:text-white transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-sky-400" />
                    <span>{ref.email}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
