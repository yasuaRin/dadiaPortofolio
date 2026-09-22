import React from 'react';
import { motion } from 'motion/react';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-16 sm:py-24 md:py-32 border-t border-[#BFDBFE]/60 dark:border-[#222] bg-transparent relative transition-colors"
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

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#0F1E36] dark:text-[#F3F3F2] leading-[1.1]">
              A LITTLE<br />
              ABOUT<br />
              <span className="font-serif italic font-normal pastel-gradient-text">ME.</span>
            </h2>

            <div className="w-12 h-[2px] bg-[#0284C7] dark:bg-gradient-to-r dark:from-[#F472B6] dark:to-[#FDA4AF] my-4" />
          </motion.div>

          {/* Right Column: Progressive Text Narrative */}
          <div className="lg:col-span-7 space-y-6">
            {/* Primary Editorial Narrative */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4 text-xs sm:text-sm md:text-base text-[#334155] dark:text-[#CCC] font-normal leading-relaxed bg-white/50 dark:bg-[#141414]/50 border border-[#BAE6FD]/60 dark:border-[#222] p-6 sm:p-8 rounded-2xl backdrop-blur-sm"
            >
              <p>
                Hi, I’m <strong className="text-[#0F1E36] dark:text-[#FFF] font-semibold">Dadia</strong>. I’m passionate about <strong className="text-[#0F1E36] dark:text-[#FFF] font-semibold">technology, data, and business</strong>, and I enjoy exploring different fields instead of sticking to just one.
              </p>

              <p>
                I like learning by doing—whether that means building something, working with data, exploring AI, or finding better ways to solve a problem. I’m always curious about what I can learn next and how I can turn that knowledge into something useful.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
