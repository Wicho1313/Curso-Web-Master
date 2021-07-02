'use strict'

// plantillas de texto
var nombre = prompt('Ingresa tu nombre: ');
var apellidos = prompt('Ingresa tus apellidos: ');

// para no hacer:
// var texto = 'mi nombre es: '+ nombre+'<br> mis apellidos: '+apellidos;
// documetn.write(texto);
// se hace con una plantilla de texto con las comillas invertidas ``

var texto = `
    <h1>Hola que tal</h1>
    <h3>Mi nombre es: ${nombre}</h3>
    <h3>Mis apellidos son: ${apellidos}</h3>
`;

document.write(texto);