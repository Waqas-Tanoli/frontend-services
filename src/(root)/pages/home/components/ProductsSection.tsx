'use client';
import React, { useState, useRef, useEffect, useCallback } from 'react';

type Platform = {
  id: string;
  name: string;
  headline: string;
  videoUrl?: string;
  visualDescription?: string; // Added missing property
};

const PLATFORMS: Platform[] = [
  {
    id: 'docflow',
    name: 'DocFlow',
    headline:
      'Automate document workflow, from initial data parsing to final compliance approvals',
    videoUrl:
      'https://res.cloudinary.com/da6uuvrpe/video/upload/v1762099594/1_sqapze.mp4',
    visualDescription: 'Document Automation Platform', // Added description
  },
  {
    id: 'onelearn',
    name: 'OneLearn',
    headline:
      'Achieve AI-driven educational excellence, from the classroom to the entire district.',
    videoUrl:
      'https://res.cloudinary.com/da6uuvrpe/video/upload/v1762099731/2_uzpmmh.mp4',
    visualDescription: 'Education Intelligence Platform', // Added description
  },
  {
    id: 'connect',
    name: 'Connect',
    headline:
      'Autonomously unify all giving data to power predictive donor campaigns.',
    videoUrl:
      'https://res.cloudinary.com/da6uuvrpe/video/upload/v1762099739/3_kw5b9a.mp4',
    visualDescription: 'Donor Management Platform', // Added description
  },
  {
    id: 'donorhub',
    name: 'DonorHub',
    headline:
      'Use Stripe data to turn everyday giving into guaranteed funding.',
    videoUrl:
      'https://res.cloudinary.com/da6uuvrpe/video/upload/v1762099732/4_pedkip.mp4',
    visualDescription: 'Payment Analytics Platform', // Added description
  },
  {
    id: 'cursor',
    name: 'Cursor',
    headline: 'Optimize every team schedule for maximum mission effectiveness.',
    videoUrl:
      'https://res.cloudinary.com/da6uuvrpe/video/upload/v1762099729/5_dozfjm.mp4',
    visualDescription: 'Team Optimization Platform', // Added description
  },
];

export const ProductsSection: React.FC = () => {
  const [hoveredPlatform, setHoveredPlatform] = useState<Platform | null>(null);
  const [videoLoaded, setVideoLoaded] = useState<{ [key: string]: boolean }>(
    {},
  );
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});
  const [isMobile, setIsMobile] = useState(false);
  const [animated, setAnimated] = useState(false);
  const [visibleLines, setVisibleLines] = useState<boolean[]>([false, false]);

  const lineRefs = [
    useRef<HTMLSpanElement | null>(null),
    useRef<HTMLSpanElement | null>(null),
  ];

  // Fixed ref callback function
  const setVideoRef = useCallback(
    (platformId: string) => (el: HTMLVideoElement | null) => {
      videoRefs.current[platformId] = el;
    },
    [],
  );

  // Check for mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Intersection Observer for line-by-line scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setVisibleLines((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
          } else {
            // Disappear when out of view
            setVisibleLines((prev) => {
              const updated = [...prev];
              updated[index] = false;
              return updated;
            });
          }
        });
      },
      { threshold: 0.4 }, // Trigger when 40% visible
    );

    lineRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  // Handle video load
  const handleVideoLoad = (platformId: string) => {
    setVideoLoaded((prev) => ({ ...prev, [platformId]: true }));
  };

  // Fade in other section
  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="platforms"
      className="w-full bg-white min-h-screen py-16 lg:py-32"
      style={{
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <div className="max-w-[1800px] mx-auto px-4 lg:px-8">
        {/* 🔥 Scroll-triggered Animated Text */}
        <div className="mb-28">
          <p
            className={`text-[32px] lg:text-[64px] text-center max-w-6xl mx-auto leading-[1.1] tracking-[-0.03em] 
            text-gray-900 font-light`}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
            }}
          >
            <span
              ref={lineRefs[0]}
              className={`block transition-all duration-1000 ${
                visibleLines[0] ?
                  'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
              }`}
            >
              Our software automates AI-driven workflows across the public
              sector, from nonprofits serving your local city to the school
              districts educating our future.
            </span>
            <span
              ref={lineRefs[1]}
              className={`block transition-all duration-1000 delay-300 ${
                visibleLines[1] ?
                  'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
              }`}
            >
              from nonprofits serving your local city to the school districts
              educating our future.
            </span>
          </p>
        </div>

        {/* PLATFORMS HEADING */}
        <div
          className={`mb-16 lg:mb-20 transition-all duration-700 delay-300 ${
            animated ?
              'opacity-100 transform translate-y-0'
            : 'opacity-0 transform translate-y-10'
          }`}
        >
          <h1
            className="text-[32px] lg:text-[58px] font-semibold leading-[0.9] tracking-[-0.02em] text-black text-center"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            PLATFORMS FOR CRITICAL MISSIONS
          </h1>
          <p
            className="text-[15px] lg:text-[17px] text-gray-600 text-center mt-6 max-w-2xl mx-auto tracking-normal font-light"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            One integrated suite for every mission-critical workflow.
          </p>
        </div>

        {/* PLATFORM GRID */}
        <div className="space-y-3 lg:space-y-6">
          {PLATFORMS.map((platform, index) => (
            <div
              key={platform.id}
              className={`relative group transition-all duration-500 ease-out ${
                animated ?
                  'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: animated ? `${index * 100}ms` : '0ms',
              }}
              onMouseEnter={() => !isMobile && setHoveredPlatform(platform)}
              onMouseLeave={() => !isMobile && setHoveredPlatform(null)}
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 py-6 lg:py-12 border-b border-gray-200 cursor-pointer transition-all duration-300 ${
                  hoveredPlatform?.id === platform.id && !isMobile ?
                    'bg-gray-50 -mx-4 lg:-mx-8 px-4 lg:px-8 scale-[1.01]'
                  : 'hover:bg-gray-50 -mx-4 lg:-mx-8 px-4 lg:px-8'
                }`}
              >
                {/* LEFT SIDE */}
                <div className="lg:col-span-3">
                  <div className="space-y-1 lg:space-y-2 max-w-[200px] transition-all duration-250 group-hover:translate-x-1">
                    <div
                      className="text-[14px] lg:text-[15px] text-gray-600 font-light leading-relaxed tracking-wide transition-colors duration-200 group-hover:text-gray-800"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {platform.headline}
                    </div>
                  </div>
                </div>

                {/* MIDDLE VIDEO */}
                <div className="lg:col-span-4 flex justify-center items-center">
                  <div
                    className={`w-full max-w-[400px] h-[200px] transition-all duration-300 ease-out ${
                      !isMobile && hoveredPlatform?.id === platform.id ?
                        'opacity-100 transform scale-100'
                      : 'opacity-0 transform scale-95'
                    } ${isMobile ? 'hidden' : 'block'}`}
                  >
                    {!isMobile && hoveredPlatform?.id === platform.id && (
                      <div className="bg-black w-full h-full flex items-center justify-center relative overflow-hidden rounded-lg shadow-xl">
                        <div
                          className={`w-full h-full transition-opacity duration-300 ${
                            videoLoaded[platform.id] ?
                              'opacity-100'
                            : 'opacity-0'
                          }`}
                        >
                          <video
                            ref={setVideoRef(platform.id)}
                            className="w-full h-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                            onLoadedData={() => handleVideoLoad(platform.id)}
                            preload="auto"
                          >
                            <source
                              src={platform.videoUrl}
                              type="video/mp4"
                            />
                          </video>
                        </div>
                        {!videoLoaded[platform.id] && (
                          <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                            <div className="text-white text-sm animate-pulse">
                              Loading...
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* RIGHT SIDE */}
                <div
                  className={`${isMobile ? 'col-span-full' : 'lg:col-span-5'}`}
                >
                  <div
                    className={`flex flex-col ${
                      isMobile ? 'items-start' : 'items-end lg:items-start'
                    } h-full justify-center`}
                  >
                    <h2
                      className={`${
                        isMobile ? 'text-[36px]' : 'text-[42px] lg:text-[76px]'
                      } font-semibold leading-[0.8] lg:leading-[0.7] tracking-[-0.02em] text-black ${
                        isMobile ? 'text-left' : 'text-right lg:text-left'
                      } transition-all duration-300 group-hover:translate-x-1 group-hover:text-gray-800`}
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {platform.name}
                    </h2>
                    <div
                      className={`text-[11px] lg:text-[13px] text-gray-500 font-normal mt-2 ${
                        isMobile ? 'text-left' : 'text-right lg:text-left'
                      } transition-all duration-300 group-hover:translate-x-1 group-hover:text-gray-700`}
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {platform.visualDescription}{' '}
                      {/* Now this property exists */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </div>
  );
};

export default ProductsSection;
