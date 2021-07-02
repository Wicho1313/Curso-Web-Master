'use strict'

/**Hacer un programa
 * Que nos diga si un numero es par o impar
 * 1.- ventana prompt
 * 2.- Validar el numero y volverlo a pedir
 * 3.- Mostrar si es par o impar
 */

var number = parseInt(prompt('Introduce un numero'));

while (isNaN(number)) {
    number = parseInt(prompt('Introduce un numero'));
    
}

if (number % 2 == 0){
    alert ('Es numero par');

}else{
    alert('Es numero impar');
}