'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { Card } from '@/src/shared/ui';
import DecryptedText from '@/src/shared/ui/DecryptedText';

const MotionCard = motion(Card);

export const AboutHempstead = () => {
  return (
    <div className="relative bg-gradient-to-br from-slate-50 to-blue-50/30 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <motion.h1
          className="mb-16 text-center font-serif text-6xl font-light tracking-tight text-slate-800 md:text-8xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
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
          </span>
        </motion.h1>

        <div className="mx-auto max-w-4xl space-y-8">
          <MotionCard
            className="rounded-3xl border-0 bg-white/80 p-8 font-serif text-xl leading-relaxed text-slate-700 shadow-xl backdrop-blur-sm"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="text-2xl font-light text-slate-800">At Liiv,</span>{' '}
            we&apos;re pioneering the elimination of racial bias and modern
            redlining in housing through advanced AI solutions.
          </MotionCard>

          <MotionCard
            className="rounded-3xl border-0 bg-gradient-to-br from-blue-50 to-purple-50/50 p-8 font-serif text-xl leading-relaxed text-slate-700 shadow-xl backdrop-blur-sm"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          >
            Our proprietary API leverages L1-regularized logistic regression and
            ensemble learning to power an unbiased rental application platform.
            Our analysis reveals that applicants with identical risk
            profiles—regardless of traditional credit metrics—demonstrate
            equivalent rental reliability, challenging systemic barriers in
            housing access.
          </MotionCard>
        </div>
      </div>
    </div>
  );
};
