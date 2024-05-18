const jwt = require("jsonwebtoken");
var token = jwt.sign({ name: "shivam", city: "jabalpur" }, "shhhhh");
var decoded = jwt.verify(token, "shhhhh");
console.log(token);
console.log(decoded);
