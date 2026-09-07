import React, { createContext, useContext, useEffect, useState } from 'react';
import { playThemeSound } from '../utils/soundEffects';

export type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: (event?: React.MouseEvent | { clientX: number; clientY: number } | null) => void;
  setTheme: (theme: Theme, event?: React.MouseEvent | { clientX: number; clientY: number } | null) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    try {
      const saved = localStorage.getItem('dadia_theme');
      if (saved === 'light' || saved === 'dark') {
        return saved;
      }
      if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    } catch {
      // fallback
    }
    return 'light';
  });

  // Keep DOM class and localStorage in exact sync
  useEffect(() => {
    try {
      localStorage.setItem('dadia_theme', theme);
    } catch {
      // ignore
    }

    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
  }, [theme]);

  const toggleTheme = (_event?: React.MouseEvent | { clientX: number; clientY: number } | null) => {
    const nextTheme: Theme = theme === 'light' ? 'dark' : 'light';
    setThemeWithTransition(nextTheme);
  };

  const setTheme = (newTheme: Theme, _event?: React.MouseEvent | { clientX: number; clientY: number } | null) => {
    setThemeWithTransition(newTheme);
  };

  const setThemeWithTransition = (newTheme: Theme) => {
    if (newTheme === theme) return;

    // 1. Play tactile acoustic switch sound immediately (zero delay)
    playThemeSound(newTheme);

    // 2. Synchronously update root DOM classes on the exact click frame
    const root = document.documentElement;
    root.classList.toggle('dark', newTheme === 'dark');
    root.style.colorScheme = newTheme;

    // 3. Update React state with 0 delay (single re-render)
    setThemeState(newTheme);

    try {
      localStorage.setItem('dadia_theme', newTheme);
    } catch {
      // ignore
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};



