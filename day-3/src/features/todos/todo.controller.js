const { isObjEmpty } = require("../../utilities/json");

let todos = [];

const getTodos = (req, res) => {
  try {
    res.send(todos);
    return;
  } catch (err) {
    res.send({
      message: "We ar unable to take your request. Please try later",
    });
  }
};

const getTodoDetails = (req, res) => {
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

module.exports = {
  getTodoDetails,
  getTodos,
};
