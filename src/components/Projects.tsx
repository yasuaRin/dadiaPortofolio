import React, { useState, useMemo } from 'react';
import { Project } from '../types';
import { projectsData } from '../data/projects';
import { FeaturedProject } from './FeaturedProject';
import { SupportingProjectCard } from './SupportingProjectCard';
import { ProjectDetailView } from './ProjectDetailView';
import { ProjectCascadeView } from './ProjectCascadeView';
import { ProjectMatrixView } from './ProjectMatrixView';
import {
  LayoutGrid,
  ListFilter,
  Table,
  Search,
  X,
  Layers,
  Sparkles,
  ArrowRight,
  SlidersHorizontal,
  Code2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type ViewMode = 'editorial' | 'cascade' | 'matrix';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('editorial');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Simplified, intuitive categories as requested
  const categories = ['All', 'AI & ML', 'Data & Automation', 'Web & Platforms'];

  // Sanitized search query handler
  const handleSearchChange = (rawText: string) => {
    const sanitized = rawText.slice(0, 60).replace(/[<>{}[\]\\]/g, '');
    setSearchQuery(sanitized);
  };

  // Flagship featured project (VIDHELP)
  const featuredProject = useMemo(() => {
    return projectsData.find((p) => p.featured) || projectsData[0];
  }, []);

  // Filter projects based on active category and search text
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const catLower = selectedCategory.toLowerCase();
      let matchesCategory = true;

      if (selectedCategory === 'AI & ML') {
        matchesCategory =
          project.categories.some((c) => /ai|ml|machine learning/i.test(c)) ||
          /ai|ml|machine learning/i.test(project.category);
      } else if (selectedCategory === 'Data & Automation') {
        matchesCategory =
          project.categories.some((c) => /data|automation|analytics/i.test(c)) ||
          /data|automation|analytics/i.test(project.category);
      } else if (selectedCategory === 'Web & Platforms') {
        matchesCategory =
          project.categories.some((c) => /web|product|engineering|react/i.test(c)) ||
          /web|product|engineering|react/i.test(project.category);
      }

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        query === '' ||
        project.title.toLowerCase().includes(query) ||
        project.subtitle.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some((t) => t.toLowerCase().includes(query)) ||
        (project.role && project.role.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Separate featured project from supporting projects for editorial layout
  const supportingProjects = useMemo(() => {
    return filteredProjects.filter((p) => p.id !== featuredProject.id);
  }, [filteredProjects, featuredProject.id]);

  // Is featured project visible under current filter?
  const isFeaturedVisible = useMemo(() => {
    return filteredProjects.some((p) => p.id === featuredProject.id);
  }, [filteredProjects, featuredProject.id]);

  return (
    <section
      id="work"
      className="py-16 sm:py-28 md:py-36 border-t border-[#CBD5E1]/60 dark:border-[#222] bg-transparent relative transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 space-y-12 sm:space-y-16">
        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            2. PROJECT SECTION ENTRY: Eyebrow → Headline → Description → Metadata
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <header className="space-y-6 max-w-4xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F2FE] dark:bg-[#F472B6]/15 border border-[#BAE6FD] dark:border-[#F472B6]/30">
            <span className="w-2 h-2 rounded-full bg-[#0284C7] dark:bg-[#F472B6]" />
            <span className="text-[11px] uppercase tracking-[0.2em] font-mono font-bold text-[#0284C7] dark:text-[#F472B6]">
              MY WORK &bull; PROJECTS
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0F1E36] dark:text-[#F3F3F2] leading-[1.15]">
            Real Projects Built for<br />
            <span className="font-serif italic font-normal text-[#0284C7] dark:text-[#F472B6]">
              Everyday Problems.
            </span>
          </h2>

          {/* Short Supporting Sentence */}
          <p className="text-base sm:text-lg md:text-xl text-[#334155] dark:text-[#CCC] leading-relaxed max-w-2xl">
            Instead of building projects just to show off lines of code, I focus on solving real headaches&mdash;like replacing messy spreadsheets, helping teams save hours every week, and turning confusing numbers into clear answers.
          </p>

          {/* Section Metadata Matrix */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1 text-xs font-mono text-[#64748B] dark:text-[#999]">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-[#0F1E36] dark:text-[#EEE]">6</span> Completed Projects
            </div>
            <span>&bull;</span>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-[#0F1E36] dark:text-[#EEE]">University Capstone to Non-Profits</span>
            </div>
            <span className="hidden sm:inline">&bull;</span>
            <div className="hidden sm:flex items-center gap-1.5">
              React, Python, Supabase, SQL &amp; Power BI
            </div>
          </div>
        </header>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            3. TOP CONTROLS & NAVIGATION TOOLBAR:
               Category Filters + Search Bar + View Mode Switcher
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-3 sm:p-4 rounded-2xl bg-white/90 dark:bg-[#161616]/90 border border-[#CBD5E1] dark:border-[#282828] shadow-xs backdrop-blur-sm">
          {/* Category Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? 'bg-[#0F1E36] dark:bg-[#F472B6] text-white dark:text-[#111] font-bold shadow-xs'
                      : 'text-[#64748B] dark:text-[#AAA] hover:text-[#0F1E36] dark:hover:text-white hover:bg-[#E0F2FE] dark:hover:bg-[#1E1E1E]'
                  }`}
                >
                  {cat === 'All' ? 'All Projects' : cat}
                </button>
              );
            })}
          </div>

          {/* Search Bar & View Mode Switcher */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search Input */}
            <div className="relative w-full sm:w-60">
              <Search className="w-3.5 h-3.5 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#64748B] pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                maxLength={60}
                placeholder="Search projects or tech..."
                aria-label="Filter projects by technology or title"
                className="w-full pl-9 pr-8 py-2 rounded-xl bg-[#F8FAFC] dark:bg-[#1F1F1F] border border-[#CBD5E1] dark:border-[#333] focus:border-[#0284C7] dark:focus:border-[#F472B6] text-xs font-mono text-[#0F1E36] dark:text-[#F3F3F2] placeholder-[#94A3B8] focus:outline-none transition-all"
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

            {/* View Switcher: Gallery / Cascade / Table */}
            <div className="flex items-center p-1 rounded-xl bg-[#F1F5F9] dark:bg-[#1E1E1E] border border-[#CBD5E1] dark:border-[#2A2A2A] shrink-0 justify-center">
              <button
                onClick={() => setViewMode('editorial')}
                title="Gallery & Spotlight Layout"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  viewMode === 'editorial'
                    ? 'bg-white dark:bg-[#2C2C2C] text-[#0F1E36] dark:text-[#F472B6] shadow-xs font-bold'
                    : 'text-[#64748B] dark:text-[#AAA] hover:text-[#0F1E36] dark:hover:text-white'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Gallery</span>
              </button>
              <button
                onClick={() => setViewMode('cascade')}
                title="Cascade Showcase"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  viewMode === 'cascade'
                    ? 'bg-white dark:bg-[#2C2C2C] text-[#0F1E36] dark:text-[#F472B6] shadow-xs font-bold'
                    : 'text-[#64748B] dark:text-[#AAA] hover:text-[#0F1E36] dark:hover:text-white'
                }`}
              >
                <ListFilter className="w-3.5 h-3.5" />
                <span>Cascade</span>
              </button>
              <button
                onClick={() => setViewMode('matrix')}
                title="Table Matrix"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  viewMode === 'matrix'
                    ? 'bg-white dark:bg-[#2C2C2C] text-[#0F1E36] dark:text-[#F472B6] shadow-xs font-bold'
                    : 'text-[#64748B] dark:text-[#AAA] hover:text-[#0F1E36] dark:hover:text-white'
                }`}
              >
                <Table className="w-3.5 h-3.5" />
                <span>Table</span>
              </button>
            </div>
          </div>
        </div>

        {/* Active Filter Notice (if filtering) */}
        {(selectedCategory !== 'All' || searchQuery.trim() !== '') && (
          <div className="flex items-center justify-between px-4 py-2 rounded-xl bg-[#E0F2FE]/60 dark:bg-[#F472B6]/10 border border-[#BAE6FD] dark:border-[#F472B6]/20 text-xs font-mono">
            <span className="text-[#0284C7] dark:text-[#F472B6]">
              Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
              {selectedCategory !== 'All' && ` in "${selectedCategory}"`}
              {searchQuery.trim() && ` matching "${searchQuery}"`}
            </span>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="text-[#0284C7] dark:text-[#F472B6] hover:underline font-bold cursor-pointer"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            4. MAIN PROJECT CONTENT AREA
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div>
          {filteredProjects.length === 0 ? (
            <div className="py-20 text-center rounded-3xl border border-dashed border-[#CBD5E1] dark:border-[#333] bg-white/40 dark:bg-[#141414]/40 p-8 space-y-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#F1F5F9] dark:bg-[#222] flex items-center justify-center text-[#888]">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#0F1E36] dark:text-[#F3F3F2]">
                No matching projects found
              </h3>
              <p className="text-xs font-mono text-[#64748B] max-w-sm mx-auto">
                No projects matched &ldquo;{searchQuery || selectedCategory}&rdquo;. Try clearing
                the filters to view all projects.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="px-5 py-2 rounded-full bg-[#0F1E36] dark:bg-[#F3F3F2] text-white dark:text-[#111] text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#1E3A5F] transition-colors cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <>
              {/* 1. GALLERY / EDITORIAL VIEW */}
              {viewMode === 'editorial' && (
                <div className="space-y-12 sm:space-y-16">
                  {/* If featured project is visible in current filter */}
                  {isFeaturedVisible && (
                    <div className="space-y-4">
                      <FeaturedProject
                        project={featuredProject}
                        onSelect={(p) => setSelectedProject(p)}
                      />
                    </div>
                  )}

                  {/* Supporting projects section */}
                  {(!isFeaturedVisible || supportingProjects.length > 0) && (
                    <div className="space-y-6">
                      {isFeaturedVisible && (
                        <div className="flex items-center justify-between pb-3 border-b border-[#CBD5E1]/60 dark:border-[#222]">
                          <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-[#0F1E36] dark:text-[#F3F3F2] tracking-tight">
                              More Projects I Loved Working On
                            </h3>
                            <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#888] font-mono mt-0.5">
                              Practical tools, automated business reports, and websites built for real users.
                            </p>
                          </div>
                          <span className="text-xs font-mono text-[#64748B] dark:text-[#888] shrink-0">
                            {supportingProjects.length} {supportingProjects.length === 1 ? 'project' : 'projects'}
                          </span>
                        </div>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        {(!isFeaturedVisible ? filteredProjects : supportingProjects).map(
                          (project, idx) => {
                            const globalIndex = projectsData.findIndex((p) => p.id === project.id);
                            return (
                              <SupportingProjectCard
                                key={project.id}
                                project={project}
                                index={globalIndex >= 0 ? globalIndex : idx}
                                onSelect={(p) => setSelectedProject(p)}
                              />
                            );
                          }
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* 2. CASCADE SHOWCASE */}
              {viewMode === 'cascade' && (
                <ProjectCascadeView
                  projects={filteredProjects}
                  onSelectProject={(p) => setSelectedProject(p)}
                />
              )}

              {/* 3. DATA MATRIX TABLE */}
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

      {/* Structured Case Study Modal / Full Page Overlay */}
      <ProjectDetailView
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(p) => setSelectedProject(p)}
        allProjects={projectsData}
      />
    </section>
  );
};
