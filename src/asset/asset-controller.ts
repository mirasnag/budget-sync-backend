import { AssetModel } from "./asset-model";
import {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
} from "../common/crud-controllers";

export const getAssets = getAll(AssetModel);
export const getAsset = getOne(AssetModel);
export const createAsset = createOne(AssetModel);
export const updateAsset = updateOne(AssetModel);
export const deleteAsset = deleteOne(AssetModel);
