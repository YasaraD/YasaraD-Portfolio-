import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Copy, Check, Send, ArrowUpRight, Github, Linkedin, MessageSquare } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending email / open mailto with prefilled details
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Hi Yasara,\n\nFrom: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
    window.location.href = mailtoUrl;
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 border-t border-zinc-800/60 bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="text-xs uppercase tracking-widest text-sky-400 font-mono font-medium mb-2">
            06 / Get In Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's Connect & Build.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-lg">
            Whether you have an open graduate role in AI / Machine Learning, a software development project, or just want to chat tech—my inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact & Quick Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Quick Copy Email Card */}
            <div className="p-6 rounded-3xl bg-[#121215] border border-zinc-800 hover:border-zinc-700 transition-all">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">
                Primary Email
              </div>
              <div className="text-sm sm:text-base font-semibold text-white break-all mb-4 font-mono">
                {personalInfo.email}
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-200 hover:text-white hover:border-zinc-700 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-1.5 text-xs font-medium text-sky-400 hover:underline"
                >
                  <span>Open Client</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Direct Phone & Location Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#121215] border border-zinc-800">
                <div className="flex items-center gap-2 text-zinc-400 mb-2">
                  <Phone className="w-4 h-4 text-sky-400" />
                  <span className="text-xs font-mono uppercase">Direct Call</span>
                </div>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="text-sm font-semibold text-white hover:text-sky-400 transition-colors font-mono"
                >
                  {personalInfo.phone}
                </a>
              </div>

              <div className="p-5 rounded-2xl bg-[#121215] border border-zinc-800">
                <div className="flex items-center gap-2 text-zinc-400 mb-2">
                  <MapPin className="w-4 h-4 text-sky-400" />
                  <span className="text-xs font-mono uppercase">Location</span>
                </div>
                <div className="text-sm font-semibold text-white">
                  Sri Lanka
                </div>
                <div className="text-[11px] text-zinc-500">Open to Relocation</div>
              </div>
            </div>

            {/* Availability Pill Card */}
            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 flex items-center gap-3">
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <div>
                <div className="text-xs font-semibold text-white">Currently Open for Opportunities</div>
                <div className="text-[11px] text-zinc-400">Available for Machine Learning, Data Science & Software Engineering</div>
              </div>
            </div>

          </div>

          {/* Right Column: Sleek Message Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-3xl bg-[#121215] border border-zinc-800 flex flex-col gap-4 shadow-xl"
            >
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="w-4 h-4 text-sky-400" />
                <h3 className="text-base font-bold text-white">Send a Direct Message</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Smith"
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-sky-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-sky-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Graduate Role / Project Opportunity"
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-sky-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                  Message
                </label>
                <textarea
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your note or project description here..."
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-sky-400 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto self-start mt-2 px-6 py-3 rounded-xl bg-white text-zinc-950 font-semibold text-xs sm:text-sm hover:bg-sky-400 hover:text-zinc-950 transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Send Message via Email</span>
                <Send className="w-3.5 h-3.5" />
              </button>

              {formSubmitted && (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400">
                  Opening your default mail client with your prefilled message!
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

