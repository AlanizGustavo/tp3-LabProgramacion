

const request = await fetch(`http://localhost:9000/api/vehiculos`);
const posiciones = await request.json();

let gridPosiciones = document.querySelector('#tablaAdmin');

posiciones.forEach(async (element, index) => {
    const linea = document.createElement("div");
    linea.classList.add("filaTablaAdmin");
    linea.innerHTML = `
                    <div><p>${index + 1}</p></div>
                    <div><img class="img" src="../.${element.foto}" alt="${element.marca} - ${element.modelo}" class="imagenTablaAdmin"></div>
                    <div class="info">    
                    <p class="nombre">Marca: ${element.marca}</p>
                        <p class="nombre">Modelo: ${element.modelo}</p>
                        <p class="nombre">Año: ${element.anio}</p>
                        <p class="nombre">Piloto: ${element.piloto.nombre}</p>
                        <p class="nombre">Copiloto: ${element.copiloto.nombre}</p>
                        <p class="nombre">Puntaje: ${element.puntaje}</p>
                    </div>
                    <div><button class="botonEditar" id="botonEditar" onclick="editarAuto('${element._id}')">✏️</button></div>
                    <div><button class="botonEliminar" id="botonEliminar" onclick="eliminarAuto('${element._id}')">❌</button></div>`;
    gridPosiciones.appendChild(linea);
});