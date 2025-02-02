import express from "express";
import {
  createSource,
  deleteSource,
  getSource,
  getSources,
  updateSource,
} from "./source-controller";
import { validateObjectId } from "../middleware/validateObjectId";
import { requireAuth } from "../middleware/requireAuth";

const router = express.Router();

router.use(requireAuth);

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
