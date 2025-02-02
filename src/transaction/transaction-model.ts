import mongoose, { Schema, Document } from "mongoose";
import { TransactionType } from "../common/constants";

export interface ITransaction extends Document {
  type: TransactionType;
  name: string;
  user_id: string;
  src?: mongoose.Types.ObjectId;
  dst?: mongoose.Types.ObjectId;
  srcAmount?: number;
  dstAmount?: number;
  date_utc?: string; // ISO String
  createdAt?: string; // ISO String
}

const TransactionSchema = new Schema<ITransaction>(
  {
    type: {
      type: String,
      enum: TransactionType,
      required: true,
    },
    name: { type: String, required: true },
    user_id: { type: String, required: true },
    src: { type: Schema.Types.ObjectId },
    dst: { type: Schema.Types.ObjectId },
    srcAmount: { type: Number },
    dstAmount: { type: Number },
    date_utc: { type: String },
  },
  { timestamps: true }
);

export const TransactionModel = mongoose.model<ITransaction>(
  "Transaction",
  TransactionSchema
);
