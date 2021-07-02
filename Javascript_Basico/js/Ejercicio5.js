'use strict'
/**Un programa que muestre todos
 * los numeros divisores de un  numero que el
 * usuario introduce
 */
var numero = parseInt(prompt('introduce el numero'));

for (let i = 1; i <= numero; i++) {
    if (numero%i ==0) {
        console.log('divisor:'+i);          
    }
}