const formulario = document.getElementById("formCliente");

if (formulario) {

    formulario.addEventListener("submit", function(evento) {

        evento.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const telefono = document.getElementById("telefono").value.trim();

        const mensaje = document.getElementById("mensaje");

        if (nombre === "" || correo === "" || telefono === "") {

            mensaje.textContent = "Todos los campos son obligatorios.";

        } else {

            mensaje.textContent = "Cliente registrado correctamente.";

            formulario.reset();
        }

    });

}