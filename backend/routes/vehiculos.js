const express = require('express');
const {filtrado, posiciones, filtroNombre, crearVehiculo} = require('../controllers/vehiculos');

const router = express.Router();

router.post('/api/crearVehiculos', crearVehiculo);
router.get('/api/vehiculos', filtrado);
router.get('/api/vehiculos/top3', posiciones);
router.get('/api/vehiculos/:nombre', filtroNombre);


module.exports = router;