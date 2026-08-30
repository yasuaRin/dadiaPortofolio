import React, { useState } from 'react';
import { Linkedin, Instagram, MessageSquare, Copy, Check, Send, ArrowUpRight, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [messageText, setMessageText] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [sentStatus, setSentStatus] = useState<string | null>(null);

  const email = 'dadiaputu@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendQuickNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageText.trim()) return;
    const subject = encodeURIComponent(`Inquiry from ${senderEmail || 'Visitor'}`);
    const body = encodeURIComponent(messageText);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setSentStatus('Opening email client...');
    setTimeout(() => setSentStatus(null), 4000);
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-28 md:py-36 border-t border-[#BFDBFE]/60 dark:border-[#222] bg-transparent relative transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
        {/* Section Header: Oversized Typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12 sm:mb-20"
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
            Have a data project, research initiative, or engineering role in mind? Reach out directly.
          </p>
        </motion.div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Direct Email & Professional Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-6 space-y-8 sm:space-y-10"
          >
            {/* Direct Email Presentation */}
            <div className="border-b border-[#BFDBFE]/60 dark:border-[#222] pb-6 sm:pb-8">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#64748B] dark:text-[#777] block mb-3 font-bold">
                DIRECT INBOX
              </span>
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <motion.a
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  href={`mailto:${email}`}
                  className="text-lg xs:text-xl sm:text-3xl md:text-4xl font-bold text-[#0F1E36] dark:text-[#F3F3F2] hover:text-[#0284C7] dark:hover:text-[#F472B6] transition-colors font-mono break-all sm:break-normal"
                >
                  {email}
                </motion.a>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  onClick={copyEmail}
                  id="copy-email-btn"
                  className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 bg-white dark:bg-[#1C1C1C] border border-[#BFDBFE] dark:border-[#333] hover:border-[#0284C7] dark:hover:border-[#F472B6] rounded-full text-xs font-mono font-bold text-[#0F1E36] dark:text-[#F3F3F2] transition-all cursor-pointer shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-700 dark:text-emerald-400">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#64748B] dark:text-[#AAA]" />
                      <span>COPY EMAIL</span>
                    </>
                  )}
                </motion.button>
              </div>
            </div>

            {/* Channels Directory */}
            <div className="space-y-3 sm:space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#64748B] dark:text-[#777] block mb-2 font-bold">
                NETWORK &amp; CHANNELS
              </span>

              <motion.a
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-4 border-b border-[#BFDBFE]/60 dark:border-[#222] hover:border-[#0284C7] dark:hover:border-[#F472B6] transition-all"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-4 h-4 text-[#64748B] dark:text-[#AAA] group-hover:text-[#0284C7] dark:group-hover:text-[#F3F3F2] transition-colors" />
                  <span className="text-lg font-bold text-[#0F1E36] dark:text-[#F3F3F2]">LinkedIn</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#64748B] dark:text-[#AAA] group-hover:text-[#0284C7] dark:group-hover:text-[#F3F3F2]">
                  <span>CONNECT</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.a>

              <motion.a
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-4 border-b border-[#BFDBFE]/60 dark:border-[#222] hover:border-[#0284C7] dark:hover:border-[#F472B6] transition-all"
              >
                <div className="flex items-center gap-3">
                  <Instagram className="w-4 h-4 text-[#64748B] dark:text-[#AAA] group-hover:text-[#0284C7] dark:group-hover:text-[#F3F3F2] transition-colors" />
                  <span className="text-lg font-bold text-[#0F1E36] dark:text-[#F3F3F2]">Instagram</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#64748B] dark:text-[#AAA] group-hover:text-[#0284C7] dark:group-hover:text-[#F3F3F2]">
                  <span>FOLLOW</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.a>

              <motion.a
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-4 border-b border-[#BFDBFE]/60 dark:border-[#222] hover:border-[#0284C7] dark:hover:border-[#F472B6] transition-all"
              >
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-4 h-4 text-[#64748B] dark:text-[#AAA] group-hover:text-[#0284C7] dark:group-hover:text-[#F3F3F2] transition-colors" />
                  <span className="text-lg font-bold text-[#0F1E36] dark:text-[#F3F3F2]">WhatsApp</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#64748B] dark:text-[#AAA] group-hover:text-[#0284C7] dark:group-hover:text-[#F3F3F2]">
                  <span>MESSAGE</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Direct Note Composer */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-white/85 dark:bg-[#141414]/90 backdrop-blur-md border border-[#BFDBFE]/70 dark:border-[#262626] shadow-sm"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-[#0F1E36] dark:text-[#F3F3F2] mb-2">
              Send a direct message
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] dark:text-[#AAA] mb-8">
              Fill out a note and start a direct conversation with Dadia.
            </p>

            <form onSubmit={handleSendQuickNote} className="space-y-6">
              <div>
                <label
                  htmlFor="sender-email"
                  className="block text-[10px] font-mono uppercase tracking-widest text-[#64748B] dark:text-[#AAA] mb-2 font-bold"
                >
                  YOUR NAME / EMAIL
                </label>
                <input
                  type="text"
                  id="sender-email"
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  placeholder="e.g. Alex &middot; alex@organization.com"
                  className="w-full px-4 py-3 bg-[#EAF2FC]/50 dark:bg-[#1D1D1D] border border-[#BFDBFE]/70 dark:border-[#333] rounded-xl text-sm text-[#0F1E36] dark:text-[#F3F3F2] placeholder:text-[#94A3B8] dark:placeholder:text-[#666] focus:outline-none focus:border-[#0284C7] dark:focus:border-[#F472B6] transition-all font-mono text-xs"
                />
              </div>

              <div>
                <label
                  htmlFor="message-text"
                  className="block text-[10px] font-mono uppercase tracking-widest text-[#64748B] dark:text-[#AAA] mb-2 font-bold"
                >
                  MESSAGE
                </label>
                <textarea
                  id="message-text"
                  rows={4}
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  placeholder="Hi Dadia, I'd like to talk about an opportunity / project in..."
                  required
                  className="w-full px-4 py-3 bg-[#EAF2FC]/50 dark:bg-[#1D1D1D] border border-[#BFDBFE]/70 dark:border-[#333] rounded-xl text-sm text-[#0F1E36] dark:text-[#F3F3F2] placeholder:text-[#94A3B8] dark:placeholder:text-[#666] focus:outline-none focus:border-[#0284C7] dark:focus:border-[#F472B6] transition-all resize-none font-mono text-xs"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                type="submit"
                id="send-message-btn"
                className="w-full group flex items-center justify-center gap-3 py-4 px-6 bg-[#0F1E36] dark:bg-[#F472B6] text-white dark:text-[#111] rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#1E3A5F] dark:hover:bg-[#FDA4AF] transition-colors cursor-pointer"
              >
                <span>Send message</span>
                <Send className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </motion.button>

              {sentStatus && (
                <div className="text-center text-xs font-mono text-[#64748B] dark:text-[#AAA] pt-2">
                  {sentStatus}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
