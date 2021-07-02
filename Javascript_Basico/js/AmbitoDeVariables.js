'use strict'

// variables globales
var texto = 'hola mundo, soy una variable global';
var numero = 12;

function holaMundo(texto) {
    // variable local
    var hola_mundo = 'Texto dentro de una funcion'
    console.log (texto);
    // convertir el numero a string
    console.log (typeof numero, numero, typeof numero.toString(), numero.toString());
    console.log (hola_mundo);
}

holaMundo(texto);
// error puesto que la variable no esta dentro del ambito global
console.log(hola_mundo);