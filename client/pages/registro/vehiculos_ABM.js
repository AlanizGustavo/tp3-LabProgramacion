const openAuto = document.getElementById('registroAuto');
const modal_container_auto = document.getElementById('formularioAuto');
const closeAuto = document.getElementById('closeAuto');

openAuto.addEventListener('click', async () => {
    modal_container_auto.classList.add('show');
    let listaPilotos = document.getElementById('pilotoDisponible');
    await mostrarPilotos(listaPilotos);
    let listaCopilotos = document.getElementById('copilotoDisponible');
    await mostrarPilotos(listaCopilotos);
});

closeAuto.addEventListener('click', () => {
    modal_container_auto.classList.remove('show');
});

const openPersona = document.getElementById('registroPersona');
const modal_container_persona = document.getElementById('formularioPersona');
const closePersona = document.getElementById('closePersona');

openPersona.addEventListener('click', () => {
    modal_container_persona.classList.add('show');
});

closePersona.addEventListener('click', () => {
    modal_container_persona.classList.remove('show');
});

async function editarAuto(id) {
    const auto = await getAuto(id);
    document.querySelector('#marca').setAttribute('value', auto.marca);
    document.querySelector('#modelo').setAttribute('value', auto.modelo);
    document.querySelector('#anio').setAttribute('value', auto.anio);
    document.querySelector('#searchBoxPiloto').setAttribute('value', auto.piloto.nombre);
    document.querySelector('#searchBoxCopiloto').setAttribute('value', auto.copiloto.nombre);
    document.querySelector('#puntaje').setAttribute('value', auto.puntaje);
    document.querySelector('#foto').setAttribute('value', auto.foto);

    document.querySelector('#closeAuto').addEventListener('click', () => {
        document.querySelector('#formularioEditarAuto').classList.remove('show');
    });

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


async function mostrarPilotos(listaPilotos) {
    let pilotos = await getPilotos();
    pilotos.forEach(async element => {
        listaPilotos.appendChild(crearOpcion(element.nombre, element._id));
    });
}

function crearOpcion(nombre, id) {
    let opcion = document.createElement('option');
    opcion.setAttribute('value', `${id}`);
    opcion.innerHTML = nombre;
    return opcion;
}

async function getPilotos() {
    const response = await fetch('http://localhost:9000/api/personas');
    const pilotos = await response.json();
    return pilotos;
}