import express from "express";
import { Product } from "../models/product.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const product = await new Product(req.body);
    const result = await product.save();
    res.status(201).send(result);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});
export { router };
