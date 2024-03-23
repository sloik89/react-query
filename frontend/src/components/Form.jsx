import React, { useState, useEffect } from "react";
import { useCreateTask } from "./reactQueryCustomHooks";
const Form = () => {
  const [textField, setTextField] = useState("");
  const { createTask, isLoading } = useCreateTask();
  const handleSubmit = (e) => {
    e.preventDefault();

    createTask(textField, {
      onSuccess: () => {
        setTextField("");
      },
    });
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
