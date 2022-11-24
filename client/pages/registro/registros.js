

const openPersona = document.getElementById('registroPersona');
const modal_container_persona = document.getElementById('formularioPersona');
const closePersona = document.getElementById('closePersona');

openPersona.addEventListener('click', () => {
    modal_container_persona.classList.add('show');
});

closePersona.addEventListener('click', () => {
    modal_container_persona.classList.remove('show');
});

const openAuto = document.getElementById('registroAuto');
const modal_container_auto = document.getElementById('formularioAuto');
const closeAuto = document.getElementById('closeAuto');

openAuto.addEventListener('click', () => {
    funcionSearchBox();
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
    console.log(auto);
    console.log(auto.piloto);
    console.log(auto.piloto.nombre);
    document.querySelector('#searchBoxPiloto').setAttribute('value', auto.piloto.nombre);
    document.querySelector('#searchBoxCopiloto').setAttribute('value', auto.copiloto.nombre);
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

async function funcionSearchBox() {
    let searchBox = document.getElementById(("searchBoxPiloto"));

    let listPilotos = document.getElementById("list");
    let all = await fetch("http://localhost:9000/api/personas/");
    let pilotosNombres = await all.json();
    pilotosNombres.forEach(element => {
        let li = document.createElement("li");
        li.textContent = element.nombre;
        li.addEventListener('click', () => {
            searchBox.value = element.nombre;
            li.remove();
            lista.innerHTML = "";
        });
        listPilotos.appendChild(li);
    });

    const filtrar = async () => {
        filtroNombre = searchBox.value.toLowerCase();


        const request = await fetch(`http://localhost:9000/api/vehiculos/${filtroNombre}`);
        const pilotos = await request.json();


        let lista = document.getElementById("list");

        lista.innerHTML = "";
        if (request.status === 200) {
            if (pilotos.length > 0) {
                pilotos.forEach(element => {
                    let li = document.createElement("li");
                    li.textContent = element.piloto.nombre;
                    li.addEventListener('click', () => {
                        searchBox.value = element.piloto.nombre;
                        lista.innerHTML = "";
                    });
                    lista.appendChild(li);
                });
            } else {
                let li = document.createElement("li");
                li.textContent = "No se encontraron resultados";
                lista.appendChild(li);
            }
        } else {
            let li = document.createElement("li");
            li.textContent = "No se encontraron resultados";
            lista.appendChild(li);
        }
    }
    searchBox.addEventListener("keyup", filtrar);
}


