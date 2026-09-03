import React, { useEffect } from 'react';
import { Project } from '../types';
import { ArrowLeft, Target, Lightbulb, Code, TrendingUp, CheckCircle, ExternalLink, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectDetailViewProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject?: (project: Project) => void;
  allProjects?: Project[];
}

export const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({
  project,
  onClose,
  onSelectProject,
  allProjects = []
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];

  return (
    <AnimatePresence>
      <motion.div
        key={project.id}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-50 bg-white dark:bg-[#0D0D0D] text-[#0F1E36] dark:text-[#F3F3F2] overflow-y-auto"
      >
        {/* Top Sticky Navigation Bar */}
        <div className="sticky top-0 bg-white/95 dark:bg-[#0D0D0D]/95 backdrop-blur-md border-b border-[#BFDBFE]/70 dark:border-[#222] z-30 px-4 sm:px-8 md:px-12 py-3 sm:py-4 flex items-center justify-between">
          <motion.button
            whileHover={{ x: -3 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            onClick={onClose}
            id="detail-back-btn"
            className="group inline-flex items-center gap-2 sm:gap-3 text-xs font-bold uppercase tracking-widest text-[#0F1E36] dark:text-[#F3F3F2] hover:text-[#0284C7] dark:hover:text-[#F472B6] transition-colors focus:outline-none cursor-pointer py-1"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            <span>Back to Work</span>
          </motion.button>

          <div className="flex items-center gap-3 sm:gap-4 text-xs font-mono text-[#64748B] dark:text-[#AAA]">
            <span className="hidden sm:inline">
              PROJECT {currentIndex >= 0 ? `0${currentIndex + 1}` : '01'} / 0{allProjects.length || 7}
            </span>
            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-full hover:bg-[#E0F2FE] dark:hover:bg-[#1E1E1E] text-[#0F1E36] dark:text-[#F3F3F2] transition-colors cursor-pointer"
              aria-label="Close case study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Editorial Case Study Content Container */}
        <div className="max-w-5xl mx-auto px-4 sm:px-8 md:px-12 py-8 sm:py-16 md:py-20 space-y-12 sm:space-y-16">
          {/* Header Banner */}
          <div className="space-y-4 border-b border-[#BFDBFE]/60 dark:border-[#222] pb-12">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest px-3 py-1 bg-[#0284C7] dark:bg-[#F472B6] text-white dark:text-[#111] rounded">
                {project.category}
              </span>
              {project.year && (
                <span className="text-xs font-mono text-[#64748B] dark:text-[#AAA]">
                  RELEASED {project.year}
                </span>
              )}
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#0F1E36] dark:text-[#F3F3F2]">
              {project.title}
            </h1>
            <p className="text-xl sm:text-2xl text-[#475569] dark:text-[#AAA] font-serif italic max-w-3xl">
              {project.subtitle}
            </p>

            {project.role && (
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono">
                <span className="text-[#64748B] dark:text-[#888] font-bold">ROLE:</span>
                <span className="px-3 py-1 rounded-full bg-[#E0F2FE] dark:bg-[#1E1E1E] text-[#0284C7] dark:text-[#F472B6] font-semibold">
                  {project.role}
                </span>
                {project.clientOrContext && (
                  <span className="text-[#64748B] dark:text-[#AAA]">
                    &middot; {project.clientOrContext}
                  </span>
                )}
              </div>
            )}

            {project.liveUrl && (
              <div className="pt-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0284C7] dark:bg-[#F472B6] text-white dark:text-[#111] text-xs font-mono font-bold uppercase tracking-wider hover:opacity-90 transition-opacity shadow-sm cursor-pointer"
                >
                  <span>Launch Live Platform</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>

          {/* Structured Case Study Modules */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            {/* Left Sticky Meta Information */}
            <div className="md:col-span-4 space-y-8 md:sticky md:top-28">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#64748B] dark:text-[#777] block mb-2 font-bold">
                  Technologies
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-white/80 dark:bg-[#1E1E1E] border border-[#BFDBFE]/70 dark:border-[#2E2E2E] rounded text-xs font-medium text-[#0369A1] dark:text-[#DDD]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.metrics && (
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#64748B] dark:text-[#777] block mb-2 font-bold">
                    Telemetry Highlights
                  </span>
                  <div className="space-y-2">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-white/80 dark:bg-[#1E1E1E] border border-[#BFDBFE]/70 dark:border-[#2E2E2E]">
                        <div className="text-[10px] font-mono uppercase text-[#64748B] dark:text-[#AAA]">{m.label}</div>
                        <div className="text-base font-bold text-[#0F1E36] dark:text-[#F3F3F2]">{m.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Detailed Narrative Breakdown */}
            <div className="md:col-span-8 space-y-12">
              {/* 01 Overview */}
              <div className="space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] font-bold text-[#64748B] dark:text-[#777] block">
                  01 — OVERVIEW
                </span>
                <p className="text-base sm:text-lg text-[#334155] dark:text-[#CCC] leading-relaxed">
                  {project.overview}
                </p>
              </div>

              {/* 02 The Problem */}
              <div className="space-y-3 pt-8 border-t border-[#BFDBFE]/60 dark:border-[#222]">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-[#0284C7] dark:text-[#F472B6]" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.3em] font-bold text-[#64748B] dark:text-[#777]">
                    02 — THE PROBLEM
                  </span>
                </div>
                <p className="text-base sm:text-lg text-[#334155] dark:text-[#CCC] leading-relaxed">
                  {project.problem}
                </p>
              </div>

              {/* 03 The Approach */}
              <div className="space-y-3 pt-8 border-t border-[#BFDBFE]/60 dark:border-[#222]">
                <div className="flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-[#0284C7] dark:text-[#F472B6]" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.3em] font-bold text-[#64748B] dark:text-[#777]">
                    03 — THE APPROACH
                  </span>
                </div>
                <p className="text-base sm:text-lg text-[#334155] dark:text-[#CCC] leading-relaxed">
                  {project.approach}
                </p>
              </div>

              {/* 04 Technology Architecture */}
              <div className="space-y-3 pt-8 border-t border-[#BFDBFE]/60 dark:border-[#222]">
                <div className="flex items-center gap-2">
                  <Code className="w-4 h-4 text-[#0284C7] dark:text-[#F472B6]" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.3em] font-bold text-[#64748B] dark:text-[#777]">
                    04 — TECHNOLOGY ARCHITECTURE
                  </span>
                </div>
                <p className="text-base sm:text-lg text-[#334155] dark:text-[#CCC] leading-relaxed">
                  {project.technologyDetails}
                </p>
              </div>

              {/* 05 Outcome & Highlights */}
              <div className="space-y-4 pt-8 border-t border-[#BFDBFE]/60 dark:border-[#222]">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#0284C7] dark:text-[#F472B6]" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.3em] font-bold pastel-gradient-text">
                    05 — OUTCOME &amp; IMPACT
                  </span>
                </div>
                <p className="text-base sm:text-lg text-[#334155] dark:text-[#CCC] leading-relaxed">
                  {project.outcome}
                </p>

                {project.keyHighlights && project.keyHighlights.length > 0 && (
                  <div className="p-6 bg-white/80 dark:bg-[#1E1E1E] border border-[#BFDBFE]/70 dark:border-[#2E2E2E] rounded-2xl space-y-3 shadow-sm">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#64748B] dark:text-[#777] block font-bold">
                      Key Highlights
                    </span>
                    {project.keyHighlights.map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-3 text-sm sm:text-base text-[#334155] dark:text-[#CCC]">
                        <CheckCircle className="w-4 h-4 text-[#0284C7] dark:text-[#F472B6] mt-0.5 shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Footer Case Study Navigation */}
          <div className="pt-16 border-t border-[#BFDBFE]/60 dark:border-[#222] flex flex-col sm:flex-row items-center justify-between gap-6">
            <button
              onClick={onClose}
              className="px-6 py-3 bg-[#0F1E36] dark:bg-[#F3F3F2] text-white dark:text-[#111] rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#1E3A5F] dark:hover:bg-[#E0E0E0] transition-colors cursor-pointer"
            >
              &larr; Back to all projects
            </button>

            {onSelectProject && nextProject && (
              <button
                onClick={() => onSelectProject(nextProject)}
                className="group inline-flex items-center gap-3 text-sm font-bold text-[#0F1E36] dark:text-[#F3F3F2] hover:text-[#0284C7] dark:hover:text-[#F472B6] transition-colors cursor-pointer"
              >
                <span>Next Project: {nextProject.title}</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
