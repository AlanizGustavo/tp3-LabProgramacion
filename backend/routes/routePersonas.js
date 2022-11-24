const express = require('express');
const { controllerPersona, obtenerPersonas, eliminarPersona, editarPersona } = require('../controllers/controllerPersonas');

const router = express.Router();

router.patch('/api/personas/editarPersona/:id', editarPersona);
router.post('/api/personas/crearPersona', controllerPersona);
router.delete('/api/personas/eliminarPersona/:id', eliminarPersona);
router.get('/api/personas', obtenerPersonas)



module.exports = router;