import React, { useState } from "react";
import Todos from "./Todos";
import NewTodo from "./NewTodo";

const dummyTodos = ["React", "Redux", "Ui/Ux", "JavaScript"];

const Home = () => {
  const [todos, setTodos] = useState(dummyTodos);
  const handleNewTodoMethod = newTodo => {
    setTodos([...todos, newTodo]);
  };
  return (
    <div>
      <h6 className="mb-2">All Your Todos:</h6>
      <Todos todos={todos} />
      <NewTodo onTodo={handleNewTodoMethod} />
    </div>
  );
};

export default Home;
