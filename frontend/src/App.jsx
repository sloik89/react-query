import { useState, useEffect } from "react";
import Form from "./components/Form";
import "./App.css";
import customFetch from "./utilis";
function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await customFetch.get("/");

        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <main>
      <h1>works</h1>
      <Form />
    </main>
  );
}

export default App;
