import React, { useState } from "react";

const Form = () => {
  const [textField, setTextField] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
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
        <button className="btn">add task</button>
      </div>
    </form>
  );
};

export default Form;
