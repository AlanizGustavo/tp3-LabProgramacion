const express = require('express');
const { controllerPersona, obtenerPersonas, eliminarPersona, editarPersona } = require('../controllers/controllerPersonas');
const validacionCrearPersona = require('../middleware/validacionCrearPersona');
const { validarId } = require('../middleware/validacionIndividuales');

const router = express.Router();

router.patch('/api/personas/editarPersona/:id', validarId, editarPersona);
router.post('/api/personas/crearPersona', validacionCrearPersona, controllerPersona);
router.delete('/api/personas/eliminarPersona/:id', validarId, eliminarPersona);
router.get('/api/personas', obtenerPersonas)



module.exports = router;