export const getService = (req, res) => {
  try {
    res.send({ message: "welcome to type module" });
  } catch (err) {
    res.send({ message: "error in service" });
  }
};
