import React from 'react';
import { Project } from '../types';
import { ProjectUIPreview } from './ProjectUIPreview';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface SupportingProjectCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}

export const SupportingProjectCard: React.FC<SupportingProjectCardProps> = ({
  project,
  index,
  onSelect
}) => {
  const numberStr = index < 9 ? `0${index + 1}` : `${index + 1}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: (index % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => onSelect(project)}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(project);
        }
      }}
      className="group relative rounded-3xl border border-[#CBD5E1] dark:border-[#262626] bg-white/90 dark:bg-[#151515]/90 p-6 sm:p-7 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-lg hover:border-[#0284C7] dark:hover:border-[#F472B6] transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0284C7] dark:focus:ring-[#F472B6]"
    >
      {/* Top Metadata Header: Number, Category, Year */}
      <div className="space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0] dark:border-[#242424]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-[#0284C7] dark:text-[#F472B6]">
              {numberStr}
            </span>
            <span className="w-1 h-1 rounded-full bg-[#CBD5E1] dark:bg-[#444]" />
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#64748B] dark:text-[#888]">
              {project.category.split('·')[0].trim()}
            </span>
          </div>
          <span className="text-[10px] font-mono text-[#64748B] dark:text-[#777]">
            {project.year || '2024'}
          </span>
        </div>

        {/* Title & One-line Description */}
        <div className="space-y-1.5">
          <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0F1E36] dark:text-[#F3F3F2] group-hover:text-[#0284C7] dark:group-hover:text-[#F472B6] transition-colors flex items-center justify-between">
            <span>{project.title}</span>
            <ArrowUpRight className="w-4 h-4 text-[#64748B] dark:text-[#888] group-hover:text-[#0284C7] dark:group-hover:text-[#F472B6] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
          </h4>
          <p className="text-xs sm:text-sm text-[#475569] dark:text-[#AAA] leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Real Product UI Preview */}
        <div className="pt-2">
          <div className="transform transition-transform duration-300 group-hover:scale-[1.01]">
            <ProjectUIPreview project={project} variant="card" />
          </div>
        </div>
      </div>

      {/* Card Bottom: Role, Stack, and Clear Interaction Affordance */}
      <div className="pt-5 mt-4 border-t border-[#E2E8F0] dark:border-[#242424] space-y-3">
        {/* Role & Stack in clean typographic key-value pairing */}
        <div className="space-y-1 text-[11px] font-mono">
          {project.role && (
            <div className="flex items-baseline gap-2 truncate">
              <span className="text-[#64748B] dark:text-[#777] uppercase text-[10px] shrink-0 font-semibold">
                MY JOB:
              </span>
              <span className="text-[#0F1E36] dark:text-[#DDD] truncate font-medium">
                {project.role}
              </span>
            </div>
          )}
          <div className="flex items-baseline gap-2 truncate">
            <span className="text-[#64748B] dark:text-[#777] uppercase text-[10px] shrink-0 font-semibold">
              TOOLS:
            </span>
            <span className="text-[#0284C7] dark:text-[#F472B6] truncate font-medium">
              {project.technologies.slice(0, 4).join(' · ')}
            </span>
          </div>
        </div>

        {/* Affordance Strip */}
        <div className="flex items-center justify-between pt-1">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#0F1E36] dark:text-[#F3F3F2] group-hover:text-[#0284C7] dark:group-hover:text-[#F472B6] transition-colors">
            <span>Read Story</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </span>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 text-[10px] font-mono text-[#64748B] dark:text-[#999] hover:text-[#0284C7] dark:hover:text-[#F472B6] transition-colors py-1 px-2 rounded hover:bg-[#F1F5F9] dark:hover:bg-[#202020]"
            >
              <span>Try Live</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
