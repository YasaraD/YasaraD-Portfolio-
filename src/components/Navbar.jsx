import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Github, Linkedin, Mail, Download, MessageCircle } from 'lucide-react';
import { contactConfig } from '../data/contactConfig';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 sm:px-8 ${
        scrolled
          ? 'bg-[#09090b]/85 backdrop-blur-xl border-b border-white/5 py-3 shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-bold text-white group-hover:border-sky-400/50 group-hover:scale-105 transition-all">
            <span className="text-sky-400">Y</span>D
          </div>
          <span className="font-semibold text-white tracking-tight hidden sm:inline-block">
            {contactConfig.shortName} <span className="text-zinc-500 font-normal">Dissanayake</span>
          </span>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1 bg-[#121215]/80 border border-white/5 rounded-full px-4 py-1.5 backdrop-blur-md shadow-inner shadow-white/5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm px-3 py-1 text-zinc-400 hover:text-white transition-colors rounded-full hover:bg-white/5 font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action & Socials */}
        <div className="hidden lg:flex items-center gap-2.5">
          {/* Quick GitHub & LinkedIn Icons */}
          <div className="flex items-center gap-1 pr-1 border-r border-zinc-800">
            <a
              href={contactConfig.socials.github.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
              title={`GitHub (${contactConfig.socials.github.username})`}
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={contactConfig.socials.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-full text-zinc-400 hover:text-sky-400 hover:bg-sky-400/10 transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          <a
            href="#contact"
            className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-white text-zinc-900 hover:bg-sky-400 hover:text-zinc-950 transition-all duration-200 shadow-sm"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button & Quick Contact */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="#contact"
            className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white text-zinc-900"
          >
            Contact
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-3 rounded-2xl bg-[#121215] border border-white/10 p-5 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}

              {/* Mobile Quick Socials */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <a
                    href={contactConfig.socials.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={contactConfig.socials.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-sky-400"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={contactConfig.socials.whatsapp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-emerald-400"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                  <a
                    href={contactConfig.email.mailto}
                    className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300"
                    aria-label="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>

                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs px-3.5 py-2 rounded-full bg-white text-zinc-950 font-semibold"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
