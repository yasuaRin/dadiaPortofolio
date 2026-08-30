import React, { useState } from 'react';
import { skillCategoriesData } from '../data/skills';
import { Wrench, CheckCircle2, ArrowRight, Sparkles, Layers, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Skills: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('data');

  const activeCategory =
    skillCategoriesData.find((cat) => cat.id === activeCategoryId) || skillCategoriesData[0];

  return (
    <section
      id="skills"
      className="py-16 sm:py-28 md:py-36 border-t border-[#BFDBFE]/60 dark:border-[#222] bg-transparent relative transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-20 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <Wrench className="w-4 h-4 text-[#0284C7] dark:text-[#F472B6]" />
              <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#64748B] dark:text-[#777] font-mono">
                04 — CAPABILITIES &amp; TOOLING
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-[#0F1E36] dark:text-[#F3F3F2] leading-tight">
              Applied<br />
              <span className="font-serif italic font-normal pastel-gradient-text">Stack &amp; Skills.</span>
            </h2>
          </motion.div>

          <p className="text-sm sm:text-base md:text-lg text-[#475569] dark:text-[#AAA] font-normal max-w-md leading-relaxed">
            Hover or select a discipline to inspect applied toolsets, frameworks, and architecture specializations.
          </p>
        </div>

        {/* Interactive Typography & Dynamic Capability Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Oversized Typography Categories */}
          <div className="lg:col-span-5 space-y-2 sm:space-y-3">
            {skillCategoriesData.map((cat, idx) => {
              const isActive = activeCategoryId === cat.id;
              const numStr = `0${idx + 1}`;

              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ x: 6 }}
                  onMouseEnter={() => setActiveCategoryId(cat.id)}
                  onClick={() => setActiveCategoryId(cat.id)}
                  className={`group py-3 sm:py-5 border-b border-[#BFDBFE]/60 dark:border-[#222] transition-all duration-300 cursor-pointer flex items-center justify-between ${
                    isActive ? 'border-[#0284C7] dark:border-[#F472B6] pl-2 sm:pl-4' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-baseline gap-3 sm:gap-6">
                    <span className={`text-xs font-mono font-bold ${isActive ? 'text-[#0284C7] dark:text-[#F472B6]' : 'text-[#94A3B8] dark:text-[#666]'}`}>
                      {numStr}
                    </span>
                    <h3 className={`text-xl sm:text-3xl md:text-4xl font-bold tracking-tight transition-colors ${
                      isActive ? 'text-[#0F1E36] dark:text-[#F3F3F2]' : 'text-[#64748B] dark:text-[#888] group-hover:text-[#0F1E36] dark:group-hover:text-[#FFF]'
                    }`}>
                      {cat.name}
                    </h3>
                  </div>

                  <span className={`text-sm transition-transform duration-300 ${isActive ? 'translate-x-2 text-[#0284C7] dark:text-[#F472B6]' : 'opacity-0 group-hover:opacity-100 text-[#64748B]'}`}>
                    &rarr;
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Technologies Showcase */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 sm:space-y-8 p-5 sm:p-8 rounded-3xl bg-white/85 dark:bg-[#141414]/80 border border-[#BFDBFE]/70 dark:border-[#262626] backdrop-blur-md shadow-sm"
              >
                {/* Applied Philosophy Header */}
                <div className="border-b border-[#BFDBFE]/60 dark:border-[#222] pb-6">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#64748B] dark:text-[#777] block mb-2 font-bold">
                    Applied Context &middot; {activeCategory.name}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-serif italic text-[#0F1E36] dark:text-[#F3F3F2] mb-3">
                    "{activeCategory.tagline}"
                  </h4>
                  <p className="text-sm sm:text-base text-[#475569] dark:text-[#AAA] leading-relaxed">
                    {activeCategory.appliedSummary}
                  </p>
                </div>

                {/* Direct Dynamic Technology List */}
                <div className="space-y-4">
                  {activeCategory.skills.map((skill, sIdx) => (
                    <motion.div
                      key={sIdx}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, delay: sIdx * 0.05 }}
                      className="py-4 border-b border-[#BFDBFE]/40 dark:border-[#262626] flex flex-col sm:flex-row sm:items-start justify-between gap-3"
                    >
                      <div className="max-w-md">
                        <div className="text-base font-bold text-[#0F1E36] dark:text-[#F3F3F2] mb-1">
                          {skill.name}
                        </div>
                        <p className="text-xs sm:text-sm text-[#475569] dark:text-[#AAA] leading-relaxed">
                          {skill.description}
                        </p>
                      </div>

                      {skill.tags && skill.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 shrink-0 sm:max-w-[200px] justify-start sm:justify-end">
                          {skill.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2 py-0.5 rounded bg-[#E0F2FE] dark:bg-[#1E1E1E] border border-[#BAE6FD] dark:border-[#2E2E2E] text-[10px] font-mono text-[#0369A1] dark:text-[#CCC]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
