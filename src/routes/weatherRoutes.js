"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const weatherController_1 = require("../controllers/weatherController"); // Removed .js extension
const validators_1 = require("../middleware/validators"); // Removed .js extension
const router = express_1.default.Router();
router.get("/:city", validators_1.validateCityName, weatherController_1.getWeatherData);
exports.default = router;
