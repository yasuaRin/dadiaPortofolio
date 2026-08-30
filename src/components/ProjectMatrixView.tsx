import React from 'react';
import { Project } from '../types';
import { ArrowUpRight, CheckCircle, Terminal, Activity, Layers } from 'lucide-react';
import { motion } from 'motion/react';

interface ProjectMatrixViewProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const ProjectMatrixView: React.FC<ProjectMatrixViewProps> = ({
  projects,
  onSelectProject
}) => {
  return (
    <div className="overflow-hidden rounded-3xl border border-[#BFDBFE]/70 dark:border-[#262626] bg-white/90 dark:bg-[#121212]/90 backdrop-blur-md shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[#BFDBFE]/60 dark:border-[#222] bg-[#E0F2FE]/50 dark:bg-[#171717]/80 text-[10px] font-mono uppercase tracking-[0.25em] text-[#64748B] dark:text-[#AAA]">
              <th className="py-4 px-6 font-bold">Index</th>
              <th className="py-4 px-6 font-bold">System Title</th>
              <th className="py-4 px-6 font-bold hidden md:table-cell">Discipline</th>
              <th className="py-4 px-6 font-bold hidden lg:table-cell">Key Telemetry</th>
              <th className="py-4 px-6 font-bold hidden sm:table-cell">Stack</th>
              <th className="py-4 px-6 font-bold text-right">Inspect</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#BFDBFE]/40 dark:divide-[#222] text-xs font-mono">
            {projects.map((project, idx) => {
              const numStr = idx < 9 ? `0${idx + 1}` : `${idx + 1}`;
              const primaryMetric = project.metrics?.[0];

              return (
                <motion.tr
                  key={project.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  onClick={() => onSelectProject(project)}
                  className="group hover:bg-[#E0F2FE]/40 dark:hover:bg-[#1A1A1A]/80 transition-colors cursor-pointer"
                >
                  <td className="py-4 px-6 font-bold text-[#64748B] dark:text-[#666]">
                    {numStr}
                  </td>
                  <td className="py-4 px-6">
                    <div className="font-bold text-sm text-[#0F1E36] dark:text-[#F3F3F2] group-hover:text-[#0284C7] dark:group-hover:text-[#F472B6] transition-colors font-sans">
                      {project.title}
                    </div>
                    <div className="text-[11px] font-serif italic text-[#475569] dark:text-[#888]">
                      {project.subtitle}
                    </div>
                  </td>
                  <td className="py-4 px-6 hidden md:table-cell">
                    <span className="px-2.5 py-1 rounded bg-[#E0F2FE] dark:bg-[#202020] text-[#0369A1] dark:text-[#DDD] text-[10px] uppercase font-semibold">
                      {project.category}
                    </span>
                  </td>
                  <td className="py-4 px-6 hidden lg:table-cell">
                    {primaryMetric ? (
                      <span className="text-[#0284C7] dark:text-[#F472B6] font-bold">
                        {primaryMetric.label}: {primaryMetric.value}
                      </span>
                    ) : (
                      <span className="text-[#64748B]">Live Pipeline</span>
                    )}
                  </td>
                  <td className="py-4 px-6 hidden sm:table-cell">
                    <div className="flex flex-wrap gap-1 max-w-xs">
                      {project.technologies.slice(0, 3).map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-1.5 py-0.5 rounded bg-[#E0F2FE]/70 dark:bg-white/[0.05] text-[10px] text-[#0369A1] dark:text-[#AAA]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProject(project);
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#BAE6FD] dark:border-[#333] group-hover:border-[#0284C7] dark:group-hover:border-white group-hover:bg-[#0284C7] dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-[#111] text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer"
                    >
                      <span>View</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
