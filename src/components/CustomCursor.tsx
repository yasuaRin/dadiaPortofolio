import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

export const CustomCursor: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch / mobile devices or reduced motion
    const checkTouch = () => {
      const hasTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setIsTouch(hasTouch || prefersReduced);
    };

    checkTouch();
    window.addEventListener('resize', checkTouch);

    if (isTouch) return;

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsHidden(false);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('button, a, input, textarea, select, [role="button"], [tabindex="0"], .cursor-pointer, [data-cursor]');
      setIsHovering(Boolean(interactive));
    };

    const onMouseLeave = () => {
      setIsHidden(true);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('resize', checkTouch);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <>
      {/* Outer Spring Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          width: isHovering ? 48 : 28,
          height: isHovering ? 48 : 28,
          opacity: isHidden ? 0 : isHovering ? 0.8 : 0.45,
          translateX: '-50%',
          translateY: '-50%',
          backgroundColor: isHovering
            ? isDark
              ? 'rgba(244, 114, 182, 0.2)'
              : 'rgba(2, 132, 199, 0.15)'
            : 'transparent',
          borderColor: isHovering
            ? isDark
              ? '#F472B6'
              : '#0284C7'
            : isDark
            ? 'rgba(240, 240, 240, 0.4)'
            : 'rgba(15, 30, 54, 0.35)',
        }}
        transition={{
          type: 'spring',
          damping: 24,
          stiffness: 280,
          mass: 0.18
        }}
      />

      {/* Center Core Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          width: isHovering ? 8 : 5,
          height: isHovering ? 8 : 5,
          opacity: isHidden ? 0 : 1,
          translateX: '-50%',
          translateY: '-50%',
          backgroundColor: isHovering
            ? isDark
              ? '#F472B6'
              : '#0284C7'
            : isDark
            ? '#F3F3F2'
            : '#0F1E36',
        }}
        transition={{
          type: 'spring',
          damping: 35,
          stiffness: 450,
          mass: 0.08
        }}
      />
    </>
  );
};

