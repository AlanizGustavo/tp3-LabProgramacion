const modal_container_auto = document.getElementById('formularioAuto');

async function crearAuto() {
    modal_container_auto.classList.add('show');
    await mostrarPilotos(document.getElementById('piloto'));
    await mostrarPilotos(document.getElementById('copiloto'));
}

async function editarAuto(id) {
    modal_container_auto.classList.add('show');
    mostrarCamposConDatos(await getAuto(id));
    await mostrarPilotos(document.getElementById('piloto'));
    await mostrarPilotos(document.getElementById('copiloto'));
    document.getElementById('FormCrearAuto').addEventListener('submit', async (e) => {
        e.preventDefault();
        let autoJson = {
            marca: document.getElementById('marca').value,
            modelo: document.getElementById('modelo').value,
            anio: document.getElementById('anio').value,
            piloto: document.getElementById('piloto').value,
            copiloto: document.getElementById('copiloto').value,
            puntaje: document.getElementById('puntaje').value,
            foto: document.getElementById('foto').value
        }
        let response = await fetch(`http://localhost:9000/api/vehiculos/editarVehiculo/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(autoJson)
        });

        if (response.status == 200) {
            location.reload();
        } else {
            alert('No se pudo editar el auto')
        }
    })
}


document.getElementById('closeAuto').addEventListener('click', () => {
    modal_container_auto.classList.remove('show');
});


async function mostrarCamposConDatos(auto) {
    document.querySelector('#marca').setAttribute('value', auto.marca);
    document.querySelector('#modelo').setAttribute('value', auto.modelo);
    document.querySelector('#anio').setAttribute('value', auto.anio);
    document.querySelector('#piloto').setAttribute('value', auto.piloto.nombre);
    document.querySelector('#copiloto').setAttribute('value', auto.copiloto.nombre);
    document.querySelector('#puntaje').setAttribute('value', auto.puntaje);
    document.querySelector('#foto').setAttribute('value', auto.foto);
}
async function getAuto(id) {
    const response = await fetch(`http://localhost:9000/api/vehiculos/buscarVehiculo/${id}`);
    const auto = await response.json();
    return auto[0];
}

async function eliminarAuto(id) {
    if (confirm('¿Está seguro que desea eliminar este vehiculo?')) {
        await fetch(`http://localhost:9000/api/vehiculos/eliminarVehiculo/${id}`,
            {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            });
    }

    location.reload();
}


async function mostrarPilotos(listaPilotos) {
    let pilotos = await getPilotos();
    pilotos.forEach(async element => { listaPilotos.appendChild(crearOpcion(element.nombre, element._id)); });
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