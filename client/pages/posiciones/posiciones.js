let gridPosiciones = document.querySelector('#filas');
const btnSig = document.querySelector(".btn-sig");
const btnAnt = document.querySelector(".btn-ant");

btnAnt.disabled = true;
btnAnt.classList.add("desactivado")

let filasXPagina = 10;
let pagActual = 0;


const request = await fetch(`http://localhost:9000/api/vehiculos?cantidad=${filasXPagina}&from=0`);
const posiciones = await request.json();

const totalPaginas = Math.floor(posiciones.totalElements / filasXPagina);

let puesto = (index) => {
    let pos = `${index + 1 + pagActual*filasXPagina}º `;
    let esPrimeraPagina = pagActual === 0;
    if(index +1 === 1 && esPrimeraPagina){
        pos += `<svg viewBox="0 0 24 24"><g><path d="M22,0H2A1,1,0,0,0,1,1V6a4,4,0,0,0,4,4h.08A7,7,0,0,0,11,15.92V19h2V15.92A7,7,0,0,0,18.92,10H19a4,4,0,0,0,4-4V1A1,1,0,0,0,22,0ZM3,6V2H5V8A2,2,0,0,1,3,6ZM21,6a2,2,0,0,1-2,2V2h2Z" fill="#F7C325"></path><path data-color="color-2" d="M14,20H10c-5,0-5,4-5,4H19S19,20,14,20Z" fill="#F7C325"></path></g></svg>` ; 
    }
    else if( index +1 === 2 && esPrimeraPagina){
        pos += `<svg viewBox="0 0 24 24"><g><path d="M22,0H2A1,1,0,0,0,1,1V6a4,4,0,0,0,4,4h.08A7,7,0,0,0,11,15.92V19h2V15.92A7,7,0,0,0,18.92,10H19a4,4,0,0,0,4-4V1A1,1,0,0,0,22,0ZM3,6V2H5V8A2,2,0,0,1,3,6ZM21,6a2,2,0,0,1-2,2V2h2Z" fill="#C3CFD9"></path><path data-color="color-2" d="M14,20H10c-5,0-5,4-5,4H19S19,20,14,20Z" fill="#C3CFD9"></path></g></svg>` ; 
    }
    if( index +1 === 3 && esPrimeraPagina){
        pos += `<svg viewBox="0 0 24 24"><g><path d="M22,0H2A1,1,0,0,0,1,1V6a4,4,0,0,0,4,4h.08A7,7,0,0,0,11,15.92V19h2V15.92A7,7,0,0,0,18.92,10H19a4,4,0,0,0,4-4V1A1,1,0,0,0,22,0ZM3,6V2H5V8A2,2,0,0,1,3,6ZM21,6a2,2,0,0,1-2,2V2h2Z" fill="#E8833A"></path><path data-color="color-2" d="M14,20H10c-5,0-5,4-5,4H19S19,20,14,20Z" fill="#E8833A"></path></g></svg>` ; 
    }
    return pos;
}

const cargaInicial = () => {
    pagActual = 0;
    posiciones.data.forEach( (element, index) => {
        agregarCards(element, index);
    })
}

const agregarCards = (element,index) => {
    
    const card = document.createElement("div");
    card.classList.add("filaTabla");
    card.innerHTML = `  <div class="puesto">
                            <p>${puesto(index)}</p>
                        </div>
                        <div class="contenedorImagen">
                            <img class="img" src="../.${element.foto}">
                        </div>
                        <div>
                            <p class="nombre">${element.piloto.nombre}</p>
                            <p class="nombre">${element.copiloto.nombre}</p>
                            <p class="nombre">${element.modelo}</p>
                            <p class="nombre">Año: ${element.anio}</p>
                        </div>
                        <div class="contenedorPuntaje"> 
                            <p class="nombre">${element.puntaje}</p>
                        </div>`;
    gridPosiciones.appendChild(card);
    
}




const paginaAnterior = async () => {
    
    pagActual--;
    const request = await fetch(`http://localhost:9000/api/vehiculos?cantidad=${filasXPagina}&from=${pagActual * filasXPagina}`);
    const vehiculos = await request.json();

    gridPosiciones.innerHTML="";
    
    vehiculos.data.forEach((element,index) => {
        agregarCards(element, index);
    })
    
    verificador();
}

const paginaSiguiente = async () => {
    pagActual++;
    const request = await fetch(`http://localhost:9000/api/vehiculos?cantidad=${filasXPagina}&from=${pagActual * filasXPagina}`);
    
    const vehiculos = await request.json();
    
    gridPosiciones.innerHTML="";
    
    vehiculos.data.forEach((element,index) => {
        agregarCards(element, index);
    })

    verificador();
}

const verificador = () => {
    if(pagActual === 0){
        btnAnt.disabled = true;
        btnSig.disabled = false;
        btnAnt.classList.add('desactivado');
    }
    else if(pagActual < totalPaginas){
        btnSig.disabled = false;
        btnAnt.disabled = false;
        btnAnt.classList.remove('desactivado');        
        btnSig.classList.remove('desactivado');        
    }
    else if(pagActual >= totalPaginas){
        btnSig.disabled = true;
        btnAnt.disabled = false;
        btnSig.classList.add('desactivado');
    }
}

btnAnt.addEventListener("click", paginaAnterior);
btnSig.addEventListener("click", paginaSiguiente);
cargaInicial();