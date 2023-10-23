import express from "express";

const serviceRouter = express.Router();

serviceRouter.get("/", (req, res) => {
  res.send({ message: "welcome to type module" });
});

export { serviceRouter };
