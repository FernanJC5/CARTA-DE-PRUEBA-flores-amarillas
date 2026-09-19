const btnAbrir = document.getElementById("btnAbrir");
const cartaInicio = document.getElementById("cartaInicio");
const cartaAbierta = document.getElementById("cartaAbierta");

// MENSAJES

const mensajes = [
    {
        id: "linea1",
        texto: "Quería darte estas flores amarillas de una manera un poquito diferente."
    },

    {
        id: "linea2",
        texto: "No sé si estas palabras puedan explicar todo lo que quería decirte,"
    },

    {
        id: "linea3",
        texto: "pero espero que este pequeño detalle pueda sacarte una sonrisa."
    },

    {
        id: "linea4",
        texto: "Porque a veces un pequeño detalle puede decir mucho."
    }
];

// FUNCIÓN PARA ESCRIBIR

function escribirTexto(elemento, texto, velocidad) {

    let posicion = 0;

    elemento.textContent = "";

    function escribir() {

        if (posicion < texto.length) {

            elemento.textContent += texto.charAt(posicion);

            posicion++;

            setTimeout(escribir, velocidad);

        }

    }

    escribir();
}

// ABRIR CARTA

btnAbrir.addEventListener("click", function() {

    cartaInicio.classList.add("ocultar");


    setTimeout(function() {

        cartaInicio.style.display = "none";

        cartaAbierta.classList.add("mostrar");


        // Empezar a escribir

        escribirMensajes();

    }, 500);

});

// ESCRIBIR TODOS LOS MENSAJES

function escribirMensajes() {

    let tiempo = 0;


    mensajes.forEach(function(mensaje) {

        setTimeout(function() {

            const elemento = document.getElementById(mensaje.id);

            escribirTexto(
                elemento,
                mensaje.texto,
                45
            );

        }, tiempo);


        tiempo += mensaje.texto.length * 45 + 800;

    });


    // FIRMA

    setTimeout(function() {

        escribirTexto(
            document.getElementById("firma"),
            "Con cariño 🌻",
            80
        );

    }, tiempo);
}

function crearPetalo(){
    const petalo = document.createElement("div");

    petalo.classList.add("petalo");
    petalo.textContent = "🌼";
    petalo.style.left = Math.random()*100+"vw";
    petalo.style.animationDuration = (3+Math.random()*4)+ "s";
    document.querySelector(".petalos").appendChild(petalo);

    setTimeout(function(){
        petalo.remove();
    }, 7000);
}

setInterval(crearPetalo,500);