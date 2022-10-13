import vehiculos from './vehiculos.json' assert {type: 'json'};

const grid = document.querySelector('#grid');
const filtro = document.querySelector(".filtros");
const nombre = document.getElementById("nombre");
let filtroNombre;

let cargaInicial = function(){
    vehiculos.forEach( element => {
        agregarCards(element);
    }
)}

let agregarCards = function(element){
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<div class="contenedorTitulo">
    <p class="nombre">${element.piloto}</p>
    </div>
    <div class="contenedorImagen">
    <img class="img" src="${element.foto}">
    </div>`;
    grid.appendChild(card);
}

filtro.addEventListener("submit", (e) => {
    e.preventDefault();
    filtroNombre = nombre.value;
    vehiculos.forEach(element => {
        if(element.piloto === filtroNombre){
            grid.innerHTML="";
            agregarCards(element);
        }
    });
})

filtro.addEventListener("reset", (e) => {
    e.preventDefault();
    grid.innerHTML="";
    cargaInicial();
})

cargaInicial();

// vehiculos.forEach(element => {
//     const card = document.createElement("div");
//     card.classList.add("card");
//     card.innerHTML = `<div class="contenedorTitulo">
//                         <p class="nombre">${element.piloto}</p>
//                     </div>
//                     <div class="contenedorImagen">
//                         <img class="img" src="${element.foto}">
//                     </div>`;
//     grid.appendChild(card);
// });



