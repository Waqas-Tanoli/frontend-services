import { LOCAL_STORAGE } from '../constants/LOCAL_STORAGE';

const getAccessToken = () => {
  const accessToken = localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN);
  return accessToken || null;
};

const saveAccessToken = (token: string) => {
  localStorage.setItem(LOCAL_STORAGE.ACCESS_TOKEN, token);
};

const removeAccessToken = () => {
  localStorage.removeItem(LOCAL_STORAGE.ACCESS_TOKEN);
};

export const accessTokenService = {
  get: getAccessToken,
  save: saveAccessToken,
  remove: removeAccessToken,
};
