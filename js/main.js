$(function(){
    $('.photo__slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-left"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-right"><img src="images/arrow-right.svg" alt=""></button>',
        autoplay: true, 
    });

    $('.menu__btn').on('click', function(){
        $('.menu__list').slideToggle();
    });
});