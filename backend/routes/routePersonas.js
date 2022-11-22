const express = require('express');
const { controllerPersona } = require('../controllers/controllerPersonas');

const router = express.Router();

router.post('/api/personas/crearPersona', controllerPersona);


module.exports = router;