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

  const toggleTheme = (event?: React.MouseEvent | { clientX: number; clientY: number } | null) => {
    const nextTheme: Theme = theme === 'light' ? 'dark' : 'light';
    setThemeWithTransition(nextTheme, event);
  };

  const setTheme = (newTheme: Theme, event?: React.MouseEvent | { clientX: number; clientY: number } | null) => {
    setThemeWithTransition(newTheme, event);
  };

  const setThemeWithTransition = (
    newTheme: Theme,
    _event?: React.MouseEvent | { clientX: number; clientY: number } | null
  ) => {
    if (newTheme === theme) return;

    // 1. Play cute tactile acoustic sound asynchronously so it never blocks the DOM render frame
    setTimeout(() => {
      playThemeSound(newTheme);
    }, 0);

    const root = document.documentElement;

    const applyThemeToDOM = () => {
      if (newTheme === 'dark') {
        root.classList.add('dark');
        root.style.colorScheme = 'dark';
      } else {
        root.classList.remove('dark');
        root.style.colorScheme = 'light';
      }
      setThemeState(newTheme);

      try {
        localStorage.setItem('dadia_theme', newTheme);
      } catch {
        // ignore
      }
    };

    // 2. Hardware-accelerated View Transitions API (Zero delay, zero gap, GPU compositor)
    if (
      typeof document !== 'undefined' &&
      'startViewTransition' in document &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      try {
        document.startViewTransition(() => {
          applyThemeToDOM();
        });
        return;
      } catch {
        // Fallback below if View Transition throws
      }
    }

    // 3. Fallback: Synchronized CSS theme morphing across all surfaces
    root.classList.add('theme-morphing');
    applyThemeToDOM();

    setTimeout(() => {
      root.classList.remove('theme-morphing');
    }, 250);
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



