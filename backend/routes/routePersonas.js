const express = require('express');
const { controllerPersona, obtenerPersonas, eliminarPersona } = require('../controllers/controllerPersonas');

const router = express.Router();

router.post('/api/personas/crearPersona', controllerPersona);
router.delete('/api/personas/eliminarPersona/:id', eliminarPersona);
router.get('/api/personas', obtenerPersonas)

module.exports = router;