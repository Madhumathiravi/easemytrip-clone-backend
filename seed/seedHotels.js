import mongoose from "mongoose";
import Hotel from "../models/Hotel.js";

// connect DB
mongoose.connect("mongodb://127.0.0.1:27017/hotelDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

async function seedHotels() {

  await Hotel.deleteMany(); // optional (clears old data)

  await Hotel.create({
    name: "Zip by Spree Hotels",
    city: "pune",
    country: "India",
    address: "Pune City Center",

    rating: 4,
    review: 4.8,
    nofReview: 245,

    price: 2000,
    discount: 20,
    tax: 182,

    amenities: [
      "Restaurant",
      "Free Wifi",
      "24-hour Room Service"
    ],

    extras: [
      "couple friendly",
      "Local ID's accepted"
    ],

    images: ["/images/spree-pune.png"],

    rooms: []
  });

  console.log("Hotel Added ✅");
  mongoose.connection.close();
}

seedHotels();