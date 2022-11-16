//import vehiculos from '../vehiculos.json' assert {type: 'json'};
let gridPosiciones = document.querySelector('#grid');

const url = 'http://localhost:9000/api/vehiculos/top3';

const top3 = async () => {
    try {
        const request = await fetch(url);
        const vehiculos = await request.json();

        vehiculos.forEach((vehiculo, i) => {
            let espacioPosicion = document.createElement('div');
            espacioPosicion.classList.add('espacioPosicion');
            espacioPosicion.innerHTML=
                `<h3>${i+1}°</h3>
                <div class="cardTop3">
                    <div class="contenedorTitulo">
                        <p class="nombre">${vehiculo.piloto}</p>
                    </div>
                    <div class="contenedorImagen">
                        <img class="img" src="${vehiculo.foto}">
                    </div>
                </div>`;
            gridPosiciones.appendChild(espacioPosicion);
            
        });

    } catch (error) {
        throw Error(error);
    }
}
top3();

// for (let i = 0; i<3; i++) {
//     let espacioPosicion = document.createElement('div');
//     espacioPosicion.classList.add('espacioPosicion');
//     espacioPosicion.innerHTML=
//             `<h3>${i+1}°</h3>
//             <div class="cardTop3">
//                 <div class="contenedorTitulo">
//                     <p class="nombre">${posiciones[i].piloto}</p>
//                 </div>
//                 <div class="contenedorImagen">
//                     <img class="img" src="${posiciones[i].foto}">
//                 </div>
//             </div>`;
//     gridPosiciones.appendChild(espacioPosicion);
// }

