
function toggleRespuesta(element) {

    element.classList.toggle('active');


    const respuesta = element.nextElementSibling;
    respuesta.classList.toggle('active');
}

document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    Swal.fire({
        title: '¡Información enviada!',
        text: 'Gracias por tu mensaje. Nos pondremos en contacto pronto.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    }).then(() => {
        document.getElementById("myForm").reset();
    });
});
