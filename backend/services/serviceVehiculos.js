const modeloVehiculo = require('../models/vehiculosSchema');
const mongoose = require('mongoose');

const getAllVehiculos = async () => {
    return await modeloVehiculo.aggregate(
        [
            {
                $lookup:
                    {
                        from: 'personas',
                        localField: 'piloto',
                        foreignField: '_id',
                        as: 'piloto'
                    }
            },
            {
                $unwind:'$piloto'
            }, 
            {
                $lookup:
                    {
                        from: 'personas',
                        localField: 'copiloto',
                        foreignField: '_id',
                        as: 'copiloto'
                    }
            },
            {
                $unwind:'$copiloto'
            }, 
        ]
    ).sort({puntaje: 'desc'})
}

const getTop3 = async () => {
    return await modeloVehiculo.aggregate(
        [
            {
                $lookup:
                {
                    from: 'personas',
                    localField: 'piloto',
                    foreignField: '_id',
                    as: 'piloto'
                }
            },
            {
                $unwind:'$piloto'
            }, 
        ]
    ).sort({puntaje: 'desc'}).limit(3);
}

const crearVehiculo = async (data) => {
    try {
        return await modeloVehiculo.create(data);
    } catch (error) {
        throw new Error(error);
    }
}

const filtrarNombre = async (nombre) => {    
    return await modeloVehiculo.aggregate(
        [
            {
                $lookup:
                {
                    from: 'personas',
                    localField: 'piloto',
                    foreignField: '_id',
                    as: 'piloto'
                }
            },
            {
                $unwind:'$piloto'
            },
            {
                $match: {
                    'piloto.nombre': { $regex: nombre, $options:'i' }
                }
            }  
        ]
    );
    
}

const deleteVehiculo = async (id) => {   
    return await modeloVehiculo.findOneAndDelete({_id: new mongoose.mongo.ObjectId(id)});
    
}

const getVehiculo = async (id) => {   
    return await modeloVehiculo.aggregate(
        [
            {
                $lookup:
                    {
                        from: 'personas',
                        localField: 'piloto',
                        foreignField: '_id',
                        as: 'piloto'
                    }
            },
            {
                $unwind:'$piloto'
            }, 
            {
                $lookup:
                    {
                        from: 'personas',
                        localField: 'copiloto',
                        foreignField: '_id',
                        as: 'copiloto'
                    }
            },
            {
                $unwind:'$copiloto'
            },
            {
                $match: {
                    '_id': new mongoose.mongo.ObjectId(id)
                }
            }   
        ]
    ).sort({puntaje: 'desc'})
}

const editVehiculo = async (id, data) => {   
    return await modeloVehiculo.findByIdAndUpdate({_id: new mongoose.mongo.ObjectId(id)},data);
}

module.exports = {getAllVehiculos, getTop3, crearVehiculo, filtrarNombre, deleteVehiculo, editVehiculo, getVehiculo};