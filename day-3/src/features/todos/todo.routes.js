// const express = require("express");
import express from "express";

const todoRouter = express.Router();

// const { getTodos, getTodoDetails } = require("./todo.controller");
import { getTodos, getTodoDetails } from "./todo.controller.js";
// const { validateGetTodoDetails } = require("./todo.validator");
import { validateGetTodoDetails } from "./todo.validator.js";

todoRouter.get("/", getTodos);
todoRouter.get("/:id", validateGetTodoDetails, getTodoDetails);

// module.exports = todoRouter;
export default todoRouter;
