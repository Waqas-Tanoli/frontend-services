import React from 'react';

import { cn } from '@/src/shared/utils';

interface HeadingProps extends React.ButtonHTMLAttributes<HTMLHeadingElement> {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const FONT_SIZES: Record<HeadingProps['as'], `text-${string}`> = {
  h1: 'text-3xl md:text-5xl',
  h2: 'text-2xl md:text-4xl',
  h3: 'text-3xl',
  h4: 'text-2xl',
  h5: 'text-xl',
  h6: 'text-lg',
};

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as, className, children, ...props }, ref) => {
    const Comp = as;

    return (
      <Comp
        ref={ref}
        className={cn(`${FONT_SIZES[as]} font-bold`, className)}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);

Heading.displayName = 'Heading';
