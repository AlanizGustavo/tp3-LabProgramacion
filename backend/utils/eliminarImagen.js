const fs = require('fs');
const carpetaDeImagenes = require('./constantes');
const eliminarImagen = (data) => {
    fs.unlink(carpetaDeImagenes + data.file.filename, (err => { if (err) { console.log(err); } }));
}
module.exports = eliminarImagen;
