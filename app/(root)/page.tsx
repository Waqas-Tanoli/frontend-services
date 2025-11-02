'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { useEffect } from 'react';

import { HeroNew } from '@/src/(root)/pages/home/components/HeroNew';
import { TrustedBySection } from '@/src/(root)/pages/home/components/TrustedBySection';
import { SuccessStories } from '@/src/(root)/pages/home/components/SuccessStories';
import { ProductsSection } from '@/src/(root)/pages/home/components/ProductsSection';
import { AboutSection } from '@/src/(root)/pages/home/components/AboutSection';
import { ContactSection } from '@/src/(root)/pages/home/components/ContactSection';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
  }, []);

  return (
    <div>
      <HeroNew />
      <TrustedBySection />
      <SuccessStories />
      <ProductsSection />
      <AboutSection />
      <ContactSection />
      
    </div>
  );
}
