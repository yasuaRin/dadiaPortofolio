import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun, Sparkles } from 'lucide-react';

export const ThemeTransitionOverlay: React.FC = () => {
  const { theme } = useTheme();
  const [transitionState, setTransitionState] = useState<{
    id: number;
    toTheme: 'light' | 'dark';
  } | null>(null);

  const isFirstMount = useRef(true);
  const transitionCounter = useRef(0);

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }

    transitionCounter.current += 1;
    setTransitionState({
      id: transitionCounter.current,
      toTheme: theme
    });

    const timer = setTimeout(() => {
      setTransitionState((current) => {
        if (current && current.id === transitionCounter.current) {
          return null;
        }
        return current;
      });
    }, 750);

    return () => clearTimeout(timer);
  }, [theme]);

  return (
    <AnimatePresence>
      {transitionState && (
        <motion.div
          key={transitionState.id}
          className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
        >
          {/* Main Primary Wipe Blade */}
          <motion.div
            initial={{ clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
            animate={{
              clipPath: [
                'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
                'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)'
              ]
            }}
            transition={{
              duration: 0.7,
              times: [0, 0.48, 1],
              ease: [0.76, 0, 0.24, 1]
            }}
            className={`absolute inset-0 w-full h-full ${
              transitionState.toTheme === 'dark'
                ? 'bg-[#0D0D0D] text-[#F3F3F2]'
                : 'bg-white text-[#0F1E36]'
            } flex items-center justify-center`}
          >
            {/* Ambient Leading Gradient Line */}
            <div
              className={`absolute top-0 bottom-0 w-32 -right-16 blur-xl pointer-events-none opacity-80 ${
                transitionState.toTheme === 'dark'
                  ? 'bg-gradient-to-r from-[#F472B6]/40 to-[#FDA4AF]/40'
                  : 'bg-gradient-to-r from-[#0284C7]/30 to-[#38BDF8]/40'
              }`}
            />

            {/* Subtle Center Brand Telemetry Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 10 }}
              animate={{
                opacity: [0, 1, 1, 0],
                scale: [0.9, 1, 1, 0.95],
                y: [8, 0, 0, -8]
              }}
              transition={{
                duration: 0.65,
                times: [0, 0.25, 0.75, 1],
                ease: 'easeInOut'
              }}
              className="flex items-center gap-4 px-6 py-3 rounded-full border shadow-2xl backdrop-blur-md font-mono text-xs select-none"
              style={{
                backgroundColor:
                  transitionState.toTheme === 'dark' ? 'rgba(20,20,22,0.9)' : 'rgba(255,255,255,0.95)',
                borderColor:
                  transitionState.toTheme === 'dark' ? 'rgba(244,114,182,0.45)' : 'rgba(56,189,248,0.45)',
                color: transitionState.toTheme === 'dark' ? '#F3F3F2' : '#0F1E36'
              }}
            >
              <div className="flex items-center gap-2">
                {transitionState.toTheme === 'dark' ? (
                  <Moon className="w-4 h-4 text-[#F472B6] animate-pulse" />
                ) : (
                  <Sun className="w-4 h-4 text-[#0284C7] animate-spin" style={{ animationDuration: '8s' }} />
                )}
                <span className="font-bold tracking-widest uppercase">
                  {transitionState.toTheme === 'dark' ? 'NOIR PINK' : 'LIGHT BLUE'}
                </span>
              </div>
              <span className="w-1 h-1 rounded-full bg-current opacity-40" />
              <span className="text-[10px] opacity-70 tracking-wider">
                {transitionState.toTheme === 'dark' ? 'PALETTE // #0D0D0D' : 'PALETTE // #FFFFFF'}
              </span>
            </motion.div>
          </motion.div>

          {/* Secondary Shimmer Accent Line Wave */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '200%' }}
            transition={{
              duration: 0.7,
              ease: [0.76, 0, 0.24, 1]
            }}
            className={`absolute top-0 bottom-0 w-28 bg-gradient-to-r from-transparent ${
              transitionState.toTheme === 'dark'
                ? 'via-[#F472B6]/35 to-transparent'
                : 'via-[#38BDF8]/35 to-transparent'
            }`}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
