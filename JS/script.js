const btnAbrir = document.getElementById("btnAbrir");
const cartaInicio = document.getElementById("cartaInicio");
const cartaAbierta = document.getElementById("cartaAbierta");

//Cuando hacemos click en el boton
btnAbrir.addEventListener("click",function(){
    //OCULTAMOS LA CARTA INICIAL
    cartaInicio.classList.add("ocultar");

    //ESPERAMOS MEDIO SEGUNDO
    setTimeout(function(){
        //OCULTAMOS COMPLETAMENTE LA CARTA INICIAL
        cartaInicio.style.display = "none";

        //MOSTRAMOS LA CARTA NUEVA
        cartaAbierta.classList.add("mostrar");
    }, 500);
});

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