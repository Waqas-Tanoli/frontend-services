'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const CurveLine = () => {
  const linePathRef = useRef<SVGPathElement>(null);

  useGSAP(() => {
    const problemSolutionLinePathLength = linePathRef.current?.getTotalLength();

    gsap
      .timeline({
        scrollTrigger: {
          trigger: linePathRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
      })
      .to(linePathRef.current, { opacity: 1, duration: 0 })
      .fromTo(
        linePathRef.current,
        {
          strokeDasharray: problemSolutionLinePathLength,
          strokeDashoffset: problemSolutionLinePathLength,
        },
        {
          strokeDashoffset: 0,
        },
      );
  });

  return (
    <div
      className="root-container"
      aria-hidden
    >
      <svg
        viewBox="0 0 640 800"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <g
          strokeWidth="10"
          stroke="#379392"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="matrix(0.7547095802227721,0.6560590289905072,-0.6560590289905072,0.7547095802227721,340.9165459249158,-119.82272136607116)"
        >
          <path
            ref={linePathRef}
            d="M60.5 140.5Q678.5 205.5 320 400Q-69.5 600.5 579.5 659.5 "
            className="opacity-0"
          />
        </g>
      </svg>
    </div>
  );
};
