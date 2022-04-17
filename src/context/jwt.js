import React from 'react';

const JWTContext = React.createContext({
  token: {
    access: null,
    refresh: null
  },
  isAuth: () => false,
  login: () => {},
  logout: () => {}
});

export default JWTContext;