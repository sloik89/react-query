import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import customFetch from "../utilis";
import { toast } from "react-toastify";
const Item = ({ id, title, isDone }) => {
  const queryClient = useQueryClient();

  const { mutate: deleteTask, isLoading } = useMutation({
    mutationFn: (id) => customFetch.delete(`/${id}`),
    onError: (err) => {
      console.log(err);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      console.log(data);
      toast.success("item removed");
    },
  });
  const { mutate: editTask, isLoading: loading } = useMutation({
    mutationFn: ({ id, isDone }) => customFetch.patch(`/${id}`, { isDone }),
    onError: (err) => {
      console.log(err);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      console.log(data);
      toast.success("item updated");
    },
  });
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
