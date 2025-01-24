import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import purchasesRouter from "./routes/purchases";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((error) => console.error("MongoDB connection error:", error));

app.use("/api/purchases", purchasesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
