import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import { TODOS, LOGIN } from 'navigation/CONSTANTS';

const MenuView = ({
  item,
  setItem,
  isAuth,
  logout
}) => {
  return (
    <Menu>
      <Menu.Item active={(item === TODOS) || isAuth}>
        <Link to={TODOS} onClick={() => setItem(TODOS)}>Home</Link>
      </Menu.Item>
      { !isAuth && 
        <Menu.Item active={item === LOGIN}>
          <Link to={LOGIN} onClick={() => setItem(LOGIN)}>Login</Link>
        </Menu.Item>
      }
      { isAuth &&
        <Menu.Item>
          <Link to={TODOS} onClick={() => {
            setItem(TODOS);
            logout();
          }}>Logout</Link>
        </Menu.Item>
      }
    </Menu>
  )
}

export default MenuView;