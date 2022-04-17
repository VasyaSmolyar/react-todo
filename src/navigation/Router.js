import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Todo from "pages/Todo";
import Login from "pages/Login";
import { TODOS, LOGIN } from "navigation/CONSTANTS";
import Menu from "components/Menu";

const Router = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path={TODOS} element={<Todo />} />
        <Route path={LOGIN} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;