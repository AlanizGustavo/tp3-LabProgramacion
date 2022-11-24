const openPersona = document.getElementById('registroPersona');
const modal_container_persona = document.getElementById('formularioPersona');
const closePersona = document.getElementById('closePersona');

const openAuto = document.getElementById('registroAuto');
const modal_container_auto = document.getElementById('formularioAuto');
const closeAuto = document.getElementById('closeAuto');

openPersona.addEventListener('click', () => {
    modal_container_persona.classList.add('show');
});

closePersona.addEventListener('click', () => {
    modal_container_persona.classList.remove('show');
});

function abrirModalAuto() {

}
openAuto.addEventListener('click', () => {
    modal_container_auto.classList.add('show');
});

closeAuto.addEventListener('click', () => {
    modal_container_auto.classList.remove('show');
});

async function editarAuto(id) {
    // Cargo valores actuales en el formulario
    const auto = await getAuto(id);
    document.querySelector('#marca').setAttribute('value', auto.marca);
    document.querySelector('#modelo').setAttribute('value', auto.modelo);
    document.querySelector('#anio').setAttribute('value', auto.anio);
    document.querySelector('#piloto').setAttribute('value', auto.piloto.nombre);
    document.querySelector('#copiloto').setAttribute('value', auto.copiloto.nombre);
    document.querySelector('#puntaje').setAttribute('value', auto.puntaje);
    document.querySelector('#foto').setAttribute('value', auto.foto);

    // Boton de cerrar el formulario
    document.querySelector('#closeAuto').addEventListener('click', () => {
        document.querySelector('#formularioEditarAuto').classList.remove('show');
    });

    // Abro el formulario
    document.querySelector('#formularioAuto').classList.add('show');
    document.querySelector('#formularioAuto').setAttribute('method', 'PATCH');
    document.querySelector('#formularioAuto').setAttribute('action', `/api/vehiculos/editarVehiculo/${id}`);
}

async function getAuto(id) {
    const response = await fetch(`http://localhost:9000/api/vehiculos/buscarVehiculo/${id}`);
    const auto = await response.json();
    return auto[0];
}

async function eliminarAuto(id) {
    await fetch(`http://localhost:9000/api/vehiculos/eliminarVehiculo/${id}`,
        {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });
}