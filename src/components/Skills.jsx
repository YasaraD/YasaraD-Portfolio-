import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsData } from '../data/portfolioData';
import {
  Cpu,
  BarChart3,
  Server,
  Database,
  Wrench,
  Search,
  CheckCircle2,
  Sparkles,
  Terminal,
  Layers
} from 'lucide-react';

export default function Skills() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categoryIcons = {
    "Machine Learning & AI": Cpu,
    "Data & Analytics": BarChart3,
    "Backend & APIs": Server,
    "Databases & Vector Stores": Database,
    "Tools & Practices": Wrench,
  };

  const categories = ['All', ...Object.keys(skillsData)];

  // Filter skills based on search term and selected category
  const filteredCategories = Object.entries(skillsData).filter(([category]) => {
    if (selectedCategory === 'All') return true;
    return category === selectedCategory;
  });

  return (
    <section id="skills" className="py-28 border-t border-zinc-800/80 bg-[#09090b] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-sky-400 font-mono font-medium mb-2 flex items-center gap-2">
              <span>04 / Technical Arsenal</span>
              <span className="w-8 h-px bg-sky-400/40" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Skills &amp; Capabilities
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
              End-to-end capabilities spanning deep learning model research, cross-lingual NLP, data analytics, and production full-stack engineering.
            </p>
          </div>

          {/* Interactive Live Search Filter */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Filter tech (e.g. PyTorch, SQL, RAG)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#121215] border border-zinc-800 text-xs font-mono text-white placeholder-zinc-500 focus:outline-none focus:border-sky-400 transition-colors"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-zinc-500 hover:text-white"
              >
                esc
              </button>
            )}
          </div>
        </div>

        {/* Category Pill Switcher */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-zinc-800/80">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs px-3.5 py-1.5 rounded-xl transition-all font-medium ${
                selectedCategory === cat
                  ? 'bg-sky-500/10 border border-sky-500/30 text-sky-300 font-semibold shadow-sm'
                  : 'bg-zinc-900/60 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of Skill Domains */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map(([category, items], idx) => {
            const Icon = categoryIcons[category] || Cpu;

            // Apply search term filter on items
            const filteredItems = searchTerm
              ? items.filter((item) => item.toLowerCase().includes(searchTerm.toLowerCase()))
              : items;

            if (searchTerm && filteredItems.length === 0) return null;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                className="p-6 sm:p-7 rounded-3xl bg-[#121215] border border-zinc-800/90 hover:border-zinc-700 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sky-400 group-hover:bg-sky-500/10 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-bold text-white tracking-tight">
                        {category}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-zinc-500">
                      {filteredItems.length} skills
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {filteredItems.map((skill) => {
                      const isHighlighted = searchTerm && skill.toLowerCase().includes(searchTerm.toLowerCase());
                      return (
                        <span
                          key={skill}
                          className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                            isHighlighted
                              ? 'bg-sky-400 text-zinc-950 font-bold shadow-md'
                              : 'bg-zinc-900 border border-zinc-800/80 text-zinc-300 hover:text-white hover:border-zinc-600'
                          }`}
                        >
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>Domain {idx + 1} of 5</span>
                  <span className="text-sky-400/80 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Verified
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
