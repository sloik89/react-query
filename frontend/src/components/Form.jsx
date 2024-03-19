import React, { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import customFetch from "../utilis";
import Message from "./Message";
import { toast } from "react-toastify";
const Form = () => {
  const [textField, setTextField] = useState("");
  const queryClient = useQueryClient();

  const { mutate: createTask, isLoading } = useMutation({
    mutationFn: (text) => customFetch.post("/", { title: text }),
    onError: (err) => {
      console.log(err);
      toast.error(err.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("item added");
      setTextField("");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!textField) {
    //   setMessage(true);
    //   return;
    // }
    const res = createTask(textField);
    console.log(res);
  };

  return (
    <form className="form flex-column" onSubmit={handleSubmit}>
      <h4> taks bud</h4>
      <div className="form-control flex-column">
        <input
          onChange={(e) => setTextField(e.target.value)}
          value={textField}
          className="textField"
          type="text"
        />
        <button disabled={isLoading} className="btn">
          add task
        </button>
      </div>
    </form>
  );
};

export default Form;
