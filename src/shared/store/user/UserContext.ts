'use client';

import { createContext } from 'react';

import { LoginParams } from '../../services/auth.service';
import { User } from '../../types/User';

export interface IUserContext {
  user: User | null;
  loading: boolean;
  login: (loginData: LoginParams) => void;
  logout: () => void;
}

export const UserContext = createContext<IUserContext>({
  user: null,
  loading: true,
  login: () => {},
  logout: () => {},
});
