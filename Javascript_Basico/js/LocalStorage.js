'use strict'

// LocalStorage

window.addEventListener('load', function () {
    
    // comprobar si localStorage est[a disponible]
    if (typeof(Storage) !== 'undefined') {
        console.log('LocalStorage disponible');
    }else{
        console.log('LocalStorage INCOMPATIBLE');
    }

    // guardar datos
    localStorage.setItem('Titulo', 'Curso de JS Udemy');

    // recuperar elemento 
    var mem = localStorage.getItem('Titulo');
    console.log(mem);

    document.querySelector('#peliculas').innerHTML = localStorage.getItem('Titulo');

    // guardar objetos
    var usuario = {
        nombre: 'Luis Rojas',
        email: 'lrojase1@gmail.com',
        web: 'github/Wicho1313'
    };
    localStorage.setItem('usuario', JSON.stringify(usuario));

    // recuperar objeto
    console.log(localStorage.getItem('usuario')); // es un string
    var userjs = JSON.parse(localStorage.getItem('usuario'));
    console.log(userjs); 

    document.querySelector('#peliculas').append(' '+userjs.web +' - '+userjs.nombre);

    // borar un elemento
    localStorage.removeItem('usuario'); 
    localStorage.clear(); // borra todo el localStorage
});