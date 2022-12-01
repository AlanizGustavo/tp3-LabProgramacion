const { param, query } = require('express-validator')

const validarId = [
    param('id')
        .notEmpty().withMessage('El id es obligatorio')
        .isString().withMessage('El id debe ser un texto')
        .isLength({ min: 24, max: 24 }).withMessage('El id debe tener 24 caracteres'),

    (req, res, next) => {
        const errors = query(req);
        if (!errors.isEmpty()) { return res.status(400).json({ errors: errors.array() }); }
        next();
    }
]

const validarNombre = [
    param('nombre')
        .notEmpty().withMessage('El nombre es obligatorio')
        .isString().withMessage('El nombre debe ser un texto')
        .isLength({ min: 3, max: 50 }).withMessage('El nombre debe tener entre 3 y 50 caracteres')
        .matches(/^[a-zA-Z ]*$/).withMessage('El nombre no puede contener simbolos'),

    (req, res, next) => {
        const errors = query(req);
        if (!errors.isEmpty()) { return res.status(400).json({ errors: errors.array() }); }
        next();
    }
]

module.exports = { validarId, validarNombre };