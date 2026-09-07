import React, { useEffect, useRef } from 'react';
import { Certificate } from '../types';
import { X, ArrowLeft, ArrowRight, Award, Calendar, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CertificateLightboxProps {
  certificate: Certificate | null;
  onClose: () => void;
  onSelectCert?: (cert: Certificate) => void;
  allCertificates?: Certificate[];
}

export const CertificateLightbox: React.FC<CertificateLightboxProps> = ({
  certificate,
  onClose,
  onSelectCert,
  allCertificates = []
}) => {
  const currentIndex = certificate
    ? allCertificates.findIndex((c) => c.id === certificate.id)
    : -1;

  const prevCert = currentIndex > 0 ? allCertificates[currentIndex - 1] : null;
  const nextCert =
    currentIndex >= 0 && currentIndex < allCertificates.length - 1
      ? allCertificates[currentIndex + 1]
      : null;

  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    // Minimum swipe threshold of 50px
    if (Math.abs(diff) > 50) {
      if (diff > 0 && nextCert && onSelectCert) {
        // Swiped left -> show next
        onSelectCert(nextCert);
      } else if (diff < 0 && prevCert && onSelectCert) {
        // Swiped right -> show previous
        onSelectCert(prevCert);
      }
    }
    touchStartX.current = null;
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && prevCert && onSelectCert) onSelectCert(prevCert);
      if (e.key === 'ArrowRight' && nextCert && onSelectCert) onSelectCert(nextCert);
    };

    if (certificate) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [certificate, onClose, prevCert, nextCert, onSelectCert]);

  if (!certificate) return null;

  const num = currentIndex + 1 < 10 ? `0${currentIndex + 1}` : `${currentIndex + 1}`;
  const total = allCertificates.length < 10 ? `0${allCertificates.length}` : `${allCertificates.length}`;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cert-lightbox-title"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0F1E36]/70 dark:bg-black/85 backdrop-blur-md cursor-pointer"
          aria-hidden="true"
        />

        {/* Modal Window with Dynamic Viewport Height Sizing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative w-full max-w-2xl max-h-[92vh] max-h-[92dvh] bg-white dark:bg-[#121212] rounded-2xl sm:rounded-3xl border border-[#BFDBFE] dark:border-[#262626] shadow-2xl overflow-hidden z-10 flex flex-col text-[#0F1E36] dark:text-[#F3F3F2]"
        >
          {/* Sticky Header Bar */}
          <div className="shrink-0 bg-[#0F1E36] dark:bg-[#0A0A0A] text-white px-4 sm:px-8 py-3 sm:py-4 flex items-center justify-between border-b border-[#1E3A5F] dark:border-[#222]">
            <motion.button
              whileHover={{ x: -3 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              onClick={onClose}
              id="lightbox-back-btn"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#BAE6FD] hover:text-white transition-colors focus:outline-none cursor-pointer py-1.5 min-h-[44px] touch-manipulation"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to gallery</span>
            </motion.button>

            <div className="flex items-center gap-3 sm:gap-4">
              <span className="text-xs font-mono text-[#BAE6FD]">
                {num} / {total}
              </span>
              <button
                onClick={onClose}
                id="lightbox-close-btn"
                className="p-2 text-[#BAE6FD] hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Scrollable Certificate Body */}
          <div className="p-5 sm:p-8 md:p-10 space-y-6 sm:space-y-8 overflow-y-auto overscroll-contain flex-1">
            {/* Visual Certificate Crest & Header */}
            <div className="border border-[#BFDBFE] dark:border-[#262626] rounded-2xl p-5 sm:p-8 bg-[#F8FAFC] dark:bg-[#181818] text-center relative overflow-hidden shadow-xs">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0284C7] dark:bg-[#262626] text-white dark:text-[#F472B6] mb-3 sm:mb-4 shadow-xs">
                <Award className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>

              <div className="text-[10px] font-mono uppercase tracking-widest text-[#64748B] dark:text-[#777] mb-2">
                OFFICIAL RECOGNITION &middot; {certificate.issuer}
              </div>

              <h2
                id="cert-lightbox-title"
                className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#0F1E36] dark:text-[#F3F3F2] mb-3 leading-snug break-words"
              >
                {certificate.title}
              </h2>

              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#0369A1] dark:text-[#AAA] bg-[#E0F2FE] dark:bg-[#222] px-3.5 py-1.5 rounded-full border border-[#BAE6FD] dark:border-[#333]">
                <Calendar className="w-3.5 h-3.5" />
                <span>Awarded: {certificate.date}</span>
              </div>
            </div>

            {/* Description */}
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#64748B] dark:text-[#777] block mb-2">
                Achievement Scope
              </span>
              <p className="text-sm sm:text-base text-[#334155] dark:text-[#CCC] leading-relaxed break-words">
                {certificate.description}
              </p>
            </div>

            {/* Skills & Focus Areas */}
            {certificate.skillsLearned && certificate.skillsLearned.length > 0 && (
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#64748B] dark:text-[#777] block mb-2.5">
                  Competencies &amp; Knowledge Covered
                </span>
                <div className="flex flex-wrap gap-2">
                  {certificate.skillsLearned.map((skill, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#E0F2FE] dark:bg-[#1E1E1E] border border-[#BAE6FD] dark:border-[#2E2E2E] rounded-lg text-xs font-medium text-[#0369A1] dark:text-[#DDD] break-words"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#F472B6] shrink-0" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sticky Footer: Verification Metadata & Pagination Controls */}
          <div className="shrink-0 bg-neutral-50/95 dark:bg-[#0E0E0E]/95 backdrop-blur-sm px-4 sm:px-8 py-3.5 sm:py-4 border-t border-[#BFDBFE]/60 dark:border-[#262626] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#64748B] dark:text-[#AAA]">
            <div className="flex items-center gap-1.5 max-w-full">
              <ShieldCheck className="w-4 h-4 text-[#0284C7] dark:text-[#F472B6] shrink-0" />
              <span className="break-all">Verification ID: {certificate.credentialId || 'AUTHENTICATED'}</span>
            </div>

            <div className="flex items-center gap-2 ml-auto">
              <span className="text-[11px] text-[#888] mr-1 hidden md:inline">Swipe or use arrows:</span>
              {prevCert && onSelectCert && (
                <button
                  onClick={() => onSelectCert(prevCert)}
                  className="min-h-[40px] min-w-[40px] p-2 rounded-xl border border-[#BFDBFE] dark:border-[#333] hover:bg-[#0284C7] dark:hover:bg-[#FFF] hover:text-white dark:hover:text-[#111] transition-colors cursor-pointer flex items-center justify-center touch-manipulation"
                  title="Previous certificate"
                  aria-label="Previous certificate"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
              )}
              {nextCert && onSelectCert && (
                <button
                  onClick={() => onSelectCert(nextCert)}
                  className="min-h-[40px] min-w-[40px] p-2 rounded-xl border border-[#BFDBFE] dark:border-[#333] hover:bg-[#0284C7] dark:hover:bg-[#FFF] hover:text-white dark:hover:text-[#111] transition-colors cursor-pointer flex items-center justify-center touch-manipulation"
                  title="Next certificate"
                  aria-label="Next certificate"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
