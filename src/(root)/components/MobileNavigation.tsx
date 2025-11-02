'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';

import { linkFactory } from '@/src/shared/constants/linkFactory';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  IconButton,
} from '@/src/shared/ui';

export const MobileNavigation = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <DropdownMenu
      open={isOpened}
      onOpenChange={setIsOpened}
    >
      <DropdownMenuTrigger
        asChild
        className="block md:hidden"
      >
        <IconButton
          aria-label={`${isOpened ? 'close' : 'open'} navigation menu`}
          size="sm"
        >
          <HiOutlineMenu />
        </IconButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <Link href={`${linkFactory.root.getHomePage()}#request-demo`}>
            Request a demo
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Products</DropdownMenuLabel>
        <DropdownMenuItem>
          <Link href={linkFactory.root.getRiskFormPage()}>Hempstead</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
