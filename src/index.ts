import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { config } from "./config/config";
import { loggerMiddleware } from "./middleware/logger";
import AssetRouter from "./asset/asset-routes";
import CategoryRouter from "./category/category-routes";
import TransactionRouter from "./transaction/transaction-routes";
import SourceRouter from "./source/source-routes";

const app = express();
const PORT = config.port;

// middleware
app.use(express.json());

app.use(loggerMiddleware);

// routes
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

app.use("/api/assets", AssetRouter);

app.use("/api/categories", CategoryRouter);

app.use("/api/sources", SourceRouter);

app.use("/api/transactions", TransactionRouter);

// connect to db
mongoose
  .connect(config.db_url)
  .then(() => {
    // listening to request
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
