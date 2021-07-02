$(document).ready(function () {
    console.log('Cargado');
    // Eventos MouseOver y MouseOut
    var caja = $('#caja');
    /** 
    caja.mouseover(function () {
        $(this).css('background','red');
    });
    
    caja.mouseout(function () {
        $(this).css('background','green');
    });
    */
    function cambia_rojo() {
        $(this).css('background','red');
    }
    function cambia_verde() {
        $(this).css('background','green');
    }
    //hover -> los 2 anteriores
    caja.hover(cambia_rojo,cambia_verde);

    // click, dobleclick
    caja.click(function () {
        $(this).css('background','blue')
                .css('color','white');
    });

    caja.dblclick(function () {
        $(this).css('background','pink')
                .css('color','yellow');
    });

    // focus y blur
    var nombre = $('#nombre');
    var datos = $('.datos');
    nombre.focus(function () {
        $(this).css('border','5px solid red');
    });
    
    nombre.blur(function () {
        $(this).css('border','1px solid #ccc');
        
        datos.text($(this).val()).show();
    });

    // mouseDown y Mouseup
    datos.mousedown(function () {
       $(this) .css('border-color','gray')
    });

    datos.mouseup(function () {
        $(this) .css('border-color','black')
     });

     // mousemove
    $(document).mousemove(function () {
        
        console.log('En X: ', event.clientX);
        console.log('En Y: ', event.clientY);
        $('body').css('cursor','none');
        $('#sigueme').css('left', event.clientX)
                .css('top', event.clientY);
    })
});