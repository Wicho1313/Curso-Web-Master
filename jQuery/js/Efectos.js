$(document).ready(function () {
    var mostrar = $('#mostrar');
    var ocultar = $('#ocultar');
    var caja = $('#caja');

    mostrar.hide();
    mostrar.click(function () {
        $(this).hide();
        ocultar.show();
        // caja.show('fast');
        // caja.fadeIn('slow');
        // caja.fadeTo('slow',1);
        caja.slideDown('slow');
    });

    ocultar.click(function () {
        $(this).hide();
        mostrar.show();
        // caja.hide('normal');
        // caja.fadeOut('slow');
        // caja.fadeTo('slow',0);
        caja.slideUp('slow',function () {
            // la funcion de callback dentro del efecto 
            // sirve para cuando acabe de hacer el efecto
            // se pueda ejecutar codigo posteriormente
            console.log('Cartel ocultado');
        });

    });
    
    var todo = $('#todoenuno');
    
    todo.click(function () {
       // caja.toggle('fast');
       // caja.fadeToggle('fast');
       caja.slideToggle('fast');
    });

    var animar = $('#animar');

    animar.click(function () {
        caja.animate({marginLeft:'500px',
                    fontSize: '40px',
                    height: '110px'
                    },'slow')
            .animate({
                    borderRadius:'900px',
                    marginTop:'80px'
                    },'slow')
            .animate({
                borderRadius:'0px',
                marginLeft:'0px'
            },'slow')
            .animate({
                borderRadius:'100px',
                marginTop:'0px'
            },'slow');
    });

    console.log('Cargado');
});