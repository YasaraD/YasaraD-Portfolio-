import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  Download,
  CheckCircle2,
  Phone,
  MessageCircle,
  Terminal,
  Cpu,
  Layers
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { contactConfig } from '../data/contactConfig';

export default function Hero() {
  const handleCvClick = (e) => {
    if (!contactConfig.resume.available) {
      e.preventDefault();
      const requestUrl = `mailto:${contactConfig.email.address}?subject=${encodeURIComponent(contactConfig.resume.requestSubject)}&body=${encodeURIComponent(`Hi ${contactConfig.shortName},\n\nI was reviewing your portfolio and would like to request an updated copy of your CV / Resume.\n\nThank you!`)}`;
      window.location.href = requestUrl;
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-dot-grid">
      {/* Radial fade mask to make the dot-grid emerge softly in center */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] via-transparent to-[#09090b] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#09090b_75%)] pointer-events-none" />

      {/* Atmospheric Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[600px] h-[350px] bg-sky-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-12 right-10 w-80 h-80 bg-zinc-700/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Top Interactive Engineering Pill */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-2.5 mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{contactConfig.status}</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/50 border border-zinc-800/80 text-xs font-mono text-zinc-400">
            <Terminal className="w-3.5 h-3.5 text-sky-400" />
            <span>AI / ML & Full-Stack Systems</span>
          </div>
        </motion.div>

        {/* Main Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Typographic Statement */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Title with Creative Visual Hierarchy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="space-y-1 mb-6"
            >
              <div className="text-sm font-mono uppercase tracking-widest text-sky-400 font-semibold flex items-center gap-2">
                <span>Yasara Dissanayake</span>
                <span className="w-6 h-px bg-sky-400/40" />
                <span className="text-zinc-500 font-normal">Westminster First Class</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-extrabold tracking-tight text-white leading-[1.08]">
                Architecting <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                  Intelligent AI
                </span>{' '}
                <span className="text-zinc-500 font-normal">&amp;</span> <br />
                <span className="text-sky-400">Production Systems.</span>
              </h1>
            </motion.div>

            {/* Sub-headline / Narrative */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-xl mb-8"
            >
              First Class Computer Science graduate specialized in end-to-end Machine Learning, multimodal neural fusion (<strong className="text-zinc-200 font-semibold">ViT + CLIP</strong>), cross-lingual NLP, and scalable full-stack applications. Bridging frontier AI research with resilient software engineering.
            </motion.p>

            {/* Action CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-8"
            >
              <a
                href="#projects"
                className="group flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-zinc-950 font-semibold text-sm hover:bg-sky-400 transition-all duration-200 shadow-xl shadow-white/5"
              >
                <span>Explore Featured Work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-200 font-medium text-sm hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-200"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400" />
              </a>

              <a
                href={contactConfig.resume.url}
                onClick={handleCvClick}
                target={contactConfig.resume.available ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-zinc-900/80 border border-sky-500/30 text-sky-400 hover:bg-sky-500/10 hover:border-sky-400 transition-all duration-200 text-sm font-medium"
                title={contactConfig.resume.available ? "Download CV PDF" : "Request CV via email"}
              >
                <Download className="w-4 h-4" />
                <span>{contactConfig.resume.available ? "Download CV" : "Request CV"}</span>
              </a>
            </motion.div>

            {/* Fast Social Dock */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35 }}
              className="flex items-center gap-3 pt-6 border-t border-zinc-800/80 w-full"
            >
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider mr-1">Direct Channels:</span>

              <a
                href={contactConfig.socials.github.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-800 transition-all"
                title={`GitHub (${contactConfig.socials.github.username})`}
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={contactConfig.socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-sky-400 hover:border-sky-500/30 hover:bg-zinc-800 transition-all"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={contactConfig.socials.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Direct Message"
                className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/30 hover:bg-zinc-800 transition-all"
                title="WhatsApp Direct Message"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={contactConfig.email.mailto}
                aria-label="Direct Email"
                className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-800 transition-all"
                title={`Email: ${contactConfig.email.address}`}
              >
                <Mail className="w-4 h-4" />
              </a>

              <div className="h-4 w-px bg-zinc-800 mx-1 hidden sm:block" />

              <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-zinc-500">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                <span>{contactConfig.location.display}</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Architectural Tactile Portrait Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end lg:self-start lg:-mt-6 xl:-mt-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-sm"
            >
              {/* Architectural Crosshair Corners */}
              <div className="absolute -top-2 -left-2 text-zinc-600 font-mono text-xs select-none">┌</div>
              <div className="absolute -top-2 -right-2 text-zinc-600 font-mono text-xs select-none">┐</div>
              <div className="absolute -bottom-2 -left-2 text-zinc-600 font-mono text-xs select-none">└</div>
              <div className="absolute -bottom-2 -right-2 text-zinc-600 font-mono text-xs select-none">┘</div>

              {/* Outer Card Frame with Blueprint Precision */}
              <div className="relative rounded-3xl p-2.5 bg-gradient-to-b from-zinc-800/80 via-[#121215] to-[#09090b] border border-zinc-800 shadow-2xl group">
                
                {/* Photo Container */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-zinc-950">
                  <img
                    src={personalInfo.photo}
                    alt={contactConfig.name}
                    className="w-full h-full object-cover object-top filter contrast-[1.03] group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Subtle Vignette Gradient at bottom for text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/95 via-zinc-950/30 to-transparent pointer-events-none" />

                  {/* Bottom Tactile Profile Deck */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3.5 rounded-2xl bg-zinc-950/85 border border-white/10 backdrop-blur-md">
                    <div className="flex items-center justify-between mb-1.5">
                      <div>
                        <div className="text-sm font-bold text-white tracking-tight">{contactConfig.name}</div>
                        <div className="text-[11px] text-zinc-400 font-mono">BSc (Hons) Computer Science</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px] font-mono text-zinc-400">
                      <span className="text-sky-400">Westminster First Class</span>
                      <span>1+ Yr Industry Exp</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Blueprint Architecture Stats Grid Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-16 pt-10 border-t border-zinc-800/90"
        >
          {personalInfo.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-[#121215]/80 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-2 text-[10px] font-mono text-zinc-600 select-none group-hover:text-sky-400/60 transition-colors">
                0{idx + 1}
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1 font-mono group-hover:text-sky-300 transition-colors">
                {metric.value}
              </div>
              <div className="text-xs font-semibold text-zinc-300 mb-0.5">{metric.label}</div>
              <div className="text-[11px] text-zinc-500 font-mono">{metric.subtext}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
