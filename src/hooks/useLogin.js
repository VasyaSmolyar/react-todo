import { useState } from 'react';

export const useLogin = () => {
  const [token, setToken] = useState({
    access: null,
    refresh: null
  });

  return {
    token,
    isAuth: token.access && token.refresh,
    login: setToken,
    logout: () => setToken({
      access: null,
      refresh: null
    })
  }
};