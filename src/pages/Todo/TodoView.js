import React from "react";

const TodoView = ({
  todos
}) => {
  const list = todos.map((task) => (
    <li key={task.id}>{task.username}</li>  
  ));

  return (
    <ul>
      {list}
    </ul>
  )
}

export default TodoView;