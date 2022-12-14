const modeloPersona = require('../models/personaSchema');
const mongoose = require('mongoose');

const crearPersona = async (data) => {
    return await modeloPersona.create(data);
}

const getPersona = async (data) => {
    return await modeloPersona.find({});
}

const deletePersona = async (id) => {   
    return await modeloPersona.findOneAndDelete({_id: new mongoose.mongo.ObjectId(id)});
}

const editPersona = async (id, data) => {   
    return await modeloPersona.findByIdAndUpdate({_id: new mongoose.mongo.ObjectId(id)},data);
}

module.exports = {crearPersona, getPersona, deletePersona, editPersona};