const openPersona = document.getElementById('registroPersona');
const modal_container_persona = document.getElementById('formularioPersona');
const closePersona = document.getElementById('closePersona');
const openAuto = document.getElementById('registroAuto');
const modal_container_auto = document.getElementById('formularioAuto');
const closeAuto = document.getElementById('closeAuto');

openPersona.addEventListener('click', () => {
    modal_container_persona.classList.add('show');
});

closePersona.addEventListener('click', () => {
    modal_container_persona.classList.remove('show');
});

openAuto.addEventListener('click', () => {
    modal_container_auto.classList.add('show');
});

closeAuto.addEventListener('click', () => {
    modal_container_auto.classList.remove('show');
});