
// import mongoose from "mongoose";

// const roomSchema = new mongoose.Schema({
//   type: {
//     type: String,
//     required: true,
//   },
//   basePrice: {
//     type: Number,
//     required: true,
//   },
//   maxGuests: {
//     type: Number,
//     required: true,
//   },
//   totalRooms: {
//     type: Number,
//     required: true,
//   },
//   mealsIncluded: {
//     type: [String],
//     default: [],
//   },
// });

// const hotelSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     city: { type: String, required: true, index: true },
//     country: { type: String, required: true },
//     address: String,
//     rating: { type: Number, default: 0 },
//     amenities: { type: [String], default: [] },
//     images: { type: [String], default: [] },
//     rooms: { type: [roomSchema], required: true },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Hotel", hotelSchema);

import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  type: { type: String, required: true },
  basePrice: { type: Number, required: true },
  maxGuests: { type: Number, required: true },
  totalRooms: { type: Number, required: true },
  mealsIncluded: { type: [String], default: [] },
});

// const hotelSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     city: { type: String, required: true, index: true },
//     country: { type: String, required: true },
//     address: { type: String, required: true },
//     location: { type: String }, // can be city + address
//     rating: { type: Number, default: 0 },
//     star: { type: Number, default: 3 }, // 3, 4, 5 stars
//     review: { type: Number, default: 4 }, // average review
//     nofReview: { type: Number, default: 0 },
//     amenities: { type: [String], default: [] }, // hotel amenities
//     extras: { type: [String], default: [] }, // for card display extras
//     price: { type: Number, required: true }, // base price for display
//     discount: { type: Number, default: 0 },
//     tax: { type: Number, default: 0 },
//     images: { type: [String], default: [] }, // first image for card
//     rooms: { type: [roomSchema], required: true },
//   },
//   { timestamps: true }
// );

const hotelSchema = new mongoose.Schema({
  name: String,
  city: String,
  country: String,
  address: String,
  rating: { type: Number, default: 0 },
  review: { type: Number, default: 0 },      // add review
  nofReview: { type: Number, default: 0 },   // add number of reviews
  price: { type: Number, default: 0 },       // add price for hotel card
  discount: { type: Number, default: 0 },    // discount percentage
  tax: { type: Number, default: 0 },
  extras: [String],                          // like wifi, pool, etc.
  amenities: [String],
  images: [String],
  rooms: [roomSchema],
});
export default mongoose.model("Hotel", hotelSchema);