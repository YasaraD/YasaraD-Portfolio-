import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Phone, MessageCircle, ArrowUpRight } from 'lucide-react';
import { contactConfig } from '../data/contactConfig';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-14 border-t border-zinc-800/80 bg-[#09090b] text-zinc-500 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-900">
          
          {/* Brand & Subtitle */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="font-bold text-white text-sm">
              {contactConfig.name}
            </div>
            <span className="hidden sm:inline text-zinc-700">•</span>
            <span className="text-zinc-400">
              First Class Honours • University of Westminster
            </span>
          </div>

          {/* Social / Contact Links from contactConfig */}
          <div className="flex items-center gap-3 text-zinc-400">
            <a
              href={contactConfig.socials.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:text-white hover:border-zinc-700 transition-colors"
              title={`GitHub (${contactConfig.socials.github.handle})`}
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={contactConfig.socials.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:text-sky-400 hover:border-sky-500/30 transition-colors"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={contactConfig.socials.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors"
              title="WhatsApp"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <a
              href={contactConfig.email.mailto}
              className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:text-white hover:border-zinc-700 transition-colors"
              title={`Email (${contactConfig.email.address})`}
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={contactConfig.phone.tel}
              className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:text-white hover:border-zinc-700 transition-colors"
              title={`Call (${contactConfig.phone.display})`}
              aria-label="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>

            <div className="h-4 w-px bg-zinc-800 mx-1" />

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
              title="Scroll to Top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Attribution & Navigation Notes */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-zinc-500">
          <div>
            © {new Date().getFullYear()} {contactConfig.name}. Designed & Developed for AI / ML & Software Engineering.
          </div>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-zinc-300 transition-colors">About</a>
            <a href="#projects" className="hover:text-zinc-300 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-zinc-300 transition-colors">Experience</a>
            <a href="#education" className="hover:text-zinc-300 transition-colors">Education</a>
            <a href="#contact" className="hover:text-zinc-300 transition-colors">Contact</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
