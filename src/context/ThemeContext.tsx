import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';

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
    } catch {
      // fallback
    }
    return 'light';
  });

  const isTransitioningRef = useRef<boolean>(false);

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
    event?: React.MouseEvent | { clientX: number; clientY: number } | null
  ) => {
    if (newTheme === theme) return;

    // Immediately resolve and calculate coordinates
    let x = window.innerWidth - 80;
    let y = 40;

    if (event && 'clientX' in event && typeof event.clientX === 'number' && event.clientX > 0) {
      x = event.clientX;
      y = event.clientY;
    } else {
      const targetBtnId = newTheme === 'dark' ? 'theme-btn-dark' : 'theme-btn-light';
      const btn = document.getElementById(targetBtnId);
      if (btn) {
        const rect = btn.getBoundingClientRect();
        x = rect.left + rect.width / 2;
        y = rect.top + rect.height / 2;
      }
    }

    // Calculate maximum radius to fully cover screen diagonally with safety buffer
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    ) + 60;

    const doc = document as unknown as {
      startViewTransition?: (callback: () => void) => {
        ready: Promise<void>;
        finished: Promise<void>;
      };
    };

    // Check if View Transition API is supported and not currently locked
    if (typeof doc.startViewTransition === 'function' && !isTransitioningRef.current) {
      isTransitioningRef.current = true;

      try {
        const transition = doc.startViewTransition(() => {
          // Synchronously flush state and apply DOM attributes in the same render frame
          flushSync(() => {
            setThemeState(newTheme);
          });
          const root = document.documentElement;
          root.classList.toggle('dark', newTheme === 'dark');
          root.style.colorScheme = newTheme;
        });

        transition.ready
          .then(() => {
            // Instant, zero-delay circular clip-path expanding outward seamlessly
            const animation = document.documentElement.animate(
              {
                clipPath: [
                  `circle(0px at ${x}px ${y}px)`,
                  `circle(${endRadius}px at ${x}px ${y}px)`
                ]
              },
              {
                duration: 420,
                easing: 'cubic-bezier(0.2, 0, 0, 1)',
                pseudoElement: '::view-transition-new(root)',
                fill: 'both'
              }
            );

            animation.onfinish = () => {
              isTransitioningRef.current = false;
            };
          })
          .catch(() => {
            isTransitioningRef.current = false;
            setThemeState(newTheme);
          });

        transition.finished
          .catch(() => {
            // Handled
          })
          .finally(() => {
            isTransitioningRef.current = false;
          });

        return;
      } catch {
        isTransitioningRef.current = false;
        setThemeState(newTheme);
        return;
      }
    }

    // Direct fallback for unsupported environments
    setThemeState(newTheme);
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

