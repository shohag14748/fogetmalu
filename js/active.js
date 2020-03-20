$(document).ready(function () {
//var animateInAll = $('.slider-inner');
//    animateInAll.owlCarousel({
//    loop: true,
//    nav: true,
//    dots: false,
//    autoplay: true,
//    navText: ['<i class="icofont-simple-left"></i>', '<i class="icofont-simple-right"></i>'],
//    responsive: {
//        0: {
//            items: 1
//        },
//        600: {
//            items: 1
//        },
//        1000: {
//            items: 1
//        }
//    }
//});
//    animateInAll.on("changed.owl-carousel",function(event){
//        var item=event.item.index-2;
//        $('h1').removeClass('animate fadeInUp');
//        $('.owl-item').not('.clone').eq(item).find('h1').addClass('animate slideInRight');
//    })
//    
   
//var owl = $('.slider-inner').owlCarousel({
////    animateOut: 'slideOutDown',
////    animateIn: 'slideInUp',
//    items:1,
//    margin:0,
//    stagePadding:0,
//    smartSpeed:450,
//    loop: true,
//    dots: true,
//    autoplay: true,
//});
//    owl.on('change.owl.carousel', function (event) {
////    var el = event.target;
//    $('h1').addClass('slideInRight animated')
//            .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
//                $('h1').removeClass('slideInUp animated');
//            });
//        });

$('.review-slider').owlCarousel({
    loop:true,
    nav:false,
    margin:30,
    autoHeight:true,
    dotsEach:1,
    autoplay: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
}) 
$('.feed-slider').owlCarousel({
    loop:true,
    nav:false,
    margin:0,
    autoHeight:true,
    dotsEach:1,
    autoplay: true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1200:{
            items:6
        }
    }
})    
    
})