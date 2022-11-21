const vehiculos = require('../../vehiculos.json');
const filtrar = require('../utils/sortFunctions');


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



module.exports = {filtrado, posiciones, filtroNombre};