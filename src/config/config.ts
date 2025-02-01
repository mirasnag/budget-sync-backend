import dotenv from "dotenv";
dotenv.config();

export const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 4000,
  db_url: process.env.DB_URL || "mongodb://localhost:27017/budget-app",
  jwt_secret: process.env.JWT_SECRET || "default-secret",
};
