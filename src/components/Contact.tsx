import React, { useState } from 'react';
import { Linkedin, Instagram, Copy, Check, ArrowUpRight, Mail, Sparkles, FileText, FileDown } from 'lucide-react';
import { motion } from 'motion/react';
import { playCelebrationSound } from '../utils/soundEffects';

// Official WhatsApp Vector Icon SVG
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.586 1.874.887 2.796.888h.005c3.18 0 5.767-2.587 5.768-5.766.001-3.182-2.585-5.775-5.773-5.775zm3.376 8.214c-.149.42-1.026.804-1.428.847-.394.041-.884.053-2.584-.654-1.748-.727-2.91-2.484-3.003-2.607-.093-.122-.727-.969-.727-1.85 0-.882.463-1.316.627-1.493.164-.178.358-.223.477-.223.12 0 .239.001.343.007.109.006.257-.041.402.308.149.358.508 1.239.553 1.328.045.09.075.194.015.313-.06.12-.09.194-.179.299-.09.104-.189.233-.27.313-.09.09-.184.187-.079.367.104.179.465.767 1.002 1.246.691.616 1.274.808 1.453.898.179.09.284.075.388-.045.105-.12.448-.523.568-.702.119-.179.239-.149.403-.09.164.06 1.045.493 1.224.582.179.09.299.135.343.209.045.075.045.433-.104.853zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.176L2 22l4.954-1.399A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.167c-1.637 0-3.155-.494-4.422-1.344l-.317-.213-2.937.828.845-2.859-.234-.339A8.136 8.136 0 013.833 12c0-4.502 3.665-8.167 8.167-8.167 4.503 0 8.167 3.665 8.167 8.167 0 4.503-3.664 8.167-8.167 8.167z" />
  </svg>
);

interface ContactProps {
  onOpenResumeModal?: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResumeModal }) => {
  const [copied, setCopied] = useState(false);
  const email = 'dadiaputu@gmail.com';

  const copyEmail = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
      } else {
        // Fallback for non-https or older mobile browser webviews
        const textArea = document.createElement('textarea');
        textArea.value = email;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }
      setCopied(true);
      playCelebrationSound('yay');
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Graceful fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 md:py-32 border-t border-[#BFDBFE]/60 dark:border-[#222] bg-transparent relative transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
        {/* Section Header: Oversized Typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#0284C7] dark:bg-[#F472B6]" />
            <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#64748B] dark:text-[#777] font-mono">
              06 — CONNECT &amp; COLLABORATE
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter text-[#0F1E36] dark:text-[#F3F3F2] leading-tight">
            Let's<br />
            <span className="font-serif italic font-normal pastel-gradient-text">Talk.</span>
          </h2>

          <p className="text-sm sm:text-lg md:text-xl text-[#475569] dark:text-[#AAA] font-normal leading-relaxed mt-4">
            Graduated and actively exploring full-time opportunities, data analytics initiatives, and AI engineering roles. Reach out directly.
          </p>
        </motion.div>

        {/* Contact Content: Unified Channels Container with LinkedIn, Instagram, WhatsApp, and Gmail */}
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="p-8 sm:p-10 rounded-3xl bg-white/85 dark:bg-[#141414]/90 backdrop-blur-md border border-[#BFDBFE]/70 dark:border-[#262626] shadow-sm"
          >
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#64748B] dark:text-[#777] block mb-4 font-bold">
              CONNECT &amp; CHANNELS
            </span>

            <div className="space-y-2">
              {/* LinkedIn */}
              <motion.a
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-4 border-b border-[#BFDBFE]/60 dark:border-[#222] hover:border-[#0284C7] dark:hover:border-[#F472B6] transition-all"
              >
                <div className="flex items-center gap-3.5">
                  <Linkedin className="w-5 h-5 text-[#0077B5] group-hover:scale-110 transition-transform" />
                  <span className="text-base sm:text-lg font-bold text-[#0F1E36] dark:text-[#F3F3F2]">LinkedIn</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#64748B] dark:text-[#AAA] group-hover:text-[#0284C7] dark:group-hover:text-[#F3F3F2]">
                  <span>CONNECT</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.a>

              {/* Instagram */}
              <motion.a
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-4 border-b border-[#BFDBFE]/60 dark:border-[#222] hover:border-[#0284C7] dark:hover:border-[#F472B6] transition-all"
              >
                <div className="flex items-center gap-3.5">
                  <Instagram className="w-5 h-5 text-[#E4405F] group-hover:scale-110 transition-transform" />
                  <span className="text-base sm:text-lg font-bold text-[#0F1E36] dark:text-[#F3F3F2]">Instagram</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#64748B] dark:text-[#AAA] group-hover:text-[#0284C7] dark:group-hover:text-[#F3F3F2]">
                  <span>FOLLOW</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.a>

              {/* Official WhatsApp */}
              <motion.a
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-4 border-b border-[#BFDBFE]/60 dark:border-[#222] hover:border-[#25D366] transition-all"
              >
                <div className="flex items-center gap-3.5">
                  <WhatsAppIcon className="w-5 h-5 text-[#25D366] group-hover:scale-110 transition-transform" />
                  <span className="text-base sm:text-lg font-bold text-[#0F1E36] dark:text-[#F3F3F2]">WhatsApp</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#64748B] dark:text-[#AAA] group-hover:text-[#25D366]">
                  <span>MESSAGE</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.a>

              {/* Gmail (Located inside the same container below WhatsApp, matching the exact same row design without displaying the literal email) */}
              <motion.a
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                href={`mailto:${email}`}
                className="group flex items-center justify-between py-4 border-b border-[#BFDBFE]/60 dark:border-[#222] hover:border-[#EA4335] transition-all"
              >
                <div className="flex items-center gap-3.5">
                  <Mail className="w-5 h-5 text-[#EA4335] group-hover:scale-110 transition-transform shrink-0" />
                  <span className="text-base sm:text-lg font-bold text-[#0F1E36] dark:text-[#F3F3F2]">Gmail</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      copyEmail();
                    }}
                    id="copy-email-btn"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-bold bg-[#EAF2FC] dark:bg-[#202020] hover:bg-[#D8E8FA] dark:hover:bg-[#2C2C2C] text-[#0F1E36] dark:text-[#F3F3F2] transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-emerald-700 dark:text-emerald-400">COPIED!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-[#64748B] dark:text-[#AAA]" />
                        <span>COPY</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center gap-1 text-xs font-mono text-[#64748B] dark:text-[#AAA] group-hover:text-[#EA4335] pl-1">
                    <span>SEND EMAIL</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </motion.a>

              {/* Download PDF Portfolio Resume */}
              <motion.div
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                onClick={onOpenResumeModal}
                className="group flex items-center justify-between py-4 border-b border-[#BFDBFE]/60 dark:border-[#222] hover:border-[#0284C7] dark:hover:border-[#F472B6] transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#E0F2FE] dark:bg-[#1E1E1E] flex items-center justify-center text-[#0284C7] dark:text-[#F472B6] group-hover:scale-110 transition-transform">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-base sm:text-lg font-bold text-[#0F1E36] dark:text-[#F3F3F2] block leading-tight">
                      Curriculum Vitae &amp; Portfolio PDF
                    </span>
                    <span className="text-[10px] font-mono text-[#64748B] dark:text-[#888]">
                      Official ATS Resume &amp; Visual Full-Page Portfolio PDF
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#0284C7] dark:text-[#F472B6] font-bold">
                  <span>DOWNLOAD CV</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.div>
            </div>

            <div className="mt-6 pt-4 flex items-center gap-2 text-xs font-mono text-[#64748B] dark:text-[#777]">
              <Sparkles className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#F472B6]" />
              <span>Response time: Usually within 24 hours</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
