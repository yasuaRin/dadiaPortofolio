import React, { useState } from 'react';
import { personalityData } from '../data/personality';
import { languagesData } from '../data/skills';
import { Globe, Sparkles, TrendingUp, Code2, Award, BookOpen } from 'lucide-react';
import { motion, useInView } from 'motion/react';

export const About: React.FC = () => {
  const [activeCuriosityId, setActiveCuriosityId] = useState<string>('data');

  const stats = [
    { label: 'GPA Equivalent', value: '3.9+', detail: 'President University' },
    { label: 'Documented Systems', value: '07', detail: 'Analytics & Fullstack' },
    { label: 'Verified Badges', value: '10+', detail: 'Data & Automation' },
    { label: 'Languages', value: '03', detail: 'ID · EN · JP' }
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-28 md:py-36 border-t border-[#BFDBFE]/60 dark:border-[#222] bg-transparent relative transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
        {/* Main Editorial Storytelling Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Sticky Large Editorial Typography with Scroll Parallax */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#0284C7] dark:bg-[#F472B6]" />
              <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#64748B] dark:text-[#777] font-mono">
                01 — PERSPECTIVE &amp; ETHOS
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-[#0F1E36] dark:text-[#F3F3F2] leading-[1.02]">
              A LITTLE<br />
              ABOUT<br />
              <span className="font-serif italic font-normal pastel-gradient-text">ME.</span>
            </h2>

            <div className="w-16 h-[2px] bg-[#0284C7] dark:bg-gradient-to-r dark:from-[#F472B6] dark:to-[#FDA4AF] my-8" />

            <p className="text-xs sm:text-sm font-mono text-[#475569] dark:text-[#AAA] leading-relaxed max-w-sm">
              Information Systems undergraduate at President University focusing on Data Science, intelligent automation, and human-centered design.
            </p>

            {/* Scroll Telemetry Stat Capsules */}
            <div className="grid grid-cols-2 gap-3 mt-10">
              {stats.map((s, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + idx * 0.08 }}
                  className="p-3.5 rounded-2xl bg-white/85 dark:bg-[#141414]/80 border border-[#BFDBFE]/70 dark:border-[#242424] shadow-xs"
                >
                  <div className="text-xl sm:text-2xl font-bold font-mono tracking-tight text-[#0F1E36] dark:text-[#F3F3F2]">
                    {s.value}
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#64748B] dark:text-[#888] mt-0.5 font-bold truncate">
                    {s.label}
                  </div>
                  <div className="text-[10px] text-[#475569] dark:text-[#AAA] truncate">
                    {s.detail}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Progressive Text Narrative & Deep Explorations */}
          <div className="lg:col-span-7 space-y-16">
            {/* Primary Editorial Narrative */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6 text-base sm:text-lg md:text-xl text-[#334155] dark:text-[#CCC] font-normal leading-relaxed"
            >
              <p>
                My journey lives at the intersection of <strong className="text-[#0F1E36] dark:text-[#FFF] font-semibold">analytical rigor</strong> and <strong className="text-[#0F1E36] dark:text-[#FFF] font-semibold">digital execution</strong>. I don't just analyze datasets or write code in isolation; I connect mathematical signals with actual business decisions.
              </p>

              <p>
                Whether building real-time telemetry platforms like <span className="text-[#0F1E36] dark:text-[#FFF] font-semibold underline decoration-[#0284C7] dark:decoration-[#F472B6] decoration-2 underline-offset-4">VIDHELP</span>, automating multi-platform revenue pipelines, or developing relational enterprise workflows, I focus on systems that are fast, intuitive, and genuinely reliable.
              </p>
            </motion.div>

            {/* INTERACTIVE "WHAT I'M CURIOUS ABOUT" EXPANDING LIST */}
            <div className="pt-10 border-t border-[#BFDBFE]/60 dark:border-[#222]">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#64748B] dark:text-[#777] font-bold block mb-1">
                    01.1 // CORE DRIVERS
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F1E36] dark:text-[#F3F3F2]">
                    What I'm Curious About
                  </h3>
                </div>
              </div>

              {/* Expanding Interactive Rows */}
              <div className="space-y-3">
                {personalityData.map((item, idx) => {
                  const isActive = activeCuriosityId === item.id;
                  const numStr = `0${idx + 1}`;

                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.08 }}
                      whileHover={{ x: 6 }}
                      onMouseEnter={() => setActiveCuriosityId(item.id)}
                      onClick={() => setActiveCuriosityId(item.id)}
                      className={`group border-b border-[#BFDBFE]/60 dark:border-[#222] py-5 sm:py-6 transition-all duration-300 cursor-pointer ${
                        isActive
                          ? 'border-[#0284C7] dark:border-[#F472B6] bg-white/90 dark:bg-[#161616]/90 px-4 sm:px-6 rounded-2xl shadow-xs'
                          : 'opacity-70 hover:opacity-100'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-baseline gap-4 sm:gap-6">
                          <span className="text-xs font-mono font-bold text-[#64748B] dark:text-[#666]">
                            {numStr}
                          </span>
                          <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#0F1E36] dark:text-[#F3F3F2] group-hover:text-[#0284C7] dark:group-hover:text-[#F472B6] transition-colors">
                            {item.title}
                          </span>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="text-xs font-serif italic text-[#64748B] dark:text-[#888] hidden sm:inline">
                            {item.tagline}
                          </span>
                          <span className={`text-sm transition-transform duration-300 ${isActive ? 'rotate-90 text-[#0284C7] dark:text-[#F472B6]' : 'text-[#64748B]'}`}>
                            &rarr;
                          </span>
                        </div>
                      </div>

                      {/* Expanded Narrative & Focus Topics */}
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 pt-4 border-t border-[#E0F2FE] dark:border-[#262626]"
                        >
                          <p className="text-sm sm:text-base text-[#334155] dark:text-[#AAA] leading-relaxed mb-4">
                            {item.detail}
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {item.focusTopics.map((topic, tIdx) => (
                              <span
                                key={tIdx}
                                className="px-2.5 py-1 rounded bg-[#E0F2FE] dark:bg-[#222] text-xs font-medium text-[#0369A1] dark:text-[#DDD]"
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* TRILINGUAL PROFICIENCY ROW */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="pt-10 border-t border-[#BFDBFE]/60 dark:border-[#222]"
            >
              <div className="flex items-center gap-2 mb-6">
                <Globe className="w-4 h-4 text-[#0284C7] dark:text-[#888]" />
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#64748B] dark:text-[#777] font-bold">
                  01.2 // LANGUAGE PROFICIENCY
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {languagesData.map((lang, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -3 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                    className="p-4 rounded-xl bg-white/85 dark:bg-[#141414]/80 border border-[#BFDBFE]/70 dark:border-[#242424] shadow-xs"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-sm text-[#0F1E36] dark:text-[#F3F3F2]">
                        {lang.name}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <div className="text-xs text-[#64748B] dark:text-[#AAA] font-mono">
                      {lang.level} &middot; {lang.detail}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
