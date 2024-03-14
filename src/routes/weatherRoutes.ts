import express from "express";
import { getWeatherData } from "../controllers/weatherController"; // Removed .js extension
import { validateCityName } from "../middleware/validators"; // Removed .js extension

const router = express.Router();

router.get("/:city", validateCityName, getWeatherData);

export default router;
