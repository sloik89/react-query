import React, { useEffect } from "react";

const Message = ({ text, show }) => {
  return <h3 className={`message ${show ? "show" : "hidden"}`}>{text}</h3>;
};

export default Message;
