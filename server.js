// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";
// import authRoutes from "./routes/auth.routes.js";
// import hotelRoutes from "./routes/hotel.routes.js";

// dotenv.config();

// const app = express();
// app.use("/api/hotels", hotelRoutes);


// // middleware
// app.use(cors());
// app.use(express.json());

// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     credentials: true,
//   })
// );

// // routes
// app.use("/api/auth", authRoutes);

// // db
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB connected (local)"))
//   .catch((err) => console.error(err));

// // server
// app.listen(5000, () => {
//   console.log("Server running on 5000");
// });

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import hotelRoutes from "./routes/hotel.routes.js";

dotenv.config();

const app = express();

/* ✅ CORS MUST be here */
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  })
);

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/hotels", hotelRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(console.error);

app.listen(5000, () => {
  console.log("Server running on 5000");
});

