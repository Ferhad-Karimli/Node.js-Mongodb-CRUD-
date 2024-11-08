import express from "express";
import cors from "cors";
import { router as productRouter } from "./routes/product.js";
import { connectDb } from "./config/connect.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/product", productRouter);

connectDb().then(() => {
  app.listen("3003", () => {
    console.log("Server is listening on port 3003");
  });
});
