import React, { useState } from 'react';

interface MarqueeProps {
  text?: string;
  speed?: 'normal' | 'fast' | 'slow';
  reverse?: boolean;
  className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({
  text = 'DATA — AI — BUSINESS — PRODUCT — DATA — AI — BUSINESS — PRODUCT →',
  reverse = false,
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const items = Array(8).fill(text);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden py-4 sm:py-5 border-y border-[#EEE] dark:border-[#222] bg-white/70 dark:bg-[#111]/70 backdrop-blur-[2px] select-none transition-colors duration-300 ${
        isHovered ? 'bg-[#FAF9F7]/90 dark:bg-[#181818]/90' : ''
      } ${className}`}
      data-cursor="PAUSE"
    >
      <div
        className={`flex whitespace-nowrap will-change-transform ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}
        style={{
          animationPlayState: isHovered ? 'paused' : 'running'
        }}
      >
        {items.map((item, idx) => (
          <span
            key={idx}
            className={`mx-4 sm:mx-8 text-xs sm:text-sm font-mono tracking-[0.3em] uppercase transition-all duration-300 ${
              isHovered ? 'text-[#1A1A1A] dark:text-[#F3F3F2] font-semibold' : 'text-[#888] dark:text-[#777]'
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
