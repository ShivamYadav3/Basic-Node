const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/products", (req, res) => {
  const query = req.query;
  console.log(query);
  res.send("hello products");
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  res.send("product id " + id);
});

app.listen(port, () => {
  console.log("server started ", port);
});
