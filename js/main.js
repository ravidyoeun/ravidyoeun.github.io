
(function($) {

    "use strict";

    jQuery(document).ready(function() {

        /*
         * -----------------------------------------------------------------
         *---------------------------Preloader------------------------------
         * -----------------------------------------------------------------
         */

        var themeWindow=$(window);
        var pagebody=$('html, body');

        themeWindow.on("load", function() {

            var preloader = jQuery('.preloader');
            var preloaderArea = jQuery('.preloader-area');
            preloader.fadeOut();
            preloaderArea.delay(200).fadeOut('slow');
            themeWindow.scrollTop(0);
        });



        /*
         * -----------------------------------------------------------------
         *-------------------single-page-nav-plugin------------------------
         * -----------------------------------------------------------------
         */



        // Prevent console.log from generating errors in IE for the purposes of the demo
        if (!window.console) console = {
            log: function() {}
        };

        // The actual plugin
        var singleNav = jQuery('.single-page-nav');
        singleNav.singlePageNav({
            offset: singleNav.outerHeight(),
            filter: ':not(.external)',
            updateHash: true,
            beforeStart: function() {
                console.log('begin scrolling');
            },
            onComplete: function() {
                console.log('done scrolling');
            }
        });



        /*
         * -----------------------------------------------------------------
         *-----------------------Scroll Top Events--------------------------
         * -----------------------------------------------------------------
         */



        var scrollTopBtn = $("#scroll-top-area");

        scrollTopBtn.on("click", function() {
            pagebody.animate({
                scrollTop: 0
            }, 2000);
        });


        themeWindow.on("scroll", function() {
            var top2 = themeWindow.scrollTop();
            var pageHeader=$("header");
            var scrollTopArea=$("#scroll-top-area");
            if (top2 < 150) {
                scrollTopArea.css('display', 'none');
            } else if (top2 >= 150) {
                scrollTopArea.css('display', 'block');
            }
            var scroll = themeWindow.scrollTop();

            if (scroll >= 70) {
                pageHeader.addClass("dark-header");
            } else {

                if (pageHeader.hasClass("dark-header")) {

                    pageHeader.removeClass("dark-header");

                }

            }
        });


        /*
         * -----------------------------------------------------------------
         *-------------------------button animation-------------------------
         * -----------------------------------------------------------------
         */



        var skillBtn = $(".skill-btn");
        var portfolio=$("#portfolio");
        skillBtn.on("click", function() {
            pagebody.animate({
                scrollTop: (portfolio.offset().top) - 60
            }, 2000);
        });


        /*
         * -----------------------------------------------------------------
         *------------------------------Typed.js----------------------------
         * -----------------------------------------------------------------
         */



        var element = $(".element");

        $(function() {
            element.typed({
                strings: ["#Full-stack Developer", " Designer(); "],
                typeSpeed: 100,
                loop: true,
            });
        });



        /*
         * -----------------------------------------------------------------
         *--------------------Animation using animate.css-------------------
         * -----------------------------------------------------------------
         */



        var animation1 = jQuery('.animation');

        animation1.waypoint(function() {
            var thisElement=$(this.element);
            var animation = thisElement.attr('data-animation');
            
            thisElement.css('opacity', '1');
            thisElement.addClass("animated " + animation).delay(2000);
        }, {
            offset: '75%',
        });




        /*
         * -----------------------------------------------------------------
         *-------------------------------Mixit Up---------------------------
         * -----------------------------------------------------------------
         */



        var portfolioContent = $('.portfolio-content');

        portfolioContent.mixItUp();



        /*
         * -----------------------------------------------------------------
         *-----------------------------lightbox-----------------------------
         * -----------------------------------------------------------------
         */



        lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true,
            showImageNumberLabel: false,
        });



        /*
         * -----------------------------------------------------------------
         *------------------------------slicknav----------------------------
         * -----------------------------------------------------------------
         */



        var menu = $("#menu");

        menu.slicknav({
            label: '',
        });


        /*
         * -----------------------------------------------------------------
         *--------------------------stellar.js------------------------------
         * -----------------------------------------------------------------
         */

        themeWindow.stellar();


        /*
         * -----------------------------------------------------------------
         *----------------------contact form ajax---------------------------
         * -----------------------------------------------------------------
         */



        var contactSubmit = $('#contact-submit');

        contactSubmit.on('click', function(e) {
            e.preventDefault();
            var name = $('#name').val();
            var email = $('#email').val();

            var message = $('#message').val();
            var form = new Array({
                'name': name,
                'email': email,
                'message': message
            });

            $.ajax({
                type: 'POST',
                url: "contact.php",
                data: ({
                    'action': 'contact',
                    'form': form
                })
            }).done(function(data) {

                var conResult=$('#contact .result');
                conResult.html(data);
                $(".contact-form-area")[0].reset();

            });

        });



        /*
         * -----------------------------------------------------------------
         *--------------------Owl Carousel For Testimonial------------------
         * -----------------------------------------------------------------
         */



        var testimonial = $("#client-testimonial #owl-demo-testimonial");

        testimonial.owlCarousel({
            items: 1, //1 item above 1000px browser width
            itemsDesktop: [1000, 1], //1 item between 1000px and 901px
            itemsDesktopSmall: [900, 1], //1 item betweem 900px and 601px
            itemsTablet: [600, 1], //1 item between 600 and 0
            itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
            autoPlay: 6000,
            pauseOnHover: true
        });

    });

})(jQuery);