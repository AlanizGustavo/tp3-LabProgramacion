import vehiculos from '../../vehiculos.json' assert {type: 'json'};
let gridPosiciones = document.querySelector('#tabla');
let posiciones = vehiculos.sort((a, b) => {
    return b.puntaje - a.puntaje;
});

let puesto = (index) => {
    let pos = `${index + 1}º `;
    if(index +1 === 1){
        pos += `<svg viewBox="0 0 24 24"><g><path d="M22,0H2A1,1,0,0,0,1,1V6a4,4,0,0,0,4,4h.08A7,7,0,0,0,11,15.92V19h2V15.92A7,7,0,0,0,18.92,10H19a4,4,0,0,0,4-4V1A1,1,0,0,0,22,0ZM3,6V2H5V8A2,2,0,0,1,3,6ZM21,6a2,2,0,0,1-2,2V2h2Z" fill="#F7C325"></path><path data-color="color-2" d="M14,20H10c-5,0-5,4-5,4H19S19,20,14,20Z" fill="#F7C325"></path></g></svg>` ; 
    }
    else if( index +1 === 2 ){
        pos += `<svg viewBox="0 0 24 24"><g><path d="M22,0H2A1,1,0,0,0,1,1V6a4,4,0,0,0,4,4h.08A7,7,0,0,0,11,15.92V19h2V15.92A7,7,0,0,0,18.92,10H19a4,4,0,0,0,4-4V1A1,1,0,0,0,22,0ZM3,6V2H5V8A2,2,0,0,1,3,6ZM21,6a2,2,0,0,1-2,2V2h2Z" fill="#C3CFD9"></path><path data-color="color-2" d="M14,20H10c-5,0-5,4-5,4H19S19,20,14,20Z" fill="#C3CFD9"></path></g></svg>` ; 
    }
    if( index +1 === 3){
        pos += `<svg viewBox="0 0 24 24"><g><path d="M22,0H2A1,1,0,0,0,1,1V6a4,4,0,0,0,4,4h.08A7,7,0,0,0,11,15.92V19h2V15.92A7,7,0,0,0,18.92,10H19a4,4,0,0,0,4-4V1A1,1,0,0,0,22,0ZM3,6V2H5V8A2,2,0,0,1,3,6ZM21,6a2,2,0,0,1-2,2V2h2Z" fill="#E8833A"></path><path data-color="color-2" d="M14,20H10c-5,0-5,4-5,4H19S19,20,14,20Z" fill="#E8833A"></path></g></svg>` ; 
    }
    return pos;
}

posiciones.forEach((element,index) => {
    const card = document.createElement("div");
    card.classList.add("filaTabla");
    card.innerHTML = `  <div class="puesto">
                            <p>${puesto(index)}</p>
                        </div>
                        <div class="contenedorImagen">
                            <img class="img" src="../.${element.foto}">
                        </div>
                        <div>
                            <p class="nombre">${element.piloto}</p>
                            <p class="nombre">${element.copiloto}</p>
                            <p class="nombre">${element.modelo}</p>
                            <p class="nombre">Año: ${element.ano}</p>
                        </div>
                        <div class="contenedorPuntaje"> 
                            <p class="nombre">${element.puntaje}</p>
                        </div>`;
    gridPosiciones.appendChild(card);
});
