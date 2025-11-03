'use client'; // ✅ Must stay here

import { ChevronDownIcon, ExternalLink } from 'lucide-react';
import React from 'react';

import { linkFactory } from '@/src/shared/constants/linkFactory';
import { urbanist } from '@/src/shared/fonts';
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  NavLink,
} from '@/src/shared/ui';
import { cn } from '@/src/shared/utils';

export const ProductsDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          Products <ChevronDownIcon />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className={`w-80 ${urbanist.className}`}
        align="end"
      >
        <NavLink href={linkFactory.root.getRiskFormPage()}>
          {({ isActive }) => (
            <DropdownMenuItem
              className={cn(
                'flex justify-between items-center text-2xl [&>svg]:size-5 font-semibold rounded-lg pointer',
                {
                  'bg-primary text-primary-foreground': isActive,
                },
              )}
            >
              Hempstead <ExternalLink />
            </DropdownMenuItem>
          )}
        </NavLink>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
