import React, { useState } from 'react';
import { Project } from '../types';
import { ArrowUpRight, Cpu, Layers, Terminal, Sparkles, Activity, CheckCircle2, Target, Lightbulb, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectCascadeViewProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const ProjectCascadeView: React.FC<ProjectCascadeViewProps> = ({
  projects,
  onSelectProject
}) => {
  const [activeId, setActiveId] = useState<string>(projects[0]?.id || '');
  const activeProject = projects.find((p) => p.id === activeId) || projects[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left Column: Interactive Project Narrative Feed */}
      <div className="lg:col-span-7 space-y-6">
        {projects.map((project, idx) => {
          const isSelected = project.id === activeId;
          const numStr = idx < 9 ? `0${idx + 1}` : `${idx + 1}`;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              onMouseEnter={() => setActiveId(project.id)}
              onClick={() => setActiveId(project.id)}
              className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 cursor-pointer ${
                isSelected
                  ? 'bg-white/95 dark:bg-[#161616]/95 border-[#0284C7] dark:border-[#F472B6] shadow-lg ring-1 ring-[#0284C7]/20 dark:ring-[#F472B6]/20'
                  : 'bg-white/70 dark:bg-[#121212]/70 border-[#BFDBFE]/60 dark:border-[#222] hover:border-[#0284C7]/50 dark:hover:border-[#F472B6]/50'
              } backdrop-blur-md`}
            >
              <div className="flex items-center justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-mono font-bold ${isSelected ? 'text-[#0284C7] dark:text-[#F472B6]' : 'text-[#64748B]'}`}>
                    {numStr}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-[#E0F2FE] dark:bg-[#202020] text-[#0369A1] dark:text-[#DDD]">
                    {project.category}
                  </span>
                </div>

                <span className="text-xs font-mono text-[#64748B] dark:text-[#AAA]">
                  {project.year}
                </span>
              </div>

              <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0F1E36] dark:text-[#F3F3F2] group-hover:text-[#0284C7] dark:group-hover:text-[#F472B6] transition-colors">
                {project.title}
              </h4>
              <p className="text-sm font-serif italic text-[#475569] dark:text-[#AAA] mt-0.5 mb-3">
                {project.subtitle}
              </p>
              <p className="text-xs sm:text-sm text-[#334155] dark:text-[#CCC] leading-relaxed line-clamp-2 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#E0F2FE] dark:border-[#222]">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-[#E0F2FE]/70 dark:bg-[#1E1E1E] text-[10px] font-mono text-[#0369A1] dark:text-[#DDD] border border-[#BAE6FD] dark:border-[#2A2A2A]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectProject(project);
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#0F1E36] dark:text-[#F3F3F2] hover:text-[#0284C7] dark:hover:text-[#F472B6] transition-colors cursor-pointer"
                >
                  <span>Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Right Column: Sticky Live Architecture Inspector */}
      <div className="lg:col-span-5 lg:sticky lg:top-28">
        {activeProject && (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0E0E0E] text-[#0F1E36] dark:text-white border border-[#BFDBFE] dark:border-[#202020] shadow-xl space-y-6"
            >
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-[#BFDBFE]/60 dark:border-neutral-800 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-bold pastel-gradient-text">ACTIVE ARCHITECTURE</span>
                </div>
                <span className="text-[#64748B] dark:text-neutral-500 font-bold">{activeProject.id.toUpperCase()}</span>
              </div>

              {/* Core Head */}
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#64748B] dark:text-[#888] block mb-1">
                  SYSTEM OVERVIEW
                </span>
                <h3 className="text-2xl font-bold tracking-tight text-[#0F1E36] dark:text-white">
                  {activeProject.title}
                </h3>
                <p className="text-xs text-[#475569] dark:text-neutral-300 font-serif italic mt-1">
                  {activeProject.subtitle}
                </p>
              </div>

              {/* Live Telemetry Matrix */}
              {activeProject.metrics && (
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#64748B] dark:text-neutral-400 block mb-2 font-bold">
                    Telemetry Highlights
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {activeProject.metrics.map((m, mIdx) => (
                      <div
                        key={mIdx}
                        className="p-2.5 rounded-xl bg-[#E0F2FE]/50 dark:bg-neutral-900 border border-[#BAE6FD] dark:border-neutral-800 text-center"
                      >
                        <div className="text-[9px] font-mono text-[#64748B] dark:text-neutral-400 uppercase truncate">
                          {m.label}
                        </div>
                        <div className="text-sm font-bold text-[#0284C7] dark:text-[#F472B6] mt-0.5 truncate">
                          {m.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Problem vs Approach Peek */}
              <div className="space-y-3 pt-2 text-xs font-mono">
                <div className="p-3.5 rounded-xl bg-[#E0F2FE]/30 dark:bg-neutral-900/90 border border-[#BAE6FD]/80 dark:border-neutral-800 space-y-1">
                  <div className="flex items-center gap-1.5 text-[10px] text-rose-600 dark:text-rose-400 font-bold uppercase">
                    <Target className="w-3 h-3" />
                    <span>Problem Statement</span>
                  </div>
                  <p className="text-[#334155] dark:text-neutral-300 leading-relaxed line-clamp-2">
                    {activeProject.problem}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#E0F2FE]/30 dark:bg-neutral-900/90 border border-[#BAE6FD]/80 dark:border-neutral-800 space-y-1">
                  <div className="flex items-center gap-1.5 text-[10px] text-emerald-600 dark:text-emerald-400 font-bold uppercase">
                    <Lightbulb className="w-3 h-3" />
                    <span>Engineered Approach</span>
                  </div>
                  <p className="text-[#334155] dark:text-neutral-300 leading-relaxed line-clamp-2">
                    {activeProject.approach}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectProject(activeProject)}
                className="w-full group flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-[#0F1E36] dark:bg-[#F3F3F2] text-white dark:text-[#111] font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#1E3A5F] dark:hover:bg-white hover:shadow-lg transition-all cursor-pointer"
              >
                <span>Launch Full Case Study</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};
