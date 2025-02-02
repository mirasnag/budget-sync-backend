import { TransactionModel } from "./transaction-model";
import {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
} from "../common/crud-controllers";

export const getTransactions = getAll(TransactionModel);
export const getTransaction = getOne(TransactionModel);
export const createTransaction = createOne(TransactionModel);
export const updateTransaction = updateOne(TransactionModel);
export const deleteTransaction = deleteOne(TransactionModel);
