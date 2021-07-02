'use strict'
$(document).ready(function () {
    reloadLinks();

    $('#add_button').click(function () {
        var link = $('#add_link').val();
        console.log(link);
        $('#menu').append('<li><a href="'+link+'"></a></li>');
        $('#add_link').val('');
        reloadLinks();
    });
    
    
    console.log('Cargado');
});

function reloadLinks() {
    $('a').each(function () {
        var that = $(this);
        var enlace = that.attr('href');
        console.log(enlace);
        that.attr('target','_blank');
        that.text(enlace);

    });
}