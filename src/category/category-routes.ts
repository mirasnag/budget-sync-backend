import express from "express";
import {
  createCategory,
  deleteCategory,
  getCategory,
  getCategories,
  updateCategory,
} from "./category-controller";
import { validateObjectId } from "../middleware/validateObjectId";
import { requireAuth } from "../middleware/requireAuth";

const router = express.Router();

router.use(requireAuth);

// get all categories
router.get("/", getCategories);

// get a single category
router.get("/:id", validateObjectId, getCategory);

// create a category
router.post("/", createCategory);

// delete a category
router.delete("/:id", validateObjectId, deleteCategory);

// update a category
router.patch("/:id", validateObjectId, updateCategory);

export default router;
