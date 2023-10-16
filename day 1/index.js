// const http = require("http");
// const url = require("url");

// //create a server object:
// http
//   .createServer((req, res) => {
//     var query = url.parse(req.url, true).query;
//     console.log("Query: ", query);
//     res.write("Hello NodeJS"); //write a response to the client
//     res.end(); //end the response
//   })
//   .listen(7800); //the server object listens on port 8080

// const http = require("http");
// const url = require("url");
// const PORT = 7800;

// //create a server object:
// http
//   .createServer((req, res) => {
//     var query = url.parse(req.url, true).query;
//     console.log("Query: ", query);
//     res.write("Hello NodeJS"); //write a response to the client
//     res.end(); //end the response
//   })
//   .listen(7800, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
//   }); //the server object listens on port 8080

//   const http = require('http');
//   const port = 3000; // Change this to your desired port number

//   const server = http.createServer((req, res) => {
//     if (req.method === 'GET') {
//       // Handle GET request
//       res.writeHead(200, { 'Content-Type': 'text/plain' });
//       res.end('GET request received\n');
//     } else if (req.method === 'POST') {
//       // Handle POST request
//       res.writeHead(200, { 'Content-Type': 'text/plain' });
//       res.end('POST request received\n');
//     } else if (req.method === 'PUT') {
//       // Handle PUT request
//       res.writeHead(200, { 'Content-Type': 'text/plain' });
//       res.end('PUT request received\n');
//     } else if (req.method === 'DELETE') {
//       // Handle DELETE request
//       res.writeHead(200, { 'Content-Type': 'text/plain' });
//       res.end('DELETE request received\n');
//     } else {
//       // Handle unsupported request methods
//       res.writeHead(405, { 'Content-Type': 'text/plain' });
//       res.end('Unsupported request method\n');
//     }
//   });

//   server.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
//   });

const http = require("http");
const url = require("url");
const PORT = 7800;

//create a server object:
const server = http
  .createServer((req, res) => {
    const path = req.url.split("?")[0];
    // http://localhost:8080/?name=shivam&batch=c8
    if (path === "/") {
      var query = url.parse(req.url, true).query;
      console.log("Query: ", query);
      res.write("Hello NodeJS");
    } else if (path === "/calculator") {
      var query = url.parse(req.url, true).query;
      let sum = 0;
      for (let i = 1; i <= query.num; i++) {
        sum += i;
      }
      console.log("Query: ", query);
      res.write("Hello Calculator: " + sum);
    } else {
      res.write("No API found");
    }

    res.end(); //end the response
  })

  .listen(7800, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  }); //the server object listens on port 8080
