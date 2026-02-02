
import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  type: String,        
  price: Number,     
  totalRooms: Number,  
});

const hotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
      index: true,
    },

    country: {
      type: String,
      required: true,
    },

    address: String,

    rating: {
      type: Number,
      default: 0,
    },

    amenities: [String],

    // ✅ ADD THIS
    images: {
      type: [String],   // array of image URLs
      default: [],
    },

    rooms: [roomSchema],
  },
  { timestamps: true }
);

export default mongoose.model("Hotel", hotelSchema);
