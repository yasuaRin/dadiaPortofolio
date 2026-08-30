import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div
      role="group"
      aria-label="Theme mode switcher"
      className={`inline-flex items-center p-1 rounded-full border bg-[#F1F5F9] dark:bg-[#18181A] border-[#E2E8F0] dark:border-[#2A2A2A] shadow-xs select-none transition-colors duration-300 ${className}`}
    >
      {/* Light Mode Button */}
      <button
        type="button"
        id="theme-btn-light"
        onClick={() => setTheme('light')}
        aria-pressed={!isDark}
        className={`relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono font-semibold tracking-wider uppercase transition-colors duration-200 cursor-pointer ${
          !isDark ? 'text-[#0F1E36]' : 'text-[#64748B] hover:text-[#0F1E36] dark:text-[#888] dark:hover:text-[#F3F3F2]'
        }`}
      >
        {!isDark && (
          <motion.div
            layoutId="activeThemeHighlight"
            className="absolute inset-0 rounded-full bg-white shadow-sm border border-[#BAE6FD]/80"
            transition={{ type: 'spring', stiffness: 450, damping: 30 }}
          />
        )}
        <Sun className={`relative z-10 w-3.5 h-3.5 ${!isDark ? 'text-[#0284C7]' : ''}`} />
        <span className="relative z-10 hidden sm:inline">Light</span>
      </button>

      {/* Dark / Noir Mode Button */}
      <button
        type="button"
        id="theme-btn-dark"
        onClick={() => setTheme('dark')}
        aria-pressed={isDark}
        className={`relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono font-semibold tracking-wider uppercase transition-colors duration-200 cursor-pointer ${
          isDark ? 'text-[#F3F3F2]' : 'text-[#64748B] hover:text-[#0F1E36] dark:text-[#888] dark:hover:text-[#F3F3F2]'
        }`}
      >
        {isDark && (
          <motion.div
            layoutId="activeThemeHighlight"
            className="absolute inset-0 rounded-full bg-[#262626] shadow-sm border border-[#3D3D3D]"
            transition={{ type: 'spring', stiffness: 450, damping: 30 }}
          />
        )}
        <Moon className={`relative z-10 w-3.5 h-3.5 ${isDark ? 'text-[#F472B6]' : ''}`} />
        <span className="relative z-10 hidden sm:inline">Dark</span>
      </button>
    </div>
  );
};
