const mongoose = require('mongoose');

const modeloPersona = mongoose.Schema({
    nombre: { 
        type: String, 
        required: true 
    },
    edad: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    }
});

module.exports = mongoose.model('persona', modeloPersona);