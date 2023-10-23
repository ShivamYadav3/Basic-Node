// const express = require("express");
import express from "express";

const router = express.Router();
import { validateCreatePostPayload, validateIsIdAvailable } from "./newFile";

router.get("/", (req, res, next) => {
  res.send({ message: "welcome to todo" });
});

router.post("/", validateCreatePostPayload, (req, res, next) => {
  res.send({ message: "welcome to TO Do Post method" });
});

router.get("/:id", validateIsIdAvailable, (req, res, next) => {
  const { id } = req.params;
  res.send({ message: "welcome to todo detailed route", key: id });
});

router.delete("/", (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).send({ message: "bad request id is missing for delete" });
    return;
  }
  res.send({ message: "welcome to To Do Delete method", key: id });
});

router.put("/", validateIsIdAvailable, (req, res, next) => {
  const { id } = req.params;

  res.send({ message: "welcome to To Do Put method", key: id });
});

router.patch("/:id", (req, res, next) => {
  const { id } = req.params;

  res.send({ message: "welcome to To Do patch method", key: id });
});

// module.exports = router;
export default router;
