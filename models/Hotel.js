
import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  basePrice: {
    type: Number,
    required: true,
  },
  maxGuests: {
    type: Number,
    required: true,
  },
  totalRooms: {
    type: Number,
    required: true,
  },
  mealsIncluded: {
    type: [String],
    default: [],
  },
});

const hotelSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    city: { type: String, required: true, index: true },
    country: { type: String, required: true },
    address: String,
    rating: { type: Number, default: 0 },
    amenities: { type: [String], default: [] },
    images: { type: [String], default: [] },
    rooms: { type: [roomSchema], required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Hotel", hotelSchema);
