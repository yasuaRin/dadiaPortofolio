import React from 'react';
import { Project } from '../types';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface FeaturedProjectProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({ project, onSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-2xl border border-[#CBD5E1] dark:border-[#262626] bg-white dark:bg-[#141414] p-6 sm:p-8 md:p-10 shadow-sm hover:shadow-md hover:border-[#0284C7] dark:hover:border-[#F472B6] transition-all duration-300"
    >
      {/* Top Header: Category & Year */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-[#E2E8F0] dark:border-[#222]">
        <div className="flex items-center gap-2.5">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0284C7] dark:text-[#F472B6]">
            Featured Project
          </span>
          <span className="text-[#CBD5E1] dark:text-[#444]">&bull;</span>
          <span className="text-xs font-mono uppercase tracking-wider text-[#64748B] dark:text-[#888]">
            {project.category}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {project.liveUrl && (
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Live App
            </span>
          )}
          <span className="text-xs font-mono text-[#64748B] dark:text-[#888]">
            {project.year}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-6 space-y-4">
        {/* Project Title ONLY — completely clean, no text next to it */}
        <h3
          onClick={() => onSelect(project)}
          className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#0F1E36] dark:text-[#F3F3F2] group-hover:text-[#0284C7] dark:group-hover:text-[#F472B6] transition-colors cursor-pointer"
        >
          {project.title}
        </h3>

        {/* Lead Description Glimpse */}
        <p className="text-sm sm:text-base text-[#475569] dark:text-[#A3A3A3] leading-relaxed max-w-3xl">
          {project.description}
        </p>

        {/* Bottom Bar: Stack Badges & Action Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[#E2E8F0] dark:border-[#222]">
          <div className="flex flex-wrap items-center gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#F1F5F9] dark:bg-[#1E1E1E] text-[#475569] dark:text-[#AAA] border border-[#E2E8F0] dark:border-[#282828]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onSelect(project)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0F1E36] dark:bg-[#F472B6] text-white dark:text-[#111] text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#1E3A5F] dark:hover:bg-[#FDA4AF] transition-colors cursor-pointer shadow-xs group/btn"
            >
              <span>Read More</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
            </button>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-[#CBD5E1] dark:border-[#333] hover:border-[#0284C7] dark:hover:border-[#F472B6] text-[#0F1E36] dark:text-[#EEE] text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>Live App</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#64748B] dark:text-[#AAA]" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

