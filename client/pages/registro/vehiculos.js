const request = await fetch(`http://localhost:9000/api/vehiculos`);
const posiciones = await request.json();

let gridPosiciones = document.querySelector('#tablaAdmin');

posiciones.forEach(async (element) => {
    const linea = document.createElement("div");
    linea.classList.add("filaTablaAdmin");
    linea.innerHTML = `
                    <div class="columnTablaAdmin">
                        <img class="img" src="${element.foto}" alt="${element.marca} - ${element.modelo}" class="imagenTablaAdmin">
                    </div>
                    <div class="columnTablaAdmin info">    
                        <p id="marca-${element._id}"    class="nombre">Marca: ${element.marca}</p>
                        <p id="modelo-${element._id}"   class="nombre">Modelo: ${element.modelo}</p>
                        <p id="anio-${element._id}"     class="nombre">Año: ${element.anio}</p>
                        <p id="piloto-${element._id}"   class="nombre">Piloto: ${element.piloto.nombre}</p>
                        <p id="copiloto-${element._id}" class="nombre">Copiloto: ${element.copiloto.nombre}</p>
                        <p id="pintaje-${element._id}"  class="nombre">Puntaje: ${element.puntaje}</p>
                    </div>
                    <div class="columnTablaAdmin">
                        <button class="botonEditar"   onclick="editarAuto('${element._id}')">✏️</button>
                    </div>
                    <div class="columnTablaAdmin">
                        <button class="botonEliminar" onclick="eliminarAuto('${element._id}')">❌</button>
                    </div>
                    `;
    gridPosiciones.appendChild(linea);
});