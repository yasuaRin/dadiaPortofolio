import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, setTheme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div
      role="group"
      aria-label="Theme mode switcher"
      className={`relative inline-flex items-center p-0.5 rounded-full border bg-[#F1F5F9] dark:bg-[#18181A] border-[#E2E8F0] dark:border-[#2A2A2A] shadow-xs select-none transition-colors duration-250 ${className}`}
    >
      {/* 
        Always-Mounted Zero-Gap GPU Sliding Capsule.
        Translates instantly on frame 0 with no layout recalculation or unmounting hitch.
      */}
      <div
        aria-hidden="true"
        className={`absolute top-0.5 bottom-0.5 left-0.5 w-[calc(50%-2px)] rounded-full transition-transform duration-250 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-xs pointer-events-none will-change-transform ${
          isDark
            ? 'translate-x-full bg-[#262626] border border-[#3D3D3D]'
            : 'translate-x-0 bg-white border border-[#BAE6FD]/80'
        }`}
      />

      {/* Light Mode Button */}
      <button
        type="button"
        data-theme-choice="light"
        onClick={(e) => {
          if (isDark) {
            setTheme('light', e);
          } else {
            toggleTheme(e);
          }
        }}
        aria-label="Switch to light theme"
        aria-pressed={!isDark}
        className={`relative z-10 inline-flex items-center justify-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full text-[11px] font-mono font-semibold tracking-wider uppercase transition-colors duration-200 cursor-pointer touch-manipulation select-none ${
          !isDark
            ? 'text-[#0F1E36]'
            : 'text-[#64748B] hover:text-[#0F1E36] dark:text-[#888] dark:hover:text-[#F3F3F2]'
        }`}
      >
        <Sun
          className={`w-3.5 h-3.5 transition-all duration-200 ${
            !isDark
              ? 'text-[#0284C7] scale-105 rotate-0'
              : 'text-[#64748B] dark:text-[#777] scale-90 -rotate-45'
          }`}
        />
        <span className="hidden sm:inline">Light</span>
      </button>

      {/* Dark / Noir Mode Button */}
      <button
        type="button"
        data-theme-choice="dark"
        onClick={(e) => {
          if (!isDark) {
            setTheme('dark', e);
          } else {
            toggleTheme(e);
          }
        }}
        aria-label="Switch to dark theme"
        aria-pressed={isDark}
        className={`relative z-10 inline-flex items-center justify-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full text-[11px] font-mono font-semibold tracking-wider uppercase transition-colors duration-200 cursor-pointer touch-manipulation select-none ${
          isDark
            ? 'text-[#F3F3F2]'
            : 'text-[#64748B] hover:text-[#0F1E36] dark:text-[#888] dark:hover:text-[#F3F3F2]'
        }`}
      >
        <Moon
          className={`w-3.5 h-3.5 transition-all duration-200 ${
            isDark
              ? 'text-[#F472B6] scale-105 rotate-0'
              : 'text-[#64748B] dark:text-[#777] scale-90 45'
          }`}
        />
        <span className="hidden sm:inline">Dark</span>
      </button>
    </div>
  );
};
