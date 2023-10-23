// // var createError = require("http-errors");
import createHttpError from "http-errors";
// // var express = require("express");
import express from "express";
import path from "path";
// // var path = require("path");
// // var cookieParser = require("cookie-parser");
// // var logger = require("morgan");
import cookieParser from "cookie-parser";
import logger from "morgan";
import { fileURLToPath } from "url";
import { dirname } from "path";

// // var indexRouter = require("./routes/index");
import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js";
// // var usersRouter = require("./routes/users");
// // let todoRouter = require("./src/features/todos/todo.routes");
import todoRouter from "./src/features/todos/todo.routes.js";
import { serviceRouter } from "./src/features/service/service.routes.js";

var app = express();

// // view engine setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/todo", todoRouter);
app.use("/service", serviceRouter);

// // catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createHttpError(404));
});

// // error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

export default app;
