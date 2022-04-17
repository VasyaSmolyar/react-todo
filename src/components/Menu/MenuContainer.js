import React, { useState } from 'react';
import MenuView from './MenuView';
import { TODOS } from 'navigation/CONSTANTS';
import JWTContext from 'context/jwt';

export const MenuContainer = () => {
  const [ item, setItem ] = useState(TODOS);

  return (
    <JWTContext.Consumer>
      {({isAuth, logout}) => (
        <MenuView 
          item={item} 
          setItem={setItem}
          isAuth={isAuth}
          logout={logout} 
        />
      )}
    </JWTContext.Consumer>
  );
}