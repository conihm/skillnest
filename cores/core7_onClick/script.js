let btnIniciarSesion = document.getElementById("iniciar_sesion")
btnIniciarSesion.addEventListener("click", function () {
    let text = btnIniciarSesion.textContent;
    if (text == "Iniciar Sesión") btnIniciarSesion.textContent = "Cerrar Sesión";
    else btnIniciarSesion.textContent = "Iniciar Sesión";
});



let btnAgregarDef = document.getElementById("agregar_def")
btnAgregarDef.addEventListener("click", function () {
    //btnAgregarDef.style.visibility = "hidden";
    btnAgregarDef.remove();
});


let btnMeGusta = document.querySelectorAll(".me_gusta");
btnMeGusta.forEach(function (boton) {
    let contador = 0;
    boton.addEventListener('click', function () {
        contador++;
        boton.textContent = contador + " Me gusta";
        const mascota = boton.closest(".card").querySelector("h2").textContent;
        
        alert(mascota + " was liked!");
    });

});

