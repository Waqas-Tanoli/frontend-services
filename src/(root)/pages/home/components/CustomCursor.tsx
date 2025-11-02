'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current!;
    const follower = followerRef.current!;
    let mouseX = 0;
    let mouseY = 0;
    let posX = 0;
    let posY = 0;

    const updatePosition = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      posX += (mouseX - posX) * 0.15;
      posY += (mouseY - posY) * 0.15;

      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      follower.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', updatePosition);
    animate();

    const hoverTargets = document.querySelectorAll('a, button, .hoverable');
    hoverTargets.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        cursor.style.transform += ' scale(1.4)';
        follower.style.opacity = '0.5';
      });
      el.addEventListener('mouseleave', () => {
        follower.style.opacity = '0.25';
      });
    });

    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return (
    <>
      {/* Main glowing cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[9999] h-3 w-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 shadow-[0_0_12px_3px_rgba(147,51,234,0.6)] pointer-events-none"
      />
      {/* Smooth follower */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 z-[9998] h-8 w-8 rounded-full bg-gradient-to-r from-indigo-500 to-blue-400 opacity-25 blur-xl pointer-events-none transition-all duration-300"
      />
    </>
  );
}
