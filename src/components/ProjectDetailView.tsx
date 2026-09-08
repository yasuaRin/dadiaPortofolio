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
  Calendar,
  Users,
  Briefcase,
  Layers,
  Code2,
  Lightbulb,
  Target,
  TrendingUp,
  Cpu,
  ShieldCheck,
  Check
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
              {project.title} &mdash; CASE STUDY
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
                  <span>CASE STUDY &bull; {projectNumberStr}</span>
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
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0F1E36] dark:text-[#F3F3F2]">
                  {project.title}
                </h1>
                <p className="text-lg sm:text-2xl font-serif italic text-[#475569] dark:text-[#AAA]">
                  {project.subtitle}
                </p>
                <p className="text-base sm:text-xl text-[#334155] dark:text-[#DDD] leading-relaxed max-w-3xl pt-2">
                  {project.description}
                </p>
              </div>

              {/* Context Metadata Pill Matrix */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 sm:p-6 rounded-2xl bg-white dark:bg-[#161616] border border-[#E2E8F0] dark:border-[#262626] shadow-sm">
                <div className="space-y-1">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#64748B] dark:text-[#888] font-bold">
                    My Role
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-[#0F1E36] dark:text-[#EEE]">
                    {project.role}
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#64748B] dark:text-[#888] font-bold">
                    Duration / Year
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-[#0F1E36] dark:text-[#EEE]">
                    {project.duration || '2-4 Months'} &bull; {project.year}
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#64748B] dark:text-[#888] font-bold">
                    Context / Team
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-[#0F1E36] dark:text-[#EEE]">
                    {project.team || project.clientOrContext || 'Independent Engineering'}
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#64748B] dark:text-[#888] font-bold">
                    Primary Stack
                  </div>
                  <div className="text-xs sm:text-sm font-mono font-semibold text-[#0284C7] dark:text-[#F472B6] truncate">
                    {project.technologies.slice(0, 3).join(', ')}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0F1E36] dark:bg-[#F472B6] text-white dark:text-[#111] text-xs font-mono font-bold uppercase tracking-widest hover:bg-[#1E3A5F] dark:hover:bg-[#FDA4AF] transition-colors cursor-pointer shadow-sm"
                  >
                    <span>LAUNCH LIVE PLATFORM</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#CBD5E1] dark:border-[#333] hover:border-[#0284C7] dark:hover:border-[#F472B6] text-xs font-mono font-bold uppercase tracking-wider text-[#0F1E36] dark:text-[#EEE] transition-colors cursor-pointer"
                  >
                    <Github className="w-4 h-4" />
                    <span>SOURCE CODE</span>
                  </a>
                )}
              </div>

              {/* Large Product Interface Presentation */}
              <div className="pt-4">
                <ProjectUIPreview project={project} variant="detail" />
              </div>
            </section>

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                SECTION B: THE PROBLEM
               ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <section className="space-y-6 pt-12 border-t border-[#E2E8F0] dark:border-[#222]">
              <div className="flex items-center gap-2.5">
                <Target className="w-5 h-5 text-[#0284C7] dark:text-[#F472B6]" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-[#64748B] dark:text-[#888]">
                  01 &mdash; WHAT WAS THE PROBLEM?
                </span>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0F1E36] dark:text-[#F3F3F2]">
                  The Everyday Challenge We Faced
                </h2>
                <p className="text-base sm:text-lg text-[#334155] dark:text-[#CCC] leading-relaxed">
                  {project.problem}
                </p>
              </div>

              {/* Problem Breakdown Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-amber-50/60 dark:bg-amber-950/15 border border-amber-200/80 dark:border-amber-900/40 space-y-2">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400">
                  The Main Headache
                </div>
                <p className="text-xs sm:text-sm text-[#475569] dark:text-[#BBB] leading-relaxed">
                  People were spending hours doing repetitive manual work, trying to make sense of disconnected files, and worrying about costly mistakes happening under pressure.
                </p>
              </div>
            </section>

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                SECTION C: MY PERSONAL ROLE & RESPONSIBILITIES
               ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <section className="space-y-6 pt-12 border-t border-[#E2E8F0] dark:border-[#222]">
              <div className="flex items-center gap-2.5">
                <Briefcase className="w-5 h-5 text-[#0284C7] dark:text-[#F472B6]" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-[#64748B] dark:text-[#888]">
                  02 &mdash; WHAT WAS MY JOB?
                </span>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0F1E36] dark:text-[#F3F3F2]">
                  {project.role}
                </h2>
                <p className="text-base sm:text-lg text-[#334155] dark:text-[#CCC] leading-relaxed">
                  {project.overview}
                </p>
              </div>

              {/* Responsibilities Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-white dark:bg-[#161616] border border-[#E2E8F0] dark:border-[#262626] space-y-2">
                  <div className="text-xs font-mono uppercase font-bold text-[#0284C7] dark:text-[#F472B6]">
                    What I Designed &amp; Built
                  </div>
                  <p className="text-xs sm:text-sm text-[#475569] dark:text-[#BBB] leading-relaxed">
                    Designed the user screens, organized the data so it stays clean, and connected the front buttons to the background database.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-white dark:bg-[#161616] border border-[#E2E8F0] dark:border-[#262626] space-y-2">
                  <div className="text-xs font-mono uppercase font-bold text-[#0284C7] dark:text-[#F472B6]">
                    How I Worked With Others
                  </div>
                  <p className="text-xs sm:text-sm text-[#475569] dark:text-[#BBB] leading-relaxed">
                    {project.team?.includes('Solo')
                      ? 'Took full ownership from listening to what was needed, testing every edge case, to launching it live.'
                      : 'Worked hand-in-hand with teammates, gathered early feedback, and made sure everyone knew what was coming next.'}
                  </p>
                </div>
              </div>
            </section>

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                SECTION D: THE APPROACH & ARCHITECTURAL DECISIONS
               ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <section className="space-y-6 pt-12 border-t border-[#E2E8F0] dark:border-[#222]">
              <div className="flex items-center gap-2.5">
                <Lightbulb className="w-5 h-5 text-[#0284C7] dark:text-[#F472B6]" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-[#64748B] dark:text-[#888]">
                  03 &mdash; HOW WE SOLVED IT
                </span>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0F1E36] dark:text-[#F3F3F2]">
                  Step-by-Step From Problem to Fix
                </h2>
                <p className="text-base sm:text-lg text-[#334155] dark:text-[#CCC] leading-relaxed">
                  {project.approach}
                </p>
              </div>

              {/* 4 Step Structured Methodology */}
              {project.approachSteps && project.approachSteps.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {project.approachSteps.map((step, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-5 rounded-2xl bg-white dark:bg-[#161616] border border-[#E2E8F0] dark:border-[#262626] space-y-2"
                    >
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0284C7] dark:text-[#F472B6]">
                        {step.phase}
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-[#0F1E36] dark:text-[#EEE]">
                        {step.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#475569] dark:text-[#BBB] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                SECTION E: TECHNOLOGY STACK (CLEANLY GROUPED)
               ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <section className="space-y-6 pt-12 border-t border-[#E2E8F0] dark:border-[#222]">
              <div className="flex items-center gap-2.5">
                <Cpu className="w-5 h-5 text-[#0284C7] dark:text-[#F472B6]" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-[#64748B] dark:text-[#888]">
                  04 &mdash; TOOLS &amp; TECH WE CHOSE
                </span>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0F1E36] dark:text-[#F3F3F2]">
                  Simple, Reliable Tools for the Job
                </h2>
                <p className="text-base sm:text-lg text-[#334155] dark:text-[#CCC] leading-relaxed">
                  {project.technologyDetails}
                </p>
              </div>

              {/* Clean Grouped Stack Matrix */}
              {project.techStackGrouped && project.techStackGrouped.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
                  {project.techStackGrouped.map((grp, gIdx) => (
                    <div
                      key={gIdx}
                      className="p-4 rounded-2xl bg-white dark:bg-[#161616] border border-[#E2E8F0] dark:border-[#262626] space-y-3"
                    >
                      <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#64748B] dark:text-[#888]">
                        {grp.category}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {grp.items.map((item, iIdx) => (
                          <span
                            key={iIdx}
                            className="px-2 py-1 rounded-md bg-[#F1F5F9] dark:bg-[#202020] text-[11px] font-mono text-[#0F1E36] dark:text-[#DDD] border border-[#E2E8F0] dark:border-[#2C2C2C]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1.5 rounded-lg bg-white dark:bg-[#161616] border border-[#E2E8F0] dark:border-[#262626] text-xs font-mono text-[#0284C7] dark:text-[#F472B6]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </section>

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                SECTION F: KEY FEATURES WITH EVIDENCE
               ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <section className="space-y-6 pt-12 border-t border-[#E2E8F0] dark:border-[#222]">
              <div className="flex items-center gap-2.5">
                <Layers className="w-5 h-5 text-[#0284C7] dark:text-[#F472B6]" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-[#64748B] dark:text-[#888]">
                  05 &mdash; WHAT THE APP DOES
                </span>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0F1E36] dark:text-[#F3F3F2]">
                  Key Features Built for Everyday Use
                </h2>
              </div>

              {/* Feature Cards Grid */}
              {project.features && project.features.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {project.features.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#161616] border border-[#E2E8F0] dark:border-[#262626] space-y-2.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-[#0284C7] dark:text-[#F472B6]">
                          {feat.number}
                        </span>
                        {feat.tag && (
                          <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#F1F5F9] dark:bg-[#202020] text-[#64748B] dark:text-[#888]">
                            {feat.tag}
                          </span>
                        )}
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-[#0F1E36] dark:text-[#EEE]">
                        {feat.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#475569] dark:text-[#BBB] leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                  ))}
                </div>
              ) : null}
            </section>

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                SECTION G: RESULTS & MEASURABLE IMPACT
               ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <section className="space-y-6 pt-12 border-t border-[#E2E8F0] dark:border-[#222]">
              <div className="flex items-center gap-2.5">
                <TrendingUp className="w-5 h-5 text-[#0284C7] dark:text-[#F472B6]" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-[#64748B] dark:text-[#888]">
                  06 &mdash; THE REAL RESULTS
                </span>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0F1E36] dark:text-[#F3F3F2]">
                  How This Helped Real People &amp; Saved Time
                </h2>
                <p className="text-base sm:text-lg text-[#334155] dark:text-[#CCC] leading-relaxed">
                  {project.outcome}
                </p>
              </div>

              {/* Metrics Row */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="grid grid-cols-3 gap-3 pt-2">
                  {project.metrics.map((m, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#161616] border border-[#E2E8F0] dark:border-[#262626] text-center"
                    >
                      <div className="text-[10px] sm:text-xs font-mono uppercase text-[#64748B] dark:text-[#888]">
                        {m.label}
                      </div>
                      <div className="text-lg sm:text-2xl font-bold text-[#0284C7] dark:text-[#F472B6] mt-1">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Key Highlights Checklist */}
              {project.keyHighlights && project.keyHighlights.length > 0 && (
                <div className="p-6 rounded-2xl bg-white dark:bg-[#161616] border border-[#E2E8F0] dark:border-[#262626] space-y-3">
                  <span className="text-xs font-mono uppercase tracking-wider font-bold text-[#64748B] dark:text-[#888] block">
                    Key Takeaways &amp; Accomplishments
                  </span>
                  <div className="space-y-2.5">
                    {project.keyHighlights.map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#334155] dark:text-[#CCC]">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] mt-0.5 shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                SECTION H: FINAL PROJECT SHOWCASE & CTAs
               ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <section className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-[#282828] text-center space-y-6">
              <div className="max-w-xl mx-auto space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-[#0284C7] dark:text-[#F472B6]">
                  READY TO EXPLORE
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0F1E36] dark:text-[#F3F3F2]">
                  Check out {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#AAA]">
                  Try out the live app or return to see the rest of the projects.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0F1E36] dark:bg-[#F472B6] text-white dark:text-[#111] text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#1E3A5F] dark:hover:bg-[#FDA4AF] transition-colors cursor-pointer"
                  >
                    <span>TRY LIVE APP</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                <button
                  onClick={onClose}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#CBD5E1] dark:border-[#333] hover:border-[#0284C7] dark:hover:border-[#F472B6] text-xs font-mono font-bold uppercase tracking-wider text-[#0F1E36] dark:text-[#EEE] transition-colors cursor-pointer"
                >
                  <span>BACK TO ALL PROJECTS</span>
                </button>
              </div>
            </section>

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                SECTION I: PROJECT-TO-PROJECT NAVIGATION
               ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <nav
              aria-label="Project case study navigation"
              className="pt-12 border-t border-[#E2E8F0] dark:border-[#222] flex flex-col sm:flex-row items-center justify-between gap-6"
            >
              {onSelectProject && prevProject ? (
                <button
                  onClick={() => onSelectProject(prevProject)}
                  className="group flex items-center gap-3 text-left p-3 rounded-2xl hover:bg-white dark:hover:bg-[#161616] transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-5 h-5 text-[#64748B] dark:text-[#888] transition-transform duration-200 group-hover:-translate-x-1" />
                  <div>
                    <div className="text-[10px] font-mono uppercase text-[#64748B] dark:text-[#888]">
                      Previous Project
                    </div>
                    <div className="text-sm font-bold text-[#0F1E36] dark:text-[#F3F3F2] group-hover:text-[#0284C7] dark:group-hover:text-[#F472B6]">
                      {prevProject.title}
                    </div>
                  </div>
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
                  View All Work
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
                  className="group flex items-center gap-3 text-right p-3 rounded-2xl hover:bg-white dark:hover:bg-[#161616] transition-colors cursor-pointer"
                >
                  <div>
                    <div className="text-[10px] font-mono uppercase text-[#64748B] dark:text-[#888]">
                      Next Project
                    </div>
                    <div className="text-sm font-bold text-[#0F1E36] dark:text-[#F3F3F2] group-hover:text-[#0284C7] dark:group-hover:text-[#F472B6]">
                      {nextProject.title}
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#64748B] dark:text-[#888] transition-transform duration-200 group-hover:translate-x-1" />
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
