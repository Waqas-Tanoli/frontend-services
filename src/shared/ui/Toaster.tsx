'use client';

import {
  HiOutlineExclamation,
  HiOutlineInformationCircle,
  HiOutlineXCircle,
  HiOutlineBadgeCheck,
} from 'react-icons/hi';
import { Toaster as Sonner, toast } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => (
  <Sonner
    theme="light"
    icons={{
      warning: <HiOutlineExclamation className="size-full text-warning" />,
      info: <HiOutlineInformationCircle className="size-full text-info" />,
      error: <HiOutlineXCircle className="size-full text-destructive" />,
      success: <HiOutlineBadgeCheck className="size-full text-success" />,
    }}
    toastOptions={{
      classNames: {
        toast: 'border border-border bg-background rounded-3xl',
        description: 'text-muted-foreground',
        actionButton: 'bg-primary text-primary-foreground',
        cancelButton: 'bg-muted text-muted-foreground',
        icon: 'size-6 m-0',
        error: 'border-destructive',
        success: 'border-success',
        info: 'border-info',
        warning: 'border-warning',
      },
    }}
    {...props}
  />
);

export { Toaster, toast };
