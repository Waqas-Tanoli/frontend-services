import { notFound } from 'next/navigation';
import { useEffect } from 'react';

import { useUser } from '@/src/shared/store/user';
import { USER_ROLE } from '@/src/shared/types/User';

export const useProtectTenantPortal = () => {
  const { user, loading } = useUser();

  useEffect(() => {
    if (!loading && (!user || user.role !== USER_ROLE.TENANT)) {
      notFound();
    }
  }, [loading, user]);
};
