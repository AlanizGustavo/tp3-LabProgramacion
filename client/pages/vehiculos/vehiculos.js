const grid = document.querySelector('#grid');
const nombre = document.getElementById("nombre");
const btnSig = document.querySelector(".btn-sig");
const btnAnt = document.querySelector(".btn-ant");

let filtroNombre;
let nombrePiloto;
let cardsXPagina = 10;
let pagActual = 0;

btnAnt.disabled = true;
btnAnt.classList.add("desactivado")

const requestTotal = await fetch(`http://localhost:9000/api/vehiculos`);
const totalPaginas = Math.floor((await requestTotal.json()).length / cardsXPagina);

const requestInicial = await fetch(`http://localhost:9000/api/vehiculos?cantidad=${cardsXPagina}&from=0`);

const vehiculosInicial = await requestInicial.json();


let cargaInicial = async function(){
    pagActual = 0;
    vehiculosInicial.forEach( element => {
        agregarCards(element);
    }
)}

let agregarCards = function(element){
    
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <div class="contenedorTitulo">
            <p class="nombre">${element.piloto.nombre}</p>
        </div>
        <div class="contenedorImagen">
            <img class="img" src="../.${element.foto}">
        </div>`;
    grid.appendChild(card);
}

const filtrar = async () => {
    filtroNombre = nombre.value.toLowerCase();
    
        const request = await fetch(`http://localhost:9000/api/vehiculos/${filtroNombre}`);
        const vehiculos = await request.json();

    if(filtroNombre === ""){
        grid.innerHTML="";
        cargaInicial();
    }
    else{
        grid.innerHTML="";
        
        if(request.status === 200){
            if(vehiculos.length > 0){
                vehiculos.forEach(element => {
                    agregarCards(element);
                })
            }
            else{
                const noEncontrado = {
                    "foto":"./../assets/img/sinResultado.png",
                    "piloto.nombre": "NO SE ENCONTRARON PILOTOS"
                };
                grid.innerHTML="";
                agregarCards(noEncontrado);
            }
        }
        else {
            const noEncontrado = {
                "foto":"./../assets/img/sinResultado.png",
                "piloto.nombre": "ALGO SALIO MAL!!!! Error en la consulta"
            };
            grid.innerHTML="";
            agregarCards(noEncontrado);
        }
    }
    
}    

const paginaAnterior = async () => {
    
    pagActual--;
    const request = await fetch(`http://localhost:9000/api/vehiculos?cantidad=${cardsXPagina}&from=${pagActual * cardsXPagina}`);
    const vehiculos = await request.json();

    grid.innerHTML="";
    
    vehiculos.forEach(element => {
        agregarCards(element);
    })

    verificador();
}

const paginaSiguiente = async () => {
    pagActual++;
    const request = await fetch(`http://localhost:9000/api/vehiculos?cantidad=${cardsXPagina}&from=${pagActual * cardsXPagina}`);
    
    const vehiculos = await request.json();
    
    grid.innerHTML="";
    
    vehiculos.forEach(element => {
        agregarCards(element);
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


nombre.addEventListener("keyup", filtrar);
btnAnt.addEventListener("click", paginaAnterior);
btnSig.addEventListener("click", paginaSiguiente);

cargaInicial();





