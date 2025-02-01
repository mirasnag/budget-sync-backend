import express from "express";
import {
  createSource,
  deleteSource,
  getSource,
  getSources,
  updateSource,
} from "./source-controller";
import { validateObjectId } from "../middleware/validateObjectId";

const router = express.Router();

// get all sources
router.get("/", getSources);

// get a single source
router.get("/:id", validateObjectId, getSource);

// create an source
router.post("/", createSource);

// delete an source
router.delete("/:id", validateObjectId, deleteSource);

// update an source
router.patch("/:id", validateObjectId, updateSource);

export default router;
