'use strict'

// pruebas con let y var

// prueba con var
var numero = 40;
console.log(numero); // valor 40

if (true){
    var numero = 50;
    console.log(numero); // valor 50
}

console.log(numero); // valor 50

//prueba con let
var texto = "Curso web master Udemy"
console.log(texto); 

if (true){
    let texto = "Curso JS"
    console.log(texto);
}

console.log(texto);