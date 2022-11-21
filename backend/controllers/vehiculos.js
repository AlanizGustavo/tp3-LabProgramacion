const vehiculos = require('../../vehiculos.json');
const filtrar = require('../utils/sortFunctions');
const modeloVehiculo = require('../models/vehiculosSchema');


const filtrado = (req, res) => {
    res.send(filtrar(vehiculos, 'puntaje'));
};

const posiciones = (req, res) => {
    res.send(filtrar(vehiculos, 'puntaje').slice(0,3));
};

const filtroNombre = (req, res) => {
    const nombre = req.params.nombre;
    res.send(vehiculos.filter( vehiculo => {
        return vehiculo.piloto.toLowerCase().includes(nombre);
    }))
    
};

const crearVehiculo = (req, res) => {
    const data = req.body;
    modeloVehiculo.create(data, (err, docs) => {
        res.send({data: docs})
    })
}



module.exports = {filtrado, posiciones, filtroNombre, crearVehiculo};