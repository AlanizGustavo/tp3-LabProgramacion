const modeloPersona = require('../models/personaSchema');
const mongoose = require('mongoose');

const crearPersona = async (data) => {
    try {
        return await modeloPersona.create(data);
    } catch (error) {
        throw new Error(error);
    }
}

const getPersona = async (data) => {
    try {
        return await modeloPersona.find({});
    } catch (error) {
        throw new Error(error);
    }
}

const deletePersona = async (id) => {   
    return await modeloPersona.findOneAndDelete({_id: new mongoose.mongo.ObjectId(id)});
}

const editPersona = async (id, data) => {   
    return await modeloPersona.findByIdAndUpdate({_id: new mongoose.mongo.ObjectId(id)},data);
}

module.exports = {crearPersona, getPersona, deletePersona, editPersona};