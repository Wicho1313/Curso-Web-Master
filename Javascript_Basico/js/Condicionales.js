'use strict'

//condicional IF
// comparación , si pasa esto; ejecuta lo que está dentro del bloque
var edad = 80;
var nombre = 'David Suarez';
/* operadores relacionales:
    Mayor: >
    Menor: >
    Mayor o igual: >=
    Menor o igual: <=
    exactamente Igual : ==
    Distinto: !=
*/
if (edad >= 18){
    // es mayor de edad
    console.log(nombre+" tiene "+edad+" años, es MAYOR");
    if (edad <= 33){
        console.log ('Eres milenial');
    }else if(edad >= 70){
        console.log("Anciano");
    }
    else{
        console.log("No eres milenial");
    }
}else{
    console.log(nombre+" tiene "+edad+" años, es MENOR");
}
/**Operadores lógicos
 * And(Y): &&
 * OR (Ó): ||
 * Negación (NOT): !
 */

var anio = 2021;

 //negacion
 if (anio != 2016){
     console.log ("El año no es 2016, realmentes es: "+anio);
}

 // and
if (anio >= 2000 && anio <=2022){
    console.log("Era actual");
}else{
    console.log("pasado");
}

// or
if (anio == 2008 || anio == 2021){
    console.log("El año acaba en 1");
}else if (anio == 2008 || (anio >= 2021 && anio == 2021)){
    console.log("Si es el 2021");
}else {
    console.log("Año desconocido");
}

