!function(n){n.fn.menumaker=function(s){var e=n(this),i=n.extend({format:"dropdown",sticky:!1},s);return this.each(function(){return n(this).find(".button").on("click",function(){n(this).toggleClass("menu-opened");var s=n(this).next("ul");s.hasClass("open")?s.slideToggle().removeClass("open"):(s.slideToggle().addClass("open"),"dropdown"===i.format&&s.find("ul").show())}),e.find("li ul").parent().addClass("has-sub"),multiTg=function(){e.find(".has-sub").prepend('<span class="submenu-button"></span>'),e.find(".submenu-button").on("click",function(){n(this).toggleClass("submenu-opened"),n(this).siblings("ul").hasClass("open")?n(this).siblings("ul").removeClass("open").slideToggle():n(this).siblings("ul").addClass("open").slideToggle()})},"multitoggle"===i.format?multiTg():e.addClass("dropdown"),!0===i.sticky&&e.css("position","fixed"),resizeFix=function(){n(window).width()>1e3&&e.find("ul").show(),n(window).width()<=1e3&&e.find("ul").hide().removeClass("open")},resizeFix(),n(window).on("resize",resizeFix)})}}(jQuery),function(n){n(document).ready(function(){n("#cssmenu").menumaker({format:"multitoggle"})})}(jQuery);