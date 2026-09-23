import React, { useState } from 'react';
import { hardSkillGroups, softSkillsList, languagesData } from '../data/skills';
import { motion, AnimatePresence } from 'motion/react';
import {
  Code2,
  Database,
  Bot,
  BrainCircuit,
  Globe2,
  ChevronLeft,
  ChevronRight,
  Layers,
  ArrowRight,
  Sparkles,
  Award
} from 'lucide-react';

export const Skills: React.FC = () => {
  // Main view: 'hard' | 'soft'
  const [mainTab, setMainTab] = useState<'hard' | 'soft'>('hard');
  // For hard skills: 0: Data Science & AI, 1: Web Development, 2: Databases & Cloud
  const [hardCategoryIndex, setHardCategoryIndex] = useState<number>(0);

  const currentHardGroup = hardSkillGroups[hardCategoryIndex];

  const handlePrev = () => {
    if (mainTab === 'hard') {
      setHardCategoryIndex((prev) =>
        prev === 0 ? hardSkillGroups.length - 1 : prev - 1
      );
    } else {
      setMainTab('hard');
      setHardCategoryIndex(hardSkillGroups.length - 1);
    }
  };

  const handleNext = () => {
    if (mainTab === 'hard') {
      if (hardCategoryIndex < hardSkillGroups.length - 1) {
        setHardCategoryIndex((prev) => prev + 1);
      } else {
        setMainTab('soft');
      }
    } else {
      setMainTab('hard');
      setHardCategoryIndex(0);
    }
  };

  const hardCategoryIcons = [Bot, Code2, Database];

  return (
    <section
      id="skills"
      className="py-20 sm:py-28 md:py-36 border-t border-[#BFDBFE]/60 dark:border-[#222] bg-transparent relative transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#64748B] dark:text-[#888] font-bold block mb-3">
              04 — SKILLS &amp; EXPERTISE
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#0F1E36] dark:text-[#F3F3F2]">
              Technical &amp;{' '}
              <span className="font-serif italic font-normal pastel-gradient-text">
                Soft Skills.
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Primary Classification Tabs & Navigation Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#BFDBFE]/60 dark:border-[#222] mb-8 sm:mb-10">
          {/* Main Tabs: Technical (Hard) vs Soft Skills */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setMainTab('hard');
                if (hardCategoryIndex < 0) setHardCategoryIndex(0);
              }}
              className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-mono font-bold tracking-wider transition-all cursor-pointer ${
                mainTab === 'hard'
                  ? 'bg-[#0F1E36] text-white dark:bg-[#F3F3F2] dark:text-[#0F1E36] shadow-sm'
                  : 'text-[#64748B] dark:text-[#888] hover:text-[#0F1E36] dark:hover:text-[#F3F3F2] hover:bg-[#F1F5F9] dark:hover:bg-[#1A1A1A]'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>TECHNICAL SKILLS</span>
            </button>

            <button
              onClick={() => setMainTab('soft')}
              className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-mono font-bold tracking-wider transition-all cursor-pointer ${
                mainTab === 'soft'
                  ? 'bg-[#0F1E36] text-white dark:bg-[#F3F3F2] dark:text-[#0F1E36] shadow-sm'
                  : 'text-[#64748B] dark:text-[#888] hover:text-[#0F1E36] dark:hover:text-[#F3F3F2] hover:bg-[#F1F5F9] dark:hover:bg-[#1A1A1A]'
              }`}
            >
              <BrainCircuit className="w-3.5 h-3.5" />
              <span>SOFT SKILLS</span>
            </button>
          </div>

          {/* Sub-Pills for Hard Skills (Data Science & AI, Web Development, Databases & Cloud) */}
          {mainTab === 'hard' && (
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
              {hardSkillGroups.map((group, idx) => {
                const Icon = hardCategoryIcons[idx] || Layers;
                const isSelected = hardCategoryIndex === idx;

                return (
                  <button
                    key={group.id}
                    onClick={() => setHardCategoryIndex(idx)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all whitespace-nowrap cursor-pointer ${
                      isSelected
                        ? 'bg-[#E0F2FE] dark:bg-[#202020] text-[#0284C7] dark:text-[#F472B6] font-bold border border-[#0284C7]/30 dark:border-[#F472B6]/30'
                        : 'text-[#64748B] dark:text-[#888] hover:text-[#0F1E36] dark:hover:text-[#F3F3F2] hover:bg-[#F1F5F9] dark:hover:bg-[#1A1A1A]'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{group.title}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* MAIN INTERACTIVE DISPLAY CONTAINER */}
        <div className="bg-white/80 dark:bg-[#141414] rounded-2xl border border-[#BFDBFE]/80 dark:border-[#262626] p-6 sm:p-10 shadow-xs relative overflow-hidden min-h-[420px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            {mainTab === 'hard' ? (
              /* HARD SKILLS GROUP VIEW */
              <motion.div
                key={`hard-${currentHardGroup.id}`}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.25 }}
                className="space-y-8"
              >
                {/* Header Banner */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 pb-6 border-b border-[#BFDBFE]/60 dark:border-[#222]">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#0284C7] dark:text-[#F472B6] font-bold block mb-1">
                      TECHNICAL SKILLS &middot; 0{hardCategoryIndex + 1}/03
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F1E36] dark:text-[#F3F3F2]">
                      {currentHardGroup.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm font-mono text-[#64748B] dark:text-[#888] max-w-md">
                    {currentHardGroup.subtitle}
                  </p>
                </div>

                {/* Numbered Skill Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {currentHardGroup.skills.map((skill) => (
                    <div
                      key={skill.number}
                      className="p-4 sm:p-5 rounded-xl bg-[#F8FAFC] dark:bg-[#1A1A1A] border border-[#E2E8F0] dark:border-[#2A2A2A] hover:border-[#0284C7] dark:hover:border-[#F472B6] transition-all group flex flex-col justify-between space-y-3"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-mono font-bold text-[#0284C7] dark:text-[#F472B6]">
                            {skill.number}
                          </span>
                          {skill.projects && skill.projects.length > 0 && (
                            <span className="text-[10px] font-mono text-[#64748B] dark:text-[#888] hidden sm:inline">
                              Applied: {skill.projects.slice(0, 2).join(', ')}
                            </span>
                          )}
                        </div>

                        <h4 className="text-base sm:text-lg font-bold text-[#0F1E36] dark:text-[#F3F3F2] group-hover:text-[#0284C7] dark:group-hover:text-[#F472B6] transition-colors leading-snug mb-1.5">
                          {skill.name}
                        </h4>

                        <p className="text-xs text-[#475569] dark:text-[#AAA] leading-relaxed font-sans">
                          {skill.description}
                        </p>
                      </div>

                      {/* Tool Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#E2E8F0]/60 dark:border-[#262626]">
                        {skill.tools.map((tool) => (
                          <span
                            key={tool}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-white dark:bg-[#141414] text-[#0F1E36] dark:text-[#DDD] border border-[#E2E8F0] dark:border-[#333]"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              /* SOFT SKILLS VIEW */
              <motion.div
                key="soft-skills"
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.25 }}
                className="space-y-8"
              >
                {/* Header Banner */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 pb-6 border-b border-[#BFDBFE]/60 dark:border-[#222]">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#0284C7] dark:text-[#F472B6] font-bold block mb-1">
                      PROFESSIONAL &middot; 5 CORE CAPABILITIES
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F1E36] dark:text-[#F3F3F2]">
                      Soft Skills
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm font-mono text-[#64748B] dark:text-[#888] max-w-md">
                    Interpersonal communication, collaborative problem-solving,
                    learning agility, and disciplined execution.
                  </p>
                </div>

                {/* 5 Numbered Soft Skills */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {softSkillsList.map((skill) => (
                    <div
                      key={skill.number}
                      className="p-4 sm:p-5 rounded-xl bg-[#F8FAFC] dark:bg-[#1A1A1A] border border-[#E2E8F0] dark:border-[#2A2A2A] hover:border-[#0284C7] dark:hover:border-[#F472B6] transition-all group flex flex-col justify-between space-y-3"
                    >
                      <div>
                        <span className="text-xs font-mono font-bold text-[#0284C7] dark:text-[#F472B6] block mb-2">
                          {skill.number}
                        </span>

                        <h4 className="text-base sm:text-lg font-bold text-[#0F1E36] dark:text-[#F3F3F2] group-hover:text-[#0284C7] dark:group-hover:text-[#F472B6] transition-colors mb-1.5">
                          {skill.name}
                        </h4>

                        <p className="text-xs text-[#475569] dark:text-[#AAA] leading-relaxed font-sans">
                          {skill.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#E2E8F0]/60 dark:border-[#262626]">
                        {skill.applications.map((app) => (
                          <span
                            key={app}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-white dark:bg-[#141414] text-[#0F1E36] dark:text-[#DDD] border border-[#E2E8F0] dark:border-[#333]"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom Pagination & Navigation Controls */}
          <div className="flex items-center justify-between pt-8 mt-8 border-t border-[#BFDBFE]/60 dark:border-[#222]">
            <button
              onClick={handlePrev}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#0F1E36] dark:text-[#F3F3F2] hover:text-[#0284C7] dark:hover:text-[#F472B6] transition-colors cursor-pointer py-1 px-2 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>&larr; Prev</span>
            </button>

            {/* Pagination Step Indicator */}
            <div className="flex items-center gap-2">
              {hardSkillGroups.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setMainTab('hard');
                    setHardCategoryIndex(idx);
                  }}
                  className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                    mainTab === 'hard' && hardCategoryIndex === idx
                      ? 'w-6 bg-[#0284C7] dark:bg-[#F472B6]'
                      : 'bg-[#CBD5E1] dark:bg-[#333]'
                  }`}
                  aria-label={`Go to technical skill page ${idx + 1}`}
                />
              ))}

              <button
                onClick={() => setMainTab('soft')}
                className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                  mainTab === 'soft'
                    ? 'w-6 bg-[#0284C7] dark:bg-[#F472B6]'
                    : 'bg-[#CBD5E1] dark:bg-[#333]'
                }`}
                aria-label="Go to soft skills page"
              />
            </div>

            <button
              onClick={handleNext}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#0F1E36] dark:text-[#F3F3F2] hover:text-[#0284C7] dark:hover:text-[#F472B6] transition-colors cursor-pointer py-1 px-2 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              <span>Next &rarr;</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Global Languages Section */}
        <div className="mt-20 sm:mt-28 pt-12 border-t-2 border-[#0F1E36]/80 dark:border-[#F3F3F2]/80">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-10 gap-2">
            <div className="flex items-center gap-2.5">
              <Globe2 className="w-4 h-4 text-[#0284C7] dark:text-[#F472B6]" />
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F1E36] dark:text-[#F3F3F2]">
                Language Competencies
              </h3>
            </div>
            <span className="text-xs font-mono text-[#64748B] dark:text-[#888] uppercase tracking-wider">
              Trilingual Fluency
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-[#BFDBFE]/60 dark:divide-[#262626]">
            {languagesData.map((lang, idx) => (
              <div
                key={lang.name}
                className={`${
                  idx > 0 ? 'pt-6 md:pt-0 md:pl-10' : ''
                } space-y-3`}
              >
                <div className="flex items-baseline justify-between">
                  <h4 className="text-xl font-bold text-[#0F1E36] dark:text-[#F3F3F2]">
                    {lang.name}
                  </h4>
                  <span className="text-xs font-mono font-bold text-[#0284C7] dark:text-[#F472B6]">
                    {lang.badge}
                  </span>
                </div>

                <div className="text-xs font-mono text-[#64748B] dark:text-[#888]">
                  {lang.nativeScript ? `${lang.nativeScript} \u00B7 ` : ''}
                  {lang.level}
                </div>

                <p className="text-xs sm:text-sm text-[#475569] dark:text-[#AAA] leading-relaxed font-sans">
                  {lang.detail}
                </p>

                <div className="pt-2">
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#64748B] dark:text-[#888] mb-1.5">
                    <span>Fluency Index</span>
                    <span className="font-semibold text-[#0F1E36] dark:text-[#F3F3F2]">
                      {lang.proficiencyScore}%
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-[#E2E8F0] dark:bg-[#222] rounded-full overflow-hidden">
                    <div
                      style={{ width: `${lang.proficiencyScore}%` }}
                      className="h-full bg-[#0F1E36] dark:bg-[#F3F3F2] transition-all duration-700"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
