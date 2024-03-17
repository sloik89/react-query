import express from "express";
import cors from "cors";
import morgan from "morgan";
import { nanoid } from "nanoid";
const app = express();
let taskList = [
  { id: nanoid(), title: "walk the dog", isDone: false },
  { id: nanoid(), title: "wash dishes", isDone: false },
  { id: nanoid(), title: "drink coffe", isDone: false },
  { id: nanoid(), title: "take a nap", isDone: true },
];
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.get("/", (req, res) => {
  res.send("<h1> Hello from server </h1>");
});
app.get("/api/tasks", (req, res) => {
  res.json({ taskList });
});
app.post("/api/tasks", (req, res) => {
  const { title } = req.body;
  if (!title) {
    res.status(400).json({ msg: "please provide title" });
    return;
  }
  const newTask = { id: nanoid(), title, isDone: false };
  taskList = [...taskList, newTask];

  res.json({ task: newTask });
});
app.patch("/api/tasks/:id", (req, res) => {
  const { id } = req.params;
  const { isDone } = req.body;
  taskList = taskList.map((task) => {
    if (task.id === id) {
      return { ...task, isDone };
    }
    return task;
  });
  res.json({ msg: "taks updated" });
});
app.delete("/api/tasks/:id", (req, res) => {
  const { id } = req.params;
  taskList = taskList.filter((task) => task.id !== id);
  res.json({ msg: "task removed" });
});
app.listen(5000, () => {
  console.log("server working");
});
