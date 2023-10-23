// var express = require("express");
import express from "express";

var indexRouter = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.get("/", function (req, res, next) {
//   res.send({ message: "welcome to home shivam" });
// });

const isUserAllowed = (req, res, next) => {
  const { name } = req.query;
  if (!name) {
    res.status(401).send({ message: "malik naam dalo" });
    return;
  }
  if (name !== "shivam") {
    res.status(401).send({ message: `chala ja ${name} bhootni ke` });
    return;
  }
  next();
};

indexRouter.get("/", isUserAllowed, (req, res, next) => {
  const { name } = req.query;
  res.send({ message: `welcome ${name} yadav ji` });
});

// module.exports = router;
export default indexRouter;
