const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  // res.json([{ name: "Prem" }, { name: "Rohan" }]);
  // res.json(products)
  res.send('<h1>Home Page</h1><a href="/api/products" >product</a>');
});
app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen(5000, () => {
  console.log("server listening");
});
