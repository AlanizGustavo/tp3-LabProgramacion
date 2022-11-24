const modeloPersona = require('../models/personaSchema');
const { crearPersona, getPersona, deletePersona, editPersona } = require('../services/servicePersona');

const controllerPersona = async (req, res) => {
    const data = req.body;
    res.send(await crearPersona(data));
}

const obtenerPersonas = async (req, res) => {
    res.send(await getPersona());
}

const eliminarPersona = async (req, res) => {
    const id = req.params;
    res.send(await deletePersona(id));
}

const editarPersona = async (req, res) => {
    const id = req.params;
    console.log(id);
    const data = req.body;
    res.send(await editPersona(id, data));
}



module.exports = { controllerPersona, obtenerPersonas, eliminarPersona, editarPersona };