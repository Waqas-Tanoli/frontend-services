import React from 'react';
import { HiOutlineChevronRight } from 'react-icons/hi';

import { IconButton } from '@/src/shared/ui';
import { cn } from '@/src/shared/utils';

interface Props {
  isSidebarExpanded: boolean;
  onClick: () => void;
}

export const ToggleExpandedButton = ({ isSidebarExpanded, onClick }: Props) => (
  <IconButton
    onClick={onClick}
    size="xs"
    aria-label={isSidebarExpanded ? 'close the sidebar' : 'open the sidebar'}
    className="absolute right-[-41px] top-1/2 -translate-y-1/2"
  >
    <HiOutlineChevronRight
      className={cn(
        'transition-transform',
        isSidebarExpanded ? 'rotate-0' : 'rotate-180',
      )}
    />
  </IconButton>
);
