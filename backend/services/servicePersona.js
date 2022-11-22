const modeloPersona = require('../models/personaSchema');

const crearPersona = async (data) => {
    try {
        return await modeloPersona.create(data);
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {crearPersona};