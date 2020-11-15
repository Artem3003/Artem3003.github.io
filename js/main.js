$(function(){

    //делает чтобы меню выежало в низ
    $('.menu__btn').on('click', function() {
        $('.menu__list').toggleClass('menu__list--active')
    });

    $('.heroes__slider-img').slick({
        prevArrow: '<button type="button" class="slider-btn slider-btn__left"><img src="images/arrow-left.png" alt=""></button>',
        nextArrow: '<button type="button" class="slider-btn slider-btn__right"><img src="images/arrow-right.png" alt=""></button>',
        slidesToShow: 1,
        sliderToScroll: 1,
        asNavFor: '.heroes__slider-text',
        responsive: [
            {
                breakpoint: 639,
                settings:{
                    arrows: false,
                }
            }
        ]
    });

    $('.heroes__slider-text').slick({
        slidesToShow: 1,
        sliderToScroll: 1,
        asNavFor: '.heroes__slider-img',
        fade: true,
        arrows: false
    });
});