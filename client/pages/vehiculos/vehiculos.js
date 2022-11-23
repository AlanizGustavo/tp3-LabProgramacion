const grid = document.querySelector('#grid');
const nombre = document.getElementById("nombre");
let filtroNombre;
let nombrePiloto;

let cargaInicial = async function(){
    const request = await fetch(`http://localhost:9000/api/vehiculos`);
    const vehiculos = await request.json();

    vehiculos.forEach( element => {
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

nombre.addEventListener("keyup", filtrar);

cargaInicial();





