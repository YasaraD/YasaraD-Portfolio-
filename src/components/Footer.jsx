import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-zinc-800/80 bg-[#09090b] text-zinc-500 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand & Note */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="font-semibold text-white">
            Yasara Gayanaka Dissanayake
          </div>
          <span className="hidden sm:inline text-zinc-700">•</span>
          <span className="text-zinc-400">
            First Class Honours • University of Westminster
          </span>
        </div>

        {/* Social / Contact Links */}
        <div className="flex items-center gap-4 text-zinc-400">
          <a
            href={`mailto:${personalInfo.email}`}
            className="hover:text-white transition-colors"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <div className="h-4 w-px bg-zinc-800" />
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
            title="Back to Top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 mt-6 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-zinc-600">
        <div>© {new Date().getFullYear()} Yasara Gayanaka Dissanayake. All rights reserved.</div>
        <div>Minimalist Portfolio Inspired by Matthew Animation • Built with React & Vite</div>
      </div>
    </footer>
  );
}

