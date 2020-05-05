$(function () {

    // back top button fadein fadeout / menu add class  
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 200) {
            $('.back-top').fadeIn(500);
        } else {
            $('.back-top').fadeOut(500);
        }

        if (scrolling > 200) {
            $('.navbar').addClass('navbg');
        } else {
            $('.navbar').removeClass('navbg');
        }
    });

    // back to top button    
    $('.back-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    })

    //venobox js
    $('.venobox').venobox({

    });


    //slick js

    $('.testimonial-slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        nextArrow: '<i class="fa fa-long-arrow-right round-next round-arrow" aria-hidden="true"></i>',
        prevArrow: '<i class="fa fa-long-arrow-left round-prev round-arrow" aria-hidden="true"></i>',
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }

  ]
    });


    //news slider js
    $('.news-slide').slick({
        dots: false,
        infinite: false,
        speed: 300,
        nextArrow: '<i class="fa fa-long-arrow-right round-next round-arrow" aria-hidden="true"></i>',
        prevArrow: '<i class="fa fa-long-arrow-left round-prev round-arrow" aria-hidden="true"></i>',
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }

  ]
    });


    //animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 85
                }, 1500);
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll link is clicked
    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

//preloader js
$(window).on('load', function(){
    $('.preloader').delay(500).fadeOut(500);
}); 





});
