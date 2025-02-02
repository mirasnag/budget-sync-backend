import mongoose, { Schema, Document } from "mongoose";
import { EntityType } from "../common/constants";

export interface ISource extends Document {
  type: EntityType;
  name: string;
  currency?: string;
}

const SourceSchema = new Schema<ISource>(
  {
    type: {
      type: String,
      enum: [EntityType.SOURCE],
      required: true,
    },
    name: { type: String, required: true },
    currency: { type: String },
  },
  { timestamps: true }
);

export const SourceModel = mongoose.model<ISource>("Source", SourceSchema);
