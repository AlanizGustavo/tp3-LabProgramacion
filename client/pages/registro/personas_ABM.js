const openPutPersonas = document.getElementById('openPutPersonas');
const modalputPersonas = document.getElementById('modalPutPersonas');
const closePutPersonas = document.getElementById('closePutPersonas');

openPutPersonas.addEventListener('click', () => {
    modalputPersonas.classList.add('show');
    cargarTablaPersonas();
});

closePutPersonas.addEventListener('click', () => {
    modalputPersonas.classList.remove('show');
});

async function cargarTablaPersonas() {
    const tablaPersonas = document.getElementById('tablaPutPersonas');
    let personas = await getPersonas();
    personas.forEach(persona => { tablaPersonas.appendChild(crearFormulario(persona)); });
}

function crearFormulario(persona) {
    let filaEditarPersona = document.createElement('div');
    filaEditarPersona.classList.add('filaABM');
    filaEditarPersona.innerHTML = `
    <input id="nombre-${persona._id}"   name="nombre"   type="text"     value="${persona.nombre}"   class="columnaABM">
    <input id="email-${persona._id}"    name="email"    type="text"     value="${persona.email}"    class="columnaABM">
    <input id="edad-${persona._id}"     name="edad"     type="number"   value="${persona.edad}"     class="columnaABM">
    <input type="button"                value="✏️"      class="columnaABM"                          onclick="editarPersona('${persona._id}')">
    <input type="button"                value="🗑️"      class="columnaABM"                          onclick="eliminarPersona('${persona._id}')">`
    return filaEditarPersona;
}

async function editarPersona(id) {
    let personaJson = {
        nombre: document.getElementById(`nombre-${id}`).value,
        email: document.getElementById(`email-${id}`).value,
        edad: document.getElementById(`edad-${id}`).value
    }

    let response = await fetch(`http://localhost:9000/api/personas/editarPersona/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(personaJson)
    });

    if (response.status == 200) {
        location.reload();
    } else {
        alert('No se pudo editar la persona')
    }
}


async function eliminarPersona(id) {
    if (confirm('¿Está seguro que desea eliminar esta persona?')) {
        await fetch(`http://localhost:9000/api/personas/eliminarPersona/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.status == 200) {
            location.reload();
        } else {
            alert('No se pudo eliminar la persona')
        }
    }
}


async function getPersonas() {
    let personas = await fetch('http://localhost:9000/api/personas');
    let personasJson = await personas.json();
    return personasJson;
}

const openPersona = document.getElementById('registroPersona');
const modal_container_persona = document.getElementById('formularioPersona');
const closePersona = document.getElementById('closePersona');

openPersona.addEventListener('click', () => {
    modal_container_persona.classList.add('show');
    document.getElementById('FormCrearPersona').addEventListener('submit', async (e) => {
        e.preventDefault();

        let personaJson = {
            nombre: document.getElementById('nombreNuevaPersona').value,
            email: document.getElementById('emailNuevaPersona').value,
            edad: document.getElementById('edadNuevaPersona').value
        }
        let response = await fetch(`http://localhost:9000/api/personas/crearPersona`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(personaJson)
        });

        if (response.status == 200) {
            location.reload();
        } else {
            alert('No se pudo crear la persona')
        }
    });
});

closePersona.addEventListener('click', () => {
    modal_container_persona.classList.remove('show');
});



