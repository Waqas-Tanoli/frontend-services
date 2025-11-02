'use client';

import React from 'react';
import {
  HiOutlineSearch,
  HiOutlineBell,
  HiOutlineChevronDown,
} from 'react-icons/hi';

import { useUser } from '@/src/shared/store/user';
import { IconButton, Input } from '@/src/shared/ui';

export const Header = () => {
  const { user } = useUser();

  return (
    <header className="col-start-2 flex h-24 items-center justify-end border-b border-slate-200 bg-white/80 backdrop-blur-md px-6">
      <div className="flex items-center gap-4">
        <Input
          placeholder="Search for"
          rightSlot={<HiOutlineSearch className="text-slate-600" />}
          classNames={{
            input: 'border-slate-200 focus:border-blue-500',
          }}
        />

        <IconButton
          aria-label="open notifications"
          variant="outline"
          className="border-slate-200 text-slate-600 hover:bg-slate-100"
        >
          <HiOutlineBell />
        </IconButton>

        <button
          type="button"
          className="flex h-12 items-center gap-2 rounded-full bg-slate-100 hover:bg-slate-200 p-1.5 pr-4 transition-colors duration-200 border border-slate-200"
        >
          <div className="flex size-9 items-center justify-center rounded-full bg-blue-500 text-white text-lg font-semibold">
            {user?.first_name.at(0)?.toUpperCase()}
          </div>

          <span className="text-lg font-semibold text-slate-700">{`${user?.first_name} ${user?.last_name}`}</span>

          <HiOutlineChevronDown className="size-5 text-slate-600" />
        </button>
      </div>
    </header>
  );
};
