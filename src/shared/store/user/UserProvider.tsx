'use client';

import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';

import { UserContext } from './UserContext';
import { linkFactory } from '../../constants/linkFactory';
import { accessTokenService } from '../../services/access-token.service';
import { authService, LoginParams } from '../../services/auth.service';
import { ErrorResponse } from '../../types/ResponseData';
import { User, USER_ROLE } from '../../types/User';
import { toast } from '../../ui';
import { setupInterceptorsForClientWithAuth } from '../../utils/client';

interface Props {
  children: React.ReactNode;
}

export const UserProvider = ({ children }: Props) => {
  const { push } = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const login = useCallback((loginData: LoginParams) => {
    setLoading(true);

    authService
      .login(loginData)
      .then((res) => {
        const data = res.data.result;

        const accessToken = data?.access_token || '';
        const user = data?.user || null;

        accessTokenService.save(accessToken);

        setUser(user);

        if (user?.role === USER_ROLE.TENANT) {
          push(linkFactory.tenant.getRentPage());
        }

        if (user?.role === USER_ROLE.PROPERTY_MANAGER) {
          push(linkFactory.manager.getDashboardPage());
        }
      })
      .catch((error: AxiosError<ErrorResponse>) => {
        error.response?.data.errors.forEach((errorMessage) =>
          toast.error('Something went wrong!', {
            description: errorMessage,
          }),
        );
      })
      .finally(() => setLoading(false));
  }, []);

  const logout = useCallback(() => {
    setLoading(true);

    authService
      .logout()
      .then(() => {
        // Remove access token from local storage
        accessTokenService.remove();

        // Remove user data
        setUser(null);

        // Redirect to home page
        push(linkFactory.root.getHomePage());
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setupInterceptorsForClientWithAuth(logout);

    const accessToken = accessTokenService.get();

    if (accessToken) {
      authService
        .getUser()
        .then((res) => setUser(res.data.result?.user || null));
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
