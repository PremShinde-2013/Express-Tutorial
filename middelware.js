const express = require("express");
const app = express();

// req => middleware => res
// here
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  //   res.send("testing");
  next();
};
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

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
