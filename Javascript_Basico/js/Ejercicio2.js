'use strict'

/**
 * Utilizando un bucle, mostrar la suma y la media de los 
 * numeros introducidos hasta introducir un numero negativo y 
 * mostrar el resultado
 */

 var suma = 0;
 var contador =0;

 do{
    var numero = parseInt(prompt('introduce numeros hasta que metas uno negativo'));

    if (isNaN(numero)){
        numero =0;

    }else if (numero >= 0) {
        suma = suma + numero;
        contador ++;

    } 
    console.log(suma);
    console.log(contador);
 }while (numero >= 0) 

 alert ('la suma de todos los numeros es: '+suma);
 alert('la media de todos los numeros es: '+ (suma/contador));