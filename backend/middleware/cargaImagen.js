const multer = require('multer');

const ACCEPTEDMIMETYPES = ['image/png', 'image/jpg', 'image/jpeg'];

const path = require('path');
const multerUpload = multer({
    storage: multer.diskStorage({
        destination: './client/assets/img',
        filename: (req, file, cb) => {
            const fileExtension = path.extname(file.originalname);
            const fileName = file.originalname.split(fileExtension)[0];
            cb(null, `${fileName}-${Date.now()}${fileExtension}`);
        }
    }),
    fileFilter: (req, file, cb) => {
        if (ACCEPTEDMIMETYPES.includes(file.mimetype)) { cb(null, true) }
        else { cb(new Error(`Solo se aceptan formatos: + ${ACCEPTEDMIMETYPES.join(' ')}`)) }
    },
    limits: { fileSize: 10000000 }
});

let cargaImagen = multerUpload.single('foto');

module.exports = cargaImagen;