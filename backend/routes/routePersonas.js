const express = require('express');
const { controllerPersona } = require('../controllers/controllerPersonas');
const { validacionPersona } = require('../middleware/validacionPersona');

const router = express.Router();
router.post('/api/personas/crearPersona', validacionPersona, controllerPersona);
router.get('/api/personas/',)
router.get('/api/personas/:nombre',)



module.exports = router;