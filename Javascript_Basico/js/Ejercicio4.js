'use strict'
/**
 * Mostrar todos los numeros impares que hay eentre
 * dos numeros introducidos por el usuario.
 */
var numero1 = parseInt(prompt('introduce el primer numero'));
var numero2 = parseInt(prompt('introduce el segundo numero'));

while (numero1 < numero2) {
    numero1 ++;
    if (numero1%2 !=0) {
        console.log('El '+numero1+' es impar ');
    }
}