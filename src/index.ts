// library imports
import express, { Request, Response } from "express";
import mongoose from "mongoose";

// config
import { config } from "./config/config";

// middleware
import { loggerMiddleware } from "./middleware/logger";

// routers
import AssetRouter from "./asset/asset-routes";
import CategoryRouter from "./category/category-routes";
import TransactionRouter from "./transaction/transaction-routes";
import SourceRouter from "./source/source-routes";
import UserRouter from "./user/user-routes";

const app = express();
const PORT = config.port;
mongoose.Schema.Types.String.checkRequired((v) => typeof v === "string");

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

app.use("/api/user", UserRouter);

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
