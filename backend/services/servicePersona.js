const modeloPersona = require('../models/personaSchema');

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


module.exports = {crearPersona, getPersona, deletePersona};