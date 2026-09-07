import React, { useId } from 'react';
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
  const instanceId = useId();

  return (
    <div
      role="group"
      aria-label="Theme mode switcher"
      className={`inline-flex items-center p-1 rounded-full border bg-[#F1F5F9] dark:bg-[#18181A] border-[#E2E8F0] dark:border-[#2A2A2A] shadow-xs select-none transition-colors duration-300 ${className}`}
    >
      {/* Light Mode Button */}
      <button
        type="button"
        data-theme-choice="light"
        onClick={(e) => setTheme('light', e)}
        aria-label="Switch to light theme"
        aria-pressed={!isDark}
        className={`relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono font-semibold tracking-wider uppercase transition-colors duration-200 cursor-pointer touch-manipulation select-none ${
          !isDark ? 'text-[#0F1E36]' : 'text-[#64748B] hover:text-[#0F1E36] dark:text-[#888] dark:hover:text-[#F3F3F2]'
        }`}
      >
        {!isDark && (
          <motion.div
            layoutId={`activeThemeHighlight-${instanceId}`}
            className="absolute inset-0 rounded-full bg-white shadow-sm border border-[#BAE6FD]/80"
            transition={{ type: 'spring', stiffness: 500, damping: 32 }}
          />
        )}
        <motion.span
          className="relative z-10 flex items-center justify-center"
          animate={{ rotate: !isDark ? 0 : 45, scale: !isDark ? 1 : 0.88 }}
          transition={{ type: 'spring', stiffness: 450, damping: 25 }}
        >
          <Sun className={`w-3.5 h-3.5 ${!isDark ? 'text-[#0284C7]' : ''}`} />
        </motion.span>
        <span className="relative z-10 hidden sm:inline">Light</span>
      </button>

      {/* Dark / Noir Mode Button */}
      <button
        type="button"
        data-theme-choice="dark"
        onClick={(e) => setTheme('dark', e)}
        aria-label="Switch to dark theme"
        aria-pressed={isDark}
        className={`relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono font-semibold tracking-wider uppercase transition-colors duration-200 cursor-pointer touch-manipulation select-none ${
          isDark ? 'text-[#F3F3F2]' : 'text-[#64748B] hover:text-[#0F1E36] dark:text-[#888] dark:hover:text-[#F3F3F2]'
        }`}
      >
        {isDark && (
          <motion.div
            layoutId={`activeThemeHighlight-${instanceId}`}
            className="absolute inset-0 rounded-full bg-[#262626] shadow-sm border border-[#3D3D3D]"
            transition={{ type: 'spring', stiffness: 500, damping: 32 }}
          />
        )}
        <motion.span
          className="relative z-10 flex items-center justify-center"
          animate={{ rotate: isDark ? 0 : -45, scale: isDark ? 1 : 0.88 }}
          transition={{ type: 'spring', stiffness: 450, damping: 25 }}
        >
          <Moon className={`w-3.5 h-3.5 ${isDark ? 'text-[#F472B6]' : ''}`} />
        </motion.span>
        <span className="relative z-10 hidden sm:inline">Dark</span>
      </button>
    </div>
  );
};
