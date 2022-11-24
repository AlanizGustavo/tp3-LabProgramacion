const { body, validationResult } = require('express-validator')

const validacionAuto = [
    body('marca').isLength({ min: 3 }).withMessage('La marca debe tener al menos 3 caracteres'),
    body('modelo').isLength({ min: 3 }).withMessage('El modelo debe tener al menos 3 caracteres'),
    body('anio').isInt({ min: 1900, max: 2021 }).withMessage('El año debe ser un número entre 1900 y 2021'),
    body('puntaje').isInt({ min: 0, max: 1000 }).withMessage('El puntaje debe ser un número entre 0 y 1000'),
    body('foto').isLength({ min: 3 }).withMessage('La ruta de la foto debe tener al menos 3 caracteres'),
    body('piloto').exists().withMessage('El piloto debe existir'),
    body('copiloto').exists().withMessage('El copiloto debe existir'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) { return res.status(400).json({ errors: errors.array() }); }
        next();
    }
]
module.exports = validacionAuto;