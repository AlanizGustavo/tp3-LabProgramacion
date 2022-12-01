const express = require('express');
const { filtrado, posiciones, filtroNombre, agregarVehiculo, editarVehiculo, eliminarVehiculo, obtenerVehiculo } = require('../controllers/controllerVehiculos');
const cargaImagen = require('../middleware/cargaImagen');
const validacionAuto = require('../middleware/validacionCrearAuto');
const { validarId, validarNombre } = require('../middleware/validacionIndividuales');

const router = express.Router();

router.post('/api/vehiculos/crearVehiculos', cargaImagen, validacionAuto, agregarVehiculo);
router.delete('/api/vehiculos/eliminarVehiculo/:id', validarId, eliminarVehiculo);
router.post('/api/vehiculos/editarVehiculo/:id', cargaImagen, validacionAuto, editarVehiculo)
router.get('/api/vehiculos', filtrado);
router.get('/api/vehiculos/top3', posiciones);
router.get('/api/vehiculos/:nombre', validarNombre, filtroNombre);
router.get('/api/vehiculos/buscarVehiculo/:id', validarId, obtenerVehiculo);


module.exports = router;