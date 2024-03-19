import React, { useEffect, useState } from "react";

const Message = ({ text }) => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setShow(false);
      }, 2000);
    }
  }, show);
  return <h3 className={`message ${show ? "show" : "hidden"}`}>{text}</h3>;
};

export default Message;
