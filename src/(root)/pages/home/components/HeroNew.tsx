'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Play, ArrowRight } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const BACKGROUND_VIDEOS = [
  'https://res.cloudinary.com/da6uuvrpe/video/upload/v1762103782/vecteezy_cloud-computing-brain-ai-technology-data-transfer-bits_24148821_1_okuthq.mp4',
  'https://res.cloudinary.com/da6uuvrpe/video/upload/v1762099790/vecteezy_soft-warm-bokeh-lights-floating-and-light-rays-background_2016011_s6eo7p.mp4',
  'https://res.cloudinary.com/da6uuvrpe/video/upload/v1762099790/vecteezy_sparkling-particles-abstract-strings-magic-design-loop_1625063_fkck4r.mp4',
];

export const HeroNew = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize video refs array
  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, BACKGROUND_VIDEOS.length);
  }, []);

  // Proper ref callback function
  const setVideoRef = useCallback(
    (index: number) => (el: HTMLVideoElement | null) => {
      videoRefs.current[index] = el;
    },
    [],
  );

  // Preload videos
  useEffect(() => {
    const loadVideo = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const video = document.createElement('video');
        video.src = src;
        video.preload = 'auto';
        video.oncanplaythrough = () => resolve();
        video.onerror = () => reject();
      });
    };

    const preloadVideos = async () => {
      try {
        await Promise.all(BACKGROUND_VIDEOS.map((src) => loadVideo(src)));
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading videos:', error);
        setTimeout(() => setIsLoading(false), 3000);
      }
    };

    preloadVideos();
  }, []);

  // Fast video rotation - every 3 seconds
  useEffect(() => {
    if (isLoading) return;

    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % BACKGROUND_VIDEOS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isLoading]);

  useGSAP(() => {
    if (isLoading) return;

    const ctx = gsap.context(() => {
      gsap.to(contentRef.current, {
        opacity: 0,
        y: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isLoading]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      className="hero-section relative h-screen bg-black text-white overflow-hidden"
    >
      {/* Multiple Background Videos */}
      <div className="absolute inset-0 z-0">
        {BACKGROUND_VIDEOS.map((videoSrc, index) => (
          <video
            key={index}
            ref={setVideoRef(index)}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              index === currentVideoIndex ? 'opacity-100' : 'opacity-0'
            } ${isLoading ? 'hidden' : ''}`}
          >
            <source
              src={videoSrc}
              type="video/mp4"
            />
          </video>
        ))}

        {/* Show loading only if videos aren't ready */}
        {isLoading && (
          <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
            <div className="text-white">Loading videos...</div>
          </div>
        )}

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 h-full flex items-center justify-center"
      >
        <div className="text-center max-w-4xl mx-auto px-4">
          {/* Apply custom fonts */}
          <h1 className="hero-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block">AI-POWERED</span>
            <span className="block text-gray-200">PLATFORMS</span>
          </h1>

          <p className="hero-subheading text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Automating Critical WorkFlows for the Future of Public Sector
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('products')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2 interactive"
            >
              <Play className="h-5 w-5" />
              <span>VIEW PLATFORMS</span>
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center gap-2 interactive"
            >
              <span> REQUEST DEMO</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroNew;
