$(document).ready(function () {

    console.log('cargado');

    // load (peticion a una pagina)
    // $(datos).load('https://reqres.in/'); // nos devuelve el HTML de la pag especificada entre comillas

    // GET - POST
    $.get('https://reqres.in/api/users',  {page: 2}, function (response) {
        console.log(response);
        response.data.forEach(element => {
            $('#datos').append('<p>'+element.first_name+' '+element.last_name+'</p>');
        });
    });

    var usuario = {
        'name': 'Luis Rojas',
        'web': 'https://github.com/Wicho1313'
    };

    
    $('#form').submit(function (e) {
        e.preventDefault();

        var usuario = {
            'name': $('input[name="name"]').val(),
            'web': $('input[name="web"]').val()
        };

        console.log(usuario);
        /**
         * 
         $.post($(this).attr('action'), usuario, function (response) {
             console.log(response);
         }).done(function () {
             alert('Usuario agregado satisfactoriamente');
         });
         */

        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: $(this).attr('action'),
            data: usuario,
            beforeSend: function () {
                console.log('Enviando usuario...');
            },
            success: function (response) {
                console.log('COMPLETADO: ',response);
            },
            error: function () {
                console.log('Ha ocurrido un error');
            },
            timeout: 2000
        });

        return false;
    });
});