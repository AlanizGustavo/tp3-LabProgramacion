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
    div.id = persona._id; //se me ocurre poner algo asi y que cuando se haga submit se le coloque el id asi trae la info nueva
    div.innerHTML = `
    <input name="nombre" type="text" value="${persona.nombre}" class="columnaABM">
    <input name="email" type="text" value="${persona.email}" class="columnaABM">
    <input name="edad" type="number" value="${persona.edad}" class="columnaABM">
    <input type="submit" value="✏️" class="columnaABM" onclick="editarPersona
    ('${persona._id}','${persona.nombre}','${persona.email}',${persona.edad})">
    <input type="button" value="🗑️" class="columnaABM" onclick="eliminarPersona('${persona._id}')">`
    console.log(persona._id);
    console.log(persona.nombre);
    console.log(persona.email);
    console.log(persona.edad);
    return div;
}

async function editarPersona(id, nombre, email, edad) {
    /* FORM SOLO SIRVE PARA GET Y POST https://stackoverflow.com/questions/59554421/how-perform-patch-request-from-html-form-using-nodejs */
    /* HAY QUE VER COMO TRAER LOS DATOS ACTUALIZADOS POR QUE SI LOS MANDO ASI NO SE RECIBE LO QUE SE INGRESA */
    let personaJson = { nombre: nombre, email: email, edad: 33 }
    console.log(personaJson);
    let response = await fetch(`http://localhost:9000/api/personas/editarPersona/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(personaJson)
    });
    console.log(response.status);
    let data = await response.json();
    console.log(data);
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