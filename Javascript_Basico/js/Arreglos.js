'use strict'

// arrays, arreglos,, matrices

var nombre = 'luis rojas';
var nombres = new Array('php','js',true,45);

var lenguajes = ['php',' ruby','c'];

console.log(nombres);
console.log(lenguajes);

var elem = parseInt(prompt('Que elemento quieres',0));

var tam = nombres.length;
if (elem >= tam) {
    alert('Introduce un numero menor a4'+tam);
} else {
    alert(nombres[elem]);
}

// formas de recorrer un areglo 
// for
document.write('<ul>');
for (let i = 0; i < lenguajes.length; i++) {
    document.write('<li>'+ lenguajes[i]+'</li>');    
}
document.write('</ul>');
// foreach 
document.write('<ul>');
lenguajes.forEach(elem => {
    document.write('<li>'+ elem +'</li>');    
    
});
document.write('</ul>');

// for in
for (const lenguaje in lenguajes) {
    document.write('<li>'+ lenguajes[lenguaje] +'</li>');    
}

// busquedas

var len = lenguajes.find(lenguaje => lenguaje == 'php');
console.log(len);

// buscar un indice
len = lenguajes.findIndex(lenguaje => lenguaje == 'php');
console.log(len);

// busqueda con condiciones
var precios = [10, 192, 80, 38, 50]
len = precios.some(precio => precio > 80);
console.log(len);