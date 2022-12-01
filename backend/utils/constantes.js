const fs = require('fs');

const root = fs.realpathSync('./client/assets/img/');

let carpetaDeImagenes = root.replace(/\\/g, "/");
carpetaDeImagenes += "/";

module.exports = carpetaDeImagenes;