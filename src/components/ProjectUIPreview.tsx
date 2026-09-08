import React from 'react';
import { Project } from '../types';
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
  Check
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
                    VIDHELP Operations Intelligence
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-[#64748B] dark:text-[#888] font-mono">
                    Agency Telemetry &bull; Capstone Production
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#0284C7] dark:text-[#F472B6] bg-[#E0F2FE] dark:bg-[#F472B6]/15 px-2 py-0.5 rounded">
                <Activity className="w-3 h-3" />
                <span>Real-Time Sync</span>
              </div>
            </div>

            {/* 4 Micro KPI Metric Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <div className="p-2 sm:p-2.5 rounded-lg bg-[#F1F5F9] dark:bg-[#1A1A1A] border border-[#E2E8F0] dark:border-[#2A2A2A]">
                <div className="text-[9px] font-mono uppercase text-[#64748B] dark:text-[#888]">Active Creators</div>
                <div className="text-xs sm:text-sm font-bold text-[#0F1E36] dark:text-[#F3F3F2] mt-0.5">42 Active</div>
              </div>
              <div className="p-2 sm:p-2.5 rounded-lg bg-[#F1F5F9] dark:bg-[#1A1A1A] border border-[#E2E8F0] dark:border-[#2A2A2A]">
                <div className="text-[9px] font-mono uppercase text-[#64748B] dark:text-[#888]">Invoiced This Mo.</div>
                <div className="text-xs sm:text-sm font-bold text-[#0284C7] dark:text-[#38BDF8] mt-0.5">$48,250</div>
              </div>
              <div className="p-2 sm:p-2.5 rounded-lg bg-[#F1F5F9] dark:bg-[#1A1A1A] border border-[#E2E8F0] dark:border-[#2A2A2A]">
                <div className="text-[9px] font-mono uppercase text-[#64748B] dark:text-[#888]">Bottlenecks</div>
                <div className="text-xs sm:text-sm font-bold text-[#10B981] dark:text-[#34D399] mt-0.5">4 / 4 Solved</div>
              </div>
              <div className="p-2 sm:p-2.5 rounded-lg bg-[#F1F5F9] dark:bg-[#1A1A1A] border border-[#E2E8F0] dark:border-[#2A2A2A]">
                <div className="text-[9px] font-mono uppercase text-[#64748B] dark:text-[#888]">ML Yield Conf.</div>
                <div className="text-xs sm:text-sm font-bold text-[#F472B6] dark:text-[#F472B6] mt-0.5">94.8%</div>
              </div>
            </div>

            {/* Interface Body Split: Live Pipeline Table & ML Trend Curve */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 pt-1">
              {/* Creator Operations Pipeline Table */}
              <div className={`${isDetail ? 'md:col-span-7' : 'md:col-span-12'} p-2.5 sm:p-3 rounded-xl bg-white dark:bg-[#161616] border border-[#E2E8F0] dark:border-[#262626] space-y-2`}>
                <div className="flex items-center justify-between text-[10px] font-mono uppercase font-bold text-[#64748B] dark:text-[#888]">
                  <span>Creator Delivery Stream</span>
                  <span className="text-[#0284C7] dark:text-[#F472B6]">PostgreSQL RLS</span>
                </div>
                <div className="space-y-1.5 text-[10px] sm:text-[11px]">
                  <div className="flex items-center justify-between p-1.5 rounded bg-[#F8FAFC] dark:bg-[#1E1E1E]">
                    <div className="flex items-center gap-2 truncate">
                      <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                      <span className="font-semibold text-[#0F1E36] dark:text-[#EEE]">Alex Rivers (Tech Reel)</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#DCFCE7] text-[#15803D] dark:bg-[#14532D] dark:text-[#86EFAC]">
                      Delivered
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-1.5 rounded bg-[#F8FAFC] dark:bg-[#1E1E1E]">
                    <div className="flex items-center gap-2 truncate">
                      <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                      <span className="font-semibold text-[#0F1E36] dark:text-[#EEE]">Sophia Chen (Brand Q3)</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#FEF3C7] text-[#B45309] dark:bg-[#78350F] dark:text-[#FDE68A]">
                      Review
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-1.5 rounded bg-[#F8FAFC] dark:bg-[#1E1E1E]">
                    <div className="flex items-center gap-2 truncate">
                      <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
                      <span className="font-semibold text-[#0F1E36] dark:text-[#EEE]">Marcus Vance (Pod Edit)</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#DBEAFE] text-[#1D4ED8] dark:bg-[#1E3A8A] dark:text-[#93C5FD]">
                      Invoiced
                    </span>
                  </div>
                </div>
              </div>

              {/* ML Yield Forecast Graph */}
              {(isFeatured || isDetail) && (
                <div className={`${isDetail ? 'md:col-span-5' : 'hidden md:block md:col-span-12'} p-2.5 sm:p-3 rounded-xl bg-white dark:bg-[#161616] border border-[#E2E8F0] dark:border-[#262626] space-y-2`}>
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase font-bold text-[#64748B] dark:text-[#888]">
                    <span>ML Revenue Forecast Curve</span>
                    <span className="text-[#10B981]">+18.4% YoY</span>
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
                    <span>W1 Hist</span>
                    <span>W2 Hist</span>
                    <span>W3 Target</span>
                    <span className="text-[#0284C7] dark:text-[#38BDF8] font-bold">W4 ML Forecast</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        );

      case 'sales-analysis-automation':
        return (
          <div className="p-3 sm:p-5 font-sans space-y-3 sm:space-y-4 select-none">
            {/* Pipeline Header */}
            <div className="flex items-center justify-between pb-2.5 border-b border-[#E2E8F0] dark:border-[#262626]">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-[#0F766E] text-white flex items-center justify-center text-xs font-bold font-mono">
                  ETL
                </span>
                <div>
                  <div className="text-[11px] sm:text-xs font-bold text-[#0F1E36] dark:text-[#F3F3F2]">
                    Commercial Sales Pipeline Normalizer
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-[#64748B] dark:text-[#888] font-mono">
                    Python 3 &bull; Pandas &bull; Power BI Output
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-[#0F766E] dark:text-[#2DD4BF] bg-[#CCFBF1] dark:bg-[#134E4A]/40 px-2 py-0.5 rounded font-bold">
                ~85% Time Saved
              </span>
            </div>

            {/* ETL Flow Steps */}
            <div className="grid grid-cols-4 gap-1.5 text-center text-[9px] sm:text-[10px] font-mono">
              <div className="p-1.5 rounded-lg bg-[#F1F5F9] dark:bg-[#1C1C1C] border border-[#E2E8F0] dark:border-[#2C2C2C]">
                <div className="text-[#64748B] dark:text-[#888]">01. Extract</div>
                <div className="font-bold text-[#0F1E36] dark:text-[#EEE] truncate">POS + Web</div>
              </div>
              <div className="p-1.5 rounded-lg bg-[#F1F5F9] dark:bg-[#1C1C1C] border border-[#E2E8F0] dark:border-[#2C2C2C]">
                <div className="text-[#64748B] dark:text-[#888]">02. Clean</div>
                <div className="font-bold text-[#0F1E36] dark:text-[#EEE] truncate">Pandas Rules</div>
              </div>
              <div className="p-1.5 rounded-lg bg-[#F1F5F9] dark:bg-[#1C1C1C] border border-[#E2E8F0] dark:border-[#2C2C2C]">
                <div className="text-[#64748B] dark:text-[#888]">03. Compute</div>
                <div className="font-bold text-[#0F1E36] dark:text-[#EEE] truncate">YoY Margins</div>
              </div>
              <div className="p-1.5 rounded-lg bg-[#F1F5F9] dark:bg-[#1C1C1C] border border-[#E2E8F0] dark:border-[#2C2C2C]">
                <div className="text-[#64748B] dark:text-[#888]">04. Export</div>
                <div className="font-bold text-[#0F766E] dark:text-[#2DD4BF] truncate">Power BI</div>
              </div>
            </div>

            {/* Clean Aggregated Output Preview */}
            <div className="p-2.5 sm:p-3 rounded-xl bg-white dark:bg-[#161616] border border-[#E2E8F0] dark:border-[#262626] space-y-2">
              <div className="flex items-center justify-between text-[10px] font-mono uppercase text-[#64748B] dark:text-[#888]">
                <span>Period-over-Period Performance</span>
                <span className="text-[#10B981] font-bold">Automated Ingest</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-[10px] sm:text-[11px]">
                <div className="p-2 rounded bg-[#F8FAFC] dark:bg-[#1E1E1E]">
                  <div className="text-[9px] text-[#64748B] dark:text-[#888]">Q1 Revenue</div>
                  <div className="font-bold text-[#0F1E36] dark:text-[#F3F3F2]">$124.8K</div>
                </div>
                <div className="p-2 rounded bg-[#F8FAFC] dark:bg-[#1E1E1E]">
                  <div className="text-[9px] text-[#64748B] dark:text-[#888]">Gross Margin</div>
                  <div className="font-bold text-[#0F766E] dark:text-[#2DD4BF]">38.2% (+4.1%)</div>
                </div>
                <div className="p-2 rounded bg-[#F8FAFC] dark:bg-[#1E1E1E]">
                  <div className="text-[9px] text-[#64748B] dark:text-[#888]">Formula Errors</div>
                  <div className="font-bold text-[#10B981]">0 Discrepancies</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'payroll-system':
        return (
          <div className="p-3 sm:p-5 font-sans space-y-3 sm:space-y-4 select-none">
            {/* Header */}
            <div className="flex items-center justify-between pb-2.5 border-b border-[#E2E8F0] dark:border-[#262626]">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-[#4F46E5] text-white flex items-center justify-center text-xs font-bold font-mono">
                  PY
                </span>
                <div>
                  <div className="text-[11px] sm:text-xs font-bold text-[#0F1E36] dark:text-[#F3F3F2]">
                    Python Payroll Computation Engine
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-[#64748B] dark:text-[#888] font-mono">
                    Pure Python &bull; Tax Tier Architecture &bull; 100% Exact
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-[#4F46E5] dark:text-[#818CF8] bg-[#EEF2FF] dark:bg-[#312E81]/40 px-2 py-0.5 rounded font-bold">
                Solo Eng
              </span>
            </div>

            {/* Calculated Payslip Preview */}
            <div className="p-2.5 sm:p-3 rounded-xl bg-white dark:bg-[#161616] border border-[#E2E8F0] dark:border-[#262626] space-y-2">
              <div className="flex items-center justify-between text-[10px] font-mono uppercase text-[#64748B] dark:text-[#888]">
                <span>Employee Payslip Batch Voucher</span>
                <span className="text-[#10B981] font-bold">Audited & Verified</span>
              </div>
              <div className="space-y-1.5 text-[10px] sm:text-[11px] font-mono">
                <div className="flex justify-between py-1 border-b border-[#F1F5F9] dark:border-[#222]">
                  <span className="text-[#64748B] dark:text-[#888]">Base Salary (Gross)</span>
                  <span className="font-bold text-[#0F1E36] dark:text-[#EEE]">$6,500.00</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#F1F5F9] dark:border-[#222]">
                  <span className="text-[#64748B] dark:text-[#888]">Progressive Income Tax (Tier 2)</span>
                  <span className="font-bold text-[#EF4444]">-$780.00</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#F1F5F9] dark:border-[#222]">
                  <span className="text-[#64748B] dark:text-[#888]">Statutory Deductions & Ins.</span>
                  <span className="font-bold text-[#EF4444]">-$210.00</span>
                </div>
                <div className="flex justify-between py-1 pt-1.5 font-bold text-[11px] sm:text-xs">
                  <span className="text-[#0F1E36] dark:text-white">Net Disbursement</span>
                  <span className="text-[#10B981] dark:text-[#34D399]">$5,510.00</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'student-gpa-tracker':
        return (
          <div className="p-3 sm:p-5 font-sans space-y-3 sm:space-y-4 select-none">
            {/* Header */}
            <div className="flex items-center justify-between pb-2.5 border-b border-[#E2E8F0] dark:border-[#262626]">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-[#8B5CF6] text-white flex items-center justify-center text-xs font-bold font-mono">
                  ML
                </span>
                <div>
                  <div className="text-[11px] sm:text-xs font-bold text-[#0F1E36] dark:text-[#F3F3F2]">
                    Academic Trajectory & Forecaster
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-[#64748B] dark:text-[#888] font-mono">
                    Regression Engine &bull; Goal-Seeking Simulation
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-[#8B5CF6] dark:text-[#C084FC] bg-[#F5F3FF] dark:bg-[#4C1D95]/40 px-2 py-0.5 rounded font-bold">
                R²: 0.92 Acc.
              </span>
            </div>

            {/* GPA Simulator Interface */}
            <div className="p-2.5 sm:p-3 rounded-xl bg-white dark:bg-[#161616] border border-[#E2E8F0] dark:border-[#262626] space-y-2">
              <div className="flex items-center justify-between text-[10px] font-mono uppercase text-[#64748B] dark:text-[#888]">
                <span>Weighted Course Simulation</span>
                <span className="text-[#8B5CF6] dark:text-[#C084FC] font-bold">Target: 3.85 GPA</span>
              </div>
              <div className="space-y-1.5 text-[10px] sm:text-[11px]">
                <div className="flex items-center justify-between p-1.5 rounded bg-[#F8FAFC] dark:bg-[#1E1E1E]">
                  <span className="font-semibold text-[#0F1E36] dark:text-[#EEE]">Advanced Algorithms (4 Cr)</span>
                  <span className="font-mono font-bold text-[#10B981]">Grade: A (4.00)</span>
                </div>
                <div className="flex items-center justify-between p-1.5 rounded bg-[#F8FAFC] dark:bg-[#1E1E1E]">
                  <span className="font-semibold text-[#0F1E36] dark:text-[#EEE]">Machine Learning Systems (3 Cr)</span>
                  <span className="font-mono font-bold text-[#8B5CF6]">Required: A- (3.70)</span>
                </div>
                <div className="flex items-center justify-between p-1.5 rounded bg-[#F8FAFC] dark:bg-[#1E1E1E]">
                  <span className="font-semibold text-[#0F1E36] dark:text-[#EEE]">Distributed Databases (3 Cr)</span>
                  <span className="font-mono font-bold text-[#8B5CF6]">Required: A (4.00)</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'teravince':
        return (
          <div className="p-3 sm:p-5 font-sans space-y-3 sm:space-y-4 select-none">
            {/* Header */}
            <div className="flex items-center justify-between pb-2.5 border-b border-[#E2E8F0] dark:border-[#262626]">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-[#0D9488] text-white flex items-center justify-center text-xs font-bold font-mono">
                  NGO
                </span>
                <div>
                  <div className="text-[11px] sm:text-xs font-bold text-[#0F1E36] dark:text-[#F3F3F2]">
                    Teravince Non-Profit Outreach Portal
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-[#64748B] dark:text-[#888] font-mono">
                    WCAG AA &bull; High-Performance Responsive Web
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-[#0D9488] dark:text-[#2DD4BF] bg-[#F0FDFA] dark:bg-[#134E4A]/40 px-2 py-0.5 rounded font-bold">
                Frontend Eng
              </span>
            </div>

            {/* Portal Cards Preview */}
            <div className="grid grid-cols-2 gap-2 text-[10px] sm:text-[11px]">
              <div className="p-2.5 rounded-lg bg-white dark:bg-[#161616] border border-[#E2E8F0] dark:border-[#262626] space-y-1">
                <div className="text-[9px] font-mono uppercase text-[#0D9488] dark:text-[#2DD4BF] font-bold">
                  Community Impact
                </div>
                <div className="font-bold text-[#0F1E36] dark:text-[#EEE] text-xs">Youth Education</div>
                <p className="text-[9px] sm:text-[10px] text-[#64748B] dark:text-[#AAA] line-clamp-2">
                  Transparent initiatives with direct volunteer pathways.
                </p>
              </div>
              <div className="p-2.5 rounded-lg bg-white dark:bg-[#161616] border border-[#E2E8F0] dark:border-[#262626] space-y-1">
                <div className="text-[9px] font-mono uppercase text-[#0D9488] dark:text-[#2DD4BF] font-bold">
                  Volunteer Portal
                </div>
                <div className="font-bold text-[#0F1E36] dark:text-[#EEE] text-xs">Frictionless Flow</div>
                <p className="text-[9px] sm:text-[10px] text-[#64748B] dark:text-[#AAA] line-clamp-2">
                  Accessible, mobile-optimized onboarding registration.
                </p>
              </div>
            </div>
          </div>
        );

      case 'web-portfolio':
      default:
        return (
          <div className="p-3 sm:p-5 font-sans space-y-3 sm:space-y-4 select-none">
            {/* Header */}
            <div className="flex items-center justify-between pb-2.5 border-b border-[#E2E8F0] dark:border-[#262626]">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-[#0F1E36] dark:bg-[#F3F3F2] text-white dark:text-[#111] flex items-center justify-center text-xs font-bold font-mono">
                  DP
                </span>
                <div>
                  <div className="text-[11px] sm:text-xs font-bold text-[#0F1E36] dark:text-[#F3F3F2]">
                    Editorial Engineering Showcase
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-[#64748B] dark:text-[#888] font-mono">
                    Hardware Transitions &bull; Canvas Physics &bull; Bespoke UI
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-[#0284C7] dark:text-[#F472B6] bg-[#E0F2FE] dark:bg-[#F472B6]/15 px-2 py-0.5 rounded font-bold">
                100 Score
              </span>
            </div>

            {/* Design System Preview */}
            <div className="grid grid-cols-3 gap-2 text-[10px] sm:text-[11px]">
              <div className="p-2 rounded-lg bg-white dark:bg-[#161616] border border-[#E2E8F0] dark:border-[#262626] text-center">
                <div className="text-[9px] font-mono uppercase text-[#64748B] dark:text-[#888]">Transitions</div>
                <div className="font-bold text-[#0F1E36] dark:text-[#EEE] mt-0.5">Zero-Flash GPU</div>
              </div>
              <div className="p-2 rounded-lg bg-white dark:bg-[#161616] border border-[#E2E8F0] dark:border-[#262626] text-center">
                <div className="text-[9px] font-mono uppercase text-[#64748B] dark:text-[#888]">Physics</div>
                <div className="font-bold text-[#0F1E36] dark:text-[#EEE] mt-0.5">Canvas 120fps</div>
              </div>
              <div className="p-2 rounded-lg bg-white dark:bg-[#161616] border border-[#E2E8F0] dark:border-[#262626] text-center">
                <div className="text-[9px] font-mono uppercase text-[#64748B] dark:text-[#888]">Ergonomics</div>
                <div className="font-bold text-[#10B981] mt-0.5">Responsive</div>
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
    teravince: 'https://teravince.org/outreach',
    'web-portfolio': 'https://dadia.dev'
  };

  const currentDomain = domainMap[project.id] || `app.local/${project.id}`;

  return (
    <div
      className={`rounded-2xl border border-[#E2E8F0] dark:border-[#262626] bg-[#FFFFFF] dark:bg-[#121212] overflow-hidden shadow-sm transition-all duration-300 ${className}`}
    >
      {renderChrome(currentDomain, project.featured ? 'LIVE IN PROD' : 'VERIFIED')}
      {renderContent()}
    </div>
  );
};
