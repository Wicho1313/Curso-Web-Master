'use strict'

window.addEventListener('load', function () {
    var formulario = document.querySelector('#formPelicula');

    formulario.addEventListener('submit', function () {
        var titulo = document.querySelector('#addPelicula').value;
        
        if (titulo.length >= 1) {
            localStorage.setItem(titulo, titulo);
        }
    });
    var ul = document.querySelector('#peliculasList');
    for (const i in localStorage) {
        console.log(localStorage[i]);
        if (typeof localStorage[i] == 'string') {
            var lis = document.createElement('li');
            lis.append(localStorage[i]);
            ul.append(lis);
        }
    }
    var formularioB = document.querySelector('#formBorraPelicula');

    formularioB.addEventListener('submit', function () {
        var titulo = document.querySelector('#deletePelicula').value;
        
        if (titulo.length >= 1) {
            localStorage.removeItem(titulo);
        }
    });
});