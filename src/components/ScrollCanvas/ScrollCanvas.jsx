import React, { useEffect, useRef } from 'react';
import './ScrollCanvas.css';

const FRAME_COUNT = 50;

const getFramePath = (index) =>
  `/scroling_images/ezgif-frame-${String(index + 1).padStart(3, '0')}.jpg`;

export default function ScrollCanvas() {
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);
  const imagesRef = useRef([]);
  const lastRenderedIndexRef = useRef(-1);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const isReducedMotion = mediaQuery.matches;

    // Preload all 50 authentic frames from /scroling_images/
    const images = [];
    imagesRef.current = images;

    const renderFrame = (index) => {
      if (!canvas || !ctx) return;
      const img = images[index];
      if (img && img.complete && img.naturalWidth !== 0) {
        ctx.drawImage(img, 0, 0, 1280, 720);
        lastRenderedIndexRef.current = index;
      } else {
        // Graceful fallback to nearest loaded frame to prevent any flicker
        for (let offset = 1; offset < FRAME_COUNT; offset++) {
          const prev = index - offset;
          if (prev >= 0 && images[prev]?.complete && images[prev]?.naturalWidth !== 0) {
            ctx.drawImage(images[prev], 0, 0, 1280, 720);
            break;
          }
          const next = index + offset;
          if (next < FRAME_COUNT && images[next]?.complete && images[next]?.naturalWidth !== 0) {
            ctx.drawImage(images[next], 0, 0, 1280, 720);
            break;
          }
        }
      }
    };

    // Preload frames
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        // If this is the initial frame and nothing has rendered yet, render it
        if (i === 0 && lastRenderedIndexRef.current === -1) {
          renderFrame(0);
        }
      };
      images.push(img);
    }

    // Render frame 0 immediately if cached
    if (images[0]?.complete && images[0]?.naturalWidth !== 0) {
      renderFrame(0);
    }

    const updateCanvasOnScroll = () => {
      animFrameRef.current = null;
      const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const isMobile = window.innerWidth <= 768;

      // 1. Frame sequence animation based on scroll depth (0 to 49)
      if (!isReducedMotion) {
        const scrollFraction = Math.max(0, Math.min(1, scrollY / maxScroll));
        const targetFrameIndex = Math.min(FRAME_COUNT - 1, Math.floor(scrollFraction * FRAME_COUNT));

        if (targetFrameIndex !== lastRenderedIndexRef.current) {
          renderFrame(targetFrameIndex);
        }
      }

      // 2. Subtle, controlled parallax distance (10-40px depending on viewport/section)
      if (isReducedMotion) {
        canvas.style.transform = 'translate3d(0, 0, 0)';
        return;
      }

      const maxParallax = isMobile ? 22 : 40;
      let translateY = 0;
      if (scrollY <= 1000) {
        translateY = -(scrollY / 1000) * (isMobile ? 15 : 28);
      } else {
        const remainingProgress = (scrollY - 1000) / Math.max(1, maxScroll - 1000);
        translateY = -((isMobile ? 15 : 28) + remainingProgress * (isMobile ? 7 : 12));
      }

      const clampedY = Math.max(-maxParallax, Math.min(0, translateY));
      canvas.style.transform = `translate3d(0, ${clampedY.toFixed(2)}px, 0)`;
    };

    const onScroll = () => {
      if (!animFrameRef.current) {
        animFrameRef.current = requestAnimationFrame(updateCanvasOnScroll);
      }
    };

    const onResize = () => {
      if (!animFrameRef.current) {
        animFrameRef.current = requestAnimationFrame(updateCanvasOnScroll);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });
    updateCanvasOnScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="canvas-fixed-viewport" aria-hidden="true">
      {/* 50-Frame HTML5 Canvas connected to scroll with hardware-accelerated parallax */}
      <canvas
        ref={canvasRef}
        width={1280}
        height={720}
        className="cyber-scroll-canvas"
      />
      {/* Ambient vignette gradient - preserves image clarity and contrast */}
      <div className="canvas-vignette-overlay" />
    </div>
  );
}
