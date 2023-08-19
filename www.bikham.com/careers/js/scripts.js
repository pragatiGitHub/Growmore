(function($) {
    $(document).ready(function() {
        "use strict";

        // SLIDER
        var swiper = new Swiper('.swiper-slider', {
            speed: 600,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: function(index, className) {
                    return '<span class="' + className + '">0' + (index + 1) + '</span>';
                },
            },
        });

        // PAGE TRANSITION
        $('body a').on('click', function(e) {

			if (typeof $( this ).data('fancybox') == 'undefined') {
			e.preventDefault(); 
			var url = this.getAttribute("href"); 
			if( url.indexOf('#') != -1 ) {
			var hash = url.substring(url.indexOf('#'));

			if( $('body ' + hash ).length != 0 ){
			$('.transition-overlay').removeClass("active");
			$(".hamburger").toggleClass("open");
			$("body").toggleClass("overflow");
			$(".navigation-menu").removeClass("active");
			$(".navigation-menu .inner ul").css("", "");
			$(".navigation-menu .inner blockquote").css("", "");
			//$(".navigation-menu .bg-layers span").css("", "");

			$('html, body').animate({
			scrollTop: $(hash).offset().top
			}, 1000);

			}
			}
			else {
			$('').toggleClass("active");
			setTimeout(function(){
			window.location = url;
			},1000); 

			}
			}
			});





        // HAMBURGER MENU
        $('.hamburger').on('click', function(e) {
            if ($(".navigation-menu").hasClass("active")) {
                $(".hamburger").toggleClass("open");
                $("body").toggleClass("overflow");
                $(".navigation-menu").removeClass("active");
                $(".navigation-menu .inner .menu").css("", "");
                $(".navigation-menu .inner blockquote").css("", "");
                //$(".navigation-menu .bg-layers span").css("", "");
            } else {
                $(".navigation-menu").addClass('active');
                $(".hamburger").toggleClass("open");
                $("body").toggleClass("overflow");
                $(".navigation-menu.active .inner .menu").css("");
                $(".navigation-menu.active .inner blockquote").css("", "");
                //$(".navigation-menu .bg-layers span").css("", "");
            }
            $(this).toggleClass("active");
        });





        // PAGE HEADER FADE
        var divs = $('header');
        $(window).on('scroll', function() {
            var st = $(this).scrollTop();
            divs.css({
                'opacity': (1 - st / 700)
            });
            divs.css({
                '': ("")
            });
            divs.css({
                '': ("")
            });
        });




    });
    // END JQUERY	




    // WOW ANIMATION 
    wow = new WOW({
        animateClass: 'animated',
        offset: 0
    });
    wow.init();


    // PRELOADER
    $(window).load(function() {
        $("body").addClass("page-loaded");
    });


    //baguetteBox.run('.tz-gallery');

})(jQuery);