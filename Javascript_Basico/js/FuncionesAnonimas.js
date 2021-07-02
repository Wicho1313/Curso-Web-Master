'use strict'

// funciones anonimas (sin nombre)

var pelicula = function (nombre) {
    return 'la pelicula es: '+nombre;
}

var p = pelicula('harry potter');
console.log(p);

function sumame(num1, num2) {
    var sumar = num1 + num2;
    return sumar;
}

console.log(sumame(4, 5));

// se define la funcion con callback
function suma(num1,num2,sumaYmuestra,sumaPorDos) {
    let suma = num1 +num2;
    sumaYmuestra(suma);
    sumaPorDos(suma);
    return suma;
}
// se hace el llamado a la funcion (envio de parametros)
// funciones anonimas
suma(5,7, function(dato){
    console.log('La suma es: ', dato);
}, function(dato){
    console.log('La suma por dos es:', (dato*2));
});

// FUNCIONES FLECHA
// se usan en las funciones callback para escribir menos,
// funciona igual que escribir function (param){}
// solo se escribe el parametro y la flecha hacia el bloque de instrucciones
suma(3,8, dato => {
    console.log('La suma es: ', dato);
}, dato => {
    console.log('La suma por dos es:', (dato*2));
});
