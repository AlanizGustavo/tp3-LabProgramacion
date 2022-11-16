const ham = document.querySelector(".ham");
const lista = document.querySelector(".nav-header ul");
const barras = document.querySelectorAll(".ham span");

ham.addEventListener("click", () => {
    lista.classList.toggle("activado");
    barras.forEach(child => {
        child.classList.toggle("animado");
    });
});
