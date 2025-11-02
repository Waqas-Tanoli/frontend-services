'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

import { SectionHeader } from './SectionHeader';
import { METRICS_CARDS } from '../lib/METRICS_CARDS';

const PROBLEM_TEXT =
  "Housing authorities struggle with maintenance backlogs, rising overtime costs, and delays due to outdated processes — leaving families without safe, stable housing, which affects children's education, health, and security.";

export const ProblemMetrics = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const problemParagraphRef = useRef<HTMLParagraphElement>(null);
  const metricsRef = useRef<HTMLElement>(null);
  const cardsListRef = useRef<HTMLUListElement>(null);

  useGSAP(() => {
    // Container Background Animation
    gsap.to(containerRef.current, {
      backgroundColor: '#EBF2EF',
      scrollTrigger: {
        trigger: containerRef.current,
        end: 'top 40%',
        scrub: true,
      },
    });

    // Problem Text
    gsap
      .timeline({
        scrollTrigger: {
          trigger: problemParagraphRef.current,
          start: 'top 50%',
          end: 'bottom 50%',
          scrub: 0.5,
        },
      })
      .to(problemParagraphRef.current!.childNodes, {
        opacity: 1,
        stagger: 0.01,
      });

    // Cards Animations
    gsap
      .timeline({
        scrollTrigger: {
          trigger: metricsRef.current,
          endTrigger: cardsListRef.current,
          start: 'top 70%',
          end: 'bottom 70%',
          scrub: true,
        },
      })
      .to(cardsListRef.current!.childNodes, {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        ease: 'back.out(2)',
      });
  });

  return (
    <div
      ref={containerRef}
      className="bg-background py-20"
    >
      <section className="root-container mb-20">
        <SectionHeader>The Problem</SectionHeader>

        <p
          ref={problemParagraphRef}
          className="mx-auto max-w-[900px] text-[24px] font-semibold leading-[32px] md:text-[30px] md:leading-[36px] lg:text-[36px] lg:leading-[40px]"
        >
          {PROBLEM_TEXT.split('').map((letter, i) => (
            <span
              key={i}
              className="opacity-5"
            >
              {letter}
            </span>
          ))}
        </p>
      </section>

      <section
        ref={metricsRef}
        className="root-container flex items-center"
      >
        <ul
          ref={cardsListRef}
          className="grid grid-cols-1 gap-6 lg:grid-cols-3"
        >
          {METRICS_CARDS.map((card, i) => (
            <li
              key={i}
              className="translate-y-16 rounded-3xl border-2 border-foreground p-5 opacity-0"
            >
              <p className="text-[24px] font-semibold leading-[32px] md:text-[30px] md:leading-[36px] lg:text-[36px] lg:leading-[40px]">
                {card}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
