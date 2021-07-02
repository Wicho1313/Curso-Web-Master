'use strict'

var fecha = new Date();
console.log(fecha);

var year = fecha.getYear();

var textoHora = `
    El año es: ${year}
`;
console.log(textoHora);

year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDate();
var hora = fecha.getHours();
textoHora = `
    El año es: ${year}
    El mes es: ${mes+1} 
    El dia es: ${dia} 
    La hora es: ${hora} 
`;
console.log(textoHora);