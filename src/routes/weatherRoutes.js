"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCityName = void 0;
const express_validator_1 = require("express-validator");
exports.validateCityName = [
    (0, express_validator_1.param)('city').isString().withMessage('City name must be a string.'),
    (0, express_validator_1.param)('city').isIn(['london', 'dublin']).withMessage('City name must be either London or Dublin.'),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
