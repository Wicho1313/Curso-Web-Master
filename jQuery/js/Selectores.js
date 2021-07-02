// simbolo dollar $ es jQuery y tambien se puede poner la palabra jQuery (objeto)
// dentro del parentesis hay un selector al que se le puede dar un metodo (en este caso ready)
// dentro del metodo hay una funcion de callback
$(document).ready(function () {
    // codigo 
    console.log('estamos listos!!!') ;
    // selector de ID
    var rojo = $('#rojo').css('background','red')
                        .css('color','white');
    $('#amarillo').css('background','yellow')
                .css('color','black');
    $('#verde').css('background','green')
                .css('color','white');
    console.log(rojo);
    
    // identificador de clase
    var mi_clase = $('.zebra');

    console.log(mi_clase);

    mi_clase.css('border','5px dashed black');

    $('.sin_borde').click(function () {
       console.log('Has dado click');
       let este = $(this);
       este.addClass('.zebra');
       este.css('border','5px dashed black');
    });

    // selectores de etiqueta
    var parrafos = $('p').css('cursor', 'pointer');

    parrafos.click(function () {
        let este = $(this);
        if (este.hasClass('zebra')) {
            este.removeClass('zebra');             
        } else {
            
        }
    });

    // selectores de atributo
    $('[title="google"]').css('background', '#ccc');
    $('[title="facebook"]').css('background','blue').css('color','white');

    // find - parent
    $('p, a').addClass('margen-superior');
    var busqueda = $('#caja').find('.resaltado');
    console.log(busqueda);
    var busqueda2 = $('#elemento1').parent().parent().find('.resaltado');
    console.log(busqueda2);

});