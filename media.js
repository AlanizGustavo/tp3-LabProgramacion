import vehiculos from './vehiculos.json' assert {type: 'json'};

/* Creando una grid media area */
const grid = document.querySelector('#media-grid');

/* Funcion que toma la foto de cada vehiculo */
let cargaInicial = function () {
    vehiculos.forEach(element => {
        agregarFoto(element);
    })
}

let agregarFoto = function (element) {
    const card = document.createElement("div");
    card.classList.add("mediaCard");
    card.innerHTML = `<img class="media-item" src="${element.foto}">`;
    grid.appendChild(card);
}

cargaInicial();