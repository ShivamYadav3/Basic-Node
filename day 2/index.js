const express = require("express");
const app = express();
const port = 3000;
const products = require("./products.json");

app.get("/", (req, res) => {
  res.send("Hello Homepage! with node mon");
});

app.get("/products", (req, res) => {
  const query = req.query;
  console.log(query);
  res.send(products);
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find((item) => item.id === +id);
  res.send(product);
});

app.get("/categories", (req, res) => {
  res.send("Hello Categories! jhiur");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// const express = require("express");
// var cors = require("cors");
// const app = express();
// const port = 3000;
// const products = require("./products.json");

// app.use(cors());

// app.get("/", (req, res) => {
//   res.send("Hello Homepage.....Yash!");
// });

// app.get("/products", (req, res) => {
//   const query = req.query;
//   console.log(query);
//   res.send(products);
// });

// app.get("/products/:productId", (req, res) => {
//   const { productId } = req.params;
//   const product = products.find((item) => item.id === +productId);
//   res.send(product);
// });

// app.get("/categories", (req, res) => {
//   res.send("Hello Categories!");
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
