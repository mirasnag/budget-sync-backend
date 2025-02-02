import { Request, Response } from "express";
import { CategoryModel } from "./category-model";
import { getErrorMessage } from "../utils/error";

// get all categories
export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await CategoryModel.find({}).sort({ createdAt: -1 });
    res.status(200).json({ categories });
  } catch (error) {
    res.status(500).send(getErrorMessage(error));
  }
};

// get a single category
export const getCategory = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const category = await CategoryModel.findById(id);

    if (!category) {
      res.status(404).json({ error: "Category not found" });
      return;
    }

    res.status(200).json({ category });
  } catch (error) {
    res.status(500).send(getErrorMessage(error));
  }
};

// create a category
export const createCategory = async (req: Request, res: Response) => {
  const { type, name, currency, amount } = req.body;

  try {
    const category = await CategoryModel.create({
      type,
      name,
      currency,
      amount,
    });
    res.status(201).json(category);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: "Unknown error occured" });
    }
  }
};

// delete a category
export const deleteCategory = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const category = await CategoryModel.findByIdAndDelete(id);

    if (!category) {
      res.status(404).json({ error: "Category not found" });
      return;
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).send(getErrorMessage(error));
  }
};

// update a category
export const updateCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  const values = req.body;

  try {
    const category = await CategoryModel.findByIdAndUpdate(id, values, {
      new: true,
    });

    if (!category) {
      res.status(404).json({ error: "Category not found" });
      return;
    }

    res.status(200).json({ category });
  } catch (error) {
    res.status(500).send(getErrorMessage(error));
  }
};
