import React, { ReactNode } from 'react';

import { cn } from '@/src/shared/utils';

import { SectionHeader } from './SectionHeader';

interface SectionProps {
  title: string;
  description?: string;
  children: ReactNode;
  classNames?: {
    root?: string;
    title?: string;
    description?: string;
  };
}

export const Section = ({
  title,
  description,
  children,
  classNames,
}: SectionProps) => {
  return (
    <section className={cn('root-container py-10', classNames?.root)}>
      <div className="mb-12">
        <SectionHeader
          className={cn(
            {
              'mb-4': description,
            },
            classNames?.title,
          )}
        >
          {title}
        </SectionHeader>

        <p
          className={cn(
            'mx-auto max-w-md text-center text-base font-medium text-muted md:text-xl',
            classNames?.description,
          )}
        >
          {description}
        </p>
      </div>

      {children}
    </section>
  );
};
