$(document).ready(function(){$(".owl-facts").owlCarousel({loop:!0,margin:10,autoplay:!0,autoplayTimeout:5e3,autoplayHoverPause:!0,nav:!0,dots:!1,navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],responsive:{0:{items:1},1000:{items:1},2000:{items:1}}}),$(".client-slid").owlCarousel({loop:true,margin:0,nav:true,autoHeight:true,autoplay:true,autoplayTimeout:5000,dots:false,navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],responsive:{0:{items:1},767:{items:2},992:{items:3},1200:{items:4}}}),$(".lab-sld").owlCarousel({loop:!0,margin:13,nav:!1,singleItem:!0,autoHeight:!0,autoplay:!0,autoplayTimeout:5e3,dots:!0,navText:["<i class='ion-ios-arrow-back'></i>","<i class='ion-ios-arrow-forward'></i>"],responsive:{0:{items:1},767:{items:1},992:{items:3},1200:{items:3}}}),$("#testimonial-slider").owlCarousel({autoHeight:!0,items:1,itemsDesktop:[1e3,1],itemsDesktopSmall:[979,1],itemsTablet:[768,1],nav:!1,pagination:!0,autoplay:!0,autoplayTimeout:5e3}),$(document).ready(function(){$("#owl-demo").owlCarousel({navigation:!0,slideSpeed:300,paginationSpeed:400,autoplay:!0,items:1,itemsDesktop:!1,itemsDesktopSmall:!1,itemsTablet:!1,itemsMobile:!1})}),jQuery(document).ready(function(e){"use strict";e("#customers-testimonials").owlCarousel({loop:!0,center:!0,items:3,margin:0,autoplay:!0,dots:!0,autoplayTimeout:8500,smartSpeed:450,responsive:{0:{items:1},768:{items:2},1170:{items:3}}})}),$("#toggle").click(function(){$(this).toggleClass("on"),$("#resize").toggleClass("active")})});