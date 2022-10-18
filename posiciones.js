import vehiculos from './vehiculos.json' assert {type: 'json'};
let gridPosiciones = document.querySelector('#tabla');
let posiciones = vehiculos.sort((a, b) => {
    return b.puntaje - a.puntaje;
});
posiciones.forEach(element => {
    const card = document.createElement("div");
    card.classList.add("filaTabla");
    card.innerHTML = `<div class="contenedorImagen">
                            <img class="img" src="${element.foto}">
                        </div>
                        <div>
                            <p class="nombre">${element.piloto}</p>
                        </div>
                        <div class="contenedorPuntaje"> 
                            <p class="nombre">${element.puntaje}</p>
                        </div>`;
    gridPosiciones.appendChild(card);
});
