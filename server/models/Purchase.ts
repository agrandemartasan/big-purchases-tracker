import mongoose, { type Document, Schema } from "mongoose";

export interface IPurchase extends Document {
  itemType: string;
  maxBudget: number;
  links: string[];
}

const PurchaseSchema: Schema = new Schema({
  itemType: { type: String, required: true },
  maxBudget: { type: Number, required: true },
  links: [String]
});

export default mongoose.model<IPurchase>("Purchase", PurchaseSchema);
