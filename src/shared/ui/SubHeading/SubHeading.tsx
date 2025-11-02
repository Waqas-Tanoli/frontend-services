import React from 'react';

import { cn } from '@/src/shared/utils';

type SubHeadingProps = React.ParamHTMLAttributes<HTMLParagraphElement>;

export const SubHeading = React.forwardRef<
  HTMLParagraphElement,
  SubHeadingProps
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm md:text-base', className)}
    {...props}
  />
));

SubHeading.displayName = 'SubHeading';
