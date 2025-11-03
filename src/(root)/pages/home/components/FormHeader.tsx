'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { Card, Heading } from '@/src/shared/ui';

const MotionCard = motion(Card);

export const FormHeader = () => {
  return (
    <MotionCard
      className="mb-8 border-0 bg-gradient-to-br from-slate-50/80 to-blue-50/60 backdrop-blur-sm shadow-2xl rounded-3xl p-8"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Heading
        as="h2"
        className="mb-6 font-serif text-3xl font-light leading-tight text-slate-800"
      >
        Advancing Housing Equity Through Machine Learning Innovation
      </Heading>

      <div className="space-y-4 text-slate-700">
        <p className="font-serif text-lg leading-relaxed">
          <strong className="font-semibold text-slate-800">
            Modern systemic barriers persist in contemporary forms.
          </strong>{' '}
          Traditional assessment models frequently disadvantage women and
          communities of color, perpetuating housing inequality. Our machine
          learning platform redefines this paradigm.
        </p>

        <p className="font-serif text-lg leading-relaxed">
          <strong className="font-semibold text-slate-800">
            Complete anonymity ensures privacy
          </strong>{' '}
          while contributing to our mission of creating equitable, bias-free
          housing solutions for all communities.
        </p>
      </div>
    </MotionCard>
  );
};
