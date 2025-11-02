import React from 'react';

import { NavLink } from '@/src/shared/ui';
import { cn } from '@/src/shared/utils';

import { NAVIGATION } from '../../utils/navigation';

interface Props {
  isSidebarExpanded: boolean;
}

export const Navigation = ({ isSidebarExpanded }: Props) => {
  return (
    <nav>
      {NAVIGATION.map((group) => (
        <div
          key={group.title}
          className="mb-4"
        >
          <p className="mb-3 text-sm font-semibold uppercase text-muted">
            {group.title}
          </p>

          <ul className="space-y-2">
            {group.items.map((item) => (
              <li
                key={item.link}
                // className={cn(
                //   'flex h-[52px] items-center gap-2 rounded-lg bg-accent/30 px-4 transition-[width]',
                //   {
                //     'w-[52px]': !isSidebarExpanded,
                //   },
                // )}
              >
                <NavLink
                  href={item.link}
                  className={({ isActive }) =>
                    cn(
                      'flex h-[52px] items-center gap-2 rounded-lg px-4 transition-[width]',
                      {
                        'w-[52px]': !isSidebarExpanded,
                        'bg-accent/30': isActive,
                      },
                    )
                  }
                >
                  <item.icon className="size-5 shrink-0" />

                  <span
                    className={cn('text-base font-semibold', {
                      'opacity-0': !isSidebarExpanded,
                    })}
                  >
                    {item.text}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
};
