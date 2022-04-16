import React, { useEffect } from "react";
import useTodoApi from "hooks/services/useTodoApi";
import TodoView from './TodoView';

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

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  return (
    <TodoView todos={todos} />
  );
}