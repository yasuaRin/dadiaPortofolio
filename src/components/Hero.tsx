import React, { useState, useEffect, useRef } from 'react';
import { AbstractDataNodes } from './AbstractDataNodes';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const heroRef = useRef<HTMLElement>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20; // -10px to +10px
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen pt-24 sm:pt-36 pb-12 sm:pb-20 px-4 sm:px-8 md:px-12 flex flex-col justify-between overflow-hidden bg-transparent"
    >
      {/* Background Editorial Watermark */}
      <div className="absolute top-1/3 -right-20 pointer-events-none select-none text-[18vw] sm:text-[16vw] font-bold text-[#0F1E36]/[0.03] dark:text-white/[0.02] tracking-tighter uppercase font-sans">
        SYSTEMS
      </div>

      {/* Top Editorial Eyebrow Bar */}
      <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 pb-6 sm:pb-8 border-b border-[#BFDBFE]/60 dark:border-[#222]">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#64748B] dark:text-[#999]">
            AVAILABLE FOR DATA &amp; AI INITIATIVES
          </span>
        </div>

        <div className="text-[10px] sm:text-[11px] font-mono tracking-widest text-[#64748B] dark:text-[#777]">
          LOCATION: INDONESIA &middot; 2026
        </div>
      </div>

      {/* Main Editorial Grid: Asymmetrical Layout */}
      <div className="max-w-7xl mx-auto w-full my-auto py-8 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Oversized Typography with Mouse Parallax */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Greeting Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs sm:text-sm font-mono tracking-[0.3em] uppercase text-[#64748B] dark:text-[#777] mb-2 sm:mb-3"
          >
            HELLO, I'M
          </motion.div>

          {/* Giant Typographic Title with Parallax */}
          <motion.div
            style={{
              transform: `translate3d(${-mouseOffset.x * 0.8}px, ${-mouseOffset.y * 0.8}px, 0)`
            }}
            className="transition-transform duration-150 ease-out"
          >
            <h1 className="text-[clamp(3rem,8vw,7.8rem)] font-bold tracking-tighter leading-[0.92] text-[#0F1E36] dark:text-[#F3F3F2]">
              DADIA<span className="pastel-gradient-text">.</span>
            </h1>
            <div className="text-lg sm:text-2xl md:text-3xl text-[#475569] dark:text-[#AAA] font-serif italic mt-2 sm:mt-4 tracking-tight">
              Ni Putu Dadia Yasuarini
            </div>
          </motion.div>

          {/* Editorial Philosophy Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm sm:text-lg md:text-xl text-[#334155] dark:text-[#AAA] font-normal leading-relaxed mt-4 sm:mt-6 max-w-xl"
          >
            I turn data, technology, and ideas into useful solutions. Bridging business context with modern computing to build clean, purposeful systems.
          </motion.p>

          {/* Actions Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-6 sm:mt-8 pt-6 border-t border-[#BFDBFE]/60 dark:border-[#222]">
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              onClick={() => onNavigate('work')}
              id="hero-explore-work-btn"
              className="group inline-flex items-center justify-center gap-3 px-6 py-3.5 sm:py-3 bg-[#0F1E36] dark:bg-[#F472B6] text-white dark:text-[#111] rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#1E3A5F] dark:hover:bg-[#FDA4AF] transition-colors cursor-pointer shadow-sm"
            >
              <span>Explore Selected Work</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              onClick={() => onNavigate('contact')}
              id="hero-contact-btn"
              className="group inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:py-3 border border-[#BAE6FD] dark:border-[#333] hover:border-[#0284C7] dark:hover:border-[#F472B6] bg-white/85 dark:bg-[#161616]/80 backdrop-blur-sm rounded-full text-xs font-semibold text-[#0F1E36] dark:text-[#F3F3F2] tracking-wider transition-colors cursor-pointer"
            >
              <span>Let's talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.button>
          </div>
        </div>

        {/* Right Column: Interactive Spatial Status & Disciplines */}
        <div className="lg:col-span-5 flex flex-col gap-4 mt-4 lg:mt-0">
          {/* Asymmetric Core Disciplines Statement */}
          <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/80 dark:bg-[#141414]/80 backdrop-blur-md border border-[#BFDBFE]/70 dark:border-[#262626] shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#64748B] dark:text-[#777] font-bold">
                CORE DISCIPLINES
              </span>
              <span className="text-[10px] font-mono font-bold pastel-gradient-text">
                SYSTEMS ARCHITECTURE
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs sm:text-sm font-semibold text-[#0F1E36] dark:text-[#F3F3F2] font-mono">
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#E0F2FE]/50 dark:bg-white/[0.03]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] dark:bg-[#F472B6] shrink-0" />
                <span>Information Systems</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#E0F2FE]/50 dark:bg-white/[0.03]">
                <span className="w-1.5 h-1.5 rounded-full pastel-gradient-bg shrink-0" />
                <span>Data &amp; Analytics</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#E0F2FE]/50 dark:bg-white/[0.03]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#64748B] dark:bg-[#888] shrink-0" />
                <span>Applied AI / ML</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#E0F2FE]/50 dark:bg-white/[0.03]">
                <span className="w-1.5 h-1.5 rounded-full pastel-gradient-bg shrink-0" />
                <span>Digital Products</span>
              </div>
            </div>
          </div>

          {/* Interactive Physics Ambient Feedback Card */}
          <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/80 dark:bg-[#141414]/80 backdrop-blur-md border border-[#BFDBFE]/70 dark:border-[#262626] shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-[#BFDBFE]/60 dark:border-[#262626] text-[10px] font-mono text-[#64748B] dark:text-[#777]">
              <span className="font-bold text-[#0F1E36] dark:text-[#F3F3F2] tracking-wider uppercase">
                SPATIAL PHYSICS ENGINE
              </span>
              <span className="pastel-gradient-text font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full pastel-gradient-bg animate-ping" />
                CANVAS ACTIVE
              </span>
            </div>

            <p className="text-xs font-mono text-[#475569] dark:text-[#AAA] mt-4 leading-relaxed">
              The constellation particles span the full background. Move your cursor or tap anywhere across the viewport to generate interactive impulse shockwaves.
            </p>

            <div className="mt-4 pt-3 border-t border-[#BFDBFE]/60 dark:border-[#262626] flex items-center justify-between text-[10px] font-mono text-[#64748B] dark:text-[#777]">
              <span>IMPULSE REPULSION</span>
              <span className="text-[#0F1E36] dark:text-[#F3F3F2] font-bold">TOUCH / MOVE ANYWHERE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator with Vertical Rule */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between pt-6 border-t border-[#BFDBFE]/60 dark:border-[#222] text-xs font-mono text-[#64748B] dark:text-[#777]">
        <div className="flex items-center gap-3">
          <span className="text-[#0F1E36] dark:text-[#F3F3F2] font-bold">01</span>
          <div className="w-8 h-[1px] bg-[#BAE6FD] dark:bg-[#333]" />
          <span>SCROLL TO EXPLORE</span>
        </div>

        <motion.button
          whileHover={{ x: 3 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          onClick={() => onNavigate('about')}
          className="inline-flex items-center gap-2 hover:text-[#0F1E36] dark:hover:text-white transition-colors focus:outline-none cursor-pointer"
        >
          <span>CONTINUE</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </motion.button>
      </div>
    </section>
  );
};
