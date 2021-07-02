'use strict'

// BOM Browser Object Model
console.log (window.innerHeight);
console.log (window.innerWidth);

console.log (screen.Width);
console.log (screen.height);

console.log (window.location);

function redirect(url) {
    window.location.href = url;
}

function abrirVentana(url) {
    // abre en una pestaña nueva 
    //window.open(url);
    // abre en una ventana nueva de tamaño nxm
    window.open(url,'','width=400, height=600');
}