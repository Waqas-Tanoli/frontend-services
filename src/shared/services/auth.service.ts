import { ResponseData } from '../types/ResponseData';
import { User } from '../types/User';
import { client, clientWithAuth } from '../utils/client';

const getUser = () =>
  clientWithAuth.get<ResponseData<{ user: User }>>('/user/info/');

export interface LoginParams {
  email: string;
  password: string;
}

const login = (loginData: LoginParams) =>
  client.post<ResponseData<{ user: User; access_token: string }>>(
    '/user/login/',
    loginData,
  );

const logout = () => clientWithAuth.post('/user/logout');

const refreshAccessToken = () =>
  client.post<ResponseData<{ user: User; access_token: string }>>(
    '/user/refresh/',
  );

export const authService = {
  getUser,
  login,
  refreshAccessToken,
  logout,
};
