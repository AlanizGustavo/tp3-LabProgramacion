//const vehiculos = require('../../vehiculos.json');
const filtrar = require('../utils/sortFunctions');
const modeloVehiculo = require('../models/vehiculosSchema');
const { getAllVehiculos, crearVehiculo } = require('../services/serviceVehiculos');


const filtrado = async (req, res) => {
    console.log(await getAllVehiculos());
    res.send(filtrar(await getAllVehiculos(), 'puntaje'));
};

const posiciones = async (req, res) => {
    res.send(filtrar(await getAllVehiculos(), 'puntaje').slice(0, 3));
};

const filtroNombre = (req, res) => {
    const nombre = req.params.nombre;
    res.send(vehiculos.filter(vehiculo => {
        return vehiculo.piloto.toLowerCase().includes(nombre);
    }))

};

const vehiculoController = async (req, res) => {
    const data = req.body;
    res.send(await crearVehiculo(data));

}



module.exports = { filtrado, posiciones, filtroNombre, vehiculoController };