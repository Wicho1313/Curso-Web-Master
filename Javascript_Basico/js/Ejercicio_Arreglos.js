'use strict'

/**1.- Pida 6 numeros por pantalla y los meta en un array
 * 2.- Mostrar el array entero en la pagina y la consola
 * 3.- Ordenarlo y mostrarlo
 * 4.- Invertir su orden y mostrarlo
 * 5.- Mostrar cuantos elementos tiene el array
 * 6.- Busqueda de un valor introducido por el usuario 
 * que nos diga si lo encuentra y su indice
 */
function mostrarArreglo(elementos, texto ='') {
    // mostrar en el cuerpo de la pagina
    document.write('<h1>Contenido del array '+texto+'</h1>');
    // recorriendo el arreglo para mostrar los elementos en la pagina
    document.write('<ul>');
    
    elementos.forEach(elem => {
        document.write('<strong>'+elem+'</strong><br>')
    });
    document.write('</ul>');

}
//const numeros = new Array(6);
var numeros = [];

// limite de 6 numeros
for (let i = 0; i <= 5; i++) {
    // pedir los numeros
    //numeros[i] = parseInt (prompt('Introduce un numero: ',0));
    numeros.push (parseInt (prompt ('Introduce un numero: ',0)));
}

// mostrar en la pagina
mostrarArreglo(numeros);
// mostrar array en consola
console.log (numeros);

// ordenar y mostrar
numeros.sort()
mostrarArreglo(numeros,'Ordenado');

// invertir y mostrar

numeros.reverse();
mostrarArreglo(numeros,'Reverso');

//contar elementos
document.write('<h1>El array tiene: '+numeros.length+'</h1>');

// hacer busqueda
var busqueda = parseInt (prompt ('Busca un numero ',0));
var indice = numeros.findIndex(numero =>numero==busqueda);

if (indice && indice != -1) {
    document.write('<h1>Encontrado</h1>');
    document.write('<h1>Posicion de la busqueda: '+indice+'</h1>');
    
} else {
    document.write('<h1>NO ENCONTRADO</h1>');
    
}

