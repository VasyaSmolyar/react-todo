import { useState, useCallback } from 'react';
import { getTodosQuery } from 'services/todoServices';

export default function useTodoApi() {
  const [ page, setPage ] = useState(1);
  const [ count, setCount ] = useState(0);
  const [ isPrevious, setPrevious ] = useState(false);
  const [ isNext, setNext ] = useState(false);
  const [ todos, setTodos ] = useState([]);

  const getTodos = useCallback(() => {
    getTodosQuery(page)
      .then((res) => {
        setCount(res.count);
        setTodos(res.results);
        setPrevious(!!res.previous);
        setNext(!!res.next);
      })
  }, [page]);

  return {
    todos,
    getTodos,
    page,
    setPage,
    count,
    isPrevious,
    isNext
  }
}