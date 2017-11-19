// JavaScript Document

$(window).scroll(function() {
	var headerOrgOffset = 20;
    var currentScroll = $(this).scrollTop();
    if(currentScroll > headerOrgOffset) {
        if (currentScroll > previousScroll) {
            $('header').addClass('scrolled');
			$('.navigation').addClass('scrolled');
        } else {
         	$('header').removeClass('scrolled');
			$('.navigation').removeClass('scrolled');
        }
    } else {
         $('header').removeClass('scrolled');  
		 $('.navigation').removeClass('scrolled');   
    }
    previousScroll = currentScroll;
});

