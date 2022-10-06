// import vehiculos from './vehiculos.json';
import vehiculos from './vehiculos.json' assert {type: 'json'};
let grid = document.querySelector('#grid');

vehiculos.forEach(element => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<div>
                        <p>${element.piloto}</p>
                        </div>
                        <div>
                            <img src="${element.foto}">
                        </div>`;
    grid.appendChild(card);
});