import React, { useState, useMemo } from 'react';
import { Project } from '../types';
import { projectsData } from '../data/projects';
import { ProjectDetailView } from './ProjectDetailView';
import { Project3DCard } from './Project3DCard';
import { ProjectCascadeView } from './ProjectCascadeView';
import { ProjectMatrixView } from './ProjectMatrixView';
import { LayoutGrid, ListFilter, Table, Search, Sparkles, X, ArrowUpRight, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type ViewMode = 'bento' | 'cascade' | 'matrix';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('bento');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Data', 'Automation', 'Web', 'Product'];

  // Sanitized search query handler
  const handleSearchChange = (rawText: string) => {
    // Sanitize input: limit to 60 chars, strip dangerous injection patterns
    const sanitized = rawText.slice(0, 60).replace(/[<>{}[\]\\]/g, '');
    setSearchQuery(sanitized);
  };

  // Filter projects based on active category and search text
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' ||
        project.categories.some((c) => c.toLowerCase().includes(selectedCategory.toLowerCase())) ||
        project.category.toLowerCase().includes(selectedCategory.toLowerCase());

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        query === '' ||
        project.title.toLowerCase().includes(query) ||
        project.subtitle.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section
      id="work"
      className="py-16 sm:py-28 md:py-36 border-t border-[#BFDBFE]/60 dark:border-[#222] bg-transparent relative transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#0284C7] dark:bg-[#F472B6]" />
              <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#64748B] dark:text-[#777] font-mono">
                03 — SELECTED WORK &amp; SYSTEMS
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-[#0F1E36] dark:text-[#F3F3F2] leading-tight">
              Engineering &amp;<br />
              <span className="font-serif italic font-normal pastel-gradient-text">Analytics Work.</span>
            </h2>
          </div>
        </div>

        {/* UI / UX CONTROL BAR: Categories, Search, and View Mode Switcher */}
        <div className="mb-12 p-3 sm:p-4 rounded-2xl bg-white/85 dark:bg-[#141414]/80 border border-[#BFDBFE]/70 dark:border-[#262626] backdrop-blur-md shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 md:pb-0">
            {categories.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? 'bg-[#0F1E36] dark:bg-[#F472B6] text-white dark:text-[#111] font-bold shadow-xs'
                      : 'text-[#64748B] dark:text-[#AAA] hover:text-[#0F1E36] dark:hover:text-white hover:bg-[#E0F2FE] dark:hover:bg-[#1E1E1E]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Search & View Mode Controls */}
          <div className="flex items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-56">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#64748B] pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                maxLength={60}
                autoComplete="off"
                autoCorrect="off"
                spellCheck={false}
                placeholder="Search stack or title..."
                aria-label="Search projects by technology or title"
                className="w-full pl-8 pr-7 py-1.5 rounded-full bg-[#EAF2FC] dark:bg-[#1C1C1C] border border-[#BFDBFE]/60 dark:border-transparent focus:border-[#0284C7] dark:focus:border-[#F472B6] text-xs font-mono text-[#0F1E36] dark:text-[#F3F3F2] placeholder-[#94A3B8] focus:outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#64748B] hover:text-[#0F1E36] dark:hover:text-white cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* View Mode Toggle Buttons */}
            <div className="flex items-center p-1 rounded-xl bg-[#E0F2FE] dark:bg-[#1E1E1E] border border-[#BFDBFE]/60 dark:border-[#2A2A2A]">
              <button
                onClick={() => setViewMode('bento')}
                title="Bento Studio Grid"
                className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                  viewMode === 'bento'
                    ? 'bg-white dark:bg-[#2C2C2C] text-[#0F1E36] dark:text-[#F472B6] shadow-xs font-bold'
                    : 'text-[#64748B] dark:text-[#AAA] hover:text-[#0F1E36] dark:hover:text-white'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setViewMode('cascade')}
                title="Editorial Cascade Showcase"
                className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                  viewMode === 'cascade'
                    ? 'bg-white dark:bg-[#2C2C2C] text-[#0F1E36] dark:text-[#F472B6] shadow-xs font-bold'
                    : 'text-[#64748B] dark:text-[#AAA] hover:text-[#0F1E36] dark:hover:text-white'
                }`}
              >
                <ListFilter className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setViewMode('matrix')}
                title="Engineering Data Matrix"
                className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                  viewMode === 'matrix'
                    ? 'bg-white dark:bg-[#2C2C2C] text-[#0F1E36] dark:text-[#F472B6] shadow-xs font-bold'
                    : 'text-[#64748B] dark:text-[#AAA] hover:text-[#0F1E36] dark:hover:text-white'
                }`}
              >
                <Table className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* DYNAMIC VIEW CONTAINER */}
        <div>
          {filteredProjects.length === 0 ? (
            <div className="py-20 text-center rounded-3xl border border-dashed border-[#DDD] dark:border-[#333] bg-white/40 dark:bg-[#141414]/40 p-8 space-y-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#F0EFEB] dark:bg-[#222] flex items-center justify-center text-[#888]">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#1A1A1A] dark:text-[#F3F3F2]">
                No matching projects found
              </h3>
              <p className="text-xs font-mono text-[#888] max-w-sm mx-auto">
                No explorations matched &ldquo;{searchQuery || selectedCategory}&rdquo;. Try clearing filters to view all works.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="px-5 py-2 rounded-full bg-[#1A1A1A] dark:bg-[#F3F3F2] text-white dark:text-[#111] text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#333] transition-colors cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <>
              {/* 1. Bento Studio Grid */}
              {viewMode === 'bento' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                  {filteredProjects.map((project, idx) => (
                    <Project3DCard
                      key={project.id}
                      project={project}
                      index={idx}
                      onSelect={(p) => setSelectedProject(p)}
                      featured={project.featured}
                    />
                  ))}
                </div>
              )}

              {/* 2. Editorial Cascade Showcase */}
              {viewMode === 'cascade' && (
                <ProjectCascadeView
                  projects={filteredProjects}
                  onSelectProject={(p) => setSelectedProject(p)}
                />
              )}

              {/* 3. Engineering Data Matrix */}
              {viewMode === 'matrix' && (
                <ProjectMatrixView
                  projects={filteredProjects}
                  onSelectProject={(p) => setSelectedProject(p)}
                />
              )}
            </>
          )}
        </div>
      </div>

      {/* Full-Screen Project Detail Modal */}
      <ProjectDetailView
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(p) => setSelectedProject(p)}
        allProjects={projectsData}
      />
    </section>
  );
};
