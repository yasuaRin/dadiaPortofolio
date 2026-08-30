import React, { useState, useRef } from 'react';
import { Certificate } from '../types';
import { certificatesData } from '../data/certificates';
import { CertificateLightbox } from './CertificateLightbox';
import { Award, ArrowLeft, ArrowRight, ShieldCheck, Calendar, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const Certificates: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -380, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 380, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="certificates"
      className="py-16 sm:py-28 md:py-36 border-t border-[#BFDBFE]/60 dark:border-[#222] bg-transparent relative transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
        {/* Section Header with Horizontal Gallery Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <Award className="w-4 h-4 text-[#0284C7] dark:text-[#F472B6]" />
              <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#64748B] dark:text-[#777] font-mono">
                05 — RECOGNITION &amp; CERTIFICATIONS
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-[#0F1E36] dark:text-[#F3F3F2] leading-tight">
              Credentials &amp;<br />
              <span className="font-serif italic font-normal pastel-gradient-text">Achievements.</span>
            </h2>
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollLeft}
              className="p-2.5 sm:p-3 rounded-full border border-[#BFDBFE] dark:border-[#333] hover:border-[#0284C7] dark:hover:border-[#F472B6] hover:bg-[#0284C7] dark:hover:bg-[#F472B6] hover:text-white dark:hover:text-[#111] text-[#0F1E36] dark:text-[#F3F3F2] transition-all cursor-pointer"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={scrollRight}
              className="p-2.5 sm:p-3 rounded-full border border-[#BFDBFE] dark:border-[#333] hover:border-[#0284C7] dark:hover:border-[#F472B6] hover:bg-[#0284C7] dark:hover:bg-[#F472B6] hover:text-white dark:hover:text-[#111] text-[#0F1E36] dark:text-[#F3F3F2] transition-all cursor-pointer"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* HORIZONTAL SCROLLING ARTIFACT GALLERY */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 sm:pb-8 pt-2 select-none no-scrollbar snap-x snap-mandatory"
        >
          {certificatesData.map((cert, idx) => {
            const num = idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`;
            const total = certificatesData.length < 10 ? `0${certificatesData.length}` : `${certificatesData.length}`;

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: (idx % 4) * 0.08 }}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedCert(cert)}
                className="group shrink-0 w-[280px] xs:w-[320px] sm:w-[360px] md:w-[400px] p-6 sm:p-8 rounded-3xl bg-white/85 dark:bg-[#141414]/90 backdrop-blur-md border border-[#BFDBFE]/70 dark:border-[#262626] shadow-sm hover:shadow-2xl hover:border-[#0284C7] dark:hover:border-[#F472B6] transition-all duration-300 flex flex-col justify-between cursor-pointer snap-start"
              >
                <div>
                  {/* Top Meta: Number & Date */}
                  <div className="flex items-center justify-between text-xs font-mono text-[#64748B] dark:text-[#AAA] mb-6">
                    <span className="font-bold text-[#0F1E36] dark:text-[#F3F3F2] text-sm">{num} / {total}</span>
                    <span className="uppercase px-2.5 py-0.5 rounded bg-[#E0F2FE] dark:bg-[#222] font-bold text-[10px] text-[#0369A1] dark:text-[#DDD]">
                      {cert.type}
                    </span>
                  </div>

                  {/* Artifact Badge */}
                  <div className="w-10 h-10 rounded-2xl bg-[#0284C7] dark:bg-[#222] text-white dark:text-[#F472B6] flex items-center justify-center mb-6 shadow-xs group-hover:rotate-6 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0F1E36] dark:text-[#F3F3F2] group-hover:text-[#0284C7] dark:group-hover:text-[#F472B6] transition-colors mb-2 leading-snug">
                    {cert.title}
                  </h3>

                  <div className="text-xs font-serif italic text-[#475569] dark:text-[#AAA] mb-4">
                    {cert.issuer}
                  </div>

                  <p className="text-xs sm:text-sm text-[#334155] dark:text-[#AAA] leading-relaxed line-clamp-3 mb-6">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#BFDBFE]/60 dark:border-[#262626] flex items-center justify-between text-xs font-mono text-[#64748B] dark:text-[#AAA]">
                  <span className="flex items-center gap-1.5 text-[11px]">
                    <Calendar className="w-3.5 h-3.5 text-[#64748B]" />
                    {cert.date}
                  </span>

                  <span className="font-bold text-[#0F1E36] dark:text-[#F3F3F2] group-hover:text-[#0284C7] dark:group-hover:text-[#F472B6] transition-colors flex items-center gap-1">
                    <span>VIEW</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                  </span>
                </div>
              </motion.div>
            );
          })}
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
