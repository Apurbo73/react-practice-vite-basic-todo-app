import React from "react";
import Todo from "./Todo";

const Todos = ({ todos }) => {
  return (
    <div className="d-flex flex-wrap">
      {todos.map((todo, index) => <Todo key={index} todo={todo} />)}
    </div>
  );
};

export default Todos;
