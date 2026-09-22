import React, { useState } from 'react';
import { Certificate } from '../types';
import { certificatesData, CERTIFICATES_DRIVE_URL } from '../data/certificates';
import { CertificateLightbox } from './CertificateLightbox';
import {
  Award,
  ArrowUpRight,
  Sparkles,
  FolderOpen,
  Search
} from 'lucide-react';
import { motion } from 'motion/react';

type FilterType = 'all' | 'certification' | 'course' | 'award';

export const Certificates: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCertificates = certificatesData.filter((cert) => {
    const matchesFilter =
      activeFilter === 'all'
        ? true
        : activeFilter === 'award'
        ? cert.type === 'award' || cert.type === 'competition'
        : cert.type === activeFilter;

    if (!matchesFilter) return false;

    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      cert.title.toLowerCase().includes(query) ||
      cert.issuer.toLowerCase().includes(query) ||
      (cert.credentialId && cert.credentialId.toLowerCase().includes(query)) ||
      cert.skillsLearned.some((s) => s.toLowerCase().includes(query))
    );
  });

  const handleOpenCertificate = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const getFilterCount = (type: FilterType) => {
    if (type === 'all') return certificatesData.length;
    if (type === 'award') {
      return certificatesData.filter(
        (c) => c.type === 'award' || c.type === 'competition'
      ).length;
    }
    return certificatesData.filter((c) => c.type === type).length;
  };

  return (
    <section
      id="certificates"
      className="py-20 sm:py-28 md:py-36 border-t border-[#BFDBFE]/60 dark:border-[#222] bg-transparent relative transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-2 mb-2">
              <Award className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#F472B6]" />
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#64748B] dark:text-[#777] font-mono">
                05 — CERTIFICATIONS
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0F1E36] dark:text-[#F3F3F2] mb-2">
              Certifications &amp;{' '}
              <span className="font-serif italic font-normal pastel-gradient-text">
                Honors.
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-[#475569] dark:text-[#999]">
              Verified technical certifications, academy completions, and academic recognitions.
            </p>
          </motion.div>

          {/* Drive Repository Master Link */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="shrink-0"
          >
            <a
              href={CERTIFICATES_DRIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => handleOpenCertificate(e, CERTIFICATES_DRIVE_URL)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-200 dark:border-[#262626] hover:border-[#0284C7] dark:hover:border-[#F472B6] bg-white dark:bg-[#141414] text-[#0F1E36] dark:text-[#F3F3F2] text-xs font-mono font-medium transition-colors shadow-2xs group"
              title="Browse Google Drive verification repository"
            >
              <FolderOpen className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#F472B6]" />
              <span>Drive Repository</span>
              <ArrowUpRight className="w-3 h-3 text-[#64748B] dark:text-[#888] group-hover:text-[#0284C7] dark:group-hover:text-[#F472B6] transition-colors" />
            </a>
          </motion.div>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8 pb-3 border-b border-neutral-200/80 dark:border-[#222]">
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            {[
              { id: 'all', label: 'All' },
              { id: 'certification', label: 'Certifications' },
              { id: 'course', label: 'Courses' },
              { id: 'award', label: 'Awards' },
            ].map((tab) => {
              const count = getFilterCount(tab.id as FilterType);
              const isActive = activeFilter === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id as FilterType)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono transition-all duration-150 cursor-pointer flex items-center gap-1.5 select-none ${
                    isActive
                      ? 'bg-[#0F1E36] dark:bg-[#F472B6] text-white dark:text-[#111] font-semibold'
                      : 'text-[#64748B] dark:text-[#A0A0A0] hover:text-[#0F1E36] dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-[#1C1C1C]'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className="text-[10px] opacity-70">({count})</span>
                </button>
              );
            })}
          </div>

          {/* Quick Search */}
          <div className="relative max-w-xs w-full">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8] dark:text-[#666]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search certificates..."
              className="w-full pl-8 pr-3 py-1.5 text-xs font-mono bg-white dark:bg-[#141414] border border-neutral-200 dark:border-[#262626] rounded-lg text-[#0F1E36] dark:text-[#F3F3F2] placeholder-[#94A3B8] dark:placeholder-[#555] focus:outline-hidden focus:border-[#0284C7] dark:focus:border-[#F472B6] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] font-mono text-[#94A3B8] hover:text-[#0F1E36] dark:text-[#666] dark:hover:text-white cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Concise Grid Layout */}
        {filteredCertificates.length === 0 ? (
          <div className="py-12 text-center rounded-xl border border-dashed border-neutral-200 dark:border-[#2A2A2A] bg-neutral-50/40 dark:bg-[#111]/40">
            <p className="text-xs font-mono text-[#64748B] dark:text-[#888]">
              No certificates match your search.
            </p>
            <button
              onClick={() => {
                setActiveFilter('all');
                setSearchQuery('');
              }}
              className="mt-2 text-xs font-mono font-semibold text-[#0284C7] dark:text-[#F472B6] hover:underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {filteredCertificates.map((cert, idx) => {
              const hasDirectUrl = Boolean(cert.certificateUrl || cert.imageUrl);
              const isUdemy = cert.certificateUrl?.includes('ude.my') || cert.certificateUrl?.includes('udemy.com');
              const linkUrl = cert.certificateUrl || cert.imageUrl || CERTIFICATES_DRIVE_URL;
              const linkActionText = isUdemy ? 'Verify' : 'Open Certificate';

              return (
                <motion.article
                  key={cert.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: idx * 0.03 }}
                  onClick={() => setSelectedCert(cert)}
                  className="group relative flex flex-col justify-between rounded-xl bg-white dark:bg-[#141414] border border-neutral-200/90 dark:border-[#222] hover:border-[#0284C7]/50 dark:hover:border-[#F472B6]/50 p-5 cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:hover:shadow-black/40"
                >
                  <div>
                    {/* Header Row: Category & Date */}
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0284C7] dark:text-[#F472B6]">
                        {cert.type === 'award' ? 'Honors' : cert.type}
                      </span>
                      <span className="text-[11px] font-mono text-[#64748B] dark:text-[#777]">
                        {cert.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-sm sm:text-base font-semibold tracking-tight text-[#0F1E36] dark:text-[#F3F3F2] group-hover:text-[#0284C7] dark:group-hover:text-[#F472B6] transition-colors leading-snug mb-1.5">
                      {cert.title}
                    </h3>

                    {/* Issuer */}
                    <p className="text-xs text-[#475569] dark:text-[#94A3B8] font-medium leading-relaxed mb-3">
                      {cert.issuer}
                    </p>

                    {/* Concise Highlight Pill (if available) */}
                    {cert.highlight && (
                      <div className="mb-3">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-mono bg-neutral-100 dark:bg-[#1E1E1E] text-[#334155] dark:text-[#CCC] border border-neutral-200/60 dark:border-[#2A2A2A]">
                          <Sparkles className="w-2.5 h-2.5 text-[#0284C7] dark:text-[#F472B6]" />
                          <span>{cert.highlight}</span>
                        </span>
                      </div>
                    )}

                    {/* Visual Preview Thumbnail if certificate image is available */}
                    {cert.imageUrl && (
                      <div className="mb-3 rounded-lg overflow-hidden border border-neutral-200/80 dark:border-[#2A2A2A] bg-white shadow-2xs aspect-[16/10] relative group/thumb">
                        <img
                          src={cert.imageUrl}
                          alt={cert.title}
                          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 dark:group-hover:bg-white/5 transition-colors" />
                      </div>
                    )}
                  </div>

                  {/* Action Row */}
                  <div className="pt-3 border-t border-neutral-100 dark:border-[#1F1F1F] flex items-center justify-between text-xs font-mono mt-2">
                    <a
                      href={linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => handleOpenCertificate(e, linkUrl)}
                      className="inline-flex items-center gap-1 font-semibold text-[#0284C7] hover:text-[#0369A1] dark:text-[#F472B6] dark:hover:text-[#F472B6]/80 transition-colors cursor-pointer"
                      title={hasDirectUrl ? 'Open verified certificate' : 'View in certificate repository'}
                    >
                      <span>{linkActionText}</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>

                    <span className="text-[11px] text-[#64748B] dark:text-[#777] group-hover:text-[#0F1E36] dark:group-hover:text-white transition-colors flex items-center gap-0.5">
                      <span>Details</span>
                      <span className="group-hover:translate-x-0.5 transition-transform duration-150">
                        &rarr;
                      </span>
                    </span>
                  </div>
                </motion.article>
              );
            })}
          </div>
        )}
      </div>

      {/* Fullscreen Certificate Lightbox */}
      <CertificateLightbox
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
        onSelectCert={(c) => setSelectedCert(c)}
        allCertificates={certificatesData}
      />
    </section>
  );
};
