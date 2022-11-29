const { response } = require('express');
const modeloPersona = require('../models/personaSchema');
const { crearPersona, getPersona, deletePersona, editPersona } = require('../services/servicePersona');

const controllerPersona = async (req, res) => {
    const data = req.body;
    await crearPersona(data)
        .then(response => {res.send(response)})
        .catch(error => {res.status(403).send({message: error, error: 'El Email ingresado pertenece a un piloto'})});
}

const obtenerPersonas = async (req,res) => {
    await getPersona()
        .then(response => {res.send(response)})
        .catch(error => {res.status(404).send({message: error, error: 'No se encontraron personas'})});
}

const eliminarPersona = async (req,res) => {
    const id = req.params;
    await deletePersona(id)
        .then(response => {res.send(response)})
        .catch(error => {res.status(404).send({message: error, error: 'No Fue posible eliminar persona'})});
}

const editarPersona = async (req,res) => {
    const id = req.params;
    const data = req.body;
    await editPersona(id,data)
        .then(response => {res.send(response)})
        .catch(error => {res.status(409).send({message: error, error: 'No fue posible editar personas'})});
}



module.exports = {controllerPersona, obtenerPersonas, eliminarPersona, editarPersona};