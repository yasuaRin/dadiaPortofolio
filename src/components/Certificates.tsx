import React, { useState, useRef, useEffect } from 'react';
import { Certificate } from '../types';
import { certificatesData } from '../data/certificates';
import { CertificateLightbox } from './CertificateLightbox';
import { Award, ArrowLeft, ArrowRight, ShieldCheck, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export const Certificates: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeScrollIndex, setActiveScrollIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const updateScrollState = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const firstCard = scrollContainerRef.current.querySelector('.cert-card') as HTMLElement | null;
    if (firstCard) {
      const cardWidth = firstCard.offsetWidth + 16; // width + gap
      const index = Math.round(scrollLeft / cardWidth);
      setActiveScrollIndex(Math.min(Math.max(index, 0), certificatesData.length - 1));
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);
    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, []);

  const getScrollStep = () => {
    if (scrollContainerRef.current) {
      const firstCard = scrollContainerRef.current.querySelector('.cert-card') as HTMLElement | null;
      if (firstCard) {
        return firstCard.offsetWidth + 16;
      }
      return scrollContainerRef.current.clientWidth * 0.85;
    }
    return 360;
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -getScrollStep(), behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
    }
  };

  const scrollToCard = (index: number) => {
    if (scrollContainerRef.current) {
      const step = getScrollStep();
      scrollContainerRef.current.scrollTo({ left: index * step, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="certificates"
      className="py-16 sm:py-24 md:py-32 lg:py-36 border-t border-[#BFDBFE]/60 dark:border-[#222] bg-transparent relative transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
        {/* Section Header with Horizontal Gallery Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-14 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <Award className="w-4 h-4 text-[#0284C7] dark:text-[#F472B6]" />
              <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#64748B] dark:text-[#777] font-mono">
                05 — RECOGNITION &amp; CERTIFICATIONS
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-[#0F1E36] dark:text-[#F3F3F2] leading-tight">
              Credentials &amp;<br />
              <span className="font-serif italic font-normal pastel-gradient-text">Achievements.</span>
            </h2>
          </motion.div>

          {/* Gallery Navigation Controls & Counter */}
          <div className="flex items-center gap-3 self-start sm:self-auto">
            <span className="text-xs font-mono text-[#64748B] dark:text-[#888] mr-1 hidden sm:inline">
              {activeScrollIndex + 1 < 10 ? `0${activeScrollIndex + 1}` : activeScrollIndex + 1} / {certificatesData.length < 10 ? `0${certificatesData.length}` : certificatesData.length}
            </span>
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className="min-h-[44px] min-w-[44px] p-2.5 sm:p-3 rounded-full border border-[#BFDBFE] dark:border-[#333] hover:border-[#0284C7] dark:hover:border-[#F472B6] hover:bg-[#0284C7] dark:hover:bg-[#F472B6] hover:text-white dark:hover:text-[#111] text-[#0F1E36] dark:text-[#F3F3F2] disabled:opacity-35 disabled:pointer-events-none transition-all cursor-pointer flex items-center justify-center touch-manipulation"
              aria-label="Scroll to previous certificate"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              className="min-h-[44px] min-w-[44px] p-2.5 sm:p-3 rounded-full border border-[#BFDBFE] dark:border-[#333] hover:border-[#0284C7] dark:hover:border-[#F472B6] hover:bg-[#0284C7] dark:hover:bg-[#F472B6] hover:text-white dark:hover:text-[#111] text-[#0F1E36] dark:text-[#F3F3F2] disabled:opacity-35 disabled:pointer-events-none transition-all cursor-pointer flex items-center justify-center touch-manipulation"
              aria-label="Scroll to next certificate"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* HORIZONTAL SCROLLING ARTIFACT GALLERY */}
        <div
          ref={scrollContainerRef}
          role="region"
          aria-label="Certificates gallery"
          tabIndex={0}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 sm:pb-8 pt-2 select-none no-scrollbar snap-x snap-mandatory overscroll-x-contain touch-pan-x focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0284C7] rounded-3xl"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {certificatesData.map((cert, idx) => {
            const num = idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`;
            const total = certificatesData.length < 10 ? `0${certificatesData.length}` : `${certificatesData.length}`;

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: (idx % 4) * 0.06 }}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedCert(cert)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedCert(cert);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`View certificate details for ${cert.title}`}
                className="cert-card group shrink-0 w-[calc(100vw-3rem)] max-w-[340px] sm:w-[360px] md:w-[380px] lg:w-[410px] p-5 sm:p-7 md:p-8 rounded-3xl bg-white/90 dark:bg-[#141414]/90 backdrop-blur-md border border-[#BFDBFE]/70 dark:border-[#262626] shadow-sm hover:shadow-xl hover:border-[#0284C7] dark:hover:border-[#F472B6] transition-all duration-300 flex flex-col justify-between cursor-pointer snap-start focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0284C7]"
              >
                <div>
                  {/* Top Meta: Number & Date */}
                  <div className="flex items-center justify-between text-xs font-mono text-[#64748B] dark:text-[#AAA] mb-5">
                    <span className="font-bold text-[#0F1E36] dark:text-[#F3F3F2] text-xs sm:text-sm">{num} / {total}</span>
                    <span className="uppercase px-2.5 py-0.5 rounded-full bg-[#E0F2FE] dark:bg-[#222] font-bold text-[10px] text-[#0369A1] dark:text-[#DDD] border border-[#BAE6FD] dark:border-[#333]">
                      {cert.type}
                    </span>
                  </div>

                  {/* Artifact Badge */}
                  <div className="w-10 h-10 rounded-2xl bg-[#0284C7] dark:bg-[#222] text-white dark:text-[#F472B6] flex items-center justify-center mb-5 shadow-xs group-hover:rotate-6 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-[#0F1E36] dark:text-[#F3F3F2] group-hover:text-[#0284C7] dark:group-hover:text-[#F472B6] transition-colors mb-2 leading-snug break-words">
                    {cert.title}
                  </h3>

                  <div className="text-xs font-serif italic text-[#475569] dark:text-[#AAA] mb-3 break-words">
                    {cert.issuer}
                  </div>

                  <p className="text-xs sm:text-sm text-[#334155] dark:text-[#AAA] leading-relaxed line-clamp-3 mb-4">
                    {cert.description}
                  </p>

                  {/* Competencies / Skills Learned Preview Tags */}
                  {cert.skillsLearned && cert.skillsLearned.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {cert.skillsLearned.slice(0, 3).map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-mono font-medium bg-[#F0F7FF] dark:bg-[#1C1C1C] text-[#0369A1] dark:text-[#BAE6FD] border border-[#BAE6FD]/70 dark:border-[#2E2E2E] break-words"
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skillsLearned.length > 3 && (
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded-md text-[10px] font-mono font-bold bg-neutral-100 dark:bg-[#242424] text-[#64748B] dark:text-[#888]">
                          +{cert.skillsLearned.length - 3}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                <div className="pt-3.5 border-t border-[#BFDBFE]/60 dark:border-[#262626] flex items-center justify-between text-xs font-mono text-[#64748B] dark:text-[#AAA]">
                  <span className="flex items-center gap-1.5 text-[11px]">
                    <Calendar className="w-3.5 h-3.5 text-[#64748B] shrink-0" />
                    <span className="truncate">{cert.date}</span>
                  </span>

                  <span className="font-bold text-[#0F1E36] dark:text-[#F3F3F2] group-hover:text-[#0284C7] dark:group-hover:text-[#F472B6] transition-colors flex items-center gap-1 shrink-0">
                    <span>DETAILS</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile / Touch Pagination Dot Indicators */}
        <div className="flex items-center justify-center gap-1.5 pt-2 sm:hidden">
          {certificatesData.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => scrollToCard(dotIdx)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                dotIdx === activeScrollIndex
                  ? 'w-6 bg-[#0284C7] dark:bg-[#F472B6]'
                  : 'w-1.5 bg-neutral-300 dark:bg-[#333]'
              }`}
              aria-label={`Go to slide ${dotIdx + 1}`}
            />
          ))}
        </div>
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
