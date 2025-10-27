var matrix = [];
const nBotonesEncendidos = 10;
const GRID_SIZE = 5;
const boxes = document.querySelectorAll('button');

function seleccionarLucesIniciales() {
    for (var i = 0; i < nBotonesEncendidos; i++) {
        let added = false;
        while (!added) {
            let id = Math.floor(Math.random() * 25 + 1);
            if (!matrix.includes(id)) {
                matrix.push(id);
                added = true;
            }
        }
    }
}

function inicializarLuces() {
    for (box of boxes) {
        if (matrix.includes(Number(box.id))) box.classList.add("lightOn");
        else box.classList.add("lightOff");
    }
}

function seleccionarBox(box) {
    box.classList.toggle("lightOn");
    box.classList.toggle("lightOff");
}


function obtenerVecinos(id) {
    let vecinos = [];
    let fila = Math.floor((id - 1) / GRID_SIZE);
    let columna = (id - 1) % GRID_SIZE;
    for (var i = -1; i <= 1; i++) {
        for (var j = -1; j <= 1; j++) {
            if ((fila + i) >= 0 && (fila + i) < GRID_SIZE && (columna + j) >= 0 && (columna + j) < GRID_SIZE) {
                var vecino = (fila + i) * GRID_SIZE + (columna + j) + 1;
                vecinos.push(vecino);
            }
        }
    }
    return vecinos;
}

function seleccionarBox(box) {
    let vecinos = obtenerVecinos(Number(box.id));
    console.log(box.id);
    console.log(vecinos);
    for (vecino of vecinos) {
        boxVecino = document.getElementById(vecino)
        console.log(boxVecino);
        boxVecino.classList.toggle("lightOn");
        boxVecino.classList.toggle("lightOff");
    }
    evaluarResultado();
}

boxes.forEach(function (box) {
    box.onclick = () => seleccionarBox(box)
});

function evaluarResultado(){
    if(revisarLucesApagadas()) {
        alert("¡Ganaste!");
        window.location.reload();
    }
}

function revisarLucesApagadas(){
    for(box of boxes){
        if(box.contains("lightOn")) return false;
    }
    return true;
}


window.onload = () => {
    seleccionarLucesIniciales();
    inicializarLuces();
}
