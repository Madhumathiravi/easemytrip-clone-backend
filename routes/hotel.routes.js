import express from "express";
import { getHotels, searchHotels } from "../controllers/hotel.controller.js";

const router = express.Router();

router.get("/", getHotels);              // default list (optional)
router.get("/search", searchHotels);     // professional search

export default router;
