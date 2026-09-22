import React, { useEffect, useState } from 'react';

interface KineticBackgroundTextProps {
  text?: string;
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
}

export const KineticBackgroundText: React.FC<KineticBackgroundTextProps> = ({
  text = 'DATA INTELLIGENCE ACTION · SYSTEMS & DESIGN',
  speed = 0.2,
  direction = 'left',
  className = ''
}) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setOffset(scrollY * speed * (direction === 'left' ? -1 : 1));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, direction]);

  return (
    <div
      className={`overflow-hidden pointer-events-none select-none my-8 sm:my-16 ${className}`}
      aria-hidden="true"
    >
      <div
        className="whitespace-nowrap text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#1A1A1A]/[0.03] dark:text-white/[0.04] uppercase font-sans will-change-transform"
        style={{
          transform: `translateX(${offset % 600}px)`
        }}
      >
        {text} &middot; {text} &middot; {text}
      </div>
    </div>
  );
};
