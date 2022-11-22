const modeloPersona = require('../models/personaSchema');
const { crearPersona } = require('../services/servicePersona');

const controllerPersona = async (req, res) => {
    const data = req.body;
    res.send(await crearPersona(data));
}

module.exports = {controllerPersona};