const {getAllVehiculos, crearVehiculo, filtrarNombre, getTop3, deleteVehiculo, editVehiculo, getVehiculo} = require('../services/serviceVehiculos');


const filtrado = async (req, res) => {
    res.send(await getAllVehiculos());
};

const posiciones = async (req, res) => {
    res.send(await getTop3());
};

const filtroNombre = async (req, res) => {
    const nombre = req.params.nombre;
    res.send( await filtrarNombre(nombre));
}    

const agregarVehiculo = async (req, res) => {
    const data = req.body;
    res.send(await crearVehiculo(data));

}

const editarVehiculo = async (req, res) => {
    const id = req.params;
    const data = req.body;
    res.send(await editVehiculo(id,data));

}

const eliminarVehiculo = async (req, res) => {
    const id = req.params;
    res.send(await deleteVehiculo(id));
}

const obtenerVehiculo = async (req, res) => {
    const id = req.params;
    res.send(await getVehiculo(id));
}



module.exports = {filtrado, posiciones, filtroNombre, agregarVehiculo, editarVehiculo, eliminarVehiculo, obtenerVehiculo};
