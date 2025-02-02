import { SourceModel } from "./source-model";
import {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
} from "../common/crud-controllers";

export const getSources = getAll(SourceModel);
export const getSource = getOne(SourceModel);
export const createSource = createOne(SourceModel);
export const updateSource = updateOne(SourceModel);
export const deleteSource = deleteOne(SourceModel);
