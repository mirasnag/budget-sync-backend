import { CategoryModel } from "./category-model";
import {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
} from "../common/crud-controllers";

export const getCategories = getAll(CategoryModel);
export const getCategory = getOne(CategoryModel);
export const createCategory = createOne(CategoryModel);
export const updateCategory = updateOne(CategoryModel);
export const deleteCategory = deleteOne(CategoryModel);
