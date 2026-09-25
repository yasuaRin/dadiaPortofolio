import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, FileDown, ExternalLink, X, Check, Loader2, ArrowUpRight } from 'lucide-react';
import { resumeConfig } from '../data/resumeConfig';
import { generatePortfolioPDF } from '../utils/pdfGenerator';

interface ResumeDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeDownloadModal: React.FC<ResumeDownloadModalProps> = ({ isOpen, onClose }) => {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [pdfSuccess, setPdfSuccess] = useState(false);
  const [pdfError, setPdfError] = useState<string | null>(null);

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

  const handleOpenDriveCV = () => {
    window.open(resumeConfig.cvDriveUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const handleExportPortfolioPDF = async () => {
    if (isGeneratingPDF) return;
    try {
      setIsGeneratingPDF(true);
      setPdfError(null);
      await generatePortfolioPDF();
      setPdfSuccess(true);
      setTimeout(() => {
        setPdfSuccess(false);
        onClose();
      }, 1500);
    } catch (err) {
      console.error('Failed to export PDF:', err);
      setPdfError('Unable to generate PDF in this browser. Please try printing via Ctrl/Cmd+P.');
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="resume-download-modal" className="fixed inset-0 z-[100] flex items-center justify-center p-4 no-pdf-export">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0F1E36]/50 dark:bg-black/75 backdrop-blur-xs cursor-pointer no-pdf-export"
            aria-hidden="true"
          />

          {/* Clean Minimal Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-modal-title"
            className="relative w-full max-w-md bg-white dark:bg-[#141414] border border-[#BFDBFE]/80 dark:border-[#262626] rounded-2xl shadow-xl z-10 p-5 sm:p-6 no-pdf-export"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-neutral-100 dark:bg-[#202020] text-neutral-500 hover:text-neutral-900 dark:hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Simple Title */}
            <div className="mb-5 pr-8">
              <h2
                id="resume-modal-title"
                className="text-xl font-bold tracking-tight text-[#0F1E36] dark:text-[#F3F3F2]"
              >
                CV &amp; Portfolio
              </h2>
              <p className="text-xs text-[#64748B] dark:text-[#888] mt-1">
                Curriculum Vitae &middot; Ni Putu Dadia Yasuarini
              </p>
            </div>

            {/* Exactly 2 Actions: Google Drive CV & Export Portfolio Full Page */}
            <div className="space-y-3">
              {/* Option 1: View / Open CV on Google Drive */}
              <button
                onClick={handleOpenDriveCV}
                className="w-full flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-[#0F1E36] dark:bg-[#F472B6] hover:bg-[#1E3A5F] dark:hover:bg-[#FDA4AF] text-white dark:text-[#111] transition-all cursor-pointer group shadow-xs"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-white/15 dark:bg-black/15 flex items-center justify-center">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="text-xs sm:text-sm font-bold uppercase tracking-wider block">
                      Open CV in Google Drive
                    </span>
                    <span className="text-[10px] opacity-85 font-mono">
                      Official Curriculum Vitae (PDF)
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </button>

              {/* Option 2: Export Portfolio Full Page (PDF) */}
              <button
                onClick={handleExportPortfolioPDF}
                disabled={isGeneratingPDF}
                className="w-full flex items-center justify-between p-3.5 sm:p-4 rounded-xl border border-neutral-200 dark:border-[#2A2A2A] hover:border-[#0284C7] dark:hover:border-[#F472B6] bg-neutral-50 dark:bg-[#1A1A1A] text-[#0F1E36] dark:text-[#F3F3F2] transition-all cursor-pointer disabled:opacity-60 group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-neutral-200/60 dark:bg-[#252525] flex items-center justify-center text-[#0284C7] dark:text-[#F472B6]">
                    {isGeneratingPDF ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : pdfSuccess ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <FileDown className="w-4 h-4" />
                    )}
                  </div>
                  <div className="text-left">
                    <span className="text-xs sm:text-sm font-bold uppercase tracking-wider block">
                      {isGeneratingPDF ? 'Exporting Webpage...' : pdfSuccess ? 'Downloaded!' : 'Export Portfolio Full Page (PDF)'}
                    </span>
                    <span className="text-[10px] text-[#64748B] dark:text-[#888] font-mono">
                      Visual snapshot of complete web portfolio
                    </span>
                  </div>
                </div>
                {!isGeneratingPDF && (
                  <ExternalLink className="w-3.5 h-3.5 text-[#64748B] dark:text-[#888] group-hover:text-[#0284C7] dark:group-hover:text-[#F472B6] transition-colors" />
                )}
              </button>
            </div>

            {pdfError && (
              <p className="mt-3 text-[11px] text-amber-700 dark:text-amber-400">
                {pdfError}
              </p>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
