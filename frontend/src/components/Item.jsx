import React, { useState } from "react";
import { useEditTask, useDeleteTask } from "./reactQueryCustomHooks";

const Item = ({ id, title, isDone }) => {
  const { editTask } = useEditTask();
  const { deleteTask } = useDeleteTask();
  const handleCheckbox = (e, id) => {
    editTask({ id, isDone: !isDone });
    console.log(e.target.checked);
  };
  const hanldeDelete = (id) => {
    console.log(id);
    deleteTask(id);
  };
  return (
    <div className="list-item flex-space">
      <input
        onChange={(e) => handleCheckbox(e, id)}
        checked={isDone}
        type="checkbox"
        name=""
        id=""
      />
      <p className="task-desc">{title}</p>
      <button onClick={() => hanldeDelete(id)} className="btn">
        delete
      </button>
    </div>
  );
};

export default Item;
