import axios, { CreateAxiosDefaults } from 'axios';

import { accessTokenService } from '../services/access-token.service';
import { authService } from '../services/auth.service';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const options: CreateAxiosDefaults = {
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
};

export const client = axios.create(options);

export const clientWithAuth = axios.create(options);

export const setupInterceptorsForClientWithAuth = (onLogout: () => void) => {
  clientWithAuth.interceptors.request.use((config) => {
    const accessToken = accessTokenService.get();

    if (config.headers && accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  });

  clientWithAuth.interceptors.response.use(
    (config) => config,
    async (error) => {
      const originalRequest = error.config;

      console.log(originalRequest);

      if (
        error.response.status === 401 &&
        error.response.data.detail ===
          'Given token not valid for any token type' &&
        !originalRequest._isRetry
      ) {
        originalRequest._isRetry = true;

        try {
          const newAccessToken = (await authService.refreshAccessToken()).data
            .result!.access_token;

          accessTokenService.save(newAccessToken);

          return clientWithAuth.request(originalRequest);
        } catch {
          onLogout();
        }
      }

      throw error;
    },
  );
};
