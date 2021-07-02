'use strict'

// Parametros REST y SPREAD

// Rest se colocan tres puntos antes de la variable
// que servira como una lista indefinida de elementos
function listadoFrutas(fruta1,fruta2, ...restoDeFrutas) {
    console.log('Fruta 1: ', fruta1);
    console.log('Fruta 2: ', fruta2);
    console.log(restoDeFrutas);
}
// llamado a la funcion normal
listadoFrutas('Naranja','Manzana','Sandia','Pera', 'Melon', 'Coco');

// Spread es el inverso de Rest
// convierte una lista a un elemento individual 
var frutas = ['Naranja','Manzana'];
// imprime en consola la lista llamada frutas y lo interpreta como fruta1
// sandia es la fruta 2 y el conjunto del resto de elementos
listadoFrutas(frutas,'Sandia','Pera', 'Melon', 'Coco');
// en el siguiente caso fruta1 y gruta 2 son tomados como los 2 elementos de la 
// variable llamada frutas
listadoFrutas(...frutas,'Sandia','Pera', 'Melon', 'Coco');
