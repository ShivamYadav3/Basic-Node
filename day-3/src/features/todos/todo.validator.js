const validateGetTodoDetails = (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).send({ message: "Please provide todo id" });
    return;
  }
  req.params.id = +id;
  next();
};

module.exports = {
  validateGetTodoDetails,
};
