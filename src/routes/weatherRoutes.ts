import { param, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export const validateCityName = [
    param('city').isString().withMessage('City name must be a string.'),
    param('city').isIn(['london', 'dublin']).withMessage('City name must be either London or Dublin.'),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
