import React, { useState, useEffect } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { BackgroundPhysics } from './components/BackgroundPhysics';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { PageLoader } from './components/PageLoader';
import { ScrollProgress } from './components/ScrollProgress';
import { Marquee } from './components/Marquee';
import { KineticBackgroundText } from './components/KineticBackgroundText';

function PortfolioApp() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const { theme } = useTheme();

  // Automatic active section tracking via IntersectionObserver
  useEffect(() => {
    const sectionIds = ['home', 'about', 'education', 'work', 'skills', 'certificates', 'contact'];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-30% 0px -55% 0px',
        threshold: 0
      }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0D0D0D] text-[#0F1E36] dark:text-[#F3F3F2] selection:bg-[#38BDF8]/30 dark:selection:bg-[#F472B6]/40 selection:text-[#0F1E36] dark:selection:text-white font-sans antialiased relative overflow-hidden">
      {/* Background Interactive Physics Simulation (Spans the Entire Application) */}
      <BackgroundPhysics />

      {/* 0. Introductory Page Loader */}
      <PageLoader onComplete={() => setIsLoaded(true)} />

      {/* 1. Custom Dynamic Cursor */}
      <CustomCursor />

      {/* 2. Scroll Progress Bar & Side Numbers */}
      <ScrollProgress activeSection={activeSection} onNavigate={handleNavigate} />

      {/* 3. Floating Navigation with Theme Switcher */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* 4. Main Editorial Content Flow */}
      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <Hero onNavigate={handleNavigate} />

        {/* Marquee Ticker 1 */}
        <Marquee text="DATA — AI — BUSINESS — PRODUCT — DATA — AI — BUSINESS — PRODUCT →" />

        {/* About & Curiosity Matrix */}
        <About />

        {/* Education Timeline */}
        <Education />

        {/* Kinetic Drifting Background Text */}
        <KineticBackgroundText text="DATA INTELLIGENCE ACTION" speed={0.25} />

        {/* Selected Work / Projects */}
        <Projects />

        {/* Marquee Ticker 2 */}
        <Marquee
          text="EXPLORE — EXPERIMENT — ENGINEER — DELIVER — EXPLORE — EXPERIMENT — ENGINEER — DELIVER →"
          reverse
        />

        {/* Capabilities / Skills */}
        <Skills />

        {/* Certificates & Achievements */}
        <Certificates />

        {/* Contact / Connect */}
        <Contact />
      </main>

      {/* 5. Minimalist Editorial Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}

