import express, { type Request, type Response } from "express";
import Purchase, { type IPurchase } from "../models/Purchase";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const purchases: IPurchase[] = await Purchase.find();
    res.json(purchases);
  } catch (error) {
    res
      .status(500)
      .json({
        message:
          error instanceof Error ? error.message : "An unknown error occurred"
      });
  }
});

router.post("/", async (req: Request, res: Response) => {
  const purchase = new Purchase({
    itemType: req.body.itemType,
    maxBudget: req.body.maxBudget,
    links: req.body.links
  });

  try {
    const newPurchase: IPurchase = await purchase.save();
    res.status(201).json(newPurchase);
  } catch (error) {
    res
      .status(400)
      .json({
        message:
          error instanceof Error ? error.message : "Unable to save purchase"
      });
  }
});

export default router;
