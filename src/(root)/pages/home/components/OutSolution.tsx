'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';

import { SectionHeader } from './SectionHeader';
import { OUR_SOLUTION_CARDS } from '../lib/OUR_SOLUTION_CARDS';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const OutSolution = () => {
  const solutionContainer = useRef<HTMLElement>(null);
  const solutionCards = useRef<HTMLUListElement>(null);

  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: solutionContainer.current,
          endTrigger: solutionCards.current,
          start: 'top 70%',
          end: 'bottom 70%',
          scrub: true,
        },
      })
      .to(solutionCards.current!.childNodes, {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        ease: 'back.out(2)',
      });
  });

  return (
    <section
      ref={solutionContainer}
      className="root-container"
    >
      <SectionHeader>Our Solution</SectionHeader>

      <ul
        ref={solutionCards}
        className="grid grid-cols-1 gap-6 lg:grid-cols-3"
      >
        {OUR_SOLUTION_CARDS.map((text) => (
          <li
            key={text}
            className="translate-y-16 rounded-3xl border-2 border-foreground p-5 opacity-0"
          >
            <p className="text-[24px] font-semibold leading-[32px] md:text-[30px] md:leading-[36px] lg:text-[36px] lg:leading-[40px]">
              {text}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};
