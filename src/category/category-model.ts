import mongoose, { Schema, Document } from "mongoose";
import { EntityType } from "../common/constants";

export interface ICategory extends Document {
  type: EntityType;
  name: string;
  user_id: string;
  currency?: string;
  amount: number;
}

const CategorySchema = new Schema<ICategory>(
  {
    type: {
      type: String,
      enum: [EntityType.CATEGORY],
      required: true,
    },
    name: { type: String, required: true },
    user_id: { type: String, required: true },
    currency: { type: String },
    amount: { type: Number, required: true }, // Monthly budget amount
  },
  { timestamps: true }
);

export const CategoryModel = mongoose.model<ICategory>(
  "Category",
  CategorySchema
);
