import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#BFDBFE]/60 dark:border-[#222] bg-white/40 dark:bg-[#0A0A0A]/70 backdrop-blur-[2px] py-12 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 select-none transition-colors">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Giant Editorial Footer Statement */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-[#BFDBFE]/60 dark:border-[#222]">
          <div>
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#64748B] dark:text-[#777] block mb-2 font-bold">
              NI PUTU DADIA YASUARINI
            </span>
            <div className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#0F1E36] dark:text-[#F3F3F2]">
              Information Systems &amp; Data
            </div>
          </div>

          <button
            onClick={scrollToTop}
            id="footer-back-to-top"
            data-cursor="TOP"
            className="inline-flex items-center gap-3 px-6 py-3 border border-[#BFDBFE] dark:border-[#333] hover:border-[#0284C7] dark:hover:border-[#F472B6] rounded-full text-xs font-mono font-bold uppercase tracking-widest text-[#0F1E36] dark:text-[#F3F3F2] hover:bg-white dark:hover:bg-[#1C1C1C] transition-all cursor-pointer self-start md:self-auto"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Links & Colophon Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-xs font-mono text-[#64748B] dark:text-[#AAA]">
          <div className="md:col-span-4 space-y-2">
            <div className="font-bold text-[#0F1E36] dark:text-[#F3F3F2]">DADIA &copy; 2026</div>
            <p className="text-[#475569] dark:text-[#888] leading-relaxed">
              Designed with purposeful typography, editorial structure, and dynamic data interactions.
            </p>
          </div>

          <div className="md:col-span-4 space-y-2">
            <div className="font-bold text-[#0F1E36] dark:text-[#F3F3F2]">INDEX MAP</div>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              <button onClick={() => onNavigate('about')} className="hover:text-[#0284C7] dark:hover:text-[#F472B6] cursor-pointer">01 PERSPECTIVE</button>
              <button onClick={() => onNavigate('education')} className="hover:text-[#0284C7] dark:hover:text-[#F472B6] cursor-pointer">02 TIMELINE</button>
              <button onClick={() => onNavigate('work')} className="hover:text-[#0284C7] dark:hover:text-[#F472B6] cursor-pointer">03 WORK</button>
              <button onClick={() => onNavigate('skills')} className="hover:text-[#0284C7] dark:hover:text-[#F472B6] cursor-pointer">04 CAPABILITIES</button>
              <button onClick={() => onNavigate('certificates')} className="hover:text-[#0284C7] dark:hover:text-[#F472B6] cursor-pointer">05 RECOGNITION</button>
              <button onClick={() => onNavigate('contact')} className="hover:text-[#0284C7] dark:hover:text-[#F472B6] cursor-pointer">06 CONNECT</button>
            </div>
          </div>

          <div className="md:col-span-4 space-y-2">
            <div className="font-bold text-[#0F1E36] dark:text-[#F3F3F2]">STACK &amp; RUNTIME</div>
            <p className="text-[#475569] dark:text-[#888]">
              React 19 &middot; TypeScript &middot; Tailwind CSS &middot; Motion Physics
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
