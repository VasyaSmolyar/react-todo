import React, { useState } from 'react';
import MenuView from './MenuView';
import { TODOS } from 'navigation/CONSTANTS';

export const MenuContainer = () => {
  const [ item, setItem ] = useState(TODOS);

  return <MenuView item={item} setItem={setItem} />
}