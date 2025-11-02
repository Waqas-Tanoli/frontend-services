'use client';

import React from 'react';

import { useProtectManagerPortal } from '@/src/(property_manager)/utils/useProtectManagerPortal';

const PropertyManagerLayout = ({ children }: { children: React.ReactNode }) => {
  useProtectManagerPortal();

  return (
    <div>
      <h1>Property manager layout</h1>
      {children}
    </div>
  );
};

export default PropertyManagerLayout;
