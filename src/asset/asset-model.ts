import mongoose, { Schema, Document } from "mongoose";
import { EntityType } from "../common/constants";

export interface IAsset extends Document {
  type: EntityType;
  name: string;
  user_id: string;
  currency?: string;
}

const AssetSchema = new Schema<IAsset>(
  {
    type: {
      type: String,
      enum: [EntityType.ASSET],
      required: true,
    },
    name: { type: String, required: true },
    currency: { type: String },
    user_id: { type: String, required: true },
  },
  { timestamps: true }
);

export const AssetModel = mongoose.model<IAsset>("Asset", AssetSchema);
