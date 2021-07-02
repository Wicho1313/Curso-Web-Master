'use strict'

// JSON JavaScript Object Notation
window.addEventListener('load', function () {
    
    var pelicula = {
        titulo: 'Batman v Superman',
        year: 2017,
        pais: 'Estados unidos'
    };

    console.log (pelicula);
    pelicula.titulo = 'Batman inicia';

    var peliculas = [
        {titulo: 'Superman II', year: 2016, pais: 'Estados Unidos'},
        pelicula
    ];
    var cajaPeliculas = document.querySelector('#peliculas');
    for (const peli in peliculas) {
        var p = document.createElement('p')    ;
        p.append(peliculas[peli].titulo+' - '+peliculas[peli].year);
        cajaPeliculas.append(p);
    }

});