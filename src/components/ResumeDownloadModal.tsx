import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, FileDown, Printer, ExternalLink, X, Check, Loader2, Sparkles, ShieldCheck, Layers } from 'lucide-react';
import { resumeConfig } from '../data/resumeConfig';
import { generatePortfolioPDF } from '../utils/pdfGenerator';

interface ResumeDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeDownloadModal: React.FC<ResumeDownloadModalProps> = ({ isOpen, onClose }) => {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [pdfProgress, setPdfProgress] = useState<{ current: number; total: number } | null>(null);
  const [pdfSuccess, setPdfSuccess] = useState(false);
  const [pdfError, setPdfError] = useState<string | null>(null);
  const [cvDriveUrl, setCvDriveUrl] = useState(resumeConfig.cvViewUrl);
  const [isEditingUrl, setIsEditingUrl] = useState(false);
  const [customUrlInput, setCustomUrlInput] = useState(resumeConfig.cvViewUrl);
  const [urlValidationError, setUrlValidationError] = useState<string | null>(null);

  const isSafeUrl = (raw: string): boolean => {
    try {
      const parsed = new URL(raw);
      return parsed.protocol === 'https:' || parsed.protocol === 'http:';
    } catch {
      return false;
    }
  };

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleExportPortfolioPDF = async () => {
    if (isGeneratingPDF) return;
    try {
      setIsGeneratingPDF(true);
      setPdfError(null);
      setPdfProgress(null);
      await generatePortfolioPDF((current, total) => {
        setPdfProgress({ current, total });
      });
      setPdfSuccess(true);
      setTimeout(() => setPdfSuccess(false), 3000);
    } catch (err) {
      console.error('Failed to generate portfolio PDF:', err);
      setPdfError(
        'Unable to complete automatic PDF capture in this browser. Try the "Print webpage layout" option below to save as PDF directly.'
      );
    } finally {
      setIsGeneratingPDF(false);
      setPdfProgress(null);
    }
  };

  const handleOpenCV = () => {
    // Only open if URL is verified as safe http/https to prevent javascript: or data: XSS/injection
    const target = cvDriveUrl.trim();
    if (isSafeUrl(target)) {
      window.open(target, '_blank', 'noopener,noreferrer');
    } else {
      // Fallback to safe default
      window.open(resumeConfig.cvViewUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handlePrintPage = () => {
    onClose();
    setTimeout(() => {
      window.print();
    }, 300);
  };

  const handleSaveCustomUrl = () => {
    const trimmed = customUrlInput.trim();
    if (!trimmed) {
      setUrlValidationError('URL cannot be empty');
      return;
    }
    if (!isSafeUrl(trimmed)) {
      setUrlValidationError('Invalid URL protocol. Only https:// and http:// links are allowed.');
      return;
    }
    setUrlValidationError(null);
    setCvDriveUrl(trimmed);
    setIsEditingUrl(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="resume-download-modal" className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 no-pdf-export">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0F1E36]/60 dark:bg-black/80 backdrop-blur-sm cursor-pointer no-pdf-export"
            aria-hidden="true"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-modal-title"
            className="relative w-full max-w-xl max-h-[92vh] max-h-[92dvh] overflow-y-auto overscroll-contain bg-white dark:bg-[#141414] border border-[#BFDBFE]/80 dark:border-[#2A2A2A] rounded-3xl shadow-2xl z-10 p-5 sm:p-8 no-pdf-export"
          >
            {/* Top Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-neutral-100 dark:bg-[#202020] text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0F2FE] dark:bg-[#1E1E1E] text-[#0284C7] dark:text-[#F472B6] text-[11px] font-mono font-bold uppercase tracking-wider mb-2.5">
                <Sparkles className="w-3 h-3" />
                <span>Download Center</span>
              </div>
              <h2
                id="resume-modal-title"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F1E36] dark:text-[#F3F3F2]"
              >
                Download CV &amp; Portfolio
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#999] mt-1.5 leading-relaxed">
                Access Dadia's ATS-friendly resume or export the complete visual webpage into a high-resolution PDF document.
              </p>
            </div>

            {/* Dual Options Grid */}
            <div className="space-y-3.5">
              {/* Option 1: Official Curated CV / Resume Link */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#F0F6FF] dark:bg-[#1A1A1A] border border-[#BAE6FD]/80 dark:border-[#2D2D2D] hover:border-[#0284C7] dark:hover:border-[#F472B6] transition-all">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#0284C7] dark:bg-[#F472B6] text-white dark:text-[#111] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm sm:text-base font-bold text-[#0F1E36] dark:text-[#F3F3F2]">
                          Curriculum Vitae (PDF)
                        </h3>
                        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-white/80 dark:bg-[#252525] text-[#0369A1] dark:text-[#F472B6] border border-[#BAE6FD] dark:border-[#333]">
                          ATS Friendly
                        </span>
                      </div>
                      <p className="text-xs text-[#64748B] dark:text-[#AAA] mt-1 leading-relaxed">
                        Curated 1-page PDF Resume formatted for recruiters, tech leads, and HR systems.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#BAE6FD]/60 dark:border-[#282828] flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[11px] font-mono text-[#64748B] dark:text-[#888] flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    Verified &middot; {resumeConfig.lastUpdated}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleOpenCV}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0F1E36] dark:bg-[#F472B6] text-white dark:text-[#111] rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#1E3A5F] dark:hover:bg-[#FDA4AF] transition-colors cursor-pointer shadow-xs"
                    >
                      <span>Download CV</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Quick Link Editor for Custom Drive Links */}
                {isEditingUrl ? (
                  <div className="mt-3 pt-3 border-t border-[#BAE6FD]/60 dark:border-[#282828] space-y-2">
                    <div className="flex items-center gap-2">
                      <input
                        type="url"
                        value={customUrlInput}
                        onChange={(e) => {
                          setCustomUrlInput(e.target.value);
                          if (urlValidationError) setUrlValidationError(null);
                        }}
                        placeholder="Paste verified https:// link..."
                        className="flex-1 px-3 py-1.5 rounded-lg bg-white dark:bg-[#111] border border-[#CBD5E1] dark:border-[#333] text-xs font-mono text-[#0F1E36] dark:text-[#F3F3F2] focus:outline-none focus:border-[#0284C7]"
                      />
                      <button
                        onClick={handleSaveCustomUrl}
                        className="px-3 py-1.5 bg-[#0284C7] text-white text-xs font-mono rounded-lg font-bold hover:bg-[#0369A1] transition-colors cursor-pointer"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => {
                          setIsEditingUrl(false);
                          setUrlValidationError(null);
                          setCustomUrlInput(cvDriveUrl);
                        }}
                        className="px-2.5 py-1.5 bg-neutral-200 dark:bg-[#252525] text-neutral-700 dark:text-[#AAA] text-xs font-mono rounded-lg hover:bg-neutral-300 dark:hover:bg-[#333] transition-colors cursor-pointer"
                      >
                        Cancel
                      </button>
                    </div>
                    {urlValidationError && (
                      <p className="text-[11px] font-mono text-red-600 dark:text-red-400">
                        {urlValidationError}
                      </p>
                    )}
                  </div>
                ) : (
                  <div className="mt-2 text-right">
                    <button
                      onClick={() => setIsEditingUrl(true)}
                      className="text-[10px] font-mono text-[#64748B] hover:text-[#0284C7] dark:hover:text-[#F472B6] underline transition-colors cursor-pointer"
                    >
                      Change CV Link URL
                    </button>
                  </div>
                )}
              </div>

              {/* Option 2: Full Visual Page to PDF (Exact layout, ornaments, background) */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#FAFAFA] dark:bg-[#181818] border border-neutral-200 dark:border-[#282828] hover:border-[#0284C7] dark:hover:border-[#F472B6] transition-all">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#E0F2FE] dark:bg-[#252525] text-[#0284C7] dark:text-[#F472B6] flex items-center justify-center shrink-0 mt-0.5">
                    {isGeneratingPDF ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : pdfSuccess ? (
                      <Check className="w-5 h-5 text-emerald-500" />
                    ) : (
                      <Layers className="w-5 h-5" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-sm sm:text-base font-bold text-[#0F1E36] dark:text-[#F3F3F2]">
                        Convert Entire Page to PDF
                      </h3>
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-neutral-200/70 dark:bg-[#222] text-[#475569] dark:text-[#AAA]">
                        Full Visual Capture
                      </span>
                    </div>
                    <p className="text-xs text-[#64748B] dark:text-[#AAA] mt-1 leading-relaxed">
                      Captures the entire webpage exactly as shown — including all background graphics, physics ornaments, projects, and typography.
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-200 dark:border-[#282828] flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono text-[#64748B] dark:text-[#888]">
                    High-Res Multi-Page &middot; Full Layout
                  </span>
                  <button
                    onClick={handleExportPortfolioPDF}
                    disabled={isGeneratingPDF}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0284C7] hover:bg-[#0369A1] dark:bg-[#2A2A2A] dark:hover:bg-[#333] text-white dark:text-[#F3F3F2] rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer disabled:opacity-70 shadow-xs"
                  >
                    {isGeneratingPDF ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>
                          {pdfProgress
                            ? `Page ${pdfProgress.current} / ${pdfProgress.total}...`
                            : 'Capturing Page...'}
                        </span>
                      </>
                    ) : pdfSuccess ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Downloaded!</span>
                      </>
                    ) : (
                      <>
                        <FileDown className="w-3.5 h-3.5" />
                        <span>Download Portfolio (PDF)</span>
                      </>
                    )}
                  </button>
                </div>
                {pdfError && (
                  <div className="mt-3 p-2.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-[11px] text-amber-800 dark:text-amber-300 flex items-start gap-2">
                    <span>{pdfError}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Print fallback footer */}
            <div className="mt-5 pt-4 border-t border-neutral-100 dark:border-[#222] flex items-center justify-between text-xs text-[#64748B] dark:text-[#777]">
              <span>Need a physical copy?</span>
              <button
                onClick={handlePrintPage}
                className="inline-flex items-center gap-1.5 hover:text-[#0F1E36] dark:hover:text-[#F3F3F2] font-mono transition-colors cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print webpage layout</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

