import React, { useState, useMemo } from 'react';
import { skillCategoriesData, languagesData } from '../data/skills';
import {
  Sparkles,
  Database,
  Bot,
  Code2,
  Zap,
  Briefcase,
  Globe2,
  ArrowUpRight,
  Compass,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(skillCategoriesData[0].id);
  const [activeSkillName, setActiveSkillName] = useState<string>(skillCategoriesData[0].skills[0].name);

  // Organic domain themes with glowing node colors
  const domainMeta: Record<string, {
    icon: React.ReactNode;
    color: string;
    lightGlow: string;
    darkGlow: string;
    focusTitle: string;
    shortLabel: string;
  }> = {
    data: {
      icon: <Database className="w-4 h-4" />,
      color: '#0284C7',
      lightGlow: 'rgba(2, 132, 199, 0.15)',
      darkGlow: 'rgba(56, 189, 248, 0.25)',
      focusTitle: 'Data & Analytics',
      shortLabel: 'Data & Insights'
    },
    ai: {
      icon: <Bot className="w-4 h-4" />,
      color: '#8B5CF6',
      lightGlow: 'rgba(139, 92, 246, 0.15)',
      darkGlow: 'rgba(192, 132, 252, 0.25)',
      focusTitle: 'AI & Smart Tools',
      shortLabel: 'Smart AI'
    },
    development: {
      icon: <Code2 className="w-4 h-4" />,
      color: '#10B981',
      lightGlow: 'rgba(16, 185, 129, 0.15)',
      darkGlow: 'rgba(52, 211, 153, 0.25)',
      focusTitle: 'Websites & Apps',
      shortLabel: 'Web & Apps'
    },
    automation: {
      icon: <Zap className="w-4 h-4" />,
      color: '#F59E0B',
      lightGlow: 'rgba(245, 158, 11, 0.15)',
      darkGlow: 'rgba(251, 191, 36, 0.25)',
      focusTitle: 'Busywork Automation',
      shortLabel: 'Automation'
    },
    business: {
      icon: <Briefcase className="w-4 h-4" />,
      color: '#EC4899',
      lightGlow: 'rgba(236, 72, 153, 0.15)',
      darkGlow: 'rgba(244, 114, 182, 0.25)',
      focusTitle: 'Product & Planning',
      shortLabel: 'Product'
    }
  };

  // Active category data
  const currentCategory = useMemo(() => {
    return skillCategoriesData.find((c) => c.id === activeCategory) || skillCategoriesData[0];
  }, [activeCategory]);

  // Active selected skill
  const selectedSkill = useMemo(() => {
    const found = currentCategory.skills.find((s) => s.name === activeSkillName);
    return found || currentCategory.skills[0];
  }, [currentCategory, activeSkillName]);

  const handleSelectCategory = (catId: string) => {
    setActiveCategory(catId);
    const cat = skillCategoriesData.find((c) => c.id === catId);
    if (cat && cat.skills.length > 0) {
      setActiveSkillName(cat.skills[0].name);
    }
  };

  return (
    <section
      id="skills"
      className="py-16 sm:py-24 md:py-32 border-t border-[#BFDBFE]/60 dark:border-[#222] bg-transparent relative transition-colors overflow-hidden"
    >
      {/* Dynamic Background Ambient Constellation Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full blur-[140px] pointer-events-none transition-all duration-700 opacity-60 dark:opacity-40"
        style={{
          background: `radial-gradient(circle, ${domainMeta[activeCategory]?.color || '#0284C7'} 0%, transparent 70%)`
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-white/80 dark:bg-[#161616] border border-[#BFDBFE]/80 dark:border-[#282828] backdrop-blur-md shadow-xs">
              <Compass className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#F472B6] animate-spin-slow" />
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#64748B] dark:text-[#999] font-mono">
                04 — CAPABILITIES CONSTELLATION
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-[#0F1E36] dark:text-[#F3F3F2] leading-[1.05]">
              Core Tools &amp;<br />
              <span className="font-serif italic font-normal pastel-gradient-text">How I Create Impact.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base text-[#475569] dark:text-[#AAA] max-w-md leading-relaxed font-sans"
          >
            An organic, interactive landscape of tools I use daily. Tap any sphere or capsule to explore its real-world purpose.
          </motion.p>
        </div>

        {/* 1. Fluid Domain Selector Ribbon (Pill Capsules) */}
        <div className="flex items-center justify-start lg:justify-center gap-2.5 sm:gap-3 overflow-x-auto pb-4 mb-10 sm:mb-14 no-scrollbar">
          {skillCategoriesData.map((cat) => {
            const isSelected = activeCategory === cat.id;
            const meta = domainMeta[cat.id] || domainMeta.data;

            return (
              <motion.button
                key={cat.id}
                onClick={() => handleSelectCategory(cat.id)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className={`relative px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2.5 whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? 'text-white dark:text-[#0F1E36] font-semibold shadow-lg'
                    : 'text-[#64748B] dark:text-[#AAA] hover:text-[#0F1E36] dark:hover:text-white bg-white/40 dark:bg-white/[0.04] backdrop-blur-md'
                }`}
                style={{
                  background: isSelected ? meta.color : undefined
                }}
              >
                {/* Active Glowing Pulse */}
                {isSelected && (
                  <motion.span
                    layoutId="activeBubbleGlow"
                    className="absolute inset-0 rounded-full blur-md opacity-40 pointer-events-none -z-10"
                    style={{ background: meta.color }}
                  />
                )}
                <span>{meta.icon}</span>
                <span>{meta.shortLabel}</span>
                <span className="text-[10px] font-mono opacity-80 px-1.5 py-0.5 rounded-full bg-black/15 dark:bg-white/20">
                  {cat.skills.length}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* 2. Interactive Constellation Canvas: Fluid Organic Capsules + Live Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Left Canvas: Floating Interactive Skill Capsules */}
          <div className="lg:col-span-7 flex flex-col justify-center py-4">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-mono tracking-widest text-[#64748B] dark:text-[#888] uppercase font-bold">
                {currentCategory.name} • {domainMeta[activeCategory]?.focusTitle}
              </span>
              <span className="text-[11px] font-mono text-[#0284C7] dark:text-[#F472B6]">
                ✦ TAP A TOPIC
              </span>
            </div>

            {/* Interactive Organic Clusters */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3.5 items-center">
              {currentCategory.skills.map((skill, sIdx) => {
                const isSelected = activeSkillName === skill.name;
                const meta = domainMeta[activeCategory] || domainMeta.data;

                return (
                  <motion.button
                    key={skill.name}
                    onClick={() => setActiveSkillName(skill.name)}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: sIdx * 0.04 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group relative px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-3 cursor-pointer select-none ${
                      isSelected
                        ? 'bg-[#0F1E36] text-white dark:bg-white dark:text-[#0F1E36] shadow-md ring-2 ring-offset-2 ring-offset-transparent'
                        : 'bg-white/70 dark:bg-[#181818]/70 text-[#334155] dark:text-[#E2E8F0] hover:bg-white dark:hover:bg-[#222] backdrop-blur-md'
                    }`}
                    style={{
                      borderColor: isSelected ? meta.color : undefined
                    }}
                  >
                    {/* Pulsing indicator orb */}
                    <span
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        isSelected ? 'scale-125' : 'opacity-60 group-hover:opacity-100'
                      }`}
                      style={{ background: meta.color }}
                    />

                    <span>{skill.name}</span>

                    {/* Concise Experience Level Pill */}
                    <span
                      className={`text-[9px] font-mono uppercase px-2 py-0.5 rounded-full ${
                        isSelected
                          ? 'bg-white/20 dark:bg-black/15 text-white dark:text-black font-bold'
                          : 'bg-[#E0F2FE] dark:bg-white/[0.08] text-[#0369A1] dark:text-[#AAA]'
                      }`}
                    >
                      {skill.level}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Quick Human-Friendly Summary Banner */}
            <div className="mt-8 pt-6 border-t border-[#BFDBFE]/50 dark:border-[#262626] flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-[#0284C7] dark:text-[#F472B6] shrink-0" />
              <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#999] leading-relaxed">
                {currentCategory.tagline}
              </p>
            </div>
          </div>

          {/* Right Spotlight: Clean, Concise Floating Aura Focus */}
          <div className="lg:col-span-5 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedSkill.name}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="relative p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-[#151515]/90 backdrop-blur-xl border border-[#BFDBFE]/80 dark:border-[#282828] shadow-lg"
              >
                {/* Subtle Top Accent Beacon */}
                <div className="flex items-center justify-between pb-4 border-b border-[#BFDBFE]/50 dark:border-[#222]">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                      <span
                        className="animate-radar-pulse absolute inline-flex h-full w-full rounded-full"
                        style={{ background: domainMeta[activeCategory]?.color }}
                      />
                      <span
                        className="relative inline-flex rounded-full h-2 w-2"
                        style={{ background: domainMeta[activeCategory]?.color }}
                      />
                    </span>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#64748B] dark:text-[#999]">
                      SPOTLIGHT
                    </span>
                  </div>

                  <span
                    className="text-xs font-mono font-bold px-3 py-1 rounded-full text-white dark:text-[#111]"
                    style={{ background: domainMeta[activeCategory]?.color }}
                  >
                    {selectedSkill.level}
                  </span>
                </div>

                {/* Skill Name */}
                <div className="my-5">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F1E36] dark:text-[#F3F3F2]">
                    {selectedSkill.name}
                  </h3>
                  <p className="text-sm sm:text-base text-[#475569] dark:text-[#CCC] leading-relaxed mt-2.5 font-sans">
                    {selectedSkill.description}
                  </p>
                </div>

                {/* What I Work With (Tags) */}
                {selectedSkill.tags && (
                  <div className="space-y-2 pt-4 border-t border-[#BFDBFE]/50 dark:border-[#222]">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#64748B] dark:text-[#888] font-bold">
                      WHAT I WORK WITH:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedSkill.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-full bg-[#E0F2FE]/70 dark:bg-white/[0.06] text-xs font-medium text-[#0369A1] dark:text-[#E2E8F0]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Where Applied */}
                {selectedSkill.projects && selectedSkill.projects.length > 0 && (
                  <div className="space-y-2 pt-4 border-t border-[#BFDBFE]/50 dark:border-[#222]">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#64748B] dark:text-[#888] font-bold">
                      PROVEN IN:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedSkill.projects.map((proj, pIdx) => (
                        <span
                          key={pIdx}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-[#202020] border border-[#BFDBFE]/60 dark:border-[#333] text-xs font-semibold text-[#0F1E36] dark:text-[#F3F3F2]"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                          <span>{proj}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* 3. Global Languages: Flowing Horizontal Stream */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 pt-12 border-t border-[#BFDBFE]/60 dark:border-[#222]"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-3">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-full bg-[#E0F2FE] dark:bg-white/[0.06] text-[#0284C7] dark:text-[#F472B6]">
                <Globe2 className="w-4 h-4" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0F1E36] dark:text-[#F3F3F2]">
                Languages I Speak &amp; Work In
              </h3>
            </div>

            <span className="text-xs font-mono text-[#64748B] dark:text-[#AAA]">
              Trilingual Communication
            </span>
          </div>

          {/* Organic Language Stream */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {languagesData.map((lang, lIdx) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: lIdx * 0.1 }}
                whileHover={{ y: -3 }}
                className="p-5 rounded-3xl bg-white/70 dark:bg-[#141414]/70 backdrop-blur-md border border-[#BFDBFE]/60 dark:border-[#262626] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-serif italic text-[#64748B] dark:text-[#AAA]">
                      {lang.nativeScript}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#E0F2FE] dark:bg-[#F472B6]/15 text-[10px] font-mono font-bold text-[#0284C7] dark:text-[#F472B6]">
                      {lang.badge}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-[#0F1E36] dark:text-[#F3F3F2]">
                    {lang.name}
                  </h4>
                  <span className="text-xs font-mono text-[#0284C7] dark:text-[#F472B6] font-semibold block mb-2">
                    {lang.level}
                  </span>

                  <p className="text-xs text-[#475569] dark:text-[#AAA] leading-relaxed mb-4 font-sans">
                    {lang.detail}
                  </p>
                </div>

                <div className="space-y-1.5 pt-3 border-t border-[#BFDBFE]/40 dark:border-[#222]">
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#64748B] dark:text-[#888]">
                    <span>Fluency</span>
                    <span className="font-bold text-[#0F1E36] dark:text-[#F3F3F2]">
                      {lang.proficiencyScore}%
                    </span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-[#E0F2FE] dark:bg-[#222] overflow-hidden">
                    <div
                      style={{ width: `${lang.proficiencyScore}%` }}
                      className="h-full rounded-full bg-[#0284C7] dark:bg-[#F472B6]"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
