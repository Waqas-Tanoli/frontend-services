'use client';

import Link from 'next/link';
import React from 'react';

import { linkFactory } from '@/src/shared/constants/linkFactory';
import { useUser } from '@/src/shared/store/user';
import { USER_ROLE } from '@/src/shared/types/User';
import { ProductsDropdown } from '@/src/components/ProductsDropdown';

export const RootLayoutActions = () => {
  const { user, logout } = useUser();

  if (user) {
    return (
      <div className="flex items-center gap-4">
        <Link
          href={
            user.role === USER_ROLE.TENANT ?
              linkFactory.tenant.getRentPage()
            : linkFactory.manager.getDashboardPage()
          }
          className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 shadow-sm hover:shadow-md border border-blue-200"
        >
          Dashboard
        </Link>

        <button
          onClick={() => logout()}
          className="border border-slate-300 text-slate-700 hover:bg-slate-100 px-6 py-2.5 rounded-lg font-semibold transition-all duration-200"
        >
          Log out
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-6">
      <ProductsDropdown />

      <Link
        href={`${linkFactory.root.getHomePage()}#request-demo`}
        className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
      >
        Request a demo
      </Link>
    </div>
  );
};
