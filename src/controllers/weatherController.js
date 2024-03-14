"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeatherData = void 0;
const express_validator_1 = require("express-validator");
const WeatherService_1 = require("../Services/WeatherService"); // Capitalization to match your folder structure
const getWeatherData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { city } = req.params;
        let finalWeatherData;
        switch (city.toLowerCase()) {
            case "london":
                finalWeatherData = (0, WeatherService_1.generateLondonWeatherData)();
                break;
            case "dublin":
                finalWeatherData = (0, WeatherService_1.generateDublinWeatherData)();
                break;
            default:
                return res.status(404).send("City not found");
        }
        res.json(finalWeatherData);
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
});
exports.getWeatherData = getWeatherData;
