const express = require('express');
const {filtrado, posiciones, filtroNombre} = require('../controllers/vehiculos');


const router = express.Router();

router.get('/api/vehiculos', filtrado);
router.get('/api/vehiculos/top3', posiciones);
router.get('/api/vehiculos/:nombre', filtroNombre);


module.exports = router;