/* eslint-disable tailwindcss/no-custom-classname */
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/src/shared/utils/cn';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-full border text-sm font-bold transition-colors focus-within:outline-none disabled:cursor-not-allowed disabled:opacity-60 md:text-base [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'border-primary bg-primary text-primary-foreground focus-within:border-primary-8 hover:border-primary-4 hover:bg-primary-4 disabled:hover:border-primary disabled:hover:bg-primary',
        destructive:
          'border-destructive bg-destructive text-destructive-foreground hover:border-destructive/5 hover:bg-destructive/90 disabled:hover:bg-destructive',
        outline:
          'border-border bg-background hover:bg-border disabled:hover:bg-background',
        secondary:
          'border-secondary bg-secondary text-secondary-foreground focus-within:border-secondary-3 hover:border-secondary-3 hover:bg-secondary-3 disabled:hover:border-secondary disabled:hover:bg-secondary',
        link: 'h-auto rounded-none border-transparent px-0 font-normal text-info underline underline-offset-4',
        ghost:
          'h-auto rounded-none border-transparent px-0 font-normal text-primary',
      },
      size: {
        default: 'h-12 px-5',
        sm: 'h-10 px-4',
        xs: 'h-9 px-3.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  full?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'button',
      className,
      variant = 'default',
      size = 'default',
      asChild = false,
      full = false,
      disabled = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        ref={ref}
        type={type}
        disabled={disabled}
        className={buttonVariants({
          variant,
          size,
          className: cn(full ? 'w-full' : 'w-max', className),
        })}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
