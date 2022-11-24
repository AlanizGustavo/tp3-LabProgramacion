const { body, validationResult } = require('express-validator')

const validacionPersona = [
    body('nombre').isLength({ min: 3 }).withMessage('El nombre debe tener al menos 3 caracteres'),
    body('edad').isInt({ min: 18, max: 99 }).withMessage('La edad debe ser un número entre 18 y 99'),
    body('email').isEmail().withMessage('El email debe ser válido'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) { return res.status(400).json({ errors: errors.array() }); }
        next();
    }
]
module.exports = { validacionPersona } 