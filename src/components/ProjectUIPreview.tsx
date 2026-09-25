import React, { useState } from 'react';
import { Project } from '../types';
import payrollImg from '../assets/images/payroll.png';
import sosproImg from '../assets/images/sospro.png';
import gpaTrackerImg from '../assets/images/gpaTracker.png';
import teravinceImg from '../assets/images/teravince.jpg';
import portfolioImg from '../assets/images/portfolio.png';
import {
  ExternalLink,
  Layers,
  Terminal,
  Database,
  CheckCircle2,
  TrendingUp,
  Activity,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Cpu,
  BarChart3,
  FileSpreadsheet,
  GraduationCap,
  Users,
  Check,
  FileText,
  ZoomIn,
  X
} from 'lucide-react';

interface ProjectUIPreviewProps {
  project: Project;
  variant?: 'featured' | 'card' | 'detail';
  className?: string;
}

export const ProjectUIPreview: React.FC<ProjectUIPreviewProps> = ({
  project,
  variant = 'card',
  className = ''
}) => {
  const isFeatured = variant === 'featured';
  const isDetail = variant === 'detail';
  const [isZoomed, setIsZoomed] = useState(false);

  // Chrome window header
  const renderChrome = (title: string, badge?: string) => (
    <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 border-b border-[#E2E8F0] dark:border-[#262626] bg-[#F8FAFC]/90 dark:bg-[#161616]/90 select-none">
      <div className="flex items-center gap-1.5 sm:gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80 inline-block" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80 inline-block" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80 inline-block" />
        <div className="ml-2 px-2 sm:px-3 py-0.5 rounded-md bg-white dark:bg-[#202020] border border-[#E2E8F0] dark:border-[#2C2C2C] text-[10px] sm:text-[11px] font-mono text-[#64748B] dark:text-[#999] truncate max-w-[140px] sm:max-w-[220px]">
          {title}
        </div>
      </div>
      {badge && (
        <span className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-[#ECFDF5] dark:bg-[#064E3B]/40 text-[#059669] dark:text-[#34D399] border border-[#A7F3D0] dark:border-[#059669]/40">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
          {badge}
        </span>
      )}
    </div>
  );

  // Render project-specific authentic UI representations
  const renderContent = () => {
    switch (project.id) {
      case 'vidhelp':
        return (
          <div className="p-3 sm:p-5 font-sans space-y-3 sm:space-y-4 select-none">
            {/* Top Operational Bar */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-[#E2E8F0] dark:border-[#262626]">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-[#0284C7] text-white flex items-center justify-center text-xs font-bold font-mono">
                  VH
                </span>
                <div>
                  <div className="text-[11px] sm:text-xs font-bold text-[#0F1E36] dark:text-[#F3F3F2]">
                    VIDHELP &mdash; TikTok Live Partner Operations
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-[#64748B] dark:text-[#888] font-mono">
                    Authenticated Admin Command &bull; Centralized System
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#0284C7] dark:text-[#F472B6] bg-[#E0F2FE] dark:bg-[#F472B6]/15 px-2 py-0.5 rounded">
                <ShieldCheck className="w-3 h-3" />
                <span>Authenticated Admin</span>
              </div>
            </div>

            {/* 4 Micro KPI Metric Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <div className="p-2 sm:p-2.5 rounded-lg bg-[#F1F5F9] dark:bg-[#1A1A1A] border border-[#E2E8F0] dark:border-[#2A2A2A]">
                <div className="text-[9px] font-mono uppercase text-[#64748B] dark:text-[#888]">Brand Partners</div>
                <div className="text-xs sm:text-sm font-bold text-[#0F1E36] dark:text-[#F3F3F2] mt-0.5">24 Active</div>
              </div>
              <div className="p-2 sm:p-2.5 rounded-lg bg-[#F1F5F9] dark:bg-[#1A1A1A] border border-[#E2E8F0] dark:border-[#2A2A2A]">
                <div className="text-[9px] font-mono uppercase text-[#64748B] dark:text-[#888]">Active Teams</div>
                <div className="text-xs sm:text-sm font-bold text-[#0284C7] dark:text-[#38BDF8] mt-0.5">12 Live Crews</div>
              </div>
              <div className="p-2 sm:p-2.5 rounded-lg bg-[#F1F5F9] dark:bg-[#1A1A1A] border border-[#E2E8F0] dark:border-[#2A2A2A]">
                <div className="text-[9px] font-mono uppercase text-[#64748B] dark:text-[#888]">Period Revenue</div>
                <div className="text-xs sm:text-sm font-bold text-[#10B981] dark:text-[#34D399] mt-0.5">$64,800</div>
              </div>
              <div className="p-2 sm:p-2.5 rounded-lg bg-[#F1F5F9] dark:bg-[#1A1A1A] border border-[#E2E8F0] dark:border-[#2A2A2A]">
                <div className="text-[9px] font-mono uppercase text-[#64748B] dark:text-[#888]">Churn Warning</div>
                <div className="text-xs sm:text-sm font-bold text-[#F59E0B] dark:text-[#FBBF24] mt-0.5">1 Risk Flagged</div>
              </div>
            </div>

            {/* Interface Body Split: Live Pipeline Table & ML Trend Curve */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 pt-1">
              {/* Brand Livestream Table (Unified CRUD) */}
              <div className={`${isDetail ? 'md:col-span-7' : 'md:col-span-12'} p-2.5 sm:p-3 rounded-xl bg-white dark:bg-[#161616] border border-[#E2E8F0] dark:border-[#262626] space-y-2`}>
                <div className="flex items-center justify-between text-[10px] font-mono uppercase font-bold text-[#64748B] dark:text-[#888]">
                  <span>Brand Livestreams (Unified CRUD)</span>
                  <span className="text-[#0284C7] dark:text-[#F472B6]">PostgreSQL RLS</span>
                </div>
                <div className="space-y-1.5 text-[10px] sm:text-[11px]">
                  <div className="flex items-center justify-between p-1.5 rounded bg-[#F8FAFC] dark:bg-[#1E1E1E]">
                    <div className="flex items-center gap-2 truncate">
                      <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                      <span className="font-semibold text-[#0F1E36] dark:text-[#EEE]">GlowVibe Beauty (TikTok Live)</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#DCFCE7] text-[#15803D] dark:bg-[#14532D] dark:text-[#86EFAC]">
                      Healthy &bull; Low Risk
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-1.5 rounded bg-[#F8FAFC] dark:bg-[#1E1E1E]">
                    <div className="flex items-center gap-2 truncate">
                      <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
                      <span className="font-semibold text-[#0F1E36] dark:text-[#EEE]">UrbanKicks Store</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#FEE2E2] text-[#B91C1C] dark:bg-[#7F1D1D] dark:text-[#FCA5A5]">
                      Early Churn Warning
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-1.5 rounded bg-[#F8FAFC] dark:bg-[#1E1E1E]">
                    <div className="flex items-center gap-2 truncate">
                      <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
                      <span className="font-semibold text-[#0F1E36] dark:text-[#EEE]">NovaTech Official Store</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#DBEAFE] text-[#1D4ED8] dark:bg-[#1E3A8A] dark:text-[#93C5FD]">
                      Healthy &bull; Active
                    </span>
                  </div>
                </div>
              </div>

              {/* ML Yield Forecast Graph */}
              {(isFeatured || isDetail) && (
                <div className={`${isDetail ? 'md:col-span-5' : 'hidden md:block md:col-span-12'} p-2.5 sm:p-3 rounded-xl bg-white dark:bg-[#161616] border border-[#E2E8F0] dark:border-[#262626] space-y-2`}>
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase font-bold text-[#64748B] dark:text-[#888]">
                    <span>ML Revenue Forecast Curve</span>
                    <span className="text-[#10B981]">+21.5% Trajectory</span>
                  </div>
                  {/* Visual SVG Trend Curve */}
                  <div className="h-16 sm:h-20 w-full flex items-end">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 200 60" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="vidhelpGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#0284C7" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#0284C7" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,50 Q40,42 80,30 T160,18 T200,8 L200,60 L0,60 Z"
                        fill="url(#vidhelpGrad)"
                      />
                      <path
                        d="M0,50 Q40,42 80,30 T160,18 T200,8"
                        fill="none"
                        stroke="#0284C7"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                      <line x1="160" y1="0" x2="160" y2="60" stroke="#94A3B8" strokeDasharray="2 2" strokeWidth="1" />
                      <circle cx="200" cy="8" r="3" fill="#10B981" />
                    </svg>
                  </div>
                  <div className="flex justify-between text-[9px] font-mono text-[#64748B] dark:text-[#888]">
                    <span>W1 Stream</span>
                    <span>W2 Stream</span>
                    <span>W3 Actual</span>
                    <span className="text-[#0284C7] dark:text-[#38BDF8] font-bold">W4 ML Forecast</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        );

      case 'sales-analysis-automation':
        return (
          <div className="font-sans select-none">
            {/* Top Operational Bar */}
            <div className="flex flex-wrap items-center justify-between gap-2 p-3 sm:p-4 border-b border-[#E2E8F0] dark:border-[#262626] bg-[#0F766E]/10 dark:bg-[#115E59]/20">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-[#0F766E] text-white flex items-center justify-center text-xs font-bold font-mono">
                  DA
                </span>
                <div>
                  <div className="text-[11px] sm:text-xs font-bold text-[#0F1E36] dark:text-[#F3F3F2]">
                    Sales Analysis Automation &bull; Trend Discovery Pipeline
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-[#64748B] dark:text-[#888] font-mono">
                    Python &bull; Kaggle Dataset &bull; Matplotlib &bull; Seaborn &bull; Multi-Month ETL
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-[#0F766E] dark:text-[#2DD4BF] bg-[#CCFBF1] dark:bg-[#134E4A]/40 px-2.5 py-0.5 rounded font-bold">
                DATA ANALYST
              </span>
            </div>

            {/* Real Screenshot Presentation or Interactive Data Analytics Visualizer */}
            {project.imageUrl ? (
              <div
                onClick={() => setIsZoomed(true)}
                className="relative group/zoom overflow-hidden bg-slate-950 flex items-center justify-center border-b border-[#E2E8F0] dark:border-[#262626] cursor-pointer"
              >
                <img
                  src={project.imageUrl}
                  alt="Sales Analysis Automation Dashboard"
                  className="w-full h-auto max-h-[480px] object-contain object-top transition-transform duration-500 group-hover/zoom:scale-[1.015]"
                  loading="eager"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/zoom:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-black/85 backdrop-blur-md text-white text-xs font-mono font-bold shadow-xl">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>Click to view sales report</span>
                  </span>
                </div>
              </div>
            ) : (
              <div className="p-4 sm:p-5 bg-[#0A0F1D] text-white border-b border-[#E2E8F0] dark:border-[#262626] space-y-4">
                {/* Pipeline Execution Terminal */}
                <div className="rounded-lg bg-[#050914] border border-[#1E293B] p-3.5 font-mono text-[11px] leading-relaxed text-[#94A3B8]">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#1E293B] text-[10px] text-[#64748B]">
                    <span className="flex items-center gap-1.5 text-[#2DD4BF]">
                      <Terminal className="w-3 h-3" /> sales_etl_pipeline.py
                    </span>
                    <span className="text-[#10B981] font-bold">● EXECUTION COMPLETE</span>
                  </div>
                  <div className="text-[#38BDF8]">$ python run_sales_analysis.py --dataset kaggle_12m_retail.csv</div>
                  <div className="text-[#E2E8F0]">&gt; Merged 12 monthly CSV files: <span className="text-[#FBBF24]">185,950 total rows</span></div>
                  <div className="text-[#E2E8F0]">&gt; Automated missing data drop &amp; regex address cleaning: <span className="text-[#34D399]">0 null entries</span></div>
                  <div className="text-[#E2E8F0]">&gt; Generated exploratory Matplotlib &amp; Seaborn visualizations: <span className="text-[#A78BFA]">Saved to output/</span></div>
                </div>

                {/* KPI Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <div className="p-3 rounded-lg bg-[#0E1726] border border-[#1E293B]">
                    <div className="text-[9px] font-mono uppercase text-[#64748B]">Peak Sales Month</div>
                    <div className="text-sm font-bold text-[#F8FAFC] mt-0.5">December ($4.61M)</div>
                    <div className="text-[9px] text-[#34D399] font-mono mt-1">Holiday demand spike</div>
                  </div>
                  <div className="p-3 rounded-lg bg-[#0E1726] border border-[#1E293B]">
                    <div className="text-[9px] font-mono uppercase text-[#64748B]">Leading City</div>
                    <div className="text-sm font-bold text-[#F8FAFC] mt-0.5">San Francisco ($8.26M)</div>
                    <div className="text-[9px] text-[#38BDF8] font-mono mt-1">Top geographic market</div>
                  </div>
                  <div className="p-3 rounded-lg bg-[#0E1726] border border-[#1E293B]">
                    <div className="text-[9px] font-mono uppercase text-[#64748B]">Top Product Association</div>
                    <div className="text-sm font-bold text-[#F8FAFC] mt-0.5">iPhone + Cable</div>
                    <div className="text-[9px] text-[#FBBF24] font-mono mt-1">1,005 multi-item orders</div>
                  </div>
                </div>
              </div>
            )}

            {/* Verification Footer */}
            <div className="p-3 sm:p-4 bg-white dark:bg-[#121212] flex flex-wrap items-center justify-between gap-3 text-[10px] sm:text-[11px]">
              <div className="flex items-center gap-4">
                <div>
                  <span className="text-[9px] font-mono uppercase text-[#64748B] dark:text-[#888]">Data Pipeline</span>
                  <div className="font-bold text-[#0F1E36] dark:text-[#EEE]">Python &amp; Kaggle ETL</div>
                </div>
                <div>
                  <span className="text-[9px] font-mono uppercase text-[#64748B] dark:text-[#888]">Visualization</span>
                  <div className="font-bold text-[#0F1E36] dark:text-[#EEE]">Matplotlib &amp; Seaborn</div>
                </div>
                <div>
                  <span className="text-[9px] font-mono uppercase text-[#64748B] dark:text-[#888]">Key Output</span>
                  <div className="font-bold text-[#0F766E] dark:text-[#2DD4BF]">Peak Months &amp; Product Co-Purchases</div>
                </div>
              </div>
              {project.imageUrl && (
                <button
                  onClick={() => setIsZoomed(true)}
                  className="inline-flex items-center gap-1 font-mono text-[10px] text-[#0F766E] dark:text-[#2DD4BF] hover:underline font-bold"
                >
                  <ZoomIn className="w-3 h-3" />
                  <span>Enlarge View</span>
                </button>
              )}
            </div>
          </div>
        );

      case 'payroll-system':
        return (
          <div className="font-sans select-none">
            {/* Top Operational Bar */}
            <div className="flex flex-wrap items-center justify-between gap-2 p-3 sm:p-4 border-b border-[#E2E8F0] dark:border-[#262626] bg-[#F8FAFC]/90 dark:bg-[#161616]/90">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-[#D97706] text-white flex items-center justify-center text-xs font-bold font-mono">
                  BB
                </span>
                <div>
                  <div className="text-[11px] sm:text-xs font-bold text-[#0F1E36] dark:text-[#F3F3F2]">
                    Banana Byte &bull; Payroll &amp; Payslip Portal
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-[#64748B] dark:text-[#888] font-mono">
                    Python &bull; PostgreSQL &bull; Werkzeug Auth &bull; Auto-PDF Invoicing
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-[#D97706] dark:text-[#FBBF24] bg-[#FEF3C7] dark:bg-[#78350F]/40 px-2.5 py-0.5 rounded font-bold">
                1-Week Exam Project
              </span>
            </div>

            {/* Real Screenshot Presentation with Zoom Affordance */}
            <div
              onClick={() => setIsZoomed(true)}
              className="relative group/zoom overflow-hidden bg-slate-950 flex items-center justify-center border-b border-[#E2E8F0] dark:border-[#262626] cursor-pointer"
            >
              <img
                src={project.imageUrl || payrollImg}
                alt="Banana Byte Payroll Management System Interface"
                className="w-full h-auto max-h-[480px] object-contain object-top transition-transform duration-500 group-hover/zoom:scale-[1.015]"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/zoom:opacity-100 transition-opacity flex items-center justify-center">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-black/85 backdrop-blur-md text-white text-xs font-mono font-bold shadow-xl">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Click to view full screenshot</span>
                </span>
              </div>
            </div>

            {/* Authenticated Verification Footer */}
            <div className="p-3 sm:p-4 bg-white dark:bg-[#161616] flex flex-wrap items-center justify-between gap-2.5 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-bold text-[#0F1E36] dark:text-[#F3F3F2]">Verified System Architecture</span>
                <span className="text-[#64748B] dark:text-[#888] hidden sm:inline">&bull; 100% Built from Scratch</span>
              </div>
              <div className="flex items-center gap-2 text-[11px]">
                <span className="inline-flex items-center gap-1 text-[#0284C7] dark:text-[#38BDF8] font-bold bg-[#E0F2FE] dark:bg-[#0369A1]/30 px-2 py-0.5 rounded">
                  <FileText className="w-3 h-3" /> Auto-Generated PDF
                </span>
                <span className="inline-flex items-center gap-1 text-[#059669] dark:text-[#34D399] font-bold bg-[#ECFDF5] dark:bg-[#064E3B]/40 px-2 py-0.5 rounded">
                  <CheckCircle2 className="w-3 h-3" /> PostgreSQL Verified
                </span>
              </div>
            </div>
          </div>
        );

      case 'student-gpa-tracker':
        return (
          <div className="font-sans select-none">
            {/* Top Operational Bar */}
            <div className="flex flex-wrap items-center justify-between gap-2 p-3 sm:p-4 border-b border-[#E2E8F0] dark:border-[#262626] bg-[#F5F3FF]/80 dark:bg-[#1E1035]/80">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-[#8B5CF6] text-white flex items-center justify-center text-xs font-bold font-mono">
                  GPA
                </span>
                <div>
                  <div className="text-[11px] sm:text-xs font-bold text-[#0F1E36] dark:text-[#F3F3F2]">
                    Student GPA Tracker &bull; Early Decline Forecasting
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-[#64748B] dark:text-[#888] font-mono">
                    Django &bull; Python ML &bull; PostgreSQL &bull; pgAdmin &bull; Admin Panel
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-[#8B5CF6] dark:text-[#C084FC] bg-[#EDE9FE] dark:bg-[#5B21B6]/40 px-2.5 py-0.5 rounded font-bold">
                DATA SCIENTIST + FULLSTACK
              </span>
            </div>

            {/* Real Screenshot Presentation with Zoom Affordance */}
            <div
              onClick={() => setIsZoomed(true)}
              className="relative group/zoom overflow-hidden bg-slate-950 flex items-center justify-center border-b border-[#E2E8F0] dark:border-[#262626] cursor-pointer"
            >
              <img
                src={project.imageUrl || gpaTrackerImg}
                alt="Student GPA Tracker Interface"
                className="w-full h-auto max-h-[480px] object-contain object-top transition-transform duration-500 group-hover/zoom:scale-[1.015]"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/zoom:opacity-100 transition-opacity flex items-center justify-center">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-black/85 backdrop-blur-md text-white text-xs font-mono font-bold shadow-xl">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Click to view full screenshot</span>
                </span>
              </div>
            </div>

            {/* Verification Footer */}
            <div className="p-3 sm:p-4 bg-white dark:bg-[#121212] flex flex-wrap items-center justify-between gap-3 text-[10px] sm:text-[11px]">
              <div className="flex items-center gap-4">
                <div>
                  <span className="text-[9px] font-mono uppercase text-[#64748B] dark:text-[#888]">Architecture</span>
                  <div className="font-bold text-[#0F1E36] dark:text-[#EEE]">Django + ML</div>
                </div>
                <div>
                  <span className="text-[9px] font-mono uppercase text-[#64748B] dark:text-[#888]">Database</span>
                  <div className="font-bold text-[#0F1E36] dark:text-[#EEE]">PostgreSQL + pgAdmin</div>
                </div>
                <div>
                  <span className="text-[9px] font-mono uppercase text-[#64748B] dark:text-[#888]">Admin</span>
                  <div className="font-bold text-[#8B5CF6] dark:text-[#C084FC]">CRUD &amp; Retraining</div>
                </div>
              </div>
              <button
                onClick={() => setIsZoomed(true)}
                className="inline-flex items-center gap-1 font-mono text-[10px] text-[#8B5CF6] dark:text-[#C084FC] hover:underline font-bold"
              >
                <ZoomIn className="w-3 h-3" />
                <span>Enlarge View</span>
              </button>
            </div>
          </div>
        );

      case 'teravince':
        return (
          <div className="font-sans select-none">
            {/* Top Operational Bar */}
            <div className="flex flex-wrap items-center justify-between gap-2 p-3 sm:p-4 border-b border-[#E2E8F0] dark:border-[#262626] bg-[#0284C7]/10 dark:bg-[#0369A1]/20">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-[#0284C7] text-white flex items-center justify-center text-xs font-bold font-mono">
                  TV
                </span>
                <div>
                  <div className="text-[11px] sm:text-xs font-bold text-[#0F1E36] dark:text-[#F3F3F2]">
                    Teravince &bull; AI-Powered Performance Evaluation Platform
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-[#64748B] dark:text-[#888] font-mono">
                    Figma to React &bull; Dashboards &bull; Node JS &bull; MongoDB &bull; GitHub
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-[#0284C7] dark:text-[#38BDF8] bg-[#E0F2FE] dark:bg-[#0369A1]/40 px-2.5 py-0.5 rounded font-bold">
                FRONTEND DEVELOPER
              </span>
            </div>

            {/* Real Screenshot Presentation with Zoom Affordance */}
            <div
              onClick={() => setIsZoomed(true)}
              className="relative group/zoom overflow-hidden bg-slate-950 flex items-center justify-center border-b border-[#E2E8F0] dark:border-[#262626] cursor-pointer"
            >
              <img
                src={project.imageUrl || teravinceImg}
                alt="Teravince Performance Evaluation Platform"
                className="w-full h-auto max-h-[480px] object-contain object-top transition-transform duration-500 group-hover/zoom:scale-[1.015]"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/zoom:opacity-100 transition-opacity flex items-center justify-center">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-black/85 backdrop-blur-md text-white text-xs font-mono font-bold shadow-xl">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Click to view full screenshot</span>
                </span>
              </div>
            </div>

            {/* Verification Footer */}
            <div className="p-3 sm:p-4 bg-white dark:bg-[#121212] flex flex-wrap items-center justify-between gap-3 text-[10px] sm:text-[11px]">
              <div className="flex items-center gap-4">
                <div>
                  <span className="text-[9px] font-mono uppercase text-[#64748B] dark:text-[#888]">UI Conversion</span>
                  <div className="font-bold text-[#0F1E36] dark:text-[#EEE]">Figma &rarr; React</div>
                </div>
                <div>
                  <span className="text-[9px] font-mono uppercase text-[#64748B] dark:text-[#888]">Styling</span>
                  <div className="font-bold text-[#0F1E36] dark:text-[#EEE]">Tailwind CSS</div>
                </div>
                <div>
                  <span className="text-[9px] font-mono uppercase text-[#64748B] dark:text-[#888]">Integration</span>
                  <div className="font-bold text-[#0284C7] dark:text-[#38BDF8]">Node JS + MongoDB + GitHub</div>
                </div>
              </div>
              <button
                onClick={() => setIsZoomed(true)}
                className="inline-flex items-center gap-1 font-mono text-[10px] text-[#0284C7] dark:text-[#38BDF8] hover:underline font-bold"
              >
                <ZoomIn className="w-3 h-3" />
                <span>Enlarge View</span>
              </button>
            </div>
          </div>
        );

      case 'dengue-awareness-project':
        return (
          <div className="font-sans select-none">
            {/* Top Operational Bar */}
            <div className="flex flex-wrap items-center justify-between gap-2 p-3 sm:p-4 border-b border-[#E2E8F0] dark:border-[#262626] bg-[#FFF1F2]/80 dark:bg-[#1A0C10]/80">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-[#E11D48] text-white flex items-center justify-center text-xs font-bold font-mono">
                  DA
                </span>
                <div>
                  <div className="text-[11px] sm:text-xs font-bold text-[#0F1E36] dark:text-[#F3F3F2]">
                    Dengue Awareness Social Project
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-[#64748B] dark:text-[#888] font-mono">
                    Cikarang, Bekasi, West Java &bull; Event Organizer &amp; Timekeeper
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-[#E11D48] dark:text-[#FB7185] bg-[#FFE4E6] dark:bg-[#881337]/40 px-2.5 py-0.5 rounded font-bold">
                COMMUNITY INITIATIVE
              </span>
            </div>

            {/* Real Project Banner Presentation with Zoom Affordance */}
            <div
              onClick={() => setIsZoomed(true)}
              className="relative group/zoom overflow-hidden bg-slate-950 flex items-center justify-center border-b border-[#E2E8F0] dark:border-[#262626] cursor-pointer"
            >
              <img
                src={project.imageUrl || sosproImg}
                alt="Dengue Awareness Social Project - Cikarang, Bekasi"
                className="w-full h-auto max-h-[480px] object-contain object-top transition-transform duration-500 group-hover/zoom:scale-[1.015]"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/zoom:opacity-100 transition-opacity flex items-center justify-center">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-black/85 backdrop-blur-md text-white text-xs font-mono font-bold shadow-xl">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Click to view full photo</span>
                </span>
              </div>
            </div>

            {/* Verification Footer & Responsibilities */}
            <div className="p-3 sm:p-4 bg-white dark:bg-[#161616] flex flex-wrap items-center justify-between gap-2.5 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E11D48] animate-pulse" />
                <span className="font-bold text-[#0F1E36] dark:text-[#F3F3F2]">Public Health Community Outreach</span>
                <span className="text-[#64748B] dark:text-[#888] hidden sm:inline">&bull; DBD Prevention &amp; 3M Plus</span>
              </div>
              <div className="flex items-center gap-2 text-[11px]">
                <span className="inline-flex items-center gap-1 text-[#E11D48] dark:text-[#FB7185] font-bold bg-[#FFE4E6] dark:bg-[#881337]/30 px-2 py-0.5 rounded">
                  <CheckCircle2 className="w-3 h-3" /> Event Organizer
                </span>
                <span className="inline-flex items-center gap-1 text-[#059669] dark:text-[#34D399] font-bold bg-[#ECFDF5] dark:bg-[#064E3B]/40 px-2 py-0.5 rounded">
                  <Check className="w-3 h-3" /> Verified Impact
                </span>
              </div>
            </div>
          </div>
        );

      case 'web-portfolio':
      default:
        return (
          <div className="font-sans select-none">
            {/* Top Operational Bar */}
            <div className="flex flex-wrap items-center justify-between gap-2 p-3 sm:p-4 border-b border-[#E2E8F0] dark:border-[#262626] bg-[#0284C7]/10 dark:bg-[#F472B6]/10">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-[#0F1E36] dark:bg-[#F472B6] text-white dark:text-[#111] flex items-center justify-center text-xs font-bold font-mono">
                  DP
                </span>
                <div>
                  <div className="text-[11px] sm:text-xs font-bold text-[#0F1E36] dark:text-[#F3F3F2]">
                    Interactive Engineering Portfolio &bull; Live Web Showcase
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-[#64748B] dark:text-[#888] font-mono">
                    React 18 &bull; Vite &bull; Tailwind CSS &bull; Motion Transitions &bull; High Contrast
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-[#0284C7] dark:text-[#F472B6] bg-[#E0F2FE] dark:bg-[#F472B6]/15 px-2.5 py-0.5 rounded font-bold">
                LIVE PRODUCTION
              </span>
            </div>

            {/* Real Screenshot Presentation with Zoom Affordance */}
            <div
              onClick={() => setIsZoomed(true)}
              className="relative group/zoom overflow-hidden bg-slate-950 flex items-center justify-center border-b border-[#E2E8F0] dark:border-[#262626] cursor-pointer"
            >
              <img
                src={project.imageUrl || portfolioImg}
                alt="Personal Portfolio Web Page at a Glance"
                className="w-full h-auto max-h-[480px] object-contain object-top transition-transform duration-500 group-hover/zoom:scale-[1.015]"
                loading="eager"
                decoding="async"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/zoom:opacity-100 transition-opacity flex items-center justify-center">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-black/85 backdrop-blur-md text-white text-xs font-mono font-bold shadow-xl">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Click to view portfolio snapshot</span>
                </span>
              </div>
            </div>

            {/* Verification Footer with Live URL launch */}
            <div className="p-3 sm:p-4 bg-white dark:bg-[#121212] flex flex-wrap items-center justify-between gap-3 text-[10px] sm:text-[11px]">
              <div className="flex items-center gap-4">
                <div>
                  <span className="text-[9px] font-mono uppercase text-[#64748B] dark:text-[#888]">Architecture</span>
                  <div className="font-bold text-[#0F1E36] dark:text-[#EEE]">React + Tailwind SPA</div>
                </div>
                <div>
                  <span className="text-[9px] font-mono uppercase text-[#64748B] dark:text-[#888]">Live URL</span>
                  <a
                    href={project.liveUrl || 'https://yasuarin-portofolio.vercel.app/'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#0284C7] dark:text-[#F472B6] hover:underline flex items-center gap-1"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="truncate max-w-[180px] sm:max-w-[280px]">
                      {project.liveUrl || 'https://yasuarin-portofolio.vercel.app/'}
                    </span>
                    <ExternalLink className="w-2.5 h-2.5 shrink-0" />
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={project.liveUrl || 'https://yasuarin-portofolio.vercel.app/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0F1E36] dark:bg-[#F472B6] text-white dark:text-[#111] text-[10px] font-mono font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
                >
                  <span>Open Live URL</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <button
                  onClick={() => setIsZoomed(true)}
                  className="inline-flex items-center gap-1 font-mono text-[10px] text-[#0284C7] dark:text-[#F472B6] hover:underline font-bold"
                >
                  <ZoomIn className="w-3 h-3" />
                  <span>Enlarge</span>
                </button>
              </div>
            </div>
          </div>
        );
    }
  };

  const domainMap: Record<string, string> = {
    vidhelp: 'https://vidhelp-frontend.vercel.app',
    'sales-analysis-automation': 'pipeline.internal.local/sales-etl',
    'payroll-system': 'engine.internal.local/payroll-core',
    'student-gpa-tracker': 'academic-ai.internal.local/forecast',
    teravince: 'https://teravince.app/evaluations',
    'dengue-awareness-project': 'community.cikarang.bekasi/dengue-awareness',
    'web-portfolio': 'https://yasuarin-portofolio.vercel.app'
  };

  const currentDomain = domainMap[project.id] || `app.local/${project.id}`;

  return (
    <>
      <div
        className={`rounded-2xl border border-[#E2E8F0] dark:border-[#262626] bg-[#FFFFFF] dark:bg-[#121212] overflow-hidden shadow-sm transition-all duration-300 ${className}`}
      >
        {renderChrome(currentDomain, project.featured ? 'LIVE IN PROD' : 'VERIFIED')}
        {renderContent()}
      </div>

      {/* Lightbox / Full-Screen Zoom Modal */}
      {isZoomed && (
        <div
          onClick={() => setIsZoomed(false)}
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full bg-[#0E0E0E] rounded-2xl border border-[#333] shadow-2xl overflow-hidden"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-[#262626] bg-[#161616]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  {project.title} &mdash; Verified Preview
                </span>
              </div>
              <button
                onClick={() => setIsZoomed(false)}
                className="p-1.5 rounded-lg bg-[#222] hover:bg-[#333] text-[#AAA] hover:text-white transition-colors cursor-pointer"
                title="Close preview (Esc)"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Image Body */}
            <div className="p-3 sm:p-6 flex items-center justify-center bg-black/60 overflow-auto max-h-[80vh]">
              <img
                src={project.imageUrl || (project.id === 'web-portfolio' ? portfolioImg : project.id === 'teravince' ? teravinceImg : project.id === 'dengue-awareness-project' ? sosproImg : project.id === 'student-gpa-tracker' ? gpaTrackerImg : payrollImg)}
                alt={`${project.title} Full Preview`}
                className="max-w-full h-auto object-contain rounded-lg border border-[#222] shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Modal Footer */}
            <div className="px-4 sm:px-6 py-2.5 bg-[#141414] border-t border-[#262626] flex items-center justify-between text-[11px] font-mono text-[#888]">
              <span>
                {project.id === 'web-portfolio'
                  ? 'Live Portfolio Web Showcase · React & Tailwind SPA · Full-Stack Interactive Architecture'
                  : project.id === 'sales-analysis-automation'
                  ? 'Python Multi-Month Sales ETL Pipeline · Matplotlib & Seaborn Dashboards · Kaggle Dataset'
                  : project.id === 'teravince'
                  ? 'AI-Powered Performance Evaluation Platform · Startups & NGOs · Figma to React'
                  : project.id === 'dengue-awareness-project'
                  ? 'Community Outreach Photo · Cikarang, Bekasi, West Java · Public Health Awareness'
                  : project.id === 'student-gpa-tracker'
                  ? 'Intelligent GPA Forecasting Platform · Django Admin Panel · PostgreSQL & pgAdmin'
                  : '804 × 483 Native Resolution · PostgreSQL · Werkzeug Hashed Auth'}
              </span>
              <button
                onClick={() => setIsZoomed(false)}
                className="text-[#0284C7] dark:text-[#F472B6] hover:underline font-bold cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
