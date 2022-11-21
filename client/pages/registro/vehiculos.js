const request = await fetch(`http://localhost:9000/api/vehiculos`);
const posiciones = await request.json();

let gridPosiciones = document.querySelector('#tabla');
posiciones.forEach(async (element, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${index + 1}</td>
                    <td><img src="../.${element.foto}" alt="${element.marca} - ${element.modelo}" class="imagenTablaAdmin"></td>
                    <td>${element.marca}</td>
                    <td>${element.modelo}</td>
                    <td>${element.ano}</td>
                    <td>${element.piloto}</td>
                    <td>${element.copiloto}</td>
                    <td>${element.puntaje}</td>
                    <td><button class="botonEditar" onclick="editarVehiculo(${element.id})">✏️</button></td>
                    <td><button class="botonEliminar" onclick="eliminarVehiculo(${element.id})">❌</button></td>`;
    gridPosiciones.appendChild(tr);
});