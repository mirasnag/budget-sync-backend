import { Request, Response } from "express";
import { AssetModel } from "./asset-model";
import { getErrorMessage } from "../utils/error";

// get all assets
export const getAssets = async (req: Request, res: Response) => {
  try {
    const assets = await AssetModel.find({}).sort({ createdAt: -1 });
    res.status(200).json({ assets });
  } catch (error) {
    res.status(500).send(getErrorMessage(error));
  }
};

// get a single asset
export const getAsset = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const asset = await AssetModel.findById(id);

    if (!asset) {
      res.status(404).json({ error: "Asset not found" });
      return;
    }

    res.status(200).json({ asset });
  } catch (error) {
    res.status(500).send(getErrorMessage(error));
  }
};

// create an asset
export const createAsset = async (req: Request, res: Response) => {
  const { type, name, currency } = req.body;

  try {
    const asset = await AssetModel.create({ type, name, currency });
    res.status(201).json(asset);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: "Unknown error occured" });
    }
  }
};

// delete an asset
export const deleteAsset = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const asset = await AssetModel.findByIdAndDelete(id);

    if (!asset) {
      res.status(404).json({ error: "Asset not found" });
      return;
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).send(getErrorMessage(error));
  }
};

// update an asset
export const updateAsset = async (req: Request, res: Response) => {
  const { id } = req.params;
  const values = req.body;

  try {
    const asset = await AssetModel.findByIdAndUpdate(id, values, { new: true });

    if (!asset) {
      res.status(404).json({ error: "Asset not found" });
      return;
    }

    res.status(200).json({ asset });
  } catch (error) {
    res.status(500).send(getErrorMessage(error));
  }
};
