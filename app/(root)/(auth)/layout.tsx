import { notFound } from 'next/navigation';
// import React from 'react';

// import { AuthBanner } from '@/src/(root)/components/AuthBanner';

const AuthLayout = () =>
  // <div className="root-container grid grid-cols-1 items-center gap-6 xl:grid-cols-12">
  //   <div className="col-span-6 hidden aspect-[1/1.23] xl:block">
  //     <AuthBanner />
  //   </div>

  //   <div className="relative h-full xl:col-span-6 xl:flex xl:flex-col xl:justify-center">
  //     {children}
  //   </div>
  // </div>
  notFound();

export default AuthLayout;
