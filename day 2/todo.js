const express = require("express");
const app = express();
const port = 7070;

app.get("/", (req, res) => {
  res.send("hello");
});
app.listen(port);
