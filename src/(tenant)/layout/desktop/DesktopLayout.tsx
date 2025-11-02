'use client';

import React, { ReactNode, useState } from 'react';

import { LiivLogo } from '@/src/shared/ui';
import { cn } from '@/src/shared/utils';

import { Header } from './Header';
import { Navigation } from './Navigation';
import { ToggleExpandedButton } from './ToggleExpandedButton';

export const DesktopLayout = ({ children }: { children: ReactNode }) => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  return (
    <div className="grid min-h-screen grid-cols-[auto_1fr] grid-rows-[auto_1fr]">
      <aside
        className={cn(
          'row-span-full border-r border-border transition-[width]',
          isSidebarExpanded ? 'w-64' : 'w-28',
        )}
      >
        <div className="fixed grid h-screen w-[inherit] grid-cols-1 grid-rows-[auto_1fr_auto] gap-y-8 p-6">
          <div className="relative">
            <LiivLogo />

            <ToggleExpandedButton
              isSidebarExpanded={isSidebarExpanded}
              onClick={() => setIsSidebarExpanded((current) => !current)}
            />
          </div>

          <Navigation isSidebarExpanded={isSidebarExpanded} />
        </div>
      </aside>

      <Header />

      <main className="col-start-2 p-8 pb-20">{children}</main>
    </div>
  );
};
