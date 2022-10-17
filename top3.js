import vehiculos from './vehiculos.json' assert {type: 'json'};
let gridPosiciones = document.querySelector('#grid');
let posiciones = vehiculos.sort((a, b) => {
    return b.puntaje - a.puntaje;
});

let top3 = posiciones.slice(0, 3);
let i = 1;
for (let vehiculo of top3) {
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML =
        `<div class="cardTop3">
        <h3>${i}°</h3>       
        <div class="contenedorTitulo">
            <p class="nombre">${element.piloto}</p>
        </div>
        <div class="contenedorImagen">
            <img class="img" src="${element.foto}">
        </div>
        </div>`;
    gridPosiciones.appendChild(card);
    i++;
}
