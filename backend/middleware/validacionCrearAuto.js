const { body, validationResult } = require('express-validator')

const validacionCrearAuto = [
    body('marca')
        .notEmpty().withMessage('La marca es obligatoria')
        .isString().withMessage('La marca debe ser un texto')
        .isLength({ min: 2, max: 50 }).withMessage('La marca debe tener al menos 2 caracteres')
        .matches(/^[a-zA-Z ]*$/).withMessage('La marca no puede contener simbolos'),

    body('modelo')
        .notEmpty().withMessage('El modelo es obligatorio')
        .isString().withMessage('El modelo debe ser un texto')
        .isLength({ min: 1, max: 50 }).withMessage('El modelo debe tener al menos 1 caracter'),

    body('anio')
        .notEmpty().withMessage('El año es obligatorio')
        .isInt({ min: 1850, max: 2000 }).withMessage('El año debe ser un número entero entre 1850 y 2000')
        .isLength({ min: 4, max: 4 }).withMessage('El año debe tener 4 caracteres'),

    body('puntaje')
        .notEmpty().withMessage('El puntaje es obligatorio')
        .isInt({ min: 0, max: 10000 }).withMessage('El puntaje debe ser un número entero entre 0 y 10000'),

    body('piloto')
        .notEmpty().withMessage('El piloto es obligatorio')
        .isString().withMessage('El piloto debe ser un texto')
        .isLength({ min: 24, max: 24 }).withMessage('El piloto debe tener 24 caracteres'),

    body('copiloto')
        .notEmpty().withMessage('El piloto es obligatorio')
        .isString().withMessage('El piloto debe ser un texto')
        .isLength({ min: 24, max: 24 }).withMessage('El piloto debe tener 24 caracteres'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) { return res.status(400).json({ errors: errors.array() }); }
        next();
    }
]

module.exports = validacionCrearAuto;