const express = require('express');
const { controllerPersona } = require('../controllers/controllerPersonas');

const router = express.Router();

router.post('/api/personas/crearPersona', controllerPersona);
router.get('/api/personas/',)
router.get('/api/personas/:nombre',)



module.exports = router;