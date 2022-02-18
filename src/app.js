const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Product = require("./product_model");
const app = express();
const port = 5000;
const staticPath = path.join(__dirname, "../public");

app.use(express.json());
app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/allproducts", async (req, res) => {
  const products = await Product.find();
  res.status(200).json({ success: true, products });
});

app.post("/newproduct", async (req, res) => {
  const product = await Product.create(req.body);
  res.status(200).json({ success: true, product });
});

mongoose.connect("mongodb://localhost:27017/IOT");
app.listen(port);
