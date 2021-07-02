'use strict'

// Transformaciones de textoss

var numero = 444;
var texto1 = 'Este es el Curso de js con Victor Curso Robles Curso Udemy';
var texto2 = 'Es buen curso';

// .toString() se convierte a string un numero
var dato = numero.toString();
console.log (typeof dato, dato);

// convertir a minusculas un texto
dato = texto1.toLowerCase();
console.log (typeof dato, dato);

// convertir a mayusculas un texto
dato = texto2.toUpperCase();
console.log (typeof dato, dato);

// length calcular longitud de un texto (numero de caracteres)
var nombre = 'Luis Enrique';
console.log(nombre.length);

// length  numero de elementos en un array
var nombres = ['Hola','Luis'];
console.log(nombres.length);

// concatenar (unir) textos
var textoTotal = texto1+' '+texto2;
console.log(textoTotal);
textoTotal = texto1.concat(' ' + texto2);
console.log(textoTotal);

// metodos de busqueda regresan -1 si no se encontro
// .indexOf es la primera coincidencia de esa palabra diferenciando entre mayusculas o minusculas
// regresan la posicion del elemento encontrado
var busqueda = texto1.indexOf('Curso');
console.log(busqueda);

// .lastIndexOf es ultima coincidencia de esa palabra
busqueda = texto1.lastIndexOf('Curso');
console.log(busqueda);

// metodo search la primer coincidencia
busqueda = texto1.search('Curso');
console.log(busqueda);

// match regresa una coleccion (array) de los resultados que encuentra
// busca la primer coincidencia
busqueda = texto1.match('Curso');
console.log(busqueda);

// soporta expresiones regulares, dentre de una expresion se puede colocar
// 'gi' para que haga una busqueda global y te lo entregue a manera de array
// regresa cuantas veces se encontro esa palabra en el texto
busqueda = texto1.match(/Curso/gi);
console.log(busqueda);

// substr regresa una sub cadena especificando el indice de inicio (empezando por 0)
// y especificando cuandos caracteres se quieren tomar
busqueda = texto1.substr(11,5);
console.log(busqueda);

// chartAt sacar una letra en concreto de un string
// se especifica el numero de caracter en el texto
busqueda = texto1.charAt(45);
console.log(busqueda);

// startsWith buscar si un texto en especifico empieza con los caracteres que especifiquemos
// devuelve true si lo encuentra y false si no lo encuentra
busqueda = texto1.startsWith('Este');
console.log(busqueda);

// endsWith saber si un string acaba con un texto especificado
busqueda = texto1.endsWith('Este');
console.log(busqueda);

// buscar una palabra en el texto tal y como esta escrita
// tambien puedes especificar el indice donde se quiere buscar la palabra
// devuelve true si lo encuentra y false si no se encuentra
busqueda = texto1.includes('Victor');
console.log(busqueda);

// replace funcion para reemprazar texto
busqueda = texto1.replace('Victor','Luis');
console.log(busqueda);

// slice permite separar el string a partir de caracter que se especifique
busqueda = texto1.slice(11);
console.log(busqueda);

// se puede especificar el inicio i fin
busqueda = texto1.slice(11, 18);
console.log(busqueda);

// split separa el arreglo por el caracter que se especifique 
// y los elementos separados se guardan en un array
busqueda = texto1.split(' ');
console.log(busqueda);

//trim elimina los espacios de inicio y fin
busqueda = texto1.trim();
console.log(busqueda);

