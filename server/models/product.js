import mongoose, { Schema } from "mongoose";

const productShema = Schema({
  row: Number,
  title: String,
  price: Number,
  delivery: Boolean,
  location: String,
  description: String,
  image: String,
});

const Product = mongoose.model("Product", productShema);

export { Product };
