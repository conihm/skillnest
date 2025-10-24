

let btnLike = document.querySelectorAll(".b_like");
btnLike.forEach(function (boton) {
    let contador = 0;
    boton.addEventListener('click', function () {
        contador++;
        let count = boton.closest(".feed-card").querySelector(".count");
        count.innerHTML = contador;
    });
});

