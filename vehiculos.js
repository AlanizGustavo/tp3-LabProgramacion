import vehiculos from './vehiculos.json' assert {type: 'json'};
let grid = document.querySelector('#grid');

vehiculos.forEach(element => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<div class="contenedorTitulo">
    <p class="nombre">${element.piloto}</p>
    </div>
    <div class="contenedorImagen">
    <img class="img" src="${element.foto}">
    </div>`;
    grid.appendChild(card);
});