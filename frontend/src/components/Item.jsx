import React from "react";
import { useQuery } from "@tanstack/react-query";
import customFetch from "../utilis";
const Item = ({ id, title, isDone }) => {
  const handleCheckbox = (id) => {
    console.log(id);
  };
  return (
    <div className="list-item flex-space">
      <input
        onChange={() => handleCheckbox(id)}
        checked={isDone}
        type="checkbox"
        name=""
        id=""
      />
      <p className="task-desc">{title}</p>
      <button className="btn">delete</button>
    </div>
  );
};

export default Item;
