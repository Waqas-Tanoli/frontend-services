'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { MobileNavigation } from '@/src/(root)/components/MobileNavigation';
import { linkFactory } from '@/src/shared/constants/linkFactory';
import { urbanist } from '@/src/shared/fonts';
import { LiivLogo } from '@/src/shared/ui';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const [inHero, setInHero] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const [cursorColor, setCursorColor] = useState('#1967d2');

  useEffect(() => setIsClient(true), []);

  // ✅ Detect if hero section is visible and update cursor color
  useEffect(() => {
    const hero = document.querySelector('.hero-section');
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inHeroSection = entry.isIntersecting;
        setInHero(inHeroSection);
        setCursorColor(inHeroSection ? '#fff' : '#1967d2');
      },
      { threshold: 0.2 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  // ✅ Cursor setup
  useEffect(() => {
    if (!isClient) return;

    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    const moveCursor = (e: MouseEvent) => {
      cursor.style.top = `${e.clientY}px`;
      cursor.style.left = `${e.clientX}px`;
    };

    const handleHover = () => cursor.classList.add('hovered');
    const handleUnhover = () => cursor.classList.remove('hovered');

    window.addEventListener('mousemove', moveCursor);

    // Add hover effects to interactive elements
    const addHoverEffects = () => {
      document.querySelectorAll('a, button, .interactive').forEach((el) => {
        el.addEventListener('mouseenter', handleHover);
        el.addEventListener('mouseleave', handleUnhover);
      });
    };

    // Initial setup
    addHoverEffects();

    // Update periodically for dynamic content
    const interval = setInterval(addHoverEffects, 1000);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      clearInterval(interval);
      document.querySelectorAll('a, button, .interactive').forEach((el) => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleUnhover);
      });
      if (document.body.contains(cursor)) {
        document.body.removeChild(cursor);
      }
    };
  }, [isClient]);

  // ✅ Update cursor color when inHero changes
  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor') as HTMLElement;
    if (cursor) {
      cursor.style.background = cursorColor;
    }
  }, [cursorColor]);

  return (
    <div className="relative box-border grid min-h-screen grid-cols-1 grid-rows-[auto_1fr] overflow-x-hidden">
      {/* ✅ Global Styles */}
      <style
        jsx
        global
      >{`
        /* Import Modern Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

        /* Hide default cursor */
        @media (min-width: 768px) {
          * {
            cursor: none !important;
          }
        }

        /* Custom Cursor */
        .custom-cursor {
          position: fixed;
          top: 0;
          left: 0;
          width: 8px;
          height: 8px;
          background: #1967d2;
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: 9999;
          transition:
            transform 0.08s ease,
            background 0.1s linear;
        }

        .custom-cursor.hovered {
          transform: translate(-50%, -50%) scale(1.7);
          width: 16px;
          height: 16px;
          background: #fff !important;
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
        }

        @media (max-width: 768px), (hover: none) {
          .custom-cursor {
            display: none !important;
          }
          * {
            cursor: auto !important;
          }
        }

        /* Button hover animation */
        .demo-btn {
          position: relative;
          overflow: hidden;
          transition: all 0.15s ease-in-out;
        }

        .demo-btn span {
          position: relative;
          z-index: 10;
        }

        .demo-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          transform: translateX(-100%) skewX(-20deg);
          transition: transform 0.4s ease;
        }

        .demo-btn:hover::after {
          transform: translateX(100%) skewX(-20deg);
        }

        /* Apply fonts to specific elements */
        .hero-heading {
          font-family: 'Chakra Petch', sans-serif;
          font-weight: 700;
        }

        .hero-subheading {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 400;
        }

        .nav-item {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 500;
        }
      `}</style>

      {/* ✅ Navbar */}
      <header
        className="fixed top-0 z-50 w-full transition-colors duration-100"
        style={{
          background: 'transparent',
          color: inHero ? '#fff' : '#000',
        }}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <Link
            href={linkFactory.root.getHomePage()}
            className="flex cursor-pointer items-center gap-2"
          >
            <div
              style={{
                filter:
                  inHero ?
                    'brightness(0) invert(1)'
                  : 'brightness(0) invert(0)',
              }}
            >
              <LiivLogo />
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {['Platforms', 'Careers', 'About', 'Solutions'].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className={`font-['Space_Grotesk'] text-sm font-medium ${
                  inHero ?
                    'text-white hover:text-blue-300'
                  : 'text-black hover:text-[#1967D2]'
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Button */}
          <div className="hidden md:block">
            <Link
              href="/ContactSection"
              className={`rounded-lg border-2 px-6 py-3 text-sm font-semibold shadow-md transition-all duration-150 hover:scale-105 ${
                inHero ?
                  'border-white text-white hover:bg-white hover:text-black'
                : 'border-black text-black hover:bg-black hover:text-white'
              }`}
            >
              <span>GET STARTED</span>
            </Link>
          </div>

          <MobileNavigation />
        </div>
      </header>

      {/* ✅ Main Content */}
      <main className={urbanist.className}>{children}</main>
    </div>
  );
};

export default RootLayout;
