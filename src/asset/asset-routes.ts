import express from "express";
import {
  createAsset,
  deleteAsset,
  getAsset,
  getAssets,
  updateAsset,
} from "./asset-controller";
import { validateObjectId } from "../middleware/validateObjectId";

const router = express.Router();

// get all assets
router.get("/", getAssets);

// get a single asset
router.get("/:id", validateObjectId, getAsset);

// create an asset
router.post("/", createAsset);

// delete an asset
router.delete("/:id", validateObjectId, deleteAsset);

// update an asset
router.patch("/:id", validateObjectId, updateAsset);

export default router;
