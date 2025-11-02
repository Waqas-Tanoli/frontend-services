'use client';

import React, { useState } from 'react';

import { OTPverification } from '@/src/(root)/pages/sign-up/components/OTPverification';
import { SignupForm } from '@/src/(root)/pages/sign-up/components/SignupForm';

const SignUpPage = () => {
  const [stage, setStage] = useState<'credentials' | 'otp'>('credentials');

  if (stage === 'credentials') {
    return <SignupForm onSuccess={() => setStage('otp')} />;
  }

  return <OTPverification onBackClick={() => setStage('credentials')} />;
};

export default SignUpPage;
