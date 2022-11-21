const mongoose = require('mongoose');

const modeloVehiculo = mongoose.Schema({
    piloto:{
        type: String,
        required: true
    },
    copiloto:{
        type: String,
        required: true
    },
    marca: { 
        type: String, 
        required: true 
    },
    modelo: { 
        type: String, 
        required: true 
    },
    anio: { 
        type: Number, 
        required: true 
    },
    foto:{
        type: String,
        required: true
    },
    puntaje: {
        type: Number,
        required: true    
    }
});

module.exports = mongoose.model('vehiculos', modeloVehiculo);