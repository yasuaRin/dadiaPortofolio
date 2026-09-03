import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#BFDBFE]/60 dark:border-[#222] bg-white/40 dark:bg-[#0A0A0A]/70 backdrop-blur-[2px] py-10 sm:py-14 px-4 sm:px-8 md:px-12 select-none transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Made with Love */}
        <div className="flex items-center gap-2 text-sm sm:text-base font-mono font-medium text-[#0F1E36] dark:text-[#F3F3F2]">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-[#F43F5E] fill-[#F43F5E] animate-pulse" />
          <span>by Dadia</span>
        </div>

        {/* Back to top Button */}
        <button
          onClick={scrollToTop}
          id="footer-back-to-top"
          data-cursor="TOP"
          className="inline-flex items-center gap-2.5 px-6 py-3 border border-[#BFDBFE] dark:border-[#333] hover:border-[#0284C7] dark:hover:border-[#F472B6] rounded-full text-xs font-mono font-bold uppercase tracking-widest text-[#0F1E36] dark:text-[#F3F3F2] hover:bg-white dark:hover:bg-[#1C1C1C] transition-all cursor-pointer shadow-xs"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};

