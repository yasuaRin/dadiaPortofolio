import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import avatarImg from '../assets/images/profile_avatar_1788084076128.jpg';

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
      className="relative min-h-[85vh] sm:min-h-[90vh] pt-4 sm:pt-8 pb-12 sm:pb-16 px-4 sm:px-8 md:px-12 flex flex-col justify-between overflow-hidden bg-transparent"
    >
      {/* Background Editorial Watermark */}
      <div className="absolute top-1/3 -right-20 pointer-events-none select-none text-[18vw] sm:text-[16vw] font-bold text-[#0F1E36]/[0.03] dark:text-white/[0.02] tracking-tighter uppercase font-sans">
        SYSTEMS
      </div>

      {/* Top Editorial Eyebrow Bar */}
      <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 pb-4 sm:pb-6 border-b border-[#BFDBFE]/60 dark:border-[#222]">
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

      {/* Main Editorial Layout */}
      <div className="max-w-4xl mx-auto w-full my-auto py-6 sm:py-10 flex flex-col items-center text-center">
        {/* High Quality Portrait Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-5 sm:mb-6 group"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#0284C7]/20 via-[#38BDF8]/20 to-[#F472B6]/25 dark:from-[#38BDF8]/20 dark:to-[#F472B6]/30 blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          {/* Avatar Container with Sleek Dual Border */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full p-1 bg-white/90 dark:bg-[#1A1A1A] border-2 border-[#BAE6FD] dark:border-[#F472B6]/40 shadow-lg overflow-hidden">
            <img
              src={avatarImg}
              alt="Ni Putu Dadia Yasuarini"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-full transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>

          {/* Active Status Beacon Badge */}
          <div
            className="absolute bottom-1 right-1 flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white dark:bg-[#111] border-2 border-white dark:border-[#111] shadow-sm"
            title="Available for initiatives"
          >
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500 animate-pulse" />
          </div>
        </motion.div>

        {/* Greeting Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xs sm:text-sm font-mono tracking-[0.3em] uppercase text-[#64748B] dark:text-[#777] mb-2"
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
          <h1 className="text-[clamp(3.2rem,9vw,8rem)] font-bold tracking-tighter leading-[0.92] text-[#0F1E36] dark:text-[#F3F3F2]">
            DADIA<span className="pastel-gradient-text">.</span>
          </h1>
          <div className="text-xl sm:text-3xl md:text-4xl text-[#475569] dark:text-[#AAA] font-serif italic mt-3 sm:mt-4 tracking-tight">
            Ni Putu Dadia Yasuarini
          </div>
        </motion.div>

        {/* Editorial Philosophy Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-base sm:text-xl text-[#334155] dark:text-[#AAA] font-normal leading-relaxed mt-6 max-w-2xl"
        >
          Information Systems &middot; Data Analytics &middot; AI Solutions. Bridging business context with modern computing to build clean, purposeful systems.
        </motion.p>

        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-8 pt-6 border-t border-[#BFDBFE]/60 dark:border-[#222] w-full max-w-md">
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            onClick={() => onNavigate('work')}
            id="hero-explore-work-btn"
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-[#0F1E36] dark:bg-[#F472B6] text-white dark:text-[#111] rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#1E3A5F] dark:hover:bg-[#FDA4AF] transition-colors cursor-pointer shadow-sm"
          >
            <span>Explore Work</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            onClick={() => onNavigate('contact')}
            id="hero-contact-btn"
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#BAE6FD] dark:border-[#333] hover:border-[#0284C7] dark:hover:border-[#F472B6] bg-white/85 dark:bg-[#161616]/80 backdrop-blur-sm rounded-full text-xs font-semibold text-[#0F1E36] dark:text-[#F3F3F2] tracking-wider transition-colors cursor-pointer"
          >
            <span>Let's talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.button>
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
