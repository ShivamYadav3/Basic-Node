const express = require("express");
const todoRouter = express.Router();

const { getTodos, getTodoDetails } = require("./todo.controller");
const { validateGetTodoDetails } = require("./todo.validator");

todoRouter.get("/", getTodos);
todoRouter.get("/:id", validateGetTodoDetails, getTodoDetails);

module.exports.todoRouter = todoRouter;
