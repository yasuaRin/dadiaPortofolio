import React, { useEffect, useState } from 'react';

interface ScrollProgressProps {
  activeSection?: string;
  onNavigate?: (sectionId: string) => void;
}

export const ScrollProgress: React.FC<ScrollProgressProps> = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="scroll-progress-bar" className="fixed top-0 left-0 right-0 h-[2px] z-50 bg-transparent pointer-events-none no-pdf-export">
      <div
        className="h-full bg-gradient-to-r from-[#70B4FF] via-[#B892FF] to-[#F472B6] transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

