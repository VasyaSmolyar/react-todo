import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import { TODOS, LOGIN } from 'navigation/CONSTANTS';

const MenuView = ({
  item,
  setItem
}) => {
  return (
    <Menu>
      <Menu.Item active={item === TODOS}>
        <Link to={TODOS} onClick={() => setItem(TODOS)}>Home</Link>
      </Menu.Item>
      <Menu.Item active={item === LOGIN}>
        <Link to={LOGIN} onClick={() => setItem(LOGIN)}>Login</Link>
      </Menu.Item>
    </Menu>
  )
}

export default MenuView;