const http = require("http");
const url = require("url");
http
  .createServer((req, res) => {
    const query = url.parse(req.url, true).query;
    console.log(query, req.url, res);
    res.write({ name: "shivam" });
    res.end();
  })
  .listen(8080);
