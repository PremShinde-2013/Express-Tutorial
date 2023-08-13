const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  // res.json([{ name: "Prem" }, { name: "Rohan" }]);
  // res.json(products)
  res.send('<h1>Home Page</h1><a href="/api/products" >product</a>');
});

app.get("/api/products/1", (req, res) => {
  const singleProduct = products.find((product) => product.id === 1);
  res.json(singleProduct);
});
app.get("/api/products/:productID", (req, res) => {
  // console.log(req);
  console.log(req.params);
  const { productID } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );
  if (!singleProduct) {
    res.status(404).send("Product not found");
  }
  res.json(singleProduct);
});

app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen(5000, () => {
  console.log("server listening");
});
