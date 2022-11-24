const modeloPersona = require('../models/personaSchema');
const { crearPersona, getPersona, deletePersona } = require('../services/servicePersona');

const controllerPersona = async (req, res) => {
    const data = req.body;
    res.send(await crearPersona(data));
}

const obtenerPersonas = async (req,res) => {
    res.send(await getPersona());
}

const eliminarPersona = async (req,res) => {
    const id = req.params;
    res.send(await deletePersona(id));
}


module.exports = {controllerPersona, obtenerPersonas, eliminarPersona};