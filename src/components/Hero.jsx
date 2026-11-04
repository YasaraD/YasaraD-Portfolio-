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
  FileText
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { contactConfig } from '../data/contactConfig';

export default function Hero() {
  const handleCvClick = (e) => {
    if (!contactConfig.resume.available) {
      e.preventDefault();
      // Friendly fallback to request CV directly
      const requestUrl = `mailto:${contactConfig.email.address}?subject=${encodeURIComponent(contactConfig.resume.requestSubject)}&body=${encodeURIComponent(`Hi ${contactConfig.shortName},\n\nI was reviewing your portfolio and would like to request an updated copy of your CV / Resume.\n\nThank you!`)}`;
      window.location.href = requestUrl;
    }
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-sky-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-medium text-zinc-300 mb-6 backdrop-blur-md shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{contactConfig.status}</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6"
            >
              Hi, I'm <span className="text-white">{contactConfig.shortName}</span>{' '}
              <span className="text-zinc-500 block sm:inline">Dissanayake</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-zinc-400 leading-relaxed max-w-xl mb-8"
            >
              <strong className="text-zinc-200 font-semibold">First Class Honours</strong> graduate from the{' '}
              <span className="text-zinc-200">University of Westminster</span>. Specialized in building end-to-end{' '}
              <span className="text-sky-400">Machine Learning & AI</span> solutions, multimodal deep learning models, and full-stack software systems.
            </motion.p>

            {/* Action CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-6"
            >
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-zinc-950 font-semibold text-sm hover:bg-sky-400 hover:text-zinc-950 transition-all duration-200 shadow-lg shadow-white/5"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-200 font-medium text-sm hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-200"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400" />
              </a>

              {/* CV Button */}
              <a
                href={contactConfig.resume.url}
                onClick={handleCvClick}
                target={contactConfig.resume.available ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-zinc-900/90 border border-sky-500/30 text-sky-400 hover:bg-sky-500/10 hover:border-sky-400 transition-all duration-200 text-sm font-medium"
                title={contactConfig.resume.available ? "Download CV PDF" : "Request CV via email"}
              >
                <Download className="w-4 h-4" />
                <span>{contactConfig.resume.available ? "Download CV" : "Request CV"}</span>
              </a>
            </motion.div>

            {/* Fast Social Reach Bar */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex items-center gap-2"
            >
              <span className="text-xs font-mono text-zinc-500 mr-1 hidden sm:inline">Connect:</span>
              
              <a
                href={contactConfig.socials.github.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-800/80 transition-all"
                title={`GitHub: ${contactConfig.socials.github.username}`}
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={contactConfig.socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-sky-400 hover:border-sky-500/30 hover:bg-zinc-800/80 transition-all"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={contactConfig.socials.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Direct Chat"
                className="p-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/30 hover:bg-zinc-800/80 transition-all"
                title="WhatsApp Direct Message"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={contactConfig.email.mailto}
                aria-label="Send Direct Email"
                className="p-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-800/80 transition-all"
                title={`Email: ${contactConfig.email.address}`}
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={contactConfig.phone.tel}
                aria-label="Call Direct"
                className="p-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-800/80 transition-all sm:flex hidden"
                title={`Call: ${contactConfig.phone.display}`}
              >
                <Phone className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Location & Quick Meta */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-4 mt-8 pt-6 border-t border-zinc-800/80 text-xs text-zinc-400 w-full"
            >
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                <span>{contactConfig.location.display}</span>
              </div>
              <div className="h-3 w-px bg-zinc-800" />
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>1+ Year Industry Experience</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Inspired Matthew Portfolio Photo Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-sm"
            >
              {/* Outer Card Frame with Subtle Glow */}
              <div className="relative rounded-3xl p-2 bg-gradient-to-b from-zinc-800/80 via-zinc-900 to-zinc-950 border border-zinc-800 shadow-2xl group">
                
                {/* Photo Container */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-zinc-900">
                  <img
                    src={personalInfo.photo}
                    alt={contactConfig.name}
                    className="w-full h-full object-cover object-top filter contrast-[1.02] group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  {/* Subtle vignette gradient at bottom of photo for text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent pointer-events-none" />

                  {/* Floating Overlay Badge on bottom of image */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-zinc-950/80 border border-white/10 backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-semibold text-white">{contactConfig.shortName} Dissanayake</div>
                        <div className="text-[11px] text-zinc-400">AI / ML Engineer & Software Dev</div>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] text-sky-400 font-mono font-medium px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/20">
                        Westminster
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Top Pill */}
                <motion.div
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="absolute -top-3 -right-3 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-700 text-[11px] font-medium text-zinc-200 shadow-lg flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  <span>First Class Honours</span>
                </motion.div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Stats Grid Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14 pt-8 border-t border-zinc-800"
        >
          {personalInfo.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1 font-mono">
                {metric.value}
              </div>
              <div className="text-xs font-semibold text-zinc-300 mb-0.5">{metric.label}</div>
              <div className="text-[11px] text-zinc-500">{metric.subtext}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
