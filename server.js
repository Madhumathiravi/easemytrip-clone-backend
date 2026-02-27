import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import hotelRoutes from "./routes/hotel.routes.js";
import hotelUploadRoutes from "./routes/hotels.upload.js";
import uploadRoute from "./routes/upload.js";
dotenv.config();
const app = express();
app.use("/api", hotelUploadRoutes);
app.use("/api", uploadRoute);

app.use("/uploads", express.static("uploads"));


/*cors */
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  })
);

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/hotels", hotelRoutes);
app.use("/uploads", express.static("uploads"));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(console.error);

app.listen(5000, () => {
  console.log("Server running on 5000");
});

