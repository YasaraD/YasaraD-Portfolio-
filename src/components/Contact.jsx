import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  ArrowUpRight,
  Github,
  Linkedin,
  MessageCircle,
  Download,
  FileText,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { contactConfig, createMailtoLink } from '../data/contactConfig';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('Graduate AI / ML Role');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Graduate AI / ML Role Inquiry',
    message: '',
  });

  const topicOptions = [
    { label: 'Graduate AI / ML Role', subject: 'Graduate AI / ML Opportunity' },
    { label: 'Data Science / Analytics', subject: 'Data Science / Analytics Role' },
    { label: 'Full-Stack Software Dev', subject: 'Software Engineering Project' },
    { label: 'Consulting / Tech Chat', subject: 'Collaboration / Tech Chat' },
  ];

  const handleSelectTopic = (topic) => {
    setSelectedTopic(topic.label);
    setFormData((prev) => ({
      ...prev,
      subject: topic.subject,
    }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactConfig.email.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = createMailtoLink(
      formData.subject || 'Portfolio Inquiry',
      formData.message,
      formData.name,
      formData.email
    );
    window.location.href = mailtoUrl;
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 6000);
  };

  const handleCvClick = (e) => {
    if (!contactConfig.resume.available) {
      e.preventDefault();
      const mailtoUrl = createMailtoLink(
        contactConfig.resume.requestSubject,
        `I would like to request an updated copy of your CV / Resume.`
      );
      window.location.href = mailtoUrl;
    }
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
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
            Whether you are hiring for an AI/ML graduate role, seeking a full-stack engineer, or looking to collaborate—reach out directly through any channel below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Channels & Quick Cards */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            
            {/* Primary Email Card */}
            <div className="p-6 rounded-3xl bg-[#121215] border border-zinc-800 hover:border-zinc-700 transition-all shadow-md">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                  {contactConfig.email.label}
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  Direct Response
                </span>
              </div>

              <div className="text-sm sm:text-base font-semibold text-white break-all mb-4 font-mono">
                {contactConfig.email.address}
              </div>

              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-200 hover:text-white hover:border-zinc-700 transition-colors"
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
                  href={contactConfig.email.mailto}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-sky-500/10 border border-sky-500/20 text-xs font-medium text-sky-400 hover:bg-sky-500/20 transition-colors"
                >
                  <span>Open Mail App</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Direct Phone & WhatsApp Duo Card */}
            <div className="p-6 rounded-3xl bg-[#121215] border border-zinc-800 hover:border-zinc-700 transition-all">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-zinc-400">
                  <Phone className="w-4 h-4 text-sky-400" />
                  <span className="text-xs font-mono uppercase">Call & WhatsApp</span>
                </div>
                <span className="text-[11px] font-mono text-zinc-500">Direct Phone</span>
              </div>

              <div className="text-base font-semibold text-white font-mono mb-4">
                {contactConfig.phone.display}
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={contactConfig.phone.tel}
                  className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-sky-400" />
                  <span>Call Direct</span>
                </a>

                <a
                  href={contactConfig.socials.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-400 hover:bg-emerald-500/20 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Social & Professional Profile Tiles (LinkedIn & GitHub) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              
              {/* LinkedIn Card */}
              <a
                href={contactConfig.socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl bg-[#121215] border border-zinc-800 hover:border-sky-500/40 transition-all block"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-sky-400 group-hover:bg-sky-500/10 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-sky-400 transition-colors" />
                </div>
                <div className="text-sm font-semibold text-white group-hover:text-sky-300 transition-colors">
                  LinkedIn
                </div>
                <div className="text-xs text-zinc-400 font-mono mt-0.5">
                  {contactConfig.socials.linkedin.handle}
                </div>
              </a>

              {/* GitHub Card */}
              <a
                href={contactConfig.socials.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl bg-[#121215] border border-zinc-800 hover:border-zinc-600 transition-all block"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 group-hover:bg-white/10 transition-colors">
                    <Github className="w-4 h-4" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                </div>
                <div className="text-sm font-semibold text-white group-hover:text-zinc-200 transition-colors">
                  GitHub
                </div>
                <div className="text-xs text-zinc-400 font-mono mt-0.5">
                  {contactConfig.socials.github.handle}
                </div>
              </a>
            </div>

            {/* Resume / CV Card */}
            <a
              href={contactConfig.resume.url}
              onClick={handleCvClick}
              target={contactConfig.resume.available ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-sky-500/30 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-zinc-800 text-sky-400 group-hover:bg-sky-500/10 transition-colors">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Curriculum Vitae (CV)</div>
                  <div className="text-xs text-zinc-400">
                    {contactConfig.resume.available ? "Ready for download (PDF)" : "Click to request verified copy"}
                  </div>
                </div>
              </div>
              <div className="text-xs font-semibold text-sky-400 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                <span>{contactConfig.resume.available ? "Download" : "Request"}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </a>

            {/* Availability Pill Card */}
            <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 flex items-center gap-3">
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <div>
                <div className="text-xs font-semibold text-white">{contactConfig.status}</div>
                <div className="text-[11px] text-zinc-400">
                  {contactConfig.location.city}, {contactConfig.location.country} • {contactConfig.location.relocation}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Sleek Message Form with Topic Selector */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-3xl bg-[#121215] border border-zinc-800 flex flex-col gap-4 shadow-xl"
            >
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Send a Direct Message</h3>
                    <p className="text-xs text-zinc-400">I typically respond within 24 hours.</p>
                  </div>
                </div>
              </div>

              {/* Quick Topic Chips */}
              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">
                  Inquiry Topic
                </label>
                <div className="flex flex-wrap gap-2">
                  {topicOptions.map((opt) => (
                    <button
                      key={opt.label}
                      type="button"
                      onClick={() => handleSelectTopic(opt)}
                      className={`text-xs px-3 py-1.5 rounded-xl border transition-all font-medium ${
                        selectedTopic === opt.label
                          ? 'bg-sky-500/10 border-sky-500/30 text-sky-300'
                          : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
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
                    placeholder="alex@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-sky-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                  Subject Line
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Subject of your message"
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-sky-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                  Message Details
                </label>
                <textarea
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Briefly describe the role, project, or topic you'd like to discuss..."
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-sky-400 transition-colors resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-zinc-950 font-semibold text-xs sm:text-sm hover:bg-sky-400 hover:text-zinc-950 transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Send Message via Email</span>
                  <Send className="w-3.5 h-3.5" />
                </button>

                <span className="text-xs text-zinc-500 font-mono text-center sm:text-right">
                  Opens default mail client with prefilled note
                </span>
              </div>

              {formSubmitted && (
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 flex items-center gap-2">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>Opening your mail client with your prefilled details! If it didn't open, email directly at {contactConfig.email.address}.</span>
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
