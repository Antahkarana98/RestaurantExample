$(document).ready(function () {


    $('.menu a').each(function (index, elemento) {
        $(this).css({
            'top': '-200px'
        });

        $(this).animate({
            'top': '0'
        }, 1500 + (index * 200));
    });

    if ($(window).width() > 800) {
        $('header .textos').css({
            opacity: 0,
            marginTop: 0
        });

        $('header .textos').animate({
            opacity: 1,
            marginTop: '-52px'
        }, 1500);
    }

    var acercaDe = $('#acercaDe').offset().top,
        menu = $('#platillos').offset().top,
        galeria = $('#galeria').offset().top,
        ubicacion = $('#ubicacion').offset().top;
    $('#btnAcercaDe').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: acercaDe - 200
        }, 500);
    });

    $('#btnMenu').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: menu - 100
        }, 500);
    });

    $('#btnGaleria').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: galeria + 10
        }, 500);
    });

    $('#btnUbicacion').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: ubicacion - 200
        }, 500);
    });
});