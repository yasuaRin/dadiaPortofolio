import React, { useState } from 'react';
import { Linkedin, Instagram, Copy, Check, ArrowUpRight, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { playCelebrationSound } from '../utils/soundEffects';

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

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0F1E36] dark:text-[#F3F3F2] leading-tight">
            Let's<br />
            <span className="font-serif italic font-normal pastel-gradient-text">Talk.</span>
          </h2>
        </motion.div>

        {/* Contact Content: Unified Channels Container with LinkedIn, Instagram, and Gmail */}
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
                href="https://www.linkedin.com/in/ni-putu-dadia-yasuarini-a1a07828b/"
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
                href="https://www.instagram.com/niptdadia/"
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

              {/* Gmail */}
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};