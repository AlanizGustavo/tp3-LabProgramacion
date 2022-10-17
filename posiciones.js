import vehiculos from './vehiculos.json' assert {type: 'json'};
let gridPosiciones = document.querySelector('#grid');
let posiciones = vehiculos.sort((a, b) => {
    return b.puntaje - a.puntaje;
});
posiciones.forEach(element => {
    const card = document.createElement("div");
    card.classList.add("cardTabla");
    card.innerHTML = `<div class="contenedorTitulo">
                            <img class="img" src="${element.foto}">
                        </div>
                        <div class="contenedorTitulo">
                            <p class="nombre">${element.piloto}</p>
                        </div>
                        <div class="contenedorPuntaje"> 
                            <p class="nombre">${element.puntaje}</p>
                        </div>`;
    gridPosiciones.appendChild(card);
});

let gridTop3 = document.querySelector('#gridTop3');
let top3 = posiciones.slice(0, 3);

top3.forEach(element => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML =
        `<div class="contenedorTitulo">
            <p class="nombre">${element.piloto}</p>
        </div>
        <div class="contenedorImagen">
            <img class="img" src="${element.foto}">
        </div>`;
    gridTop3.appendChild(card);
});

console.log(gridTop3);