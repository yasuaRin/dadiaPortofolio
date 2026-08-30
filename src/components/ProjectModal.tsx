import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, ArrowLeft, Code, CheckCircle, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
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

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#1A1A1A]/60 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-3xl max-h-[90vh] bg-[#F0F6FD] dark:bg-[#121212] rounded-2xl border border-[#BFDBFE] dark:border-[#262626] shadow-2xl overflow-y-auto z-10 flex flex-col text-[#0F1E36] dark:text-[#F3F3F2]"
        >
          {/* Modal Header Bar */}
          <div className="sticky top-0 bg-[#F0F6FD]/95 dark:bg-[#121212]/95 backdrop-blur-md border-b border-[#BFDBFE]/70 dark:border-[#262626] px-6 sm:px-8 py-4 flex items-center justify-between z-20">
            <button
              onClick={onClose}
              id="modal-back-btn"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0369A1] dark:text-[#AAA] hover:text-[#0284C7] dark:hover:text-white transition-colors focus:outline-none py-1 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to work</span>
            </button>

            <button
              onClick={onClose}
              id="modal-close-btn"
              className="p-1.5 text-[#64748B] dark:text-[#AAA] hover:text-[#0F1E36] dark:hover:text-white hover:bg-[#E0F2FE] dark:hover:bg-[#1E1E1E] rounded-full transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-10 space-y-10">
            {/* Title & Metadata */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-[#E0F2FE] dark:bg-[#1E1E1E] text-[#0369A1] dark:text-[#DDD]">
                  {project.category}
                </span>
                {project.year && (
                  <span className="text-[11px] font-mono text-[#64748B] dark:text-[#AAA]">
                    &middot; {project.year}
                  </span>
                )}
                {project.featured && (
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#0284C7] dark:bg-[#F472B6] text-white dark:text-[#111] font-semibold">
                    Featured Project
                  </span>
                )}
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#0F1E36] dark:text-[#F3F3F2]">
                {project.title}
              </h2>
              <p className="text-base sm:text-lg text-[#475569] dark:text-[#AAA] mt-1 font-serif italic">
                {project.subtitle}
              </p>
            </div>

            {/* Structured 01 - 05 Breakdown */}
            <div className="space-y-8 divide-y divide-[#BFDBFE]/60 dark:divide-[#262626]">
              {/* 01 Overview */}
              <div className="pt-6 first:pt-0">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#64748B] dark:text-[#777]">
                    01 — Overview
                  </span>
                </div>
                <p className="text-sm sm:text-base text-[#334155] dark:text-[#CCC] leading-relaxed">
                  {project.overview}
                </p>
              </div>

              {/* 02 Problem */}
              <div className="pt-6">
                <div className="flex items-center gap-2 mb-3">
                  <Target className="w-4 h-4 text-[#0284C7] dark:text-[#F472B6]" />
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#64748B] dark:text-[#777]">
                    02 — Problem
                  </span>
                </div>
                <p className="text-sm sm:text-base text-[#334155] dark:text-[#CCC] leading-relaxed">
                  {project.problem}
                </p>
              </div>

              {/* 03 Approach */}
              <div className="pt-6">
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="w-4 h-4 text-[#0284C7] dark:text-[#F472B6]" />
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#64748B] dark:text-[#777]">
                    03 — Approach
                  </span>
                </div>
                <p className="text-sm sm:text-base text-[#334155] dark:text-[#CCC] leading-relaxed">
                  {project.approach}
                </p>
              </div>

              {/* 04 Technology */}
              <div className="pt-6">
                <div className="flex items-center gap-2 mb-3">
                  <Code className="w-4 h-4 text-[#0284C7] dark:text-[#F472B6]" />
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#64748B] dark:text-[#777]">
                    04 — Technology
                  </span>
                </div>
                <p className="text-sm sm:text-base text-[#334155] dark:text-[#CCC] leading-relaxed mb-4">
                  {project.technologyDetails}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white/80 dark:bg-[#1E1E1E] border border-[#BFDBFE]/60 dark:border-[#2E2E2E] rounded text-xs font-medium text-[#0369A1] dark:text-[#DDD]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* 05 Outcome */}
              <div className="pt-6">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-4 h-4 text-[#0284C7] dark:text-[#F472B6]" />
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold pastel-gradient-text">
                    05 — Outcome
                  </span>
                </div>
                <p className="text-sm sm:text-base text-[#334155] dark:text-[#CCC] leading-relaxed mb-4">
                  {project.outcome}
                </p>

                {project.keyHighlights && project.keyHighlights.length > 0 && (
                  <div className="bg-white/80 dark:bg-[#181818] border border-[#BFDBFE]/70 dark:border-[#262626] rounded-xl p-4 sm:p-5 space-y-2 shadow-sm">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#64748B] dark:text-[#AAA] block mb-2 font-bold">
                      Key Highlights
                    </span>
                    {project.keyHighlights.map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334155] dark:text-[#CCC]">
                        <CheckCircle className="w-4 h-4 text-[#0284C7] dark:text-[#F472B6] mt-0.5 shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Modal Bottom Action */}
            <div className="pt-6 border-t border-[#BFDBFE]/60 dark:border-[#262626] flex items-center justify-between">
              <button
                onClick={onClose}
                className="px-5 py-2 bg-[#0F1E36] dark:bg-[#F3F3F2] text-white dark:text-[#111] rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#1E3A5F] dark:hover:bg-[#E0E0E0] transition-colors cursor-pointer"
              >
                Close Case Study
              </button>

              <span className="text-xs font-mono text-[#64748B] dark:text-[#AAA]">
                Ni Putu Dadia Yasuarini &middot; Portfolio
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
