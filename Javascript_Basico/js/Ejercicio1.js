'use strict'
/**
* Programa que pida 2 números y que nos diga 
* cuál es el mayor, menor o si son iguales.
* puls: validar que sea un numero y sea positivo.
*/

var numero1 = parseInt(prompt('Introduce el primer número',0));
var numero2 = parseInt(prompt('Introduce el segundo número',0));
console.log(numero1, numero2);

while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = parseInt(prompt('Introduce el primer número',0));
    numero2 = parseInt(prompt('Introduce el segundo número',0));

}

 if (numero1==numero2){
     alert("LOS NUMEROS SON IGUALES");

 }else if (numero1 > numero2){
     alert('El numero mayor es: '+numero1);
     alert('El numero menor es: '+numero2);
} else if(numero1 < numero2) {
    alert('El numero mayor es: '+numero2);
    alert('El numero menor es: '+numero1);

}else{
    alert('Introduce un numero correcto');
}
