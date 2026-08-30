import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PageLoaderProps {
  onComplete: () => void;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState<number>(0);
  const [shouldShow, setShouldShow] = useState<boolean>(true);

  useEffect(() => {
    // Smooth progress counter simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const step = Math.floor(Math.random() * 18) + 8;
        return Math.min(prev + step, 100);
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => {
        setShouldShow(false);
        onComplete();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -20,
            transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[100] bg-white dark:bg-[#0D0D0D] text-[#0F1E36] dark:text-[#F3F3F2] flex flex-col justify-between p-8 sm:p-14 select-none transition-colors duration-300"
        >
          {/* Top Header Label */}
          <div className="flex items-center justify-between text-[11px] font-mono tracking-[0.3em] uppercase text-[#64748B] dark:text-[#888]">
            <span className="font-semibold text-[#0284C7] dark:text-[#F472B6]">NI PUTU DADIA YASUARINI</span>
            <span>PORTFOLIO / 2026</span>
          </div>

          {/* Center Stage: Bold Typography */}
          <div className="max-w-4xl mx-auto w-full text-center my-auto">
            <div className="overflow-hidden mb-4">
              <motion.h1
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl sm:text-7xl md:text-9xl font-bold tracking-tighter font-sans text-[#0F1E36] dark:text-[#F3F3F2]"
              >
                DADIA
              </motion.h1>
            </div>

            <div className="overflow-hidden h-8">
              {progress >= 30 && (
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-xs sm:text-sm font-mono tracking-[0.35em] uppercase pastel-gradient-text font-bold"
                >
                  DATA &middot; INTELLIGENCE &middot; ACTION
                </motion.p>
              )}
            </div>
          </div>

          {/* Bottom Loading Progress Line */}
          <div className="w-full flex items-center justify-between gap-6 text-[10px] font-mono text-[#64748B] dark:text-[#888]">
            <span className="font-bold uppercase tracking-widest text-[#0284C7] dark:text-[#F472B6]">
              {progress < 100 ? 'LOADING SYSTEM' : 'SYSTEM READY'}
            </span>
            <div className="flex-1 h-[3px] bg-[#BFDBFE]/60 dark:bg-[#222] rounded-full overflow-hidden relative">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#0284C7] via-[#38BDF8] to-[#F472B6] dark:from-[#38BDF8] dark:to-[#F472B6]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.2 }}
              />
            </div>
            <span className="w-12 text-right font-mono font-bold text-[#0F1E36] dark:text-[#F3F3F2]">
              {progress}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
