


"use strict";


// Smooth scroll
$(function() {
    $('a[href*="#"]:not([href="#"])').on('click', function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});



// Reviews
(function() {

    var quotes = $(".testimonial");
    var quoteIndex = -1;
    
    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(1000)
            .delay(6000)
            .fadeOut(1000, showNextQuote);
    }
    
    showNextQuote();
})();



// Popup JS
function openPopup(elem) {
   $(elem).next().fadeIn(100).siblings(".popup").hide();
}

function closePopup() {
    $('.popup').fadeOut(100);
}