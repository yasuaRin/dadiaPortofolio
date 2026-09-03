import React, { useState, useRef } from 'react';
import { Project } from '../types';
import { ArrowUpRight, Cpu, Layers, Terminal, Sparkles, Activity, CheckCircle, BarChart3 } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface Project3DCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
  featured?: boolean;
}

export const Project3DCard: React.FC<Project3DCardProps> = ({
  project,
  index,
  onSelect,
  featured = false
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'metrics' | 'architecture'>('overview');
  const [isHovered, setIsHovered] = useState(false);

  // 3D Tilt Physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), {
    stiffness: 300,
    damping: 25
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), {
    stiffness: 300,
    damping: 25
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const numStr = index < 9 ? `0${index + 1}` : `${index + 1}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 35, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.55,
        delay: (index % 3) * 0.1,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={`relative perspective-1000 ${featured ? 'lg:col-span-2' : 'col-span-1'}`}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d'
        }}
        className={`group h-full rounded-3xl border transition-all duration-300 flex flex-col justify-between overflow-hidden relative ${
          featured
            ? 'bg-white/95 dark:bg-[#151515]/95 border-[#BAE6FD] dark:border-[#2C2C2C] shadow-md hover:shadow-2xl hover:border-[#0284C7] dark:hover:border-[#F472B6]'
            : 'bg-white/85 dark:bg-[#141414]/85 border-[#BFDBFE]/70 dark:border-[#242424] shadow-sm hover:shadow-xl hover:border-[#0284C7] dark:hover:border-[#F472B6]'
        } backdrop-blur-md`}
      >
        {/* Top Specular Glow on Hover */}
        <div
          className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500 bg-gradient-to-b from-[#38BDF8]/20 via-[#60A5FA]/10 to-transparent dark:from-[#F472B6]/20 dark:via-[#FDA4AF]/10 z-0"
          aria-hidden="true"
        />

        {/* Card Header */}
        <div className="p-5 sm:p-7 md:p-8 relative z-10 space-y-4">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-mono font-bold text-[#64748B] dark:text-[#777]">
                {numStr}
              </span>
              <span className="w-1.5 h-1.5 rounded-full pastel-gradient-bg" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#64748B] dark:text-[#AAA]">
                {project.year || '2025'}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {project.featured && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#E0F2FE] dark:bg-[#F472B6]/15 border border-[#BAE6FD] dark:border-[#F472B6]/40 text-[#0284C7] dark:text-[#F472B6] text-[10px] font-mono font-bold">
                  <Sparkles className="w-3 h-3 text-[#0284C7] dark:text-[#F472B6]" />
                  <span className="hidden xs:inline">FEATURED</span>
                </span>
              )}
              <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-[#E0F2FE]/70 dark:bg-[#202020] text-[#0369A1] dark:text-[#DDD] font-semibold truncate max-w-[120px]">
                {project.category.split('·')[0].trim()}
              </span>
            </div>
          </div>

          {/* Title & Subtitle */}
          <div>
            <h3
              onClick={() => onSelect(project)}
              className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#0F1E36] dark:text-[#F3F3F2] group-hover:text-[#0284C7] dark:group-hover:text-[#F472B6] transition-colors cursor-pointer flex items-center justify-between gap-2"
            >
              <span>{project.title}</span>
              <ArrowUpRight className="w-5 h-5 text-[#64748B] dark:text-[#AAA] group-hover:text-[#0284C7] dark:group-hover:text-[#F472B6] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0" />
            </h3>
            <p className="text-xs sm:text-sm font-serif italic text-[#475569] dark:text-[#AAA] mt-1 line-clamp-1">
              {project.subtitle}
            </p>
            {project.role && (
              <p className="text-[11px] font-mono font-medium text-[#0284C7] dark:text-[#F472B6] mt-1 line-clamp-1">
                {project.role}
              </p>
            )}
          </div>

          {/* Live Micro-Tab Navigator */}
          <div className="pt-2 flex items-center gap-1 border-b border-[#E0F2FE] dark:border-[#242424] text-[11px] font-mono">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-1.5 px-2 font-medium transition-colors cursor-pointer relative ${
                activeTab === 'overview'
                  ? 'text-[#0284C7] dark:text-[#F472B6] font-bold border-b-2 border-[#0284C7] dark:border-[#F472B6]'
                  : 'text-[#64748B] dark:text-[#777] hover:text-[#0F1E36] dark:hover:text-white'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('metrics')}
              className={`pb-1.5 px-2 font-medium transition-colors cursor-pointer relative ${
                activeTab === 'metrics'
                  ? 'text-[#0284C7] dark:text-[#F472B6] font-bold border-b-2 border-[#0284C7] dark:border-[#F472B6]'
                  : 'text-[#64748B] dark:text-[#777] hover:text-[#0F1E36] dark:hover:text-white'
              }`}
            >
              Telemetry
            </button>
            <button
              onClick={() => setActiveTab('architecture')}
              className={`pb-1.5 px-2 font-medium transition-colors cursor-pointer relative ${
                activeTab === 'architecture'
                  ? 'text-[#0284C7] dark:text-[#F472B6] font-bold border-b-2 border-[#0284C7] dark:border-[#F472B6]'
                  : 'text-[#64748B] dark:text-[#777] hover:text-[#0F1E36] dark:hover:text-white'
              }`}
            >
              Stack
            </button>
          </div>

          {/* Dynamic Tab Body */}
          <div className="min-h-[85px] sm:min-h-[92px] pt-1">
            {activeTab === 'overview' && (
              <p className="text-xs sm:text-sm text-[#334155] dark:text-[#BBB] leading-relaxed line-clamp-3">
                {project.description}
              </p>
            )}

            {activeTab === 'metrics' && (
              <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                {project.metrics && project.metrics.length > 0 ? (
                  project.metrics.map((m, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-1.5 sm:p-2 rounded-xl bg-[#E0F2FE]/60 dark:bg-[#1C1C1C] border border-[#BAE6FD] dark:border-[#282828] text-center"
                    >
                      <div className="text-[8px] sm:text-[9px] font-mono uppercase text-[#64748B] dark:text-[#AAA] truncate">
                        {m.label}
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-[#0F1E36] dark:text-[#F3F3F2] mt-0.5 truncate">
                        {m.value}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-3 text-xs font-mono text-[#64748B] py-2">
                    Verified architecture benchmarks available in case study.
                  </div>
                )}
              </div>
            )}

            {activeTab === 'architecture' && (
              <div className="space-y-2">
                <div className="flex flex-wrap gap-1.5 max-h-[75px] overflow-y-auto no-scrollbar">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md bg-[#E0F2FE]/70 dark:bg-[#1E1E1E] text-[10px] font-mono text-[#0369A1] dark:text-[#DDD] border border-[#BAE6FD] dark:border-[#2A2A2A]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Card Footer: Tech tags & Action Button */}
        <div className="p-5 sm:p-7 md:p-8 pt-0 relative z-10 mt-auto">
          <div className="pt-4 border-t border-[#E0F2FE] dark:border-[#242424] flex items-center justify-between gap-3">
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#64748B] dark:text-[#AAA] truncate">
              <Terminal className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#F472B6] shrink-0" />
              <span className="truncate">{project.technologies.slice(0, 3).join(' · ')}</span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-[#0284C7]/40 dark:border-[#F472B6]/40 text-[#0284C7] dark:text-[#F472B6] hover:bg-[#0284C7] hover:text-white dark:hover:bg-[#F472B6] dark:hover:text-[#111] text-[10px] font-mono font-bold uppercase tracking-wider transition-all cursor-pointer"
                >
                  <span>Live</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              )}

              <button
                onClick={() => onSelect(project)}
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#0F1E36] dark:bg-[#F472B6] text-white dark:text-[#111] text-[10px] font-mono font-bold uppercase tracking-wider hover:bg-[#1E3A5F] dark:hover:bg-[#FDA4AF] transition-colors cursor-pointer"
              >
                <span>Inspect</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
