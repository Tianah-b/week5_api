import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { generateDublinWeatherData, generateLondonWeatherData } from "../Services/WeatherService"; // Capitalization to match your folder structure

export const getWeatherData = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
  
    try {
        const { city } = req.params;
        let finalWeatherData;
      
        switch (city.toLowerCase()) {
            case "london":
                finalWeatherData = generateLondonWeatherData();
                break;
            case "dublin":
                finalWeatherData = generateDublinWeatherData();
                break;
            default:
                return res.status(404).send("City not found");
        }

        res.json(finalWeatherData);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
};
