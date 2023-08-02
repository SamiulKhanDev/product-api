require("dotenv").config();
const cors = require("cors");
const express = require("express");
const Product = require("./model/productModel");
const app = express();
app.use(express.json());
app.use(cors());
const port = require("./config/configEnv").port || 8000;
const { category: categoryMap } = require("./randomProductGenerator");
const { subcategory: subcategoryMap } = require("./randomProductGenerator");

async function getAllProducts(filter) {
  try {
    const products = await Product.find(filter);
    return products;
  } catch (error) {
    throw new Error(error.message);
  }
}

app.get("/", (req, res) => {
  (async () => {
    try {
      const products = await getAllProducts({});
      res.status(200).send({ data: products });
    } catch (error) {
      res.status(404).send({ message: "Please try again later" });
    }
  })();
});
app.post("/", (req, res) => {
  (async () => {
    try {
      const value = req.body.value;
      await Product.insertMany(value);
      res.status(200).send({ message: "success" });
    } catch (error) {
      res.status(404).send({ error });
    }
  })();
});

app.get("/:category", (req, res) => {
  (async () => {
    let { category } = req.params;
    category = categoryMap[category];
    try {
      const products = await getAllProducts({ category });
      res.status(200).send({ data: products });
    } catch (error) {
      res.status(404).send({ message: "Please try again later" });
    }
  })();
});

app.get("/:category/:subcategory", (req, res) => {
  (async () => {
    let { category, subcategory } = req.params;
    category = categoryMap[category];
    subcategory = subcategoryMap[subcategory];
    try {
      const products = await getAllProducts({ category, subcategory });
      res.status(200).send({ data: products });
    } catch (error) {
      res.status(404).send({ message: "Please try again later" });
    }
  })();
});

async function start() {
  await require("./config/databaseConnection")();
  app.listen(port, () => {
    console.log(`server is up on http://localhost:${port}`);
  });
}

start();
