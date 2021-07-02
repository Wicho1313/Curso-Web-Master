$(document).ready(function(){
    // slider
    if (window.location.href.indexOf("index") > -1) {
       
        $('.galeria').bxSlider({
            mode:'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true        
        });
    }
    // Posts
    if (window.location.href.indexOf("index") > -1) {
        var posts = [
            {
            title: 'Title test',
            date: 'Publicado el dia ' + moment().format('dddd DD') + ' de ' + moment().format('MMMM') + ' de ' + moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec augue lacus. Curabitur diam tortor, mollis eu purus in, semper accumsan neque. Aenean non volutpat orci. Praesent pharetra ullamcorper sapien placerat tempor. Aenean nec lobortis tortor, vitae ultricies lacus. Pellentesque imperdiet, sem hendrerit lobortis porta, lectus quam hendrerit arcu, eu iaculis eros tortor nec nisl. Nulla vitae feugiat ante, vel cursus neque. Praesent faucibus purus in vehicula consequat. Integer elit tortor, dapibus a fermentum ut, blandit ac mi. Mauris vitae dui vel magna condimentum molestie sit amet at metus. Mauris a volutpat velit. Proin ornare vestibulum aliquet. Maecenas gravida ut lacus eget malesuada. Donec lorem nisl, tempus vitae tincidunt id, venenatis quis odio. Nunc vel pretium sapien, id placerat mi. Phasellus hendrerit tellus id viverra suscipit.'
            },
                    
            {title: 'Title test 2',
            date: 'Publicado el dia ' + moment().format('dddd DD') + ' de ' + moment().format('MMMM') + ' de ' + moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec augue lacus. Curabitur diam tortor, mollis eu purus in, semper accumsan neque. Aenean non volutpat orci. Praesent pharetra ullamcorper sapien placerat tempor. Aenean nec lobortis tortor, vitae ultricies lacus. Pellentesque imperdiet, sem hendrerit lobortis porta, lectus quam hendrerit arcu, eu iaculis eros tortor nec nisl. Nulla vitae feugiat ante, vel cursus neque. Praesent faucibus purus in vehicula consequat. Integer elit tortor, dapibus a fermentum ut, blandit ac mi. Mauris vitae dui vel magna condimentum molestie sit amet at metus. Mauris a volutpat velit. Proin ornare vestibulum aliquet. Maecenas gravida ut lacus eget malesuada. Donec lorem nisl, tempus vitae tincidunt id, venenatis quis odio. Nunc vel pretium sapien, id placerat mi. Phasellus hendrerit tellus id viverra suscipit.'
            },
            {title: 'Title test 3',
            date:'Publicado el dia ' + moment().format('dddd DD') + ' de ' + moment().format('MMMM') + ' de ' + moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec augue lacus. Curabitur diam tortor, mollis eu purus in, semper accumsan neque. Aenean non volutpat orci. Praesent pharetra ullamcorper sapien placerat tempor. Aenean nec lobortis tortor, vitae ultricies lacus. Pellentesque imperdiet, sem hendrerit lobortis porta, lectus quam hendrerit arcu, eu iaculis eros tortor nec nisl. Nulla vitae feugiat ante, vel cursus neque. Praesent faucibus purus in vehicula consequat. Integer elit tortor, dapibus a fermentum ut, blandit ac mi. Mauris vitae dui vel magna condimentum molestie sit amet at metus. Mauris a volutpat velit. Proin ornare vestibulum aliquet. Maecenas gravida ut lacus eget malesuada. Donec lorem nisl, tempus vitae tincidunt id, venenatis quis odio. Nunc vel pretium sapien, id placerat mi. Phasellus hendrerit tellus id viverra suscipit.'
            },
            {title: 'Title test 4',
            date: 'Publicado el dia ' + moment().format('dddd DD') + ' de ' + moment().format('MMMM') + ' de ' + moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec augue lacus. Curabitur diam tortor, mollis eu purus in, semper accumsan neque. Aenean non volutpat orci. Praesent pharetra ullamcorper sapien placerat tempor. Aenean nec lobortis tortor, vitae ultricies lacus. Pellentesque imperdiet, sem hendrerit lobortis porta, lectus quam hendrerit arcu, eu iaculis eros tortor nec nisl. Nulla vitae feugiat ante, vel cursus neque. Praesent faucibus purus in vehicula consequat. Integer elit tortor, dapibus a fermentum ut, blandit ac mi. Mauris vitae dui vel magna condimentum molestie sit amet at metus. Mauris a volutpat velit. Proin ornare vestibulum aliquet. Maecenas gravida ut lacus eget malesuada. Donec lorem nisl, tempus vitae tincidunt id, venenatis quis odio. Nunc vel pretium sapien, id placerat mi. Phasellus hendrerit tellus id viverra suscipit.'
        }];    
            console.log(posts);
            
            posts.forEach((item, index) => {
                var post = `
                <article class ='post'>
                <h2> ${item.title}</h2>
                <span class = 'date'> ${item.date}</span>
                <p>
                ${item.content}
                </p>
                <a href = '#' class ='button-more'>Leer mas </a> 
                </article>
                `;
                console.log(posts);
                $('#posts').append(post);
            });
    }
    // Selector de tema
    var theme = $("#theme");
    $('#to-green').click(function(){
        theme.attr('href', 'css/green.css')
    });
    $('#to-blue').click(function(){
        theme.attr('href', 'css/blue.css')
    });
    $('#to-red').click(function(){
        theme.attr('href', 'css/red.css')
    });
    // scroll arriba
    $('.subir').click(function (e) {
        e.preventDefault();
        $('html, body') .animate({
            scrollTop:0
        }, 500);
        return false;
    });
    // login fake
    $('#login form').submit(function () {
        var form_name = $('#form_name').val();
        localStorage.setItem("form_name",form_name);
    });
    var form_name = localStorage.getItem('form_name');
    if (form_name != null && form_name != 'undefined'){
        var about = $('#about p');
        about.html('<br><strong>#bienvenido, '+form_name+'</strong>');
        about.append('<a href="#" id="logout">Cerrar sesion</a>' );

        $('#login').hide();

        $('#logout').click(function () {
            localStorage.clear();
            location.reload();
        });
    }
    // acordeon
    if (window.location.href.indexOf("aboutMe") > -1) {
        $('#acordeon').accordion();
    }
    // Reloj
    if(window.location.href.indexOf('reloj') > -1){

        setInterval(function(){
                var reloj = moment().format("hh:mm:ss");
                $('#reloj').html(reloj);
        }, 1000);
        
    
    }

    // Validación
    if(window.location.href.indexOf('contact') > -1){
    
        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });

        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        });

    }

});
