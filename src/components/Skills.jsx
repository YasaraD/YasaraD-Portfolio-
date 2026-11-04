import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/portfolioData';
import { Cpu, BarChart3, Server, Database, Wrench } from 'lucide-react';

export default function Skills() {
  const categoryIcons = {
    "Machine Learning & AI": Cpu,
    "Data & Analytics": BarChart3,
    "Backend & APIs": Server,
    "Databases & Vector Stores": Database,
    "Tools & Practices": Wrench,
  };

  return (
    <section id="skills" className="py-24 border-t border-zinc-800/60 bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="text-xs uppercase tracking-widest text-sky-400 font-mono font-medium mb-2">
            04 / Technical Arsenal
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Skills & Capabilities
          </h2>
          <p className="text-zinc-400 text-sm mt-2 max-w-lg">
            A comprehensive overview of frameworks, data engineering tools, and development practices utilized across research and enterprise systems.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skillsData).map(([category, items], idx) => {
            const Icon = categoryIcons[category] || Cpu;
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 rounded-3xl bg-[#121215] border border-zinc-800/90 hover:border-zinc-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sky-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-semibold text-white tracking-tight">
                      {category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800/80 text-xs font-medium text-zinc-300 hover:text-white hover:border-zinc-600 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

