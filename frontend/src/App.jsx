import { useState, useEffect } from "react";
import Form from "./components/Form";
import Items from "./components/Items";
import Message from "./components/Message";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import customFetch from "./utilis";
function App() {
  return (
    <main>
      <h1>works</h1>
      <Form />

      <Items />
      <ToastContainer />
    </main>
  );
}

export default App;
