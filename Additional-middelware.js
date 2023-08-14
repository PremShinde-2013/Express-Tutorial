const express = require("express");
const app = express();

const logger = require("./logger");
const authorize = require("./authorize");
const morgan = require("morgan");
// app.use([authorize, logger]);
// app.use("/api", logger);

// express
// app.use(express.static("./public"));

// 1 use vs routes
// 2.  options = our own / express / third party

// third party middelware
// morgan
app.use(morgan("tiny"));
app.get("/", logger, (req, res) => {
  // another way to do this is above
  //   const method = req.method;
  //   const url = req.url;
  //   const time = new Date().getFullYear();
  //   console.log(method, url, time);
  res.send("home");
});
app.get("/About", logger, (req, res) => {
  res.send("About");
});
app.get("/api/product", logger, (req, res) => {
  console.log(req.user);
  res.send("Product");
});
app.get("/items", [authorize, logger], (req, res) => {
  res.send("items");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
