import React, { useRef, useEffect, useState, useCallback } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseX: number;
  baseY: number;
  radius: number;
  label?: string;
  stage: 'data' | 'insight' | 'solution';
}

export const AbstractDataNodes: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeStage, setActiveStage] = useState<'data' | 'insight' | 'solution'>('data');
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: -1000, y: -1000, active: false });

  const initNodes = useCallback((width: number, height: number): Node[] => {
    const nodes: Node[] = [];
    const count = Math.min(28, Math.floor((width * height) / 18000));

    // Structured cluster distribution across 3 primary phases
    for (let i = 0; i < count; i++) {
      let stage: 'data' | 'insight' | 'solution' = 'data';
      let xRatio = 0.2 + Math.random() * 0.2;
      let yRatio = 0.3 + Math.random() * 0.4;

      if (i % 3 === 1) {
        stage = 'insight';
        xRatio = 0.45 + Math.random() * 0.15;
        yRatio = 0.25 + Math.random() * 0.5;
      } else if (i % 3 === 2) {
        stage = 'solution';
        xRatio = 0.65 + Math.random() * 0.22;
        yRatio = 0.35 + Math.random() * 0.35;
      }

      const x = width * xRatio;
      const y = height * yRatio;

      nodes.push({
        x,
        y,
        baseX: x,
        baseY: y,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: stage === 'solution' ? 3.5 : stage === 'insight' ? 3 : 2.5,
        stage
      });
    }

    return nodes;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = container.clientWidth);
    let height = (canvas.height = container.clientHeight);

    let nodes = initNodes(width, height);

    const handleResize = () => {
      if (!container || !canvas) return;
      width = canvas.width = container.clientWidth;
      height = canvas.height = container.clientHeight;
      nodes = initNodes(width, height);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      mouseRef.current = {
        x: mouseX,
        y: mouseY,
        active: mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height
      };

      // Determine active stage based on cursor X position
      if (mouseX < width * 0.38) {
        setActiveStage('data');
      } else if (mouseX < width * 0.62) {
        setActiveStage('insight');
      } else {
        setActiveStage('solution');
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let time = 0;
    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;

      // Update Node Physics
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Organic idle drift
        node.baseX += node.vx;
        node.baseY += node.vy;

        // Soft bounce within boundaries
        if (node.baseX < 20 || node.baseX > width - 20) node.vx *= -1;
        if (node.baseY < 20 || node.baseY > height - 20) node.vy *= -1;

        // Proximity push from cursor
        let targetX = node.baseX;
        let targetY = node.baseY;

        if (mouse.active) {
          const dx = node.baseX - mouse.x;
          const dy = node.baseY - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 140;

          if (dist < maxDist) {
            const force = (1 - dist / maxDist) * 35;
            targetX += (dx / dist) * force;
            targetY += (dy / dist) * force;
          }
        }

        // Smooth spring back
        node.x += (targetX - node.x) * 0.08;
        node.y += (targetY - node.y) * 0.08;
      }

      // Draw Connections (Thin Editorial Lines)
      const maxConnDist = Math.min(130, width * 0.2);

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const n1 = nodes[i];
          const n2 = nodes[j];

          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnDist) {
            const alpha = (1 - dist / maxConnDist) * 0.25;

            // Highlight connection if either node is close to mouse
            let isNearMouse = false;
            if (mouse.active) {
              const d1 = Math.hypot(n1.x - mouse.x, n1.y - mouse.y);
              const d2 = Math.hypot(n2.x - mouse.x, n2.y - mouse.y);
              if (d1 < 100 || d2 < 100) {
                isNearMouse = true;
              }
            }

            const isDark = document.documentElement.classList.contains('dark');
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            if (isDark) {
              ctx.strokeStyle = isNearMouse
                ? `rgba(244, 114, 182, ${alpha * 2.2})`
                : `rgba(243, 243, 242, ${alpha * 0.7})`;
            } else {
              ctx.strokeStyle = isNearMouse
                ? `rgba(2, 132, 199, ${alpha * 2.2})`
                : `rgba(15, 30, 54, ${alpha * 0.7})`;
            }
            ctx.lineWidth = isNearMouse ? 1 : 0.6;
            ctx.stroke();
          }
        }
      }

      // Draw Nodes
      const isDark = document.documentElement.classList.contains('dark');
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        let isNear = false;
        if (mouse.active) {
          const d = Math.hypot(node.x - mouse.x, node.y - mouse.y);
          if (d < 110) isNear = true;
        }

        const isSolution = node.stage === 'solution';
        const isInsight = node.stage === 'insight';

        ctx.beginPath();
        ctx.arc(node.x, node.y, isNear ? node.radius * 1.5 : node.radius, 0, Math.PI * 2);

        if (isDark) {
          if (isNear) {
            ctx.fillStyle = '#F472B6';
          } else if (isSolution) {
            ctx.fillStyle = '#FDA4AF';
          } else if (isInsight) {
            ctx.fillStyle = '#C084FC';
          } else {
            ctx.fillStyle = '#777777';
          }
        } else {
          if (isNear) {
            ctx.fillStyle = '#0284C7';
          } else if (isSolution) {
            ctx.fillStyle = '#38BDF8';
          } else if (isInsight) {
            ctx.fillStyle = '#60A5FA';
          } else {
            ctx.fillStyle = '#94A3B8';
          }
        }
        ctx.fill();

        // Subtle outer pulse for prominent nodes
        if (isSolution && i % 4 === 0) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius + Math.sin(time + i) * 3 + 2, 0, Math.PI * 2);
          ctx.strokeStyle = isDark ? 'rgba(244, 114, 182, 0.5)' : 'rgba(2, 132, 199, 0.5)';
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [initNodes]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[280px] sm:h-[340px] md:h-[400px] select-none"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-crosshair"
      />

      {/* Abstract Stage Indicator Ribbon */}
      <div className="absolute bottom-2 left-0 right-0 flex items-center justify-between px-4 text-[10px] font-mono tracking-widest text-[#64748B] dark:text-[#AAA]">
        <div className={`transition-all duration-300 ${activeStage === 'data' ? 'text-[#0284C7] dark:text-[#F472B6] font-bold translate-x-1' : 'opacity-60'}`}>
          01 // DATA STREAM
        </div>
        <div className="h-[1px] w-12 bg-[#BFDBFE]/60 dark:bg-[#333] hidden sm:block" />
        <div className={`transition-all duration-300 ${activeStage === 'insight' ? 'pastel-gradient-text font-bold' : 'opacity-60'}`}>
          02 // PATTERN EXTRACTION
        </div>
        <div className="h-[1px] w-12 bg-[#BFDBFE]/60 dark:bg-[#333] hidden sm:block" />
        <div className={`transition-all duration-300 ${activeStage === 'solution' ? 'text-[#0284C7] dark:text-[#F472B6] font-bold -translate-x-1' : 'opacity-60'}`}>
          03 // ACTIONABLE ENGINE
        </div>
      </div>
    </div>
  );
};
