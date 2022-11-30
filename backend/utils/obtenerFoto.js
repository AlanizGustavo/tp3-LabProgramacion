const imgbbUploader = require("imgbb-uploader");

const pedirFoto = async (url) => {
    await imgbbUploader(process.env.IMGBB_API_KEY, url)
        .then((res) => { return res.url; })
}

module.exports = pedirFoto;