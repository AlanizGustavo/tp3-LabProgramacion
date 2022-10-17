import vehiculos from './vehiculos.json' assert {type: 'json'};

const grid = document.querySelector('#grid');
const nombre = document.getElementById("nombre");
let filtroNombre;
let nombrePiloto;

let cargaInicial = function(){
    vehiculos.forEach( element => {
        agregarCards(element);
    }
)}

let agregarCards = function(element){
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <div class="contenedorTitulo">
            <p class="nombre">${element.piloto}</p>
        </div>
        <div class="contenedorImagen">
            <img class="img" src="${element.foto}">
        </div>`;
    grid.appendChild(card);
}

const filtrar = () => {
    filtroNombre = nombre.value.toLowerCase();
    if(filtroNombre === ""){
        grid.innerHTML="";
        cargaInicial();
    }
    else{
        grid.innerHTML="";
        let encontrado = false;
        vehiculos.forEach(element => {
            if(element.piloto.toLowerCase().includes(filtroNombre)){
                agregarCards(element);
                encontrado = true;
            }
        })
        if(!encontrado){
            const noEncontrado = {
                "foto":"../assets/img/sinResultado.png",
                "piloto": "NO SE ENCONTRARON PILOTOS"
            };
            grid.innerHTML="";
            agregarCards(noEncontrado);
        }
    }
    
}    

nombre.addEventListener("keyup", filtrar);

cargaInicial();





