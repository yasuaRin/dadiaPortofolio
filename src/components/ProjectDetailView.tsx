import React, { useEffect, useRef } from 'react';
import { Project } from '../types';
import { ProjectUIPreview } from './ProjectUIPreview';
import {
  X,
  ExternalLink,
  Github,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Briefcase,
  Layers,
  Target,
  Cpu
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectDetailViewProps {
  project: Project | null;
  onClose: () => void;
  allProjects?: Project[];
  onSelectProject?: (project: Project) => void;
}

export const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({
  project,
  onClose,
  allProjects = [],
  onSelectProject
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Keyboard navigation (Escape to close)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Lock body scroll while case study is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      if (containerRef.current) {
        containerRef.current.scrollTop = 0;
      }
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  if (!project) return null;

  // Calculate previous and next projects
  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject =
    currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1];
  const nextProject =
    currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0];
  const projectNumberStr =
    currentIndex >= 0
      ? currentIndex < 9
        ? `0${currentIndex + 1}`
        : `${currentIndex + 1}`
      : '01';

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 flex flex-col bg-[#0F1E36]/70 dark:bg-black/85 backdrop-blur-md overflow-hidden"
      >
        {/* Sticky Top Editorial Action Bar */}
        <header className="shrink-0 h-14 sm:h-16 px-4 sm:px-8 border-b border-[#E2E8F0] dark:border-[#222] bg-white/95 dark:bg-[#121212]/95 backdrop-blur-md flex items-center justify-between z-20">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-[#0284C7] dark:text-[#F472B6]">
              {projectNumberStr} / {allProjects.length < 10 ? `0${allProjects.length}` : allProjects.length}
            </span>
            <span className="w-1 h-1 rounded-full bg-[#CBD5E1] dark:bg-[#444]" />
            <span className="text-xs sm:text-sm font-mono font-semibold text-[#0F1E36] dark:text-[#F3F3F2] truncate max-w-[180px] sm:max-w-[320px]">
              {project.title}
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xs:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#CBD5E1] dark:border-[#333] hover:border-[#0284C7] dark:hover:border-[#F472B6] text-[11px] font-mono font-bold uppercase tracking-wider text-[#0F1E36] dark:text-[#EEE] transition-colors"
              >
                <span>Live Project</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}

            <button
              onClick={onClose}
              aria-label="Close case study"
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#F1F5F9] dark:bg-[#202020] hover:bg-[#E2E8F0] dark:hover:bg-[#2A2A2A] text-xs font-mono font-bold text-[#0F1E36] dark:text-[#EEE] transition-colors cursor-pointer"
            >
              <span className="hidden sm:inline">CLOSE [ESC]</span>
              <X className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* Scrollable Case Study Body */}
        <div
          ref={containerRef}
          className="flex-1 overflow-y-auto overflow-x-hidden bg-[#F8FAFC] dark:bg-[#0E0E0E] text-[#0F1E36] dark:text-[#F3F3F2]"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-8 py-8 sm:py-16 space-y-16 sm:space-y-24">
            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                SECTION A: PROJECT HERO
               ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <section className="space-y-8">
              {/* Category & Status Eyebrow */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#0284C7] dark:text-[#F472B6] uppercase">
                  <span>{projectNumberStr}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] dark:bg-[#F472B6]" />
                  <span className="text-[#64748B] dark:text-[#999]">{project.category}</span>
                </div>
                {project.liveUrl && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#ECFDF5] dark:bg-[#064E3B]/40 text-[#059669] dark:text-[#34D399] border border-[#A7F3D0] dark:border-[#059669]/40 text-[10px] font-mono font-bold">
                    <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                    LIVE PRODUCTION SYSTEM
                  </span>
                )}
              </div>

              {/* Title & Value Proposition */}
              <div className="space-y-2 sm:space-y-2.5">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#0F1E36] dark:text-[#F3F3F2]">
                  {project.title}
                </h1>
                <p className="text-sm sm:text-base md:text-lg font-serif italic text-[#475569] dark:text-[#AAA]">
                  {project.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-[#334155] dark:text-[#DDD] leading-relaxed max-w-2xl pt-0.5">
                  {project.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0F1E36] dark:bg-[#F472B6] text-white dark:text-[#111] text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#1E3A5F] dark:hover:bg-[#FDA4AF] transition-colors cursor-pointer shadow-xs"
                  >
                    <span>LAUNCH LIVE PLATFORM</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#CBD5E1] dark:border-[#333] hover:border-[#0284C7] dark:hover:border-[#F472B6] text-xs font-mono font-bold uppercase tracking-wider text-[#0F1E36] dark:text-[#EEE] transition-colors cursor-pointer"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>SOURCE CODE</span>
                  </a>
                )}
              </div>

              {/* Product Interface Presentation */}
              <div className="pt-2">
                <ProjectUIPreview project={project} variant="detail" />
              </div>
            </section>

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                SECTION 01: THE CHALLENGES & SCOPE
               ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <section className="space-y-5 pt-10 border-t border-[#E2E8F0] dark:border-[#222]">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-[#0284C7] dark:text-[#F472B6]" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-[#64748B] dark:text-[#888]">
                  01 &mdash; THE CHALLENGE
                </span>
              </div>

              <div className="space-y-1.5 max-w-3xl">
                <h2 className="text-lg sm:text-xl font-bold text-[#0F1E36] dark:text-[#F3F3F2]">
                  Operational Friction Points
                </h2>
                <p className="text-xs sm:text-sm text-[#475569] dark:text-[#BBB] leading-relaxed">
                  {project.problem}
                </p>
              </div>

              {/* Problem Breakdown Grid */}
              {project.problemItems && project.problemItems.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                  {project.problemItems.map((item) => (
                    <div
                      key={item.number}
                      className={`p-4 rounded-xl border transition-colors ${
                        item.addressedInScope
                          ? 'bg-blue-50/50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900/40'
                          : 'bg-[#F8FAFC] dark:bg-[#161616] border-[#E2E8F0] dark:border-[#262626]'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <div className="flex items-center gap-2">
                          <span className={`text-xs font-mono font-bold ${
                            item.addressedInScope ? 'text-[#0284C7] dark:text-[#38BDF8]' : 'text-[#64748B] dark:text-[#888]'
                          }`}>
                            {item.number}
                          </span>
                          <span className="font-semibold text-sm text-[#0F1E36] dark:text-[#EEE]">
                            {item.title}
                          </span>
                        </div>
                        {item.resolutionTag && (
                          <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full shrink-0 ${
                            item.addressedInScope
                              ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200'
                              : 'bg-neutral-200/70 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400'
                          }`}>
                            {item.resolutionTag}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#475569] dark:text-[#AAA] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-[#F8FAFC] dark:bg-[#161616] border border-[#E2E8F0] dark:border-[#262626]">
                  <p className="text-xs sm:text-sm text-[#475569] dark:text-[#BBB] leading-relaxed">
                    Prior to this system, operations were constrained by manual workflows, fragmented records, and a lack of consolidated tooling.
                  </p>
                </div>
              )}
            </section>

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                SECTION 02: CORE CAPABILITIES & SOLUTIONS
               ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <section className="space-y-5 pt-10 border-t border-[#E2E8F0] dark:border-[#222]">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#0284C7] dark:text-[#F472B6]" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-[#64748B] dark:text-[#888]">
                  02 &mdash; CORE CAPABILITIES
                </span>
              </div>

              <div className="space-y-1">
                <h2 className="text-lg sm:text-xl font-bold text-[#0F1E36] dark:text-[#F3F3F2]">
                  Key System Features
                </h2>
                <p className="text-[11px] sm:text-xs text-[#64748B] dark:text-[#999]">
                  Engineered functional modules designed to solve operational requirements.
                </p>
              </div>

              {/* Feature Cards Grid */}
              {project.features && project.features.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {project.features.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      className="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-[#161616] border border-[#E2E8F0] dark:border-[#262626] space-y-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-[#0284C7] dark:text-[#F472B6]">
                          {feat.number}
                        </span>
                        {feat.tag && (
                          <span className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded bg-[#F1F5F9] dark:bg-[#202020] text-[#64748B] dark:text-[#888]">
                            {feat.tag}
                          </span>
                        )}
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#0F1E36] dark:text-[#EEE]">
                        {feat.title}
                      </h4>
                      <p className="text-xs text-[#475569] dark:text-[#AAA] leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                  ))}
                </div>
              ) : null}

              {/* Explicit Responsibilities (e.g., Community / Social Initiatives) */}
              {project.responsibilities && project.responsibilities.length > 0 && (
                <div className="p-4 sm:p-5 rounded-xl bg-white dark:bg-[#161616] border border-[#E2E8F0] dark:border-[#262626] space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider font-bold text-[#0284C7] dark:text-[#F472B6]">
                    Core Responsibilities &amp; Role Execution
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {project.responsibilities.map((resp, rIdx) => (
                      <div
                        key={rIdx}
                        className="p-3.5 rounded-lg bg-[#F8FAFC] dark:bg-[#1A1A1A] border border-[#E2E8F0] dark:border-[#2C2C2C] space-y-2"
                      >
                        <div className="w-6 h-6 rounded-md bg-[#0284C7]/15 dark:bg-[#F472B6]/20 text-[#0284C7] dark:text-[#F472B6] flex items-center justify-center text-xs font-mono font-bold">
                          0{rIdx + 1}
                        </div>
                        <p className="text-xs text-[#334155] dark:text-[#CCC] leading-relaxed">
                          {resp}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                SECTION 03: OUTCOMES & IMPACT
               ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <section className="space-y-5 pt-10 border-t border-[#E2E8F0] dark:border-[#222]">
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-[#0284C7] dark:text-[#F472B6]" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-[#64748B] dark:text-[#888]">
                  03 &mdash; RESULTS &amp; DELIVERABLES
                </span>
              </div>

              {/* Single Crisp Outcome Card */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-[#161616] border border-[#E2E8F0] dark:border-[#262626] space-y-1">
                <div className="text-[11px] font-mono uppercase font-bold text-[#0284C7] dark:text-[#F472B6]">
                  Operational Outcome
                </div>
                <p className="text-xs text-[#475569] dark:text-[#BBB] leading-relaxed">
                  {project.outcome}
                </p>
              </div>

              {/* Explicit Community Impact (if present) */}
              {project.impact && project.impact.length > 0 && (
                <div className="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-[#161616] border border-[#E2E8F0] dark:border-[#262626] space-y-2.5">
                  <div className="text-[11px] font-mono uppercase tracking-wider font-bold text-[#10B981] dark:text-[#34D399]">
                    {project.id === 'dengue-awareness-project' ? 'Measurable Community Impact' : 'Measurable Impact & Delivered Value'}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {project.impact.map((imp, iIdx) => (
                      <div
                        key={iIdx}
                        className="p-3 rounded-lg bg-[#F0FDF4] dark:bg-[#064E3B]/20 border border-[#BBF7D0] dark:border-[#059669]/30 space-y-1"
                      >
                        <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#059669] dark:text-[#34D399]">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Impact 0{iIdx + 1}</span>
                        </div>
                        <p className="text-xs text-[#334155] dark:text-[#D1D5DB] leading-relaxed">
                          {imp}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Metrics Row */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                  {project.metrics.map((m, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-3.5 rounded-xl bg-white dark:bg-[#161616] border border-[#E2E8F0] dark:border-[#262626] text-center"
                    >
                      <div className="text-[10px] font-mono uppercase text-[#64748B] dark:text-[#888]">
                        {m.label}
                      </div>
                      <div className="text-sm sm:text-base font-bold text-[#0284C7] dark:text-[#F472B6] mt-0.5">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Key Takeaways Checklist */}
              {project.keyHighlights && project.keyHighlights.length > 0 && (
                <div className="p-4 sm:p-5 rounded-xl bg-white dark:bg-[#161616] border border-[#E2E8F0] dark:border-[#262626] space-y-2.5">
                  <div className="text-xs font-mono uppercase tracking-wider font-bold text-[#64748B] dark:text-[#888]">
                    Key Accomplishments
                  </div>
                  <div className="space-y-2">
                    {project.keyHighlights.map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-[#334155] dark:text-[#CCC]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] mt-0.5 shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                SECTION 04: TECHNICAL ARCHITECTURE
               ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <section className="space-y-4 pt-10 border-t border-[#E2E8F0] dark:border-[#222]">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#0284C7] dark:text-[#F472B6]" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-[#64748B] dark:text-[#888]">
                  04 &mdash; TECH STACK
                </span>
              </div>

              {/* Grouped Stack Matrix */}
              {project.techStackGrouped && project.techStackGrouped.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  {project.techStackGrouped.map((grp, gIdx) => (
                    <div
                      key={gIdx}
                      className="p-3.5 rounded-xl bg-white dark:bg-[#161616] border border-[#E2E8F0] dark:border-[#262626] space-y-2"
                    >
                      <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#64748B] dark:text-[#888]">
                        {grp.category}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {grp.items.map((item, iIdx) => (
                          <span
                            key={iIdx}
                            className="px-2 py-0.5 rounded-md bg-[#F1F5F9] dark:bg-[#202020] text-[10px] font-mono text-[#0F1E36] dark:text-[#DDD] border border-[#E2E8F0] dark:border-[#2C2C2C]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg bg-white dark:bg-[#161616] border border-[#E2E8F0] dark:border-[#262626] text-xs font-mono text-[#0284C7] dark:text-[#F472B6]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </section>

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                SECTION I: PROJECT-TO-PROJECT NAVIGATION
               ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <nav
              aria-label="Project navigation"
              className="pt-10 border-t border-[#E2E8F0] dark:border-[#222] flex items-center justify-between gap-4"
            >
              {onSelectProject && prevProject ? (
                <button
                  onClick={() => onSelectProject(prevProject)}
                  className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#CBD5E1] dark:border-[#333] hover:border-[#0284C7] dark:hover:border-[#F472B6] text-xs font-mono font-bold uppercase tracking-wider text-[#0F1E36] dark:text-[#EEE] transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
                  <span>Previous</span>
                </button>
              ) : (
                <div />
              )}

              {/* Center Connect Affordance */}
              <div className="flex items-center gap-3 text-xs font-mono">
                <button
                  onClick={onClose}
                  className="text-[#64748B] dark:text-[#888] hover:text-[#0F1E36] dark:hover:text-white transition-colors cursor-pointer"
                >
                  View All Projects
                </button>
                <span className="text-[#CBD5E1] dark:text-[#444]">&bull;</span>
                <a
                  href="#contact"
                  onClick={() => onClose()}
                  className="text-[#0284C7] dark:text-[#F472B6] font-bold hover:underline cursor-pointer"
                >
                  Get In Touch &rarr;
                </a>
              </div>

              {onSelectProject && nextProject ? (
                <button
                  onClick={() => onSelectProject(nextProject)}
                  className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#CBD5E1] dark:border-[#333] hover:border-[#0284C7] dark:hover:border-[#F472B6] text-xs font-mono font-bold uppercase tracking-wider text-[#0F1E36] dark:text-[#EEE] transition-colors cursor-pointer"
                >
                  <span>Next</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              ) : (
                <div />
              )}
            </nav>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
