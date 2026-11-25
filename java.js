document.addEventListener("DOMContentLoaded", function() {

    const personas = document.getElementById("personas");
    const resultado = document.getElementById("resultado");

    personas.addEventListener("change", function() {

        let precio = Number(personas.value);

        if (precio === 0) {
            resultado.textContent = "Selecciona una cantidad";
        } else {
            resultado.textContent = "Total aproximado: $" +
            precio.toLocaleString("es-MX") + " MXN";
        }

    });

});