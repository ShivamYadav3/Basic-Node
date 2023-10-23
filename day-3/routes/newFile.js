export const validateCreatePostPayload = (req, res, next) => {
  const { title, description } = req.body;
  if (!title) {
    res.status(400).send({ message: "please add title" });
    return;
  }
  if (!description) {
    res.status(400).send({ message: "please add description" });
    return;
  }
  next();
};

export const validateIsIdAvailable = (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).send({ message: "please enter the id" });
  }
  next();
};
// module.exports = { validateCreatePostPayload, validateIsIdAvailable };
