const { body, validationResult } = require('express-validator')

const validacionCrearPersona = [
    body('nombre')
        .notEmpty().withMessage('El nombre es obligatorio')
        .isString().withMessage('El nombre debe ser un texto')
        .isLength({ min: 3, max: 50 }).withMessage('El nombre debe tener entre 3 y 50 caracteres')
        .matches(/^[a-zA-Z ]*$/).withMessage('El nombre no puede contener simbolos'),

    body('edad')
        .notEmpty().withMessage('La edad es obligatoria')
        .isInt({ min: 0, max: 120 }).withMessage('La edad debe ser un número entero entre 0 y 120'),

    body('email')
        .notEmpty().withMessage('El email es obligatorio')
        .isEmail().withMessage('El email debe ser válido')
        .isLength({ min: 3, max: 50 }).withMessage('El email debe tener entre 3 y 50 caracteres'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) { return res.status(400).json({ errors: errors.array() }); }
        next();
    }
]

module.exports = validacionCrearPersona;