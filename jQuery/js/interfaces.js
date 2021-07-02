$(document).ready(function () {
    console.log('cargado!!');

    // mover un elemento por la pagina
    $('.elemento').draggable();

    // redimencionar elementos
    $('.elemento').resizable();

    // seleccionar elementos
    // $('.lista').selectable();
    
    // ordenar elementos
    $('.lista').sortable();// cuando se usa no se puede usar selectable a la vez

    // dropable
    $('#elemento-movido').draggable();
    $('#area').droppable({
        drop: function () {
            console.log('Has soltado algo dentro del area');
        }
    });

    // efectos
    $('#mostrar').click(function () {
        $('.caja-efectos').fadeToggle();
    });

    // tooltip
    $(document).tooltip();

    // dialog
    $('#lanzarPopup').click(function() {
        $('#popup').dialog();
    });

    // datepicker
    $('#calendario').datepicker();

    // tabs
    $('#pestana').tabs();
});