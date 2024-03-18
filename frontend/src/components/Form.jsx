import React, { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import customFetch from "../utilis";
import Message from "./Message";
const Form = () => {
  const [textField, setTextField] = useState("");
  const [message, setMessage] = useState({ error: false, msg: "" });
  const { mutate: createTask, isLoading } = useMutation({
    mutationFn: (text) => customFetch.post("/", { title: text }),
    onError: (err) => {
      console.log(err);
      setMessage({
        ...message,
        error: true,
        msg: err.message || "unknown error",
      });
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
  useEffect(() => {
    if (message.error) {
      setTimeout(() => {
        setMessage({ ...message, error: false });
      }, 2000);
    }
  }, [message]);
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
        {message.error && <Message text={message.msg} show={message.error} />}
      </div>
    </form>
  );
};

export default Form;
