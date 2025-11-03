import { Metadata } from 'next';
import React from 'react';

import { AboutHempstead } from './components/AboutHempstead';
import { FormHeader } from './components/FormHeader';
import { RiskForm } from './components/RiskForm';

export const metadata: Metadata = {
  title: 'Project Hempstead',
  description:
    'Explore how our advanced AI algorithm assesses tenant risk by analyzing answers from a simple form, providing a reliable risk score for better decision-making.',
};

export default function RiskFormPage() {
  return (
    <div className="root-container grid grid-cols-1 gap-6 xl:grid-cols-[1fr_1px_1fr] xl:gap-10">
      <div>
        <AboutHempstead />
      </div>

      <div
        className="bg-border"
        aria-hidden
      />

      <div className="relative my-10 self-start xl:flex xl:flex-col xl:justify-center">
        <FormHeader />

        <RiskForm />
      </div>
    </div>
  );
}
