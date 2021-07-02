'use strict'

var categorias = ['accion, Terror', 'comedia'];
var peliculas = ['la verdad duele', 'harry potter', 'incident'];

var cine = [categorias, peliculas];

console.log(cine);
console.log(cine[0]);
console.log(cine[1][2]);

// aniadir elementos al arreglo
/*
var elem = '';

do {
    elem = prompt('Introduce una pelicula a agregar, escribe "salir" para terminar', 0);
    peliculas.push(elem)
} while (elem != 'salir');

// sacando el ultimo elemento puesto que salir se agrega al arreglo

peliculas.pop();
*/
console.log(peliculas);

// buscando un elemento en el arreglo

var index = peliculas.indexOf('harry potter');
// si se encontro
if (index > -1) {
    // especificamos el numero de elementos que se quiere borrar a partir de un indice ya establecido
    peliculas.splice(index,1);
}
console.log(peliculas);

// metodo join convierte un arreglo a texto separado por comas
var cadena = peliculas.join()
console.log(cadena);

// Convertir una cadena en array. 
console.log(cadena.split(','));
// ordena el array en orden alfabetico
console.log(peliculas.sort());
// invierte el orden del array
console.log(peliculas.reverse());