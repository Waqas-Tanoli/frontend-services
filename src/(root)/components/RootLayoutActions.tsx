'use client';

import Link from 'next/link';
import React from 'react';

import { linkFactory } from '@/src/shared/constants/linkFactory';
import { useUser } from '@/src/shared/store/user';
import { USER_ROLE } from '@/src/shared/types/User';

import { ProductsDropdown } from './ProductsDropdown';

export const RootLayoutActions = () => {
  const { user, logout } = useUser();

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  if (user) {
    return (
      <div className="flex items-center gap-4">
        <Link
          href={
            user.role === USER_ROLE.TENANT ?
              linkFactory.tenant.getRentPage()
            : linkFactory.manager.getDashboardPage()
          }
          className="bg-white text-blue-900 hover:bg-blue-100 px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
        >
          Dashboard
        </Link>

        <button
          onClick={() => logout()}
          className="border border-white text-white hover:bg-white hover:text-blue-900 px-6 py-2.5 rounded-lg font-semibold transition-all duration-200"
        >
          Log out
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-6">
      <ProductsDropdown />

      <button
        onClick={scrollToContact}
        className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
      >
        Request a demo
      </button>
    </div>
  );
};
