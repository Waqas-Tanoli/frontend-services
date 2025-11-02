/* eslint-disable tailwindcss/no-custom-classname */
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import React, { ReactNode } from 'react';

const iconButtonVariants = cva(
  'flex items-center justify-center whitespace-nowrap rounded-full border text-sm font-bold transition-colors focus-within:outline-none  disabled:cursor-not-allowed disabled:opacity-60 [&_svg]:pointer-events-none [&_svg]:shrink-0',
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
      },
      size: {
        default: 'size-12 [&_svg]:size-7',
        sm: 'size-10 [&_svg]:size-6',
        xs: 'size-9 [&_svg]:size-5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  'asChild'?: boolean;
  'aria-label': string;
  'children': ReactNode;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      type = 'button',
      className,
      variant = 'default',
      size = 'default',
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        ref={ref}
        type={type}
        className={iconButtonVariants({
          variant,
          size,
          className,
        })}
        {...props}
      />
    );
  },
);
IconButton.displayName = 'Button';

export { IconButton, iconButtonVariants };
