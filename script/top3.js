import vehiculos from '../vehiculos.json' assert {type: 'json'};
let gridPosiciones = document.querySelector('#grid');
let posiciones = vehiculos.sort((a, b) => {
    return b.puntaje - a.puntaje;
});

for (let i = 0; i<3; i++) {
    let espacioPosicion = document.createElement('div');
    espacioPosicion.classList.add('espacioPosicion');
    espacioPosicion.innerHTML=
            `<h3>${i+1}°</h3>
            <div class="cardTop3">
                <div class="contenedorTitulo">
                    <p class="nombre">${posiciones[i].piloto}</p>
                </div>
                <div class="contenedorImagen">
                    <img class="img" src="${posiciones[i].foto}">
                </div>
            </div>`;
    gridPosiciones.appendChild(espacioPosicion);
}
