import React from "react";

const Todo = ({ todo }) => {
  return (
    <div>
      <button className="m-2 btn btn-outline-danger mb-3">
        {todo}
      </button>
    </div>
  );
};

export default Todo;
