import React, { useState } from "react";

const NewTodo = props => {
  const [newTodo, setNewTodo] = useState("");
  //  handle New Todo:
  const handleNewTodo = e => {
    e.preventDefault();
    setNewTodo(e.target.value);
  };
  // handle Submit:
  const handleSubmit = e => {
    e.preventDefault();
    // rendering new added todo to todo list: child to parent rendering:
    props.onTodo(newTodo);
  };

  return (
    <div>
      <h6 className="mt-3 mb-1"> Add New Todo:</h6>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 d-flex">
          <input
            name="todo"
            value={newTodo}
            placeholder="Enter New Todo Name"
            type="text"
            className="form-control m-1"
            id="exampleInputPassword1"
            onChange={handleNewTodo}
          />
          <button type="submit" className="btn btn-success m-1">
            Submit
          </button>
        </div>
        {/* <button
          onClick={handleReset}
          type="submit"
          className="btn btn-primary w-100"
        >
          Reset Input
        </button> */}
      </form>
    </div>
  );
};

export default NewTodo;
