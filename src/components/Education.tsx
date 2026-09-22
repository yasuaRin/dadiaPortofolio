import React, { useRef } from 'react';
import { educationData } from '../data/education';
import { GraduationCap, MapPin, CheckCircle, Award, BookOpen } from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';

export const Education: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001
  });

  return (
    <section
      ref={containerRef}
      id="education"
      className="py-16 sm:py-28 md:py-36 border-t border-[#BFDBFE]/60 dark:border-[#222] bg-transparent relative transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-20 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 mb-2">
              <GraduationCap className="w-4 h-4 text-[#0284C7] dark:text-[#F472B6]" />
              <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#64748B] dark:text-[#777] font-mono">
                02 — ACADEMIC FOUNDATION
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#0F1E36] dark:text-[#F3F3F2]">
              Academic Path &amp;<br />
              <span className="font-serif italic font-normal pastel-gradient-text">Milestones.</span>
            </h2>
          </motion.div>
        </div>

        {/* Vertical Timeline Architecture */}
        <div className="relative pl-6 sm:pl-12 md:pl-20 space-y-12 sm:space-y-16">
          {/* Animated SVG Progress Line */}
          <div className="absolute left-2 sm:left-4 md:left-6 top-2 bottom-6 w-[2px] bg-[#BFDBFE]/50 dark:bg-[#222]">
            <motion.div
              style={{ scaleY, transformOrigin: 'top' }}
              className="w-full h-full bg-[#0284C7] dark:bg-gradient-to-b dark:from-[#F472B6] dark:via-[#FB7185] dark:to-[#FDA4AF] shadow-[0_0_10px_rgba(244,114,182,0.6)]"
            />
          </div>

          {educationData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30, scale: 0.97 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[23px] sm:-left-[39px] md:-left-[63px] top-1.5 w-3.5 sm:w-4 h-3.5 sm:h-4 rounded-full bg-white dark:bg-[#111] border-2 border-[#0284C7] dark:border-[#F472B6] group-hover:scale-125 group-hover:bg-[#38BDF8] dark:group-hover:bg-[#F472B6] group-hover:border-[#0284C7] dark:group-hover:border-[#FDA4AF] transition-all duration-300 shadow-sm" />

              {/* Timeline Content Block: Direct Editorial Placement */}
              <div className="border-b border-[#BFDBFE]/60 dark:border-[#222] pb-12 transition-all group-hover:pl-2">
                {/* Year & Period Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                  <div className="text-2xl sm:text-4xl font-bold tracking-tighter text-[#0F1E36] dark:text-[#F3F3F2] font-mono">
                    {item.period}
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#64748B] dark:text-[#AAA]">
                    <MapPin className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#F472B6]" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Institution & Degree */}
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#0F1E36] dark:text-[#F3F3F2]">
                  {item.institution}
                </h3>
                <div className="text-base sm:text-lg text-[#475569] dark:text-[#AAA] font-serif italic mt-1 mb-4">
                  {item.degree} &middot; <span className="text-[#0F1E36] dark:text-[#F3F3F2] font-medium not-italic">{item.field}</span>
                </div>

                {/* Specific Notes & Accomplishments */}
                {item.notes && item.notes.length > 0 && (
                  <div className="space-y-2 mt-4 max-w-3xl">
                    {item.notes.map((note, nIdx) => (
                      <motion.div
                        key={nIdx}
                        initial={{ opacity: 0, y: 5 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.1 + nIdx * 0.05 }}
                        className="flex items-start gap-3 text-sm text-[#334155] dark:text-[#AAA] leading-relaxed p-2.5 rounded-xl hover:bg-white/80 dark:hover:bg-[#161616]/60 transition-colors"
                      >
                        <CheckCircle className="w-4 h-4 text-[#0284C7] dark:text-[#F472B6] mt-0.5 shrink-0" />
                        <span>{note}</span>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
