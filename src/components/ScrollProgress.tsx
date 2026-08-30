import React, { useEffect, useState } from 'react';

interface ScrollProgressProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

interface SectionItem {
  id: string;
  num: string;
  label: string;
}

const SECTIONS: SectionItem[] = [
  { id: 'home', num: '01', label: 'Intro' },
  { id: 'about', num: '02', label: 'Perspective' },
  { id: 'education', num: '03', label: 'Timeline' },
  { id: 'work', num: '04', label: 'Selected Work' },
  { id: 'skills', num: '05', label: 'Capabilities' },
  { id: 'certificates', num: '06', label: 'Recognition' },
  { id: 'contact', num: '07', label: 'Connect' }
];

export const ScrollProgress: React.FC<ScrollProgressProps> = ({ activeSection, onNavigate }) => {
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
    <>
      {/* Top Thin Progress Line */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50 bg-transparent pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#70B4FF] via-[#B892FF] to-[#F472B6] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Side Numbered Indicator (Desktop Only) */}
      <aside className="fixed right-6 sm:right-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end gap-3 select-none pointer-events-auto">
        <div className="text-[9px] font-mono text-[#A0A0A0] dark:text-[#777] uppercase tracking-widest mb-1">
          {Math.round(scrollProgress)}%
        </div>

        <div className="flex flex-col items-end gap-2.5">
          {SECTIONS.map((sec) => {
            const isActive = activeSection === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => onNavigate(sec.id)}
                className="group flex items-center gap-2 text-right focus:outline-none cursor-pointer py-0.5"
                title={sec.label}
              >
                {/* Floating label on hover */}
                <span
                  className={`text-[10px] font-mono uppercase tracking-wider transition-all duration-200 opacity-0 group-hover:opacity-100 ${
                    isActive ? 'text-[#1A1A1A] dark:text-[#F3F3F2] font-bold' : 'text-[#888] dark:text-[#AAA]'
                  }`}
                >
                  {sec.label}
                </span>

                {/* Number & Indicator */}
                <div className="flex items-center gap-1.5">
                  <span
                    className={`text-[10px] font-mono transition-all duration-200 ${
                      isActive
                        ? 'text-[#1A1A1A] dark:text-[#F3F3F2] font-bold scale-110'
                        : 'text-[#BBB] dark:text-[#666] group-hover:text-[#666] dark:group-hover:text-[#AAA]'
                    }`}
                  >
                    {sec.num}
                  </span>
                  <div
                    className={`h-[2px] transition-all duration-300 ${
                      isActive
                        ? 'w-6 bg-gradient-to-r from-[#70B4FF] to-[#F472B6]'
                        : 'w-2 bg-[#DDD] dark:bg-[#333] group-hover:w-4 group-hover:bg-[#888] dark:group-hover:bg-[#888]'
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </aside>
    </>
  );
};
