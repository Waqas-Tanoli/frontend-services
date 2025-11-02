'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { Card } from '@/src/shared/ui';
import DecryptedText from '@/src/shared/ui/DecryptedText';

const MotionCard = motion(Card);

export const AboutHempstead = () => {
  return (
    <div className="relative bg-gradient-to-br from-white via-blue-50 to-cyan-50 py-10 px-5 overflow-hidden">
      {/* AI-themed floating particles background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-blue-400 rounded-full animate-bounce opacity-50"></div>
        <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-purple-300 rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-10 right-1/3 w-2 h-2 bg-cyan-500 rounded-full animate-pulse opacity-70"></div>
      </div>

      <motion.h1
        className="mb-10 text-center text-6xl font-luxury font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent md:text-9xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05, textShadow: '0 0 20px rgba(0, 255, 255, 0.5)' }}
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

      <div className="space-y-5 max-w-4xl mx-auto">
        <MotionCard
          className="border-2 border-blue-200 bg-white/80 backdrop-blur-sm text-gray-800 text-lg font-medium md:text-xl shadow-lg rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-300/50 hover:scale-105 hover:border-cyan-400"
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
          At Liiv, we’re eliminating racial bias and redlining in housing.
        </MotionCard>

        <MotionCard
          className="border-2 border-blue-200 bg-white/80 backdrop-blur-sm text-gray-800 text-lg font-medium md:text-xl shadow-lg rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-300/50 hover:scale-105 hover:border-cyan-400"
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
          same rental risk. This proves that credit scores don’t reflect true
          rental reliability—and too often serve as a proxy for systemic
          exclusion.
        </MotionCard>
      </div>
    </div>
  );
};