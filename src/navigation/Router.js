import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Todo from "pages/Todo";
import { TODOS, LOGIN } from "navigation/CONSTANTS";
import Menu from "components/Menu";

const Router = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path={TODOS} element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;