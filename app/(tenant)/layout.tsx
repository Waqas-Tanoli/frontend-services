'use client';

import { notFound } from 'next/navigation';

// const TenantLayout = ({ children }: { children: React.ReactNode }) => {
//   useProtectTenantPortal();
//   const { isWidthGreaterThan } = useDeviceWidth();

//   if (isWidthGreaterThan('lg')) {
//     return <DesktopLayout>{children}</DesktopLayout>;
//   }

//   return <MobileLayout>{children}</MobileLayout>;
// };

const TenantLayout = () => {
  return notFound();
};

export default TenantLayout;
