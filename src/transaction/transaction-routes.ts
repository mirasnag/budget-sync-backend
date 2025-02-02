import express from "express";
import {
  createTransaction,
  deleteTransaction,
  getTransaction,
  getTransactions,
  updateTransaction,
} from "./transaction-controller";
import { validateObjectId } from "../middleware/validateObjectId";
import { requireAuth } from "../middleware/requireAuth";

const router = express.Router();

router.use(requireAuth);

// get all transactions
router.get("/", getTransactions);

// get a single transaction
router.get("/:id", validateObjectId, getTransaction);

// create an transaction
router.post("/", createTransaction);

// delete an transaction
router.delete("/:id", validateObjectId, deleteTransaction);

// update an transaction
router.patch("/:id", validateObjectId, updateTransaction);

export default router;
