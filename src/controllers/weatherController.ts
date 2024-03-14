import { Request, Response } from "express";
import { validationResult } from "express-validator";
import {
  generateDublinWeatherData,
  generateLondonWeatherData,
} from "../Services/weatherService.ts"; // Removed .js extension

// Define the WeatherData interface if it's not defined elsewhere
interface WeatherData {
  temperature: number;
  humidity: number;
  wind: number;
  rain: number;
}

/**
 * Gets the weather data for a city
 * @param req the request object
 * @param res the response object
 */
export const getWeatherData = async (req: Request, res: Response) => {
  // Check if there are any validation errors
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.error("Validation error", errors.mapped());
    res.status(400).json({ errors: errors.array() });
    return;
  }

  try {
    const { city } = req.params;
    console.log(city);

    let finalWeatherData: WeatherData;

    if (city === "london") {
      console.log(generateLondonWeatherData());
      finalWeatherData = generateLondonWeatherData();
    } else if (city === "dublin") {
      finalWeatherData = generateDublinWeatherData();
    } else {
      res.status(404).send("City not found");
      return;
    }

    res.status(200).json(finalWeatherData);
  } catch (error) {
    console.error("Error in fetching weather data", error);
    res.status(500).send("Error in fetching weather data");
  }
};
