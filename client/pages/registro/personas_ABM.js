const openPutPersonas = document.getElementById('openPutPersonas');
const modalputPersonas = document.getElementById('modalPutPersonas');
const closePutPersonas = document.getElementById('closePutPersonas');

openPutPersonas.addEventListener('click', () => {
    modalputPersonas.classList.add('show');
    cargarTablaPersonas();
    let searchBox = document.getElementById(("buscarPersona"));
    funcionSearchBox(searchBox);
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
    let form = document.createElement('form');
    form.setAttribute('method', 'PATCH');
    form.setAttribute('action', `http://localhost:9000/api/personas/actualizarPersona/${persona._id}`);
    form.classList.add('filaABM');
    form.innerHTML = `
        <input type="text" value="${persona.nombre}" class="columnaABM">
        <input type="text" value="${persona.email}" class="columnaABM">
        <input type="number" value="${persona.edad}" class="columnaABM">
        <input type="submit" value="✏️" class="columnaABM">
        <input type="button" value="🗑️" class="columnaABM" onclick="eliminarPersona('${persona._id}')">`
    return form;
}

async function getPersonas() {
    let personas = await fetch('http://localhost:9000/api/personas');
    let personasJson = await personas.json();
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