import React from 'react';
import { Project } from '../types';
import { ArrowRight, ArrowUpRight, Github } from 'lucide-react';
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
      {/* Top Metadata Header: Category & Year */}
      <div className="space-y-4">
        <div className="flex items-center justify-between pb-3.5 border-b border-[#E2E8F0] dark:border-[#242424]">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#0284C7] dark:text-[#F472B6]">
            {project.category.split('·')[0].trim()}
          </span>
          <span className="text-xs font-mono text-[#64748B] dark:text-[#777]">
            {project.year || '2024'}
          </span>
        </div>

        {/* Project Title ONLY — clean, confident, no text next to it */}
        <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0F1E36] dark:text-[#F3F3F2] group-hover:text-[#0284C7] dark:group-hover:text-[#F472B6] transition-colors">
          {project.title}
        </h4>

        {/* Optional Project Screenshot Preview */}
        {project.imageUrl && (
          <div className="relative rounded-2xl overflow-hidden border border-[#E2E8F0] dark:border-[#262626] bg-slate-950 aspect-[16/10] group/img">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5">
              <span className="text-[10px] font-mono font-bold text-white bg-black/70 backdrop-blur-xs px-2 py-0.5 rounded">
                Verified System UI
              </span>
            </div>
          </div>
        )}

        {/* Concise Overview Glimpse */}
        <p className="text-xs sm:text-[13px] text-[#475569] dark:text-[#A3A3A3] leading-relaxed line-clamp-2">
          {project.description}
        </p>
      </div>

      {/* Card Bottom: Tech Stack and Read More Action */}
      <div className="pt-4 mt-3 border-t border-[#E2E8F0] dark:border-[#242424] space-y-3">
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F1F5F9] dark:bg-[#1F1F1F] text-[#475569] dark:text-[#AAA] border border-[#E2E8F0]/60 dark:border-[#2C2C2C]"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-[10px] font-mono px-1.5 py-0.5 text-[#64748B] dark:text-[#777]">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Affordance Strip */}
        <div className="flex items-center justify-between pt-1">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#0F1E36] dark:text-[#F3F3F2] group-hover:text-[#0284C7] dark:group-hover:text-[#F472B6] transition-colors">
            <span>Read More</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </span>

          <div className="flex items-center gap-1.5">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 text-[10px] font-mono text-[#64748B] dark:text-[#999] hover:text-[#0284C7] dark:hover:text-[#F472B6] transition-colors py-1 px-2.5 rounded-full border border-[#CBD5E1] dark:border-[#333] hover:bg-[#F1F5F9] dark:hover:bg-[#202020]"
                title="View repository on GitHub"
              >
                <Github className="w-3 h-3" />
                <span>Code</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 text-[10px] font-mono text-[#64748B] dark:text-[#999] hover:text-[#0284C7] dark:hover:text-[#F472B6] transition-colors py-1 px-2.5 rounded-full border border-[#CBD5E1] dark:border-[#333] hover:bg-[#F1F5F9] dark:hover:bg-[#202020]"
                title="Open live deployment in new tab"
              >
                <span>Live App</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
