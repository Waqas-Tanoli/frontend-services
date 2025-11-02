import { cva, VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/src/shared/utils/cn';

const inputVariants = cva(
  'peer relative flex h-12 items-center justify-between gap-2.5 rounded-full border px-4 py-3.5 transition-colors focus-within:border-primary hover:border-primary [&_svg]:size-6 [&_svg]:stroke-muted',
  {
    variants: {
      variant: {
        default:
          'border-input has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50 has-[:disabled]:hover:border-input',
        success: 'border-success',
        destructive: 'border-destructive',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

interface InputProps
  extends Omit<React.ComponentProps<'input'>, 'className'>,
    VariantProps<typeof inputVariants> {
  classNames?: {
    wrapper?: string;
    input?: string;
  };
  styles?: {
    wrapper?: React.CSSProperties;
    input?: React.CSSProperties;
  };
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ variant, classNames, leftSlot, rightSlot, ...props }, ref) => (
    <div
      className={inputVariants({
        variant: props.disabled ? 'default' : variant,
        className: classNames?.wrapper,
      })}
    >
      <div className="flex flex-1 items-center gap-2.5">
        {leftSlot}

        <input
          className={cn(
            'flex w-full bg-transparent text-base transition-colors file:border-0 file:bg-transparent file:text-base file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed',
            classNames?.input,
          )}
          ref={ref}
          {...props}
        />
      </div>

      {rightSlot}
    </div>
  ),
);

Input.displayName = 'Input';

export { Input };
