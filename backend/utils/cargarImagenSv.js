const imgbbUploader = require("imgbb-uploader");
const carpetaDeImagenes = require("./constantes");

const cargarImagen = async (data) => {
    await imgbbUploader(process.env.IMGBB_API_KEY, carpetaDeImagenes + data.file.filename)
        .then((res) => { data.body.foto = res.url; })
        .catch((err) => { data.foto = "error"; });
}

module.exports = cargarImagen;