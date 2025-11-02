import { cn } from '@/src/shared/utils';

interface SectionHeaderProps {
  className?: string;
  children: React.ReactNode;
}

export const SectionHeader = ({ className, children }: SectionHeaderProps) => (
  <h2
    className={cn(
      'text-center text-3xl font-bold leading-none md:text-4xl lg:text-5xl',
      className,
    )}
  >
    {children}
  </h2>
);
