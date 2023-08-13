const http = require("http");
const { readFileSync } = require("fs");

// get all files
const homepage = readFileSync("./index.html");

const server = http.createServer((req, res) => {
  //   res.writeHead(200, { "content-type": "text/html" });
  //   console.log("user hit server");
  //   res.write("<h1>Home Page</h1>");
  //   res.end("hello prem");
  //   console.log(req.method);
  const url = req.url;
  console.log(req.url);
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homepage);
    res.end("hello prem");
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>about Page</h1>");
    res.end("hello prem");
  } else {
    res.writeHead(400, { "content-type": "text/html" });
    res.write("<h1>Sorry!! page not found</h1>");
    res.end("hello prem");
  }
});
server.listen(5000);
