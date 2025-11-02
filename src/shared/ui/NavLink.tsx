'use client';

import Link, { type LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import React, { CSSProperties } from 'react';

interface RenderProps {
  isActive: boolean;
}

interface Props extends LinkProps {
  className?: string | ((renderProps: RenderProps) => string);
  style?: CSSProperties | ((renderProps: RenderProps) => CSSProperties);
  children: React.ReactNode | ((renderProps: RenderProps) => React.ReactNode);
}

export const NavLink = ({ className, style, children, ...props }: Props) => {
  const pathname = usePathname();

  // const isActive = props.href.toString().startsWith(pathname);
  const isActive = pathname.startsWith(props.href.toString());

  return (
    <Link
      className={
        typeof className === 'function' ? className({ isActive }) : className
      }
      style={typeof style === 'function' ? style({ isActive }) : style}
      {...props}
    >
      {typeof children === 'function' ? children({ isActive }) : children}
    </Link>
  );
};
