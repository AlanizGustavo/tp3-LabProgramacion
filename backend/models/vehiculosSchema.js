const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const modeloVehiculo = mongoose.Schema({
    piloto:{
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'persona'
    },
    copiloto:{
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'persona'
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