import React from "react";

const Todo = ({ task, removeTodo }) => (
  <li className="todo-list">
    <span>{task}</span>
    <button className="del-btn" onClick={() => removeTodo(task)}>
      x
    </button>
  </li>
);

export default Todo;
