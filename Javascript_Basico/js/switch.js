'use strict'

// condicional switch

var edad = 40;
var imprime = "";
switch (edad){
    case 18:
        imprime = "Acabas de cumplir la mayoría de edad";
    break;

    case 20:
        imprime = "Adulto";
    break;

    case 40:
        imprime = "Crisis de los 40";
    break;

    case 75:
        imprime = "Eres anciano";
    break;

    default:
        imprime = "Tu edad es neutra";
    break;
}

console.log (imprime);