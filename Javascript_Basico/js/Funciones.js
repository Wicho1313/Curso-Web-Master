'use strict'

// funciones
// es una agrupacion reutilizable de un conjunto de instrucciones

// se define la funcion
function calculadora(){
    // CONJUNTO de instrucciones
    return 'Hola, soy una calculadora';
}
console.log(calculadora());

// los parametros ingresan a la funcion para usarse dentro de ella
function calcu(num1, num2) {
    console.log('Suma: ', + num1 + num2);
    console.log('Resta: ', + num1 - num2);
    console.log('Multiplicacion: ' + num1 * num2);
    console.log('Division: ' + num1 / num2);
}

// invocar la funcion
for (let i = 0; i <= 10; i++) {
    console.log(i);
    calcu(i,8);
}

// parametros opcionales
// estan definidos en los parametros de la funcion y no es necesario
// que se manden cuando llamamos a la funcion
function calcu2(num1, num2, mostrar = false) {
    
    if (mostrar == false) {
        console.log('Suma: ', + num1 + num2);
        console.log('Resta: ', + num1 - num2);
        console.log('Multiplicacion: ' + num1 * num2);
        console.log('Division: ' + num1 / num2);        
    } else {
        document.write('Suma: ', + num1 + num2 + '<br>');
        document.write('Resta: ', + num1 - num2 + '<br>');
        document.write('Multiplicacion: ' + num1 * num2 + '<br>');
        document.write('Division: ' + num1 / num2 + '<br>');        
        
    }
}

calcu2(7,6,true);
calcu2(5,2);

// funciones dentro de otras
function porConsola(num1,num2) {
    console.log('Suma: ', + num1 + num2);
    console.log('Resta: ', + num1 - num2);
    console.log('Multiplicacion: ' + num1 * num2);
    console.log('Division: ' + num1 / num2);        
}

function porPantalla(num1,num2) {
    document.write('Suma: ', + num1 + num2 + '<br>');
    document.write('Resta: ', + num1 - num2 + '<br>');
    document.write('Multiplicacion: ' + num1 * num2 + '<br>');
    document.write('Division: ' + num1 / num2 + '<br>');        

}
function calcu3(num1, num2, mostrar = false) {
    
    if (mostrar == false) {
        porConsola(num1, num2);
    } else {
        porPantalla(num1, num2);   
    }
    return true;
}

calcu3(5,3,true);
calcu3(2,3);