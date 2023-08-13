const express = require("express");
// also can do
// const express = require("express")();
// rather than this
const app = express();

app.get("/", (req, res) => {
  console.log("user hit the resource");
  res.send("Home Page");
});
app.get("/about", (req, res) => {
  res.send("About Page");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>resourse not found</h1>");
});

app.listen(5000, () => {
  console.log("server is listening");
});

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
