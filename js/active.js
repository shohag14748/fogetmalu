$(document).ready(function () {
$('.slider-inner').owlCarousel({
    loop: true,
    nav: false,
    dots: false,
//    autoplay: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})
})
