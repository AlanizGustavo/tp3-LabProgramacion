const express = require('express');
const {filtrado, posiciones, filtroNombre, vehiculoController} = require('../controllers/controllerVehiculos');

const router = express.Router();

router.post('/api/vehiculos/crearVehiculos', vehiculoController);
router.get('/api/vehiculos', filtrado);
router.get('/api/vehiculos/top3', posiciones);
router.get('/api/vehiculos/:nombre', filtroNombre);


module.exports = router;