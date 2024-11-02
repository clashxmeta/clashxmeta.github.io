'use strict'


/* ::::::::::::::: Feather Icons ::::::::::::::: */
feather.replace();
        
$(document).ready(function() {
	
	/* ::::::::::::::: Navbar ::::::::::::::: */
	
	// $('.navbar-collapse a').click(function(){
	// 	$(".navbar-collapse").collapse('hide');
	// });

	// $('.nav-item a').click(function(){
	// 	$('.nav-item a').removeClass('active');
	// 	$(this).addClass('active');
	// });

	function fixedNavbar() {
		var scroll = $(window).scrollTop();
		if( scroll > 30){
			$('.fixed-top').addClass("navbar-scrolling");
		} else {
			$('.fixed-top').removeClass("navbar-scrolling");
		}
	}
	fixedNavbar();
	$(window).scroll(fixedNavbar)
	
	// $('body').scrollspy({ target: '#navbarNav' })
	
	/* ::::::::::::::: Page Preloader ::::::::::::::: */
	Pace.on('done', function () {
		$('#preloader').addClass("isdone");
	});

	/* ::::::::::::::: Scroll animation ::::::::::::::: */
	// var wow = new WOW(
	// 	{
	// 		boxClass:     'wow',
	// 		animateClass: 'animate__animated',
	// 		offset:       0,
	// 		mobile:       false,
	// 		live:         true
	// 	}
	// )
	// wow.init();
	
	/* ::::::::::::::: Back to Top ::::::::::::::: */
	var backTop = $('#back-to-top');

	$(window).scroll(function() {
	if ($(window).scrollTop() > 300) {
		backTop.addClass('show');
	} else {
		backTop.removeClass('show');
	}
	});

	backTop.on('click', function(e) {
		$('html, body').animate({scrollTop:0}, '300');
	});
	
	/* ::::::::::::::: Popup Video ::::::::::::::: */
	// $("a.popup-video").YouTubePopUp( { autoplay: 0 } );
})