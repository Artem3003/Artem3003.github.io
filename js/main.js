$(function () {
    $('.slider').slick({
        arrows: false,
        dots: true,
        fade: true,
        autoplay: 3000,
    });

    $('.header__btn').on('click', function() {
        $('.menu').addClass('active');
    });
    $('.menu__close-btn').on('click', function() {
        $('.menu').removeClass('active');
    });

    $('[data-fancybox]').fancybox({
        youtube : {
            controls : 0,
            showinfo : 0
        }
    });
});