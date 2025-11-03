'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { Card } from '@/src/shared/ui';
import DecryptedText from '@/src/shared/ui/DecryptedText';

const MotionCard = motion(Card);

export const AboutHempstead = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-cyan-50 px-5 py-10">
      {/* AI-themed floating particles background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-10 size-2 animate-pulse rounded-full bg-cyan-400 opacity-60"></div>
        <div className="absolute right-20 top-20 size-1 animate-bounce rounded-full bg-blue-400 opacity-50"></div>
        <div className="absolute bottom-20 left-1/4 size-3 animate-ping rounded-full bg-purple-300 opacity-40"></div>
        <div className="absolute bottom-10 right-1/3 size-2 animate-pulse rounded-full bg-cyan-500 opacity-70"></div>
      </div>

      <motion.h1
        className="mb-10 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-center text-6xl font-bold text-transparent md:text-9xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{
          scale: 1.05,
          textShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
        }}
        transition={{
          duration: 0.5,
          easings: ['easeOut'],
        }}
      >
        <DecryptedText
          text="Project"
          animateOn="view"
          revealDirection="start"
          speed={200}
        />{' '}
        <DecryptedText
          text="Hempstead"
          animateOn="view"
          revealDirection="start"
          speed={200}
        />
      </motion.h1>

      <div className="mx-auto max-w-4xl space-y-5">
        <MotionCard
          className="rounded-xl border-2 border-blue-200 bg-white/80 text-lg font-medium text-gray-800 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-300/50 md:text-xl"
          initial={{
            y: 50,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          whileHover={{ y: -5 }}
          transition={{
            duration: 0.3,
            easings: ['easeOut'],
          }}
        >
          At Liiv, we&apos;re eliminating racial bias and redlining in housing.
        </MotionCard>

        <MotionCard
          className="rounded-xl border-2 border-blue-200 bg-white/80 text-lg font-medium text-gray-800 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-300/50 md:text-xl"
          initial={{
            y: 50,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          whileHover={{ y: -5 }}
          transition={{
            duration: 0.3,
            delay: 0.3 * 1,
            easings: ['easeOut'],
          }}
        >
          Our API powers an unbiased rental application using L1-regularized
          logistic regression and ensemble learning. In our analysis, two
          applicants with identical risk scores—one with a 740+ credit score but
          low income, the other with a 300–579 score but high income—showed the
          same rental risk. This proves that credit scores don&apos;t reflect
          true rental reliability—and too often serve as a proxy for systemic
          exclusion.
        </MotionCard>
      </div>
    </div>
  );
};
