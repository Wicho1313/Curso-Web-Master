'use strict'

window.addEventListener('load', function () {
    // fetch (ajax) y peticiones a servicios  / api rest 
    var div_usuarios = document.querySelector('#usuarios');
    var div_janet = document.querySelector('#janet');
    
    
    getUsuarios()
    .then(data => data.json())
    .then(users => {
        listadoUsuarios(users.data);
        return getJanet();
    })
    .then(data => data.json())
    .then(user =>  {
        mostrarJanet(user.data);

        return getInfo();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => { // si no se resuelve la peticion fetch
        console.log(error + ' Error en las peticiones'); // se captura el error
        alert(' Error en las peticiones');
    });

    function getUsuarios() {
        return fetch('https://reqres.in/api/users');
    }

    function getJanet() {
        return fetch('https://reqres.in/api/users/2');        
    }

    function getInfo() {
        var profesor = {
            nombre: 'Victor',
            apellidos: 'Robles',
            web: 'https://victorroblesweb.es'
        };

        return new Promise((resolve, reject) => {
            var profesor_string = JSON.stringify(profesor);
            if (typeof profesor_string != 'string' || profesor_string == '') return reject('Error, no es string o es vacio');
            
            return resolve(profesor_string);
        });
    }

    function listadoUsuarios(usuarios) {
        usuarios.map((user, i) => {
            let nombre = document.createElement('h3');
            nombre.innerHTML = i + '. ' + user.first_name + ' '+ user.last_name;
            div_usuarios.appendChild(nombre);
            document.querySelector('.loading').style.display = 'none';
        });
    }

    function mostrarJanet(user) {
        let nombre = document.createElement('h4');
        let avatar = document.createElement('img');
        
        avatar.src = user.avatar;
        avatar.width = '100';

        nombre.innerHTML = user.first_name + ' '+ user.last_name;
        div_janet.appendChild(nombre);
        div_janet.appendChild(avatar);
        document.querySelector('#janet .loading').style.display = 'none';
    }
}); 