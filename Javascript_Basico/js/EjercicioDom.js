'use strict'

window.addEventListener('load', function () {
    console.log('DOM cargado!!');

    var form = document.querySelector('#formulario');
    var box_dashed = document.querySelector('.dashed');
    box_dashed.style.display = 'none';

    form.addEventListener('submit',function () {
        console.log('Evento submit capturad');
        
        var nombre = document.querySelector('#nombre').value;
        var apellido = document.querySelector('#apellido').value;
        var edad = parseInt(document.querySelector('#edad').value);
        
        if (nombre.trim() == null || nombre.trim().length == 0) {
            alert('Inserte un nombre valido');
        } 
        if (apellido.trim() == null || apellido.trim().length == 0) {
            alert('Inserte un apellido valido');
        } 
        if (edad == null || edad <= 0 || isNaN(edad)) {
            alert('Inserte un edad valido');
        } 

        box_dashed.style.display = 'block';

        var datos_usuario = [nombre, apellido, edad];

        for (var dato in datos_usuario) {
            var parrafo = document.createElement('p');
            parrafo.append(datos_usuario[dato]);
            box_dashed.append(parrafo);
        }
    
    });

});