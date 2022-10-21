(function ($) {
    'use strict';

    new WOW({offset: 1, animateClass: 'animate__animated' }).init();
    
    // $(window).stellar();
    
    /* ----------------------------------------------------------- */
    /*  Fixed Header
    /* ----------------------------------------------------------- */
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 150) {
            if (!$('.navbar').hasClass('scrolled')) {
                $('.navbar').addClass('scrolled');
            }
        } 
        
        if ($(window).scrollTop() < 150) {
            if ($('.navbar').hasClass('scrolled')) {
                $('.navbar').removeClass('scrolled sleep');            
            }            
        }

        if ($(window).scrollTop() > 350) {
            if (!$('.navbar').hasClass('awake')) {
                $('.navbar').addClass('awake');            
            }
        } 
        
        if ($(window).scrollTop() < 350) {            
            if ($('.navbar').hasClass('awake')) {
                $('.navbar').removeClass('awake');
                $('.navbar').addClass('sleep');
            }
        }
    });

})(window.jQuery);

