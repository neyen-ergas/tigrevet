
function toggleRespuesta(element) {

    element.classList.toggle('active');


    const respuesta = element.nextElementSibling;
    respuesta.classList.toggle('active');
}