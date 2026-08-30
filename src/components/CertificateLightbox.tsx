import React, { useEffect } from 'react';
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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#1A1A1A]/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-2xl bg-white dark:bg-[#121212] rounded-2xl border border-[#BFDBFE] dark:border-[#262626] shadow-2xl overflow-hidden z-10 flex flex-col text-[#0F1E36] dark:text-[#F3F3F2]"
        >
          {/* Header Bar */}
          <div className="bg-[#0F1E36] dark:bg-[#0A0A0A] text-white px-6 sm:px-8 py-4 flex items-center justify-between border-b border-[#1E3A5F] dark:border-[#222]">
            <motion.button
              whileHover={{ x: -3 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              onClick={onClose}
              id="lightbox-back-btn"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#BAE6FD] hover:text-white transition-colors focus:outline-none cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to gallery</span>
            </motion.button>

            <div className="flex items-center gap-4">
              <span className="text-xs font-mono text-[#BAE6FD]">
                {num} / {total}
              </span>
              <button
                onClick={onClose}
                id="lightbox-close-btn"
                className="p-1.5 text-[#BAE6FD] hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Certificate Body */}
          <div className="p-6 sm:p-10 space-y-8">
            {/* Visual Certificate Crest & Header */}
            <div className="border border-[#BFDBFE] dark:border-[#262626] rounded-2xl p-6 sm:p-8 bg-white dark:bg-[#181818] text-center relative overflow-hidden shadow-sm">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#0284C7] dark:bg-[#262626] text-white dark:text-[#F472B6] mb-4 shadow-sm">
                <Award className="w-7 h-7" />
              </div>

              <div className="text-[10px] font-mono uppercase tracking-widest text-[#64748B] dark:text-[#777] mb-2">
                OFFICIAL RECOGNITION &middot; {certificate.issuer}
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F1E36] dark:text-[#F3F3F2] mb-3">
                {certificate.title}
              </h2>

              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#0369A1] dark:text-[#AAA] bg-[#E0F2FE] dark:bg-[#222] px-3.5 py-1.5 rounded-full">
                <Calendar className="w-3.5 h-3.5" />
                <span>Awarded: {certificate.date}</span>
              </div>
            </div>

            {/* Description */}
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#64748B] dark:text-[#777] block mb-2">
                Achievement Scope
              </span>
              <p className="text-sm sm:text-base text-[#334155] dark:text-[#CCC] leading-relaxed">
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
                      className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#E0F2FE] dark:bg-[#1E1E1E] border border-[#BAE6FD] dark:border-[#2E2E2E] rounded text-xs font-medium text-[#0369A1] dark:text-[#DDD]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#F472B6]" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Verification Metadata & Pagination Controls */}
            <div className="pt-6 border-t border-[#BFDBFE]/60 dark:border-[#262626] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#64748B] dark:text-[#AAA]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#0284C7] dark:text-[#F472B6]" />
                <span>Verification ID: {certificate.credentialId || 'AUTHENTICATED'}</span>
              </div>

              <div className="flex items-center gap-2">
                {prevCert && onSelectCert && (
                  <button
                    onClick={() => onSelectCert(prevCert)}
                    className="p-2 rounded border border-[#BFDBFE] dark:border-[#333] hover:bg-[#0284C7] dark:hover:bg-[#FFF] hover:text-white dark:hover:text-[#111] transition-colors cursor-pointer"
                    title="Previous certificate"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </button>
                )}
                {nextCert && onSelectCert && (
                  <button
                    onClick={() => onSelectCert(nextCert)}
                    className="p-2 rounded border border-[#BFDBFE] dark:border-[#333] hover:bg-[#0284C7] dark:hover:bg-[#FFF] hover:text-white dark:hover:text-[#111] transition-colors cursor-pointer"
                    title="Next certificate"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
