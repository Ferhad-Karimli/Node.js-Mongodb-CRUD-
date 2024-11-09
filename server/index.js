import express from "express";
import cors from "cors";
import { router as productRouter } from "./routes/product.js";
import { router as contactRouter } from "./routes/contact.js";
import { connectDb } from "./config/connect.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/product", productRouter);
app.use("/contact", contactRouter);
const PORT = 3003;
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
