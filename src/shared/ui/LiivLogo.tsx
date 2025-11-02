import Image, { ImageProps } from 'next/image';
import React from 'react';

import LiivLogoImg from '../../../public/images/logo.png';
import { cn } from '../utils';

type Props = Omit<ImageProps, 'src' | 'alt'> & {
  alt?: string;
};

export const LiivLogo = ({ alt, className, ...props }: Props) => (
  <Image
    src={LiivLogoImg}
    alt={alt || 'Liiv logo'}
    priority
    className={cn('aspect-[300/178] w-9 md:w-12', className)}
    sizes="(max-width: 768px) 36px, 48px"
    {...props}
  />
);
