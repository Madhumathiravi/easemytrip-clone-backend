import Hotel from "../models/Hotel.js";

export const getHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.json(hotels);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch hotels" });
  }
};

export const searchHotels = async (req, res) => {
  try {
    const { city, name, guests } = req.query;

    const filter = {};

    if (city) {
      filter.city = { $regex: city, $options: "i" };
    }

    if (name) {
      filter.name = { $regex: name, $options: "i" };
    }

    if (guests) {
      filter.rooms = { $gt: 0 };
    }

    const hotels = await Hotel.find(filter);
    res.json(hotels);
  } catch (err) {
    res.status(500).json({ message: "Search failed" });
  }
};

