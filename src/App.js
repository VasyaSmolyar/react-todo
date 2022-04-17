import React from 'react';
import Router from 'navigation/Router';
import JWTContext from 'context/jwt';
import { useLogin } from 'hooks/useLogin';

function App() {
  const jwt = useLogin();

  return (
    <JWTContext.Provider value={jwt}>
      <Router />
    </JWTContext.Provider>
  );
}

export default App;
