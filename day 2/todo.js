const express = require("express");
const app = express();
const port = 7070;
const todo = require("./todo.json");

app.use(express.json());

app.get("/", (req, res) => {
  res.send(todo);
});
app.listen(port, () => {
  console.log("server started... ", port);
});

app.post("/", (req, res) => {
  const data = { ...req.body };
  console.log(data);
  todo.push(data);
  res.send(data);
});

app.delete("/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const index = todo.findIndex((item) => {
    return item.id == id;
  });
  if (index > 0) {
    todo.splice(index, 1);
  }
  res.send(id);
});
