import { Red_Hat_Display, Urbanist } from 'next/font/google';

export const redHatDisplay = Red_Hat_Display({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-red-hat-display',
});

export const urbanist = Urbanist({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});
