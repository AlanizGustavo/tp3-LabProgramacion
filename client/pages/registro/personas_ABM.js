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
    let div = document.createElement('div');
    div.classList.add('filaABM');
    div.innerHTML = `
    <input id="nombre-${persona._id}"   name="nombre"   type="text"     value="${persona.nombre}"   class="columnaABM">
    <input id="email-${persona._id}"    name="email"    type="text"     value="${persona.email}"    class="columnaABM">
    <input id="edad-${persona._id}"     name="edad"     type="number"   value="${persona.edad}"     class="columnaABM">
    <input type="submit"                value="✏️"      class="columnaABM"                          onclick="editarPersona('${persona._id}')">
    <input type="button"                value="🗑️"      class="columnaABM"                          onclick="eliminarPersona('${persona._id}')">`
    return div;
}

async function editarPersona(id) {

    let personaJson = {
        nombre: document.getElementById(`nombre-${id}`).value,
        email: document.getElementById(`email-${id}`).value,
        edad: document.getElementById(`edad-${id}`).value
    }

    console.log(personaJson);

    let response = await fetch(`http://localhost:9000/api/personas/editarPersona/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(personaJson)
    });

    if (response.status == 200) {
        alert('Persona editada correctamente');
    } else {
        alert('Error al editar persona');
    }

    location.reload();
}

async function getPersonas() {
    let personas = await fetch('http://localhost:9000/api/personas');
    let personasJson = await personas.json();
    console.log(personas.status);
    return personasJson;
}

async function eliminarPersona(id) {
    if (confirm('¿Está seguro que desea eliminar esta persona?')) {
        await fetch(`http://localhost:9000/api/personas/eliminarPersona/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });
        location.reload();
    }
}

function cargaExitosa() {
    alert('Carga exitosa');
    window.location.assign("https://www.google.com");
}