'use strict'

/**Calculadora que pida los numeros
 * por pantalla, validar y volver a pedir
 * mostrar en el cuerpo de la pagina en una alerta
 * y en la consola el resultado de la operacion.
 */

var num1 = parseInt(prompt('Ingresa el primer numero'));
var num2 = parseInt(prompt('Ingresa el segundo numero'));

while (num1 < 0 || num2 < 0 || isNaN(num1) || isNaN(num2)) {
    num1 = parseInt(prompt('Ingresa el primer numero'));
    num2 = parseInt(prompt('Ingresa el segundo numero'));
    
}

var resultado = 'la suma es: '+ (num1 + num2)+ '<br>'+
                'la resta es: '+ (num1 - num2)+ '<br>'+
                'la multiplicacion es: '+ (num1 * num2)+ '<br>'+
                'la division es: '+ (num1 / num2)+ '<br>';

var resultadoCMD = 'la suma es: '+ (num1 + num2)+ '\n'+
                'la resta es: '+ (num1 - num2)+ '\n'+
                'la multiplicacion es: '+ (num1 * num2)+ '\n'+
                'la division es: '+ (num1 / num2)+ '\n';

document.write(resultado);
alert(resultadoCMD);