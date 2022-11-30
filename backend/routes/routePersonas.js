const express = require('express');
const { controllerPersona, obtenerPersonas, eliminarPersona, editarPersona } = require('../controllers/controllerPersonas');

const router = express.Router();

router.patch('/api/personas/editarPersona/:id', editarPersona);         /* datos ingresados exv */
router.post('/api/personas/crearPersona', controllerPersona);           /* mismo */
router.delete('/api/personas/eliminarPersona/:id', eliminarPersona);    /* id correcto */
router.get('/api/personas', obtenerPersonas)



module.exports = router;