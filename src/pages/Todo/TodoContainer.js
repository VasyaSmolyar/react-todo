import React, { useState, useEffect, useContext } from "react";
import useTodoApi from "hooks/services/useTodoApi";
import TodoView from './TodoView';
import JWTContext from "context/jwt";

export function TodoContainer() {
  const {
    todos,
    getTodos,
    page,
    setPage,
    count,
    isPrevious,
    isNext
  } = useTodoApi();

  const [taskEdit, setTaskEdit] = useState(null);

  const { 
    isAuth
  } = useContext(JWTContext); 

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  const pagesCount = Math.ceil(count / 3);
  const pageIndexes = [...Array(pagesCount).keys()].map((_, i) => i + 1);

  return (
    <TodoView 
      todos={todos}
      getTodos={getTodos} 
      page={page} 
      pageIndexes={pageIndexes} 
      setPage={setPage} 
      isPrevious={isPrevious} 
      isNext={isNext}
      isAuth={isAuth}
      taskEdit={taskEdit}
      setTaskEdit={setTaskEdit} 
    />
  );
}