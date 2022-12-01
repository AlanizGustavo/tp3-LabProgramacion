const { getAllVehiculos, crearVehiculo, filtrarNombre, getTop3, deleteVehiculo, editVehiculo, getVehiculo, getCantidadVehiculos } = require('../services/serviceVehiculos');
const cargarImagen = require('../utils/cargarImagenSv');
const eliminarImagen = require('../utils/eliminarImagen');

const filtrado = async (req, res) => {
    const cantidad = req.query.cantidad;
    const from = req.query.from;
    if(cantidad && from ){
        await getCantidadVehiculos(cantidad,from)
            .then(response => {res.send(response)})
            .catch(error => {res.status(403).send({message: error, error: 'Error en parametros de filtrado'})});
    }
    else{
        await getAllVehiculos()
        .then(response => {res.send(response)})
        .catch(error => {res.status(403).send({message: error, error: 'No se encontraron vehiculos '})});
    }
};

const posiciones = async (req, res) => {
    await getTop3()
        .then(response => {res.send(response)})
        .catch(error => {res.status(404).send({message: error, error: 'No es posible obtener el top 3 de vehiculos'})});
};

const filtroNombre = async (req, res) => {
    const nombre = req.params.nombre;
    await filtrarNombre(nombre)
        .then(response => {res.send(response)})
        .catch(error => {res.status(404).send({message: error, error: 'No hay coincidencias con el nombre ingresado'})});
}    

const agregarVehiculo = async (req, res) => {
    await cargarImagen(req);
    eliminarImagen(req);
    const data = req.body;
    await crearVehiculo(data)
        .then(response => {res.send(response)})
        .catch(error => {res.status(403).send({message: error, error: 'No es posible incorporar el vechiculo'})});
    
}

const editarVehiculo = async (req, res) => {
    const id = req.params;
    const data = req.body;
    await editVehiculo(id,data)
        .then(response => {res.send(response)})
        .catch(error => {res.status(409).send({message: error, error: 'No es posible editar el vechiculo'})});

}

const eliminarVehiculo = async (req, res) => {
    const id = req.params;
    await deleteVehiculo(id)
        .then(response => {res.send(response)})
        .catch(error => {res.status(403).send({message: error, error: 'No fue posible eliminar el vechiculo'})});
}

const obtenerVehiculo = async (req, res) => {
    const id = req.params;
    await getVehiculo(id)
        .then(response => {res.send(response)})
        .catch(error => {res.status(404).send({message: error, error: 'Vehiculo no encontrado'})});
}



module.exports = {filtrado, posiciones, filtroNombre, agregarVehiculo, editarVehiculo, eliminarVehiculo, obtenerVehiculo};
