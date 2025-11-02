'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { Card, Heading } from '@/src/shared/ui';

const MotionCard = motion(Card);

export const FormHeader = () => {
  return (
    <MotionCard
      className="mb-5 m-10 border-2 border-blue-200 bg-white/90 backdrop-blur-sm text-gray-800 shadow-lg rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-300/50 hover:scale-105 hover:border-blue-400"
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
      }}
    >
      <Heading
        as="h2"
        className="mb-5 text-3xl font-luxury font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent md:text-4xl transition-all duration-300 hover:text-shadow-glow"
      >
        Using Machine Learning to Eliminate Modern-Day Redlining in
        Neighborhoods.
      </Heading>

      <p className="mb-2 text-base text-gray-700">
        <strong className="text-cyan-600 transition-colors duration-300 hover:text-cyan-800">Modern-day redlining still exists—just in new forms.</strong>{' '}
        Traditional credit scores often exclude or penalize women and
        individuals of color, reinforcing systemic barriers in housing.
        We&apos;ve launched and tested a Machine Learning-powered rental
        application that flips that model—and we&apos;re now gathering more
        renter data to further improve it.
      </p>

      <p className="text-base text-gray-700">
        <strong className="text-cyan-600 transition-colors duration-300 hover:text-cyan-800">This form is anonymous</strong> and helps us continue building a
        fairer, bias-free rental process for everyone.
      </p>
    </MotionCard>
  );
};