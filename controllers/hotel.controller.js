// // // // import Hotel from "../models/Hotel.js";

// // // // export const getHotels = async (req, res) => {
// // // //   try {
// // // //     const hotels = await Hotel.find();
// // // //     res.json(hotels);
// // // //   } catch (err) {
// // // //     res.status(500).json({ message: "Failed to fetch hotels" });
// // // //   }
// // // // };

// // // // export const searchHotels = async (req, res) => {
// // // //   try {
// // // //     const { city, name, guests } = req.query;
// // // //     const filter = {};

// // // //     if (city) {
// // // //       filter.city = { $regex: `^${city}$`, $options: "i" };
// // // //     }

// // // //     if (name) {
// // // //       filter.name = { $regex: name, $options: "i" };
// // // //     }

// // // //     if (guests) {
// // // //       filter.rooms = {
// // // //         $elemMatch: {
// // // //           maxGuests: { $gte: Number(guests) },
// // // //           totalRooms: { $gt: 0 },
// // // //         },
// // // //       };
// // // //     }

// // // //     const hotels = await Hotel.find(filter);
// // // //     res.json(hotels);
// // // //   } catch (err) {
// // // //     console.error(err);
// // // //     res.status(500).json({ message: "Search failed" });
// // // //   }
// // // // };

// // // export const searchHotels = async (req, res) => {
// // //   try {
// // //     const { city, guests } = req.query;
// // //     const filter = {};

// // //     if (city) filter.city = { $regex: city, $options: "i" };
// // //     if (guests) {
// // //       filter.rooms = {
// // //         $elemMatch: {
// // //           maxGuests: { $gte: Number(guests) },
// // //           totalRooms: { $gt: 0 },
// // //         },
// // //       };
// // //     }

// // //     // Select only the fields needed for frontend card
// // //     const hotels = await Hotel.find(filter).select(
// // //       "name location star review nofReview amenities extras price discount tax images rooms"
// // //     );

// // //     res.json(hotels);
// // //   } catch (err) {
// // //     console.error(err);
// // //     res.status(500).json({ message: "Search failed" });
// // //   }
// // // };
// // export const searchHotels = async (req, res) => {
// //   try {
// //     const { city, guests } = req.query;

// //     const filter = {};

// //     if (city) {
// //       filter.city = { $regex: city, $options: "i" };
// //     }

// //     if (guests) {
// //       filter.rooms = {
// //         $elemMatch: {
// //           maxGuests: { $gte: Number(guests) },
// //           totalRooms: { $gt: 0 },
// //         },
// //       };
// //     }

// //     const hotels = await Hotel.find(filter);

// //     // ⭐ TRANSFORM DATA FOR FRONTEND
// //     const formattedHotels = hotels.map((hotel) => {
// //       const cheapestRoom = hotel.rooms[0];

// //       return {
// //         _id: hotel._id,
// //         name: hotel.name,
// //         location: hotel.city,
// //         star: Math.round(hotel.rating || 4),
// //         review: hotel.rating || 4.2,
// //         nofReview: 120,
// //         amenities: hotel.amenities,
// //         extras: cheapestRoom?.mealsIncluded || [],
// //         price: cheapestRoom?.basePrice || 2000,
// //         discount: 10,
// //         tax: 200,
// //         img: hotel.images[0],
// //       };
// //     });

// //     res.json(formattedHotels);
// //   } catch (err) {
// //     console.error(err);
// //     res.status(500).json({ message: "Search failed" });
// //   }
// // };

// export const searchHotels = async (req, res) => {
//   try {
//     const { city, guests, checkIn, checkOut } = req.query;

//     const filter = {};

//     if (city) {
//       filter.city = { $regex: city, $options: "i" };
//     }

//     if (guests) {
//       filter.rooms = {
//         $elemMatch: {
//           maxGuests: { $gte: Number(guests) },
//           totalRooms: { $gt: 0 },
//         },
//       };
//     }

//     const hotels = await Hotel.find(filter);

//     res.json(hotels);
//   } catch (err) {
//     res.status(500).json({ message: "Search failed" });
//   }
// };

import Hotel from "../models/Hotel.js";

// ✅ EXPORT 1
export const getHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.json(hotels);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch hotels" });
  }
};

// ✅ EXPORT 2
export const searchHotels = async (req, res) => {
  try {
    const { city, guests } = req.query;

    const filter = {};

    if (city) {
      filter.city = { $regex: city, $options: "i" };
    }

    if (guests) {
      filter.rooms = {
        $elemMatch: {
          maxGuests: { $gte: Number(guests) },
          totalRooms: { $gt: 0 },
        },
      };
    }

    const hotels = await Hotel.find(filter);

    res.json(hotels);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Search failed" });
  }
};