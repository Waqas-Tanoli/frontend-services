import React, { ReactNode } from 'react';

import { LiivLogo } from '@/src/shared/ui';

const MobileLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="box-border grid min-h-screen grid-cols-1 grid-rows-[auto_1fr] px-6 pb-10 pt-2">
      <header className="mb-4 flex items-center justify-between py-2">
        <LiivLogo />
      </header>

      <main>{children}</main>
    </div>
  );
};

export default MobileLayout;
