import { Request, Response } from "express";
import { TransactionModel } from "./transaction.model";

// get all transactions
export const getTransactions = async (req: Request, res: Response) => {
  try {
    const transactions = await TransactionModel.find({}).sort({
      createdAt: -1,
    });
    res.status(200).json({ transactions });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// get a single transaction
export const getTransaction = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const transaction = await TransactionModel.findById(id);

    if (!transaction) {
      res.status(404).json({ error: "Transaction not found" });
      return;
    }

    res.status(200).json({ transaction });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// create a transaction
export const createTransaction = async (req: Request, res: Response) => {
  const { type, name, src, dst, srcAmount, dstAmount, date_utc } = req.body;

  try {
    const transaction = await TransactionModel.create({
      type,
      name,
      src,
      dst,
      srcAmount,
      dstAmount,
      date_utc,
    });
    res.status(201).json(transaction);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: "Unknown error occured" });
    }
  }
};

// delete a transaction
export const deleteTransaction = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const transaction = await TransactionModel.findByIdAndDelete(id);

    if (!transaction) {
      res.status(404).json({ error: "Transaction not found" });
      return;
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// update a transaction
export const updateTransaction = async (req: Request, res: Response) => {
  const { id } = req.params;
  const values = req.body;

  try {
    const transaction = await TransactionModel.findByIdAndUpdate(id, values, {
      new: true,
    });

    if (!transaction) {
      res.status(404).json({ error: "Transaction not found" });
      return;
    }

    res.status(200).json({ transaction });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
