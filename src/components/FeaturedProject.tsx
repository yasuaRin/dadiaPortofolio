import React from 'react';
import { Project } from '../types';
import { ProjectUIPreview } from './ProjectUIPreview';
import { ArrowUpRight, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface FeaturedProjectProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({ project, onSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-3xl border border-[#CBD5E1] dark:border-[#2C2C2C] bg-white/95 dark:bg-[#151515]/95 p-6 sm:p-8 md:p-10 shadow-sm hover:shadow-xl hover:border-[#0284C7] dark:hover:border-[#F472B6] transition-all duration-300 backdrop-blur-sm"
    >
      {/* Top Friendly Eyebrow & Status */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#E2E8F0] dark:border-[#262626]">
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider text-[#0284C7] dark:text-[#F472B6] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            FEATURED PROJECT SPOTLIGHT
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] dark:bg-[#F472B6]" />
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#64748B] dark:text-[#999]">
            {project.category}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {project.liveUrl && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ECFDF5] dark:bg-[#064E3B]/40 text-[#059669] dark:text-[#34D399] border border-[#A7F3D0] dark:border-[#059669]/40 text-[10px] font-mono font-bold">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              LIVE &amp; WORKING
            </span>
          )}
          <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#F1F5F9] dark:bg-[#202020] text-[#475569] dark:text-[#DDD]">
            {project.year}
          </span>
        </div>
      </div>

      {/* Main Grid: Left Story & Role, Right Interactive UI Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pt-8 items-center">
        {/* Left Column: Everyday Story, Problem Solved & My Role */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-3">
            <h3
              onClick={() => onSelect(project)}
              className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#0F1E36] dark:text-[#F3F3F2] group-hover:text-[#0284C7] dark:group-hover:text-[#F472B6] transition-colors cursor-pointer flex flex-wrap items-baseline gap-2"
            >
              <span>{project.title}</span>
              <span className="text-base sm:text-xl font-normal text-[#64748B] dark:text-[#888]">
                &mdash; {project.subtitle}
              </span>
            </h3>

            <p className="text-base sm:text-lg text-[#334155] dark:text-[#CCC] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Role & Context Strip in Everyday Language */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] dark:bg-[#1A1A1A] border border-[#E2E8F0] dark:border-[#282828] space-y-2.5 text-xs sm:text-sm">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#64748B] dark:text-[#888] font-bold">
                My Job On This
              </span>
              <span className="font-semibold text-[#0F1E36] dark:text-[#EEE]">
                {project.role}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pt-2 border-t border-[#E2E8F0] dark:border-[#262626]">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#64748B] dark:text-[#888] font-bold">
                Who It Was For
              </span>
              <span className="text-[#334155] dark:text-[#CCC]">
                {project.clientOrContext}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pt-2 border-t border-[#E2E8F0] dark:border-[#262626]">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#64748B] dark:text-[#888] font-bold">
                Tools Used
              </span>
              <span className="font-mono text-xs text-[#0284C7] dark:text-[#F472B6]">
                {project.technologies.slice(0, 4).join(' · ')}
              </span>
            </div>
          </div>

          {/* Key Everyday Highlights */}
          {project.keyHighlights && project.keyHighlights.length > 0 && (
            <div className="space-y-2">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#64748B] dark:text-[#888] font-bold">
                Why this project mattered:
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#475569] dark:text-[#BBB]">
                {project.keyHighlights.slice(0, 3).map((hl, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] mt-0.5 shrink-0" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onSelect(project)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0F1E36] dark:bg-[#F472B6] text-white dark:text-[#111] text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#1E3A5F] dark:hover:bg-[#FDA4AF] transition-all cursor-pointer shadow-sm group/btn"
            >
              <span>Read Full Story</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
            </button>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#CBD5E1] dark:border-[#333] hover:border-[#0284C7] dark:hover:border-[#F472B6] text-[#0F1E36] dark:text-[#EEE] text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>Try Live App</span>
                <ArrowUpRight className="w-4 h-4 text-[#64748B] dark:text-[#AAA]" />
              </a>
            )}
          </div>
        </div>

        {/* Right Column: Real Product UI Preview */}
        <div
          onClick={() => onSelect(project)}
          className="lg:col-span-6 cursor-pointer transform group-hover:scale-[1.01] transition-transform duration-300"
        >
          <ProjectUIPreview project={project} variant="featured" />
          <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-[#64748B] dark:text-[#888]">
            <span>Click to see how it was built</span>
            <span className="text-[#0284C7] dark:text-[#F472B6] flex items-center gap-1 font-semibold">
              Read the story &rarr;
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

