const { param, validationResult } = require('express-validator');

exports.validateCityName = [
    param('city').isString().withMessage('City name must be a string.'),
    param('city').isIn(['london', 'dublin']).withMessage('City name must be either London or Dublin.'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
