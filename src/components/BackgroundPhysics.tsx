import React, { useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseX: number;
  baseY: number;
  radius: number;
  colorType: 'primary' | 'accent' | 'muted';
  pulsePhase: number;
  pulseSpeed: number;
}

interface Shockwave {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  strength: number;
  life: number;
}

export const BackgroundPhysics: React.FC = () => {
  const { theme } = useTheme();
  const themeRef = useRef(theme);
  themeRef.current = theme;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean; targetX: number; targetY: number }>({
    x: -1000,
    y: -1000,
    targetX: -1000,
    targetY: -1000,
    active: false,
  });
  const shockwavesRef = useRef<Shockwave[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Initialize particles across full viewport once
    const particleCount = Math.min(55, Math.max(25, Math.floor((width * height) / 32000)));
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const colorType: 'primary' | 'accent' | 'muted' =
        i % 5 === 0 ? 'accent' : i % 3 === 0 ? 'primary' : 'muted';

      particles.push({
        x,
        y,
        baseX: x,
        baseY: y,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: colorType === 'accent' ? 3.0 : colorType === 'primary' ? 2.3 : 1.6,
        colorType,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.02,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
      mouseRef.current.active = true;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current.targetX = e.touches[0].clientX;
        mouseRef.current.targetY = e.touches[0].clientY;
        mouseRef.current.active = true;
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const handleClick = (e: MouseEvent) => {
      shockwavesRef.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 5,
        maxRadius: 180,
        strength: 28,
        life: 1,
      });
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('click', handleClick);

    let time = 0;

    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse follow
      const mouse = mouseRef.current;
      if (mouse.active) {
        mouse.x += (mouse.targetX - mouse.x) * 0.12;
        mouse.y += (mouse.targetY - mouse.y) * 0.12;
      } else {
        mouse.x = -1000;
        mouse.y = -1000;
      }

      const isDark = themeRef.current === 'dark';

      // Colors palette according to theme: Pastel Blue in Light Mode, Pastel Pink in Dark Mode
      const primaryColor = isDark ? 'rgba(243, 243, 242, ' : 'rgba(15, 30, 54, ';
      const accentColor = isDark ? 'rgba(244, 114, 182, ' : 'rgba(2, 132, 199, ';
      const mutedColor = isDark ? 'rgba(190, 140, 175, ' : 'rgba(125, 175, 235, ';
      const lineBaseColor = isDark ? '244, 114, 182' : '56, 189, 248';

      // 1. Update and Render Shockwaves
      for (let s = shockwavesRef.current.length - 1; s >= 0; s--) {
        const sw = shockwavesRef.current[s];
        sw.radius += 4.5;
        sw.life = 1 - sw.radius / sw.maxRadius;

        if (sw.life <= 0) {
          shockwavesRef.current.splice(s, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `${accentColor}${sw.life * 0.25})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Push nearby particles
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          const dx = p.x - sw.x;
          const dy = p.y - sw.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (Math.abs(dist - sw.radius) < 30) {
            const force = sw.strength * sw.life;
            p.x += (dx / (dist || 1)) * force * 0.2;
            p.y += (dy / (dist || 1)) * force * 0.2;
          }
        }
      }

      // 2. Update Particles Physics
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Harmonic drift
        p.baseX += p.vx;
        p.baseY += p.vy;

        // Soft screen wrap / bounce
        if (p.baseX < 0) p.baseX = width;
        if (p.baseX > width) p.baseX = 0;
        if (p.baseY < 0) p.baseY = height;
        if (p.baseY > height) p.baseY = 0;

        let targetX = p.baseX;
        let targetY = p.baseY;

        // Cursor dynamic repulsion
        if (mouse.active) {
          const dx = p.baseX - mouse.x;
          const dy = p.baseY - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const repelRadius = 180;

          if (dist < repelRadius && dist > 0) {
            const force = (1 - dist / repelRadius) * 55;
            targetX += (dx / dist) * force;
            targetY += (dy / dist) * force;
          }
        }

        // Spring easing toward target
        p.x += (targetX - p.x) * 0.08;
        p.y += (targetY - p.y) * 0.08;
        p.pulsePhase += p.pulseSpeed;
      }

      // 3. Draw Connecting Mesh Lines
      const maxDist = Math.min(160, width * 0.22);
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const alphaRatio = 1 - dist / maxDist;
            const lineAlpha = alphaRatio * (isDark ? 0.16 : 0.1);

            // Highlight line if near mouse
            let boost = 0;
            if (mouse.active) {
              const midX = (p1.x + p2.x) / 2;
              const midY = (p1.y + p2.y) / 2;
              const mDist = Math.sqrt((midX - mouse.x) ** 2 + (midY - mouse.y) ** 2);
              if (mDist < 160) {
                boost = (1 - mDist / 160) * 0.22;
              }
            }

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${lineBaseColor}, ${lineAlpha + boost})`;
            ctx.lineWidth = boost > 0 ? 1.2 : 0.75;
            ctx.stroke();
          }
        }
      }

      // 4. Draw Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const pulse = Math.sin(p.pulsePhase) * 0.4 + 0.6;
        const currentRadius = p.radius * (0.85 + pulse * 0.3);

        ctx.beginPath();
        ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);

        if (p.colorType === 'accent') {
          ctx.fillStyle = `${accentColor}${0.7 + pulse * 0.3})`;
          // Soft aura glow for accent nodes
          if (isDark) {
            ctx.shadowColor = 'rgba(244, 114, 182, 0.45)';
            ctx.shadowBlur = 8;
          } else {
            ctx.shadowColor = 'rgba(56, 189, 248, 0.45)';
            ctx.shadowBlur = 6;
          }
        } else if (p.colorType === 'primary') {
          ctx.fillStyle = `${primaryColor}${isDark ? 0.65 : 0.5})`;
          ctx.shadowBlur = 0;
        } else {
          ctx.fillStyle = `${mutedColor}${isDark ? 0.35 : 0.25})`;
          ctx.shadowBlur = 0;
        }

        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="background-physics-canvas"
      className="fixed inset-0 pointer-events-none z-0 select-none opacity-90 transition-opacity duration-700"
      style={{
        width: '100vw',
        height: '100vh',
      }}
      aria-hidden="true"
    />
  );
};
