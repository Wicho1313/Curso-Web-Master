'use strict'

window.addEventListener('load', function () {
    // timers
    // setInterval, cada cierto tiempo especificado ejecuta algo
    // setTimeout se ejecuta una vez pasado cierto tiempo, y no se repita
    function intervalo() {
        var tiempo = setInterval(function () {
            console.log('Set interval ejecutado');
    
            var encabezado = document.querySelector('h1');
        
            if (encabezado.style.fontSize == '50px') {
                encabezado.style.fontSize = '20px';
            } else {
                encabezado.style.fontSize = '50px';
            }
        
        }, 1000); // cada x segundos
        return tiempo;
    } // fin funcion intervalo
    
    var tiempo = intervalo();

    var botonStop = document.querySelector('#stop');

    botonStop.addEventListener('click', function () {
        alert('Has detenido el intervalo');
        clearInterval(tiempo);
    });

    var botonStart = document.querySelector('#start');
    botonStart.addEventListener('click', function () {
        alert('Has iniciado el intervalo');
        intervalo();
    });

});