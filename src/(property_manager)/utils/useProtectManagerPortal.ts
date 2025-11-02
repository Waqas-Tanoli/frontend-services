import { notFound } from 'next/navigation';

import { useUser } from '@/src/shared/store/user';
import { USER_ROLE } from '@/src/shared/types/User';

export const useProtectManagerPortal = () => {
  const { user } = useUser();

  if (!user || user.role !== USER_ROLE.PROPERTY_MANAGER) {
    notFound();
  }
};
