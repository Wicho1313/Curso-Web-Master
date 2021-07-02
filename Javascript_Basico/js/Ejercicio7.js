'use strict'
/**Tabla de multiplicar de
 * un numero introducido en pantalla.
 */

var numero = parseInt(prompt('Ingresa el numero del que quieras calcular su tabla',1));

document.write('<h1>Tabla del '+numero+'</h1>');
for (let i = 1; i <= 10; i++) {
    document.write(i+' x '+numero+' = '+(i*numero)+'<br>'); 
}

// Todas las tablas de multiplicar
for (let c = 1; c <= 10; c++) {
    document.write('<h1>Tabla del '+c+'</h1>');
    for (let i = 1; i <= 10; i++) {
        document.write(i+' x '+c+' = '+(i*c)+'<br>'); 
    }    
}
