const express = require('express');
const { controllerPersona, obtenerPersonas, eliminarPersona } = require('../controllers/controllerPersonas');
const { validacionPersona } = require('../middleware/validacionPersona');

const router = express.Router();

router.post('/api/personas/crearPersona',validacionPersona, controllerPersona);
router.delete('/api/personas/eliminarPersona/:id', eliminarPersona);
router.get('/api/personas', obtenerPersonas)



module.exports = router;