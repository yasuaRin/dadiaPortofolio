import React, { useState, useEffect, useRef } from 'react';
import { Database, Sparkles, CheckCircle2 } from 'lucide-react';

interface Stage {
  id: 'data' | 'insight' | 'solution';
  num: string;
  label: string;
  sublabel: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

const stages: Stage[] = [
  {
    id: 'data',
    num: '01',
    label: 'DATA',
    sublabel: 'Raw Signals',
    icon: Database,
    description: 'Messy spreadsheets, relational schemas, distributed transaction feeds, and business data.'
  },
  {
    id: 'insight',
    num: '02',
    label: 'INSIGHT',
    sublabel: 'Pattern Discovery',
    icon: Sparkles,
    description: 'Statistical modeling, machine learning inference, feature extraction, and analytical clarity.'
  },
  {
    id: 'solution',
    num: '03',
    label: 'SOLUTION',
    sublabel: 'Tangible Outcomes',
    icon: CheckCircle2,
    description: 'Operational platforms, automated decision pipelines, executive visibility, and optimized workflows.'
  }
];

export const HeroVisual: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % 3);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 15;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 15;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[380px] sm:max-w-[420px] flex flex-col items-center select-none"
    >
      {/* Visual Artistic Shape Composition */}
      <div
        className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] transition-transform duration-300 ease-out"
        style={{
          transform: `perspective(800px) rotateX(${-mousePos.y * 0.2}deg) rotateY(${mousePos.x * 0.2}deg)`
        }}
      >
        {/* Artistic Shape Background Offset */}
        <div className="absolute inset-0 bg-[#BFDBFE]/30 dark:bg-[#F472B6]/10 rounded-full transform translate-x-3.5 translate-y-3.5" />

        {/* Circular Frame with soft tone gradient */}
        <div className="absolute inset-0 border border-[#BFDBFE]/60 dark:border-[#2E2E2E] rounded-full overflow-hidden bg-[#EAF2FC] dark:bg-[#181818] flex items-center justify-center shadow-inner">
          <div className="w-full h-full bg-gradient-to-tr from-[#DBEAFE] via-[#EAF2FC] to-[#F0F6FD] dark:from-[#111] dark:via-[#181818] dark:to-[#222] flex flex-col items-center justify-center p-6 text-center">
            {/* Center Monogram / Dynamic Symbol */}
            <div className="w-14 h-14 rounded-full bg-white dark:bg-[#262626] border border-[#BFDBFE] dark:border-[#333] flex items-center justify-center shadow-sm text-[#0284C7] dark:text-[#F472B6] font-serif italic text-2xl">
              {activeStage === 0 ? 'D' : activeStage === 1 ? 'I' : 'S'}
            </div>
            <div className="mt-3 text-[10px] uppercase tracking-[0.25em] font-mono text-[#64748B] dark:text-[#AAA] font-semibold">
              {stages[activeStage].sublabel}
            </div>
          </div>
        </div>

        {/* Floating Indicator Badges */}
        <div className="absolute top-8 -left-4 sm:-left-8 bg-white/90 dark:bg-[#181818] px-4 py-2 border border-[#BFDBFE] dark:border-[#333] text-[10px] uppercase tracking-widest font-bold text-[#0F1E36] dark:text-[#F3F3F2] shadow-sm rounded-lg">
          Data Science
        </div>

        <div className="absolute bottom-10 -right-4 sm:-right-8 bg-white/90 dark:bg-[#181818] px-4 py-2 border border-[#BFDBFE] dark:border-[#333] text-[10px] uppercase tracking-widest font-bold text-[#0F1E36] dark:text-[#F3F3F2] shadow-sm rounded-lg">
          AI Solutions
        </div>
      </div>

      {/* Interactive Flow Sequence */}
      <div className="mt-10 w-full flex justify-between items-center px-4">
        {stages.map((stage, idx) => {
          const isActive = activeStage === idx;
          const isSolution = stage.id === 'solution';

          return (
            <React.Fragment key={stage.id}>
              <button
                type="button"
                onClick={() => setActiveStage(idx)}
                className="text-center group cursor-pointer focus:outline-none transition-all"
              >
                <p
                  className={`text-[9px] uppercase tracking-[0.2em] font-bold mb-1 transition-colors ${
                    isActive ? (isSolution ? 'text-[#0284C7] dark:text-[#F472B6]' : 'text-[#0F1E36] dark:text-[#F3F3F2]') : 'text-[#64748B] dark:text-[#777]'
                  }`}
                >
                  {stage.num}
                </p>
                <p
                  className={`text-xs uppercase tracking-wider font-semibold transition-colors ${
                    isActive
                      ? isSolution
                        ? 'text-[#0284C7] dark:text-[#F472B6] font-bold'
                        : 'text-[#0F1E36] dark:text-[#F3F3F2] font-bold'
                      : 'text-[#64748B] dark:text-[#AAA] group-hover:text-[#0284C7] dark:group-hover:text-[#F472B6]'
                  }`}
                >
                  {stage.label}
                </p>
              </button>

              {idx < stages.length - 1 && (
                <div className="h-[1px] w-8 sm:w-14 bg-[#BFDBFE]/60 dark:bg-[#333] flex-shrink-0" />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Dynamic Phase Context Box */}
      <div className="mt-5 w-full p-4 rounded-xl bg-white/80 dark:bg-[#181818] border border-[#BFDBFE]/70 dark:border-[#262626] shadow-sm transition-all duration-300 text-left">
        <div className="flex items-center justify-between text-[10px] font-mono text-[#64748B] dark:text-[#AAA] uppercase tracking-widest mb-1.5">
          <span>Phase {stages[activeStage].num} Focus</span>
          <span className={activeStage === 2 ? 'text-[#0284C7] dark:text-[#F472B6] font-bold' : 'text-[#0F1E36] dark:text-[#F3F3F2] font-bold'}>
            {stages[activeStage].label}
          </span>
        </div>
        <p className="text-xs text-[#334155] dark:text-[#CCC] leading-relaxed">
          {stages[activeStage].description}
        </p>
      </div>
    </div>
  );
};
