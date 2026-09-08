import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenResumeModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { id: 'about', label: 'Perspective' },
    { id: 'education', label: 'Timeline' },
    { id: 'work', label: 'Selected Work' },
    { id: 'skills', label: 'Skills' },
    { id: 'certificates', label: 'Recognition' },
    { id: 'contact', label: 'Connect' }
  ];

  return (
    <>
      <header className="relative w-full z-30 px-3 sm:px-6 md:px-12 py-3 sm:py-5 transition-colors duration-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between bg-white/70 dark:bg-[#121212]/80 backdrop-blur-md px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-full border border-[#BAE6FD]/80 dark:border-[#262626] shadow-xs">
          {/* Brand Typography */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            onClick={() => {
              onNavigate('home');
              setMobileMenuOpen(false);
            }}
            className="group flex items-baseline gap-2 focus:outline-none cursor-pointer p-1"
            aria-label="Go to home"
          >
            <span className="text-lg sm:text-2xl font-bold tracking-tight text-[#0F1E36] dark:text-[#F3F3F2]">
              DADIA<span className="pastel-gradient-text">.</span>
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-[#64748B] dark:text-[#777] hidden xs:inline uppercase">
              / IS &amp; DATA
            </span>
          </motion.button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <motion.button
                  key={item.id}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                  onClick={() => onNavigate(item.id)}
                  className={`text-xs font-mono tracking-wider uppercase transition-colors relative py-1 cursor-pointer ${
                    isActive
                      ? 'text-[#0284C7] dark:text-[#F472B6] font-bold'
                      : 'text-[#475569] dark:text-[#999] hover:text-[#0F1E36] dark:hover:text-[#FFF]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0284C7] dark:bg-[#F472B6]"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}

            {/* Theme Mode Switcher */}
            <ThemeToggle />

            <motion.button
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0F1E36] dark:bg-[#F472B6] text-white dark:text-[#111] rounded-full text-xs font-mono font-bold tracking-wider hover:bg-[#1E3A5F] dark:hover:bg-[#FDA4AF] transition-colors cursor-pointer"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-3 h-3" />
            </motion.button>
          </nav>

          {/* Mobile Action Hub: Theme + Hamburger Toggle */}
          <div className="lg:hidden flex items-center gap-1.5 sm:gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 flex items-center justify-center text-[#0F1E36] dark:text-[#F3F3F2] rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu & Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.96 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="fixed top-20 left-4 right-4 z-50 p-6 rounded-3xl bg-white dark:bg-[#141414] border border-[#BFDBFE] dark:border-[#262626] shadow-2xl lg:hidden flex flex-col gap-3 max-h-[calc(100vh-6rem)] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0] dark:border-[#222]">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#64748B] dark:text-[#888]">
                  NAVIGATION
                </span>
                <span className="text-[10px] font-mono text-[#0284C7] dark:text-[#F472B6]">
                  06 SECTIONS
                </span>
              </div>

              {navItems.map((item, idx) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center justify-between w-full py-3 px-3 rounded-xl text-left text-sm font-mono tracking-wider uppercase transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-[#E0F2FE] dark:bg-[#202020] text-[#0284C7] dark:text-[#F472B6] font-bold'
                        : 'text-[#334155] dark:text-[#AAA] hover:bg-[#F1F5F9] dark:hover:bg-[#1A1A1A] hover:text-[#0F1E36] dark:hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-[10px] opacity-60 font-mono">0{idx + 1}</span>
                  </button>
                );
              })}

              <button
                onClick={() => {
                  onNavigate('contact');
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3.5 px-4 bg-[#0F1E36] dark:bg-[#F472B6] text-white dark:text-[#111] text-center text-xs font-mono font-bold tracking-wider rounded-2xl uppercase mt-2 cursor-pointer hover:bg-[#1E3A5F] dark:hover:bg-[#FDA4AF] transition-colors shadow-sm inline-flex items-center justify-center gap-2"
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
