'use strict'

// DOM - Document Object Model

function cambiaColor(color) {
    caja.style.background = color;
}
// conseguir el elemento por su id (unico)
// var caja = document.getElementById('caja');
var caja = document.querySelector('#caja');

caja.innerHTML = 'Texto en la caja';
caja.style.background = 'red';
caja.style.padding = '20px';
caja.style.color = 'white';
caja.className = 'Hola';

console.log(caja);

// conseguir todos los elementos por su etqiueta
var todosDivs = document.getElementsByTagName('div');
console.log(todosDivs);
var seccion = document.querySelector('#miSection');

var hr = document.createElement('hr');
for (const valor in todosDivs) {
    if (typeof todosDivs[valor].textContent == 'string') {
        var parrafo = document.createElement('p');
        var texto = document.createTextNode(todosDivs[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
        
    }
}
seccion.append(hr);

// conseguir elementos por su clase
var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillo = document.getElementsByClassName('amarillo');
// regresa una coleccion de elementos html (array)
divsAmarillo[0].style.backgroundColor = 'yellow';

for (const div in divsRojos) {
    if (divsRojos[div].className == 'rojo') {
        divsRojos[div].style.backgroundColor = 'red';
        
    }
}

