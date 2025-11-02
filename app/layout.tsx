import type { Metadata } from 'next';
import React from 'react';

import './globals.css';
import { redHatDisplay } from '@/src/shared/fonts';
// import { UserProvider } from '@/src/shared/store/user';
import { Toaster } from '@/src/shared/ui';

export const metadata: Metadata = {
  title: 'Liiv - Simplify Your Living',
  description:
    'Our ML/AI automates tasks like rent collection and tenant messaging removing administrative burdens. Section 8 voucher tracking reduces vacant unit downtime.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${redHatDisplay.variable} antialiased`}
    >
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
