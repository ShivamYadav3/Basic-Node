// const { isObjEmpty } = require("../../utilities/json");
import { isObjEmpty } from "../../utilities/json.js";
import TodoModel from "./todo.model.js";

let todos = [];

export const addTodo = async (req, res) => {
  const { body } = req;
  const todo = new TodoModel(body);
  const response = await todo.save();
  res.send({ message: "Todo Saved successfully", data: todo });
};

export const getTodos = async (req, res) => {
  try {
    const todos = await TodoModel.find();
    res.send(todos);
    return;
  } catch (err) {
    res.send({
      message: "We ar unable to take your request. Please try later",
    });
  }
};

export const getTodoDetails = (req, res) => {
  try {
    const { id } = req.params;
    console.log({ id });
    const todoItem = todos.find((item) => item.id === id);
    if (isObjEmpty(todoItem)) {
      res.send({ data: {}, message: "No todo found" });
      return;
    }
    res.send({ data: todoItem, message: "Todo details found" });
  } catch (err) {
    res.send({
      message: "We ar unable to take your request. Please try later",
    });
  }
};

// export { getTodoDetails, getTodos };
