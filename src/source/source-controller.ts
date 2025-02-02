import { Request, Response } from "express";
import { SourceModel } from "./source-model";
import { getErrorMessage } from "../utils/error";

// get all sources
export const getSources = async (req: Request, res: Response) => {
  try {
    const sources = await SourceModel.find({}).sort({ createdAt: -1 });
    res.status(200).json({ sources });
  } catch (error) {
    res.status(500).send(getErrorMessage(error));
  }
};

// get a single source
export const getSource = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const source = await SourceModel.findById(id);

    if (!source) {
      res.status(404).json({ error: "Source not found" });
      return;
    }

    res.status(200).json({ source });
  } catch (error) {
    res.status(500).send(getErrorMessage(error));
  }
};

// create a source
export const createSource = async (req: Request, res: Response) => {
  const { type, name, currency } = req.body;

  try {
    const source = await SourceModel.create({ type, name, currency });
    res.status(201).json(source);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: "Unknown error occured" });
    }
  }
};

// delete a source
export const deleteSource = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const source = await SourceModel.findByIdAndDelete(id);

    if (!source) {
      res.status(404).json({ error: "Source not found" });
      return;
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).send(getErrorMessage(error));
  }
};

// update a source
export const updateSource = async (req: Request, res: Response) => {
  const { id } = req.params;
  const values = req.body;

  try {
    const source = await SourceModel.findByIdAndUpdate(id, values, {
      new: true,
    });

    if (!source) {
      res.status(404).json({ error: "Source not found" });
      return;
    }

    res.status(200).json({ source });
  } catch (error) {
    res.status(500).send(getErrorMessage(error));
  }
};
