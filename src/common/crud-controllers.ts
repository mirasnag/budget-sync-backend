import { Response } from "express";
import { Model } from "mongoose";
import { getErrorMessage } from "../utils/error";
import { AuthenticatedRequest } from "./types";

// Generic CRUD functions
export const getAll =
  (model: Model<any>) => async (req: AuthenticatedRequest, res: Response) => {
    try {
      const user_id = req.user?._id;
      const items = await model.find({ user_id }).sort({ createdAt: -1 });
      res.status(200).json(items);
    } catch (error) {
      res.status(500).json({ error: getErrorMessage(error) });
    }
  };

export const getOne =
  (model: Model<any>) => async (req: AuthenticatedRequest, res: Response) => {
    const { id } = req.params;
    try {
      const item = await model.findById(id);
      if (!item) {
        res.status(404).json({ error: "Not found" });
        return;
      }
      res.status(200).json(item);
    } catch (error) {
      res.status(500).json({ error: getErrorMessage(error) });
    }
  };

export const createOne =
  (model: Model<any>) => async (req: AuthenticatedRequest, res: Response) => {
    try {
      const user_id = req.user?._id;
      const item = await model.create({ ...req.body, user_id });
      res.status(201).json(item);
    } catch (error) {
      res.status(500).json({ error: getErrorMessage(error) });
    }
  };

export const updateOne =
  (model: Model<any>) => async (req: AuthenticatedRequest, res: Response) => {
    const { id } = req.params;
    try {
      const item = await model.findByIdAndUpdate(id, req.body, { new: true });
      if (!item) {
        res.status(404).json({ error: "Not found" });
        return;
      }
      res.status(200).json(item);
    } catch (error) {
      res.status(500).json({ error: getErrorMessage(error) });
    }
  };

export const deleteOne =
  (model: Model<any>) => async (req: AuthenticatedRequest, res: Response) => {
    const { id } = req.params;
    try {
      const item = await model.findByIdAndDelete(id);
      if (!item) {
        res.status(404).json({ error: "Not found" });
        return;
      }
      res.status(204).json();
    } catch (error) {
      res.status(500).json({ error: getErrorMessage(error) });
    }
  };
