const express = require('express');
const { filtrado, posiciones, filtroNombre, agregarVehiculo, editarVehiculo, eliminarVehiculo, obtenerVehiculo } = require('../controllers/controllerVehiculos');
const cargaImagen = require('../middleware/cargaImagen');
const validacionAuto = require('../middleware/validacionAuto');

const router = express.Router();

router.post('/api/vehiculos/crearVehiculos', cargaImagen, validacionAuto, agregarVehiculo);
router.delete('/api/vehiculos/eliminarVehiculo/:id', eliminarVehiculo);
router.patch('/api/vehiculos/editarVehiculo/:id', editarVehiculo)
router.get('/api/vehiculos', filtrado);
router.get('/api/vehiculos/top3', posiciones);
router.get('/api/vehiculos/:nombre', filtroNombre);
router.get('/api/vehiculos/buscarVehiculo/:id', obtenerVehiculo);


module.exports = router;