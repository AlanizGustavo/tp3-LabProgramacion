const modeloVehiculo = require('../models/vehiculosSchema');

const getAllVehiculos = async () => {
    return await modeloVehiculo.find({});
}

const getTop3 = async () => {
    return await modeloVehiculo.find({}).sort({puntaje: 'desc', limit: 3});
}

const crearVehiculo = async (data) => {
    try {
        return await modeloVehiculo.create(data);
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {getAllVehiculos, getTop3, crearVehiculo};