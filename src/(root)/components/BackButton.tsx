'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { HiOutlineChevronLeft } from 'react-icons/hi';

import { Button } from '@/src/shared/ui';

export const BackButton = () => {
  const router = useRouter();

  return (
    <Button
      variant="ghost"
      onClick={() => router.back()}
      disabled={!(history.length > 2)}
    >
      <HiOutlineChevronLeft aria-hidden />
      Back
    </Button>
  );
};
