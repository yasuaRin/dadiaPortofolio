import React, { useEffect, useState } from 'react';
import { Certificate } from '../types';
import { CERTIFICATES_DRIVE_URL } from '../data/certificates';
import {
  X,
  ArrowLeft,
  ArrowRight,
  Award,
  Calendar,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';
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
  const [copiedLink, setCopiedLink] = useState(false);

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

  const targetUrl = certificate.certificateUrl || certificate.imageUrl || CERTIFICATES_DRIVE_URL;

  const handleOpenUrl = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCopyLink = (text: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
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
          className="fixed inset-0 bg-[#0F1E36]/65 dark:bg-black/85 backdrop-blur-md cursor-pointer"
          aria-hidden="true"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="relative w-full max-w-xl bg-white dark:bg-[#141414] rounded-2xl sm:rounded-3xl border border-[#E2E8F0] dark:border-[#262626] shadow-2xl overflow-hidden z-10 flex flex-col text-[#0F1E36] dark:text-[#F3F3F2]"
        >
          {/* Top Bar */}
          <div className="px-6 py-4 border-b border-[#F1F5F9] dark:border-[#222] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#F0F7FF] dark:bg-[#1C1C1C] text-[#0284C7] dark:text-[#F472B6] border border-[#BAE6FD]/60 dark:border-[#333]">
                <Award className="w-3 h-3" />
                <span>{certificate.type}</span>
              </span>

              {certificate.hours && (
                <span className="text-[11px] font-mono text-[#64748B] dark:text-[#888]">
                  {certificate.hours}
                </span>
              )}
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-[#64748B] hover:text-[#0F1E36] dark:text-[#888] dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-[#222] rounded-full transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Content Body */}
          <div className="p-6 sm:p-8 space-y-6 overflow-y-auto max-h-[72vh]">
            {/* Header: Title, Issuer, and Date */}
            <div>
              <h2
                id="cert-lightbox-title"
                className="text-xl sm:text-2xl font-bold tracking-tight text-[#0F1E36] dark:text-[#F3F3F2] mb-2 leading-snug"
              >
                {certificate.title}
              </h2>
              <div className="text-sm text-[#475569] dark:text-[#A3A3A3] font-medium mb-3">
                {certificate.issuer}
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#64748B] dark:text-[#888]">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#F472B6]" />
                  <span>Issued: {certificate.date}</span>
                </span>
              </div>

              {/* Short action button directly under issued */}
              <div className="mt-3.5 flex items-center gap-2">
                <a
                  href={targetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => handleOpenUrl(e, targetUrl)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#0284C7] hover:bg-[#0369A1] dark:bg-[#F472B6] dark:hover:bg-[#F472B6]/90 text-white dark:text-[#111] font-mono text-xs font-semibold transition-all shadow-xs cursor-pointer"
                >
                  <span>Open Certificate</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                {certificate.certificateUrl && (
                  <button
                    type="button"
                    onClick={() => handleCopyLink(certificate.certificateUrl!)}
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 dark:bg-[#202020] dark:hover:bg-[#282828] text-xs font-mono text-[#475569] dark:text-[#CCC] transition-colors cursor-pointer"
                    title="Copy certificate link"
                  >
                    {copiedLink ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-500" />
                        <span className="text-emerald-600 dark:text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>

            {/* Credential Details Card (Signatory, Recipient, Duration, ID) */}
            {(certificate.signatory || certificate.recipient || certificate.hours || certificate.credentialId) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 p-3.5 rounded-xl bg-neutral-50 dark:bg-[#1A1A1A] border border-neutral-200/70 dark:border-[#262626] text-xs font-mono">
                {certificate.signatory && (
                  <div>
                    <span className="text-[10px] text-[#64748B] dark:text-[#777] uppercase block">Signatory</span>
                    <span className="text-[#0F1E36] dark:text-[#EEE] font-medium">{certificate.signatory}</span>
                  </div>
                )}
                {certificate.recipient && (
                  <div>
                    <span className="text-[10px] text-[#64748B] dark:text-[#777] uppercase block">Recipient</span>
                    <span className="text-[#0F1E36] dark:text-[#EEE] font-medium">{certificate.recipient}</span>
                  </div>
                )}
                {certificate.hours && (
                  <div>
                    <span className="text-[10px] text-[#64748B] dark:text-[#777] uppercase block">Duration</span>
                    <span className="text-[#0F1E36] dark:text-[#EEE] font-medium">{certificate.hours}</span>
                  </div>
                )}
                {certificate.credentialId && (
                  <div>
                    <span className="text-[10px] text-[#64748B] dark:text-[#777] uppercase block">Credential ID</span>
                    <span className="text-[#0F1E36] dark:text-[#EEE] font-medium">{certificate.credentialId}</span>
                  </div>
                )}
              </div>
            )}

            {/* Scope / Description */}
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#64748B] dark:text-[#777] block mb-1.5">
                Overview
              </span>
              <p className="text-xs sm:text-sm text-[#334155] dark:text-[#CCC] leading-relaxed">
                {certificate.description}
              </p>
            </div>

            {/* Competencies */}
            {certificate.skillsLearned && certificate.skillsLearned.length > 0 && (
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#64748B] dark:text-[#777] block mb-2">
                  Skills &amp; Topics
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {certificate.skillsLearned.map((skill, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-neutral-50 dark:bg-[#1A1A1A] border border-neutral-200/80 dark:border-[#2C2C2C] rounded-lg text-xs font-medium text-[#334155] dark:text-[#DDD]"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#0284C7] dark:text-[#F472B6] shrink-0" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer Controls */}
          <div className="px-6 py-3.5 bg-neutral-50 dark:bg-[#101010] border-t border-[#F1F5F9] dark:border-[#222] flex items-center justify-between text-xs font-mono text-[#64748B] dark:text-[#888]">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#0284C7] dark:text-[#F472B6]" />
              <span>Verified Certificate</span>
            </div>

            <div className="flex items-center gap-2">
              {prevCert && onSelectCert && (
                <button
                  type="button"
                  onClick={() => onSelectCert(prevCert)}
                  className="px-2.5 py-1.5 rounded-lg border border-neutral-200 dark:border-[#333] hover:bg-white dark:hover:bg-[#202020] transition-colors cursor-pointer flex items-center gap-1"
                  title="Previous certificate"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Previous</span>
                </button>
              )}
              {nextCert && onSelectCert && (
                <button
                  type="button"
                  onClick={() => onSelectCert(nextCert)}
                  className="px-2.5 py-1.5 rounded-lg border border-neutral-200 dark:border-[#333] hover:bg-white dark:hover:bg-[#202020] transition-colors cursor-pointer flex items-center gap-1"
                  title="Next certificate"
                >
                  <span className="hidden sm:inline">Next</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
