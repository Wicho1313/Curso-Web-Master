'use strict'
// evento on load, carga todo el js al momento de la pagina
window.addEventListener('load', function () {
    
    // Eventos del mouse
    
    var boton = document.querySelector('#boton');
    
    function cambiaColor() {
        console.log('Me has presionado');
        var bg = boton.style.background;
        if (bg == 'green') {
            boton.style.background = 'red';
        }else{
            boton.style.background = 'green';
        }
        boton.style.padding = '10px';
        boton.style.border = '1px solid #ccc';
    
        return true;
    }
    // funcion add event listenner para capturar el evento
    // evento click, para el doble click es bdlclick
    boton.addEventListener('click', function () {
        cambiaColor();
    });
    
    // mouse over
    boton.addEventListener('mouseover', function () {
        boton.style.background = 'yellow';
    });
    
    // mouse out
    boton.addEventListener('mouseout', function () {
        boton.style.background = '#ccc';
    });
    
    // focus
    var input = document.querySelector('#nombre');
    
    input.addEventListener('focus', function () {
        console.log ('[focus] estas dentro del input');
    });
    // blur
    input.addEventListener('blur', function () {
        console.log ('[blur] estas fuera del input');
    });
    // keydown
    input.addEventListener('keydown', function (e) {
        console.log ('[keydown] pulsando la tecla: ', String.fromCharCode(e.keyCode));
    });
    // keypress
    input.addEventListener('keypress', function (e) {
        console.log ('[keypress] Tecla presionada: ', String.fromCharCode(e.keyCode));
    });
    // keyup
    input.addEventListener('keyup', function (e) {
        console.log ('[keyup] Tecla soltada: ', String.fromCharCode(e.keyCode));
    });

}); // fin evento load